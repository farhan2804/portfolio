import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Contact.scss';

const PortfolioContact = () => {
    return (
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-6 col-md-6 col-12">
                    <h1>Contact Me</h1>
                    <h3>If you Have..........</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer facilisis metus nec risus hendrerit volutpat. Proin eget sapien id elit dapibus eleifend non a leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed tincidunt lacinia ipsum, at posuere nisi venenatis vitae. Aenean feugiat, ligula ut aliquam efficitur, nulla mi volutpat purus, sit amet volutpat risus urna nec quam</p>
                    <div id="ContactButton">
                        <Button variant="primary">Primary</Button>{' '}
                        <Button variant="secondary">Secondary</Button>{' '}
                        <Button variant="success">Success</Button>{' '}
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12">
                    <Form>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Your Email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicMobileNumber">
                            <Form.Label>Mobile Number</Form.Label>
                            <Form.Control type="tel" placeholder="Enter Your Mobile Number" />
                        </Form.Group>
                        <Form.Group controlId="formBasicTextArea">
                            <Form.Label>How can I help You</Form.Label>
                            <Form.Control id="text" type="textarea" rows="4" placeholder="Your Message Here....." />

                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default PortfolioContact;