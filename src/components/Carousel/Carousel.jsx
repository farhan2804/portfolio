import React from "react";
import Image1 from "../../assets/Images/Carousel/4.png";
import Image2 from "../../assets/Images/Carousel/4th_Image.jpg";
import Image3 from "../../assets/Images/Carousel/slide1.webp";
import Image4 from "../../assets/Images/Carousel/1.jpg";
import Image5 from "../../assets/Images/Carousel/slide3.webp";
import Carousel from "react-bootstrap/Carousel";
import ScrollDown from "../ScrollDown/ScrollDown";
import "./Carousel.scss";

const PortfolioCarousel = () => {
  return (
    <div id="home" className="carousel-container d-flex flex-column">
      <Carousel
        controls={false}
        indicators={false}
        interval={2500}
        pause={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image1}
            alt="Slide 1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image2}
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image3}
            alt="Slide 3"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image4}
            alt="Slide 2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Image5}
            alt="Slide 2"
          />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>
  );
};

export default PortfolioCarousel;
