import "./RoboKitSection.css";

export default function RoboKitSection() {
  return (
    <section className="kit-section">

      {/* HEADER */}
      <div className="kit-header">
        <span className="kit-eyebrow">HARDWARE INCLUDED</span>
        <h2>Industry-Grade Robotics Kit  Included with Your Program</h2>
        <p>
          Every RoboAIQ student receives a complete, reusable robotics kit designed
          for hands-on learning, experimentation, and long-term use.
        </p>
      </div>

      {/* GRID */}
      <div className="kit-grid">

        {/* IMAGE */}
        <div className="kit-image">
          <img src="/robokit.png" alt="RoboAIQ Robotics Kit" />
          <div className="kit-image-badge">₹15,000+ VALUE</div>
        </div>

        {/* CONTENT */}
        <div className="kit-content">
          <h3>What’s Inside the RoboAIQ Robotics Kit</h3>

          <ul className="kit-list">
            <li>Arduino Uno & ESP32 Microcontrollers</li>
            <li>DC Motors, Servo Motors & Motor Drivers</li>
            <li>Ultrasonic, IR & Temperature Sensors</li>
            <li>LED Displays & Output Modules</li>
            <li>Breadboard, Jumper Wires & Connectors</li>
            <li>Wheels, Chassis & Battery Pack</li>
            <li>USB Cables, Resistors & Capacitors</li>
            <li>Expansion-ready components for future projects</li>
          </ul>

          {/* VALUE STRIPS */}
          <div className="kit-highlights">
            <div>
              <strong>No Hidden Costs</strong>
              <span>Everything required is included</span>
            </div>
            <div>
              <strong>Reusable & Durable</strong>
              <span>Use across multiple courses</span>
            </div>
            <div>
              <strong>Yours to Keep</strong>
              <span>Learn, build & experiment anytime</span>
            </div>
          </div>

          {/* FINAL BADGE */}
          <div className="kit-badge">
            Included at No Extra Cost · Worth ₹15,000+
          </div>
        </div>

      </div>
    </section>
  );
}
