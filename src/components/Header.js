import {BrowserRouter as Routes, Router, Route, Link} from 'react-router-dom'
import '../index.css'

 function Header() {
  return (
  
<>
  
    <title>Home | Project OU</title>

    <nav>

        <div className="nav-wrapper">
            
            <div className="nav-logo">
            <Link to="/"><img src="https://cdn.discordapp.com/attachments/832303072645742632/1014329222027808828/0BB23037-2FB1-4F48-B2D5-97883D531F72_4_5005_c-removebg-preview.png"/></Link>
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
