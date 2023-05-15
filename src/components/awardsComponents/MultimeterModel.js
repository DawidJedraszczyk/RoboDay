import { OrbitControls, Stage } from "@react-three/drei";
import * as THREE from "three";
import React from "react";
import { Canvas } from "react-three-fiber";
import MultimeterScene from "./MultimeterScene";
function MultimeterModel() {
  return (
    <div className="award">
      <Canvas>
        <Stage>
          <directionalLight position={(15, 2, 1)} />
          <MultimeterScene />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <p> Miernik uniwersalny </p>
    </div>
  );
}

export default MultimeterModel;
