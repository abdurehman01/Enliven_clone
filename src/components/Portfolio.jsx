import React, { useState } from 'react';
import { ExternalLink, Sparkles, Layers, ArrowUpRight } from 'lucide-react';

export default function Portfolio({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 'nexus-ai',
      category: 'ai',
      title: 'Nexus AI — Autonomous Analytics Workspace',
      description: 'An AI-driven predictive intelligence engine processing 100M+ data points in real time with interactive WebGL visualization charts.',
      tags: ['React 19', 'Python RAG', 'Three.js', 'Tailwind'],
      metric: '+340% User Growth',
      image: 'linear-gradient(135deg, #1e1b4b 0%, #311b92 50%, #4a148c 100%)',
      accentColor: '#818cf8',
      client: 'NexusTech Global'
    },
    {
      id: 'lumina-pay',
      category: 'fintech',
      title: 'LuminaPay — Cross-Border Crypto & Fiat Gateway',
      description: 'Ultra-secure payment infrastructure providing instant multi-currency settlement and automated compliance checks.',
      tags: ['Next.js 15', 'Solidity', 'GraphQL', 'Tailwind'],
      metric: '$12M Volume Handled',
      image: 'linear-gradient(135deg, #064e3b 0%, #047857 50%, #065f46 100%)',
      accentColor: '#34d399',
      client: 'Lumina Financial'
    },
    {
      id: 'apex-health',
      category: 'saas',
      title: 'ApexHealth — Telemedicine & Patient Portal',
      description: 'HIPAA-compliant healthcare platform connecting 50,000+ physicians with real-time vitals monitoring and AI diagnostics.',
      tags: ['React Native', 'Node.js', 'WebRTC', 'Redis'],
      metric: '4.9★ App Rating',
      image: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0369a1 100%)',
      accentColor: '#38bdf8',
      client: 'Apex Health Network'
    },
    {
      id: 'strata-design',
      category: 'branding',
      title: 'Strata Studio — Brand System & 3D Motion',
      description: 'Complete visual identity transformation including interactive 3D website design, custom font design, and brand design tokens.',
      tags: ['Figma System', 'Spline 3D', 'Vite', 'Framer Motion'],
      metric: 'Awwwards Winner',
      image: 'linear-gradient(135deg, #4c0519 0%, #881337 50%, #9f1239 100%)',
      accentColor: '#f472b6',
      client: 'Strata Architectural'
    },
    {
      id: 'pulse-cloud',
      category: 'saas',
      title: 'Pulse Cloud — DevOps Infrastructure Engine',
      description: 'Real-time telemetry monitor providing instant microservice trace visualizations and proactive alert management.',
      tags: ['TypeScript', 'Golang', 'Docker', 'Kubernetes'],
      metric: '99.999% SLA Uptime',
      image: 'linear-gradient(135deg, #172554 0%, #1e3a8a 50%, #1d4ed8 100%)',
      accentColor: '#60a5fa',
      client: 'Pulse Systems Inc.'
    },
    {
      id: 'verve-commerce',
      category: 'branding',
      title: 'Verve — Next-Gen Headless E-Commerce',
      description: 'Sub-second shopping experience featuring 3D product customizers, instant checkout, and personalized AI recommendations.',
      tags: ['Next.js', 'Shopify Storefront', 'Stripe API'],
      metric: '2.8x Conversion Rate',
      image: 'linear-gradient(135deg, #312e81 0%, #4338ca 50%, #6d28d9 100%)',
      accentColor: '#c084fc',
      client: 'Verve Fashion Group'
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="section" style={{ background: 'rgba(10, 13, 22, 0.4)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">FEATURED PORTFOLIO</span>
          <h2 className="section-title">
            Crafted with Precision. <br />
            <span className="text-gradient-vibrant">Driven by Impact.</span>
          </h2>
          <p className="section-description">
            Explore a curated selection of digital platforms, web apps, and brand ecosystems engineered by our studio.
          </p>
        </div>

        {/* Filter Badges */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'ai', label: 'AI & Intelligence' },
            { id: 'saas', label: 'SaaS Platforms' },
            { id: 'fintech', label: 'FinTech' },
            { id: 'branding', label: 'Branding & Motion' },
          ].map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: activeFilter === filter.id ? 'rgba(129, 140, 248, 0.6)' : 'var(--border-subtle)',
                background: activeFilter === filter.id ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: activeFilter === filter.id ? '#ffffff' : 'var(--text-muted)'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2.5rem' }}>
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="glass-card"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
            >
              {/* Mockup Preview Area */}
              <div 
                style={{
                  height: '220px',
                  background: project.image,
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justify: 'space-between',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Decorative Grid Lines overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                  pointerEvents: 'none'
                }} />

                {/* Top Badges */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '20px', 
                    background: 'rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(8px)',
                    color: project.accentColor,
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {project.client}
                  </span>

                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    padding: '0.3rem 0.8rem', 
                    borderRadius: '20px', 
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff'
                  }}>
                    {project.metric}
                  </span>
                </div>

                {/* Project Visual Abstract representation */}
                <div style={{ position: 'relative', zIndex: 1, alignSelf: 'center', textAlign: 'center' }}>
                  <Sparkles size={48} color={project.accentColor} style={{ opacity: 0.8 }} />
                </div>

              </div>

              {/* Card Details */}
              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {project.title}
                  </h3>

                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        style={{
                          fontSize: '0.75rem',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: 'var(--text-muted)'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className="btn btn-secondary" 
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <span>View Case Study</span>
                  <ArrowUpRight size={18} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
