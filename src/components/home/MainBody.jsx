import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Typist from 'react-typist-component';
import { Jumbotron } from "./migration";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const MainBody = React.forwardRef(
  ({ gradient, title, message, icons }, ref) => {
    const [iconsVisible, setIconsVisible] = useState(false);
    
    const { elementRef: messageRef, isVisible: messageVisible } = useScrollAnimation(0.2, 300);

    // Icons appear after a delay
    useEffect(() => {
      const timer = setTimeout(() => {
        setIconsVisible(true);
      }, 1000); // 1 second delay

      return () => clearTimeout(timer);
    }, []);

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
            ref={ref} 
            className="display-1"
            style={{ opacity: 1, transform: 'translateY(0)' }}
          >
            {title}
          </h1>
          <div 
            ref={messageRef}
            className=""
          >
            <Typist className="typing-container">
              <div className="lead typist typing-text">
                {message}
              </div>
            </Typist>
          </div>
          <div 
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
