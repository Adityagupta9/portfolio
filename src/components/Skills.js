// src/components/Skills.js
import React from 'react';
import SkillList from './SkillList';

function Skills() {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React'];
  const backendSkills = ['Node.js', 'Express'];
  const databaseSkills = ['MongoDB', 'MySQL'];
  const languages = ['C++', 'C', 'Python', 'Java'];

  return (
    <div className="skills">
      <h2>Expertise & Technology Stack</h2>
      <div className="skills-list">
        <SkillList title="Frontend" skills={frontendSkills} />
        <SkillList title="Backend" skills={backendSkills} />
        <SkillList title="Database" skills={databaseSkills} />
        <SkillList title="Languages" skills={languages} />
      </div>
    </div>
  );
}

export default Skills;
