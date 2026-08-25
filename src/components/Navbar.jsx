import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Sparkles, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';

export default function Navbar({ activePage = 'home', onNavigate, onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home', href: '#home', to: '/' },
    { name: 'Why Us', page: 'why-us', href: '#why-us', to: '/why-enliven-digital' },
    { name: 'Case Studies', page: 'case-studies', href: '#case-studies', subLinks: [
        { name: '10 Daily Clicks → 10,000+ Monthly Organic Traffic in 6 Months', href: '#case-nexus-ai', page: 'case-nexus-ai' },
        { name: '2,697 → 13,480 Monthly Organic Visitors (+400%)', href: '#case-lumina-pay', page: 'case-lumina-pay' },
        { name: '861,000 → 1,410,000 Monthly Visits (+65%) in 6 Months', href: '#case-apex-health', page: 'case-apex-health' },
        { name: 'From 0 → 6,000 Monthly Visitors in 7 Months', href: '#case-strata-studio', page: 'case-strata-studio' },
    ] },
    { name: 'Services', page: 'services', href: '#services', subLinks: [
        { name: 'SEO', href: '#service-seo', page: 'service-seo' },
        { name: 'Local SEO', href: '#service-local-seo', page: 'service-local-seo' },
        { name: 'GEO | AI SEO', href: '#service-geo-ai-seo', page: 'service-geo-ai-seo' },
        { name: 'Web Development', href: '#service-web-development', page: 'service-web-development' },
        { name: 'Rank Guarantee', href: '#service-rank-guarantee', page: 'service-rank-guarantee' },
    ] },
    { name: 'About', page: 'about', href: '#about' },
    { name: 'Contact', page: 'contact', href: '#contact' },
  ];

  const handleLinkClick = (e, link) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(link.page, link.href);
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: scrolled ? '0.85rem 0' : '1.35rem 0',
        background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--lavender-border)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(76, 29, 149, 0.08)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Brand Logo */}
        <button 
          onClick={(e) => handleLinkClick(e, { page: 'home', href: '#home' })} 
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        >
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #2e1065 0%, #6d28d9 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 20px -4px rgba(109, 40, 217, 0.4)'
          }}>
            <Sparkles size={20} color="#ffffff" />
          </div>
          <div>
            <span style={{ 
              fontSize: '1.45rem', 
              fontWeight: '800', 
              fontFamily: 'var(--font-editorial)',
              letterSpacing: '-0.03em',
              color: 'var(--purple-deep)'
            }}>
              ENLIVEN
            </span>
            <span style={{ 
              display: 'block', 
              fontSize: '0.65rem', 
              fontWeight: '700', 
              letterSpacing: '0.22em', 
              color: '#6d28d9',
              textTransform: 'uppercase',
              marginTop: '-4px'
            }}>
              STUDIO
            </span>
          </div>
        </button>

        {/* Desktop Nav Links with Dropdowns */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {navLinks.map((link, idx) => {
            const isCurrentActive = activePage === link.page;
            return (
              <div 
                key={idx} 
                style={{ position: 'relative' }}
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {link.name === 'Home' ? (
                  <NavLink
                    to="/"
                    end
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`nav-link-custom ${isCurrentActive ? 'active-link' : ''}`}
                  >
                    {link.name}
                  </NavLink>
                ) : link.name === 'Why Us' ? (
                  <NavLink
                    to="/why-enliven-digital"
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`nav-link-custom ${isCurrentActive ? 'active-link' : ''}`}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`nav-link-custom ${isCurrentActive ? 'active-link' : ''}`}
                  >
                    {link.name}
                  </a>
                )}

                {/* Dropdown Menu */}
                {link.subLinks && openDropdown === link.name && (
                  <div className="dropdown-menu-custom">
                    {link.subLinks.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={sub.href}
                        onClick={(e) => { 
                          setMobileMenuOpen(false); 
                          setOpenDropdown(null);
                          handleLinkClick(e, { page: sub.page || link.page, href: sub.href }); 
                        }}
                        className="dropdown-item-custom"
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Button & Status Pill */}
        <div style={{ display: 'none', alignItems: 'center', gap: '1.25rem' }} className="desktop-actions">
          <div className="badge-lavender" style={{ fontSize: '0.8rem' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7c3aed', display: 'inline-block', boxShadow: '0 0 8px #7c3aed' }}></span>
            <span>Accepting Q3 Projects</span>
          </div>

          <button 
            onClick={onOpenContact} 
            className="btn btn-purple"
            style={{ padding: '0.7rem 1.5rem', fontSize: '0.9rem' }}
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          style={{
            background: 'var(--bg-lavender)',
            border: '1px solid var(--lavender-border)',
            color: 'var(--purple-deep)',
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }

        .nav-link-custom {
          color: var(--text-body);
          font-weight: 700;
          font-size: 0.95rem;
          text-decoration: none;
          transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          padding: 0.4rem 0;
          display: inline-block;
        }

        .nav-link-custom:hover {
          color: #2e1065;
        }

        /* Premium animated hover underline */
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          border-radius: 2px;
          background: linear-gradient(90deg, #6d28d9, #c084fc);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link-custom:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        /* Active link overrides */
        .nav-link-custom.active-link {
          color: #2e1065;
        }

        .nav-link-custom.active-link::after {
          transform: scaleX(1) !important;
          background: linear-gradient(90deg, #3b0764, #7c3aed);
        }

        /* Dropdown Menu styling and animation */
        .dropdown-menu-custom {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.4rem;
          min-width: 180px;
          width: max-content;
          max-width: 520px;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(109, 40, 217, 0.08);
          border-radius: 12px;
          box-shadow: 0 20px 40px -15px rgba(46, 16, 101, 0.12), 0 0 0 1px rgba(109, 40, 217, 0.03);
          z-index: 200;
          padding: 0.6rem 0.5rem;
          transform-origin: top;
          animation: dropdownFadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Transparent bridge to prevent disappearing hover */
        .dropdown-menu-custom::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 0;
          right: 0;
          height: 10px;
          background: transparent;
        }

        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Individual dropdown item styling */
        .dropdown-item-custom {
          display: block;
          padding: 0.65rem 1rem 0.65rem 1.25rem;
          color: var(--text-body);
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          border-radius: 8px;
          position: relative;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        /* Left accent bar on hover */
        .dropdown-item-custom::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 50%;
          transform: translateY(-50%) scaleY(0);
          width: 3.5px;
          height: 18px;
          border-radius: 2px;
          background: linear-gradient(180deg, #7c3aed, #a78bfa);
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-item-custom:hover {
          background: #f5f3ff;
          color: #6d28d9;
          padding-left: 1.65rem;
        }

        .dropdown-item-custom:hover::before {
          transform: translateY(-50%) scaleY(1);
        }
      `}</style>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            maxHeight: 'calc(100vh - 80px)',
            overflowY: 'auto',
            background: '#ffffff',
            borderBottom: '1px solid var(--lavender-border)',
            padding: '1.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 20px 40px rgba(46, 16, 101, 0.12)'
          }}
        >
          {navLinks.map((link, idx) => {
            const isDropdownOpen = mobileOpenDropdown === link.name;
            return (
              <div key={idx} style={{ borderBottom: '1px solid rgba(237, 233, 254, 0.6)', paddingBottom: '0.6rem' }}>
                {link.subLinks ? (
                  <button
                    onClick={() => setMobileOpenDropdown(isDropdownOpen ? null : link.name)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'none',
                      border: 'none',
                      color: isDropdownOpen ? '#6d28d9' : 'var(--purple-deep)',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      padding: '0.4rem 0',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span>{link.name}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        color: '#7c3aed'
                      }}
                    />
                  </button>
                ) : link.name === 'Home' ? (
                  <NavLink
                    to="/"
                    end
                    onClick={(e) => handleLinkClick(e, link)}
                    style={{
                      color: 'var(--purple-deep)',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.4rem 0',
                    }}
                  >
                    {link.name}
                  </NavLink>
                ) : link.name === 'Why Us' ? (
                  <NavLink
                    to="/why-enliven-digital"
                    onClick={(e) => handleLinkClick(e, link)}
                    style={{
                      color: 'var(--purple-deep)',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.4rem 0',
                    }}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    style={{
                      color: 'var(--purple-deep)',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '0.4rem 0',
                    }}
                  >
                    {link.name}
                  </a>
                )}

                {/* SubLinks Collapsible Dropdown */}
                {link.subLinks && isDropdownOpen && (
                  <div style={{
                    paddingLeft: '0.75rem',
                    paddingTop: '0.4rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.45rem',
                    marginTop: '0.25rem',
                    borderLeft: '2.5px solid #c4b5fd',
                    marginLeft: '0.25rem'
                  }}>
                    {link.subLinks.map((sub, sidx) => (
                      <a
                        key={sidx}
                        href={sub.href}
                        onClick={(e) => handleLinkClick(e, { page: sub.page || link.page, href: sub.href })}
                        style={{
                          color: 'var(--text-body)',
                          fontSize: '0.9rem',
                          textDecoration: 'none',
                          fontWeight: 600,
                          padding: '0.35rem 0',
                          lineHeight: 1.45,
                          transition: 'color 0.2s ease'
                        }}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
            className="btn btn-purple"
            style={{ width: '100%', marginTop: '0.75rem' }}
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight size={18} />
          </button>
        </div>
      )}
    </header>
  );
}
