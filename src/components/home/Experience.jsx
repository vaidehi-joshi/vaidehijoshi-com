import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Experience = ({ experiences }) => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(0.2);
  const { elementRef: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.3, 200);

  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 
            ref={headingRef}
            className={`display-4 mb-5 text-center scroll-animate ${headingVisible ? 'animate-in' : ''}`}
          >
            {experiences.heading}
          </h2>
          <div 
            ref={cardsRef}
            className={`scroll-animate-stagger ${cardsVisible ? 'animate-in' : ''}`}
          >
            <Row>
              {
                experiences.data.map((data, index) => {
                  return <ExperienceCard key={index} data={data} />
                })
              }
            </Row>
          </div>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;