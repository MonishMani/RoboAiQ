import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/AboutUsPage.css';

export default function AboutUsPage() {
  return (
    <div className="about-page">
      <Navbar />

      {/* HERO */}
      <section className="about-hero">
        <div className="hero-grid">
          <div className="hero-left">
            <span className="hero-eyebrow">About RoboAIQ</span>
            <h1 className="hero-title">
              We Build <br /> Future Architects
            </h1>
            <p className="hero-description">
              RoboAIQ is a future-technology and leadership education platform where
              robotics, artificial intelligence, and entrepreneurial thinking converge
              to shape confident innovators of tomorrow.
            </p>
          </div>

          <div className="hero-right">
            <p className="hero-tagline">A launchpad for the exceptional.</p>
            <div className="hero-rule" />
          </div>
        </div>
      </section>

      {/* FOUNDATION */}
      <section className="about-section light">
        <div className="content-wide">
          <h2 className="section-title">What We Are</h2>

          <p className="lead-text">
            RoboAIQ is engineered to cultivate visionary innovators, entrepreneurs,
            and future global technology leaders.
          </p>

          <p className="body-text">
            We introduce children to startup thinking, leadership psychology, and
            advanced technology during their formative years—igniting creativity,
            curiosity, calculated risk-taking, and deep ownership of learning.
          </p>

          <div className="signal-row">
            <div>
              <span className="signal-label">Philosophy</span>
              <span className="signal-value">Entrepreneurial Thinking</span>
            </div>
            <div>
              <span className="signal-label">Focus</span>
              <span className="signal-value">Real-World Application</span>
            </div>
          </div>

          <blockquote className="editorial-quote">
            “We don’t teach textbook business — we ignite entrepreneurial thinking
            and leadership from day one.”
          </blockquote>
        </div>
      </section>

      {/* WHY */}
      <section className="about-section dark">
        <div className="content-wide two-column">
          <div>
            <h2 className="section-title inverse">Why We Exist</h2>
            <p className="lead-text inverse">
              Traditional education prepares students for exams.
              RoboAIQ prepares them to design the future.
            </p>
          </div>

          <div>
            <p className="body-text inverse">
              In a world driven by AI, automation, and exponential innovation,
              students must become architects—not spectators. RoboAIQ was founded
              with clarity: to prepare children to lead tomorrow’s world.
            </p>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-section light">
        <div className="content-medium">
          <h2 className="section-title">Our Philosophy</h2>

          <h3 className="manifesto">
            Exposure creates <span>excellence.</span>
          </h3>

          <p className="body-text">
            By immersing children in real-world technology ecosystems,
            startup methodologies, and innovation networks early, we empower them to:
          </p>

          <div className="pillar-grid">
            <div>
              <span className="pillar-index">01</span>
              <h4>Think Independently</h4>
              <p>Develop strategic thinking and intellectual confidence</p>
            </div>
            <div>
              <span className="pillar-index">02</span>
              <h4>Solve Complex Problems</h4>
              <p>Apply technology to real-world challenges</p>
            </div>
            <div>
              <span className="pillar-index">03</span>
              <h4>Lead With Confidence</h4>
              <p>Build resilience, decision-making, and leadership presence</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="about-section subtle">
        <div className="content-medium">
          <h2 className="section-title">Our Competitive Edge</h2>

          <ul className="signal-list">
            <li>Global-standard Robotics & AI curriculum</li>
            <li>State-of-the-art robotics labs</li>
            <li>1:1 mentorship and personalized learning</li>
            <li>Hybrid excellence model</li>
            <li>International competition exposure</li>
            <li>Entrepreneurship from early education</li>
            <li>Leadership & communication mastery</li>
            <li>Applied STEM for real-world impact</li>
            <li>Active integration with tech ecosystems</li>
          </ul>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="about-section light">
        <div className="content-wide split">
          <div>
            <h3 className="block-title">Our Vision</h3>
            <p className="body-text">
              To nurture confident communicators, audacious innovators,
              and ethical leaders shaping the future of technology and society.
            </p>
          </div>

          <div>
            <h3 className="block-title">Our Mission</h3>
            <p className="body-text">
              To deliver world-class future-technology education that develops
              technical mastery, entrepreneurial mindset, and leadership excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="about-closing">
        <h2>RoboAIQ is not an institute.</h2>
        <h1>It is a launchpad for the exceptional.</h1>
      </section>

      <Footer />
    </div>
  );
}
