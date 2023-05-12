import React from "react";
import "./Workshops.scss";
import WorkshopsHeader from "./workshopsComponents/WorkshopsHeader";
import Workshop from "./workshopsComponents/Workshop";
function Workshops() {
  const assemblyWorkshop = {
    logo: "assembly-logo.png",
    h3: "Assembly 8051",
    text: "Zapoznanie się z podstawami języka Assembly 8051 oraz stworzenie swojego pierwszego programu.",
  };

  return (
    <div className="workshops">
      <WorkshopsHeader />
      <div className="container">
        <Workshop {...assemblyWorkshop} />
        <Workshop {...assemblyWorkshop} />
        <Workshop {...assemblyWorkshop} />
      </div>
    </div>
  );
}

export default Workshops;
