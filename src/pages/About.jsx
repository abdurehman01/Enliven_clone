import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Target, Sparkles, Shield, Rocket, Layers, Terminal, ArrowRight } from 'lucide-react';

export default function About({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  const techStack = [
    { name: 'React 19', category: 'Frontend', level: 'Expert' },
    { name: 'Next.js 15', category: 'Framework', level: 'Expert' },
    { name: 'TypeScript', category: 'Language', level: 'Expert' },
    { name: 'Node.js', category: 'Backend', level: 'Expert' },
    { name: 'Python / AI', category: 'Intelligence', level: 'Advanced' },
    { name: 'Tailwind / CSS', category: 'Styling', level: 'Master' },
    { name: 'AWS & Cloudflare', category: 'Infrastructure', level: 'Expert' },
    { name: 'Docker & K8s', category: 'DevOps', level: 'Advanced' },
    { name: 'GraphQL / REST', category: 'API Layer', level: 'Expert' },
    { name: 'Figma & Design Systems', category: 'UI/UX', level: 'Master' }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="about" onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      <main style={{ paddingTop: '8rem' }}>
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-subtitle">ABOUT ENLIVEN</span>
              <h2 className="section-title">
                Architects of <span className="text-gradient-purple">Next-Gen Digital Products</span>
              </h2>
              <p className="section-description">
                Founded in 2021, Enliven is a collective of principal developers, editorial product designers, and AI architects passionate about shipping extraordinary software.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
              <div className="card-editorial" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '1.25rem' }}>
                  Bridging Design Elegance & Core Engineering
                </h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                  Traditional agencies separate product design from engineering into isolated silos. At Enliven, design and technical architecture operate as one fluid discipline.
                </p>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '1.05rem', lineHeight: 1.7 }}>
                  From venture-backed YC startups to Fortune 500 enterprises, we help visionary leaders build category-defining software that commands attention.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div className="card-editorial" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, color: 'var(--purple-deep)', fontFamily: 'var(--font-editorial)' }}>5+</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body-muted)' }}>Years of Industry Leadership</div>
                </div>
                <div className="card-editorial" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#6d28d9', fontFamily: 'var(--font-editorial)' }}>30+</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body-muted)' }}>Design & Tech Awards</div>
                </div>
                <div className="card-editorial" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#7c3aed', fontFamily: 'var(--font-editorial)' }}>120M+</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body-muted)' }}>End Users Reached</div>
                </div>
                <div className="card-editorial" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2.8rem', fontWeight: 800, color: '#8b5cf6', fontFamily: 'var(--font-editorial)' }}>100%</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body-muted)' }}>On-Time Sprint Delivery</div>
                </div>
              </div>
            </div>

            {/* Tech Stack Cloud */}
            <div className="section-header" style={{ marginBottom: '3rem' }}>
              <span className="section-subtitle">OUR TECH STACK</span>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--purple-deep)' }}>Modern Stack Mastery</h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem' }}>
              {techStack.map((t, idx) => (
                <div key={idx} className="card-editorial" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--purple-deep)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-body-muted)' }}>{t.category}</div>
                  </div>
                  <span className="badge-lavender" style={{ fontSize: '0.75rem' }}>{t.level}</span>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
