import React from 'react';
import { Compass, Sparkles, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function Process({ onOpenContact }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Blueprint',
      subtitle: 'Week 1',
      icon: <Compass size={26} color="#6d28d9" />,
      description: 'We audit your existing system, map out user persona journeys, establish technical architecture schemas, and define clear KPI metrics.',
      details: ['Competitor Analysis & Technical Audit', 'UX Sitemap & User Journey Mapping', 'Technology Stack & API Selection']
    },
    {
      num: '02',
      title: 'Rapid UI/UX Prototyping',
      subtitle: 'Weeks 2 - 3',
      icon: <Sparkles size={26} color="#7c3aed" />,
      description: 'Our design team crafts high-fidelity Figma prototypes, custom component design systems, and interactive micro-animations for feedback.',
      details: ['Figma Component Library', 'Interactive Clickable Prototype', 'Micro-Animation & Motion Specs']
    },
    {
      num: '03',
      title: 'High-Velocity Engineering',
      subtitle: 'Weeks 4 - 6',
      icon: <Code2 size={26} color="#8b5cf6" />,
      description: 'Senior full-stack engineers build clean, modular TypeScript code with daily staging deployments and automated CI/CD pipeline tests.',
      details: ['React / Next.js / Node.js Development', 'Database & API Microservices Integration', 'Automated QA & Core Web Vitals Audit']
    },
    {
      num: '04',
      title: 'Launch & Continuous Scale',
      subtitle: 'Week 7 & Beyond',
      icon: <Rocket size={26} color="#9333ea" />,
      description: 'Zero-downtime production deployment to global edge networks, real-time analytics setup, and ongoing optimization support.',
      details: ['Global Edge Deployment & DNS Setup', 'Analytics & Telemetry Configuration', 'Monthly Feature Sprints & Maintenance']
    }
  ];

  return (
    <section id="process" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">OUR METHODOLOGY</span>
          <h2 className="section-title">
            How We Turn Ideas into <br />
            <span className="text-gradient-purple">Market-Leading Reality</span>
          </h2>
          <p className="section-description">
            A transparent 4-stage engineering sprint process designed to ship high-impact digital flagship products on time, every time.
          </p>
        </div>

        {/* 4 Process Timeline Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '2rem', position: 'relative' }}>
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="card-editorial"
              style={{
                padding: '2.5rem 2rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Step Top Bar */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '18px',
                    background: 'var(--bg-lavender)',
                    border: '1px solid var(--lavender-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {step.icon}
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-editorial)',
                    fontSize: '2.2rem',
                    fontWeight: 800,
                    color: '#c4b5fd',
                    lineHeight: 1
                  }}>
                    {step.num}
                  </span>
                </div>

                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                  {step.subtitle}
                </div>

                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.85rem' }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {step.description}
                </p>
              </div>

              {/* Step Checklist */}
              <div style={{ paddingTop: '1.25rem', borderTop: '1px solid var(--lavender-border)' }}>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--purple-deep)', fontWeight: 600 }}>
                  {step.details.map((item, dIdx) => (
                    <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7c3aed' }}></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Process CTA Footer */}
        <div style={{ marginTop: '4rem', textAlignment: 'center', display: 'flex', justifyContent: 'center' }}>
          <button onClick={onOpenContact} className="btn btn-purple" style={{ padding: '1rem 2.25rem' }}>
            <span>Kickstart Your Sprint</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
