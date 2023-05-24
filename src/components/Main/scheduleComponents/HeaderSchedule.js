import React from "react";
import { SCHEDULE_HEADER, SCHEDULE_HEADER_CATCH_PHRASE } from "./../../Content";

const headerSchedule = () => {
  return (
    <header>
      <h3>{SCHEDULE_HEADER_CATCH_PHRASE}</h3>
      <h2>{SCHEDULE_HEADER}</h2>
      <div className="schedule__gradient-line" />
    </header>
  );
};

export default headerSchedule;
