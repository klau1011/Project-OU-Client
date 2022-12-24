import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from'react-router-dom'

// import all components
import {useEffect} from 'react'
import Header from './components/Header.js'
import Grid from './components/Grid.js'
import FAQ from './components/FAQ.js'
import ApplicantsData from './components/ApplicantsData.js'
import Guide from './components/Guide.js'
import Resources from './components/Resources.js'
import Footer from './components/Footer.js'

// change website title
function App() {
  useEffect(() => {
    document.title = "Project OU"
  }, []);
  return (
 <>
 <Router>
   <Header />

<Routes>
  {/* routes to different webpages */}
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
