import { useState, useEffect } from 'react';
import './HeroSection.css';
import BookingModal from './BookingModal';
import SplitText from './SplitText';
import TextType from './TextType';

function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

  const handleOpenBooking = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="container hero-container">
          {/* Left Side - Text Content */}
          <div className="hero-left">
            <span className="eyebrow">NEXT GENERATION EDUCATION</span>

            <SplitText
              text="Children, Transform Your Future With Robotics & AI"
              tag="h1"
              delay={30}
              duration={1.2}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              textAlign="left"
              textColors={["#000000", "#000000", "#000000", "#000000", "#000000", "#FF1E1E", "#000000", "#FF1E1E"]}
            />

            <TextType
              text={[
                "Parents, Empower your children with world class Robotics and AI Education.",
                "Hands on experience with State of the Art Robotics Lab.",
                "Build future readiness for tomorrow's opportunities."
              ]}
              as="p"
              className="subtitle"
              typingSpeed={40}
              deletingSpeed={20}
              pauseDuration={2500}
              loop={true}
              showCursor={true}
              cursorCharacter="|"
              cursorBlinkDuration={0.6}
              textColors={[
                "#2E7BAE",
                "#2E7BAE"
              ]}
            />

            <div className="cta">
              <a
                href="#"
                className="btn primary btn-premium"
              >
                Explore Programs
              </a>
            </div>
          </div>

          {/* Right Side - Visual & Promo */}
          <div className="hero-right">
            <div className="hero-visual">
              <div className="robot-container">
                <div className="robot-viewer">
                  <spline-viewer url="https://prod.spline.design/2U23PaGiIpgFhZLX/scene.splinecode" camera-controls="false" background="transparent"></spline-viewer>
                </div>
              </div>
            </div>

            <div className="hero-promo glass-premium">
              <h2>Build Your First Robot!</h2>
              <a
                href="#"
                className="btn primary btn-premium"
                onClick={handleOpenBooking}
              >
                Book a Free Demo Class
              </a>
            </div>
          </div>
        </div>
      </section>



      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default HeroSection;

