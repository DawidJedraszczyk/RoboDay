import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ThreeModel(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create a new Three.js scene
    const scene = new THREE.Scene();

    // Create a new Three.js camera
    const camera = new THREE.PerspectiveCamera(
      75, // field of view
      canvasRef.current.clientWidth / canvasRef.current.clientHeight, // aspect ratio
      0.1, // near clipping plane
      1000 // far clipping plane
    );
    camera.position.z = 5;

    // Create a new Three.js renderer and attach it to the canvas
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    // Load the GLTF file using GLTFLoader
    const loader = new GLTFLoader();
    loader.load(
      // URL of the GLTF file
      process.env.PUBLIC_URL + "/assets/3dModels/arduino/.obj/MyModel.gltf",
      //"path/to/your/cad_object.gltf",
      // Function to call when the loading is complete
      (gltf) => {
        // Get the root object of the loaded GLTF scene
        const object = gltf.scene;

        // Add the object to the scene
        scene.add(object);

        // Set the position and rotation of the object
        object.position.set(0, 0, 0);
        object.rotation.set(0, 0, 0);

        // Render the scene with the camera
        const animate = function () {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      },
      // Function to call if there is an error loading the GLTF file
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return <canvas ref={canvasRef} style={{ background: "#fff" }} />;
}

export default ThreeModel;
