import React from 'react';
import ScrollFloat from './ScrollFloat';
import InfiniteMovingCards from './InfiniteMovingCards';
import './WeRrcmTestimonials.css';

function WeRrcmTestimonials() {
  const testimonials = [
    '"I built my first robot in 3 weeks!" – Arjun Sharma',
    '"Represented India in Russia!" – Janithaa M',
    '"Won engineering scholarship!" – Rohan Kumar',
    '"Now I teach my friends!" – Ananya Reddy'
  ];

  return (
    <section className="wrrcm-testimonials">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        What Our Students Say
      </ScrollFloat>

      <InfiniteMovingCards items={testimonials} speed={30} />
    </section>
  );
}

export default WeRrcmTestimonials;
