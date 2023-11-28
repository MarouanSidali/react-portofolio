import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

const ThreeScene = ({ modelPath }) => {
  useEffect(() => {
    // Set up scene
    const scene = new THREE.Scene();

    // Set up camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Set up renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Load 3D model
    const loader = new GLTFLoader();

    loader.load(
      modelPath,
      (gltf) => {
        // Add the loaded model to the scene
        scene.add(gltf.scene);
      },
      (xhr) => {
        // Check if xhr.total is greater than 0 before calculating progress
        const progress = xhr.total > 0 ? (xhr.loaded / xhr.total) * 100 : 0;
        console.log(`Loaded ${xhr.loaded} bytes of ${xhr.total} bytes. Loading progress: ${progress.toFixed(2)}%`);
      },
      (error) => {
        // Log and handle loading errors
        console.error('Error loading 3D model:', error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Update animations or other dynamic elements here

      // Render the scene with the camera
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      // Add any additional cleanup logic as needed
    };
  }, [modelPath]);

  return null; // No need to render anything in the component itself
};

export default ThreeScene;
