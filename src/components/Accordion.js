// faq accordion
import React from "react";
import { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div className="wrapper">
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

export default Accordion;
