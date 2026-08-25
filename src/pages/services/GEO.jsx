import React from 'react';
import Navbar from '../../components/Navbar';
import CTA from '../../components/CTA';
import Footer from '../../components/Footer';
import { Bot, Cpu, Sparkles, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

export default function GEO({ onNavigate }) {
  const handleOpenContact = () => {
    onNavigate('contact');
  };

  const capabilities = [
    'Perplexity & SearchGPT Knowledge Graph Indexing',
    'ChatGPT & Claude Brand Citation Optimization',
    'AI-Oriented Vector Embeddings & RAG Ingestion Specs',
    'Generative Search Schema & Entity Mapping',
    'Real-Time Synthetic Search Monitoring & Citation Tracking'
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-light)', color: 'var(--text-body)' }}>
      <Navbar activePage="services" onNavigate={onNavigate} onOpenContact={handleOpenContact} />

      <main style={{ paddingTop: '8.5rem' }}>
        {/* Service Hero */}
        <section className="section" style={{ background: 'radial-gradient(circle at 80% 20%, rgba(237, 233, 254, 0.6) 0%, rgba(255, 255, 255, 1) 60%)' }}>
          <div className="container">
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div className="badge-lavender" style={{ marginBottom: '1.5rem' }}>
                <Bot size={16} color="#6d28d9" />
                <span>Generative Engine Optimization (GEO)</span>
              </div>

              <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                Become the #1 Recommended Brand in <br />
                <span className="text-gradient-purple">AI & Conversational Search</span>
              </h1>

              <p className="section-description" style={{ marginBottom: '2.5rem' }}>
                As users migrate to ChatGPT, Perplexity, SearchGPT, and Gemini, Enliven optimizes your digital presence to ensure your company is recommended as the top solution.
              </p>

              <button onClick={handleOpenContact} className="btn btn-purple">
                <span>Optimize for AI Search</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Feature Cards Grid */}
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '5rem' }}>
              
              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Sparkles size={28} color="#6d28d9" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>AI Citation Engineering</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Structure data, press, and technical documentation so LLM web crawlers cite your company as the authoritative authority.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Cpu size={28} color="#7c3aed" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Entity Knowledge Graph</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Establish clear semantic relationships across Google Knowledge Graph and Wikidata to solidify your brand identity for AI models.
                </p>
              </div>

              <div className="card-editorial" style={{ padding: '2.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '18px', background: 'var(--bg-lavender)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <Layers size={28} color="#8b5cf6" />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Generative Search Strategy</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '0.975rem', lineHeight: 1.65 }}>
                  Future-proof your organic acquisition model against traditional search shifts with conversational AI visibility.
                </p>
              </div>

            </div>

            {/* Checklist */}
            <div className="card-purple-deep" style={{ padding: '3.5rem 3rem' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', marginBottom: '1.5rem', fontFamily: 'var(--font-editorial)' }}>GEO Capabilities Suite</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
                {capabilities.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', color: '#ffffff', fontSize: '1rem', fontWeight: 600 }}>
                    <CheckCircle2 size={20} color="#c4b5fd" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        <CTA onOpenContact={handleOpenContact} />
      </main>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
