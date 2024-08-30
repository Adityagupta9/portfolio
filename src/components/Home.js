import React from 'react';
import { Link } from 'react-scroll';
import '../style/home.css';
import profilepic from '../img/adi.png';
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";
function Home() {
  return (
    <div id='Home'>
      <div className="pic">
        <img src={profilepic} alt="Description" />
      </div>
      <div className="intro">
        <p id='intro1'>Hey, I am</p>
        <p id='intro2'>Aditya Gupta</p>
        <p id='intro3'>A <span>Full Stack Developer</span> dedicated to crafting comprehensive and seamless digital solutions, leveraging both frontend and backend expertise to drive the success of web projects from end to end.</p>

        <div id="explore-button">
          <a href="https://drive.google.com/file/d/1uKf8zd8uBFomR4y-VP4qlTOmkrbCNgUu/view?usp=sharing"><button id="explore1">Resume</button></a>
          <Link to="About" smooth={true} duration={500}>
            <button id="explore2">See More</button>
          </Link>
        </div>

        <div id="dsa-sec">
          <a href="https://leetcode.com/u/aditya_0102/"><button><SiLeetcode/></button></a>
          <a href="https://www.hackerrank.com/profile/adityagupta9137"><button><FaHackerrank/></button></a>
        </div>
  
        <div className="icon">
          <a href="https://www.linkedin.com/in/aditya-gupta-5a752b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedinIn/></a>
          <a href="mailto: adityagupta9137@gmail.com"><BiLogoGmail/></a>
          <a href="https://github.com/Adityagupta9"><FaGithub/></a>
        </div>
        
      </div>
    </div>
  );
}

export default Home;
