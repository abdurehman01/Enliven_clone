import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { MapPin, Navigation, Star, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LocalSEO({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  const features = [
    'Google Business Profile Map Pack Optimization',
    'Hyper-Local Citation & NAP Consistency Sync',
    'Localized Geo-Targeted Landing Pages',
    'Automated Customer Review Acquisition Engine',
    'Local Rank Grid Monitoring & Competitor Insights'
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
                <MapPin size={16} color="#6d28d9" />
                <span>Hyper-Local Search Growth</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Capture Your Local Market with <br />
                <span className="text-gradient-purple">Google Map Pack Dominance</span>
              </h1>

              <p className="section-description" style={{ marginBottom: '2.5rem' }}>
                Rank #1 in Google Maps and local search results across your primary territories to turn nearby high-intent searchers into loyal customers.
              </p>

              <button onClick={handleOpenContact} className="btn btn-purple">
                <span>Claim Your Local Strategy</span>
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
                  <Navigation size={28} color="#6d28d9" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Google Map Pack Top 3</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Position your brand in the coveted 3-pack Google Maps view when nearby users search for your core services.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Star size={28} color="#7c3aed" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Review Acquisition Engine</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Systematize authentic 5-star customer reviews to boost click-through rates and build unshakeable local credibility.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <ShieldCheck size={28} color="#8b5cf6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Multi-Location Scale</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Seamlessly scale local rankings across 5, 50, or 500+ physical locations with centralized schema management.
                </p>
              </div>

            </div>

            {/* Feature Checklist */}
            <div className="card-purple-deep" style={{ padding: '3.5rem 3rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>Local SEO Capabilities</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {features.map((item, idx) => (
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
