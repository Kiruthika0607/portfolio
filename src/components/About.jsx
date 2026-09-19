import React from 'react';
import { Award, Code2, Compass, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Compass size={14} />
            <span>WHO I AM</span>
          </div>
          <h2 className="section-title">Bridging Code, Problem Solving & Purpose</h2>
          <p className="section-description">
            A developer mindset rooted in logical thinking, rapid prototyping, and engineering reliable full-stack software.
          </p>
        </div>

        <div className="about-grid">
          {/* Text & Story Column */}
          <div className="about-text-column">
            <p>
              I am an Information Technology undergraduate at <strong>Bannari Amman Institute of Technology</strong>, driven by a deep fascination with how modern software bridges user experience and intelligent backend architectures.
            </p>
            <p>
              My journey is fueled by intense, hands-on competitive environments. Leading teams through 24-hour hackathons taught me how to architect under constraints, write clean maintainable code, integrate databases, and build intuitive user interfaces that solve tangible problems.
            </p>

            {/* Prominent Reliance Foundation Scholarship Box */}
            <div className="scholar-highlight-box">
              <div className="scholar-icon-box">
                <Award size={22} />
              </div>
              <div>
                <h3 className="scholar-highlight-title">Reliance Foundation Undergraduate Scholar</h3>
                <p className="scholar-highlight-desc">
                  Selected among top students nationwide for academic excellence and technological leadership potential, receiving mentorship and scholarship support to pursue advanced software engineering.
                </p>
              </div>
            </div>

            <p>
              Whether structuring relational schemas in MySQL, crafting modular frontends in React, or diving into Agentic AI and Java enterprise foundations, I focus on building practical, testable, and recruiter-ready software.
            </p>
          </div>

          {/* Metrics & Highlights Column */}
          <div className="about-metrics-grid">
            <div className="metric-card">
              <span className="metric-value">8.0</span>
              <span className="metric-label">B.Tech IT CGPA</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Bannari Amman Institute of Tech</span>
            </div>

            <div className="metric-card">
              <span className="metric-value">3+</span>
              <span className="metric-label">Hackathons Led</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>BIT Hackathon & Sakthi Hack</span>
            </div>

            <div className="metric-card">
              <span className="metric-value">5+</span>
              <span className="metric-label">Credentials & Certs</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Oracle, IBM, OCI & NPTEL</span>
            </div>

            <div className="metric-card">
              <span className="metric-value">100%</span>
              <span className="metric-label">Practical Focus</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>Real repos & live demos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
