// src/components/About.js
import React from 'react';
import '../style/about.css';
import AboutMe from './AboutMe';
import Skills from './Skills';

function About() {
  return (
    <div id='About'>
      <div className='gap'>
        hii
      </div>
      <div className='head'>ABOUT ME</div>
      <div className="aboutcontainer">
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
}

export default About;
