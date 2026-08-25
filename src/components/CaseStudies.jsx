import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

export default function CaseStudies({ onSelectProject }) {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'nexus-ai',
      category: 'ai',
      title: 'Nexus AI — Predictive Intelligence Workspace',
      client: 'NexusTech Global',
      impact: '+340% ARR Growth',
      description: 'Reengineered a legacy analytics platform into an AI-powered autonomous workspace processing 100M+ real-time telemetry events.',
      tags: ['React 19', 'Python RAG', 'WebGL', 'Tailwind'],
      accentGradient: 'linear-gradient(135deg, #2e1065 0%, #4c1d95 100%)',
      problem: 'Slow dashboard rendering & poor user retention on complex data visualization.',
      solution: 'Web Workers multi-threading + custom WebGL rendering engine with instant AI insights.',
      metrics: ['0.4s Average Load Time', '98.5% User Retention', '$4.2M Series B Raised']
    },
    {
      id: 'lumina-pay',
      category: 'fintech',
      title: 'LuminaPay — Cross-Border Payment Infrastructure',
      client: 'Lumina Financial',
      impact: '$12M Volume Processed',
      description: 'Ultra-secure payment engine providing multi-currency liquidity settlement and automated KYC compliance checks.',
      tags: ['Next.js 15', 'Solidity', 'GraphQL', 'Vercel'],
      accentGradient: 'linear-gradient(135deg, #3b0764 0%, #6d28d9 100%)',
      problem: 'High friction in multi-currency settlements causing 35% cart abandonment.',
      solution: 'One-click unified fiat/crypto payment gateway with sub-second API response.',
      metrics: ['2.8x Conversion Rate', 'Zero Security Vulnerabilities', '50,000+ Daily Active Users']
    },
    {
      id: 'apex-health',
      category: 'saas',
      title: 'ApexHealth — Telemedicine & Diagnostic Engine',
      client: 'Apex Health Network',
      impact: '4.9★ App Rating',
      description: 'HIPAA-compliant digital patient portal connecting 50,000+ clinicians with real-time biometric telemetry.',
      tags: ['React Native', 'Node.js', 'WebRTC', 'Redis'],
      accentGradient: 'linear-gradient(135deg, #4c1d95 0%, #7c3aed 100%)',
      problem: 'Outdated telehealth video lag and fragmented patient record management.',
      solution: 'Low-latency WebRTC video room integration + unified patient EHR data lake.',
      metrics: ['15-min Average Consultation Wait', '100% HIPAA Compliance', '1.2M Patient Encounters']
    },
    {
      id: 'strata-studio',
      category: 'branding',
      title: 'Strata — Interactive 3D Architectural Brand',
      client: 'Strata Architectural',
      impact: 'Awwwards Site of the Year',
      description: 'Complete digital brand overhaul featuring WebGL 3D building visualizers and an editorial typography design system.',
      tags: ['Figma System', 'Spline 3D', 'Vite', 'GSAP'],
      accentGradient: 'linear-gradient(135deg, #581c87 0%, #9333ea 100%)',
      problem: 'Generic corporate website failed to communicate architectural luxury.',
      solution: 'Immersive WebGL 3D property customizer with smooth editorial scroll interactions.',
      metrics: ['3.4x Time on Site', '450% Inbound Lead Spike', 'Top Design Recognition']
    }
  ];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="case-studies" className="section" style={{ background: '#faf8ff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">PROOF OF IMPACT</span>
          <h2 className="section-title">
            Featured <span className="text-gradient-purple">Case Studies</span>
          </h2>
          <p className="section-description">
            Explore how we transformed complex technical challenges into category-defining digital flagship products.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI & Intelligence' },
            { id: 'fintech', label: 'FinTech' },
            { id: 'saas', label: 'SaaS Platforms' },
            { id: 'branding', label: 'Branding & 3D' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: filter === cat.id ? '#6d28d9' : 'var(--lavender-border)',
                background: filter === cat.id ? '#3b0764' : '#ffffff',
                color: filter === cat.id ? '#ffffff' : 'var(--text-body)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))', gap: '2.5rem' }}>
          {filtered.map((project) => (
            <div 
              key={project.id}
              className="card-editorial"
              style={{
                padding: 0,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              {/* Card Banner */}
              <div 
                style={{
                  height: '240px',
                  background: project.accentGradient,
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    padding: '0.35rem 0.9rem',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff'
                  }}>
                    {project.client}
                  </span>

                  <span style={{
                    fontSize: '0.8rem',
                    fontWeight: 800,
                    padding: '0.35rem 0.9rem',
                    borderRadius: '20px',
                    background: '#ffffff',
                    color: '#2e1065'
                  }}>
                    {project.impact}
                  </span>
                </div>

                <div style={{ alignSelf: 'center', textAlign: 'center' }}>
                  <Sparkles size={52} color="#c4b5fd" style={{ opacity: 0.9 }} />
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem', lineHeight: 1.25 }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  {/* Tech Badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          padding: '0.3rem 0.75rem',
                          borderRadius: '8px',
                          background: '#f3e8ff',
                          color: '#6d28d9',
                          border: '1px solid #e9d5ff'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="btn btn-lavender"
                  style={{ width: '100%', justifyContent: 'space-between', fontSize: '0.9rem' }}
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
