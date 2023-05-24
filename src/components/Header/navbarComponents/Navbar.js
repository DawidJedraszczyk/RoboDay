import React, { useState } from "react";
import Categories from "./Categories";
import { EVENT_NAME } from "./../../Content";
import "./Navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <nav className={isScrolled ? "backgroundColorIsSet" : ""}>
      {EVENT_NAME}
      <Categories />
    </nav>
  );
};

export default Navbar;
