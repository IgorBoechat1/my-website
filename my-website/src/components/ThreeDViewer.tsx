"use client";

import React, { useEffect, useRef, useCallback } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { throttle } from "lodash"; // Import lodash throttle function

type ThreeDViewerProps = {
  modelPath: string;
};

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const controls = useRef<OrbitControls | null>(null);
  const animationFrameId = useRef<number>(0);
  const modelRef = useRef<THREE.Object3D | null>(null); // Reference to the loaded model

  const rotationSpeed = 0.005; // Adjust this value to control the speed of the model rotation
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const windowHalfX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const windowHalfY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  const lastTouchX = useRef(0);
  const lastTouchY = useRef(0);
  const inertia = useRef({ x: 0, y: 0 });

  const initializeScene = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    // Camera setup
    camera.current = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.current.position.set(0, 0, 5); // Position the camera directly in front of the model

    // Scene and renderer setup
    scene.current = new THREE.Scene();
    renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.current.setSize(container.clientWidth, container.clientHeight);
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setClearColor(0x000000, 0); // Transparent background
    renderer.current.shadowMap.enabled = true; // Enable shadow maps
    renderer.current.shadowMap.type = THREE.PCFSoftShadowMap; // Soft shadow map
    container.appendChild(renderer.current.domElement);

    // Lighting setup (subtle hologram lighting)
    addLightsToScene();

    // Orbit controls setup, but with no rotation or zooming
    setupControls();
  }, []);

  const addLightsToScene = () => {
    const directionalLight = new THREE.DirectionalLight(0xBB3D36, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true; // Enable shadows for the light
    directionalLight.shadow.mapSize.width = 1024; // Shadow map resolution
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5; // Shadow camera near plane
    directionalLight.shadow.camera.far = 500; // Shadow camera far plane
    scene.current?.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xBB3D36, 0.9);
    scene.current?.add(ambientLight);
  };

  const setupControls = () => {
    controls.current = new OrbitControls(camera.current!, renderer.current!.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.1;
    controls.current.enableZoom = false; // Enable zoom
    controls.current.enableRotate = false; // Enable rotation
    controls.current.autoRotate = false; // Disable auto-rotation
  };

  const loadModel = useCallback((modelPath: string) => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        console.log("Model loaded successfully:", gltf);

        const model = gltf.scene;
        model.scale.set(2.5, 2.5, 2.5);  // Ensure correct scaling
        model.position.set(0, -1.0, 0);  // Center the model
        model.rotation.set(0, 5, 0);  // Rotate the model 90 degrees on the Y-axis
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true; // Enable shadows for the model
            child.receiveShadow = true; // Enable shadows for the model

            // Create a gradient texture
            const canvas = document.createElement('canvas');
            canvas.width = 2;
            canvas.height = 256;
            const context = canvas.getContext('2d');
            const gradient = context!.createLinearGradient(0, 0, 0, 256);
            gradient.addColorStop(0, '#00ff00'); // Green
            gradient.addColorStop(1, '#ff0000'); // Red
            context!.fillStyle = gradient;
            context!.fillRect(0, 0, 2, 256);
            const gradientTexture = new THREE.CanvasTexture(canvas);

            // Apply custom shader material
            const material = new THREE.ShaderMaterial({
              uniforms: {
                lightPos: { value: new THREE.Vector3(5, 5, 5) },
                viewPos: { value: camera.current!.position },
                gradientTexture: { value: gradientTexture },
              },
              vertexShader: `
                varying vec3 FragPos;
                varying vec3 Normal;

                void main() {
                  FragPos = vec3(modelMatrix * vec4(position, 1.0));
                  Normal = mat3(transpose(inverse(modelMatrix))) * normal;

                  gl_Position = projectionMatrix * viewMatrix * vec4(FragPos, 1.0);
                }
              `,
              fragmentShader: `
                uniform vec3 lightPos;
                uniform vec3 viewPos;
                uniform sampler2D gradientTexture;

                varying vec3 FragPos;
                varying vec3 Normal;

                void main() {
                  // Calculate lighting
                  vec3 lightColor = vec3(2.0, 2.0, 1.9); // Change this to modify the light color
                  vec3 ambient = 0.2 * lightColor;

                  vec3 norm = normalize(Normal);
                  vec3 lightDir = normalize(lightPos - FragPos);
                  float diff = max(dot(norm, lightDir), 0.0);
                  vec3 diffuse = diff * lightColor;

                  vec3 viewDir = normalize(viewPos - FragPos);
                  vec3 reflectDir = reflect(-lightDir, norm);
                  float spec = pow(max(dot(viewDir, reflectDir), 0.0), 32.0);
                  vec3 specular = spec * lightColor;

                  vec3 result = ambient + diffuse + specular;

                  // Apply gradient color
                  float height = (FragPos.y + 1.0) / 2.0; // Normalize height to [0, 1]
                  vec3 gradientColor = texture2D(gradientTexture, vec2(0.5, height)).rgb;

                  gl_FragColor = vec4(result * gradientColor, 1.0); // Change this to modify the final color
                }
              `,
              transparent: true,
              depthWrite: false,
            });
            child.material = material; // Assign the new material

            // Apply wireframe geometry
            const wireframe = new THREE.WireframeGeometry(child.geometry);
            const line = new THREE.LineSegments(wireframe);
            (line.material as THREE.Material).depthTest = false;
            (line.material as THREE.Material).opacity = 0.25;
            (line.material as THREE.Material).transparent = true;
            child.add(line);
          }
        });

        scene.current?.add(model);
        modelRef.current = model; // Store reference to the model
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );
  }, []);

  const animate = useCallback(() => {
    if (scene.current && renderer.current && camera.current) {
      // Rotate the model based on mouse position
      if (modelRef.current) {
        targetX.current = mouseX.current * 0.011;
        targetY.current = mouseY.current * 0.001;

        modelRef.current.rotation.y += 0.05 * (targetX.current - modelRef.current.rotation.y);
        modelRef.current.rotation.x += 0.05 * (targetY.current - modelRef.current.rotation.x);

        // Apply inertia
        modelRef.current.rotation.y += inertia.current.x;
        modelRef.current.rotation.x += inertia.current.y;

        // Decay inertia over time
        inertia.current.x *= 0.95;
        inertia.current.y *= 0.95;
      }

      // Render the scene
      renderer.current.render(scene.current, camera.current);
      animationFrameId.current = requestAnimationFrame(animate);
    }
  }, [rotationSpeed]);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    mouseX.current = (event.clientX - windowHalfX);
    mouseY.current = (event.clientY - windowHalfY);
  }, [windowHalfX, windowHalfY]);

  const handleTouchStart = useCallback((event: TouchEvent) => {
    if (event.touches.length === 1) {
      lastTouchX.current = event.touches[0].clientX;
      lastTouchY.current = event.touches[0].clientY;
    }
  }, []);

  const handleTouchMove = useCallback((event: TouchEvent) => {
    if (event.touches.length === 1 && modelRef.current) {
      const touchX = event.touches[0].clientX;
      const touchY = event.touches[0].clientY;

      const deltaX = touchX - lastTouchX.current;
      const deltaY = touchY - lastTouchY.current;

      modelRef.current.rotation.y += deltaX * 0.002;
      modelRef.current.rotation.x += deltaY * 0.002;

      // Update inertia
      inertia.current.x = deltaX * 0.002;
      inertia.current.y = deltaY * 0.002;

      lastTouchX.current = touchX;
      lastTouchY.current = touchY;
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    initializeScene();
    loadModel(modelPath);
    animate();
  
    const container = containerRef.current;
    const handleResize = () => {
      if (!container || !camera.current || !renderer.current) return;
      camera.current.aspect = container.clientWidth / container.clientHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(container.clientWidth, container.clientHeight);
    };
  
    window.addEventListener("resize", handleResize);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
  
    // Handle mobile-specific behavior
    const handleMobileControls = () => {
      if (window.innerWidth <= 768) {
        controls.current?.dispose();
        controls.current = null;
      } else {
        setupControls();
      }
    };
  
    handleMobileControls();
    window.addEventListener("resize", handleMobileControls);
  
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleMobileControls);
  
      cancelAnimationFrame(animationFrameId.current);
  
      if (renderer.current && container) {
        container.removeChild(renderer.current.domElement);
      }
  
      controls.current?.dispose();
      renderer.current?.dispose();
    };
  }, [modelPath, initializeScene, loadModel, animate, handleMouseMove, handleTouchStart, handleTouchMove]);
  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
      }}
    />
  );
};

export default ThreeDViewer;