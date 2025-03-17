// import Header from './components/Header';
// import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';


function App() {
  let component 
  switch (window.location.pathname) {
    case '/':
      component = <App />
      break
    case '/about-page':
      component = <AboutPage />
      break
    case '/contact':
      component = <Contact />
      break 
    case '/portfolio':
      component = <Portfolio />
      break
    case '/resume':
      component = <Resume />
      break
  }
    return (
     <> 
      <Navigation />
      {component}
     </>
  
    )  
  }
export default App;

