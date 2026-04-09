'use client';
import { useState, useEffect, useRef } from 'react';

const PRODUCTS = [
  {
    color: '#0057A8', category: 'Education', name: 'Academic ERP', irdBadge: true,
    desc: "Complete school and college management system designed for universities, campuses, boarding schools, and education boards. Nepal's most widely adopted academic management platform.",
    modules: ['Student Admission','Fee Collection','Attendance Management','Library Management','Online Examinations','Result Processing','Parent Portal','Report Cards'],
    count: '800+ Schools',
    icon: <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
  },
  {
    color: '#22C55E', category: 'Business', name: 'Accounting ERP', irdBadge: true,
    desc: 'IRD-certified accounting and billing solution for wholesale, retail, manufacturing, and distribution businesses. Fully compliant with Nepal government tax regulations.',
    modules: ['Tax Management','Payroll','Trade Management','Stock Control','Purchase & Sales','Dynamic Reports','VAT/TDS Filing','Multi-branch'],
    count: '1,200+ Businesses',
    icon: <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><line x1="6" y1="9" x2="18" y2="9"/><line x1="6" y1="13" x2="14" y2="13"/></svg>
  },
  {
    color: '#EF4444', category: 'Healthcare', name: 'Hospital ERP', irdBadge: false,
    desc: 'Integrated hospital information system for hospitals, clinics, and medical colleges. Streamlines patient flow, billing, and clinical workflows end-to-end.',
    modules: ['OPD/IPD Management','Patient Registration','Billing & Insurance','Pharmacy','Laboratory','Radiology','Nursing Station','Medical Records'],
    count: '100+ Hospitals',
    icon: <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/><path d="M12 8v8M8 12h8"/></svg>
  },
  {
    color: '#8B5CF6', category: 'Business', name: 'HRM & Payroll', irdBadge: false,
    desc: 'End-to-end human resource and payroll management for organizations of all sizes. Automate attendance, leave, and salary processing.',
    modules: ['Employee Management','Attendance Tracking','Leave Management','Salary Processing','Performance Appraisal','Recruitment Module'],
    count: '500+ Companies',
    icon: <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  },
  {
    color: '#F59E0B', category: 'Government', name: 'Association Management (AMS)', irdBadge: false,
    desc: 'Designed for cooperatives, NGOs, professional associations, and municipalities. Manage memberships, contributions, and governance digitally.',
    modules: ['Member Registration','Subscription Management','Meeting Management','Voting & Elections','Fund Management','Municipality Integration'],
    count: '200+ Associations',
    icon: <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><circle cx="19" cy="11" r="2"/><path d="M23 21v-2a4 4 0 00-2-3.58"/></svg>
  },
  {
    color: '#0096D6', category: 'Business', name: 'Business ERP', irdBadge: false,
    desc: 'Comprehensive enterprise resource planning for trading companies, manufacturers, and service businesses. One unified system for all operations.',
    modules: ['Inventory Management','Purchase & Sales','CRM','Project Management','Manufacturing Module','Multi-location Support','Custom Reporting'],
    count: '400+ Enterprises',
    icon: <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
  },
];

const TABS = ['All Products','Education','Healthcare','Business','Government'];

export default function Products() {
  const [active, setActive] = useState('All Products');
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = active === 'All Products' ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 112, behavior: 'smooth' });
  };

  return (
    <section id="products" className="products-section" ref={sectionRef} aria-labelledby="products-heading">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">OUR PRODUCTS</span>
          <h2 className="section-h2" id="products-heading">Comprehensive Software Solutions for Every Industry</h2>
          <p className="section-sub">Industry-specific ERP platforms built to optimize your operations, reduce costs, and drive digital transformation.</p>
        </div>

        {/* Tabs */}
        <div className="tab-bar" role="tablist" aria-label="Filter products">
          {TABS.map(t => (
            <button
              key={t} className={`tab-btn${active === t ? ' active' : ''}`}
              onClick={() => setActive(t)} role="tab" aria-selected={active === t}
            >{t}</button>
          ))}
        </div>

        {/* Grid */}
        <div className="product-grid">
          {filtered.map((p, i) => (
            <article key={p.name} className="product-card animate-on-scroll" data-category={p.category}
              style={{animationDelay:`${i*0.05}s`}}>
              <div className="product-color-bar" style={{background: p.color}}></div>
              <div className="product-icon-zone">
                <div className="product-icon-circle" style={{background:`linear-gradient(135deg,${p.color},${p.color}cc)`}}>
                  {p.icon}
                </div>
              </div>
              <span className="product-category">{p.category}</span>
              <div className="product-content">
                <h3 className="product-name">
                  {p.name}
                  {p.irdBadge && <span className="ird-badge">IRD Certified ✓</span>}
                </h3>
                <p className="product-desc">{p.desc}</p>
                <div className="product-modules">
                  {p.modules.map(m => <span key={m} className="product-module">{m}</span>)}
                </div>
                <div className="product-bottom">
                  <span className="product-count">{p.count}</span>
                  <a href="#contact" className="product-learn" onClick={e=>{e.preventDefault();scrollToContact();}}>Learn More →</a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="product-cta animate-on-scroll">
          <div>
            <h3>Need a custom ERP solution?</h3>
            <p>Talk to our experts today — we build solutions tailored to your unique business needs.</p>
          </div>
          <div className="product-cta-right">
            <button className="btn-primary" onClick={scrollToContact}>Request Free Demo</button>
            <span className="product-cta-small">No commitment required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
