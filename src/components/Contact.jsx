import React, { useState } from 'react';
import { Mail, Terminal, Copy, Check, Send, Sparkles } from 'lucide-react';
import { Github, Linkedin, LeetCode } from './BrandIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');

  const email = 'rkichu0607@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill in all fields.');
      return;
    }

    // Compose direct mailto with subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Kiruthika,\n\n${formData.message}\n\nFrom: ${formData.name}\nReply to: ${formData.email}`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    setStatusMessage('Opening your mail client...');
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div className="container contact-container">
        <div className="contact-card">
          <div className="section-eyebrow" style={{ margin: '0 auto 1.5rem' }}>
            <Sparkles size={14} />
            <span>LET'S CONNECT</span>
          </div>

          <h2 className="contact-heading">Let's build something meaningful.</h2>
          <p className="contact-subtext">
            I am always eager to discuss full-stack engineering, AI opportunities, hackathons, open source, or internship roles. Feel free to reach out directly.
          </p>

          <div className="contact-actions-row">
            <a
              href={`mailto:${email}`}
              className="btn btn-primary"
              id="contact-email-btn"
            >
              <Mail size={16} />
              <span>Send an Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="btn btn-secondary"
              type="button"
              id="copy-email-btn"
              title="Copy email to clipboard"
            >
              {copied ? <Check size={16} color="var(--accent-green)" /> : <Copy size={16} />}
              <span>{copied ? 'Copied to Clipboard!' : email}</span>
            </button>
          </div>

          {/* Quick Message Box */}
          <div
            style={{
              maxWidth: '540px',
              margin: '0 auto 2.5rem',
              padding: '1.5rem',
              background: 'rgba(13, 17, 23, 0.7)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              textAlign: 'left'
            }}
          >
            <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem' }}>
              Quick Message
            </h3>
            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem'
                  }}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem'
                  }}
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Your message..."
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.85rem',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-default)',
                    borderRadius: '6px',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    resize: 'vertical'
                  }}
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-start' }}>
                <Send size={14} />
                <span>Compose in Email</span>
              </button>
              {statusMessage && (
                <span style={{ fontSize: '0.8125rem', color: 'var(--accent-orange)' }}>
                  {statusMessage}
                </span>
              )}
            </form>
          </div>

          {/* Social Profiles Bar */}
          <div className="social-links-bar">
            <a
              href="https://www.linkedin.com/in/kiruthika-radhakrishnanhnan-3209b0322/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LinkedIn Profile"
              aria-label="Kiruthika LinkedIn Profile"
              id="social-linkedin"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/Kiruthika0607"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="GitHub Profile"
              aria-label="Kiruthika GitHub Profile"
              id="social-github"
            >
              <Github size={20} />
            </a>

            <a
              href="https://leetcode.com/u/Kiruthika0607/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              title="LeetCode Profile"
              aria-label="Kiruthika LeetCode Profile"
              id="social-leetcode"
            >
              <Terminal size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
