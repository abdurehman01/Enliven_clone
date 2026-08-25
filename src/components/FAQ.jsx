import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How fast can Enliven design & launch our digital product?',
      a: 'Typical core design & development sprints range from 4 to 8 weeks, depending on complexity. MVP rapid prototypes can be shipped in as little as 3 weeks via our dedicated engineering team.'
    },
    {
      q: 'What engagement & pricing models do you offer?',
      a: 'We offer fixed-scope project pricing for defined deliverables as well as monthly dedicated engineering team retainers for scaling startups that require ongoing feature development.'
    },
    {
      q: 'What technology stack does Enliven specialize in?',
      a: 'Our core stack centers on React 19, Next.js 15, TypeScript, Node.js, Python for AI/LLM systems, GraphQL/REST APIs, AWS/Vercel cloud infrastructure, and Figma design systems.'
    },
    {
      q: 'Do you offer ongoing post-launch support & SLA maintenance?',
      a: 'Yes. All our engagements include a 30-day post-launch warranty, with optional ongoing SLA maintenance retainers covering security updates, performance audits, and infrastructure monitoring.'
    },
    {
      q: 'Who owns the intellectual property and source code?',
      a: 'You do. Upon project completion and final milestone signoff, 100% of all intellectual property, source code repositories, design assets, and credentials are fully transferred to your company.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="section-title">
            Everything You Need to Know <br />
            <span className="text-gradient-purple">About Partnering with Us</span>
          </h2>
          <p className="section-description">
            Have a question not listed here? Reach out to our strategy team directly for custom consultations.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div style={{ maxWidth: '840px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="card-editorial"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderColor: isOpen ? '#c4b5fd' : 'var(--lavender-border)',
                  boxShadow: isOpen ? '0 15px 35px -10px rgba(109, 40, 217, 0.12)' : 'var(--shadow-subtle)'
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  style={{
                    width: '100%',
                    padding: '1.75rem 2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    background: isOpen ? '#faf8ff' : '#ffffff',
                    border: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--purple-deep)', fontFamily: 'var(--font-editorial)' }}>
                    {faq.q}
                  </span>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: isOpen ? '#3b0764' : '#f3e8ff',
                    color: isOpen ? '#ffffff' : '#6d28d9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{ padding: '0 2rem 1.75rem 2rem', color: 'var(--text-body-muted)', fontSize: '1rem', lineHeight: 1.7, background: '#faf8ff' }}>
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
