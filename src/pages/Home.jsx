import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LogoMarquee from '../components/LogoMarquee';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import Services from '../components/Services';
import Results from '../components/Results';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function Home({ onNavigate, activePage = 'home' }) {
  const [activeModal, setActiveModal] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setContactOpen(true);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)', position: 'relative' }}>
      
      {/* Sticky Editorial Navbar */}
      <Navbar activePage={activePage} onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      {/* Main Connected Journey Flow */}
      <main>
        {/* HERO */}
        <Hero 
          onExploreWork={() => {
            const el = document.getElementById('case-studies');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenContact={handleOpenContact}
        />

        {/* TRUST / CLIENT LOGOS */}
        <LogoMarquee />

        {/* "WHY US?" / VALUE PROPOSITION */}
        <WhyUs onOpenContact={handleOpenContact} />

        {/* CASE STUDIES (Narrative Anchor #1) */}
        <CaseStudies onSelectProject={(p) => setActiveModal({ type: 'project', data: p })} />

        {/* SERVICES */}
        <Services onSelectService={(s) => setActiveModal({ type: 'service', data: s })} />

        {/* RESULTS / METRICS (Narrative Anchor #2) */}
        <Results />

        {/* OUR PROCESS (Narrative Anchor #3) */}
        <Process onOpenContact={handleOpenContact} />

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* FAQ */}
        <FAQ />

        {/* CONTACT */}
        <Contact />

        {/* BIG CTA */}
        <CTA onOpenContact={handleOpenContact} />
      </main>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />

      {/* Detail Modal Viewer */}
      {activeModal && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(30, 27, 75, 0.75)',
            backdropFilter: 'blur(16px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="card-editorial p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
            style={{
              width: '100%',
              maxWidth: '680px',
              borderRadius: 'var(--radius-lg)',
              position: 'relative',
              background: '#ffffff',
              boxShadow: '0 30px 60px rgba(46, 16, 101, 0.25)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModal(null)}
              style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                background: 'var(--bg-lavender)',
                border: '1px solid var(--lavender-border)',
                color: 'var(--purple-deep)',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              <X size={20} />
            </button>

            {activeModal.type === 'project' && (
              <div>
                <div className="badge-lavender" style={{ marginBottom: '1rem' }}>Case Study Deep-Dive</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>
                  {activeModal.data.title}
                </h3>
                <div style={{ fontSize: '0.95rem', color: '#6d28d9', fontWeight: 700, marginBottom: '1.5rem' }}>
                  Client: {activeModal.data.client} • Key Impact: {activeModal.data.impact}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-7">
                  <div style={{ background: '#faf8ff', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--lavender-border)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', marginBottom: '0.4rem' }}>The Challenge</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{activeModal.data.problem}</div>
                  </div>
                  <div style={{ background: '#faf8ff', padding: '1.25rem', borderRadius: '14px', border: '1px solid var(--lavender-border)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#6d28d9', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Enliven Solution</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>{activeModal.data.solution}</div>
                  </div>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--purple-deep)' }}>Quantified Outcomes:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2.25rem' }}>
                  {activeModal.data.metrics.map((m, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.925rem', color: 'var(--purple-deep)', fontWeight: 600 }}>
                      <CheckCircle2 size={18} color="#7c3aed" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => { setActiveModal(null); handleOpenContact(); }}
                  className="btn btn-purple"
                  style={{ width: '100%' }}
                >
                  <span>Schedule Strategy Session</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

            {activeModal.type === 'service' && (
              <div>
                <div className="badge-lavender" style={{ marginBottom: '1rem' }}>Capability Overview</div>
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>
                  {activeModal.data.title}
                </h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                  {activeModal.data.description}
                </p>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.85rem', color: 'var(--purple-deep)' }}>Key Deliverables Included:</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.75rem', marginBottom: '2.25rem' }}>
                  {activeModal.data.deliverables.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.1rem', borderRadius: '12px', background: '#faf8ff', border: '1px solid var(--lavender-border)' }}>
                      <CheckCircle2 size={18} color="#7c3aed" />
                      <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--purple-deep)' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => { setActiveModal(null); handleOpenContact(); }}
                  className="btn btn-purple"
                  style={{ width: '100%' }}
                >
                  <span>Request Proposal for {activeModal.data.title}</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
