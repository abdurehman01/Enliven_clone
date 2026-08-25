import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Award, ShieldCheck, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

export default function RankGuarantee({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  const terms = [
    'Guaranteed Top 3 Search Positions within Agreed Sprint Windows',
    'Full Money-Back / Extended Service Credit Clause',
    'Transparent Real-Time Dashboard Ranking Verification',
    'Continuous Algorithm Update Protection & SLA Safeguards',
    'No Hidden Contract Fine Print or Complex Lock-Ins'
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
                <Award size={16} color="#6d28d9" />
                <span>Performance Guarantee</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Risk-Free Ranking Guarantee & <br />
                <span className="text-gradient-purple">Quantified Growth Commitment</span>
              </h1>

              <p className="section-description" style={{ marginBottom: '2.5rem' }}>
                We back our engineering and search optimization strategies with hard SLA ranking guarantees—if we don't deliver agreed rank milestones, you don't pay.
              </p>

              <button onClick={handleOpenContact} className="btn btn-purple">
                <span>View Risk-Free Terms</span>
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
                  <ShieldCheck size={28} color="#6d28d9" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>100% Risk Removal</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  We align our agency incentives directly with your business success. Clear, binding contract targets protect your investment.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <TrendingUp size={28} color="#7c3aed" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Milestone Verification</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Track your position daily through automated third-party rank verification tools like Ahrefs, SEMrush, and Google Search Console.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Award size={28} color="#8b5cf6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>SLA Guarantee Shield</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  If agreed rankings are not met within the specified timeline, our team works free of charge until the targets are achieved.
                </p>
              </div>

            </div>

            {/* Terms List */}
            <div className="card-purple-deep" style={{ padding: '3.5rem 3rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>Guarantee Provisions</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {terms.map((item, idx) => (
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
