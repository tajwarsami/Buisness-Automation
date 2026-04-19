'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import PageHero from '../PageHero';

function ServiceVisual({ theme }) {
  if (theme === 'software') {
    return (
      <div className="sv-mockup sv-software">
        <div className="sv-soft-window">
          <div className="sv-soft-bar"><span /><span /><span /></div>
          <div className="sv-soft-code">
            <div className="sv-code-line w-80" />
            <div className="sv-code-line w-60 indent" />
            <div className="sv-code-line w-90 indent" />
            <div className="sv-code-line w-40" />
          </div>
        </div>
        <div className="sv-soft-float sv-soft-cloud">☁️ Cloud Sync</div>
        <div className="sv-soft-float sv-soft-shield">🛡️ Secure Data</div>
      </div>
    );
  }
  if (theme === 'mobile') {
    return (
      <div className="sv-mockup sv-mobile">
        <div className="sv-phone sv-phone-back" />
        <div className="sv-phone sv-phone-front">
          <div className="sv-phone-notch" />
          <div className="sv-phone-screen">
            <div className="sv-app-header" />
            <div className="sv-app-card" />
            <div className="sv-app-card" />
            <div className="sv-app-card" />
          </div>
        </div>
        <div className="sv-mobile-badge">🚀 1M+ Downloads</div>
      </div>
    );
  }
  if (theme === 'webapp') {
    return (
      <div className="sv-mockup sv-webapp">
        <div className="sv-browser">
          <div className="sv-browser-bar"><span /><span /><span /></div>
          <div className="sv-dashboard">
            <div className="sv-sidebar">
              <div className="sv-sidebar-item" />
              <div className="sv-sidebar-item" />
              <div className="sv-sidebar-item" />
            </div>
            <div className="sv-main">
              <div className="sv-stat-cards">
                <div className="sv-stat-card" />
                <div className="sv-stat-card" />
                <div className="sv-stat-card" />
              </div>
              <div className="sv-chart" />
            </div>
          </div>
        </div>
        <div className="sv-web-badge">⚡ Real-time Sync</div>
      </div>
    );
  }
  if (theme === 'sms') {
    return (
      <div className="sv-mockup sv-sms">
        <div className="sv-chat-window">
          <div className="sv-chat-bubble sv-chat-left">Hi, your order has shipped!</div>
          <div className="sv-chat-bubble sv-chat-right">Thanks!</div>
          <div className="sv-chat-bubble sv-chat-left">Track it here: link.com</div>
        </div>
        <div className="sv-sms-stats">
          <div className="sv-sms-graph" />
          <span className="sv-sms-deliv">99.9% Delivery Rate</span>
        </div>
      </div>
    );
  }
  if (theme === 'hosting') {
    return (
      <div className="sv-mockup sv-hosting">
        <div className="sv-domain-search">
          <input type="text" value="yourcompany.com" readOnly />
          <button type="button">Search</button>
        </div>
        <div className="sv-server-stack">
          <div className="sv-server-rack"><span className="sv-light blink" /></div>
          <div className="sv-server-rack"><span className="sv-light blink fast" /></div>
          <div className="sv-server-rack"><span className="sv-light blink slow" /></div>
        </div>
        <div className="sv-trust-badge">🔒 Secure SSL</div>
      </div>
    );
  }
  return null;
}

export default function ServicePage({ data }) {
  const { submenuName, headline, shortDescription, features, buttonLabel, theme } = data;
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`service-redesign-page theme-${theme}`} ref={ref}>
      <PageHero title={submenuName} theme="teal" />

      <section className="service-redesign-content container">
        <div className="service-redesign-grid">
          <div className="service-redesign-text animate-on-scroll">
            <h2 className="service-redesign-headline">{headline}</h2>
            <p className="service-redesign-desc">{shortDescription}</p>

            <div className="service-redesign-features">
              {features.map((f, i) => (
                <div key={f.title} className="service-redesign-feature-item" style={{ animationDelay: `${i * 0.1}s` }}>
                  <span className="sr-feature-icon">{f.icon}</span>
                  <span className="sr-feature-title">{f.title}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className="service-redesign-cta">
              {buttonLabel}
            </Link>
          </div>

          <div className="service-redesign-visual animate-on-scroll delay-1">
            <ServiceVisual theme={theme} />
          </div>
        </div>
      </section>
    </div>
  );
}
