"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

type ThreeDViewerProps = {
  modelPath: string;
};

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const controls = useRef<OrbitControls | null>(null);
  const particles = useRef<THREE.Mesh[]>([]); // Store particle mesh objects
  const animationFrameId = useRef<number>(0);

  const colors = [
    "#7F9A33", "#667C29", "#4F6020", "#384416", "#21280D",
    "#270D0B", "#431613", "#5F1F1B", "#7B2621", "#982E29", "#B63831", "#D24039"
  ];

  const rotationSpeed = 0.005; // Adjust this value to control the speed of the camera orbit

  const initializeScene = () => {
    const container = containerRef.current;
    if (!container) return;

    // Camera setup
    camera.current = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.current.position.set(0, 1, 2);

    // Scene and renderer setup
    scene.current = new THREE.Scene();
    renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.current.setSize(container.clientWidth, container.clientHeight);
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.current.domElement);

    // Lighting setup (subtle hologram lighting)
    addLightsToScene();

    // Orbit controls setup, but with no rotation or zooming
    setupControls();
  };

  const addLightsToScene = () => {
    const directionalLight = new THREE.DirectionalLight(0xBB3D36, 1);
    directionalLight.position.set(5, 5, 5);
    scene.current?.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xBB3D36, 0.9);
    scene.current?.add(ambientLight);
  };

  const setupControls = () => {
    controls.current = new OrbitControls(camera.current!, renderer.current!.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.1;
    controls.current.enableZoom = false; // Disable zoom
    controls.current.enableRotate = true; // Disable rotation
    controls.current.autoRotate = false; // Disable auto-rotation
  };

  const loadModel = (modelPath: string) => {
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        console.log("Model loaded successfully:", gltf);

        const model = gltf.scene;
        model.scale.set(1, 1, 1);  // Ensure correct scaling
        model.position.set(0, 0, 0);  // Center the model

        // Apply transparency to the model material
        model.traverse((child) => {
          if (child.isMesh) {
            const material = new THREE.MeshBasicMaterial({
              color: 0xffffff, // Base color for transparency
              transparent: true,
              opacity: 0.2, // Adjust transparency
              depthWrite: false, // Ensure particles are visible in front
            });
            child.material = material;
          }
        });

        // Convert model geometry to holographic particles
        createParticlesFromModel(model);
        scene.current?.add(model);
      },
      undefined,
      (error) => {
        console.error("Error loading model:", error);
      }
    );
  };

  const createParticlesFromModel = (model: THREE.Object3D) => {
    const geometry = new THREE.SphereGeometry(0.005, 6, 6); // Small particles for hologram effect
    const material = new THREE.MeshBasicMaterial({
      color: 0xBB3D36, // Initial particle color
      transparent: true,
      opacity: 0.7, // Slight transparency for holographic look
      blending: THREE.AdditiveBlending, // Additive blending for glow effect
      depthWrite: false,
    });

    // Traverse the model to sample surface points for particles
    model.traverse((obj) => {
      if (obj.isMesh) {
        const sampler = new MeshSurfaceSampler(obj).build();
        const numParticles = 5000; // Reduce the number of particles for better performance
        for (let i = 0; i < numParticles; i++) {
          const sample = new THREE.Vector3();
          sampler.sample(sample);
          obj.localToWorld(sample); // Transform to world coordinates

          // Create particle and add to the scene
          const particle = new THREE.Mesh(geometry, material);
          particle.position.copy(sample);
          particles.current.push(particle);
          scene.current?.add(particle);
        }
      }
    });
  };

  const animate = () => {
    if (scene.current && renderer.current && camera.current) {
      // Camera orbital animation with slower speed
      const time = Date.now() * 0.0002 * rotationSpeed; // Slower rotation speed
      camera.current.position.x = Math.sin(time) * 3;
      camera.current.position.z = Math.cos(time) * 3;
      camera.current.lookAt(0, 0, 0); // Keep the camera looking at the center
  
      // Rotate the model around its own axis (you can adjust these values)
      if (scene.current) {
        scene.current.rotation.y += 0.002; // Slow rotation around the Y axis
      }
  
      // Rotate particles for dynamic effect
      particles.current.forEach(particle => {
        particle.rotation.x += 0.01;
        particle.rotation.y += 0.01;
      });
  
      // Render the scene
      renderer.current.render(scene.current, camera.current);
      animationFrameId.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    initializeScene();
    loadModel(modelPath);

    // Start the animation loop
    animate();

    // Handle window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId.current);
      if (renderer.current && containerRef.current) {
        containerRef.current.removeChild(renderer.current.domElement);
      }
      controls.current?.dispose();
      renderer.current?.dispose();
    };
  }, [modelPath]);

  const handleResize = () => {
    const container = containerRef.current;
    if (!container || !camera.current || !renderer.current) return;
    camera.current.aspect = container.clientWidth / container.clientHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(container.clientWidth, container.clientHeight);
  };

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
