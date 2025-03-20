import Header from './components/Header';
// import Footer from './components/Footer';
import Home from './components/Home';
import AboutPage from './components/AboutPage';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import { Route, Routes} from 'react-router-dom';
import '../src/styles/GlobalStyles.css';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

function App() {
    return (
     <> 
     <Header />
      <Navigation />
      <div className="container">
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about-page' element={<AboutPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
        </Routes>

      </div>
     </>
  
    )  
  }
export default App;

  // let component 
  // switch (window.location.pathname) {
  //   case '/':
  //     component = <Home />
  //     break
  //   case '/about-page':
  //     component = <AboutPage />
  //     break
  //   case '/contact':
  //     component = <Contact />
  //     break 
  //   case '/portfolio':
  //     component = <Portfolio />
  //     break
  //   case '/resume':
  //     component = <Resume />
  //     break
  // }