import React from 'react';
import Image from '../../assets/Images/About/Farhan1.jpg';
import Button from "react-bootstrap/Button";
import Pdf from "./Farhan_Resume.pdf";
import { aboutText } from '../../data/about';
import Container from 'react-bootstrap/Container';
import { useTheme } from "../Themes/ThemeProvider";
import './About.scss';
const PortfolioAbout = () => {
    const { isDarkMode } = useTheme();
    return (
        <Container id="about" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-6 col-md-6 col-12">
                        <img src={Image} className="img-fluid" id="AboutImage" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12" id="AboutContent">
                        <h1 id="AboutHeading">About Me</h1>
                        Hi there! I am <strong id="str">&nbsp;Farhan Mahmood.</strong>
                        <br />
                        {aboutText}
                        <div id="ButtonContainer">
                            <div id="TalkButton">
                                <Button className="btn" variant="outline-warning" href="#contact">Let's Talk</Button>
                            </div>
                            <div id="Resumebutton">
                                <Button className="btn" variant="outline-success" href={Pdf} target="_blank">My Resume</Button>
                            </div>
                            <div id="GitHubButton">
                                <Button className="btn" variant="outline-danger" href="https://github.com/farhan2804" target="_blank">GitHub</Button>
                            </div>
                            <div id="LinkedInButton">
                                <Button className="btn" variant="outline-primary" href="https://www.linkedin.com/in/10-farhan-mahmood"
                                    target="_blank">LinkedIn</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default PortfolioAbout;