import React, { useState } from "react";
import './cssfile/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <div className="logo-space">
        <div className="logo">
          <a href="home">
            <p id="testing">CYB-DEC</p>
          </a>
        </div>
      </div>
      <div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle Navigation">
        ☰
        </div>
        <div className={`nav-list ${isOpen ? 'active' : ''}`} id="navMenu">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;