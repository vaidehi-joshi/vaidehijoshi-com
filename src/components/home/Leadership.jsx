import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Jumbotron } from "./migration";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Leadership = ({ heading, message, img, imageSize }) => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(0.2);
  const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation(0.3, 200);
  const { elementRef: carouselRef, isVisible: carouselVisible } = useScrollAnimation(0.4, 400);

  return (
    <Jumbotron
      id="leadership"
      className="m-0"
      style={{ backgroundColor: "white" }}
    >
      <h2 
        ref={headingRef}
        className={`display-4 pb-5 text-center scroll-animate ${headingVisible ? 'animate-in' : ''}`}
      >
        {heading}
      </h2>
      <div className="row">
        <div 
          ref={contentRef}
          className={`col-md-5 scroll-animate-left ${contentVisible ? 'animate-in' : ''}`}
        >
          <p className="lead">{message}</p>
        </div>
        <div 
          ref={carouselRef}
          className={`col-md-7 scroll-animate-right ${carouselVisible ? 'animate-in' : ''}`}
        >
          <Carousel>
            {img.map((value, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={value.img}
                    alt="First slide"
                    width={imageSize.width}
                    height={imageSize.height}
                  />
                  <Carousel.Caption>
                    <h3>{value.label}</h3>
                    <p>
                      {value.paragraph}
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    </Jumbotron>
  );
};

export default Leadership;
