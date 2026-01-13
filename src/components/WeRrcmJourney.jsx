import React from 'react';
import './WeRrcmJourney.css';

function WeRrcmJourney() {
  return (
    <section className="wrrcm-journey">
      <h2>Your Robotics Journey</h2>
      <p className="wrrcm-sub">A step-by-step roadmap from beginner to robot builder</p>

      <div className="wrrcm-steps">
        <div className="wrrcm-step"><span>01</span>Electronics Basics</div>
        <div className="wrrcm-step"><span>02</span>Sensors & Coding</div>
        <div className="wrrcm-step"><span>03</span>Motors & Actuators</div>
        <div className="wrrcm-step"><span>04</span>Complete Robot Build</div>
      </div>
    </section>
  );
}

export default WeRrcmJourney;
