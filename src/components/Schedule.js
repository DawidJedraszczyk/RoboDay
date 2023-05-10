import React from "react";
import HeaderSchedule from "./scheduleComponents/HeaderSchedule";
import Timeline from "./scheduleComponents/Timeline";
import "./Schedule.scss";

function Schedule() {
  return (
    <div className="schedule">
      <HeaderSchedule />
      <Timeline />
    </div>
  );
}

export default Schedule;
