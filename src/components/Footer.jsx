'use client';

import Link from 'next/link';
import { NAV_ITEMS } from '@/data/siteContent';

const productLinks = NAV_ITEMS.find((item) => item.href === '/products')?.children ?? [];
const resourceLinks = NAV_ITEMS.find((item) => item.href === '/resources')?.children ?? [];

export default function Footer() {
  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <svg width="36" height="36" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                <rect width="38" height="38" rx="8" fill="rgba(255,255,255,0.12)" />
                <path d="M10 8h8c6.627 0 12 5.373 12 12s-5.373 12-12 12h-8V8z" fill="white" opacity="0.95" />
                <path d="M10 14h6c3.314 0 6 2.686 6 6s-2.686 6-6 6h-6V14z" fill="rgba(255,255,255,0.1)" />
                <circle cx="16" cy="20" r="2" fill="rgba(0,87,168,0.6)" />
                <path d="M24 12L28 12L28 28L24 28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
                <circle cx="28" cy="12" r="1.5" fill="#E8431A" />
                <circle cx="28" cy="20" r="1.5" fill="#E8431A" />
                <circle cx="28" cy="28" r="1.5" fill="#E8431A" />
              </svg>
              <div>
                <div className="footer-logo-name">Automate IT Limited</div>
              </div>
            </div>
            <p className="footer-tagline">Modern software, business clarity, and dependable support.</p>
            <p className="footer-desc">
              Automate IT Limited delivers ERP products, business applications, messaging services, and digital support experiences for growing organizations.
            </p>
            <div className="footer-cert">Structured digital products and services</div>
          </div>

          <div>
            <h4 className="footer-col-title">Main Menu</h4>
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="footer-col-title">Products</h4>
            {productLinks.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
            <h4 className="footer-col-title" style={{ marginTop: '28px' }}>Resources</h4>
            {resourceLinks.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link">
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="footer-col-title">Contact</h4>
            <div className="footer-info-item">
              <span className="footer-info-text">Business Automation Workspace Demo Site</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-info-text">Email: info@dynamictechnosoft.com</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-info-text">Phone: +880 1700 000000</span>
            </div>
            <div className="footer-info-item">
              <span className="footer-info-text">Support pages available from the Account and Contact routes.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">Copyright 2026 Automate IT Limited. All rights reserved.</p>
          <p className="footer-credit">Built with separate routed pages for every submenu item.</p>
        </div>
      </div>
    </footer>
  );
}
