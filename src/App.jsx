import PortfolioCarousel from './components/Carousel/Carousel'
import PortfolioAbout from './components/About/About'
import PortfolioSkills from './components/Skills/Skills'
import PortfolioProjects from './components/PortfolioProjects/PortfolioProjects'
import PortfolioNavbar from './components/Navbar/PortfolioNavbar'
import PortfolioContact from './components/Contact/Contact';
import PortfolioFooter from './components/PortfolioFooter/PortfolioFooter';
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
