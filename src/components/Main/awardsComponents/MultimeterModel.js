import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import MultimeterScene from "./MultimeterScene";
import { SECOND_AWARD } from "../../Content";
const MultimeterModel = () => {
  return (
    <div className="award">
      <Canvas>
        <Stage>
          <directionalLight position={(15, 2, 1)} />
          <MultimeterScene />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <p> {SECOND_AWARD} </p>
    </div>
  );
};

export default MultimeterModel;
