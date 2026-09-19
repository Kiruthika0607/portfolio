import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin } from 'lucide-react';

const EDUCATION_DATA = [
  {
    institution: 'Bannari Amman Institute of Technology',
    location: 'Sathyamangalam, Tamil Nadu',
    degree: 'B.Tech in Information Technology',
    period: '2024 – Present (II Year)',
    grade: 'CGPA: 8.0 / 10',
    details: [
      'Comprehensive curriculum in Data Structures, Object-Oriented Programming, Database Management Systems, and System Engineering.',
      'Active participant in technical hackathons, coding challenges, and open-source software initiatives.'
    ]
  },
  {
    institution: 'Cheran Vidhyala Matric Higher Secondary School',
    location: 'Tamil Nadu',
    degree: 'Higher Secondary & Secondary Education',
    period: '2022 – 2024',
    grade: 'Class XII: 91% | Class X: 92%',
    details: [
      'Strong academic foundation in Mathematics, Physics, Chemistry, and Computer Science.',
      'Active involvement in district-level science exhibitions and technical presentations.'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="section" aria-label="Education">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="section-title">Education</h2>
          <p className="section-description">
            Rigorous academic grounding combined with active engineering practice and problem-solving.
          </p>
        </div>

        <div className="education-timeline">
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="edu-item">
              <div className="edu-dot">
                <GraduationCap size={20} />
              </div>

              <div className="edu-content">
                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-degree">{edu.degree}</div>

                <div className="edu-meta">
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginRight: '1.25rem' }}>
                    <Calendar size={13} />
                    {edu.period}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <span className="edu-grade">{edu.grade}</span>
                </div>

                <ul className="project-highlights-list" style={{ marginBottom: 0 }}>
                  {edu.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
