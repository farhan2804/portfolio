import React from 'react'
import Card from 'react-bootstrap/Card';
import L_HTML5 from "../../assets/Images/Skills/html-5.svg";
import Container from 'react-bootstrap/Container';
import L_CSS3 from "../../assets/Images/Skills/css3.svg";
import L_BOOTSTRAP from "../../assets/Images/Skills/bootstrap-4.svg";
import L_JAVASCRIPT from "../../assets/Images/Skills/javascript.svg";
import L_REACT from "../../assets/Images/Skills/react.svg";
import L_REACT_ROUTER from "../../assets/Images/Skills/react-router.svg";
import L_REACT_BOOTSTRAP from "../../assets/Images/Skills/react-bootstrap.svg";
import L_JAVA from "../../assets/Images/Skills/java.svg";
import L_GIT from "../../assets/Images/Skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/Images/Skills/github.svg";
import L_Heroku from "../../assets/Images/Skills/heroku.svg";
import L_Netlify from "../../assets/Images/Skills/netlify.png";
import { useTheme } from "../Themes/ThemeProvider";
import './Skills.scss';


const PortfolioSkills = () => {

    const { isDarkMode } = useTheme();
    return (
        <Container id="skills" className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div class="container">
                <h1 class="text-center text-capitalize pt-4" id="TechHeading">Tech Skills</h1>
                <div class="row text-center mb-5">
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12" id="Title1">
                        <div id="SkillsContainer1">
                            <Card.Body>
                                <h2 id="TitleHeading1">Frontend</h2>
                                <hr id="TitleLine1"></hr>
                                <div id="CardContents1">
                                    <a class="HTMLImage" href="https://en.wikipedia.org/wiki/HTML5" target="_blank" alt="image not loaded">
                                        <img src={L_HTML5} class="img-fluid" />
                                        <h5 class="HTMLHeading">HTML5</h5>
                                    </a>
                                    <a class="CSSImage" href="https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1" target="_blank" alt="image not loaded">
                                        <img src={L_CSS3} class="img-fluid" />
                                        <h5 class="CSSHeading">CSS3</h5>
                                    </a>
                                    <a class="BootStrapImage" href="https://getbootstrap.com/" target="_blank" alt="image not loaded">
                                        <img src={L_BOOTSTRAP} class="img-fluid" />
                                        <h5 class="BootstrapHeading">Bootstrap5</h5>
                                    </a>
                                    <a class="JavaScriptImage1" href="https://www.javascript.com/" target="_blank" alt="image not loaded">
                                        <img src={L_JAVASCRIPT} class="img-fluid" />
                                        <h5 class="JavaScriptHeading">JavaScript</h5>
                                    </a>
                                    <a class="ReactImage" href="https://reactjs.org/" target="_blank" alt="image not loaded">
                                        <img src={L_REACT} class="img-fluid" />
                                        <h5 class="ReactHeading">React&nbsp;JS</h5>
                                    </a>
                                    <a class="ReactRouterImage" href="https://reactrouter.com/en/main" target="_blank" alt="image not loaded">
                                        <img src={L_REACT_ROUTER} class="img-fluid" />
                                        <h5 class="ReactRouterHeading">React&nbsp;Router</h5>
                                    </a>
                                    <a class="ReactBootStrapImage" href="https://react-bootstrap.github.io/" target="_blank" alt="image not loaded">
                                        <img src={L_REACT_BOOTSTRAP} class="img-fluid" />
                                        <div id="ReactBootstrapHeadingContainer">
                                            <h5 class="ReactBootStrapHeading">React Bootstrap</h5>
                                        </div>

                                    </a>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12" id="title2">
                        <div id="SkillsContainer2">
                            <Card.Body>
                                <h2 id="TitleHeading2">Programming <p>Languages</p></h2>
                                <hr id="TitleLine2"></hr>
                                <div id="CardContents2">
                                    <a class="JavaScriptImage2" href="https://www.javascript.com/" target="_blank" alt="image not loaded">
                                        <img src={L_JAVASCRIPT} class="img-fluid" />
                                        <h5 class="JavaScriptHeading">JavaScript</h5>
                                    </a>
                                    <a class="JavaImage" href="https://www.w3schools.com/java/" target="_blank" alt="image not loaded">
                                        <img src={L_JAVA} class="img-fluid" />
                                        <h5 class="JavaHeading">Java</h5>
                                    </a>
                                </div>
                            </Card.Body>
                        </div>
                        <div id="SkillsContainer3">
                            <Card.Body>
                                <h2 id="TitleHeading3">Version Control</h2>
                                <hr id="TitleLine3"></hr>
                                <div id="CardContents2">
                                    <a class="GITImage" href="https://git-scm.com/" target="_blank" alt="image not loaded">
                                        <img src={L_GIT} class="img-fluid" />
                                        <h5 class="GITHeading">GIT</h5>
                                    </a>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-12 col-12" id="title3">
                        <div id="SkillsContainer4">
                            <Card.Body>
                                <h2 id="TitleHeading4">Hosting Platforms</h2>
                                <hr id="TitleLine4"></hr>
                                <div id="CardContents3">
                                    <a class="HerokuImage" href="https://www.heroku.com/" target="_blank" alt="image not loaded">
                                        <img src={L_Heroku} class="img-fluid" />
                                        <h5 class="HerokuHeading">Heroku</h5>
                                    </a>
                                    <a class="GitHubImage" href="https://pages.github.com/" target="_blank" alt="image not loaded">
                                        <img src={L_GITHUB_PAGES} class="img-fluid" />
                                        <h5 class="GitHubHeading">GitHub Pages</h5>
                                    </a>
                                    <a class="NetlifyImage" href="https://www.netlify.com/" target="_blank" alt="image not loaded">
                                        <img src={L_Netlify} class="img-fluid" />
                                        <h5 class="NetlifyHeading">Netlify</h5>
                                    </a>
                                </div>
                            </Card.Body>
                        </div>
                    </div>
                </div>
            </div>
        </Container>



    );
}

export default PortfolioSkills;