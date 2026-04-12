import Link from 'next/link';
import { ourTeamData as d } from './ourTeamData';

function DeptCard({ name, icon, count, description, skills }) {
  return (
    <article className="ot-dept-card">
      <div className="ot-dept-header">
        <div className="ot-dept-icon">{icon}</div>
        <div>
          <h3 className="ot-dept-name">{name}</h3>
          <span className="ot-dept-count">{count} members</span>
        </div>
      </div>
      <p className="ot-dept-desc">{description}</p>
      <ul className="ot-dept-skills">
        {skills.map((s) => (
          <li key={s} className="ot-skill-tag">{s}</li>
        ))}
      </ul>
    </article>
  );
}

function CultureItem({ value, description }) {
  return (
    <div className="ot-culture-item">
      <div className="ot-culture-mark">✦</div>
      <div>
        <h4 className="ot-culture-value">{value}</h4>
        <p className="ot-culture-desc">{description}</p>
      </div>
    </div>
  );
}

function LeaderCard({ name, role, bio, initials }) {
  return (
    <div className="ot-leader-card">
      <div className="ot-leader-avatar">
        <span>{initials}</span>
      </div>
      <div className="ot-leader-info">
        <h4 className="ot-leader-name">{name}</h4>
        <span className="ot-leader-role">{role}</span>
        <p className="ot-leader-bio">{bio}</p>
      </div>
    </div>
  );
}

export default function OurTeam() {
  const { hero, intro, departments, culture, leadership, cta } = d;

  return (
    <div className="ot-page">

      {/* ── Hero ── */}
      <section className="ot-hero">
        <div className="ot-hero-bg" aria-hidden="true">
          <div className="ot-hero-grid" />
          <div className="ot-hero-glow" />
        </div>
        <div className="container ot-hero-inner">
          <div className="ot-hero-copy">
            <span className="ot-eyebrow">{hero.eyebrow}</span>
            <h1 className="ot-hero-title">{hero.title}</h1>
            <p className="ot-hero-subtitle">{hero.subtitle}</p>
            <div className="ot-hero-badges">
              {hero.badges.map((b) => (
                <span key={b} className="ot-badge">{b}</span>
              ))}
            </div>
          </div>
          <div className="ot-hero-visual" aria-hidden="true">
            <div className="ot-avatar-cluster">
              {['ENG', 'DES', 'IMP', 'SUP', 'BDV', 'OPS'].map((label, i) => (
                <div key={label} className={`ot-cluster-avatar ot-ca-${i + 1}`}>
                  {label}
                </div>
              ))}
              <div className="ot-cluster-center">TEAM</div>
            </div>
          </div>
        </div>
        <div className="ot-hero-wave" />
      </section>

      <section className="ot-section ot-intro-section">
        <div className="container ot-intro-grid">
          <div className="ot-intro-copy">
            <span className="ot-section-label">How We Work</span>
            <h2 className="ot-section-h2">{intro.heading}</h2>
            {intro.paragraphs.map((p) => (
              <p key={p.slice(0, 30)} className="ot-intro-p">{p}</p>
            ))}
          </div>
          <div className="ot-team-stat-stack">
            {[
              { value: '50+', label: 'Team Members' },
              { value: '6', label: 'Departments' },
              { value: '10+', label: 'Years Together' },
            ].map(({ value, label }) => (
              <div key={label} className="ot-team-stat">
                <span className="ot-ts-value">{value}</span>
                <span className="ot-ts-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ot-section ot-dept-section">
        <div className="container">
          <div className="ot-section-header">
            <span className="ot-section-label">Our Structure</span>
            <h2 className="ot-section-h2">Departments & Capabilities</h2>
          </div>
          <div className="ot-dept-grid">
            {departments.map((dept) => (
              <DeptCard key={dept.name} {...dept} />
            ))}
          </div>
        </div>
      </section>

      <section className="ot-section ot-leadership-section">
        <div className="container">
          <div className="ot-section-header">
            <span className="ot-section-label">Leadership</span>
            <h2 className="ot-section-h2">The Voices That Shape Direction</h2>
          </div>
          <div className="ot-leader-grid">
            {leadership.map((l) => (
              <LeaderCard key={l.role} {...l} />
            ))}
          </div>
        </div>
      </section>

      <section className="ot-section ot-culture-section">
        <div className="container">
          <div className="ot-culture-grid">
            <div className="ot-culture-header">
              <span className="ot-section-label">Our Culture</span>
              <h2 className="ot-section-h2">Values We Build With</h2>
              <p className="ot-culture-intro">
                Our team culture is shaped by how we treat each other and our clients every single day.
              </p>
            </div>
            <div className="ot-culture-items">
              {culture.map((c) => (
                <CultureItem key={c.value} {...c} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ot-cta-section">
        <div className="container ot-cta-inner">
          <div className="ot-cta-copy">
            <h2 className="ot-cta-heading">{cta.heading}</h2>
            <p className="ot-cta-text">{cta.text}</p>
          </div>
          <div className="ot-cta-actions">
            <Link href="/contact" className="btn-primary">Contact the Team</Link>
            <Link href="/about/our-company" className="btn-outline-blue">Our Company</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
