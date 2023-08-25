import React, {FC} from "react";
import Accordion from "./Accordion.tsx";
import "./Accordion.css";
import "./FAQ.css"
import { accordionData } from "./AccordionData.tsx";

// faq page
const FAQ: FC = () => {
  return (
    <>
      <div className="body-container">
      <div className="dropContainer">
        <h1 id="faq">FAQ</h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default FAQ;
