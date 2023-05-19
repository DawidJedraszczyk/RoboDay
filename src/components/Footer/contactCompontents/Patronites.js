import React, { useRef } from "react";
const Patronites = () => {
  const patronitesRef = useRef();
  return (
    <div className="patronites" patronitesRef={patronitesRef}>
      <h3>PARTNERZY ROBODAY2023</h3>
      <div className="schedule__gradient-line" />
      <ul>
        <li>
          <img
            src={process.env.PUBLIC_URL + "/assets/img/" + "pti-logo.png"}
            alt="Polskie Towarzystwo Informatyczne logo"
          />
        </li>
        <li>
          <div className="small-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/img/" + "pp-logo.png"}
              alt="Polskie Towarzystwo Informatyczne logo"
            />
            <img
              src={process.env.PUBLIC_URL + "/assets/img/" + "wiit-logo.png"}
              alt="Polskie Towarzystwo Informatyczne logo"
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Patronites;
