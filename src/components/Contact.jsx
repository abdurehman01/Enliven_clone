import React, { useState } from 'react';
import { Send, CheckCircle2, Sparkles, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: 'Full-Stack Web Engineering',
    budget: '$10k - $25k',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: '',
        email: '',
        service: 'Full-Stack Web Engineering',
        budget: '$10k - $25k',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="contact" className="section" style={{ background: '#faf8ff' }}>
      <div className="container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Contact Left Info */}
          <div>
            <div className="badge-lavender" style={{ marginBottom: '1.5rem' }}>
              <Sparkles size={16} color="#6d28d9" />
              <span>Initiate a Project</span>
            </div>

            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Let's Build Something <br />
              <span className="text-gradient-purple">Extraordinary Together</span>
            </h2>

            <p style={{ color: 'var(--text-body-muted)', fontSize: '1.1rem', lineHeight: 1.65, marginBottom: '2.5rem' }}>
              Whether you need a full platform redesign, high-velocity engineering sprint, or bespoke AI workflow integration, our lead partners are ready.
            </p>

            {/* Direct Contact Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              <div className="card-editorial" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Clock size={24} color="#6d28d9" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-body-muted)' }}>Response Guarantee</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--purple-deep)' }}>Within 24 Hours</div>
                </div>
              </div>

              <div className="card-editorial" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <ShieldCheck size={24} color="#7c3aed" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-body-muted)' }}>Confidentiality</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--purple-deep)' }}>NDAs Provided Immediately</div>
                </div>
              </div>

              <div className="card-editorial" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <MessageSquare size={24} color="#8b5cf6" />
                <div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-body-muted)' }}>Direct Inquiry</div>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--purple-deep)' }}>hello@enliven-studio.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Right */}
          <div className="card-editorial p-6 sm:p-10">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#f3e8ff',
                  border: '1px solid #c4b5fd',
                  color: '#6d28d9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem auto'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--purple-deep)', marginBottom: '0.75rem' }}>Consultation Request Received!</h3>
                <p style={{ color: 'var(--text-body-muted)', fontSize: '1rem', lineHeight: 1.6 }}>
                  Thank you for reaching out. One of our managing partners will review your proposal details and reply within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1px solid var(--lavender-border)',
                      color: 'var(--purple-deep)',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1px solid var(--lavender-border)',
                      color: 'var(--purple-deep)',
                      fontSize: '1rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>
                      Primary Capability
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1rem',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: '1px solid var(--lavender-border)',
                        color: 'var(--purple-deep)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option>Full-Stack Web Engineering</option>
                      <option>UI/UX Product Design</option>
                      <option>AI & Autonomous Systems</option>
                      <option>Cloud Infrastructure</option>
                      <option>Mobile App Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>
                      Project Budget
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.9rem 1rem',
                        borderRadius: '12px',
                        background: '#ffffff',
                        border: '1px solid var(--lavender-border)',
                        color: 'var(--purple-deep)',
                        fontSize: '0.9rem',
                        outline: 'none'
                      }}
                    >
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 700, color: 'var(--purple-deep)', marginBottom: '0.5rem' }}>
                    Project Goals & Timeline
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your objectives, target launch date, and key features..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.9rem 1.25rem',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1px solid var(--lavender-border)',
                      color: 'var(--purple-deep)',
                      fontSize: '1rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-purple" style={{ width: '100%', padding: '1rem' }}>
                  <span>Submit Proposal Request</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
