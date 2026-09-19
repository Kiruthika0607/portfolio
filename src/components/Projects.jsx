import React, { useState } from 'react';
import { ExternalLink, Sparkles, Trophy, CheckCircle2, Clock } from 'lucide-react';
import { Github } from './BrandIcons';

const PROJECTS = [
  {
    id: 'skilllens',
    title: 'SkillLens — Industry-Skill Demand Aggregator with Automated Career Path Mapping',
    status: 'CURRENTLY BUILDING • IN PROGRESS',
    isPrimary: true,
    category: 'Full-Stack & Intelligent Analytics',
    tagline: 'Bridging higher education curriculum with real-time industry job market analytics.',
    description:
      'A comprehensive career-path intelligence system that analyzes active tech job market trends, aggregates demanded technical competencies, and maps personalized learning trajectories for engineering students.',
    highlights: [
      'Architected full-stack modules for aggregating technical skill trends and industry job descriptions',
      'Automated career roadmap visualizer tailoring prerequisites based on a student’s current tech stack',
      'Engineered with Java enterprise principles and modular frontend architecture'
    ],
    tech: ['Java', 'MySQL', 'Full-Stack', 'Data Aggregation', 'System Architecture'],
    github: 'https://github.com/Kiruthika0607/Skill_lens_project',
    live: null
  },
  {
    id: 'attendance',
    title: 'QR Code Based Student Attendance System',
    status: 'COMPLETED • HACKATHON WINNER',
    award: '3rd Prize — Full Stack Domain',
    category: 'Full-Stack & Database Engineering',
    tagline: 'Automated campus attendance verification with duplicate prevention constraints.',
    description:
      'Built during BIT Hackathon Season 1. Replaced manual roll-calls with dynamic time-limited QR codes, automated real-time database verification, and administrative attendance dashboard.',
    highlights: [
      'Eliminated duplicate scan attempts via strict database unique constraints and timestamp checks',
      'Engineered Java backend with optimized MySQL relational schemas for instant batch query retrieval',
      'Awarded 3rd Prize in Full-Stack Domain among university-wide hackathon competitors'
    ],
    tech: ['Java', 'MySQL', 'QR Code API', 'Relational DB', 'Full-Stack'],
    github: 'https://github.com/Kiruthika0607',
    live: null
  },
  {
    id: 'tastybites',
    title: 'Tasty Bites Restaurant Website',
    status: 'COMPLETED • SPECIAL PRIZE',
    award: 'Special Prize with Cash Award',
    category: 'Web Development & UI/UX',
    tagline: 'Modern responsive dining portal with interactive table reservation & menu ordering.',
    description:
      'Built during BIT Hackathon Season 2. Designed an aesthetic customer-facing web portal featuring dynamic seating reservation, real-time cart order calculations, and fluid responsive UI.',
    highlights: [
      'Engineered responsive interactive seating reservation system with stateful booking logic',
      'Implemented clean modern UI design with CSS glassmorphic cards and intuitive checkout flow',
      'Secured Special Prize with cash reward for exceptional UI/UX execution and feature completeness'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX Design', 'Responsive Web'],
    github: 'https://github.com/Kiruthika0607',
    live: null
  },
  {
    id: 'disa-records',
    title: 'Digitalization of DISA Production Records',
    status: 'COMPLETED • 24-HR PROTOTYPE',
    category: 'Computer Vision & Process Digitization',
    tagline: 'OCR-powered conversion of industrial foundry paper logs into searchable digital records.',
    description:
      'Built during Sakthi Hackathon. Addressed industrial manufacturing log clutter by converting handwritten foundry log-sheets into indexed database entries via optical character recognition and QR lookups.',
    highlights: [
      'Rapid prototype delivered within a strict 24-hour hackathon timeframe',
      'Integrated OCR extraction pipeline paired with QR-enabled physical batch retrieval',
      'Streamlined factory supervisor search times from minutes to sub-second digital lookups'
    ],
    tech: ['Python / OCR', 'QR System', 'Database Integration', 'Rapid Prototyping'],
    github: 'https://github.com/Kiruthika0607',
    live: null
  },
  {
    id: 'geoaudit',
    title: 'GeoAudit — Smart Fitness Certification Verification System',
    status: 'ACTIVE OPEN SOURCE',
    category: 'Systems & Verification Software',
    tagline: 'Automated digital verification platform for fitness certificates and compliance.',
    description:
      'An open-source verification platform created to authenticate and audit fitness certifications using structured database records, tamper-resistant validation checks, and intuitive administrative inspection tools.',
    highlights: [
      'Modular architecture built using JavaScript for rapid client and administrative audits',
      'Transparent verification audit trail for fitness accreditations and institution records',
      'Maintained on public GitHub with clean modular repository structure'
    ],
    tech: ['JavaScript', 'Web Architecture', 'Verification Logic', 'Node.js'],
    github: 'https://github.com/Kiruthika0607/GeoAudit-BIT',
    live: null
  }
];

export default function Projects({ onOpenSkillLens }) {
  return (
    <section id="projects" className="section" aria-label="Featured Projects">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>PROOF OF WORK</span>
          </div>
          <h2 className="section-title">Featured Engineering Projects</h2>
          <p className="section-description">
            Real software systems, competitive hackathon implementations, and active development showcasing full-stack capability and problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((proj) => (
            <article
              key={proj.id}
              className={`project-card ${proj.isPrimary ? 'featured-primary' : ''}`}
            >
              <div>
                <div className="project-top">
                  <div className="project-badges-group">
                    {proj.isPrimary && (
                      <span className="status-badge-current">
                        <Clock size={12} />
                        {proj.status}
                      </span>
                    )}
                    {!proj.isPrimary && proj.award && (
                      <span className="project-award-pill">
                        <Trophy size={12} />
                        {proj.award}
                      </span>
                    )}
                    <span className="tech-tag" style={{ color: 'var(--text-secondary)' }}>
                      {proj.category}
                    </span>
                  </div>
                </div>

                <h3 className="project-card-title">{proj.title}</h3>
                <p className="project-card-tagline">{proj.tagline}</p>
                <p className="project-card-desc">{proj.description}</p>

                <ul className="project-highlights-list">
                  {proj.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="project-tech-tags">
                  {proj.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                      aria-label={`View source code for ${proj.title}`}
                    >
                      <Github size={14} />
                      <span>Source Code</span>
                    </a>
                  )}
                  {proj.isPrimary && (
                    <button
                      onClick={onOpenSkillLens}
                      aria-label="Open SkillLens interactive UI"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700,
                        letterSpacing: '0.04em',
                        padding: '0.45rem 1rem',
                        background: 'linear-gradient(135deg, rgba(56,139,253,0.25) 0%, rgba(240,136,62,0.2) 100%)',
                        border: '1px solid rgba(56,139,253,0.5)',
                        color: '#58a6ff',
                        borderRadius: 'var(--radius-full)',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56,139,253,0.45) 0%, rgba(240,136,62,0.35) 100%)';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.boxShadow = '0 0 24px rgba(56,139,253,0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56,139,253,0.25) 0%, rgba(240,136,62,0.2) 100%)';
                        e.currentTarget.style.color = '#58a6ff';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span>⚡ Explore SkillLens UI →</span>
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
