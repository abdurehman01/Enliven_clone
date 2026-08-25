import React from 'react';
import { Sparkles, ArrowUp, Globe, Share2, Code, Terminal, Heart } from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page, href) => {
    if (onNavigate) {
      onNavigate(page, href);
    }
  };

  return (
    <footer style={{
      background: '#1e1b4b',
      borderTop: '1px solid rgba(196, 181, 253, 0.15)',
      paddingTop: '5rem',
      paddingBottom: '3rem',
      color: '#e9d5ff'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 pb-12 sm:pb-16 border-b border-[rgba(196,181,253,0.12)]">
          
          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #3b0764 0%, #7c3aed 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-editorial)', color: '#ffffff' }}>
                ENLIVEN
              </span>
            </div>

            <p style={{ fontSize: '0.925rem', color: '#c4b5fd', marginBottom: '1.75rem', lineHeight: 1.65 }}>
              Architecting high-impact digital experiences, bespoke software engineering, and AI platforms for ambitious enterprises.
            </p>

            {/* Social Links */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {[
                { icon: <Code size={18} />, href: 'https://github.com' },
                { icon: <Globe size={18} />, href: 'https://twitter.com' },
                { icon: <Share2 size={18} />, href: 'https://linkedin.com' },
                { icon: <Terminal size={18} />, href: 'https://dribbble.com' }
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(196, 181, 253, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e9d5ff',
                    textDecoration: 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.925rem' }}>
              <li><a href="#home" onClick={() => handleNav('home', '#home')} style={{ color: 'inherit', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#why-us" onClick={() => handleNav('home', '#why-us')} style={{ color: 'inherit', textDecoration: 'none' }}>Why Us</a></li>
              <li><a href="#case-studies" onClick={() => handleNav('case-studies', '#case-studies')} style={{ color: 'inherit', textDecoration: 'none' }}>Case Studies</a></li>
              <li><a href="#services" onClick={() => handleNav('services', '#services')} style={{ color: 'inherit', textDecoration: 'none' }}>Services</a></li>
              <li><a href="#about" onClick={() => handleNav('about', '#about')} style={{ color: 'inherit', textDecoration: 'none' }}>About Studio</a></li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>Capabilities</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.925rem' }}>
              <li><a href="#services" onClick={() => handleNav('services', '#services')} style={{ color: 'inherit', textDecoration: 'none' }}>Full-Stack Web Engineering</a></li>
              <li><a href="#services" onClick={() => handleNav('services', '#services')} style={{ color: 'inherit', textDecoration: 'none' }}>UI/UX & Editorial Product Design</a></li>
              <li><a href="#services" onClick={() => handleNav('services', '#services')} style={{ color: 'inherit', textDecoration: 'none' }}>AI & Autonomous Intelligence</a></li>
              <li><a href="#services" onClick={() => handleNav('services', '#services')} style={{ color: 'inherit', textDecoration: 'none' }}>Cloud & DevOps Infrastructure</a></li>
              <li><a href="#services" onClick={() => handleNav('services', '#services')} style={{ color: 'inherit', textDecoration: 'none' }}>Cross-Platform Mobile Apps</a></li>
            </ul>
          </div>

          {/* Studio HQ & Operational Status */}
          <div>
            <h4 style={{ color: '#ffffff', fontSize: '1.05rem', fontWeight: 800, marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>Headquarters</h4>
            <p style={{ fontSize: '0.925rem', color: '#c4b5fd', marginBottom: '1.25rem', lineHeight: 1.65 }}>
              Enliven Studio Inc.<br />
              500 Howard Street, Suite 400<br />
              San Francisco, CA 94105
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.35rem 0.85rem', borderRadius: '20px', background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', fontSize: '0.8rem', color: '#34d399', fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399' }}></span>
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

        </div>

        {/* Sub Footer */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          paddingTop: '2.25rem',
          fontSize: '0.875rem'
        }}>
          <div>
            © {new Date().getFullYear()} Enliven Studio. All rights reserved. Crafted with <Heart size={14} color="#f472b6" style={{ display: 'inline', margin: '0 2px' }} /> for visionaries.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <a href="#home" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#home" style={{ color: '#c4b5fd', textDecoration: 'none' }}>Terms of Service</a>
            
            <button
              onClick={scrollToTop}
              className="btn btn-lavender"
              style={{ width: '40px', height: '40px', padding: 0, borderRadius: '50%' }}
              aria-label="Back to Top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
