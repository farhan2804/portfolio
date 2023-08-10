import React, { useState, useEffect } from 'react';
import Image1 from '../../assets/Images/Carousel/copy1.jpg';
import Image2 from '../../assets/Images/Carousel/copy2.jpg';
import Image3 from '../../assets/Images/Carousel/copy4.png';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

const PortfolioCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  useEffect(() => {
    const images = document.querySelectorAll('.custom-img');
    images.forEach((image, index) => {
      if (index === activeIndex) {
        image.style.opacity = 1;
      } else {
        image.style.opacity = 0;
      }
    });
  }, [activeIndex]);

  return (
    <div id="home" className="carousel-container">
      <Carousel controls={false} indicators interval={2500} pause={false} activeIndex={activeIndex} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PortfolioCarousel;