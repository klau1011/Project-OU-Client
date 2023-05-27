// faq accordion
import React from "react";
import { useState, FC } from "react";
import "./Accordion.css";

interface AccordionProps {
  title: string;
  content: string;
}

 const Accordion: FC<AccordionProps> = (props) => {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{props.title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      <div className="wrapper">
        {isActive && <div className="accordion-content">{props.content}</div>}
      </div>
    </div>
  );
};

export default Accordion