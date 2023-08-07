import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useTheme } from "../Themes/ThemeProvider";
import './Contact.scss';

const PortfolioContact = () => {
    const { isDarkMode } = useTheme();
    return (
        <div>
            <Container className={isDarkMode ? 'dark-mode' : 'light-mode'}>
                <div id="contact" class="container" >
                    <div class="row mb-5">
                        <div class="col-lg-6 col-md-6  col-sm-12 col-12">
                            <h1>Contact Me</h1>
                            <h3>If you Have..........</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis metus nec risus hendrerit volutpat. Proin eget sapien id elit dapibus eleifend non a leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tincidunt lacinia ipsum, at posuere nisi venenatis vitae. Aenean feugiat, ligula ut aliquam efficitur, nulla mi volutpat purus, sit amet volutpat risus urna nec quam</p>
                            <div id="ContactButtonContainer">
                                <div className="MailButton">
                                    <a href="mailto:farhan.akp17el@gmail.com" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="danger"
                                            title="farhan.akp17el@gmail.com">
                                            <i className="fas fa-envelope-square"></i> Email
                                        </Button>
                                    </a>
                                </div>
                                <div className="LinkedButton">
                                    <a href="https://www.linkedin.com/in/10-farhan-mahmood" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="info"
                                            title="Visit my LinkenIn">
                                            <i className="fab fa-linkedin"></i> LinkedIn
                                        </Button>
                                    </a>
                                </div>
                                <div className="GitButton">
                                    <a href="https://github.com/farhan2804" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="dark"
                                            title="My other projects">
                                            <i className="fab fa-github-square"></i> GitHub
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                            <Form>
                                <Form.Group controlId="formBasicText">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control id="textName" type="text" placeholder="Enter Your Name" />
                                </Form.Group>
                                <Form.Group id="formBasicTextArea">
                                    <Form.Label>Any Suggestions for me !!!</Form.Label>
                                    <div className="textarea-container">
                                        <Form.Control id="textMessage" as="textarea" rows="4" placeholder="Your Message Here....." />
                                    </div>
                                </Form.Group>
                                <Form.Group id="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" id="submitButton" type="submit">
                                    Send Message
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default PortfolioContact;