// src/components/SkillList.js
import React from 'react';

function SkillList({ title, skills }) {
  return (
    <div className="skills-head">
      <span>{title}</span>
      {skills.map(skill => (
        <p key={skill} className='skill-lau'>{skill}</p>
      ))}
    </div>
  );
}

export default SkillList;
