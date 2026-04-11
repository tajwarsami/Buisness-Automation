'use client';

import { useEffect, useRef } from 'react';

const clientGroups = [
  ['Model School', 'Bir Hospital', 'Hulas', 'Mahindra', 'Royal Enfield', 'Godawari'],
  ['Dabur Nepal', 'City College', 'Regional Clinic', 'Trade Association', 'Sunrise Group', 'Municipal Office'],
];

const testimonials = [
  {
    quote: 'Their customer enthusiasm for innovation and dedication to quality made them a dependable long-term software partner for our institution.',
    name: 'Institution Director',
    title: 'Academic Client',
  },
  {
    quote: 'The team stayed responsive through implementation and support, and the system improved coordination across our departments.',
    name: 'Administrative Lead',
    title: 'Healthcare Client',
  },
  {
    quote: 'What stood out most was the combination of product capability and service follow-up after deployment.',
    name: 'Operations Manager',
    title: 'Business Client',
  },
];

export default function Clients() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll('.animate-on-scroll').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" className="clients-section clients-section-refined" ref={ref} aria-labelledby="clients-heading">
      <div className="container">
        <div className="clients-hero-refined animate-on-scroll">
          <div className="clients-copy-refined">
            <span className="section-label">Our Clients</span>
            <h2 className="section-h2" id="clients-heading">Meet our clients</h2>
            <p className="section-sub clients-sub-refined">
              Our client&apos;s enthusiasm for innovation and dedication to quality are at the core of their purpose.
              Their commitment to customer satisfaction makes them an example of dependable growth and service excellence.
            </p>
          </div>
          <div className="clients-visual-refined" aria-hidden="true">
            <div className="clients-visual-cloud" />
            <div className="clients-visual-card">
              <div className="clients-visual-row clients-visual-row-lg" />
              <div className="clients-visual-row clients-visual-row-md" />
              <div className="clients-visual-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="clients-logo-area animate-on-scroll">
          {clientGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="clients-logo-row">
              {group.map((client) => (
                <div key={client} className="clients-logo-pill">{client}</div>
              ))}
            </div>
          ))}
        </div>

        <div className="testimonials-grid testimonials-grid-refined">
          {testimonials.map((item) => (
            <article key={item.name} className="testimonial-card testimonial-card-refined animate-on-scroll">
              <p className="testimonial-quote">“{item.quote}”</p>
              <div className="testimonial-author">
                <div className="author-av author-av-refined">{item.name.slice(0, 1)}</div>
                <div>
                  <div className="author-name">{item.name}</div>
                  <div className="author-title">{item.title}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
