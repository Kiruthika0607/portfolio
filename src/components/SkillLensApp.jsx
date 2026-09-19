import React, { useState, useEffect, useRef } from 'react';
import {
  Sparkles, TrendingUp, GitBranch, Briefcase, AlertCircle,
  MapPin, ArrowRight, Database, CheckCircle2, Layers, BarChart3,
  Cpu, BookOpen, User, Target, ChevronRight, Zap, Globe, Award,
  Activity, Code2, Compass, LayoutDashboard, Search
} from 'lucide-react';
import { Github } from './BrandIcons';

/* ======================================================
   DATA — Realistic SkillLens project content
   ====================================================== */
const CAREER_ROLES = [
  {
    id: 'fs-ai',
    title: 'Full-Stack AI Engineer',
    short: 'FS-AI',
    industry: 'Enterprise Software & Cloud AI',
    demandLevel: 'Very High',
    matchIndex: 94,
    growthRate: '+38% YoY',
    color: '#58a6ff',
    glow: 'rgba(56,139,253,0.25)',
    requiredSkills: ['Java / Python', 'React / Next.js', 'Spring Boot Microservices', 'Vector DBs', 'RESTful APIs', 'Docker / CI-CD'],
    currentSkillsMatched: ['Java', 'Python', 'React', 'HTML/CSS', 'MySQL', 'DSA Basics'],
    skillGap: ['Spring Boot Microservices', 'Vector Embeddings / RAG', 'Docker & Cloud Deployment'],
    roadmap: [
      { phase: 'Phase 1 · Weeks 1–4', title: 'Enterprise Backend Mastery', focus: 'Spring Boot REST APIs, JPA/Hibernate, Database Connection Pooling' },
      { phase: 'Phase 2 · Weeks 5–8', title: 'Applied AI & Retrieval (RAG)', focus: 'LangChain, Vector Databases, Semantic Search Integration' },
      { phase: 'Phase 3 · Weeks 9–12', title: 'Cloud Native & CI/CD Pipeline', focus: 'Dockerization, GitHub Actions, Cloud Deployment on OCI/AWS' }
    ]
  },
  {
    id: 'cloud-arch',
    title: 'Cloud DevOps Engineer',
    short: 'DevOps',
    industry: 'Cloud Platforms & High-Availability Systems',
    demandLevel: 'High',
    matchIndex: 88,
    growthRate: '+29% YoY',
    color: '#f0883e',
    glow: 'rgba(240,136,62,0.25)',
    requiredSkills: ['Linux System Admin', 'Docker & Kubernetes', 'OCI / AWS', 'CI/CD Automation', 'MySQL Admin'],
    currentSkillsMatched: ['System Admin Basics', 'MySQL', 'Git / GitHub', 'C / Python'],
    skillGap: ['Kubernetes Cluster Orchestration', 'Terraform / IaC', 'Observability (Prometheus/Grafana)'],
    roadmap: [
      { phase: 'Phase 1 · Weeks 1–4', title: 'Containerization & Microservices', focus: 'Docker Container Networking, Multi-stage builds, Docker Compose' },
      { phase: 'Phase 2 · Weeks 5–8', title: 'Kubernetes & Cloud Orchestration', focus: 'K8s Pods, Deployments, Ingress, OCI Container Engine' },
      { phase: 'Phase 3 · Weeks 9–12', title: 'Infrastructure as Code & Monitoring', focus: 'Terraform modules, GitHub Actions automated delivery pipelines' }
    ]
  },
  {
    id: 'data-sys',
    title: 'Data & Analytics Engineer',
    short: 'Data',
    industry: 'Big Data & Intelligent Analytics',
    demandLevel: 'High',
    matchIndex: 85,
    growthRate: '+32% YoY',
    color: '#7ee787',
    glow: 'rgba(63,185,80,0.25)',
    requiredSkills: ['Python / Java', 'Relational & NoSQL', 'Data Pipelines (ETL/ELT)', 'Feature Engineering', 'SQL Optimization'],
    currentSkillsMatched: ['Java', 'Python', 'MySQL', 'SQL Optimization', 'Relational Schemas'],
    skillGap: ['Apache Kafka / Streaming', 'Distributed Storage (Parquet/Iceberg)', 'Airflow Orchestration'],
    roadmap: [
      { phase: 'Phase 1 · Weeks 1–4', title: 'Advanced Data Modeling', focus: 'Window functions, Partitioning, Indexing Strategies in MySQL/PostgreSQL' },
      { phase: 'Phase 2 · Weeks 5–8', title: 'Data Streaming & Pipelines', focus: 'Event-driven architectures, Message queues, Pipeline orchestration' },
      { phase: 'Phase 3 · Weeks 9–12', title: 'Applied ML Feature Stores', focus: 'Data pre-processing, Model evaluation metrics, Cloud feature stores' }
    ]
  }
];

const TRENDING_SKILLS = [
  { name: 'Generative AI & Agentic Workflows', category: 'AI / ML', demand: 96, trend: '+45%', icon: '🤖' },
  { name: 'Spring Boot & Microservices', category: 'Backend', demand: 91, trend: '+28%', icon: '⚙️' },
  { name: 'React & Modern Frontend', category: 'Web', demand: 89, trend: '+22%', icon: '⚛️' },
  { name: 'Cloud Infrastructure (OCI / AWS)', category: 'Cloud', demand: 86, trend: '+31%', icon: '☁️' },
  { name: 'Vector Databases & Embeddings', category: 'Data AI', demand: 84, trend: '+52%', icon: '🧬' },
  { name: 'Relational DB & MySQL Optimization', category: 'Database', demand: 82, trend: '+15%', icon: '🗄️' },
  { name: 'Docker & Kubernetes', category: 'Cloud', demand: 80, trend: '+35%', icon: '🐳' },
];

const DATA_SOURCES = [
  { name: 'ESCO Taxonomy', type: 'Official Classification', badge: 'Standardized', icon: Globe, color: '#58a6ff', desc: 'European Skills & Occupations taxonomy mapping 3,000+ verified occupations to competencies.' },
  { name: 'O*NET OnLine', type: 'Occupational Intelligence', badge: 'US Dept. of Labor', icon: Award, color: '#f0883e', desc: 'Detailed worker requirements and occupation-specific ability descriptors across 900+ professions.' },
  { name: 'Real-Time Job APIs', type: 'Live Demand Signals', badge: 'Live Feed', icon: Activity, color: '#7ee787', desc: 'Aggregated tech job postings extracting stack mentions and emerging qualification requirements.' },
  { name: 'Stack Overflow Survey', type: 'Developer Sentiment', badge: 'Annual Benchmark', icon: Code2, color: '#d2a8ff', desc: 'Annual industry survey benchmarking developer language adoption and salary trends.' },
  { name: 'GitHub Insights', type: 'Open Source Ecosystem', badge: 'Ecosystem Data', icon: Github, color: '#ff9b53', desc: 'Public repository activity metrics, open-source dependency graphs, and emerging tech velocity.' },
];

const FEATURE_CARDS = [
  {
    id: 'demand', label: 'Skill Demand', subtitle: 'By Industry Sector',
    color: '#58a6ff', glow: 'rgba(56,139,253,0.15)',
    Icon: BarChart3,
    content: (
      <div style={{ marginTop: '0.75rem' }}>
        <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Top Sectors Demanding</div>
        {[['Enterprise SaaS', '94%'], ['FinTech & Banking', '88%'], ['HealthTech', '81%']].map(([s, v]) => (
          <div key={s} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
            <span style={{ fontSize: '0.78125rem', color: 'var(--text-secondary)' }}>{s}</span>
            <span style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#58a6ff' }}>{v}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'career', label: 'Career Path', subtitle: 'Automated Progression',
    color: '#f0883e', glow: 'rgba(240,136,62,0.15)',
    Icon: GitBranch,
    content: (
      <div style={{ marginTop: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', flexWrap: 'wrap' }}>
          {['Java/SQL', '→', 'Spring/RAG', '→', 'Full-Stack AI'].map((n, i) => (
            <span key={i} style={{
              fontSize: '0.75rem', fontWeight: n === '→' ? 400 : 700,
              color: n === '→' ? 'var(--text-muted)' : i === 4 ? '#f0883e' : 'var(--text-secondary)',
              padding: n === '→' ? 0 : '0.15rem 0.5rem',
              background: n === '→' ? 'none' : 'rgba(240,136,62,0.1)',
              borderRadius: '4px'
            }}>{n}</span>
          ))}
        </div>
        <div style={{ marginTop: '0.6rem', fontSize: '0.75rem', color: '#7ee787', fontWeight: 600 }}>▲ +38% YoY Market Growth</div>
      </div>
    )
  },
  {
    id: 'market', label: 'Job Market', subtitle: 'Live Hiring Metrics',
    color: '#7ee787', glow: 'rgba(63,185,80,0.15)',
    Icon: Briefcase,
    content: (
      <div style={{ marginTop: '0.75rem' }}>
        {[['Full-Stack Openings', '14,200+'], ['Entry Compensation', '₹8.5L–₹14L'], ['Remote Roles', '38%']].map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
            <span style={{ fontSize: '0.78125rem', color: 'var(--text-secondary)' }}>{k}</span>
            <span style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#7ee787' }}>{v}</span>
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'gap', label: 'Skill Gap', subtitle: 'Student vs Benchmark',
    color: '#ff7b72', glow: 'rgba(255,123,114,0.15)',
    Icon: AlertCircle,
    content: (
      <div style={{ marginTop: '0.75rem' }}>
        <div style={{ fontSize: '0.78125rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Missing Prerequisites</div>
        {['Spring Boot', 'Vector DBs', 'CI/CD'].map(s => (
          <span key={s} style={{
            display: 'inline-block', marginRight: '0.35rem', marginBottom: '0.35rem',
            fontSize: '0.72rem', fontWeight: 600, padding: '0.2rem 0.55rem',
            background: 'rgba(255,123,114,0.12)', border: '1px solid rgba(255,123,114,0.35)',
            borderRadius: '4px', color: '#ff7b72'
          }}>{s}</span>
        ))}
      </div>
    )
  },
  {
    id: 'roadmap', label: 'Roadmap', subtitle: 'Curated Trajectory',
    color: '#d2a8ff', glow: 'rgba(137,87,229,0.15)',
    Icon: BookOpen,
    content: (
      <div style={{ marginTop: '0.75rem' }}>
        {['Phase 1: Enterprise Backend', 'Phase 2: AI & RAG', 'Phase 3: Cloud/CI-CD'].map((p, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#d2a8ff', flexShrink: 0 }} />
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{p}</span>
          </div>
        ))}
      </div>
    )
  }
];

/* ======================================================
   ANIMATE-ON-SCROLL HOOK
   ====================================================== */
function useInView(ref, threshold = 0.15) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return inView;
}

/* ======================================================
   ANIMATED SECTION WRAPPER
   ====================================================== */
function FadeSection({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`
      }}
    >
      {children}
    </div>
  );
}

/* ======================================================
   MAIN COMPONENT
   ====================================================== */
export default function SkillLensApp({ onBack }) {
  const [selectedRole, setSelectedRole] = useState(CAREER_ROLES[0]);
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ['All', 'AI / ML', 'Backend', 'Web', 'Cloud', 'Database', 'Data AI'];
  const filteredSkills = activeCategory === 'All'
    ? TRENDING_SKILLS
    : TRENDING_SKILLS.filter(s => s.category.includes(activeCategory));

  return (
    <div className="sl-root">
      {/* ── AMBIENT BACKGROUND ── */}
      <div className="sl-ambient">
        <div className="sl-orb sl-orb-blue" />
        <div className="sl-orb sl-orb-orange" />
        <div className="sl-orb sl-orb-purple" />
        <div className="sl-grid-overlay" />
      </div>

      {/* ── NAV BAR ── */}
      <header className="sl-nav">
        <div className="container sl-nav-inner">
          <div className="sl-brand">
            <div className="sl-brand-icon">
              <Layers size={18} />
            </div>
            <div>
              <div className="sl-brand-name">
                SkillLens
                <span className="sl-brand-pill">SaaS Prototype</span>
              </div>
              <div className="sl-brand-sub">Industry-Skill Demand Aggregator</div>
            </div>
          </div>

          <nav className="sl-nav-links">
            {['Skill Demand', 'Career Path', 'Insights', 'Data Sources'].map(l => (
              <a key={l} href={`#sl-${l.toLowerCase().replace(' ', '-')}`} className="sl-nav-link">{l}</a>
            ))}
          </nav>

          <div className="sl-nav-actions">
            <button onClick={onBack} className="sl-btn sl-btn-ghost" aria-label="Back to portfolio">
              ← Portfolio
            </button>
            <a
              href="https://github.com/Kiruthika0607/Skill_lens_project"
              target="_blank" rel="noopener noreferrer"
              className="sl-btn sl-btn-primary"
            >
              <Github size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════
          1. HERO / PROJECT INTRO
          ══════════════════════════════════ */}
      <section className="sl-hero">
        <div className="container">
          <FadeSection>
            <div className="sl-hero-eyebrow">
              <Sparkles size={13} />
              <span>INDUSTRY-SKILL DEMAND AGGREGATOR</span>
            </div>
            <h1 className="sl-hero-title">
              Map Your Career to<br />
              <span className="sl-hero-title-accent">Real Industry Demand</span>
            </h1>
            <p className="sl-hero-desc">
              SkillLens analyzes real-time job postings via ESCO & O*NET frameworks, detects engineering graduate skill gaps, and generates automated, personalized learning paths to high-demand careers.
            </p>
            <div className="sl-hero-ctas">
              <a href="#sl-skill-demand" className="sl-btn sl-btn-primary sl-btn-lg">
                <span>Explore Skill Demand</span>
                <ArrowRight size={16} />
              </a>
              <a href="#sl-career-path" className="sl-btn sl-btn-secondary sl-btn-lg">
                <span>View Career Roadmap</span>
                <Target size={16} />
              </a>
            </div>
          </FadeSection>

          {/* Hero stat bar */}
          <FadeSection delay={0.15}>
            <div className="sl-hero-stats">
              {[
                { label: 'Data Sources', value: '5+' },
                { label: 'Skill Taxonomies', value: '3,000+' },
                { label: 'Career Paths', value: 'Automated' },
                { label: 'Live Job APIs', value: 'Real-Time' },
              ].map(({ label, value }) => (
                <div key={label} className="sl-hero-stat">
                  <div className="sl-hero-stat-value">{value}</div>
                  <div className="sl-hero-stat-label">{label}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════
          2. FEATURED SKILL MODULE + 3. OVERLAPPING FEATURE CARDS
          ══════════════════════════════════ */}
      <section id="sl-skill-demand" className="sl-section">
        <div className="container">
          <FadeSection>
            <div className="sl-section-eyebrow">
              <BarChart3 size={13} />
              <span>MARKET INTELLIGENCE ENGINE</span>
            </div>
            <h2 className="sl-section-title">Trending Technical Competencies</h2>
            <p className="sl-section-desc">Multi-source aggregation mapping real-time demand indices across industry sectors.</p>
          </FadeSection>

          {/* Stage: Central + Overlapping Cards */}
          <div className="sl-stage">
            {/* CENTRAL CARD */}
            <FadeSection delay={0.1} className="sl-central-wrap">
              <div className="sl-central-card">
                <div className="sl-central-header">
                  <div>
                    <div className="sl-central-badge">Live Market Trends</div>
                    <h3 className="sl-central-title">Demand Matrix & Category Velocity</h3>
                  </div>
                  {/* Filter pills */}
                  <div className="sl-cat-pills">
                    {categories.map(c => (
                      <button
                        key={c}
                        onClick={() => setActiveCategory(c)}
                        className={`sl-cat-pill ${activeCategory === c ? 'active' : ''}`}
                      >{c}</button>
                    ))}
                  </div>
                </div>

                {/* Skill rows */}
                <div className="sl-skill-rows">
                  {filteredSkills.map((skill, idx) => (
                    <div key={idx} className="sl-skill-row" style={{ animationDelay: `${idx * 0.06}s` }}>
                      <div className="sl-skill-left">
                        <span className="sl-skill-icon">{skill.icon}</span>
                        <div>
                          <div className="sl-skill-name">{skill.name}</div>
                          <div className="sl-skill-cat">{skill.category}</div>
                        </div>
                      </div>
                      <div className="sl-skill-right">
                        <div className="sl-bar-track">
                          <div className="sl-bar-fill" style={{ width: `${skill.demand}%` }} />
                        </div>
                        <div className="sl-skill-meta">
                          <span className="sl-demand-val">{skill.demand}%</span>
                          <span className="sl-trend-val">{skill.trend}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="sl-central-footer">
                  <span>Aggregated from ESCO · O*NET · Job APIs · GitHub · Stack Overflow</span>
                  <span className="sl-live-dot"><span />Live</span>
                </div>
              </div>
            </FadeSection>

            {/* OVERLAPPING FEATURE CARDS */}
            <div className="sl-feature-cards">
              {FEATURE_CARDS.map((card, i) => (
                <FadeSection key={card.id} delay={0.1 + i * 0.08}>
                  <div
                    className="sl-feature-card"
                    style={{ '--card-color': card.color, '--card-glow': card.glow }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="sl-fc-header">
                      <div className="sl-fc-icon">
                        <card.Icon size={16} />
                      </div>
                      <div>
                        <div className="sl-fc-title">{card.label}</div>
                        <div className="sl-fc-sub">{card.subtitle}</div>
                      </div>
                    </div>
                    {card.content}
                    <div className="sl-fc-footer">
                      <ChevronRight size={13} />
                    </div>
                  </div>
                </FadeSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          4. STUDENT PROFILE CONTAINER
          ══════════════════════════════════ */}
      <section className="sl-section sl-section-alt">
        <div className="container">
          <FadeSection>
            <div className="sl-section-eyebrow">
              <User size={13} />
              <span>INDIVIDUAL PROFILE BENCHMARKING</span>
            </div>
            <h2 className="sl-section-title">Student Profile Assessment</h2>
            <p className="sl-section-desc">How SkillLens maps an engineering student's verified coursework against active industry standards.</p>
          </FadeSection>

          <FadeSection delay={0.1}>
            <div className="sl-profile-card">
              {/* Profile header */}
              <div className="sl-profile-header">
                <div className="sl-profile-avatar">
                  <User size={26} />
                </div>
                <div className="sl-profile-info">
                  <h3 className="sl-profile-name">Kiruthika R</h3>
                  <div className="sl-profile-meta">
                    <span className="sl-profile-badge">B.Tech IT · II Year</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>Bannari Amman Institute of Technology</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem' }}>CGPA: 8.0 / 10</span>
                  </div>
                </div>
                <div className="sl-profile-target">
                  <div className="sl-profile-target-label">Target Role</div>
                  <div className="sl-profile-target-value" style={{ color: selectedRole.color }}>
                    {selectedRole.title}
                  </div>
                  <div className="sl-profile-target-meta">{selectedRole.industry}</div>
                </div>
              </div>

              {/* Three-column detail grid */}
              <div className="sl-profile-grid">
                {/* Verified skills */}
                <div className="sl-profile-panel">
                  <div className="sl-panel-header">
                    <CheckCircle2 size={15} color="#7ee787" />
                    <span>Verified Competencies</span>
                  </div>
                  <div className="sl-pill-group">
                    {selectedRole.currentSkillsMatched.map(s => (
                      <span key={s} className="sl-pill-green">✓ {s}</span>
                    ))}
                  </div>
                </div>

                {/* Skill gap */}
                <div className="sl-profile-panel">
                  <div className="sl-panel-header">
                    <AlertCircle size={15} color="#ff7b72" />
                    <span>Identified Skill Gap</span>
                  </div>
                  <div className="sl-pill-group">
                    {selectedRole.skillGap.map(s => (
                      <span key={s} className="sl-pill-red">▲ {s}</span>
                    ))}
                  </div>
                </div>

                {/* Readiness index */}
                <div className="sl-profile-panel">
                  <div className="sl-panel-header">
                    <TrendingUp size={15} color="#58a6ff" />
                    <span>Role Readiness Index</span>
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                      <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>Alignment Score</span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: selectedRole.color }}>{selectedRole.matchIndex - 20}%</span>
                    </div>
                    <div className="sl-readiness-bar">
                      <div className="sl-readiness-fill" style={{ width: `${selectedRole.matchIndex - 20}%`, background: `linear-gradient(90deg, ${selectedRole.color}, #f0883e)` }} />
                    </div>
                    <p style={{ fontSize: '0.78125rem', color: 'var(--text-muted)', marginTop: '0.65rem' }}>
                      {selectedRole.skillGap.length} critical modules to achieve 95%+ interview readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════
          5. CAREER RECOMMENDATION — INTERACTIVE PIPELINE
          ══════════════════════════════════ */}
      <section id="sl-career-path" className="sl-section">
        <div className="container">
          <FadeSection>
            <div className="sl-section-eyebrow">
              <Target size={13} />
              <span>INTERACTIVE ROADMAP PIPELINE</span>
            </div>
            <h2 className="sl-section-title">Automated Career Mapping Flow</h2>
            <p className="sl-section-desc">Select a target role to dynamically generate real-time skill gap analysis and phased learning roadmap.</p>
          </FadeSection>

          {/* Role selector tabs */}
          <FadeSection delay={0.1}>
            <div className="sl-role-tabs">
              {CAREER_ROLES.map(role => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role)}
                  className={`sl-role-tab ${selectedRole.id === role.id ? 'active' : ''}`}
                  style={{ '--tab-color': role.color, '--tab-glow': role.glow }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{role.title}</div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.75, marginTop: '0.2rem' }}>{role.growthRate} demand</div>
                </button>
              ))}
            </div>
          </FadeSection>

          {/* 4-step pipeline */}
          <FadeSection delay={0.15}>
            <div className="sl-pipeline">
              {[
                {
                  step: '01', badge: 'Current Skills', color: '#58a6ff',
                  content: (
                    <ul className="sl-pipeline-list">
                      {selectedRole.currentSkillsMatched.slice(0, 4).map(s => <li key={s}>{s}</li>)}
                    </ul>
                  )
                },
                {
                  step: '02', badge: 'Skill Gap', color: '#f0883e',
                  content: (
                    <ul className="sl-pipeline-list">
                      {selectedRole.skillGap.map(s => <li key={s} style={{ color: '#f0883e' }}>{s}</li>)}
                    </ul>
                  )
                },
                {
                  step: '03', badge: 'Target Role', color: selectedRole.color, highlight: true,
                  content: (
                    <div>
                      <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', marginBottom: '0.35rem' }}>{selectedRole.title}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>{selectedRole.industry}</div>
                      <div style={{ fontSize: '0.8rem', fontWeight: 600, color: selectedRole.color }}>{selectedRole.demandLevel} Demand · {selectedRole.growthRate}</div>
                    </div>
                  )
                },
                {
                  step: '04', badge: 'Curriculum', color: '#d2a8ff',
                  content: (
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <div style={{ fontWeight: 600, color: '#fff', marginBottom: '0.3rem' }}>12-Week Roadmap</div>
                      {selectedRole.roadmap[0].focus}
                    </div>
                  )
                }
              ].map(({ step, badge, color, content, highlight }, idx) => (
                <React.Fragment key={step}>
                  <div className={`sl-pipe-step ${highlight ? 'highlight' : ''}`} style={{ '--step-color': color }}>
                    <div className="sl-pipe-badge" style={{ color }}>{step}. {badge}</div>
                    <div className="sl-pipe-body">{content}</div>
                  </div>
                  {idx < 3 && <div className="sl-pipe-arrow">→</div>}
                </React.Fragment>
              ))}
            </div>
          </FadeSection>

          {/* Roadmap phase cards */}
          <FadeSection delay={0.2}>
            <div className="sl-roadmap-grid">
              {selectedRole.roadmap.map((phase, idx) => (
                <div key={idx} className="sl-roadmap-card" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <div className="sl-roadmap-phase-tag">{phase.phase}</div>
                  <h4 className="sl-roadmap-title">{phase.title}</h4>
                  <p className="sl-roadmap-focus">{phase.focus}</p>
                  <div className="sl-roadmap-num">0{idx + 1}</div>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ══════════════════════════════════
          6. INDUSTRY INSIGHTS
          ══════════════════════════════════ */}
      <section id="sl-insights" className="sl-section sl-section-alt">
        <div className="container">
          <FadeSection>
            <div className="sl-section-eyebrow">
              <Briefcase size={13} />
              <span>MARKET HORIZONS</span>
            </div>
            <h2 className="sl-section-title">Industry Landscape & Ecosystem</h2>
            <p className="sl-section-desc">How technical roles intersect with enterprise requirements and emerging frameworks — sourced from live aggregation.</p>
          </FadeSection>

          <div className="sl-insights-grid">
            {[
              { label: 'Target Sector', title: 'Enterprise Software & Cloud AI', desc: 'High growth across banking, healthcare tech, and SaaS platforms adopting generative intelligence.', stat: '+34% YoY Growth', color: '#58a6ff' },
              { label: 'Core Required Skills', title: 'Java, Spring Boot & Distributed SQL', desc: 'Industry-standard enterprise stacks require robust type safety, microservices, and optimized schemas.', stat: 'Required in 78% of Postings', color: '#f0883e' },
              { label: 'Emerging Tech Stack', title: 'RAG Pipelines & Agentic AI', desc: 'Vector databases, local model deployment, and context retrieval workflows are rapidly becoming baseline.', stat: 'Fastest Accelerating (+52%)', color: '#7ee787' },
              { label: 'Recruiter Expectation', title: 'Demonstrated Proof of Work', desc: 'Recruiters prioritize candidates with public Git commits, deployment experience, and hackathon leadership.', stat: '91% Hiring Preference for Repos', color: '#d2a8ff' },
            ].map((item, i) => (
              <FadeSection key={i} delay={i * 0.08}>
                <div className="sl-insight-card" style={{ '--insight-color': item.color }}>
                  <span className="sl-insight-label">{item.label}</span>
                  <h3 className="sl-insight-title">{item.title}</h3>
                  <p className="sl-insight-desc">{item.desc}</p>
                  <div className="sl-insight-stat">{item.stat}</div>
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          7. DATA SOURCE ECOSYSTEM
          ══════════════════════════════════ */}
      <section id="sl-data-sources" className="sl-section">
        <div className="container">
          <FadeSection>
            <div className="sl-section-eyebrow" style={{ margin: '0 auto 0.75rem', display: 'flex' }}>
              <Database size={13} />
              <span>AUTHENTIC DATA ECOSYSTEM</span>
            </div>
            <h2 className="sl-section-title" style={{ textAlign: 'center' }}>Validated Data Sources</h2>
            <p className="sl-section-desc" style={{ textAlign: 'center', margin: '0 auto' }}>
              SkillLens cross-validates skill taxonomies from verified labor market datasets and developer communities.
            </p>
          </FadeSection>

          <div className="sl-sources-grid">
            {DATA_SOURCES.map((src, i) => (
              <FadeSection key={i} delay={i * 0.07}>
                <div className="sl-source-card" style={{ '--src-color': src.color }}>
                  <div className="sl-source-top">
                    <div className="sl-source-icon" style={{ color: src.color, background: `${src.color}18` }}>
                      <src.icon size={20} />
                    </div>
                    <span className="sl-source-badge">{src.badge}</span>
                  </div>
                  <h3 className="sl-source-name">{src.name}</h3>
                  <div className="sl-source-type">{src.type}</div>
                  <p className="sl-source-desc">{src.desc}</p>
                  <div className="sl-source-glow" />
                </div>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          8. FINAL CTA
          ══════════════════════════════════ */}
      <section className="sl-cta-section">
        <div className="sl-cta-glow-bg" />
        <div className="container sl-cta-inner">
          <FadeSection>
            <div className="sl-section-eyebrow" style={{ margin: '0 auto 1.25rem', display: 'flex' }}>
              <Zap size={13} />
              <span>ACCELERATE YOUR TRAJECTORY</span>
            </div>
            <h2 className="sl-cta-title">
              Build your career around<br />
              <span className="sl-hero-title-accent">real industry demand.</span>
            </h2>
            <p className="sl-cta-desc">
              Stop guessing what recruiters want. SkillLens bridges academic knowledge with live industry hiring criteria, empowering engineering graduates to excel.
            </p>
            <div className="sl-cta-actions">
              <button
                onClick={() => document.getElementById('sl-skill-demand')?.scrollIntoView({ behavior: 'smooth' })}
                className="sl-btn sl-btn-primary sl-btn-lg"
              >
                <span>Explore Skills</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.getElementById('sl-career-path')?.scrollIntoView({ behavior: 'smooth' })}
                className="sl-btn sl-btn-secondary sl-btn-lg"
              >
                <span>Generate Career Path</span>
                <Target size={16} />
              </button>
              <button onClick={onBack} className="sl-btn sl-btn-ghost sl-btn-lg">
                ← Back to Portfolio
              </button>
            </div>
          </FadeSection>
        </div>
      </section>
    </div>
  );
}
