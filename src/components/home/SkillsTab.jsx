import React from "react";
import Col from "react-bootstrap/Col";
import SkillsBar from "./SkillsBar";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";

function SkillsSection({ skills, isScrolled }) {
  const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation(0.2);

  return (
    <div 
      ref={skillsRef}
      className={`scroll-animate-stagger ${skillsVisible ? 'animate-in' : ''}`}
    >
      {skills.map((skill, index) => (
        <SkillsBar
          key={`${skill}-${index}`}
          skill={skill.name}
          value={skill.value}
          isScrolled={isScrolled}
        />
      ))}
    </div>
  );
}

function SkillsTab({ skills, isScrolled }) {
  return (
    <>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(0, Math.floor(skills.length / 2))}
          isScrolled={isScrolled}
        />
      </Col>
      <Col xs={12} md={6}>
        <SkillsSection
          skills={skills.slice(Math.floor(skills.length / 2), skills.length)}
          isScrolled={isScrolled}
        />
      </Col>
    </>
  );
}

export default SkillsTab;
