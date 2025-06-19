import React from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const { elementRef: titleRef, isVisible: titleVisible } = useScrollAnimation(0.1);
    const { elementRef: messageRef, isVisible: messageVisible } = useScrollAnimation(0.2, 300);
    const { elementRef: iconsRef, isVisible: iconsVisible } = useScrollAnimation(0.3, 600);

    return (
      <Jumbotron
        fluid
        id="home"
        style={{
          background: `linear-gradient(136deg,${gradient})`,
          backgroundSize: "1200% 1200%",
        }}
        className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"
      >
        <div id="stars"></div>
        <Container className="text-center">
          <h1 
            ref={(el) => {
              titleRef.current = el;
              if (ref) ref.current = el;
            }} 
            className={`display-1 scroll-animate-up ${titleVisible ? 'animate-in' : ''}`}
          >
            {title}
          </h1>
          <div 
            ref={messageRef}
            className={`scroll-animate ${messageVisible ? 'animate-in' : ''}`}
          >
            <Typist>
              <div className="lead typist">
                {message}
              </div>
            </Typist>
          </div>
          <div 
            ref={iconsRef}
            className={`p-5 scroll-animate-stagger ${iconsVisible ? 'animate-in' : ''}`}
          >
            {icons.map((icon, index) => (
              <a
                key={`social-icon-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                href={icon.url}
                aria-label={`My ${icon.image.split("-")[1]}`}
              >
                <i className={`fab ${icon.image} fa-3x socialicons`} />
              </a>
            ))}
          </div>
          <a
            className="btn btn-outline-light btn-lg scroll-animate-scale"
            href="#aboutme"
            role="button"
            aria-label="Learn more about me"
          >
            More about me
          </a>
        </Container>
      </Jumbotron>
    );
  }
);

export default MainBody;
