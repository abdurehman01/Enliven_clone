import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ContactPage from './pages/ContactPage';
import SEO from './pages/services/SEO';
import LocalSEO from './pages/services/LocalSEO';
import GEO from './pages/services/GEO';
import WebDevelopment from './pages/services/WebDevelopment';
import RankGuarantee from './pages/services/RankGuarantee';
import NexusAI from './pages/case-studies/NexusAI';
import LuminaPay from './pages/case-studies/LuminaPay';
import ApexHealth from './pages/case-studies/ApexHealth';
import StrataStudio from './pages/case-studies/StrataStudio';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleNavigate = (page, targetHash) => {
    setCurrentPage(page);

    if (targetHash && targetHash.startsWith('#')) {
      setTimeout(() => {
        const el = document.getElementById(targetHash.replace('#', ''));
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <>
      {(currentPage === 'home' || currentPage === 'why-us') && <Home onNavigate={handleNavigate} activePage={currentPage} />}
      {currentPage === 'about' && <About onNavigate={handleNavigate} />}
      {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
      {currentPage === 'case-studies' && <CaseStudiesPage onNavigate={handleNavigate} />}
      {currentPage === 'contact' && <ContactPage onNavigate={handleNavigate} />}
      {currentPage === 'service-seo' && <SEO onNavigate={handleNavigate} />}
      {currentPage === 'service-local-seo' && <LocalSEO onNavigate={handleNavigate} />}
      {currentPage === 'service-geo-ai-seo' && <GEO onNavigate={handleNavigate} />}
      {currentPage === 'service-web-development' && <WebDevelopment onNavigate={handleNavigate} />}
      {currentPage === 'service-rank-guarantee' && <RankGuarantee onNavigate={handleNavigate} />}
      {currentPage === 'case-nexus-ai' && <NexusAI onNavigate={handleNavigate} />}
      {currentPage === 'case-lumina-pay' && <LuminaPay onNavigate={handleNavigate} />}
      {currentPage === 'case-apex-health' && <ApexHealth onNavigate={handleNavigate} />}
      {currentPage === 'case-strata-studio' && <StrataStudio onNavigate={handleNavigate} />}
    </>
  );
}

export default App;
