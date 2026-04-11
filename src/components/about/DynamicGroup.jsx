import Link from 'next/link';
import { dynamicGroupData as d } from './dynamicGroupData';

/* ─── Decorative background shapes ─── */
function HeroOrbs() {
  return (
    <div className="dg-hero-orbs" aria-hidden="true">
      <div className="dg-orb dg-orb-1" />
      <div className="dg-orb dg-orb-2" />
      <div className="dg-orb dg-orb-3" />
    </div>
  );
}

/* ─── Animated count badge ─── */
function StatBadge({ value, label }) {
  return (
    <div className="dg-stat-badge">
      <span className="dg-stat-value">{value}</span>
      <span className="dg-stat-label">{label}</span>
    </div>
  );
}

/* ─── Unit card ─── */
function UnitCard({ unit }) {
  return (
    <article className="dg-unit-card">
      <div className="dg-unit-icon">{unit.icon}</div>
      <div className="dg-unit-focus">{unit.focus}</div>
      <h3 className="dg-unit-name">{unit.name}</h3>
      <p className="dg-unit-desc">{unit.description}</p>
      <div className="dg-unit-bar" />
    </article>
  );
}

/* ─── Value card ─── */
function ValueCard({ title, text }) {
  return (
    <div className="dg-value-card">
      <div className="dg-value-dot" />
      <h4 className="dg-value-title">{title}</h4>
      <p className="dg-value-text">{text}</p>
    </div>
  );
}

/* ─── Timeline item ─── */
function TimelineItem({ year, event, index }) {
  return (
    <div className={`dg-timeline-item ${index % 2 === 0 ? 'dg-tl-left' : 'dg-tl-right'}`}>
      <div className="dg-tl-year">{year}</div>
      <div className="dg-tl-connector">
        <div className="dg-tl-dot" />
      </div>
      <div className="dg-tl-content">{event}</div>
    </div>
  );
}

/* ─── Main component ─── */
export default function DynamicGroup() {
  const { hero, intro, stats, units, values, milestones, cta } = d;

  return (
    <div className="dg-page">
      {/* ── Hero ── */}
      <section className="dg-hero">
        <HeroOrbs />
        <div className="container dg-hero-inner">
          <div className="dg-hero-copy">
            <span className="dg-eyebrow">{hero.eyebrow}</span>
            <h1 className="dg-hero-title">{hero.title}</h1>
            <p className="dg-hero-subtitle">{hero.subtitle}</p>
            <div className="dg-hero-badges">
              {hero.badges.map((b) => (
                <span key={b} className="dg-badge">{b}</span>
              ))}
            </div>
          </div>
          {/* Stats strip */}
          <div className="dg-stats-strip">
            {stats.map((s) => (
              <StatBadge key={s.label} {...s} />
            ))}
          </div>
        </div>
        <div className="dg-hero-wave" />
      </section>

      {/* ── Intro ── */}
      <section className="dg-section dg-intro-section">
        <div className="container dg-intro-grid">
          <div className="dg-intro-visual" aria-hidden="true">
            <div className="dg-visual-ring dg-vr-1" />
            <div className="dg-visual-ring dg-vr-2" />
            <div className="dg-visual-ring dg-vr-3" />
            <div className="dg-visual-core">DG</div>
          </div>
          <div className="dg-intro-copy">
            <span className="dg-section-label">Our Identity</span>
            <h2 className="dg-section-h2">{intro.heading}</h2>
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="dg-intro-p">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Business Units ── */}
      <section className="dg-section dg-units-section">
        <div className="container">
          <div className="dg-section-header">
            <span className="dg-section-label">Our Structure</span>
            <h2 className="dg-section-h2">Business Units Within the Group</h2>
          </div>
          <div className="dg-units-grid">
            {units.map((u) => (
              <UnitCard key={u.name} unit={u} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="dg-section dg-values-section">
        <div className="container">
          <div className="dg-section-header">
            <span className="dg-section-label">What We Stand For</span>
            <h2 className="dg-section-h2">Group-Wide Operating Principles</h2>
          </div>
          <div className="dg-values-grid">
            {values.map((v) => (
              <ValueCard key={v.title} {...v} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="dg-section dg-timeline-section">
        <div className="container">
          <div className="dg-section-header">
            <span className="dg-section-label">Our Journey</span>
            <h2 className="dg-section-h2">Milestones That Shaped The Group</h2>
          </div>
          <div className="dg-timeline">
            <div className="dg-tl-spine" />
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dg-cta-section">
        <div className="container dg-cta-inner">
          <div className="dg-cta-copy">
            <span className="dg-section-label">Next Step</span>
            <h2 className="dg-cta-heading">{cta.heading}</h2>
            <p className="dg-cta-text">{cta.text}</p>
          </div>
          <div className="dg-cta-actions">
            <Link href="/contact" className="btn-primary">Contact Us</Link>
            <Link href="/about/our-company" className="btn-outline-blue">Our Company</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
