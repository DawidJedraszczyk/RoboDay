import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas, useThree } from "react-three-fiber";
import ArduinoScene from "./ArduinoScene";
import { FIRST_AWARD } from "./../../Content";
const ArduinoModel = () => {
  return (
    <div className="award">
      <Canvas>
        <Stage>
          <directionalLight position={(15, 2, 1)} />
          <ArduinoScene />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <p> {FIRST_AWARD} </p>
    </div>
  );
};

export default ArduinoModel;
