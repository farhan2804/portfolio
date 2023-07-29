import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from '../../assets/slide2.webp';
import Container from 'react-bootstrap/Container';
import './Skills.scss';

const PortfolioSkills = () => {
    return (
        <Container>
            <h1 class="text-center text-capitalize pt-4">Tech Skills</h1>
            <hr class="w-50 mx-auto pt-3"></hr>
            <div class="row text-center mb-5">
                <div class="col-lg-4 col-md-4 col-12">
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
                <div class="col-lg-4 col-md-4 col-12">
                    <Card.Img variant="top" src={Image} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </div>
            </div>
        </Container>



    );
}

export default PortfolioSkills;