import React from 'react';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

export default function ContactPage({ onNavigate }) {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="contact" onNavigate={onNavigate} onOpenContact={() => {}} />

      <main style={{ paddingTop: '8rem' }}>
        <Contact />
        <FAQ />
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
