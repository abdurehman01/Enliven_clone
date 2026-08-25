import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Code2, Layout, Zap, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function WebDevelopment({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  const stackDetails = [
    'React 19 & Next.js 15 Server Components',
    'TypeScript Strict Codebase & Automated QA',
    'Sub-100ms Page Load & Core Web Vitals Optimization',
    'Figma Component Design Systems & Micro-Animations',
    'Serverless Microservices & Headless CMS Integration'
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="services" onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      <main style={{ paddingTop: '8.5rem' }}>
        {/* Service Hero */}
        <section className="section" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(237, 233, 254, 0.6) 0%, rgba(255, 255, 255, 1) 60%)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge-lavender" style={{ marginBottom: '1.5rem' }}>
                <Code2 size={16} color="#6d28d9" />
                <span>Full-Stack Web Engineering</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Bespoke Digital Flagships Built with <br />
                <span className="text-gradient-purple">Editorial Engineering Excellence</span>
              </h1>

              <p className="section-description" style={{ marginBottom: '2.5rem' }}>
                We build high-speed, scalable web applications powered by modern React architectures, GSAP animations, and rock-solid cloud infrastructure.
              </p>

              <button onClick={handleOpenContact} className="btn btn-purple">
                <span>Start Web Engineering Sprint</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
              
              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Layout size={28} color="#6d28d9" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Editorial Product Aesthetics</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Bespoke typography contrast, sleek light/dark themes, and subtle micro-interactions that elevate your product above generic templates.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Zap size={28} color="#7c3aed" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Sub-Second Core Web Vitals</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Optimized assets, edge caching, serverless API routes, and lightweight JavaScript bundles for instant page transitions.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <ShieldCheck size={28} color="#8b5cf6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Enterprise Scalability</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Clean TypeScript codebases, modular component systems, and zero technical debt for effortless internal handoff.
                </p>
              </div>

            </div>

            {/* Tech Stack List */}
            <div className="card-purple-deep" style={{ padding: '3.5rem 3rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>Full-Stack Web Engineering Deliverables</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {stackDetails.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#ffffff', fontSize: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={20} color="#c4b5fd" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <CTA onOpenContact={handleOpenContact} />
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
