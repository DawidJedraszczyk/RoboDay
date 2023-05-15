import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Canvas, useThree } from "react-three-fiber";
import LineFollowerScene from "./LineFollowerScene";
function LineFollowerModel() {
  return (
    <div className="LineFollower">
      <Canvas>
        <Stage>
          <LineFollowerScene />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}

export default LineFollowerModel;
