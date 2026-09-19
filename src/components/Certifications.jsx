import React from 'react';
import { BadgeCheck, ShieldCheck, CheckCircle2, BookmarkCheck } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Oracle Java SE 17 Certification',
    issuer: 'Oracle University',
    featured: true,
    status: 'Core Credential',
    description:
      'Rigorous industry certification demonstrating in-depth mastery of Java SE 17 features, object-oriented paradigms, concurrency basics, memory models, and enterprise Java development.'
  },
  {
    title: 'Oracle Cloud Infrastructure (OCI) 2025 – AI Foundations Associate',
    issuer: 'Oracle Cloud Infrastructure',
    featured: false,
    status: 'Verified Associate',
    description:
      'Validation of core Artificial Intelligence and Machine Learning concepts, OCI AI services, large language models, GenAI concepts, and cloud computing infrastructure.'
  },
  {
    title: 'IBM Z Day 2025 Digital Credential',
    issuer: 'IBM',
    featured: false,
    status: 'Verified Credential',
    description:
      'Enterprise computing architectures, modern mainframe virtualization, hybrid cloud integration, and enterprise-scale transaction processing.'
  },
  {
    title: 'NPTEL — Programming in Java',
    issuer: 'National Programme on Technology Enhanced Learning (IIT / MOOC)',
    featured: false,
    status: 'Academic Credential',
    description:
      'Comprehensive academic examination covering Java paradigms, multithreading, abstract windowing, exception handling, and standard library collections.'
  },
  {
    title: 'Salesforce Agentforce Specialist',
    issuer: 'Salesforce',
    featured: false,
    status: 'Agentic AI Specialization',
    description:
      'Hands-on expertise in configuring, evaluating, and deploying autonomous AI agents and automated reasoning workflows using the Agentforce platform.'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="section" aria-label="Professional Certifications">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <ShieldCheck size={14} />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="section-title">Certifications & Validations</h2>
          <p className="section-description">
            Industry and academic credentials validating deep competency in Java, Cloud AI systems, and enterprise architectures.
          </p>
        </div>

        <div className="certifications-grid">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className={`cert-card ${cert.featured ? 'featured-cert' : ''}`}
            >
              <div className="cert-badge-row">
                <span className="cert-status-pill cert-status-verified">
                  {cert.status}
                </span>
                {cert.featured && (
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-orange)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    ★ Core Specialization
                  </span>
                )}
              </div>

              <div>
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">{cert.issuer}</div>
              </div>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: '1.55', marginTop: '0.25rem' }}>
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
