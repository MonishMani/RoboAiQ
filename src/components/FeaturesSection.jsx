import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <h2>Why Choose WeRrcm?</h2>

      <div className="features-grid">
        <div className="feature">
          <h3>AI-Powered Learning</h3>
          <p>Advanced robotics curriculum integrated with artificial intelligence.</p>
        </div>

        <div className="feature">
          <h3>Competition Ready</h3>
          <p>Prepare for international robotics competitions and global challenges.</p>
        </div>

        <div className="feature">
          <h3>STEM Excellence</h3>
          <p>Comprehensive Science, Technology, Engineering & Mathematics training.</p>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
