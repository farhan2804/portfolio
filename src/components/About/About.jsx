import React from 'react';
import Image from '../../assets/farhan1.jpg';
import Button from "react-bootstrap/Button";
import Pdf from "./Farhan_Resume.pdf";
import './About.scss';
const PortfolioAbout = () => {
    return (
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-6 col-md-6 col-12">
                    <img src={Image} class="img-fluid" id="AboutImage" />

                </div>

                <div class="col-lg-6 col-md-6 col-12" id="AboutContent">
                    <h1 class="text-capitalize pt-4">About Me</h1>
                    Hi there! I am <strong>&nbsp;Farhan Mahmood.</strong>
                    <br />
                    React JS Developer having enterprise level experience in React JS and
                    beginner level knowledge of Express JS, Node JS and Mongo DB.
                    I have strong fundamentals in computer algorithms,object oriented programming, relational and NoSQL databases.
                    Working with the clients, my goal is always driven towards
                    providing amazing experience with the best level of quality and service to
                    them.
                    <div id="ButtonContainer">
                        <div id="TalkButton">
                            <Button class="btn" variant="outline-primary" href={Pdf} target="_blank">Let's Talk</Button>
                        </div>
                        <div id="Resumebutton">
                            <Button class="btn" variant="outline-success" href={Pdf} target="_blank">My Resume</Button>
                        </div>
                        <div id="GitHubButton">
                            <Button class="btn" variant="outline-danger" href="https://github.com/farhan2804" target="_blank">GitHub</Button>
                        </div>
                        <div id="LinkedInButton">
                            <Button class="btn" variant="outline-dark" href="https://www.linkedin.com/in/10-farhan-mahmood"
                                target="_blank">LinkedIn</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PortfolioAbout;