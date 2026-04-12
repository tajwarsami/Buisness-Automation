'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';

const PRODUCT_DETAILS = {
  '/products/dynamic-academic-erp': {
    category: 'Education',
    desc: 'Academic management, exams, fees, HR, communication, and administration in one system.',
    count: '500+ institutions',
    icon: 'EDU',
  },
  '/products/hospital-erp': {
    category: 'Healthcare',
    desc: 'Hospital operations, patient records, billing, inventory, and service coordination.',
    count: 'Hospital-ready',
    icon: 'MED',
  },
  '/products/accounting-solution': {
    category: 'Finance',
    desc: 'Accounting control, reporting, reconciliation, ledgers, and business financial visibility.',
    count: '500+ clients',
    icon: 'ACC',
  },
  '/products/hr-payroll': {
    category: 'HR',
    desc: 'Employee data, attendance, appraisal, and payroll processing with stronger accuracy.',
    count: 'People operations',
    icon: 'HR',
  },
  '/products/sms-system': {
    category: 'Communication',
    desc: 'Bulk messaging, alerts, customer updates, and campaign-based mobile engagement.',
    count: 'Instant outreach',
    icon: 'SMS',
  },
  '/products/dynamic-ams': {
    category: 'Association',
    desc: 'Membership, events, communication, voting, fundraising, and organizational workflows.',
    count: 'AMS platform',
    icon: 'AMS',
  },
};

import { useEffect, useMemo, useRef } from 'react';
import { NAV_ITEMS } from '@/data/siteContent';

const tabs = ['All', 'Education', 'Healthcare', 'Finance', 'HR', 'Communication', 'Association'];

export default function Products() {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('All');

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

  const filteredCards = activeTab === 'All'
    ? cards
    : cards.filter((item) => item.category === activeTab);

  return (
    <section id="products" className="products-section products-section-refined" ref={sectionRef} aria-labelledby="products-heading">
      <div className="container">
        <div className="section-header left animate-on-scroll products-section-header-refined">
          <span className="section-label">Products</span>
          <h2 className="section-h2" id="products-heading">Business software built for real daily work</h2>
          <p className="section-sub">
            Explore focused products for education, healthcare, finance, HR, communication, and association management.
          </p>
        </div>

        <div className="product-filter-row animate-on-scroll" role="tablist" aria-label="Product categories">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab-btn${activeTab === tab ? ' active' : ''}`}
              onClick={() => setActiveTab(tab)}
              role="tab"
              aria-selected={activeTab === tab}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="product-grid product-grid-refined">
          {filteredCards.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="product-card product-card-refined animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="product-card-topline" />
              <div className="product-card-head">
                <span className="product-card-mark">{item.icon}</span>
                <span className="product-category product-category-refined">{item.category}</span>
              </div>
              <h3 className="product-name">{item.label}</h3>
              <p className="product-desc">{item.desc}</p>
              <div className="product-card-foot">
                <span className="product-count">{item.count}</span>
                <span className="product-learn">Open page →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
