import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const { elementRef: headingRef, isVisible: headingVisible } = useScrollAnimation(0.2);
  const { elementRef: tabsRef, isVisible: tabsVisible } = useScrollAnimation(0.3, 200);

  return (
    <Jumbotron ref={ref} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 
          ref={headingRef}
          className={`display-4 pb-5 text-center scroll-animate ${headingVisible ? 'animate-in' : ''}`}
        >
          {heading}
        </h2>
        <div 
          ref={tabsRef}
          className={`scroll-animate-up ${tabsVisible ? 'animate-in' : ''}`}
        >
          <Tabs
            className="skills-tabs"
            defaultActiveKey="hard-skills"
            id="skills-tabs"
            fill
          >
            <Tab
              tabClassName="skills-tab lead"
              eventKey="hard-skills"
              title="Technical Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={hardSkills} isScrolled={tabsVisible} />
              </Row>
            </Tab>
            <Tab
              tabClassName="skills-tab lead"
              eventKey="soft-skills"
              title="Soft Skills"
            >
              <Row className="pt-3 px-1">
                <SkillsTab skills={softSkills} isScrolled={tabsVisible} />
              </Row>
            </Tab>
          </Tabs>
        </div>
      </Container>
    </Jumbotron>
  );
});

export default Skills;
