import React from "react";
import "./PortfolioFooter.scss";
import Button from "react-bootstrap/Button";
import { useTheme } from "../Themes/ThemeProvider";
import Nav from "react-bootstrap/Nav";
const PortfolioFooter = () => {
  const { isDarkMode } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      id="FooterContainer"
      className={isDarkMode ? "dark-mode" : "light-mode"}
    >
      <div id="FooterDetails">
        <div id="Name">
          &copy; Farhan Mahmood &nbsp; {new Date().getMonth() + 1}-
          {new Date().getDate()}-{new Date().getUTCFullYear()}
        </div>
        <div id="BackToTop">
          <Button variant="danger" onClick={scrollToTop} title="Back to Top">
            <i className="fa-solid fa-arrow-up"></i>
          </Button>
        </div>
      </div>

      <div id="FooterComponents">
        <div className="SocialIcons">
          <a href="https://github.com/farhan2804" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/_farhan_2804/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.youtube.com/@animaginations7060" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <div className="NavDetails">
          <Nav.Link className="home-link" href="#home">
            Home
          </Nav.Link>
          <Nav.Link className="about-link" href="#about">
            About
          </Nav.Link>
          <Nav.Link className="skill-link" href="#skills">
            Skills
          </Nav.Link>
          <Nav.Link className="project-link" href="#projects">
            Projects
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};
export default PortfolioFooter;
