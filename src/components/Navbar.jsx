import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          Robo<span>AI</span>Q
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#home" className="nav-item">
         
            <span className="text">Home</span>
          </a>

          <a href="#about" className="nav-item">
      
            <span className="text">About</span>
          </a>

          <a href="#products" className="nav-item">
          
            <span className="text">Products</span>
          </a>

          <a href="#contact" className="nav-item nav-cta">
            <span className="text">Contact</span>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
