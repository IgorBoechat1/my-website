"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MeshSurfaceSampler } from "three/examples/jsm/math/MeshSurfaceSampler.js";

type ThreeDViewerProps = {
  modelPath: string;
  showParticles: boolean;
};

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPath, showParticles }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<THREE.Mesh[]>([]);
  const originalModel = useRef<THREE.Object3D | undefined>(undefined);
  const clock = new THREE.Clock();

  // Geometries for particles (initially spheres, we will morph them later)
  const sphereGeometry = new THREE.SphereGeometry(0.005, 8, 8);
  const coneGeometry = new THREE.ConeGeometry(0.005, 0.02, 8); // Morph to this shape

  useEffect(() => {
    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let animationFrameId: number;

    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      // Camera setup
      camera = new THREE.PerspectiveCamera(20, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.position.set(-3, 1, -5);

      // Scene setup
      scene = new THREE.Scene();
      scene.background = null; // Transparent background

      // Lights setup
      const light = new THREE.DirectionalLight('red', 1);
      light.position.set(50, 10, 10);
      scene.add(light);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.add(ambientLight);

      // Renderer setup
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);

      // OrbitControls setup (for camera control)
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.1;
      controls.enableZoom = false; // Disable zoom

      // Load Model
      const loader = new GLTFLoader();
      loader.load(
        modelPath,
        (gltf) => {
          if (!gltf.scene) {
            console.error("Loaded GLTF has no scene.");
            return;
          }

          originalModel.current = gltf.scene;
          originalModel.current.scale.set(1.8, 1.8, 1.8);
          originalModel.current.position.copy(camera.position).add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(5));

          // Traverse through the model to make it transparent
          originalModel.current.traverse((obj: any) => {
            if (obj.isMesh && obj.material) {
              const material = obj.material as THREE.MeshStandardMaterial;

              // Make the material transparent and set opacity
              material.transparent = true;
              material.opacity = 0.0; // Adjust opacity value as needed (0 = fully transparent, 1 = fully opaque)
            }
          });

          // Split the model in half and create particles
          const particlesMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(0, 0, 0), // Initial dark color for particles
          });

          // Traverse through the model to create particles
          originalModel.current.traverse((obj: any) => {
            if (obj.isMesh && obj.material) {
              const sampler = new MeshSurfaceSampler(obj).build();
              const numParticles = 4000; // Number of particles for the first half

              for (let i = 0; i < numParticles; i++) {
                const sample = new THREE.Vector3();
                sampler.sample(sample);
                obj.localToWorld(sample);

                const particle = new THREE.Mesh(sphereGeometry, particlesMaterial); // Start with sphere particles
                particle.position.copy(sample);
                particle.scale.set(1, 1, 1); // Start with normal scale
                
                // Assign random properties to each particle
                particle.userData = {
                  hueOffset: Math.random() * Math.PI * 2, // Random hue phase offset
                  pulseSpeed: Math.random() * 1.5 + 0.5, // Random pulse speed
                  pulseAmplitude: Math.random() * 0.2 + 0.8, // Random pulse amplitude
                  morphSpeed: Math.random() * 0.5 + 0.5, // Random morph speed
                };

                particles.current.push(particle);
                scene.add(particle);
              }
            }
          });

          scene.add(originalModel.current);
        },
        undefined,
        (error) => console.error("Error loading model:", error)
      );

      // Resize handling
      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };
      window.addEventListener("resize", handleResize);

      // Disform and Form Animation for Model
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        controls.update(); // Handle the auto-rotation from OrbitControls

        // Particle animation: Pulse, Morph, and Color transitions
        const time = clock.getElapsedTime();

        // Apply disform and form to the model
        if (originalModel.current) {
          const disformFactor = Math.sin(time * 0.3) * 0.2 + 1; // Oscillate between 1 and 1.2
          originalModel.current.scale.set(disformFactor, disformFactor, disformFactor); // Apply the disformation effect
        }

        particles.current.forEach((particle, index) => {
          // Randomize pulse effect (scale oscillation for pulsing effect)
          const pulse = Math.sin(time * particle.userData.pulseSpeed + particle.userData.hueOffset) * particle.userData.pulseAmplitude + 1; // Pulsing size
          particle.scale.set(pulse, pulse, pulse);

          // Random morphing (change geometry between sphere and cone)
          const morphFactor = (Math.sin(time * particle.userData.morphSpeed + index * 0.05) + 1) * 0.5; // Morph smoothness factor
          particle.geometry = morphFactor > 0.5 ? sphereGeometry : coneGeometry; // Morph between shapes

          // Random color transitions between Red (0), Green (120), and Purple (270)
          const hue = (Math.sin(time * 0.3 + particle.userData.hueOffset) * 0.5 + 0.5); // Smooth hue oscillation
          const color = new THREE.Color().setHSL(hue, 1, 0.5); // Saturation is 1 (max), lightness is 0.5 (not white)
          particle.material.color.copy(color);

          // Adjust opacity for a fading effect
          const opacity = 0.5 + 0.5 * Math.sin(time * 0.05); // Soft opacity transitions
          particle.material.opacity = opacity;
        });

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        window.removeEventListener("resize", handleResize);
        cancelAnimationFrame(animationFrameId);
        particles.current.forEach((particle) => scene.remove(particle));
        if (originalModel.current) scene.remove(originalModel.current);
        controls.dispose();
        renderer.dispose();
        if (container) container.removeChild(renderer.domElement);
      };
    };

    init();

    return () => {
      // Cleanup on component unmount
    };
  }, [modelPath]);

  useEffect(() => {
    // Toggle visibility based on `showParticles`
    if (originalModel.current) {
      originalModel.current.visible = !showParticles; // Hide the original model if particles are shown
    }

    particles.current.forEach((particle) => {
      particle.visible = showParticles; // Show particles if `showParticles` is true
    });
  }, [showParticles]);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeDViewer;
