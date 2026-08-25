import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Search, TrendingUp, ShieldCheck, CheckCircle2, ArrowRight, Zap, Target } from 'lucide-react';

export default function SEO({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  const deliverables = [
    'Comprehensive Technical & Architecture Audit',
    'High-Intent Keyword & Search Volume Strategy',
    'On-Page Optimization & Core Web Vitals Overhaul',
    'Editorial Link Building & Authority Acquisition',
    'Weekly Keyword Rank Tracking & Custom Analytics'
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
                <Search size={16} color="#6d28d9" />
                <span>Search Engine Optimization</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Dominate Organic Search with <br />
                <span className="text-gradient-purple">Editorial Technical SEO</span>
              </h1>

              <p className="section-description" style={{ marginBottom: '2.5rem' }}>
                Drive compounding organic revenue with precision keyword targeting, flawless site architecture, and authoritative editorial link building.
              </p>

              <button onClick={handleOpenContact} className="btn btn-purple">
                <span>Request Custom SEO Strategy</span>
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
                  <Target size={28} color="#6d28d9" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>High-Intent Keyword Intelligence</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  We uncover buyer-intent keywords that bring ready-to-convert decision makers directly to your high-conversion landing pages.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Zap size={28} color="#7c3aed" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Technical & Speed Overhaul</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Sub-second page speeds, structured JSON-LD schema markup, and zero crawl errors for guaranteed search engine indexation.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <TrendingUp size={28} color="#8b5cf6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Authority Backlink Acquisition</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  High-DR editorial placements on premier industry publications to compound your domain trust and top 3 search positions.
                </p>
              </div>

            </div>

            {/* Deliverables Checklist */}
            <div className="card-purple-deep" style={{ padding: '3.5rem 3rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>What's Included in Every Campaign</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {deliverables.map((item, idx) => (
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
