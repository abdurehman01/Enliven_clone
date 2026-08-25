import React from 'react';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function ServicesPage({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="services" onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      <main style={{ paddingTop: '6rem' }}>
        <Services onSelectService={() => handleOpenContact()} />
        <CTA onOpenContact={handleOpenContact} />
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
