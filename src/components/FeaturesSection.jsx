import React from 'react';
import ScrollFloat from './ScrollFloat';
import TiltedCard from './TiltedCard';
import HoverEffect from './HoverEffect';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="features-section">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Why Choose WeRrcm?
      </ScrollFloat>

      <div className="features-grid">
        <TiltedCard>
          <HoverEffect>
            <div className="feature">
              <h3>AI-Powered Learning</h3>
              <p>Advanced robotics curriculum integrated with artificial intelligence.</p>
            </div>
          </HoverEffect>
        </TiltedCard>

        <TiltedCard>
          <HoverEffect>
            <div className="feature">
              <h3>Competition Ready</h3>
              <p>Prepare for international robotics competitions and global challenges.</p>
            </div>
          </HoverEffect>
        </TiltedCard>

        <TiltedCard>
          <HoverEffect>
            <div className="feature">
              <h3>STEM Excellence</h3>
              <p>Comprehensive Science, Technology, Engineering & Mathematics training.</p>
            </div>
          </HoverEffect>
        </TiltedCard>
      </div>
    </section>
  );
}

export default FeaturesSection;
