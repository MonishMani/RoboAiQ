import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Ready to Build Your First Robot?</h2>

      <div className="contact-box">
        <input placeholder="Student Name" />
        <input placeholder="Age (10–18)" />
        <input placeholder="Email" />
        <textarea placeholder="Interest in robotics"></textarea>
        <a href="#" className="btn">Submit Enquiry</a>
      </div>
    </section>
  );
}

export default ContactSection;
