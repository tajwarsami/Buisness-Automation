import Link from 'next/link';
import { mediaCoverageData as d } from './resourcesData';

function CoverageCard({ outlet, type, title, date, excerpt }) {
  const typeColors = {
    'Feature Article': 'media-type-article',
    'Interview': 'media-type-interview',
    'Award': 'media-type-award',
    'Speaker': 'media-type-speaker',
  };
  return (
    <article className="media-card">
      <div className="media-card-header">
        <div className="media-outlet">{outlet}</div>
        <span className={`media-type-badge ${typeColors[type] || ''}`}>{type}</span>
      </div>
      <h3 className="media-card-title">{title}</h3>
      <p className="media-card-excerpt">{excerpt}</p>
      <div className="media-card-footer">
        <span className="media-date">📅 {date}</span>
        <span className="media-read-more">View coverage →</span>
      </div>
    </article>
  );
}

function MilestoneItem({ year, title }) {
  return (
    <div className="media-milestone">
      <div className="media-milestone-year">{year}</div>
      <div className="media-milestone-line" />
      <div className="media-milestone-title">{title}</div>
    </div>
  );
}

export default function MediaCoverage() {
  const { hero, intro, featured, milestones, cta } = d;
  return (
    <div className="media-page">
      {/* Hero */}
      <section className="media-hero">
        <div className="media-hero-bg" aria-hidden="true">
          <div className="media-hero-ticker" />
        </div>
        <div className="container media-hero-inner">
          <div className="media-hero-copy">
            <span className="media-eyebrow">{hero.eyebrow}</span>
            <h1 className="media-hero-title">{hero.title}</h1>
            <p className="media-hero-subtitle">{hero.subtitle}</p>
            <div className="media-hero-badges">
              {hero.badges.map((b) => <span key={b} className="media-badge">{b}</span>)}
            </div>
          </div>
          <div className="media-hero-logos" aria-label="Featured outlets">
            {['Tech Khabar', 'Business 360', 'IT Nepal Conf', 'Biz Directory'].map((name) => (
              <div key={name} className="media-outlet-logo">
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="media-hero-wave" />
      </section>

      {/* Intro */}
      <section className="media-section media-intro-section">
        <div className="container media-intro-grid">
          <div>
            <span className="media-section-label">Press & Recognition</span>
            <h2 className="media-section-h2">{intro.heading}</h2>
            {intro.paragraphs.map((p) => <p key={p.slice(0,30)} className="media-intro-p">{p}</p>)}
          </div>
        </div>
      </section>

      {/* Coverage Cards */}
      <section className="media-section media-coverage-section">
        <div className="container">
          <div className="media-section-header">
            <span className="media-section-label">Featured Coverage</span>
            <h2 className="media-section-h2">In The Press</h2>
          </div>
          <div className="media-cards-grid">
            {featured.map((item) => <CoverageCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="media-section media-milestones-section">
        <div className="container">
          <div className="media-section-header">
            <span className="media-section-label">Company Milestones</span>
            <h2 className="media-section-h2">Notable Moments</h2>
          </div>
          <div className="media-milestones-track">
            {milestones.map((m) => <MilestoneItem key={m.year} {...m} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="media-cta-section">
        <div className="container media-cta-inner">
          <div className="media-cta-copy">
            <h2 className="media-cta-heading">{cta.heading}</h2>
            <p className="media-cta-text">{cta.text}</p>
          </div>
          <div className="media-cta-actions">
            <Link href="/contact" className="btn-primary">Media Inquiry</Link>
            <Link href="/resources" className="btn-outline-blue">All Resources</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
