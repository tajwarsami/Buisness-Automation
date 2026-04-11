import Link from 'next/link';
import { dealershipData as d } from './resourcesData';

function BenefitCard({ icon, title, description }) {
  return (
    <div className="deal-benefit-card">
      <div className="deal-benefit-icon">{icon}</div>
      <h4 className="deal-benefit-title">{title}</h4>
      <p className="deal-benefit-desc">{description}</p>
    </div>
  );
}

function TierCard({ name, requirements, benefits, highlight }) {
  return (
    <div className={`deal-tier-card ${highlight ? 'deal-tier-featured' : ''}`}>
      {highlight && <div className="deal-tier-featured-badge">Most Popular</div>}
      <h3 className="deal-tier-name">{name}</h3>
      <div className="deal-tier-req">
        <span className="deal-tier-req-label">Requirement:</span>
        <span>{requirements}</span>
      </div>
      <ul className="deal-tier-benefits">
        {benefits.map((b) => (
          <li key={b} className="deal-tier-benefit">
            <span className="deal-tier-check">✓</span>
            {b}
          </li>
        ))}
      </ul>
      <Link href="/contact" className={highlight ? 'btn-primary deal-tier-btn' : 'btn-outline-blue deal-tier-btn'}>
        Apply Now
      </Link>
    </div>
  );
}

function ProcessStep({ step, title, description }) {
  return (
    <div className="deal-step">
      <div className="deal-step-circle">{step}</div>
      <div className="deal-step-body">
        <h4 className="deal-step-title">{title}</h4>
        <p className="deal-step-desc">{description}</p>
      </div>
    </div>
  );
}

export default function Dealership() {
  const { hero, intro, benefits, eligibility, tiers, process, cta } = d;
  return (
    <div className="deal-page">
      {/* Hero */}
      <section className="deal-hero">
        <div className="deal-hero-bg" aria-hidden="true">
          <div className="deal-hero-mesh" />
        </div>
        <div className="container deal-hero-inner">
          <div className="deal-hero-copy">
            <span className="deal-eyebrow">{hero.eyebrow}</span>
            <h1 className="deal-hero-title">{hero.title}</h1>
            <p className="deal-hero-subtitle">{hero.subtitle}</p>
            <div className="deal-hero-badges">
              {hero.badges.map((b) => <span key={b} className="deal-badge">{b}</span>)}
            </div>
            <div className="deal-hero-actions">
              <Link href="/contact" className="btn-primary">Apply to Partner</Link>
              <a href="#deal-tiers" className="btn-outline-blue">View Tiers</a>
            </div>
          </div>
          <div className="deal-hero-visual" aria-hidden="true">
            <div className="deal-visual-network">
              <div className="deal-vn-center">DT</div>
              {['Partner A', 'Partner B', 'Partner C', 'Partner D'].map((p, i) => (
                <div key={p} className={`deal-vn-node deal-vn-node-${i + 1}`}>{p[8]}</div>
              ))}
              <div className="deal-vn-ring" />
            </div>
          </div>
        </div>
        <div className="deal-hero-wave" />
      </section>

      {/* Intro */}
      <section className="deal-section deal-intro-section">
        <div className="container deal-intro-grid">
          <div>
            <span className="deal-section-label">Partnership Opportunity</span>
            <h2 className="deal-section-h2">{intro.heading}</h2>
            {intro.paragraphs.map((p) => <p key={p.slice(0,30)} className="deal-intro-p">{p}</p>)}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="deal-section deal-benefits-section">
        <div className="container">
          <div className="deal-section-header">
            <span className="deal-section-label">What You Get</span>
            <h2 className="deal-section-h2">Dealer Benefits</h2>
          </div>
          <div className="deal-benefits-grid">
            {benefits.map((b) => <BenefitCard key={b.title} {...b} />)}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="deal-section deal-tiers-section" id="deal-tiers">
        <div className="container">
          <div className="deal-section-header deal-section-header-light">
            <span className="deal-section-label-light">Partnership Levels</span>
            <h2 className="deal-section-h2-light">Dealer Tiers</h2>
          </div>
          <div className="deal-tiers-grid">
            {tiers.map((t) => <TierCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="deal-section deal-eligibility-section">
        <div className="container deal-eligibility-inner">
          <div className="deal-eligibility-copy">
            <span className="deal-section-label">Requirements</span>
            <h2 className="deal-section-h2">Eligibility Criteria</h2>
            <ul className="deal-eligibility-list">
              {eligibility.map((item) => (
                <li key={item.slice(0,30)} className="deal-eligibility-item">
                  <span className="deal-eligibility-icon">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="deal-section deal-process-section">
        <div className="container">
          <div className="deal-section-header">
            <span className="deal-section-label">How It Works</span>
            <h2 className="deal-section-h2">Application Process</h2>
          </div>
          <div className="deal-process-track">
            {process.map((step) => <ProcessStep key={step.step} {...step} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="deal-cta-section">
        <div className="container deal-cta-inner">
          <div className="deal-cta-copy">
            <h2 className="deal-cta-heading">{cta.heading}</h2>
            <p className="deal-cta-text">{cta.text}</p>
          </div>
          <div className="deal-cta-actions">
            <Link href="/contact" className="btn-primary">Apply to Partner</Link>
            <Link href="/resources" className="btn-outline-blue">All Resources</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
