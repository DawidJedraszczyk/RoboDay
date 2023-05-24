import React from "react";
import { WORKSHOPS_HEADER, WORKSHOPS_HEADER_CATCH_PHRASE } from "../../Content";

const WorkshopsHeader = () => {
  return (
    <header>
      <h3>{WORKSHOPS_HEADER_CATCH_PHRASE}</h3>
      <h2>{WORKSHOPS_HEADER}</h2>
      <div className="schedule__gradient-line" />
    </header>
  );
};

export default WorkshopsHeader;
