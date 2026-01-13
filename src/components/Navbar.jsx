import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    if (target !== '#home') {
      console.log('Navigate to:', target);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">RoboAIQ</div>
        <div className="nav-links">
          <a href="#home" onClick={handleNavClick}>HOME</a>
          <a href="#about" onClick={handleNavClick}>ABOUT</a>
          <a href="#products" onClick={handleNavClick}>PRODUCTS</a>
          <a href="#contact" onClick={handleNavClick}>CONTACT</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
