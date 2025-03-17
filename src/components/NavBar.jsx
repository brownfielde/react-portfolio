import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar (){
    return   <nav className= "nav">
      <a href="/" className="my-portfolio">Rashelle's Portfolio</a>
      <ul>
        <li><a href="/about-page">About Page</a> </li>
          <li><a href="contact">Contact</a></li>
          <li><a href="portfolio">Portfolio</a></li>
          <li><a href="resume">Resume</a></li>
      </ul>
    
  </nav>
}

export default NavBar;