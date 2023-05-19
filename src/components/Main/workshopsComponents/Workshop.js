import React from "react";

const Workshop = (props) => {
  return (
    <div className="workshop">
      <img
        src={process.env.PUBLIC_URL + "/assets/img/" + props.logo}
        alt="workshop logo"
        style={{ width: "50%" }}
      />

      <h3>{props.h3}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Workshop;
