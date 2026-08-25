import React, { useState } from 'react';
import { Target, Eye, Sparkles, Shield, Rocket, Layers, Code, Globe, Terminal, Cpu } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const techStack = [
    { name: 'React 19', category: 'Frontend', level: 'Expert' },
    { name: 'Next.js 15', category: 'Framework', level: 'Expert' },
    { name: 'TypeScript', category: 'Language', level: 'Expert' },
    { name: 'Node.js', category: 'Backend', level: 'Expert' },
    { name: 'Python / AI', category: 'Intelligence', level: 'Advanced' },
    { name: 'Tailwind / Vanilla CSS', category: 'Styling', level: 'Master' },
    { name: 'AWS & Cloudflare', category: 'Infrastructure', level: 'Expert' },
    { name: 'Docker & K8s', category: 'DevOps', level: 'Advanced' },
    { name: 'GraphQL / REST', category: 'API Layer', level: 'Expert' },
    { name: 'PostgreSQL & Redis', category: 'Databases', level: 'Expert' },
    { name: 'Figma & Design Systems', category: 'UI/UX', level: 'Master' },
    { name: 'Vite & Turbo', category: 'Tooling', level: 'Expert' }
  ];

  const values = [
    {
      icon: <Rocket size={24} color="#818cf8" />,
      title: 'Relentless Innovation',
      desc: 'We never settle for generic boilerplate solutions. Every project pushes the boundaries of modern design and web performance.'
    },
    {
      icon: <Shield size={24} color="#c084fc" />,
      title: 'Uncompromised Quality',
      desc: 'Clean codebases, rigorous automated testing, and rock-solid security guarantees that scale with your customer growth.'
    },
    {
      icon: <Target size={24} color="#38bdf8" />,
      title: 'Measurable Impact',
      desc: 'Beautiful UI is only half the battle. We focus relentlessly on business conversion rates, user engagement, and hard ROI metrics.'
    },
    {
      icon: <Layers size={24} color="#f472b6" />,
      title: 'Transparent Partnership',
      desc: 'Direct line to senior engineers and lead designers. Real-time updates, clear timelines, and zero corporate bureaucracy.'
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">WHO WE ARE</span>
          <h2 className="section-title">
            Architects of <span className="text-gradient-vibrant">Next-Generation</span> Digital Products
          </h2>
          <p className="section-description">
            Founded in 2021, Enliven is a collective of senior developers, product designers, and AI architects passionate about creating extraordinary software.
          </p>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3.5rem' }}>
          {[
            { id: 'story', label: 'Our Story & Mission', icon: <Target size={16} /> },
            { id: 'values', label: 'Core Philosophy', icon: <Sparkles size={16} /> },
            { id: 'tech', label: 'Tech Stack & Stack', icon: <Terminal size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.75rem 1.6rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.95rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: activeTab === tab.id ? 'rgba(129, 140, 248, 0.6)' : 'var(--border-subtle)',
                background: activeTab === tab.id ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-muted)'
              }}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab 1: Our Story */}
        {activeTab === 'story' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div className="glass-panel" style={{ borderRadius: '24px', padding: '2.5rem' }}>
              <div className="badge-glow" style={{ marginBottom: '1.25rem' }}>
                <Globe size={14} color="#818cf8" />
                <span>Global Remote Team</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '1rem' }}>
                Bridging the Gap Between <span className="text-gradient">Design & Engineering</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
                Traditional agencies often split product design and engineering into separate silos. At Enliven, our design and development teams operate as a unified unit, crafting cohesive web platforms that perform as flawlessly as they look.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                From venture-backed YC startups to Fortune 500 enterprises, we help visionary founders build category-defining digital experiences that capture attention and drive sustainable growth.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#818cf8', fontFamily: 'var(--font-heading)' }}>5+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Years of Industry Leadership</div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#c084fc', fontFamily: 'var(--font-heading)' }}>30+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>Design & Tech Awards</div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-heading)' }}>120M+</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>End-Users Reached</div>
              </div>

              <div className="glass-card" style={{ padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#4ade80', fontFamily: 'var(--font-heading)' }}>100%</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>On-Time Code Delivery</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Core Philosophy */}
        {activeTab === 'values' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem'
                }}>
                  {v.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Tech Stack */}
        {activeTab === 'tech' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {techStack.map((tech, i) => (
                <div 
                  key={i} 
                  className="glass-card" 
                  style={{
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>{tech.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.15rem' }}>{tech.category}</div>
                  </div>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    padding: '0.2rem 0.6rem', 
                    borderRadius: '20px', 
                    background: 'rgba(99, 102, 241, 0.15)',
                    color: '#818cf8',
                    fontWeight: 600
                  }}>
                    {tech.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
