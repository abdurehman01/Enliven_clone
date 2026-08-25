import React, { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Award, ShieldCheck, Play, TrendingUp, Cpu, CheckCircle } from 'lucide-react';
import gsap from 'gsap';

export default function Hero({ onExploreWork, onOpenContact }) {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8 })
        .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.5')
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .fromTo(btnRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.6')
        .fromTo(cardRef.current, { opacity: 0, scale: 0.94, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 1 }, '-=0.7');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="section"
      style={{
        paddingTop: '10rem',
        paddingBottom: '6rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        background: 'radial-gradient(circle at 75% 20%, rgba(237, 233, 254, 0.6) 0%, rgba(255, 255, 255, 1) 60%)'
      }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Hero Content Left */}
          <div>
            <div ref={badgeRef} className="badge-lavender" style={{ marginBottom: '1.75rem' }}>
              <Sparkles size={16} color="#6d28d9" />
              <span>Next-Gen Digital Experience Studio</span>
            </div>

            <h1 ref={titleRef} style={{ fontSize: 'clamp(2.3rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.75rem', color: 'var(--purple-deep)' }}>
              Digital Products <br />
              Crafted with <span className="text-gradient-purple">Purpose & Precision.</span>
            </h1>

            <p ref={descRef} style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-body-muted)', marginBottom: '2.5rem', maxWidth: '580px', lineHeight: 1.65 }}>
              Enliven bridges editorial design elegance with high-speed full-stack engineering. We partner with visionaries to build web platforms that command authority.
            </p>

            <div ref={btnRef} className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14">
              <a href="#case-studies" onClick={onExploreWork} className="btn btn-purple">
                <span>Explore Selected Work</span>
                <ArrowRight size={18} />
              </a>

              <button onClick={onOpenContact} className="btn btn-lavender">
                <Play size={15} fill="currentColor" />
                <span>Schedule Intro Call</span>
              </button>
            </div>

            {/* Editorial Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[var(--lavender-border)]">
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--purple-deep)', fontFamily: 'var(--font-editorial)' }}>150+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-body-muted)', fontWeight: 500 }}>Global Projects Delivered</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#6d28d9', fontFamily: 'var(--font-editorial)' }}>99.4%</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-body-muted)', fontWeight: 500 }}>Client Satisfaction</div>
              </div>
              <div>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#7c3aed', fontFamily: 'var(--font-editorial)' }}>$45M+</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-body-muted)', fontWeight: 500 }}>Client Value Generated</div>
              </div>
            </div>
          </div>

          {/* Hero Visual Right — Deep Purple & Subtle Lavender Card Stack */}
          <div ref={cardRef} className="relative pb-8 lg:pb-0">

            <div className="card-purple-deep" style={{ padding: '2.25rem', position: 'relative', overflow: 'hidden' }}>

              {/* Header Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(196, 181, 253, 0.15)' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f43f5e' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fbbf24' }} />
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
                </div>
                <div style={{ fontSize: '0.85rem', color: '#c4b5fd', background: 'rgba(255, 255, 255, 0.08)', padding: '0.3rem 0.85rem', borderRadius: '20px', fontWeight: 500 }}>
                  enliven-core-v4.0.ts
                </div>
              </div>

              {/* Floating Performance Modules */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(196, 181, 253, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#c4b5fd' }}>
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Growth & Conversion Rate</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-editorial)' }}>+310% Acceleration</div>
                    </div>
                  </div>
                  <span className="badge-purple-glow" style={{ fontSize: '0.75rem', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', borderColor: 'rgba(16, 185, 129, 0.4)' }}>Active</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(255, 255, 255, 0.06)', padding: '1.25rem', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(124, 58, 237, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ddd6fe' }}>
                      <Cpu size={24} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#e9d5ff' }}>Autonomous Engine</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-editorial)' }}>Sub-100ms Latency</div>
                    </div>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#ddd6fe', background: 'rgba(196, 181, 253, 0.15)', padding: '0.3rem 0.75rem', borderRadius: '20px', fontWeight: 600 }}>Optimized</span>
                </div>

                {/* Code Snippet Box */}
                <div style={{ background: '#1e1b4b', padding: '1.35rem', borderRadius: '16px', fontSize: '0.85rem', fontFamily: 'monospace', color: '#c4b5fd', border: '1px solid rgba(196, 181, 253, 0.15)' }}>
                  <div style={{ color: '#a78bfa' }}>// Executing Enliven Pipeline...</div>
                  <div><span style={{ color: '#f472b6' }}>import</span> {'{'} StudioEngine {'}'} <span style={{ color: '#f472b6' }}>from</span> <span style={{ color: '#34d399' }}>'@enliven/core'</span>;</div>
                  <div style={{ marginTop: '0.3rem' }}><span style={{ color: '#f472b6' }}>const</span> app = <span style={{ color: '#38bdf8' }}>new</span> StudioEngine({'{'} aesthetics: <span style={{ color: '#34d399' }}>'DeepPurple'</span> {'}'});</div>
                  <div style={{ color: '#34d399', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <CheckCircle size={14} /> System deployed to global edge network.
                  </div>
                </div>

              </div>

            </div>

            {/* Outer Accent Badges */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '0px',
              background: '#ffffff',
              border: '1px solid var(--lavender-border)',
              padding: '0.75rem 1.25rem',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 15px 30px rgba(46, 16, 101, 0.12)',
              zIndex: 3
            }}>
              <Award size={20} color="#7c3aed" />
              <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--purple-deep)' }}>Awwwards Site of the Day</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
