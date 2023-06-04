import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import all components
import { useEffect } from "react";
import {
  Header,
  Grid,
  FAQ,
  ApplicantsData,
  Guide,
  Resources,
  Footer,
} from "./components";
// change website title
function App() {
  useEffect(() => {
    document.title = "Project OU";
  }, []);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* routes to different webpages */}
          <Route path="/" element={<Grid />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/23ApplicantsData" element={<ApplicantsData />}></Route>
          <Route path="/Admissions" element={<Guide />}></Route>
          <Route path="/FAQ" element={<FAQ />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
