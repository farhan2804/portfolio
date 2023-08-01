import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import L_HTML5 from "../../assets/html-5.svg";
import Container from 'react-bootstrap/Container';
import L_CSS3 from "../../assets/css3.svg";
import L_BOOTSTRAP from "../../assets/bootstrap-4.svg";
import './Skills.scss';

const PortfolioSkills = () => {
    return (
        <Container>
            <h1 class="text-center text-capitalize pt-4">Tech Skills</h1>
            <hr class="w-50 mx-auto pt-3"></hr>
            <div class="row text-center mb-5">
                <div class="col-lg-4 col-md-4 col-sm-12 col-12" id="Title1">
                    <div id="SkillsContainer">
                        <Card.Body>
                            <h2 id="TitleHeading">Frontend</h2>
                            <hr id="TitleLine"></hr>
                            <div id="CardContents">
                                <div class="HTMLImage">
                                    <img src={L_HTML5} class="img-fluid" />
                                    <h4>HTML5</h4>
                                </div>
                                <div class="CSSImage">
                                    <img src={L_CSS3} class="img-fluid" />
                                    <h4>CSS3</h4>
                                </div>
                                <div class="BootStrapImage">
                                    <img src={L_BOOTSTRAP} class="img-fluid" />
                                    <h4>BootStrap5</h4>
                                </div>
                            </div>
                        </Card.Body>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button id="ProjectButton" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button id="ProjectButton" variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
            </div>
        </Container>



    );
}

export default PortfolioSkills;