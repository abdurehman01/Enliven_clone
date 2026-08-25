import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CaseStudyTraffic10K({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="case-studies" onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      <main style={{ paddingTop: '8.5rem' }}>
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '820px', margin: '0 auto' }}>
              <div className="badge-lavender" style={{ marginBottom: '1.5rem' }}>
                <Sparkles size={16} color="#6d28d9" />
                <span>Case Study • Organic Growth</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textAlign: 'left', marginBottom: '1.25rem' }}>
                0 to 10,000 Monthly Organic Visitors in <span className="text-gradient-purple">90 Days</span>
              </h1>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontSize: '0.95rem', color: 'var(--text-body-muted)' }}>
                <span><strong>Client:</strong> SaaS Analytics Startup</span>
                <span>•</span>
                <span><strong>Impact:</strong> +340% ARR Boost</span>
                <span>•</span>
                <span><strong>Timeline:</strong> 3 Months</span>
              </div>

              <div className="card-purple-deep" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-editorial)', marginBottom: '0.5rem' }}>
                  Result Highlights
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>10,240</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Monthly Organic Traffic</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>4.8x</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Inbound Demo Signups</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>#1</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Google Rank for 42 Core Terms</div>
                  </div>
                </div>
              </div>

              {/* Editorial Case Study Content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '1rem' }}>The Challenge</h3>
                  <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    The client had a innovative AI telemetry product but zero search engine authority. Their legacy website suffered from slow page renders, missing structured data, and non-optimized landing pages that failed to rank for high-intent B2B search terms.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight 800, color: 'var(--purple-deep)', marginBottom: '1rem' }}>Enliven Strategy & Execution</h3>
                  <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Enliven executed a rapid 90-day technical SEO and web overhaul:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'Rebuilt site on Next.js 15 Server Components with sub-100ms Core Web Vitals.',
                      'Implemented comprehensive JSON-LD schema for entity and feature indexing.',
                      'Published 25 authoritative long-form technical blueprints targeting buyer intent.',
                      'Acquired 18 high-DR editorial backlinks from leading tech publications.'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem', color: 'var(--purple-deep)', fontWeight: 600 }}>
                        <CheckCircle2 size={18} color="#7c3aed" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--lavender-border)' }}>
                  <button onClick={handleOpenContact} className="btn btn-purple">
                    <span>Replicate This Growth for Your Brand</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
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
