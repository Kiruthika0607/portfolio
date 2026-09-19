import React from 'react';
import { Code2, ExternalLink, GitBranch, Terminal } from 'lucide-react';
import { Github, LeetCode } from './BrandIcons';

const REPOSITORIES = [
  {
    name: 'Skill_lens_project',
    description: 'Industry-Skill Demand Aggregator with Automated Career Path Mapping. Aggregates job postings and constructs dynamic learning trajectories.',
    language: 'Java',
    color: '#b07219',
    url: 'https://github.com/Kiruthika0607/Skill_lens_project'
  },
  {
    name: 'GeoAudit-BIT',
    description: 'Smart Fitness Certification Verification System. Built for automated authentication and audit trails of certifications.',
    language: 'JavaScript',
    color: '#f1e05a',
    url: 'https://github.com/Kiruthika0607/GeoAudit-BIT'
  },
  {
    name: 'Classification_CATDOG',
    description: 'Computer vision and machine learning image classification model differentiating image categories with neural networks.',
    language: 'Python',
    color: '#3572A5',
    url: 'https://github.com/Kiruthika0607/Classification_CATDOG'
  },
  {
    name: 'music-player',
    description: 'A sleek music player UI exploration built using pure semantic HTML and modern CSS styling with responsive controls.',
    language: 'CSS',
    color: '#563d7c',
    url: 'https://github.com/Kiruthika0607/music-player'
  },
  {
    name: 'portfolio',
    description: 'Original web portfolio repository tracking personal frontend iterations and interactive design prototypes.',
    language: 'HTML',
    color: '#e34c26',
    url: 'https://github.com/Kiruthika0607/portfolio'
  }
];

export default function GitHubShowcase() {
  return (
    <section id="github" className="section" aria-label="GitHub and Coding Profile">
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow">
            <Github size={14} />
            <span>PROOF OF WORK</span>
          </div>
          <h2 className="section-title">Open Source & Coding Footprint</h2>
          <p className="section-description">
            Transparent public code repositories, continuous version control practices, and active algorithm problem solving.
          </p>
        </div>

        {/* Real Repositories Grid */}
        <div className="github-repos-grid">
          {REPOSITORIES.map((repo, idx) => (
            <div key={idx} className="repo-card">
              <div>
                <div className="repo-title-row">
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="repo-name-link"
                    aria-label={`View repository ${repo.name} on GitHub`}
                  >
                    <GitBranch size={16} />
                    <span>{repo.name}</span>
                  </a>
                  <ExternalLink size={14} style={{ color: 'var(--text-muted)' }} />
                </div>
                <p className="repo-desc" style={{ marginTop: '0.75rem' }}>
                  {repo.description}
                </p>
              </div>

              <div className="repo-footer">
                <div className="repo-lang">
                  <span className="lang-dot" style={{ backgroundColor: repo.color }} />
                  <span>{repo.language}</span>
                </div>
                <span style={{ color: 'var(--text-subtle)' }}>Public Repository</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dual Profiles Banner: GitHub Profile & LeetCode Profile */}
        <div className="profiles-dual-banner">
          {/* GitHub Banner */}
          <div className="profile-banner-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff'
                }}
              >
                <Github size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', color: '#fff' }}>Kiruthika0607 on GitHub</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Explore active code commits and open source repos
                </p>
              </div>
            </div>
            <a
              href="https://github.com/Kiruthika0607"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              id="github-profile-link"
            >
              <span>View GitHub Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>

          {/* LeetCode Banner */}
          <div className="profile-banner-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(240, 136, 62, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-orange-bright)'
                }}
              >
                <Terminal size={26} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.125rem', color: '#fff' }}>Kiruthika0607 on LeetCode</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  Data structures & algorithmic problem solving
                </p>
              </div>
            </div>
            <a
              href="https://leetcode.com/u/Kiruthika0607/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              id="leetcode-profile-link"
            >
              <span>View LeetCode Profile</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
