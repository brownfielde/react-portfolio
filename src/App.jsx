import Header from './components/Header';
import Footer from './components/Footer';
// import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
    <Header />
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Title>
          About Page
        </Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="outline-about-page">
              About Page </Button>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src="holder.js/100px180" />
        <Card.Title>
          <Contact />
        </Card.Title>
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Footer />
    </>
    
  );
}

export default App;

