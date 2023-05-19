import React from "react";
import "./../../../App.scss";
import "./Awards.scss";
import ArduinoModel from "./ArduinoModel";
import MultimeterModel from "./MultimeterModel";
const Awards = () => {
  return (
    <div className="awards">
      <div className="awards-container">
        <header>
          <h2>NAGRODY DO WYGRANIA W KONKURSACH</h2>
        </header>
        <ArduinoModel />
        <MultimeterModel />
      </div>
    </div>
  );
};

export default Awards;
