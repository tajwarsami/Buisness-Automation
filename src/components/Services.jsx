'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/data/siteContent';

const SERVICE_DETAILS = {
  '/services/software-development': {
    title: 'Software Development',
    desc: 'Custom systems designed around your business workflow, approvals, and operational goals.',
    icon: 'DEV',
  },
  '/services/mobile-app-development': {
    title: 'Mobile App Development',
    desc: 'Mobile experiences that connect staff, customers, and business data through clean interfaces.',
    icon: 'APP',
  },
  '/services/web-application-development': {
    title: 'Web Application Development',
    desc: 'Responsive web platforms for dashboards, portals, service operations, and management tools.',
    icon: 'WEB',
  },
  '/services/bulk-sms-service': {
    title: 'Bulk SMS Service',
    desc: 'Reliable campaign and alert messaging for fast customer communication at scale.',
    icon: 'SMS',
  },
  '/services/domain-registration-web-hosting': {
    title: 'Domain Registration & Web Hosting',
    desc: 'Domain, hosting, deployment, and foundational infrastructure for dependable online presence.',
    icon: 'DNS',
  },
};

export default function Services() {
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

  const serviceLinks = NAV_ITEMS.find((item) => item.href === '/services')?.children ?? [];

  return (
    <section id="services" className="services-section services-section-refined" ref={ref} aria-labelledby="services-heading">
      <div className="container">
        <div className="services-shell">
          <div className="services-intro animate-on-scroll">
            <span className="section-label">Services</span>
            <h2 className="section-h2" id="services-heading">One team for planning, building, and supporting digital work</h2>
            <p className="section-sub services-intro-sub">
              Our services support both custom software initiatives and successful rollout of platforms your team depends on.
            </p>
            <Link href="/services" className="btn-outline-blue">View all services</Link>
          </div>

          <div className="services-grid services-grid-refined">
            {serviceLinks.map((item, index) => {
              const detail = SERVICE_DETAILS[item.href];

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="service-card service-card-refined animate-on-scroll"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="service-card-mark">{detail?.icon ?? 'SRV'}</div>
                  <h3 className="service-name">{detail?.title ?? item.label}</h3>
                  <p className="service-desc">{detail?.desc ?? item.description}</p>
                  <span className="service-link">Open page →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
