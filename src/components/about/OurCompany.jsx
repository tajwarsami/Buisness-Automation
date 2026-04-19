import Link from 'next/link';
import { ourCompanyData as d } from './ourCompanyData';

function CompanyVisual() {
  return (
    <div className="oc-visual" aria-hidden="true">
      <div className="oc-visual-bg" />
      <div className="oc-visual-card oc-vc-1">
        <span className="oc-vc-icon">🏢</span>
        <span>Est. 2013</span>
      </div>
      <div className="oc-visual-card oc-vc-2">
        <span className="oc-vc-icon">📍</span>
        <span>Dhaka, Bangladesh</span>
      </div>
      <div className="oc-visual-card oc-vc-3">
        <span className="oc-vc-icon">✅</span>
        <span>ISO-aligned delivery</span>
      </div>
    </div>
  );
}

function PillarCard({ icon, title, text }) {
  return (
    <div className="oc-pillar">
      <div className="oc-pillar-icon">{icon}</div>
      <h3 className="oc-pillar-title">{title}</h3>
      <p className="oc-pillar-text">{text}</p>
    </div>
  );
}

function CapabilityBlock({ area, items }) {
  return (
    <div className="oc-cap-block">
      <h4 className="oc-cap-area">{area}</h4>
      <ul className="oc-cap-list">
        {items.map((item) => (
          <li key={item} className="oc-cap-item">
            <span className="oc-cap-dot" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhyUsStat({ stat, label, description }) {
  return (
    <div className="oc-why-stat">
      <div className="oc-why-number">
        {stat}
        <span className="oc-why-label">{label}</span>
      </div>
      <p className="oc-why-desc">{description}</p>
    </div>
  );
}

/* ─── Industry chip ─── */
function IndustryChip({ name, icon, description }) {
  return (
    <div className="oc-industry">
      <span className="oc-industry-icon">{icon}</span>
      <div>
        <span className="oc-industry-name">{name}</span>
        <p className="oc-industry-desc">{description}</p>
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function OurCompany() {
  const { hero, intro, pillars, capabilities, whyUs, industries, cta } = d;

  return (
    <div className="oc-page">

      {/* ── Hero ── */}
      <section className="oc-hero">
        <div className="oc-hero-bg" aria-hidden="true">
          <div className="oc-hero-blob oc-blob-1" />
          <div className="oc-hero-blob oc-blob-2" />
        </div>
        <div className="container oc-hero-inner">
          <div className="oc-hero-copy">
            <span className="oc-eyebrow">{hero.eyebrow}</span>
            <h1 className="oc-hero-title">{hero.title}</h1>
            <p className="oc-hero-subtitle">{hero.subtitle}</p>
            <div className="oc-hero-badges">
              {hero.badges.map((b) => (
                <span key={b} className="oc-badge">{b}</span>
              ))}
            </div>
          </div>
          <CompanyVisual />
        </div>
        <div className="oc-hero-wave" />
      </section>

      {/* ── Intro ── */}
      <section className="oc-section oc-intro-section">
        <div className="container">
          <div className="oc-intro-grid">
            <div className="oc-intro-copy">
              <span className="oc-section-label">Who We Are</span>
              <h2 className="oc-section-h2">{intro.heading}</h2>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="oc-intro-p">{p}</p>
              ))}
            </div>
            <div className="oc-intro-stripe" aria-hidden="true">
              {['01', '02', '03', '04'].map((n) => (
                <div key={n} className="oc-stripe-row">
                  <span className="oc-stripe-num">{n}</span>
                  <div className="oc-stripe-bar" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission / Vision / Approach / Promise ── */}
      <section className="oc-section oc-pillars-section">
        <div className="container">
          <div className="oc-section-header">
            <span className="oc-section-label">Our Foundation</span>
            <h2 className="oc-section-h2">What Guides Every Engagement</h2>
          </div>
          <div className="oc-pillars-grid">
            {pillars.map((p) => (
              <PillarCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us stats ── */}
      <section className="oc-section oc-why-section">
        <div className="container">
          <div className="oc-section-header oc-section-header-light">
            <span className="oc-section-label-light">By the Numbers</span>
            <h2 className="oc-section-h2-light">Proof in performance</h2>
          </div>
          <div className="oc-why-grid">
            {whyUs.map((w) => (
              <WhyUsStat key={w.stat} {...w} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Capabilities ── */}
      <section className="oc-section oc-cap-section">
        <div className="container">
          <div className="oc-section-header">
            <span className="oc-section-label">What We Do</span>
            <h2 className="oc-section-h2">Full-Spectrum Technology Capabilities</h2>
          </div>
          <div className="oc-cap-grid">
            {capabilities.map((c) => (
              <CapabilityBlock key={c.area} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="oc-section oc-industry-section">
        <div className="container">
          <div className="oc-section-header">
            <span className="oc-section-label">Who We Serve</span>
            <h2 className="oc-section-h2">Industries We Operate In</h2>
          </div>
          <div className="oc-industry-grid">
            {industries.map((ind) => (
              <IndustryChip key={ind.name} {...ind} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="oc-cta-section">
        <div className="container oc-cta-inner">
          <div className="oc-cta-copy">
            <h2 className="oc-cta-heading">{cta.heading}</h2>
            <p className="oc-cta-text">{cta.text}</p>
          </div>
          <div className="oc-cta-actions">
            <Link href="/contact" className="btn-primary">Get in Touch</Link>
            <Link href="/about/our-team" className="btn-outline-blue">Meet the Team</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
