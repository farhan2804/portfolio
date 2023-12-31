import PortfolioCarousel from "./components/Carousel/Carousel.jsx";
import PortfolioAbout from "./components/About/About.jsx";
import PortfolioSkills from "./components/Skills/Skills.jsx";
import PortfolioProjects from "./components/PortfolioProjects/PortfolioProjects.jsx";
import PortfolioNavbar from "./components/Navbar/PortfolioNavbar.jsx";
// import PortfolioContact from './components/Contact/Contact.jsx';
import PortfolioFooter from "./components/PortfolioFooter/PortfolioFooter.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <PortfolioNavbar />
      <PortfolioCarousel />
      <hr className="w-75 mx-auto pt-1" />
      <PortfolioAbout />
      <hr className="w-75 mx-auto pt-1" />
      <PortfolioSkills />
      <hr className="w-75 mx-auto pt-1" />
      <PortfolioProjects />
      {/* <PortfolioContact /> -- To be added later after adding backend server to handle email service*/}
      <PortfolioFooter />
    </>
  );
};

export default App;
