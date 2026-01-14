import React, { useEffect } from 'react';
import './WeRrcmUnique.css';

function WeRrcmUnique() {

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  const features = [
    {
      title: 'World-Class Education',
      description: 'Learn from industry experts with global competition experience'
    },
    {
      title: 'Hands-On Projects',
      description: 'Build real robots with practical project-based learning'
    },
    {
      title: 'Competition Ready',
      description: 'Prepare for international robotics competitions'
    },
    {
      title: 'Small Batch Sizes',
      description: 'Personalized mentorship with focused attention'
    }
  ];

  return (
    <section className="wrrcm-unique">
      <div className="wrrcm-unique-content">

        <h2 className="wrrcm-title reveal">
          What Makes <span>WeRrcm</span> Unique?
        </h2>

        <span className="wrrcm-tag reveal">
          World Education & Robotic Research Center for Mechatronics
        </span>

        <p className="wrrcm-sub reveal">
          Where young minds transform into robotics innovators
        </p>

        <div className="wrrcm-divider reveal"></div>

        {/* Highlight */}
        <div className="wrrcm-highlight reveal">
          <div className="highlight-icon">⚙️</div>
          <h3>Specialized in STEM Training</h3>
          <p>
            STEM integrates Science, Technology, Engineering and Mathematics into
            a unified robotics learning ecosystem — preparing students for the
            future of innovation.
          </p>
        </div>

        {/* Features */}
        <div className="wrrcm-features-grid">
          {features.map((item, i) => (
            <div key={i} className="wrrcm-feature-card reveal">
              <div className="feature-icon">🤖</div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="comparison-section reveal">
          <h3>Why WeRrcm Stands Apart</h3>

          <div className="comparison-grid">
            <div className="comparison-card highlight">
              <h4>WeRrcm</h4>
              <ul>
                <li>✔ Real Robotics Projects</li>
                <li>✔ Competition-Focused Training</li>
                <li>✔ Industry Expert Mentors</li>
                <li>✔ Global Exposure</li>
              </ul>
            </div>

            <div className="comparison-card">
              <h4>Traditional Training</h4>
              <ul>
                <li>✖ Theory Based</li>
                <li>✖ No Practical Exposure</li>
                <li>✖ Limited Mentorship</li>
                <li>✖ Local Scope</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accreditation */}
        <div className="accreditation-section reveal">
          <h3>Accredited & Recognized By</h3>
          <div className="badge-row">
            <span>ISO Certified</span>
            <span>STEM Approved</span>
            <span>International Robotics Council</span>
            <span>Education Excellence Award</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WeRrcmUnique;
