import React from 'react';
import { Link } from 'react-scroll';
import '../style/home.css';
import profilepic from '../img/adi.png';

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
        <a href="https://drive.google.com/file/d/1GO9hEHzdsB7ElYQ6mkuJ4h8u2b5At8eM/view?usp=sharing"><button id="explore1">Resume</button></a>
        <Link to="About" smooth={true} duration={500}>
          <button id="explore2">See More</button>
        </Link>
        <div className="icon">
          <a href="https://www.linkedin.com/in/aditya-gupta-5a752b234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fa-brands fa-linkedin"></i></a>
          <a href="mailto: adityagupta9137@gmail.com"><i className="fa-solid fa-envelope"></i></a>
          <a href="https://github.com/Adityagupta9"><i className="fa-brands fa-github"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Home;
