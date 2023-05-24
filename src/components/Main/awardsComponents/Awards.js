import React from "react";
import { AWARDS_HEADER } from "./../../Content";
import ArduinoModel from "./ArduinoModel";
import MultimeterModel from "./MultimeterModel";
import "./../../../App.scss";
import "./Awards.scss";
const Awards = () => {
  return (
    <div className="awards">
      <div className="awards-container">
        <header>
          <h2>{AWARDS_HEADER}</h2>
        </header>
        <ArduinoModel />
        <MultimeterModel />
      </div>
    </div>
  );
};

export default Awards;
