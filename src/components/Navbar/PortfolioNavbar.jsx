import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './PortfolioNavbar.scss';

const PortfolioNavbar = () => {
    return (
        <>
            <div className="portfolioNavbar">
                <Navbar expand="lg" className="bg-body-tertiary">
                    <Container>
                        <div className="navbarBrand">
                            <Row>
                                <Col xs={6} md={4}>
                                    <Image src="/" rounded />
                                </Col>
                            </Row>
                            <Navbar.Brand >Farhan Mahmood</Navbar.Brand>
                        </div>

                        <Nav defaultActiveKey="/home" as="ul">
                            <Nav.Item as="li">
                                <Nav.Link href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-1">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Skills</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                                <Nav.Link eventKey="link-2">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default PortfolioNavbar;
