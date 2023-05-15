import React from "react";
import CatchPhrases from "./heroComponents/CatchPhrases";
import Models3d from "./heroComponents/Models3d";
import "./Hero.scss";
function Hero() {
  return (
    <div className="hero">
      <CatchPhrases />
      <Models3d />
    </div>
  );
}

export default Hero;
