import React, { useRef } from "react";
import "./Workshops.scss";
import WorkshopsHeader from "./WorkshopsHeader";
import Workshop from "./Workshop";
const Workshops = () => {
  const workshopsRef = useRef();
  const assemblyWorkshop = {
    logo: "assembly-logo.png",
    h3: "Assembly 8051",
    text: "Zapoznanie się z podstawami języka Assembly 8051 oraz stworzenie swojego pierwszego programu.",
  };
  const openglWorkshop = {
    logo: "Opengl-logo.png",
    h3: "OpenGl",
    text: "Stworzenie swoich pierwszych grafik 3D. Efekty Waszej pracy będą od razu widoczne na ekranie!",
  };
  const hackingWorkshops = {
    logo: "Python-logo.png",
    h3: "Hackowanie",
    text: "Poznaj tajniki hackowania i dowiedz się, jak się chronić przed atakami hakerskimi w internecie.",
  };
  return (
    <div className="workshops" ref={workshopsRef}>
      <WorkshopsHeader />
      <div className="container">
        <Workshop {...assemblyWorkshop} />
        <Workshop {...openglWorkshop} />
        <Workshop {...hackingWorkshops} />
      </div>
    </div>
  );
};

export default Workshops;
