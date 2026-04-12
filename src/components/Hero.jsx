'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    tag: 'Nepal\'s #1 ERP Provider',
    title: 'Automate Your Business\nWith Smart Software',
    sub: 'Trusted by 2,500+ organizations — from schools and hospitals to corporates and associations across Nepal.',
    cta1: { label: 'Explore Products', href: '/products' },
    cta2: { label: 'Contact Us', href: '/contact' },
  },
  {
    tag: 'IRD Certified & Proven',
    title: 'Academic ERP Built\nFor Every Institution',
    sub: 'Dynamic Academic ERP powers 500+ institutions with exams, fees, HR, communication and administration in one platform.',
    cta1: { label: 'Learn More', href: '/products/dynamic-academic-erp' },
    cta2: { label: 'Get a Demo', href: '/contact' },
  },
  {
    tag: '15+ Years of Excellence',
    title: 'Complete Digital\nSolutions For Nepal',
    sub: 'From ERP systems to mobile apps, web platforms, and SMS services — we build and support technology that works.',
    cta1: { label: 'Our Services', href: '/services' },
    cta2: { label: 'About Us', href: '/about/our-company' },
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);

  const goTo = useCallback((idx) => {
    setPrev(active);
    setActive(idx);
  }, [active]);

  const next = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);
  const back = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length), [active, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  const slide = SLIDES[active];

  return (
    <section id="hero" className="dn-hero" aria-label="Hero banner">
      <div className="dn-hero-shapes" aria-hidden="true">
        <span className="dn-shape dn-shape-1" />
        <span className="dn-shape dn-shape-2" />
        <span className="dn-shape dn-shape-3" />
      </div>

      <div className="dn-hero-inner container">
        <div className="dn-hero-text" key={active}>
          <span className="dn-hero-tag">{slide.tag}</span>
          <h1 className="dn-hero-h1">
            {slide.title.split('\n').map((line, i) => (
              <span key={i}>{line}{i < slide.title.split('\n').length - 1 && <br />}</span>
            ))}
          </h1>
          <p className="dn-hero-sub">{slide.sub}</p>
          <div className="dn-hero-btns">
            <Link href={slide.cta1.href} className="dn-btn-primary">{slide.cta1.label}</Link>
            <Link href={slide.cta2.href} className="dn-btn-ghost">{slide.cta2.label}</Link>
          </div>
        </div>

        <div className="dn-hero-visual" aria-hidden="true">
          <div className="dn-hero-card dn-hc-1">
            <div className="dn-hc-icon">📊</div>
            <div className="dn-hc-label">Dashboard Analytics</div>
            <div className="dn-hc-bar"><span style={{width:'72%'}} /></div>
            <div className="dn-hc-bar"><span style={{width:'55%'}} /></div>
            <div className="dn-hc-bar"><span style={{width:'88%'}} /></div>
          </div>
          <div className="dn-hero-card dn-hc-2">
            <div className="dn-hc-icon">✅</div>
            <div className="dn-hc-label">IRD Certified ERP</div>
            <div className="dn-hc-stat">2,500+</div>
            <div className="dn-hc-sub">Happy Clients</div>
          </div>
          <div className="dn-hero-card dn-hc-3">
            <div className="dn-hc-icon">🚀</div>
            <div className="dn-hc-label">Go Live Fast</div>
            <div className="dn-hc-sub">Full onboarding support</div>
          </div>
        </div>
      </div>

      <div className="dn-hero-controls">
        <button className="dn-hero-arrow" onClick={back} aria-label="Previous slide">&#8592;</button>
        <div className="dn-hero-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dn-hero-dot${i === active ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button className="dn-hero-arrow" onClick={next} aria-label="Next slide">&#8594;</button>
      </div>
    </section>
  );
}
