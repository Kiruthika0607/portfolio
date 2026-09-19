import React from 'react';
import { Terminal, Mail, Heart } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{ fontWeight: 700, color: '#fff', fontSize: '1.0625rem', marginBottom: '0.25rem' }}>
            Kiruthika R
          </div>
          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            B.Tech Information Technology • Full-Stack Developer & AI Aspirant
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <a
            href="https://github.com/Kiruthika0607"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/kiruthika-radhakrishnanhnan-3209b0322/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://leetcode.com/u/Kiruthika0607/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            aria-label="LeetCode"
          >
            <Terminal size={18} />
          </a>
          <a
            href="mailto:rkichu0607@gmail.com"
            style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        <div style={{ fontSize: '0.8125rem', color: 'var(--text-subtle)' }}>
          © {new Date().getFullYear()} Kiruthika R. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
