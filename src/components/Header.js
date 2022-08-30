import {BrowserRouter as Routes, Router, Route, Link} from 'react-router-dom'
import '../index.css'

 function Header() {
  return (
  
<>
  
    <title>Home | Project X</title>

    <nav>

        <div className="nav-wrapper">
            
            <div className="nav-logo">
            <Link to="/"><img src="https://cdn.discordapp.com/attachments/715319623637270638/959944688582950912/unknown_2.png.png"/></Link>
            </div>

            <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/resources"> Resources </Link>
            <Link to="/22ApplicantsData"> 21-22 Applicants Data </Link>
            <Link to="/Admissions">Senior 101</Link>
            <Link to="/FAQ">FAQ</Link>
            </div>

        </div>

    </nav>
    
   
    </>
  )
}

export default Header;
