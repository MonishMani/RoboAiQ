import React from 'react';
import ScrollFloat from './ScrollFloat';
import Timeline from './Timeline';
import './WeRrcmUnique.css';

function WeRrcmUnique() {
  const timelineItems = [
    {
      title: 'World-Class Education',
      description: 'Industry-standard curriculum designed by experts'
    },
    {
      title: 'Hands-On Projects',
      description: 'Learn by building real robots and systems'
    },
    {
      title: 'Competition Ready',
      description: 'Prepare for international robotics competitions'
    },
    {
      title: 'Small Batch Sizes',
      description: 'Personalized attention for every student'
    }
  ];

  return (
    <section className="wrrcm-unique">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        What Makes WeRrcm Unique?
      </ScrollFloat>
      <span className="wrrcm-tag">World Education & Robotic Research Center for Mechatronics</span>
      <p className="wrrcm-sub">Where young minds transform into robotics innovators</p>

      <div className="wrrcm-highlight">
        <h3>Specialized in STEM Training</h3>
        <p>
          STEM stands for Science, Technology, Engineering, and Mathematics.
          At WeRrcm, we integrate all four disciplines into our comprehensive robotics curriculum.
        </p>
      </div>

      <Timeline items={timelineItems} />
    </section>
  );
}

export default WeRrcmUnique;
