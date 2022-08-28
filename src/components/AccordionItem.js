import React from 'react'

function AccordionItem  ({ label, isCollapsed, handleClick, children })  {
    return (
      <>
      <div className="wrapper">
        <button className="accordion-button" onClick={handleClick}>
         <h3> {label} </h3>
         
        {/* <img src="https://media.discordapp.net/attachments/832303072645742632/995495384442994749/unknown.png" className={`down-${isCollapsed ? 'collapsed' : 'expanded'}`}></img>  */}
        <img src={`${isCollapsed ? 'https://media.discordapp.net/attachments/832303072645742632/995495384442994749/unknown.png' : 'https://cdn.discordapp.com/attachments/832303072645742632/995500957259530260/unknown.png'}`}></img>
        </button>
      
        <div
          className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
          <div className="ans">
         <p class="par"> {children} </p>
         </div>
        </div>
        </div>
      </>
    );
  };
export default AccordionItem;  