import React from 'react'
import Accordion from './Accordion'
import './Accordion.css'
import { accordionData } from './AccordionData.js';

function FAQ() {
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
  <br></br><br></br>
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
  <br></br><br></br>
    </>
  )
}

export default FAQ