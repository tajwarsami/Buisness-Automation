'use client';

import { useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/data/siteContent';

const PRODUCT_DETAILS = {
  '/products/dynamic-academic-erp': {
    summary: 'Admissions, academics, attendance, fees, exam routines, and parent communication in one platform.',
    icon: 'AE',
  },
  '/products/hospital-erp': {
    summary: 'Patient flow, billing, departments, records, and operational reporting for healthcare teams.',
    icon: 'HE',
  },
  '/products/accounting-solution': {
    summary: 'Smarter accounting control with ledgers, billing, reconciliations, and financial statements.',
    icon: 'AS',
  },
  '/products/hr-payroll': {
    summary: 'Attendance, employee records, leave, payroll generation, and approval-driven HR workflows.',
    icon: 'HR',
  },
  '/products/sms-system': {
    summary: 'Bulk messaging, campaign delivery, alerts, and customer communication at scale.',
    icon: 'SS',
  },
  '/products/dynamic-ams': {
    summary: 'Membership, events, renewals, notices, and association management from a single dashboard.',
    icon: 'DA',
  },
};

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    sectionRef.current?.querySelectorAll('.animate-on-scroll').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const productLinks = NAV_ITEMS.find((item) => item.href === '/products')?.children ?? [];

  const cards = useMemo(() => (
    productLinks.map((item) => ({
      ...item,
      ...PRODUCT_DETAILS[item.href],
    }))
  ), [productLinks]);

  return (
    <section id="products" className="products-section products-section-refined" ref={sectionRef} aria-labelledby="products-heading">
      <div className="container">
        <div className="section-header left animate-on-scroll products-section-header-refined">
          <h2 className="section-h2" id="products-heading">Software products built for real operational work</h2>
          <p className="section-sub">
            Explore all six product lines as a responsive card grid. Each card opens the related product page directly.
          </p>
        </div>

        <div className="product-grid product-grid-refined">
          {cards.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="product-card product-card-refined animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="product-card-topline" />
              <div className="product-card-head">
                <span className="product-card-mark">{item.icon}</span>
              </div>
              <h3 className="product-name">{item.label}</h3>
              <p className="product-desc">{item.summary ?? item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
