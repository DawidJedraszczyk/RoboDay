import React from "react";

const Circle = ({ size, color, position, index }) => {
  const circleStyle = {
    background: color,
    borderRadius: "50%",
    width: size,
    height: size,
    position: "absolute",
    bottom: position.bottom,
    left: position.left,
    zIndex: index,
  };

  return <div className="circle" style={circleStyle}></div>;
};

export default Circle;
