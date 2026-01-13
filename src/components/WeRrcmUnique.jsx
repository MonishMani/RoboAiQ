import React from 'react';
import './WeRrcmUnique.css';

function WeRrcmUnique() {
  return (
    <section className="wrrcm-unique">
      <h2>What Makes WeRrcm Unique?</h2>
      <span className="wrrcm-tag">World Education & Robotic Research Center for Mechatronics</span>
      <p className="wrrcm-sub">Where young minds transform into robotics innovators</p>

      <div className="wrrcm-highlight">
        <h3>Specialized in STEM Training</h3>
        <p>
          STEM stands for Science, Technology, Engineering, and Mathematics.
          At WeRrcm, we integrate all four disciplines into our comprehensive robotics curriculum.
        </p>
      </div>

      <div className="wrrcm-feature-grid">
        <div className="wrrcm-feature">World-Class Education</div>
        <div className="wrrcm-feature">Hands-On Projects</div>
        <div className="wrrcm-feature">Competition Ready</div>
        <div className="wrrcm-feature">Small Batch Sizes</div>
      </div>
    </section>
  );
}

export default WeRrcmUnique;
