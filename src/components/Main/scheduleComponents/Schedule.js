import React from "react";
import HeaderSchedule from "./HeaderSchedule";
import Timeline from "./Timeline";
import "./Schedule.scss";

const Schedule = () => {
  return (
    <div className="schedule">
      <HeaderSchedule />
      <Timeline />
    </div>
  );
};

export default Schedule;
