'use client';

import Link from 'next/link';

const featuredProducts = [
  {
    title: 'Dynamic Academic ERP',
    description: 'Academic management, exams, fee collection, communication, HR, and administration in one education platform.',
    href: '/products/dynamic-academic-erp',
    mark: '1/3',
  },
  {
    title: 'Accounting Solution',
    description: 'Gain stronger financial control with accounting, reconciliation, reporting, and day-to-day business visibility.',
    href: '/products/accounting-solution',
    mark: '2/3',
  },
  {
    title: 'HR And Payroll Management',
    description: 'Manage employee records, attendance, payroll, appraisal, and HR workflows from one reliable system.',
    href: '/products/hr-payroll',
    mark: '3/3',
  },
];

export default function Hero() {
  return (
    <section id="hero" className="hero-section hero-featured-section" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-featured-header">
          <span className="section-label">Featured Products</span>
          <h1 className="hero-h1 hero-featured-title" id="hero-heading">Solutions designed for everyday business work</h1>
          <p className="hero-sub hero-featured-sub">
            Start with our three most requested platforms, then explore the rest of the product and service portfolio.
          </p>
        </div>

        <div className="hero-featured-grid">
          {featuredProducts.map((item) => (
            <article key={item.href} className="hero-featured-card">
              <span className="hero-featured-mark">{item.mark}</span>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className="hero-featured-actions">
                <Link href={item.href} className="btn-outline-blue">Read More</Link>
                <Link href="/contact" className="btn-primary">Contact Us</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
