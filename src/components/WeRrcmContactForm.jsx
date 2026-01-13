import React from 'react';
import './WeRrcmContactForm.css';

function WeRrcmContactForm() {
  return (
    <section className="wrrcm-contact">
      <h2>Ready to Build Your First Robot?</h2>

      <form className="wrrcm-form">
        <input placeholder="Student Name" />
        <input placeholder="Age (10-18)" />
        <input placeholder="Email" />
        <input placeholder="Phone" />
        <textarea placeholder="Interest in robotics"></textarea>
        <button type="submit">Submit Enquiry</button>
      </form>
    </section>
  );
}

export default WeRrcmContactForm;
