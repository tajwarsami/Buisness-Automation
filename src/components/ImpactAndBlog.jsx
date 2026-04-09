'use client';
import { useEffect, useRef } from 'react';

function easeOutQuad(t) { return t * (2 - t); }

const STATS = [
  { target: 2500, suffix: '+', label: 'Active Clients', sub: 'Nepal, India & Japan' },
  { target: 15, suffix: '+', label: 'Years of Excellence', sub: 'Since 2010' },
  { target: 98, suffix: '%', label: 'Client Retention Rate', sub: 'Year over year' },
  { target: 100, suffix: '%', label: 'IRD Compliant', sub: 'First in Nepal' },
];

const BLOGS = [
  { cat: 'Company News', date: 'April 27, 2025', title: 'Dynamic Technosoft Celebrates 15 Years — Offering 15% Discount on All ERP Products', excerpt: 'Marking a milestone of 15 years in the IT industry, Dynamic Technosoft announces a special discount on all software products and shares its vision for international expansion.', bg: 'linear-gradient(135deg,#0057A8,#0096D6)' },
  { cat: 'Product Update', date: 'March 15, 2025', title: 'New Academic ERP Modules: Parent Portal & Online Examination Now Available', excerpt: 'Dynamic Academic ERP introduces powerful new modules designed to connect parents, teachers, and administrators on a single platform.', bg: 'linear-gradient(135deg,#16A34A,#22C55E)' },
  { cat: 'Industry Insight', date: 'February 10, 2025', title: "Why Nepal's Hospitals Are Switching to Integrated Hospital ERP Systems", excerpt: 'A look at how 100+ hospitals across Nepal have streamlined operations, reduced billing errors, and improved patient care with Dynamic Hospital ERP.', bg: 'linear-gradient(135deg,#DC2626,#EF4444)' },
];

export default function ImpactAndBlog() {
  const impactRef = useRef(null);
  const blogRef = useRef(null);
  const numRefs = useRef([]);
  const started = useRef([]);

  useEffect(() => {
    const countObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = numRefs.current.indexOf(entry.target);
        if (idx === -1 || started.current[idx]) return;
        started.current[idx] = true;
        const { target, suffix } = STATS[idx];
        let startTime = null;
        const step = (ts) => {
          if (!startTime) startTime = ts;
          const p = Math.min((ts - startTime) / 2000, 1);
          if (entry.target) entry.target.textContent = Math.floor(easeOutQuad(p) * target).toLocaleString() + suffix;
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countObs.unobserve(entry.target);
      });
    }, { threshold: 0.3 });
    numRefs.current.forEach(el => el && countObs.observe(el));

    const animObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); animObs.unobserve(entry.target); } });
    }, { threshold: 0.1 });
    impactRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => animObs.observe(el));
    blogRef.current?.querySelectorAll('.animate-on-scroll').forEach(el => animObs.observe(el));

    return () => { countObs.disconnect(); animObs.disconnect(); };
  }, []);

  return (
    <>
      {/* Impact Numbers */}
      <section id="impact" className="impact-section" ref={impactRef} aria-labelledby="impact-heading">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">IMPACT IN NUMBERS</span>
            <h2 className="section-h2" id="impact-heading">Our Work Speaks for Itself</h2>
          </div>
          <div className="impact-grid">
            {STATS.map((s, i) => (
              <div key={s.label} className="impact-card animate-on-scroll">
                <span className="impact-number" ref={el => numRefs.current[i] = el}>{s.target.toLocaleString()}{s.suffix}</span>
                <span className="impact-label">{s.label}</span>
                <span className="impact-sub">{s.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="blog-section" ref={blogRef} aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">LATEST NEWS</span>
            <h2 className="section-h2" id="blog-heading">Updates from Dynamic Technosoft</h2>
          </div>
          <div className="blog-grid">
            {BLOGS.map(b => (
              <article key={b.title} className="blog-card animate-on-scroll">
                <div className="blog-img" style={{background: b.bg}}>
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" aria-hidden="true">
                    <circle cx="40" cy="40" r="30" fill="rgba(255,255,255,0.1)"/>
                    <path d="M25 40h30M40 25v30" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                    <circle cx="40" cy="40" r="12" fill="rgba(255,255,255,0.15)"/>
                  </svg>
                  <span className="blog-cat">{b.cat}</span>
                </div>
                <div className="blog-content">
                  <p className="blog-date">{b.date}</p>
                  <h3 className="blog-title">{b.title}</h3>
                  <p className="blog-excerpt">{b.excerpt}</p>
                  <a href="#" className="blog-read" target="_blank" rel="noopener noreferrer">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
