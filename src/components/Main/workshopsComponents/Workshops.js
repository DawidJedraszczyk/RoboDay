import React from "react";
import WorkshopsHeader from "./WorkshopsHeader";
import Workshop from "./Workshop";
import { WORKSHOPS_LIST } from "../../Content";
import "./Workshops.scss";
const Workshops = () => {
  const workshops_list = WORKSHOPS_LIST.map((event) => <Workshop {...event} />);
  return (
    <div className="workshops">
      <WorkshopsHeader />
      <div className="container">{workshops_list}</div>
    </div>
  );
};

export default Workshops;
