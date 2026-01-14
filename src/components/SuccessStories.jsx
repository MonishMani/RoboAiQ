import React from 'react';
import MagicBento from './MagicBento';
import './SuccessStories.css';

function SuccessStories() {
  return (
    <section className="success-stories">
      <div className="success-stories-header">
        <h2>Competition Success Stories</h2>
        <p>Our students compete and win at international robotics competitions</p>
      </div>

      <div className="success-stories-content">
        <div className="success-stories-intro">
          <div className="prestige-badge">PRESTIGIOUS RECOGNITION</div>
          <h3>Student Honored by Dindigul District Collector</h3>
          <p>Mr. Dignesh receives prestigious award from the District Collector of Dindigul, Tamil Nadu, recognizing excellence in robotics and academic achievement</p>
        </div>

        <MagicBento
          enableStars={false}
          enableSpotlight={false}
          spotlightRadius={390}
        />
      </div>
    </section>
  );
}

export default SuccessStories;
