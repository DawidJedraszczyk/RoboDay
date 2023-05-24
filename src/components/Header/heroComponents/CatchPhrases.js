import React from "react";
import {
  EVENT_NAME_FIRST_HALF,
  EVENT_NAME_SECOND_HALF,
  CATCH_PHRASE_MIDDLE,
  CATCH_PHRASE_SMALL,
} from "./../../Content";

const CatchPhrases = () => {
  return (
    <header className="catch-phrases">
      <div className="roboday">
        {EVENT_NAME_FIRST_HALF} <br /> {EVENT_NAME_SECOND_HALF}
        <div className="catch-phrases__gradient-line" />
      </div>
      <h1 className="catch-phrases__middle">{CATCH_PHRASE_MIDDLE}</h1>
      <h2 className="catch-phrases__smallest">{CATCH_PHRASE_SMALL}</h2>
    </header>
  );
};

export default CatchPhrases;
