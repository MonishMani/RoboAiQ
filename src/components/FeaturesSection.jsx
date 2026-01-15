import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  const features = [
    {
      title: "AI LEARNING CORE",
      desc: "Adaptive intelligence-driven robotics training",
      percent: "92%"
    },
    {
      title: "ROBOTICS LAB SIMULATION",
      desc: "Build, program, and test real robots",
      percent: "88%"
    },
    {
      title: "GLOBAL COMPETITION NETWORK",
      desc: "International exposure & robotics leagues",
      percent: "64%"
    },
    {
      title: "STEM EXCELLENCE PATH",
      desc: "Structured progression from basics → mastery",
      percent: "74%"
    }
  ];

  return (
    <section className="features-section">
      {/* STARFIELD */}
      <div className="stars" />
      <div className="stars stars2" />
      <div className="stars stars3" />

      {/* GLOBAL GLOW */}
      <div className="global-glow" />

      {/* FEATURES GRID */}
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-hud">
            <h4>{f.title}</h4>
            <p>{f.desc}</p>
            <div className="hud-bar">
              <span style={{ width: f.percent }} />
              <label>{f.percent}</label>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
