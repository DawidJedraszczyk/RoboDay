import React from "react";
import Circle from "./Circle";

const Circles = ({ size, color, position }) => {
  const biggestCircle = {
    size: "350px",
    color: `linear-gradient(
          0deg,
          hsla(284, 97%, 14%, 0.65) 29%,
          hsla(298, 100%, 17%, 0.85) 52%,
          hsla(319, 100%, 28%, 1) 75%,
          hsla(338, 100%, 47%, 1) 100%
        )`,
    position: {
      bottom: "0px",
      left: "600px",
    },
    zIndex: -1,
  };
  const smallRedCircle = {
    size: "70px",
    color: `linear-gradient(
          0deg,
          hsla(284, 97%, 14%, 1) 29%,
          hsla(298, 100%, 17%, 1) 52%,
          hsla(319, 100%, 28%, 1) 75%,
          hsla(338, 100%, 47%, 1) 100%
        )`,
    position: {
      bottom: "210px",
      left: "560px",
    },
    zIndex: -1,
  };
  const smallRedCircleRight = {
    size: "120px",
    color: `linear-gradient(
          0deg,
          hsla(284, 97%, 14%, 0.8) 29%,
          hsla(298, 100%, 17%, 0.95) 52%,
          hsla(319, 100%, 28%, 1) 75%,
          hsla(338, 100%, 47%, 1) 100%
        )`,
    position: {
      bottom: "30px",
      left: "620px",
    },
    zIndex: -1,
  };

  const purpleBigCircle = {
    size: "270px",
    color: `linear-gradient(
        0deg,
        rgba(33,33,31,0) 0%, rgba(66,24,80,0.5) 38%, rgba(84,19,106,0.85) 53%, rgba(111,12,145,1) 72%, rgba(156,0,211,1) 100%)`,
    position: {
      bottom: "-30px",
      left: "400px",
    },
    zIndex: -1,
  };
  const smallPurpleCircle = {
    size: "150px",
    color: `linear-gradient(
        0deg,
        rgba(33,33,31,0) 0%, rgba(66,24,80,0.5) 38%, rgba(84,19,106,0.85) 53%, rgba(111,12,145,1) 72%, rgba(156,0,211,1) 100%)`,
    position: {
      bottom: "-20px",
      left: "300px",
    },
    zIndex: -1,
  };
  const smallPurpleCircleRight = {
    size: "150px",
    color: `linear-gradient(
        0deg,
        rgba(33,33,31,0) 0%, rgba(66,24,80,0.5) 38%, rgba(84,19,106,0.85) 53%, rgba(111,12,145,1) 72%, rgba(156,0,211,1) 100%)`,
    position: {
      bottom: "0px",
      left: "850px",
    },
    zIndex: -1,
  };

  return (
    <div className="circles">
      <Circle {...biggestCircle} />
      <Circle {...purpleBigCircle} />
      <Circle {...smallPurpleCircle} />
      <Circle {...smallPurpleCircleRight} />
      <Circle {...smallRedCircle} />
      <Circle {...smallRedCircleRight} />
    </div>
  );
};

export default Circles;
