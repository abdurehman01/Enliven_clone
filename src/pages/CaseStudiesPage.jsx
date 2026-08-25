import React from 'react';
import Navbar from '../components/Navbar';
import CaseStudies from '../components/CaseStudies';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function CaseStudiesPage({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="case-studies" onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      <main style={{ paddingTop: '6rem' }}>
        <CaseStudies onSelectProject={() => handleOpenContact()} />
        <CTA onOpenContact={handleOpenContact} />
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
