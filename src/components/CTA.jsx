import React, { useState } from 'react';
import { ArrowRight, Send, Check, Sparkles } from 'lucide-react';

export default function CTA({ onOpenContact }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <section className="section" style={{ paddingBottom: '8rem', paddingTop: '4rem' }}>
      <div className="container">
        
        <div 
          className="card-purple-deep p-8 sm:p-16 text-center relative overflow-hidden"
          style={{
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 30px 60px -15px rgba(46, 16, 101, 0.4)'
          }}
        >
          {/* Ambient Lavender Radial Highlight */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-10%',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
            
            <div className="badge-purple-glow" style={{ marginBottom: '1.75rem' }}>
              <Sparkles size={16} color="#c4b5fd" />
              <span>Transform Your Digital Presence</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', fontWeight: 800, lineHeight: 1.12, marginBottom: '1.5rem', color: '#ffffff' }}>
              Ready to Ship a Flagship <br />
              <span className="text-gradient-lavender">Digital Product?</span>
            </h2>

            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: '#e9d5ff', marginBottom: '2.75rem', lineHeight: 1.65 }}>
              Partner with Enliven to design, engineer, and scale a world-class digital asset that commands your market category.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center', maxWidth: '560px', margin: '0 auto 2.5rem auto' }}>
              <input
                type="email"
                placeholder="Enter your work email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  flex: '1 1 280px',
                  padding: '1rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(196, 181, 253, 0.25)',
                  color: '#ffffff',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button type="submit" className="btn btn-white" style={{ padding: '1rem 2rem' }}>
                {submitted ? (
                  <>
                    <span>Request Sent</span>
                    <Check size={18} color="#2e1065" />
                  </>
                ) : (
                  <>
                    <span>Get Free Audit</span>
                    <Send size={16} color="#2e1065" />
                  </>
                )}
              </button>
            </form>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm" style={{ color: '#c4b5fd' }}>
              <span>✓ Free 30-Min Tech Consultation</span>
              <span>✓ Response within 24h</span>
              <span>✓ Mutual NDAs</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
