import React from 'react'
import Accordion from './Accordion'
import AccordionItem from './AccordionItem'
import './Accordion.css'

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
<Accordion  defaultIndex="1" onItemClick={console.log('')}>
    <AccordionItem label="When can I start applying?" index="1">
    Your school will you a code to register an account to OUAC. You can expect it by the end of November, but usually between late October to early November.
    </AccordionItem>
    <AccordionItem label="How many programs should I apply to? 
" index="2">
If you are confident about the field/program you want to enter, 4-5 is good. 2 reaches, 2 target, and a safety. 
If you are not sure about your path, you may need to apply to more to keep your options open.  </AccordionItem>
  </Accordion>
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