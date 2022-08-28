import GridElements from './GridElements'
import Hero from './Hero'
import '../home.css'
import '../index.css'



//grid row 
 const Grids = ({gridItems, row}) => {
  const gridRowItems = gridItems.filter(e => (e.id <=row*2) && (e.id > row*2-2 ))
  

  return (
      <>
<section className="grid">

      {gridRowItems.map((grid) => (
  
      <GridElements gridInfo={grid}  />
      ))}

</section>

      
      </>
  )
}

export default Grids;
