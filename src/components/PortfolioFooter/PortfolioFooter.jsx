import React from 'react';
import './PortfolioFooter.scss';
import Button from 'react-bootstrap/Button';
const PortfolioFooter = () => {
       const scrollToTop = () => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
       };
       return (
              <div id="FooterContainer">
                     <div id="Name">
                            &copy; Farhan Mahmood &nbsp; {new Date().getMonth() + 1}-{new Date().getDate()}-
                            {new Date().getUTCFullYear()}
                     </div>
                     <div id="BackToTop">
                            <Button variant="danger" onClick={scrollToTop} title="Back to Top">
                                   <i className="fa-solid fa-arrow-up"></i>
                            </Button>
                     </div>
              </div>

       )
}
export default PortfolioFooter;