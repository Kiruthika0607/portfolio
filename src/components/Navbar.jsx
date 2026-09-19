import React, { useState, useEffect } from 'react';
import { Menu, X, Layers } from 'lucide-react';

export default function Navbar({ activeSection, onOpenSkillLens }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Recognition' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'github', label: 'Proof of Work' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 75;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navOffset, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a
          href="#hero"
          className="nav-brand"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Kiruthika R Home"
        >
          <div className="brand-badge">KR</div>
          <span>Kiruthika R</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* SkillLens Quick Access Button */}
          <button
            onClick={onOpenSkillLens}
            title="Explore SkillLens — Industry-Skill Demand Aggregator"
            aria-label="Open SkillLens Product UI"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              padding: '0.4rem 0.85rem',
              background: 'linear-gradient(135deg, rgba(56, 139, 253, 0.2) 0%, rgba(240, 136, 62, 0.15) 100%)',
              border: '1px solid rgba(56, 139, 253, 0.45)',
              color: '#58a6ff',
              borderRadius: 'var(--radius-full)',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56, 139, 253, 0.35) 0%, rgba(240, 136, 62, 0.25) 100%)';
              e.currentTarget.style.borderColor = '#58a6ff';
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(56, 139, 253, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, rgba(56, 139, 253, 0.2) 0%, rgba(240, 136, 62, 0.15) 100%)';
              e.currentTarget.style.borderColor = 'rgba(56, 139, 253, 0.45)';
              e.currentTarget.style.color = '#58a6ff';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Layers size={13} />
            <span>SkillLens</span>
          </button>

          {/* Available pill — hide on very small screens */}
          <div className="nav-status-pill" title="Open to full-stack & AI roles"
            style={{ display: 'none' }}
            id="status-pill-desktop">
            <span className="status-dot" />
            <span>Available for Opportunities</span>
          </div>

          {/* Mobile Toggle */}
          <button
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              style={{ fontSize: '1.05rem', padding: '0.5rem 0' }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setMobileMenuOpen(false); onOpenSkillLens(); }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.875rem', fontWeight: 600,
              color: '#58a6ff', background: 'none', border: 'none',
              cursor: 'pointer', padding: '0.5rem 0'
            }}
          >
            <Layers size={16} />
            <span>SkillLens Product UI →</span>
          </button>
        </div>
      )}
    </header>
  );
}
