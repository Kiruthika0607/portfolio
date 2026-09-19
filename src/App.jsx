import React, { useState, useEffect } from 'react';
import AmbientCanvas from './components/AmbientCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Education from './components/Education';
import GitHubShowcase from './components/GitHubShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SkillLensApp from './components/SkillLensApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [view, setView] = useState('portfolio'); // 'portfolio' | 'skilllens'

  // Expose view switcher globally so other components can trigger it
  useEffect(() => {
    window.__openSkillLens = () => {
      setView('skilllens');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return () => { delete window.__openSkillLens; };
  }, []);

  useEffect(() => {
    if (view !== 'portfolio') return;

    const sectionIds = [
      'hero', 'about', 'skills', 'projects',
      'achievements', 'certifications', 'education', 'github', 'contact'
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [view]);

  // Render SkillLens SaaS view
  if (view === 'skilllens') {
    return (
      <SkillLensApp
        onBack={() => {
          setView('portfolio');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  // Render Portfolio view
  return (
    <div className="portfolio-app-root">
      <AmbientCanvas />
      <Navbar activeSection={activeSection} onOpenSkillLens={() => {
        setView('skilllens');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onOpenSkillLens={() => {
          setView('skilllens');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />
        <Achievements />
        <Certifications />
        <Education />
        <GitHubShowcase />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
