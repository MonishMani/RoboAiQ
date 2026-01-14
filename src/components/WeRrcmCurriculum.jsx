import React from "react";
import "./WeRrcmCurriculum.css";

const curriculum = [
  { step: "01", title: "Electronics Fundamentals", icon: "⚡", desc: "Understand circuits, components, and power systems." },
  { step: "02", title: "Sensor Integration", icon: "🧠", desc: "Work with real-world sensors and data acquisition." },
  { step: "03", title: "Motor Control Systems", icon: "⚙️", desc: "Control DC, Servo, and Stepper motors precisely." },
  { step: "04", title: "IoT Communication", icon: "🌐", desc: "Connect robots to the cloud and remote systems." },
  { step: "05", title: "Arduino Programming", icon: "💻", desc: "Code logic, automation, and hardware interaction." },
  { step: "06", title: "Competition Preparation", icon: "🏆", desc: "Build, test, and compete like industry teams." }
];

function WeRrcmCurriculum() {
  return (
    <section className="wrrcm-curriculum">
      <div className="curriculum-container">

        {/* LEFT – INFO */}
        <div className="curriculum-left">
          <span className="curriculum-badge">Structured Learning Path</span>
          <h2>Robotics Curriculum Journey</h2>
          <p>
            A carefully engineered roadmap that transforms beginners into
            confident robotics engineers through hands-on learning,
            real-world systems, and competition exposure.
          </p>

          <ul className="curriculum-points">
            <li>Industry-aligned skill progression</li>
            <li>Hands-on hardware mastery</li>
            <li>Competition & project-based learning</li>
          </ul>
        </div>

        {/* RIGHT – TIMELINE */}
        <div className="curriculum-right">
          <div className="timeline-line"></div>

          {curriculum.map((item, index) => (
            <div className="timeline-card" key={index}>
              <div className="timeline-step">{item.step}</div>

              <div className="timeline-content">
                <div className="timeline-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WeRrcmCurriculum;
