import React from 'react';
import { Code, Layout, Database, Wrench, Cpu, Sparkles } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Programming Languages',
    icon: <Code size={20} />,
    skills: ['Java', 'Python', 'C']
  },
  {
    title: 'Web Technologies',
    icon: <Layout size={20} />,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React']
  },
  {
    title: 'Database Systems',
    icon: <Database size={20} />,
    skills: ['MySQL', 'SQL', 'Relational Schemas', 'Query Optimization']
  },
  {
    title: 'Tools & Platforms',
    icon: <Wrench size={20} />,
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Bolt AI']
  },
  {
    title: 'CS Fundamentals',
    icon: <Cpu size={20} />,
    skills: ['Data Structures (DSA)', 'OOP (Object-Oriented Programming)', 'DBMS', 'Networking Basics']
  },
  {
    title: 'Focus & Exploratory Domains',
    icon: <Sparkles size={20} />,
    skills: ['UI/UX Design', 'AI / ML Foundations', 'Cloud Architecture (OCI)', 'Open Source Contribution']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="section" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Cpu size={14} />
            <span>TOOLING & CAPABILITIES</span>
          </div>
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-description">
            Hands-on technical competencies built through university coursework, competitive hackathons, and real-world implementation.
          </p>
        </div>

        <div className="skills-categories-grid">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-cat-header">
                <div className="skill-cat-icon">{cat.icon}</div>
                <h3 className="skill-cat-title">{cat.title}</h3>
              </div>
              <div className="skill-pill-list">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
