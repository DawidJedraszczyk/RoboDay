import React from "react";
import Schedule from "./scheduleComponents/Schedule";
import Workshops from "./workshopsComponents/Workshops";
import Awards from "./awardsComponents/Awards";
const Main = () => {
  return (
    <div className="Main">
      <Schedule />
      <Workshops />
      <Awards />
    </div>
  );
};

export default Main;
