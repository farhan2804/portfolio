import React from 'react';
import './PortfolioFooter.scss';
import Button from 'react-bootstrap/Button';
const PortfolioFooter = () => {
       return (
              <div id="FooterContainer">
                     <div id="Name">
                            Farhan Mahmood &nbsp; {new Date().getMonth() + 1}-{new Date().getDate()}-
                            {new Date().getUTCFullYear()}
                     </div>
                     <div id="BackToTop">
                            <Button variant="danger" title="Back to Top">
                                   <i class="fa-solid fa-arrow-up"></i>
                            </Button>
                     </div>
              </div>

       )
}
export default PortfolioFooter;