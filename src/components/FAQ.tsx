import React, {FC} from "react";
import Accordion from "./Accordion.tsx";
import "./Accordion.css";
import { accordionData } from "./AccordionData.tsx";

// faq page
const FAQ: FC = () => {
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="horizontal-bar"></div>
      <div className="dropContainer">
        <h1 id="faq">FAQ</h1>

        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
}

export default FAQ;
