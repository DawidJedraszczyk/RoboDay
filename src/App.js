import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Workshops from "./components/Workshops";
import Awards from "./Awards";
import Contact from "./components/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Schedule />
      <Workshops />
      <Awards />
      <Contact />
    </div>
  );
}

export default App;
