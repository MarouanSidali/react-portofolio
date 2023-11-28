import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const ThreeScene = () => {
  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('three-container').appendChild(renderer.domElement);

    // Your Three.js code for loading and animating the Blender animation goes here
    const loader = new GLTFLoader();

    loader.load('../models/jupyter.glb', (gltf) => {
      const mixer = new THREE.AnimationMixer(gltf.scene);
      const action = mixer.clipAction(gltf.animations[0]);
      action.play();

      scene.add(gltf.scene);

      const animate = () => {
        requestAnimationFrame(animate);
        mixer.update(0.01); // Adjust the time delta as needed
        renderer.render(scene, camera);
      };

      animate();

      // Cleanup function
      return () => {
        // Dispose of resources when the component is unmounted
        mixer.stopAllAction();
      };
    });
  }, []); // Empty dependency array to ensure useEffect runs only once

  return <div id="three-container" />;
};

export default ThreeScene;
