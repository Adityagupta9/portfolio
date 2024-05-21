import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import '../style/nav.css';

function Navbar() {
  return (
    <div>
      <ul className="navbar">
        <li className="nav"><Link to="Home" smooth={true} duration={500}>HOME</Link></li>
        <li className="nav"><Link to="About" smooth={true} duration={500}>ABOUT</Link></li>
        <li className="nav"><Link to="Project" smooth={true} duration={500}>PROJECTS</Link></li>
        <li className="nav"><Link to="Contact" smooth={true} duration={500}>CONTACT</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
