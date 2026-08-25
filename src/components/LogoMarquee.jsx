import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LogoMarquee() {
  const marqueeRef = useRef(null);

  const logos = [
    "AURA GLOBAL",
    "LUMINA PAY",
    "NEXUS AI",
    "APEX HEALTH",
    "STRATA STUDIO",
    "PULSE CLOUD",
    "VERVE COMMERCE",
    "ZEPHYR LABS"
  ];

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;

    const tween = gsap.to(el, {
      xPercent: -50,
      repeat: -1,
      duration: 25,
      ease: 'none'
    });

    return () => tween.kill();
  }, []);

  return (
    <section style={{ background: '#faf8ff', borderTop: '1px solid var(--lavender-border)', borderBottom: '1px solid var(--lavender-border)', padding: '2.5rem 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
          TRUSTED BY INNOVATION LEADERS WORLDWIDE
        </span>
      </div>

      <div style={{ display: 'flex', width: '200%', overflow: 'hidden' }}>
        <div ref={marqueeRef} style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', willChange: 'transform' }}>
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1.75rem',
                borderRadius: 'var(--radius-full)',
                background: '#ffffff',
                border: '1px solid var(--lavender-border)',
                boxShadow: '0 4px 15px rgba(76, 29, 149, 0.04)',
                color: 'var(--purple-deep)',
                fontFamily: 'var(--font-editorial)',
                fontSize: '1rem',
                fontWeight: 800,
                letterSpacing: '0.08em'
              }}
            >
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed' }}></span>
              <span>{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
