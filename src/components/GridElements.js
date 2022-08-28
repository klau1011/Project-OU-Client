import React from 'react'

//each grid element component
 function GridElements({gridInfo}) {
  return (
 
    <a href={gridInfo.path} target="_blank">
    <div class="course-notes">

        <img src={gridInfo.image}/>
        <h1>{gridInfo.title}</h1>
        <p>{gridInfo.text}</p>
    
    </div>
    </a>


  )
}

export default GridElements;
