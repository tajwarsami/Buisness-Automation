'use client';
import { useEffect, useRef } from 'react';

const PILLARS = [
  { title: 'IRD Certified', desc: "Nepal's first and only Inland Revenue Department-certified ERP provider. Fully compliant with government tax and billing regulations.", icon: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg> },
  { title: 'Proven Expertise', desc: '15+ years delivering enterprise-grade solutions across education, healthcare, business, and government sectors in Nepal and beyond.', icon: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg> },
  { title: 'One-Stop Shop', desc: 'From consulting to development, implementation, training, and 24/7 after-sale support — everything through a single trusted partner.', icon: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> },
  { title: 'National Coverage', desc: '50+ authorized dealers and service centers across Nepal, ensuring rapid implementation and on-site support wherever you are.', icon: <svg width="28" height="28" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
];

const WHY_STATS = [
  { num: '200+', label: 'Technical', sub: 'Experts' },
  { num: '50+', label: 'Authorized', sub: 'Dealers' },
  { num: '15+', label: 'Years of', sub: 'Service' },
  { num: '3', label: 'Countries', sub: 'Served' },
];

export default function WhyUs() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.animate-on-scroll').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-us" className="whyus-section" ref={ref} aria-labelledby="whyus-heading">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">WHY CHOOSE US</span>
          <h2 className="section-h2" id="whyus-heading">What Sets Dynamic Technosoft Apart</h2>
          <p className="section-sub">Built on 15 years of trust, innovation, and relentless commitment to client success.</p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map(p => (
            <div key={p.title} className="pillar-card animate-on-scroll">
              <div className="pillar-icon">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="why-stats">
          {WHY_STATS.map(s => (
            <div key={s.label} className="why-stat animate-on-scroll">
              <span className="why-stat-num">{s.num}</span>
              <span className="why-stat-label">{s.label}</span>
              <span className="why-stat-sub">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
