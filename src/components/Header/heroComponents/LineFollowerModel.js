import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Canvas, useThree } from "react-three-fiber";
import Model from "./LineFollowerScene";
const LineFollowerModel = () => {
  return (
    <div className="LineFollower">
      <Canvas>
        <Stage>
          <Model />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
};

export default LineFollowerModel;
