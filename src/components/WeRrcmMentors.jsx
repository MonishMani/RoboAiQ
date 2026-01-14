import React from 'react';
import ChromaGrid from './ChromaGrid';
import './WeRrcmMentors.css';

function WeRrcmMentors() {
  const mentors = [
    {
      image: 'https://i.pravatar.cc/300?img=1',
      title: 'Narsing Chappe',
      subtitle: 'Robotics & Mathematics Specialist',
      handle: 'IIT Bombay',
      borderColor: '#ff9933',
      gradient: 'linear-gradient(145deg, #ff9933, #000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=2',
      title: 'Tamizharasan K',
      subtitle: 'Robotics & Programming Specialist',
      handle: '@tamizharasan',
      borderColor: '#3B82F6',
      gradient: 'linear-gradient(180deg, #3B82F6, #000)',
      url: 'https://linkedin.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=3',
      title: 'Sarah Johnson',
      subtitle: 'Frontend Developer',
      handle: '@sarahjohnson',
      borderColor: '#10B981',
      gradient: 'linear-gradient(145deg, #10B981, #000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=4',
      title: 'Mike Chen',
      subtitle: 'Backend Engineer',
      handle: '@mikechen',
      borderColor: '#8B5CF6',
      gradient: 'linear-gradient(180deg, #8B5CF6, #000)',
      url: 'https://linkedin.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=5',
      title: 'Alex Rivera',
      subtitle: 'Full Stack Developer',
      handle: '@alexrivera',
      borderColor: '#F59E0B',
      gradient: 'linear-gradient(145deg, #F59E0B, #000)',
      url: 'https://github.com/'
    },
    {
      image: 'https://i.pravatar.cc/300?img=6',
      title: 'Jordan Chen',
      subtitle: 'DevOps Engineer',
      handle: '@jordanchen',
      borderColor: '#06B6D4',
      gradient: 'linear-gradient(210deg, #06B6D4, #000)',
      url: 'https://linkedin.com/'
    }
  ];

  return (
    <section className="wrrcm-mentors">
      <h2>Meet Our Expert Mentors</h2>
      <p className="mentors-subtitle">Learn from industry experts and experienced robotics professionals</p>

      <div style={{ height: '600px', position: 'relative' }}>
        <ChromaGrid 
          items={mentors}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
}

export default WeRrcmMentors;
