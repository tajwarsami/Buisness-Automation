'use client';
import { useEffect, useRef } from 'react';

const INDUSTRIES = [
  { name: 'Education', count: '800+ Institutions', color: '#0057A8', icon: <svg width="32" height="32" fill="none" stroke="#0057A8" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
  { name: 'Healthcare', count: '100+ Hospitals', color: '#EF4444', icon: <svg width="32" height="32" fill="none" stroke="#EF4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/><path d="M12 8v8M8 12h8"/></svg> },
  { name: 'Business', count: '1,200+ Companies', color: '#22C55E', icon: <svg width="32" height="32" fill="none" stroke="#22C55E" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg> },
  { name: 'Government', count: 'Municipal Systems', color: '#F59E0B', icon: <svg width="32" height="32" fill="none" stroke="#F59E0B" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { name: 'NGOs & Coops', count: '200+ Organizations', color: '#8B5CF6', icon: <svg width="32" height="32" fill="none" stroke="#8B5CF6" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><circle cx="19" cy="11" r="2"/><path d="M23 21v-2a4 4 0 00-2-3.58"/></svg> },
  { name: 'Manufacturing', count: 'Production ERP', color: '#0096D6', icon: <svg width="32" height="32" fill="none" stroke="#0096D6" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><line x1="6" y1="7" x2="6" y2="3"/><line x1="18" y1="7" x2="18" y2="3"/><line x1="12" y1="7" x2="12" y2="3"/><rect x="6" y="11" width="4" height="4" rx="1"/><rect x="14" y="11" width="4" height="4" rx="1"/></svg> },
];

const LOGOS_1 = ['Ministry of Education','Bir Hospital','Tribhuvan University','Kathmandu University','Nepal Police','City Hall KTM','Pokhara University','FNCCI','NRB','Balaju School','Grande Hospital','Nepal Airlines'];
const LOGOS_2 = ['Star Trading Co.','City Hospital','Model Secondary School','Sunrise Cooperative','Nepal Telecom','Himalaya Bank','Summit Hospital','ABC College','Tech Solutions Pvt','Everest Academy','KMC Hospital','Sagarmatha Trading'];

const TESTIMONIALS = [
  { quote: "Dynamic Technosoft's Academic ERP transformed how we manage our institution. Student admissions, fee collection, attendance — everything in one system. The after-sale support is exceptional.", name: 'Rajesh Sharma', title: 'Principal, Model Secondary School, Kathmandu', initial: 'R', bg: 'linear-gradient(135deg,#0057A8,#0096D6)' },
  { quote: "We've been using Dynamic's Accounting ERP for 6 years. It's IRD-compliant, reliable, and the team responds to any issue within hours. Best investment we made for our business.", name: 'Sita Pokharel', title: 'Finance Manager, Star Trading Co., Butwal', initial: 'S', bg: 'linear-gradient(135deg,#22C55E,#16A34A)' },
  { quote: "As a hospital administrator, I can say the Hospital ERP has significantly improved patient management and billing. The implementation team was professional and thorough.", name: 'Dr. Anish Giri', title: 'Administrator, City Hospital, Birgunj', initial: 'A', bg: 'linear-gradient(135deg,#EF4444,#DC2626)' },
];

export default function Clients() {
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
    <>
      {/* Industries */}
      <section id="industries" className="industries-section" ref={ref} aria-labelledby="industries-heading">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">INDUSTRIES WE SERVE</span>
            <h2 className="section-h2" id="industries-heading">Powering Digital Transformation Across Sectors</h2>
          </div>
          <div className="industries-row">
            {INDUSTRIES.map(ind => (
              <div key={ind.name} className="industry-card animate-on-scroll">
                <div className="industry-icon">{ind.icon}</div>
                <div className="industry-name">{ind.name}</div>
                <div className="industry-count">{ind.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="clients-section" aria-labelledby="clients-heading">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">OUR CLIENTS</span>
            <h2 className="section-h2" id="clients-heading">Trusted by 2,500+ Organizations Across Nepal</h2>
            <p className="section-sub">From schools and hospitals to businesses and municipalities — organizations across Nepal rely on Dynamic Technosoft&apos;s solutions.</p>
          </div>
          {/* Logo rows */}
          <div className="marquee-wrapper">
            <div className="marquee-track ltr" aria-hidden="true">
              {[...LOGOS_1,...LOGOS_1].map((l, i) => <div key={i} className="logo-pill">{l}</div>)}
            </div>
          </div>
          <div className="marquee-wrapper">
            <div className="marquee-track rtl" aria-hidden="true">
              {[...LOGOS_2,...LOGOS_2].map((l, i) => <div key={i} className="logo-pill">{l}</div>)}
            </div>
          </div>
          {/* Testimonials */}
          <div className="testimonials-grid">
            {TESTIMONIALS.map(t => (
              <div key={t.name} className="testimonial-card animate-on-scroll">
                <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="author-av" style={{background: t.bg}}>{t.initial}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-title">{t.title}</div>
                    <span className="verified-badge">✓ Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
