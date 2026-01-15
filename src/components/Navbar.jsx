import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <div className="logo">
          <div className="logo-text">Robo<span>AI</span>Q</div>
          <div className="logo-subtext">powered by WeRrcm</div>
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <a href="#home" className="nav-item">
            <span className="text">Home</span>
          </a>

          <a href="#program" className="nav-item">
            <span className="text">Program</span>
          </a>

          <a href="#modules" className="nav-item">
            <span className="text">Modules</span>
          </a>

          <a href="#success-stories" className="nav-item">
            <span className="text">Success Stories</span>
          </a>

          <a href="#student-photos" className="nav-item">
            <span className="text">Student Photos</span>
          </a>

          <a href="#register" className="nav-item nav-register">
            <span className="text">Register</span>
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
