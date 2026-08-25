import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function StrataStudio({ onNavigate }) {
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
                <span>Case Study • Organic Traffic Growth</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', textAlign: 'left', marginBottom: '1.25rem' }}>
                Strata Studio: <span className="text-gradient-purple">From 0 → 6,000 Monthly Visitors</span> in 7 Months
              </h1>

              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem', fontSize: '0.95rem', color: 'var(--text-body-muted)' }}>
                <span><strong>Client:</strong> Strata Studio — Design & Creative Agency</span>
                <span>•</span>
                <span><strong>Impact:</strong> Strong Local & National Search Visibility</span>
                <span>•</span>
                <span><strong>Timeline:</strong> 7 Months</span>
              </div>

              <div className="card-purple-deep" style={{ padding: '2.5rem', marginBottom: '3.5rem' }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-editorial)', marginBottom: '0.5rem' }}>
                  Result Highlights
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '1.5rem' }}>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>6,000+</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Monthly Organic Visitors</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>0 to 6K</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Traffic Launch</div>
                  </div>
                  <div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#c4b5fd' }}>24%</div>
                    <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Inbound Inquiry Conversion Rate</div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '1rem' }}>The Challenge</h3>
                  <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    Strata Studio, a premium design agency, launched a brand-new website but had zero search visibility. In a crowded creative industry, they needed a targeted local and national SEO strategy to bring high-ticket client inquiries directly to their portfolio.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '1rem' }}>Enliven Strategy & Execution</h3>
                  <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    Enliven implemented a tailored brand launch and authority building campaign:
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      'In-depth competitor analysis for design & creative keywords.',
                      'Optimised service landing pages showcasing design portfolio case studies.',
                      'Created a high-quality blog layout for publishing design-industry insights.',
                      'Built localized authority backlinks from design directories and business sites.',
                      'Implemented performance tuning for rich media pages to keep load times under 1.5s.',
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
