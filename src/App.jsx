import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
    return (
      <>
      <NavBar />
      <Header />
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Rashelle's Portfolio</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#about-page">About Page</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#resume">Resume</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <br />
        <Footer />
      </>
    );
  }

export default App;

