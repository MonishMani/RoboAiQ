import { useEffect } from 'react';
import LightRays from './LightRays';
import Orb from './Orb';
import './HeroSection.css';

function HeroSection() {
  useEffect(() => {
    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    if (heroLeft && heroRight) {
      heroLeft.style.opacity = '0';
      heroLeft.style.transform = 'translateX(-20px)';
      heroRight.style.opacity = '0';
      heroRight.style.transform = 'translateX(20px)';

      setTimeout(() => {
        heroLeft.style.transition = 'all 0.8s ease';
        heroRight.style.transition = 'all 0.8s ease';
        heroLeft.style.opacity = '1';
        heroLeft.style.transform = 'translateX(0)';
        heroRight.style.opacity = '1';
        heroRight.style.transform = 'translateX(0)';
      }, 100);
    }

    // Loop 3D model animation with increased speed
    const splineViewers = document.querySelectorAll('spline-viewer');
    splineViewers.forEach(viewer => {
      viewer.addEventListener('load', () => {
        if (viewer.setPlaybackRate) {
          viewer.setPlaybackRate(2.5);
        }
        if (viewer.setLoop) {
          viewer.setLoop(true);
        }
        if (viewer.play) {
          viewer.play();
        }
      });
    });

    // Ensure animations loop continuously
    const interval = setInterval(() => {
      splineViewers.forEach(viewer => {
        if (viewer.play && !viewer.isPlaying) {
          viewer.play();
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero-right">
        <div className="robot-container">
          <div className="robot-viewer">
            <spline-viewer url="https://prod.spline.design/2U23PaGiIpgFhZLX/scene.splinecode"></spline-viewer>
          </div>
        </div>
      </div>

      <div className="light-rays-section">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="light-rays-content">
          <div className='lignt-rays-texts'>
            <h2>Build Your First Robot!</h2>
            <p>From basic electronics to advanced mechatronics – join WeRrcm and master robotics through hands-on projects.<br></br> Perfect for students aged 10-18!</p>
            <div className="light-rays-buttons">
              <a href="#" className="btn primary">Book a Free Demo Class</a>
              <a href="#" className="btn secondary">Download Sample Project</a>
            </div>
          </div>
        </div>
        <div className="light-rays-model">
          <spline-viewer url="https://prod.spline.design/BYIS8yoHE3GglSRS/scene.splinecode"></spline-viewer>
        </div>
      </div>

      <section className="hero hero-second">
        <div className="orb-background">
          <Orb 
            hue={260}
            hoverIntensity={0.2}
            rotateOnHover={true}
            backgroundColor="#0b1020"
          />
        </div>
        
        <span className="eyebrow">NEXT GENERATION EDUCATION</span>

        <h1>
          Transform <span>Your</span> Future<br />
          With Robotics
        </h1>

        <p className="subtitle">
          Empowering students with world-class robotics education, cutting-edge
          technology, and hands-on experience that prepares them for tomorrow's challenges.
        </p>

        <div className="cta">
          <a href="#" className="btn primary">Explore Programs</a>
          <a href="#" className="btn ghost">Watch Demo</a>
        </div>

        <div className="features">
          <div className="feature-card">
            <div className="icon">🤖</div>
            <h3>AI-Powered Learning</h3>
            <p>Advanced robotics curriculum integrated with artificial intelligence.</p>
          </div>

          <div className="feature-card">
            <div className="icon">⚙️</div>
            <h3>Cutting-Edge Technology</h3>
            <p>Industry-standard tools and platforms used by professionals.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🌍</div>
            <h3>Global Recognition</h3>
            <p>International competition victories and prestigious awards.</p>
          </div>

          <div className="feature-card">
            <div className="icon">🎓</div>
            <h3>Excellence in STEM</h3>
            <p>Comprehensive training in Science, Technology, Engineering & Math.</p>
          </div>
        </div>

        <div className="stats">
          <div>
            <h4>500+</h4>
            <span>Students Trained</span>
          </div>
          <div>
            <h4>50+</h4>
            <span>Awards Won</span>
          </div>
          <div>
            <h4>15+</h4>
            <span>Countries Reached</span>
          </div>
          <div>
            <h4>100%</h4>
            <span>Success Rate</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
