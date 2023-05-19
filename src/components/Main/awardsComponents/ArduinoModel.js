import { OrbitControls, Stage } from "@react-three/drei";
import React from "react";
import { Canvas, useThree } from "react-three-fiber";
import ArduinoScene from "./ArduinoScene";
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
      <p> Arduno Uno </p>
    </div>
  );
};

export default ArduinoModel;
