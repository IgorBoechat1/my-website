"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

type ThreeDViewerProps = {
  modelPath: string;
};

const ThreeDViewer: React.FC<ThreeDViewerProps> = ({ modelPath }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particles = useRef<THREE.Mesh[]>([]);
  const originalModel = useRef<THREE.Object3D | undefined>(undefined);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const controls = useRef<OrbitControls | null>(null);
  const animationFrameId = useRef<number>(0);

  const [showParticles] = useState(false); // Define the missing showParticles state

  useEffect(() => {
    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      camera.current = new THREE.PerspectiveCamera(20, container.clientWidth / container.clientHeight, 0.1, 1000);
      camera.current.position.set(-3, 1, -5);

      scene.current = new THREE.Scene();
      scene.current.background = null;

      const light = new THREE.DirectionalLight("red", 1);
      light.position.set(50, 10, 10);
      scene.current.add(light);

      const ambientLight = new THREE.AmbientLight(0x404040);
      scene.current.add(ambientLight);

      renderer.current = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.current.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.current.domElement);

      controls.current = new OrbitControls(camera.current, renderer.current.domElement);
      controls.current.enableDamping = true;
      controls.current.dampingFactor = 0.1;
      controls.current.enableZoom = false;

      const loader = new GLTFLoader();
      loader.load(
        modelPath,
        (gltf) => {
          if (!gltf.scene) return;

          originalModel.current = gltf.scene;
          originalModel.current.scale.set(1.8, 1.8, 1.8);
          originalModel.current.traverse((obj: THREE.Object3D) => {
            if ((obj as THREE.Mesh).isMesh && (obj as THREE.Mesh).material) {
              const material = (obj as THREE.Mesh).material as THREE.MeshStandardMaterial;
              material.transparent = true;
              material.opacity = 0.0;
            }
          });

          scene.current?.add(originalModel.current); // Use optional chaining
        },
        undefined,
        (error) => console.error("Error loading model:", error)
      );

      const animate = () => {
        animationFrameId.current = requestAnimationFrame(animate);
      
        // Update controls
        controls.current?.update();
      
        // Check for nullability before using `scene.current`, `camera.current`, and `renderer.current`
        if (scene.current && camera.current && renderer.current) {
          renderer.current.render(scene.current, camera.current);
        }
      };
      
      animate();

      // Handle resizing logic
      const handleResize = () => {
        if (!container || !camera.current || !renderer.current) return;
        camera.current.aspect = container.clientWidth / container.clientHeight;
        camera.current.updateProjectionMatrix();
        renderer.current.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize); // Clean up the event listener
        cancelAnimationFrame(animationFrameId.current);
      
        // Dispose controls if defined
        controls.current?.dispose();
      
        // Check for nullability before disposing of renderer
        if (renderer.current) {
          renderer.current.dispose();
          if (container) {
            container.removeChild(renderer.current.domElement);
          }
        }
      };
    };

    init();
  }, [modelPath]);

  useEffect(() => {
    if (originalModel.current) {
      originalModel.current.visible = !showParticles;
    }

    particles.current.forEach((particle) => {
      particle.visible = showParticles;
    });
  }, [showParticles]); // Re-run when showParticles changes

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ThreeDViewer;
