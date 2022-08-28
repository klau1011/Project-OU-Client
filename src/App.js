import {BrowserRouter as Router, Route, Routes, Link} from'react-router-dom'

import {useEffect} from 'react'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Grid from './components/Grid.js'
import FAQ from './components/FAQ.js'
import Blank from './components/Blank.js'
import ApplicantsData from './components/ApplicantsData.js'
import Guide from './components/Guide.js'
import Resources from './components/Resources.js'
import Footer from './components/Footer.js'

function App() {
  useEffect(() => {
    document.title = "Ontario Grade 12s"
  }, []);
  return (
 <>
 <Router>
   <Header />

<Routes>
  <Route path="/" element={<Grid />} />
  <Route path="/resources" element={<Resources />}/>
  <Route path="/22ApplicantsData" element={<ApplicantsData />}></Route>
  <Route path="/Admissions" element={<Guide />}></Route>
  <Route path="/FAQ" element={<FAQ />}></Route>
    
    </Routes>
    <Footer />

    </Router>
  
    
</>

  );
}

export default App;
