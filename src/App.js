import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Workshops from "./components/Workshops";
import Contact from "./components/Contact";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Schedule />
      <Workshops />
      <Contact />
    </div>
  );
}

export default App;
