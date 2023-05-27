import React, {FC} from "react";
import { NavLink } from "react-router-dom";

interface GridItemsElement{
  id: number;
  path: string;
  className: string;
  image: string;
  title: string;
  text: string;
}

interface GridInfoProps{
    gridInfo: GridItemsElement
}


//each grid element component
const GridElements: FC<GridInfoProps> = ({ gridInfo }) => {
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
