import React from 'react';
import ScrollFloat from './ScrollFloat';
import GlowButton from './GlowButton';
import AnimatedCounter from './AnimatedCounter';
import './WeRrcmContactForm.css';

function WeRrcmContactForm() {
  return (
    <section className="wrrcm-contact">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Ready to Build Your First Robot?
      </ScrollFloat>

      <div className="contact-stats">
        <div className="stat">
          <h3><AnimatedCounter end={500} suffix="+" /></h3>
          <p>Students Trained</p>
        </div>
        <div className="stat">
          <h3><AnimatedCounter end={50} suffix="+" /></h3>
          <p>Awards Won</p>
        </div>
        <div className="stat">
          <h3><AnimatedCounter end={15} suffix="+" /></h3>
          <p>Countries Reached</p>
        </div>
      </div>

      <form className="wrrcm-form">
        <input placeholder="Student Name" />
        <input placeholder="Age (10-18)" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <textarea placeholder="Interest in robotics"></textarea>
        <GlowButton variant="primary">Submit Enquiry</GlowButton>
      </form>
    </section>
  );
}

export default WeRrcmContactForm;
