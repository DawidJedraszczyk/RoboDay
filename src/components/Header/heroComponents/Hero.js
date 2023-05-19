import React from "react";
import CatchPhrases from "./CatchPhrases";
import Models3d from "./Models3d";
import "./Hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <CatchPhrases />
      <Models3d />
    </div>
  );
};

export default Hero;
