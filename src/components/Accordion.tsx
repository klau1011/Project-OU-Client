// faq accordion
import React from "react";
import { useState, FC } from "react";
import "./Accordion.css";

type AccordionProps = {
  title: string;
  content: string;
}

 const Accordion: FC<AccordionProps> = ({title, content}) => {

  const [isActive, setIsActive] = useState<boolean>(false);

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

export default Accordion