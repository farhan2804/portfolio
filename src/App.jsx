import PortfolioCarousel from './components/Carousel/Carousel.jsx';
import PortfolioAbout from './components/About/About.jsx'
import PortfolioSkills from './components/Skills/Skills.jsx'
import PortfolioProjects from './components/PortfolioProjects/PortfolioProjects.jsx'
import PortfolioNavbar from './components/Navbar/PortfolioNavbar.jsx'
import PortfolioContact from './components/Contact/Contact.jsx';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter.jsx';
import './App.css';

const App = () => {
  return (
    <>
      <PortfolioNavbar />
      <PortfolioCarousel />
      <hr />
      <PortfolioAbout />
      <hr />
      <PortfolioSkills />
      <hr />
      <PortfolioProjects />
      <hr />
      <PortfolioContact />
      <PortfolioFooter />
    </>
  )
}

export default App
