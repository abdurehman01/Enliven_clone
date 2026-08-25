import React, { useState } from 'react';
import { Code2, Layout, Bot, Cloud, Smartphone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Services({ onSelectService }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const servicesData = [
    {
      id: 'web-dev',
      category: 'engineering',
      icon: <Code2 size={30} color="#6d28d9" />,
      title: 'Full-Stack Web Engineering',
      tagline: 'High-speed, scalable web applications',
      description: 'We construct hyper-performing web applications powered by React 19, Next.js 15, and modern serverless architectures with sub-second page loads.',
      deliverables: ['Custom Next.js / Vite Apps', 'Microservices & REST / GraphQL APIs', 'Performance & Core Web Vitals Optimization', 'Headless CMS Integration']
    },
    {
      id: 'ui-ux',
      category: 'design',
      icon: <Layout size={30} color="#7c3aed" />,
      title: 'UI/UX & Product Design',
      tagline: 'Bespoke editorial interfaces users love',
      description: 'Human-centric user interface design rooted in user psychology, sleek dark & light aesthetics, custom design systems, and micro-interactions.',
      deliverables: ['Design Systems & Component Libraries', 'Figma Prototypes & Wireframing', 'UX Research & User Journeys', 'Interactive Micro-Animations']
    },
    {
      id: 'ai-ml',
      category: 'engineering',
      icon: <Bot size={30} color="#8b5cf6" />,
      title: 'AI & Autonomous Intelligence',
      tagline: 'Smart workflows built for enterprise scale',
      description: 'Integrate LLMs, custom autonomous AI agents, smart workflows, and predictive analytics straight into your existing software infrastructure.',
      deliverables: ['Custom LLM Fine-Tuning & RAG Systems', 'AI Conversational Agents', 'Predictive Analytics Dashboards', 'Workflow Process Automation']
    },
    {
      id: 'cloud-ops',
      category: 'engineering',
      icon: <Cloud size={30} color="#9333ea" />,
      title: 'Cloud Architecture & DevOps',
      tagline: 'Bulletproof 99.99% infrastructure uptime',
      description: 'Scalable cloud server deployment, Docker containerization, automated CI/CD pipelines, and zero-downtime database architectures.',
      deliverables: ['AWS / GCP / Vercel Architecture', 'Automated CI/CD Deployment Pipelines', 'Kubernetes & Docker Containerization', 'Security Audits & Load Testing']
    },
    {
      id: 'mobile-app',
      category: 'engineering',
      icon: <Smartphone size={30} color="#6d28d9" />,
      title: 'Cross-Platform Mobile Apps',
      tagline: 'Native performance on iOS & Android',
      description: 'Engaging, fast-loading mobile experiences built with React Native and Flutter, optimized for App Store & Google Play distribution.',
      deliverables: ['iOS & Android Native Experience', 'Offline Data Sync & Storage', 'Push Notification Engine', 'In-App Purchasing & Subscriptions']
    },
    {
      id: 'brand-strategy',
      category: 'design',
      icon: <Sparkles size={30} color="#7c3aed" />,
      title: 'Brand Identity & Motion',
      tagline: 'Distinct visual identity for visionaries',
      description: 'Complete brand evolution—from logo systems and typography guidelines to 3D motion design that leaves a lasting visual mark.',
      deliverables: ['Logo & Visual Identity Guidelines', '3D Motion Design & Video Assets', 'Marketing & Launch Strategy', 'Brand Assets & Pitch Decks']
    }
  ];

  const filtered = selectedCategory === 'all' ? servicesData : servicesData.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">OUR CAPABILITIES</span>
          <h2 className="section-title">
            Engineering Excellence Meets <br />
            <span className="text-gradient-purple">Creative Ingenuity</span>
          </h2>
          <p className="section-description">
            We deliver end-to-end digital capabilities designed to give ambitious enterprises a decisive competitive advantage.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          {[
            { id: 'all', label: 'All Capabilities' },
            { id: 'engineering', label: 'Engineering & Tech' },
            { id: 'design', label: 'Design & Branding' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                padding: '0.6rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                fontFamily: 'var(--font-heading)',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                border: '1px solid',
                borderColor: selectedCategory === cat.id ? '#6d28d9' : 'var(--lavender-border)',
                background: selectedCategory === cat.id ? '#3b0764' : '#ffffff',
                color: selectedCategory === cat.id ? '#ffffff' : 'var(--text-body)'
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((service) => (
            <div 
              key={service.id} 
              className="card-editorial"
              style={{
                padding: '2rem 1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                {/* Icon Container */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    background: 'var(--bg-lavender)',
                    border: '1px solid var(--lavender-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {service.icon}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {service.tagline}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.85rem' }}>
                  {service.title}
                </h3>

                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', marginBottom: '1.75rem', lineHeight: 1.65 }}>
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2.25rem' }}>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: 'var(--purple-deep)', fontWeight: 500 }}>
                      <CheckCircle2 size={17} color="#7c3aed" style={{ shrink: 0 }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button 
                onClick={() => onSelectService && onSelectService(service)}
                className="btn btn-lavender"
                style={{ width: '100%', justifyContent: 'space-between', padding: '0.8rem 1.4rem' }}
              >
                <span>Explore Capability Details</span>
                <ArrowRight size={16} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
