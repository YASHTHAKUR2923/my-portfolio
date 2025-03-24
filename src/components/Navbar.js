import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home" onClick={closeMenu}>
          My<span className="highlight">Portfolio</span>
        </a>
      </div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#services" onClick={closeMenu}>Services</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <div className="nav-toggle" onClick={toggleNav}>
        {isOpen ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
      </div>
    </nav>
  );
}

export default Navbar;
