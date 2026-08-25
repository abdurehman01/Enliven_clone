import React from 'react';
import { Target, Zap, ShieldCheck, Layers, ArrowUpRight } from 'lucide-react';

export default function WhyUs({ onOpenContact }) {
  const values = [
    {
      icon: <Zap size={28} color="#6d28d9" />,
      title: 'High-Velocity Shipping',
      subtitle: 'From Concept to Production in Weeks',
      description: 'We eliminate corporate latency through automated CI/CD pipelines, reusable component architectures, and agile senior engineering sprints.',
      stat: '2x Speed',
      statLabel: 'Faster Than Standard Agencies'
    },
    {
      icon: <Target size={28} color="#7c3aed" />,
      title: 'Conversion-Focused UX',
      subtitle: 'Designed for Business Impact',
      description: 'Stunning visual aesthetics are grounded in behavioral psychology, accessibility best practices, and conversion rate optimization metrics.',
      stat: '+280%',
      statLabel: 'Average Client Conversion Spike'
    },
    {
      icon: <ShieldCheck size={28} color="#8b5cf6" />,
      title: 'Enterprise Code Integrity',
      subtitle: 'Zero Technical Debt Guarantee',
      description: 'Rigorous TypeScript typing, automated test suites, and clean modular patterns ensure your codebase remains scalable for years.',
      stat: '99.99%',
      statLabel: 'Production Uptime & Reliability'
    },
    {
      icon: <Layers size={28} color="#9333ea" />,
      title: 'Direct Partner Access',
      subtitle: 'Zero Middle Management',
      description: 'Work directly with lead designers and principal engineers. Transparent Slack channels, real-time Loom demos, and clear roadmaps.',
      stat: '1-on-1',
      statLabel: 'Direct Engineering Contact'
    }
  ];

  return (
    <section id="why-us" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">WHY CHOOSE ENLIVEN</span>
          <h2 className="section-title">
            The Studio Partner Built for <br />
            <span className="text-gradient-purple">High-Growth Ambitious Teams</span>
          </h2>
          <p className="section-description">
            We don't just build websites—we architect digital assets designed to outshine competitors and capture market share.
          </p>
        </div>

        {/* 4 Large Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {values.map((v, i) => (
            <div key={i} className="card-editorial" style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              <div>
                {/* Icon Container */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '20px',
                  background: 'var(--bg-lavender)',
                  border: '1px solid var(--lavender-border)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.75rem'
                }}>
                  {v.icon}
                </div>

                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                  {v.subtitle}
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--purple-deep)' }}>
                  {v.title}
                </h3>

                <p style={{ color: 'var(--text-body-muted)', fontSize: '1rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                  {v.description}
                </p>
              </div>

              {/* Stat Highlight Box */}
              <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--lavender-border)', display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--purple-deep)', fontFamily: 'var(--font-editorial)' }}>
                  {v.stat}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-body-muted)', fontWeight: 500 }}>
                  {v.statLabel}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Callout Footer */}
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
          <button onClick={onOpenContact} className="btn btn-purple" style={{ padding: '1rem 2.25rem' }}>
            <span>Start Your Transformation</span>
            <ArrowUpRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
