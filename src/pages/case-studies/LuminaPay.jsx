import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Sparkles, CheckCircle2, ArrowRight, CreditCard } from 'lucide-react';

export default function LuminaPay({ onNavigate }) {
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
                <span>Case Study • FinTech SEO</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textAlign: 'left', marginBottom: '1.25rem' }}>
                Lumina Pay: <span className="text-gradient-purple">2,697 → 13,480 Monthly Organic Visitors</span> (+400%)
              </h1>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontSize: '0.95rem', color: 'var(--text-body-muted)' }}>
                <span><strong>Client:</strong> Lumina Pay — FinTech Payments Startup</span>
                <span>•</span>
                <span><strong>Impact:</strong> +400% Organic Visitor Growth</span>
                <span>•</span>
                <span><strong>Timeline:</strong> 5 Months</span>
              </div>

              <div className="card-purple-deep" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-editorial)', marginBottom: '0.5rem' }}>
                  Result Highlights
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>13,480</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Monthly Organic Visitors</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>+400%</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Traffic Increase</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>3.2x</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Increase in Trial Signups</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '1rem' }}>The Challenge</h3>
                  <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    Lumina Pay had a strong product but was outranked by legacy players in every relevant FinTech keyword category. With only 2,697 monthly visitors and low brand search volume, converting their organic channel into a growth engine was mission-critical for their Series A fundraise.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '1rem' }}>Enliven Strategy & Execution</h3>
                  <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Enliven deployed a rapid FinTech SEO growth program:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'Competitive keyword gap analysis across 200+ high-intent FinTech terms.',
                      'Rebuilt landing pages with conversion-optimised copy and schema markup.',
                      'Published 30+ authoritative FinTech comparison and guide articles.',
                      'Secured editorial coverage in 15 high-authority financial publications.',
                      'Implemented trust signals, E-E-A-T optimisation for regulated industry.',
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
