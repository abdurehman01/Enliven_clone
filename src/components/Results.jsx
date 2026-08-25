import React, { useEffect, useRef } from 'react';
import { TrendingUp, Award, Zap, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Results() {
  const sectionRef = useRef(null);
  const num1Ref = useRef(null);
  const num2Ref = useRef(null);
  const num3Ref = useRef(null);
  const num4Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateCounter = (ref, endVal, prefix = '', suffix = '') => {
        if (!ref.current) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: endVal,
          duration: 2.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            once: true
          },
          onUpdate: () => {
            if (ref.current) {
              const formatted = Math.floor(obj.val).toLocaleString();
              ref.current.innerText = `${prefix}${formatted}${suffix}`;
            }
          }
        });
      };

      animateCounter(num1Ref, 45, '$', 'M+');
      animateCounter(num2Ref, 99, '', '.4%');
      animateCounter(num3Ref, 150, '', '+');
      animateCounter(num4Ref, 100, '', '%');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const metrics = [
    {
      ref: num1Ref,
      defaultText: '$45M+',
      label: 'Client Revenue Generated',
      sub: 'Direct financial uplift across SaaS & E-Commerce clients',
      icon: <TrendingUp size={24} color="#ffffff" />
    },
    {
      ref: num2Ref,
      defaultText: '99.4%',
      label: 'Client Satisfaction Index',
      sub: 'Based on independent post-launch NPS feedback',
      icon: <Award size={24} color="#ffffff" />
    },
    {
      ref: num3Ref,
      defaultText: '150+',
      label: 'Digital Flagships Shipped',
      sub: 'Deployed globally across North America, Europe & Asia',
      icon: <Zap size={24} color="#ffffff" />
    },
    {
      ref: num4Ref,
      defaultText: '100%',
      label: 'On-Time Milestone Rate',
      sub: 'Rigorous sprint discipline with zero deadline drift',
      icon: <ShieldCheck size={24} color="#ffffff" />
    }
  ];

  return (
    <section ref={sectionRef} id="results" className="section" style={{ background: '#2e1065', color: '#ffffff', overflow: 'hidden', position: 'relative' }}>
      
      {/* Background Soft Purple Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
        filter: 'blur(70px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <span className="section-subtitle" style={{ color: '#c4b5fd' }}>MEASURABLE OUTCOMES</span>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Proven Impact <br />
            <span className="text-gradient-lavender">Quantified in Numbers</span>
          </h2>
          <p className="section-description" style={{ color: '#e9d5ff' }}>
            We measure our success strictly by the business transformation and financial growth our digital products generate for clients.
          </p>
        </div>

        {/* 4 Metric Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((m, idx) => (
            <div 
              key={idx} 
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(196, 181, 253, 0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: '2.5rem 2rem',
                backdropFilter: 'blur(12px)',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '16px',
                background: 'rgba(196, 181, 253, 0.2)',
                border: '1px solid rgba(196, 181, 253, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem'
              }}>
                {m.icon}
              </div>

              <div 
                ref={m.ref} 
                style={{
                  fontSize: 'clamp(2.8rem, 4vw, 3.8rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  fontFamily: 'var(--font-editorial)',
                  lineHeight: 1,
                  marginBottom: '0.75rem'
                }}
              >
                {m.defaultText}
              </div>

              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#e9d5ff', marginBottom: '0.5rem' }}>
                {m.label}
              </div>

              <div style={{ fontSize: '0.875rem', color: '#c4b5fd', lineHeight: 1.5 }}>
                {m.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
