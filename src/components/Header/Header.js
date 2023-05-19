import React from "react";
import Navbar from "./navbarComponents/Navbar";
import Hero from "./heroComponents/Hero";
const Header = () => {
  return (
    <div className="Header">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
