import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/ProgramsPage.css';
import { useState } from 'react';

function ProgramCurriculumPage() {
  const [expandedProgram, setExpandedProgram] = useState(0);

  const programs = [
    {
      id: 1,
      title: 'Robotics & AI Program',
      icon: 'AI',
      color: '#7DB3E8',
      description: 'Master advanced robotics and artificial intelligence with hands-on engineering experience.',
      highlights: [
        'Next-generation AI curriculum',
        'State-of-the-art robotics labs',
        'Real-world problem solving',
        'Industry-standard tools and platforms'
      ]
    },
    {
      id: 2,
      title: 'STEM Leadership Program',
      icon: 'STEM',
      color: '#569BD1',
      description: 'Develop scientific thinking combined with leadership excellence and strategic decision-making.',
      highlights: [
        'Integrated STEM learning',
        'Leadership development',
        'Critical thinking mastery',
        'Research and innovation focus'
      ]
    },
    {
      id: 3,
      title: 'Startup & Entrepreneurship Track',
      icon: 'STARTUP',
      color: '#3D7DB3',
      description: 'Learn to think like founders—building innovation mindset and execution excellence.',
      highlights: [
        'Founder mindset training',
        'Business model development',
        'Innovation workshops',
        'Mentorship from entrepreneurs'
      ]
    },
    {
      id: 4,
      title: 'Competition & Championship Training',
      icon: 'COMPETE',
      color: '#2A6296',
      description: 'Compete at the highest levels—national and international robotics championships.',
      highlights: [
        'Competition-ready training',
        'Global robotics leagues',
        'Championship preparation',
        'Team excellence building'
      ]
    },
  ];

  const features = [
    {
      icon: '01',
      title: 'Advanced Robotics & AI Master Curriculum',
      description: 'A rigorously designed, next-generation curriculum in Robotics and Artificial Intelligence—aligned with global technology standards and future industry demands.'
    },
    {
      icon: '02',
      title: 'World-Class Robotics Innovation Lab',
      description: 'Training inside a state-of-the-art robotics laboratory, equipped with advanced tools, hardware, and platforms used in real technology environments.'
    },
    {
      icon: '03',
      title: 'Hybrid Executive-Style Learning',
      description: 'A premium hybrid model combining in-person elite lab sessions with high-impact online mentorship—ensuring flexibility without compromising depth or quality.'
    },
    {
      icon: '04',
      title: 'Precision Learning with 1:1 Focus',
      description: 'Highly personalized learning with individual attention, mentorship, and performance tracking. Every child is treated as a high-potential individual.'
    },
    {
      icon: '05',
      title: 'Global Robotics Leagues & Championships',
      description: 'Exclusive access to national and international robotics leagues and competitions, where students compete, innovate, and gain global recognition.'
    },
    {
      icon: '06',
      title: 'Access to India\'s Top Tech Ecosystems',
      description: 'Strategic exposure aligned with India\'s most prestigious technology institutions including IIT Mumbai, IIT Delhi, and IIT Madras.'
    },
    {
      icon: '07',
      title: 'Startup & Entrepreneurial Conditioning',
      description: 'We condition children to think like founders, not followers—focusing on innovation, decision-making, ownership, and execution from an early age.'
    },
    {
      icon: '08',
      title: 'Executive-Level Communication Skills',
      description: 'Advanced training to build confident speakers and persuasive presenters, enabling students to articulate ideas, pitch innovations, and lead conversations.'
    },
    {
      icon: '09',
      title: 'STEM Excellence with Real-World Application',
      description: 'A deeply integrated STEM-driven approach, transforming theory into real-world problem-solving and analytical mastery.'
    },
    {
      icon: '10',
      title: 'Curated Industrial & Innovation Visits',
      description: 'Exclusive exposure to advanced robotics and technology facilities through curated industry visits at leading tech companies and research centers.'
    },
  ];

  return (
    <>
      <Navbar />

      <div className="programs-page">
        {/* HERO */}
        <section className="programs-hero">
          <div className="hero-decorations">
            <div className="deco-sphere deco-1"></div>
            <div className="deco-sphere deco-2"></div>
          </div>
          <div className="programs-hero-content">
            <span className="programs-eyebrow">Elite Future-Tech Leadership</span>
            <h1 className="programs-title">
              RoboAIQ Programs
            </h1>
            <p className="programs-lead">
              RoboAIQ is not a hobby class.
            </p>
            <p className="programs-subtitle">
              It is a high-impact future leadership program designed for parents who demand more than ordinary education. Blending advanced robotics, artificial intelligence, leadership, and entrepreneurial thinking.
            </p>
          </div>
        </section>

        {/* INTERACTIVE PROGRAM CARDS */}
        <section className="programs-showcase">
          <div className="programs-showcase-container">
            <div className="programs-grid">
              {programs.map((program) => (
                <div
                  key={program.id}
                  className={`program-card ${expandedProgram === program.id ? 'active' : ''}`}
                  onClick={() => setExpandedProgram(expandedProgram === program.id ? null : program.id)}
                  style={{ '--program-color': program.color }}
                >
                  <div className="card-header">
                    <span className="program-icon">{program.icon}</span>
                    <h3 className="program-card-title">{program.title}</h3>
                  </div>
                  
                  <p className="program-card-description">{program.description}</p>
                  
                  {expandedProgram === program.id && (
                    <div className="program-highlights">
                      <h4>Key Highlights:</h4>
                      <ul>
                        {program.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="card-cta">Learn More →</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROGRAM DEPTH FEATURES */}
        <section className="programs-depth">
          <div className="depth-container">
            <div className="depth-header">
              <h2 className="section-title">What Makes Us Exceptional</h2>
              <p className="section-subtitle">Comprehensive program architecture delivering world-class education</p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h4 className="feature-title">{feature.title}</h4>
                  <p className="feature-description">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING */}
        <section className="programs-closing">
          <div className="closing-content">
            <h2 className="closing-subtitle">Our Promise</h2>
            <h1 className="closing-title">We prepare children for leadership, not just exams.</h1>
            <p className="closing-description">
              Every RoboAIQ program is designed with one goal: to unlock exceptional potential and prepare students to lead the future.
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default ProgramCurriculumPage;
