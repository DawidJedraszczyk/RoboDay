import React from "react";
import CatchPhrases from "./heroComponents/CatchPhrases";
import Robot3d from "./heroComponents/Robot3d";
import Circles from "./heroComponents/Circles";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <CatchPhrases />
      <Robot3d />
      <Circles />
    </div>
  );
}

export default Hero;
