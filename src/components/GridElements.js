import React from "react";
import { NavLink } from "react-router-dom";

//each grid element component
function GridElements({ gridInfo }) {
  return (
    <NavLink to={gridInfo.path} target="_blank">
      <div class="course-notes">
        <img src={gridInfo.image} />
        <h1>{gridInfo.title}</h1>
        <p>{gridInfo.text}</p>
      </div>
    </NavLink>
  );
}

export default GridElements;
