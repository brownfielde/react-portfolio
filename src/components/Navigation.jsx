import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/GlobalStyles.css';

import { Link } from 'react-router-dom';

function Navigation (){
  return (
    <>
   <Navbar bg="dark" data-bs-theme="dark" class="navBar">
        <Container>
          <Navbar.Brand href="/home">Rashelle's Portfolio</Navbar.Brand>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/about-page">About Page</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
            <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;