import {GridElements} from "./";
import "../home.css";
import "../index.css";
import {FC} from 'react'

interface GridsProp {
  gridItems: Array<Object>;
  row: number;
}

interface GridItemsElement{
  id: number;
  path: string;
  className: string;
  image: string;
  title: string;
  text: string;
}

//grid row
const Grids: FC<GridsProp> = ({ gridItems, row }) => {
  const gridRowItems = gridItems.filter(
    (e: GridItemsElement) => e.id <= row * 2 && e.id > row * 2 - 2
  );

  return (
    <>
      <section className="grid">
        {gridRowItems.map((grid) => (
          <GridElements gridInfo={grid} />
        ))}
      </section>
    </>
  );
};

export default Grids;
