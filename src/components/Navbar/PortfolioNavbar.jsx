import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Pdf from "./Farhan_Resume.pdf";
import './PortfolioNavbar.scss';
import { useTheme } from "../Themes/ThemeProvider";

const PortfolioNavbar = () => {

    const { toggleTheme, isDarkMode } = useTheme();

    function handleToggleTheme() {
        toggleTheme();
        document.body.classList.toggle('light-mode', !isDarkMode);
        document.body.classList.toggle('dark-mode', isDarkMode);
    }

    function handleScroll() {
        const navbar = document.getElementById('Nav');
        if (window.scrollY > 20) {
            navbar.classList.add('scrolled');
            // Remove the event listener when scrolled
            window.removeEventListener('scroll', handleScroll);
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    React.useEffect(() => {
        function handleScrollAndRemove() {
            handleScroll();
            if (window.scrollY <= 20) {
                // If scrolled to the top, re-add the event listener
                window.addEventListener('scroll', handleScroll);
            }
        }
        window.addEventListener('scroll', handleScrollAndRemove);
    }, []);


    return (
        <>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="md"
                variant="dark"
                className="animate-navbar nav-theme justify-content-between" id="Nav">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <h2 id="NavbarName">Farhan Mahmood</h2>
                    <Nav id="NavbarElements">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href={Pdf} target="_blank">
                            Resume
                        </Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <div className="theme-switch-wrapper">
                            <span id="toggle-icon">
                                {isDarkMode ? <i className="fas fa-moon"></i> : <i className="fas fa-sun" style={{ color: 'white' }}></i>}
                            </span>
                            <label className="theme-switch">
                                <input type="checkbox" onChange={handleToggleTheme} />
                                <div className="slider round"></div>
                            </label>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default PortfolioNavbar;