import React from "react";

const Contact = ({ contact, details }) => {
  return (
    <div className="contact">
      <div>
        <h2>{contact}</h2>
        <p>{details}</p>
      </div>
      <h2>➡️</h2>
    </div>
  );
};

export default Contact;
