'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

const features = [
  'First IRD-certified ERP provider in Nepal',
  '15+ years of proven industry experience',
  '2,500+ satisfied clients across multiple sectors',
  'Education, healthcare, finance, HR, and communication solutions',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elements?.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section-header left animate-on-scroll">
              <span className="section-label">About Automate IT Limited</span>
              <h2 className="section-h2" id="about-heading">A dependable technology company shaped by service and execution</h2>
            </div>
            <p className="about-lead animate-on-scroll">
              Automate IT Limited delivers ERP software, business applications, web services, and implementation support for organizations that need practical digital systems.
            </p>
            <p className="about-body animate-on-scroll">
              Our approach combines business understanding, software capability, and long-term support so clients can move from idea to dependable daily operation with one team.
            </p>
            <div className="feature-list">
              {features.map((feature) => (
                <div key={feature} className="feature-item animate-on-scroll">
                  <div className="feature-icon">
                    <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="feature-text">{feature}</span>
                </div>
              ))}
            </div>
            <div className="about-ctas animate-on-scroll">
              <Link href="/about/our-company" className="btn-secondary">Read More →</Link>
              <Link href="/contact" className="btn-outline-blue">Contact Us</Link>
            </div>
          </div>

          <div className="about-visual animate-on-scroll" aria-hidden="true">
            <div className="clients-visual-refined">
              <div className="clients-visual-cloud" />
              <div className="clients-visual-card">
                <div className="clients-visual-row clients-visual-row-lg" />
                <div className="clients-visual-row clients-visual-row-md" />
                <div className="clients-visual-grid">
                  <span /><span /><span /><span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
