'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LogoIcon = () => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" aria-hidden="true">
    <rect width="38" height="38" rx="8" fill="#0057A8"/>
    <path d="M10 8h8c6.627 0 12 5.373 12 12s-5.373 12-12 12h-8V8z" fill="white" opacity="0.95"/>
    <path d="M10 14h6c3.314 0 6 2.686 6 6s-2.686 6-6 6h-6V14z" fill="#0057A8"/>
    <circle cx="16" cy="20" r="2" fill="white"/>
    <path d="M24 12L28 12L28 28L24 28" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="28" cy="12" r="1.5" fill="#E8431A"/>
    <circle cx="28" cy="20" r="1.5" fill="#E8431A"/>
    <circle cx="28" cy="28" r="1.5" fill="#E8431A"/>
  </svg>
);

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products', hasDropdown: true },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/clients', label: 'Our Clients' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact Us' },
];

const PRODUCT_LINKS = [
  { label: 'Academic ERP', sub: 'For schools, colleges & universities', href: '/products/academic-erp' },
  { label: 'Accounting ERP', sub: 'IRD-certified accounting solution', href: '/products/accounting-erp' },
  { label: 'Hospital ERP', sub: 'Complete healthcare management', href: '/products/hospital-erp' },
  { label: 'HRM & Payroll', sub: 'Human resource management system', href: '/products/hrm-payroll' },
  { label: 'Business ERP', sub: 'For wholesale, retail & manufacturing', href: '/products/business-erp' },
  { label: 'Association (AMS)', sub: 'For NGOs, cooperatives & associations', href: '/products/association-management' },
];

const SERVICE_LINKS = [
  { label: 'Software Development', sub: 'Custom enterprise applications', href: '/services#software' },
  { label: 'Web Development', sub: 'Corporate & e-commerce websites', href: '/services#web' },
  { label: 'Mobile App Development', sub: 'iOS & Android apps', href: '/services#mobile' },
  { label: 'Hardware & Networking', sub: 'IT infrastructure setup', href: '/services#hardware' },
  { label: 'Computer Training', sub: 'Professional IT training programs', href: '/services#training' },
  { label: 'IT Consultancy', sub: 'Strategic technology advisory', href: '/services#consultancy' },
];

export default function Navbar({ barClosed }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAcc, setOpenAcc] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Close mobile nav on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navClass = ['navbar', barClosed ? 'bar-closed' : '', scrolled ? 'scrolled' : ''].filter(Boolean).join(' ');
  const menuClass = ['mobile-menu', barClosed ? 'bar-closed' : '', mobileOpen ? 'open' : ''].filter(Boolean).join(' ');

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <header className={navClass} id="navbar">
        <nav className="nav-inner" aria-label="Main navigation">
          {/* Logo */}
          <Link href="/" className="nav-logo" aria-label="Dynamic Technosoft - Home">
            <LogoIcon />
            <div className="nav-logo-text">
              <span className="nav-logo-name">Dynamic Technosoft</span>
              <span className="nav-logo-sub">Pvt. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="nav-links" role="menubar">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

              if (link.label === 'Products') return (
                <li key="products" className="has-dropdown" role="none">
                  <Link href="/products" className={`nav-link${isActive ? ' active' : ''}`} role="menuitem">Products ▾</Link>
                  <div className="dropdown" role="menu">
                    {PRODUCT_LINKS.map(p => (
                      <Link key={p.label} href={p.href} className="dropdown-item" role="menuitem">
                        <div className="dropdown-icon">
                          <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
                        </div>
                        <div><span className="dropdown-title">{p.label}</span><span className="dropdown-sub">{p.sub}</span></div>
                      </Link>
                    ))}
                  </div>
                </li>
              );

              if (link.label === 'Services') return (
                <li key="services" className="has-dropdown" role="none">
                  <Link href="/services" className={`nav-link${isActive ? ' active' : ''}`} role="menuitem">Services ▾</Link>
                  <div className="dropdown single-col" role="menu">
                    {SERVICE_LINKS.map(s => (
                      <Link key={s.label} href={s.href} className="dropdown-item" role="menuitem">
                        <div className="dropdown-icon">
                          <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                        </div>
                        <div><span className="dropdown-title">{s.label}</span><span className="dropdown-sub">{s.sub}</span></div>
                      </Link>
                    ))}
                  </div>
                </li>
              );

              return (
                <li key={link.href} role="none">
                  <Link href={link.href} className={`nav-link${isActive ? ' active' : ''}`} role="menuitem">
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right */}
          <div className="nav-right">
            <span className="nav-phone">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9.82 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              +977-9851163652
            </span>
            <span className="nav-divider">|</span>
            <Link href="/contact" className="btn-primary" style={{padding:'10px 22px', fontSize:'0.82rem'}}>Get a Demo</Link>
          </div>

          {/* Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(p => !p)} aria-label="Toggle menu" aria-expanded={mobileOpen}>
            <span className="bar" style={mobileOpen ? {transform:'rotate(45deg) translate(5px,5px)'} : {}}></span>
            <span className="bar" style={mobileOpen ? {opacity:0} : {}}></span>
            <span className="bar" style={mobileOpen ? {transform:'rotate(-45deg) translate(5px,-5px)'} : {}}></span>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={menuClass} id="mobile-menu">
        <div className="mobile-menu-inner">
          {[{href:'/',label:'Home'},{href:'/about',label:'About Us'},{href:'/clients',label:'Our Clients'},{href:'/careers',label:'Careers'},{href:'/blog',label:'Blog'},{href:'/contact',label:'Contact Us'}].map(item => (
            <div key={item.href} className="mobile-nav-item">
              <div className="mobile-nav-link">
                <Link href={item.href}>{item.label}</Link>
              </div>
            </div>
          ))}
          <div className="mobile-nav-item">
            <div className="mobile-nav-link" onClick={() => setOpenAcc(p => p === 'products' ? null : 'products')}>
              <span>Products</span><span className={`mobile-acc-icon${openAcc==='products'?' open':''}`}>▼</span>
            </div>
            <div className={`mobile-sub-menu${openAcc==='products'?' open':''}`}>
              {PRODUCT_LINKS.map(p => <Link key={p.label} href={p.href} className="mobile-sub-item" style={{display:'flex'}}>📦 {p.label}</Link>)}
            </div>
          </div>
          <div className="mobile-nav-item">
            <div className="mobile-nav-link" onClick={() => setOpenAcc(p => p === 'services' ? null : 'services')}>
              <span>Services</span><span className={`mobile-acc-icon${openAcc==='services'?' open':''}`}>▼</span>
            </div>
            <div className={`mobile-sub-menu${openAcc==='services'?' open':''}`}>
              {SERVICE_LINKS.map(s => <Link key={s.label} href={s.href} className="mobile-sub-item" style={{display:'flex'}}>⚙️ {s.label}</Link>)}
            </div>
          </div>
          <div className="mobile-cta">
            <Link href="/contact" className="btn-primary" style={{width:'100%',justifyContent:'center',padding:'16px',display:'flex'}}>Get a Demo</Link>
          </div>
        </div>
      </div>
    </>
  );
}
