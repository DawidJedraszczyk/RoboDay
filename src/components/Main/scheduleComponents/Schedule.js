import React, { useRef } from "react";
import HeaderSchedule from "./HeaderSchedule";
import Timeline from "./Timeline";
import "./Schedule.scss";

const Schedule = () => {
  const scheduleRef = useRef(null);
  return (
    <div ref={scheduleRef} className="schedule">
      <HeaderSchedule />
      <Timeline />
    </div>
  );
};

export default Schedule;
