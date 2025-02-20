import React from 'react';
import '../css/Skills.css';

const skillsList = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 
  'Python', 'Java', 'C', 'Flutter', 'FastAPI', 'SQL', 'PostMan API'
];

const Skills = () => {
  return (
    <div className="skills-section">
      <div className="skills-wrapper">
        <div className="skills-title-bg">
          <h1 className="skills-title">My Skills</h1>
        </div>

        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
