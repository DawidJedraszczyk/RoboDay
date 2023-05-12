import React from "react";
import PersonalContact from "./contactCompontents/PersonalContact";
import Patronites from "./contactCompontents/Patronites";
import "./Contact.scss";
function Contact() {
  return (
    <div className="contact">
      <PersonalContact />
      <Patronites />
    </div>
  );
}

export default Contact;
