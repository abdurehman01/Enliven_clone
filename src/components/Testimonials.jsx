import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Enliven completely re-engineered our SaaS platform from scratch. The performance optimization cut our AWS infrastructure costs by 42%, and our user onboarding conversion surged by 280% within the first 30 days post-launch.",
      name: "Marcus Vance",
      role: "VP of Product",
      company: "Nexus Analytics",
      avatarBg: "linear-gradient(135deg, #2e1065, #6d28d9)",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      quote: "Partnering with Enliven felt like extending our core team with elite Silicon Valley talent. Their mastery of micro-interactions, dark & light theme aesthetics, and robust React architecture is unmatched.",
      name: "Elena Rostova",
      role: "Co-Founder & CTO",
      company: "LuminaPay",
      avatarBg: "linear-gradient(135deg, #3b0764, #7c3aed)",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      quote: "They delivered a complex HIPAA-compliant telehealth portal two weeks ahead of our strict investor deadline. Their codebase is pristine, heavily documented, and scales effortlessly.",
      name: "Dr. Jonathan Hayes",
      role: "Chief Medical Officer",
      company: "ApexHealth Systems",
      avatarBg: "linear-gradient(135deg, #4c1d95, #9333ea)",
      rating: 5,
      verified: true
    }
  ];

  const current = testimonials[activeIndex];

  return (
    <section id="testimonials" className="section" style={{ background: '#faf8ff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">
            Loved by Visionary <br />
            <span className="text-gradient-purple">Founders & Engineering Leaders</span>
          </h2>
          <p className="section-description">
            Read what tech leaders say about their experience collaborating with Enliven Studio.
          </p>
        </div>

        {/* Carousel Spotlight Card */}
        <div style={{ maxWidth: '920px', margin: '0 auto' }}>
          <div 
            className="card-editorial"
            style={{
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 3rem',
              position: 'relative',
              background: '#ffffff',
              boxShadow: '0 25px 50px -15px rgba(76, 29, 149, 0.08)'
            }}
          >
            {/* Top Stars & Quote Icon */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '5px' }}>
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} size={22} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>
              <Quote size={44} color="#ede9fe" />
            </div>

            {/* Quote Body */}
            <p style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
              color: 'var(--purple-deep)',
              lineHeight: 1.6,
              fontWeight: 500,
              fontStyle: 'italic',
              marginBottom: '2.5rem'
            }}>
              "{current.quote}"
            </p>

            {/* Author Footer */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--lavender-border)' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: current.avatarBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: '#ffffff',
                  boxShadow: '0 8px 20px rgba(109, 40, 217, 0.3)'
                }}>
                  {current.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--purple-deep)' }}>{current.name}</span>
                    {current.verified && <CheckCircle2 size={16} color="#7c3aed" />}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body-muted)' }}>
                    {current.role} • <span style={{ color: '#6d28d9', fontWeight: 600 }}>{current.company}</span>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                  className="btn btn-lavender"
                  style={{ width: '42px', height: '42px', borderRadius: '50%', padding: 0 }}
                  aria-label="Previous Review"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span style={{ fontSize: '0.9rem', color: 'var(--purple-deep)', fontWeight: 700, minWidth: '45px', textAlign: 'center' }}>
                  {activeIndex + 1} / {testimonials.length}
                </span>

                <button
                  onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                  className="btn btn-lavender"
                  style={{ width: '42px', height: '42px', borderRadius: '50%', padding: 0 }}
                  aria-label="Next Review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
