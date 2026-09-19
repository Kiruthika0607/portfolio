import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail, ChevronDown } from 'lucide-react';
import VideoIntro from './VideoIntro';

const ROLES = [
  'FULL-STACK DEVELOPER & AI ASPIRANT',
  'LOGICAL THINKER',
  'UI/UX DESIGNER',
  'OPEN SOURCE CONTRIBUTOR',
  'RELIANCE FOUNDATION SCHOLAR'
];

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [animState, setAnimState] = useState('active');

  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setAnimState('exiting');
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % ROLES.length);
        setAnimState('entering');
        setTimeout(() => setAnimState('active'), 50);
      }, 400);
    }, 3400);

    return () => clearInterval(cycleTimer);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      const navOffset = 75;
      const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section" aria-label="Hero Introduction">
      {/* Fullscreen Cinematic Video Background */}
      <VideoIntro />

      {/* Hero Content — centered over video */}
      <div className="hero-content-overlay">
        <div className="container">
          <div className="hero-content">
            <div className="hero-tag">
              <span>B.Tech IT • II Year</span>
            </div>

            <h1 className="hero-name">
              KIRUTHIKA R
            </h1>

            {/* Dynamic role area */}
            <div className="role-container" aria-live="polite">
              <div className="role-track">
                <span className={`role-text ${animState}`}>
                  {ROLES[currentRoleIndex]}
                </span>
              </div>
            </div>

            <p className="hero-intro-text">
              B.Tech Information Technology student building practical software experiences across full-stack development, AI, UI/UX, and open source.
            </p>

            <div className="hero-cta-group">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="btn btn-primary"
                id="hero-cta-projects"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={16} />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="btn btn-secondary"
                id="hero-cta-connect"
              >
                <span>LET'S CONNECT</span>
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="scroll-indicator-wrapper"
        onClick={(e) => scrollToSection(e, 'about')}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') scrollToSection(e, 'about');
        }}
        aria-label="Scroll to About section"
      >
        <span className="scroll-text">EXPLORE</span>
        <div className="scroll-pulse-line" />
      </div>
    </section>
  );
}
