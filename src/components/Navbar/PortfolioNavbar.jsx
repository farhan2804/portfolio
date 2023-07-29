import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './PortfolioNavbar.scss';

const PortfolioNavbar = () => {
    return (
        <>
            <div id="portfolioNavbar">
                <Navbar>
                    <Container>
                        <div className="navbarBrand">
                            <Navbar.Brand >Farhan Mahmood</Navbar.Brand>
                        </div>
                   <div className="navbarElements">
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
                        </div>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default PortfolioNavbar;
