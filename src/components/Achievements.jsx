import React from 'react';
import { Award, Trophy, Users, Star, Medal } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'Reliance Foundation Undergraduate Scholar',
    issuer: 'Reliance Foundation',
    category: 'Prestigious National Fellowship',
    description:
      'Awarded the highly competitive undergraduate scholarship in recognition of academic capability, problem-solving skills, and commitment to technological innovation in India.',
    icon: <Award size={22} />,
    isFeatured: true
  },
  {
    title: 'Winner / 3rd Prize — BIT Hackathon Season 1',
    issuer: 'Full-Stack Development Domain',
    category: 'Competitive Hackathon Award',
    description:
      'Engineered and delivered the "QR Code Based Student Attendance System" with Java & MySQL, securing 3rd Prize in the competitive Full-Stack domain.',
    icon: <Trophy size={22} />,
    isFeatured: false
  },
  {
    title: 'Special Prize with Cash Reward — BIT Hackathon Season 2',
    issuer: 'Bannari Amman Institute of Technology',
    category: 'Product & UI/UX Excellence',
    description:
      'Recognized with a Special Prize and cash award for designing and implementing "Tasty Bites", praised for rapid full-stack execution and responsive UI/UX.',
    icon: <Medal size={22} />,
    isFeatured: false
  },
  {
    title: 'Hackathon Team Lead Experience',
    issuer: 'Competitive Engineering Teams (Apr 2025 – Aug 2025)',
    category: 'Technical Leadership & Collaboration',
    description:
      'Spearheaded developer teams during high-intensity hackathon cycles, orchestrating task allocation, rapid architectural decision-making, code reviews, and UI integration.',
    icon: <Users size={22} />,
    isFeatured: false
  },
  {
    title: '3rd Prize — District Level Poster Presentation',
    issuer: 'Academic & Technical Competitions',
    category: 'Technical Communication & Research',
    description:
      'Awarded 3rd Prize at the district level for effectively presenting technical research concepts and system architecture to academic judges.',
    icon: <Star size={22} />,
    isFeatured: false
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="section" aria-label="Achievements and Recognition">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Trophy size={14} />
            <span>RECOGNITION</span>
          </div>
          <h2 className="section-title">Milestones & Honors</h2>
          <p className="section-description">
            Academic honors, competitive hackathon accolades, and leadership milestones earned through verified performance.
          </p>
        </div>

        <div className="achievements-grid">
          {ACHIEVEMENTS.map((item, idx) => (
            <div
              key={idx}
              className={`achievement-card ${item.isFeatured ? 'scholar-featured' : ''}`}
            >
              <div>
                <div className="achievement-header">
                  <div className="achievement-badge-icon">{item.icon}</div>
                  <div>
                    <h3 className="achievement-title">{item.title}</h3>
                    <div className="achievement-issuer">{item.issuer}</div>
                  </div>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <p className="achievement-desc">{item.description}</p>
                </div>
              </div>

              <div>
                <span className="tech-tag" style={{ color: 'var(--text-muted)' }}>
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
