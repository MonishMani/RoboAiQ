import React from 'react';
import Stepper, { Step } from './Stepper';
import './WeRrcmJourney.css';

function WeRrcmJourney() {
  return (
    <section className="wrrcm-journey">
      <div className="journey-header">
        <span className="journey-tag">Learning Path</span>
        <h2>Your Robotics Journey</h2>
        <p>
          A structured roadmap guiding students from fundamentals
          to building real-world robotic systems
        </p>
      </div>

      <div className="journey-stepper-wrapper">
        <Stepper
          initialStep={1}
          onStepChange={(step) => console.log(`Step ${step}`)}
          onFinalStepCompleted={() => console.log("Journey completed!")}
          backButtonText="Previous"
          nextButtonText="Next"
        >
          <Step>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="1"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24"></path>
                  <path d="M1 12h6m6 0h6"></path>
                  <path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
                </svg>
              </div>
              <h3>Electronics Basics</h3>
              <p>
                Understand circuits, components, breadboards,
                and electrical fundamentals used in robotics.
              </p>
            </div>
          </Step>

          <Step>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"></path>
                </svg>
              </div>
              <h3>Sensors & Coding</h3>
              <p>
                Learn Arduino programming and integrate sensors
                to make intelligent robotic decisions.
              </p>
            </div>
          </Step>

          <Step>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M12 1v6m0 6v6"></path>
                  <path d="M4.22 4.22l4.24 4.24m5.08 5.08l4.24 4.24"></path>
                  <path d="M1 12h6m6 0h6"></path>
                  <path d="M4.22 19.78l4.24-4.24m5.08-5.08l4.24-4.24"></path>
                </svg>
              </div>
              <h3>Motors & Actuators</h3>
              <p>
                Control motors, servos, and mechanical motion systems
                used in real robots.
              </p>
            </div>
          </Step>

          <Step>
            <div className="step-card">
              <div className="step-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3>Complete Robot Build</h3>
              <p>
                Design, assemble, and program a fully functional robot
                from start to finish.
              </p>
            </div>
          </Step>
        </Stepper>
      </div>
    </section>
  );
}

export default WeRrcmJourney;
