import Link from 'next/link';
import { testimonialsData as d } from './resourcesData';

function StarRating({ rating }) {
  return (
    <div className="tst-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`tst-star ${i < rating ? 'tst-star-filled' : 'tst-star-empty'}`}>★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ name, role, organization, rating, text, product }) {
  return (
    <article className="tst-card">
      <div className="tst-card-top">
        <StarRating rating={rating} />
        <span className="tst-product-tag">{product}</span>
      </div>
      <blockquote className="tst-quote">"{text}"</blockquote>
      <div className="tst-author">
        <div className="tst-author-avatar">
          {name.split(' ').map((n) => n[0]).join('').slice(0, 2)}
        </div>
        <div className="tst-author-info">
          <span className="tst-author-name">{name}</span>
          <span className="tst-author-role">{role}, {organization}</span>
        </div>
      </div>
    </article>
  );
}

function StatBadge({ value, label }) {
  return (
    <div className="tst-stat-badge">
      <span className="tst-stat-value">{value}</span>
      <span className="tst-stat-label">{label}</span>
    </div>
  );
}

export default function Testimonials() {
  const { hero, intro, testimonials, stats, cta } = d;
  return (
    <div className="tst-page">
      {/* Hero */}
      <section className="tst-hero">
        <div className="tst-hero-bg" aria-hidden="true">
          <div className="tst-hero-glow tst-hg-1" />
          <div className="tst-hero-glow tst-hg-2" />
        </div>
        <div className="container tst-hero-inner">
          <div className="tst-hero-copy">
            <span className="tst-eyebrow">{hero.eyebrow}</span>
            <h1 className="tst-hero-title">{hero.title}</h1>
            <p className="tst-hero-subtitle">{hero.subtitle}</p>
            <div className="tst-hero-badges">
              {hero.badges.map((b) => <span key={b} className="tst-badge">{b}</span>)}
            </div>
          </div>
          <div className="tst-hero-quote-preview" aria-hidden="true">
            <div className="tst-quote-bubble tst-qb-1">
              <div className="tst-qb-stars">★★★★★</div>
              <div className="tst-qb-line" />
              <div className="tst-qb-line tst-qb-short" />
            </div>
            <div className="tst-quote-bubble tst-qb-2">
              <div className="tst-qb-stars">★★★★★</div>
              <div className="tst-qb-line" />
              <div className="tst-qb-line tst-qb-short" />
            </div>
            <div className="tst-rating-pill">4.9 ★</div>
          </div>
        </div>
        <div className="tst-hero-wave" />
      </section>

      {/* Stats */}
      <section className="tst-section tst-stats-section">
        <div className="container tst-stats-grid">
          {stats.map((s) => <StatBadge key={s.label} {...s} />)}
        </div>
      </section>

      {/* Intro */}
      <section className="tst-section tst-intro-section">
        <div className="container tst-intro-grid">
          <div>
            <span className="tst-section-label">Client Voices</span>
            <h2 className="tst-section-h2">{intro.heading}</h2>
            {intro.paragraphs.map((p) => <p key={p.slice(0,30)} className="tst-intro-p">{p}</p>)}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="tst-section tst-grid-section">
        <div className="container">
          <div className="tst-cards-grid">
            {testimonials.map((t) => <TestimonialCard key={t.name} {...t} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tst-cta-section">
        <div className="container tst-cta-inner">
          <div className="tst-cta-copy">
            <h2 className="tst-cta-heading">{cta.heading}</h2>
            <p className="tst-cta-text">{cta.text}</p>
          </div>
          <div className="tst-cta-actions">
            <Link href="/contact" className="btn-primary">Talk to Our Team</Link>
            <Link href="/products" className="btn-outline-blue">Explore Products</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
