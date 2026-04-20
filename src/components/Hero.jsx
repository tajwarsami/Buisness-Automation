'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const SLIDES = [
  {
    step: '1/3',
    title: 'Academic ERP',
    sub: 'A complete academic platform for admissions, fees, attendance, exams, communication, and everyday institutional operations.',
    cta1: { label: 'Read More', href: '/products/academic-erp' },
    cta2: { label: 'Contact Us', href: '/contact' },
    highlights: ['Admissions and registration', 'Exam and result workflows', 'Student and parent communication'],
    accent: 'linear-gradient(90deg, #38bdf8, #818cf8)',
  },
  {
    step: '2/3',
    title: 'Accounting Solution',
    sub: 'Bring ledgers, billing, reporting, reconciliation, and financial visibility into one reliable accounting workflow.',
    cta1: { label: 'Read More', href: '/products/accounting-solution' },
    cta2: { label: 'Contact Us', href: '/contact' },
    highlights: ['VAT and ledger management', 'Real-time financial reporting', 'Audit-friendly transaction history'],
    accent: 'linear-gradient(90deg, #34d399, #10b981)',
  },
  {
    step: '3/3',
    title: 'HR & Payroll Management',
    sub: 'Manage employee records, attendance, leave, payroll, and approvals with a smoother HR operation from one dashboard.',
    cta1: { label: 'Read More', href: '/products/hr-and-payroll-management' },
    cta2: { label: 'Contact Us', href: '/contact' },
    highlights: ['Attendance and leave tracking', 'Payroll and compliance workflow', 'Employee lifecycle records'],
    accent: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, dragging: false });

  const goTo = useCallback((idx) => {
    setActive(idx);
  }, []);

  const next = useCallback(() => goTo((active + 1) % SLIDES.length), [active, goTo]);
  const back = useCallback(() => goTo((active - 1 + SLIDES.length) % SLIDES.length), [active, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const startDrag = useCallback((clientX) => {
    dragState.current = { startX: clientX, dragging: true };
    setIsDragging(true);
  }, []);

  const endDrag = useCallback((clientX) => {
    if (!dragState.current.dragging) return;
    const delta = clientX - dragState.current.startX;
    dragState.current.dragging = false;
    setIsDragging(false);

    if (Math.abs(delta) < 50) return;
    if (delta < 0) next();
    if (delta > 0) back();
  }, [back, next]);

  const slide = SLIDES[active];

  return (
    <section id="hero" className="hero-blue-section" aria-label="Hero banner">
      <div className="hero-blue-bg-orb hero-blue-orb-a" aria-hidden="true" />
      <div className="hero-blue-bg-orb hero-blue-orb-b" aria-hidden="true" />
      <div className="hero-blue-grid-overlay" aria-hidden="true" />

      <div
        className="hero-blue-container container"
        style={{ cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none' }}
        onTouchStart={(event) => startDrag(event.touches[0].clientX)}
        onTouchEnd={(event) => endDrag(event.changedTouches[0].clientX)}
        onMouseDown={(event) => startDrag(event.clientX)}
        onMouseUp={(event) => endDrag(event.clientX)}
        onMouseLeave={(event) => endDrag(event.clientX)}
      >
        <div className="hero-blue-left" key={`left-${active}`}>
          <h1 className="hero-blue-h1">{slide.title}</h1>
          <p className="hero-blue-sub">{slide.sub}</p>
          
          <div className="hero-blue-trust">
            {slide.highlights.map((item) => (
              <span key={item} className="hero-blue-trust-item">
                <span className="hero-blue-trust-icon">✓</span> {item}
              </span>
            ))}
          </div>

          <div className="hero-blue-ctas">
            <Link href={slide.cta1.href} className="hero-blue-btn-primary">{slide.cta1.label}</Link>
            <Link href={slide.cta2.href} className="hero-blue-btn-ghost">{slide.cta2.label}</Link>
          </div>
        </div>

        <div className="hero-blue-right">
          <div className="hero-blue-card" key={`right-${active}`}>
            <div className="hero-blue-card-accent" style={{ background: slide.accent }} />
            <div className="hero-blue-card-label">
              <span>Featured Module</span>
              <span className="hero-blue-card-counter">{slide.step}</span>
            </div>
            
            <div className="hero-blue-card-meta">
              <div className="hero-blue-card-num">{slide.title}</div>
              <span className="hero-blue-card-tag">ERP</span>
            </div>
            
            <p className="hero-blue-card-desc">{slide.sub}</p>
            
            <div className="hero-blue-nav">
              <button type="button" className="hero-blue-nav-btn" onClick={(e) => { e.stopPropagation(); back(); }}>
                ← Prev
              </button>
              <div className="hero-blue-dots">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`hero-blue-dot-btn ${i === active ? 'active' : ''}`}
                    onClick={(e) => { e.stopPropagation(); goTo(i); }}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button type="button" className="hero-blue-nav-btn hero-blue-nav-next" onClick={(e) => { e.stopPropagation(); next(); }}>
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
