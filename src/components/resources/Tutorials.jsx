import Link from 'next/link';
import { tutorialsData as d } from './resourcesData';

function TutorialItem({ title, duration, type }) {
  return (
    <div className="tut-item">
      <div className="tut-item-type">{type === 'Video' ? '▶' : '📄'}</div>
      <div className="tut-item-body">
        <span className="tut-item-title">{title}</span>
        <div className="tut-item-meta">
          <span className="tut-item-duration">⏱ {duration}</span>
          <span className={`tut-item-badge ${type === 'Video' ? 'tut-badge-video' : 'tut-badge-article'}`}>{type}</span>
        </div>
      </div>
      <div className="tut-item-arrow">→</div>
    </div>
  );
}

function CategorySection({ title, icon, description, items }) {
  return (
    <div className="tut-category">
      <div className="tut-cat-header">
        <span className="tut-cat-icon">{icon}</span>
        <div>
          <h3 className="tut-cat-title">{title}</h3>
          <p className="tut-cat-desc">{description}</p>
        </div>
      </div>
      <div className="tut-items">
        {items.map((item) => <TutorialItem key={item.title} {...item} />)}
      </div>
    </div>
  );
}

export default function Tutorials() {
  const { hero, intro, categories, cta } = d;
  return (
    <div className="tut-page">
      {/* Hero */}
      <section className="tut-hero">
        <div className="tut-hero-bg" aria-hidden="true">
          <div className="tut-hero-wave-1" />
          <div className="tut-hero-wave-2" />
        </div>
        <div className="container tut-hero-inner">
          <div className="tut-hero-copy">
            <span className="tut-eyebrow">{hero.eyebrow}</span>
            <h1 className="tut-hero-title">{hero.title}</h1>
            <p className="tut-hero-subtitle">{hero.subtitle}</p>
            <div className="tut-hero-badges">
              {hero.badges.map((b) => <span key={b} className="tut-badge">{b}</span>)}
            </div>
          </div>
          <div className="tut-hero-search" aria-label="Tutorial search placeholder">
            <div className="tut-search-bar">
              <span className="tut-search-icon">🔍</span>
              <span className="tut-search-placeholder">Search tutorials…</span>
            </div>
            <div className="tut-search-tags">
              {['Setup', 'Fees', 'Reports', 'Users', 'API'].map((t) => (
                <span key={t} className="tut-search-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="tut-hero-wave-bottom" />
      </section>

      {/* Intro */}
      <section className="tut-section tut-intro-section">
        <div className="container">
          <div className="tut-intro-grid">
            <div>
              <span className="tut-section-label">About This Library</span>
              <h2 className="tut-section-h2">{intro.heading}</h2>
              {intro.paragraphs.map((p) => <p key={p.slice(0,30)} className="tut-intro-p">{p}</p>)}
            </div>
            <div className="tut-stats-strip">
              {[{ v: '50+', l: 'Tutorials' }, { v: '4', l: 'Categories' }, { v: 'Free', l: 'Access' }].map(({ v, l }) => (
                <div key={l} className="tut-stat"><span className="tut-stat-v">{v}</span><span className="tut-stat-l">{l}</span></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="tut-section tut-cats-section">
        <div className="container">
          <div className="tut-section-header">
            <span className="tut-section-label">Tutorial Library</span>
            <h2 className="tut-section-h2">Browse by Category</h2>
          </div>
          <div className="tut-cats-grid">
            {categories.map((cat) => <CategorySection key={cat.title} {...cat} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="tut-cta-section">
        <div className="container tut-cta-inner">
          <div className="tut-cta-copy">
            <h2 className="tut-cta-heading">{cta.heading}</h2>
            <p className="tut-cta-text">{cta.text}</p>
          </div>
          <div className="tut-cta-actions">
            <Link href="/contact" className="btn-primary">Contact Support</Link>
            <Link href="/resources" className="btn-outline-blue">All Resources</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
