import React, { useState } from "react";
import Categories from "./navbarComponents/Categories";
import "./Navbar.scss";

function Navbar() {
  const [navBackground, setNavBackground] = useState("transparent");

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setNavBackground("#010030");
    } else {
      setNavBackground("transparent");
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <nav style={{ backgroundColor: navBackground }}>
      ROBODAY
      <Categories />
    </nav>
  );
}

export default Navbar;
