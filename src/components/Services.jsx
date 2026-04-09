'use client';
import { useEffect, useRef } from 'react';

const SERVICES = [
  { name: 'Software Development', desc: 'Custom enterprise software built with modern technology stacks tailored to your specific business workflows.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg> },
  { name: 'Web Development', desc: 'Professional corporate websites, e-commerce portals, and web applications using latest frontend and backend technologies.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg> },
  { name: 'Mobile App Development', desc: 'Native and cross-platform iOS & Android applications with intuitive UX and seamless backend integration.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18" strokeLinecap="round" strokeWidth="3"/></svg> },
  { name: 'Hardware & Networking', desc: 'Complete IT infrastructure setup including server installation, networking, CCTV, and hardware procurement.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6" strokeLinecap="round" strokeWidth="3"/><line x1="6" y1="18" x2="6.01" y2="18" strokeLinecap="round" strokeWidth="3"/></svg> },
  { name: 'Computer Training', desc: 'Professional IT training programs for individuals and corporate teams — from basics to advanced software certifications.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><path d="M7 9h10M7 13h6"/></svg> },
  { name: 'IT Consultancy', desc: 'Strategic technology advisory to help organizations plan and implement their digital transformation roadmap.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
  { name: 'Digital Governance', desc: "e-Governance solutions and municipal management systems supporting Nepal's local government digitalization initiative.", icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: 'Cloud Solutions', desc: 'Cloud hosting, migration, and managed services to help your business scale securely and efficiently.', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3"/></svg> },
];

export default function Services() {
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
    <section id="services" className="services-section" ref={ref} aria-labelledby="services-heading">
      <div className="container">
        <div className="section-header animate-on-scroll">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-h2" id="services-heading">Full-Spectrum IT Solutions</h2>
          <p className="section-sub">From software development to hardware setup — everything you need under one roof.</p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={s.name} className="service-card animate-on-scroll">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-name">{s.name}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href="#contact" className="service-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
