import React from 'react';
import Image from '../../assets/slide1.webp';
import Carousel from 'react-bootstrap/Carousel';



const PortfolioCarousel = () => {
  return (
    <Carousel controls={false} indicators interval={2500} pause={false}>
    <Carousel.Item>
    <img
      className="d-block w-100 custom-img"
      src={Image}
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
  );
}

export default PortfolioCarousel;