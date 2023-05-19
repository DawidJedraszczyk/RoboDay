import React, { useRef } from "react";
import PersonalContact from "./PersonalContact";
import Patronites from "./Patronites";
import "./Contact.scss";
const Contact = () => {
  const contactRef = useRef();
  return (
    <div className="contact" ref={contactRef}>
      <PersonalContact />
      <Patronites />
    </div>
  );
};

export default Contact;
