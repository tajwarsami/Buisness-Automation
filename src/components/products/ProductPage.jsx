import Link from 'next/link';

/* ─── Module card ─── */
function ModuleCard({ icon, name, description }) {
  return (
    <div className="prod-module-card">
      <div className="prod-module-icon">{icon}</div>
      <h4 className="prod-module-name">{name}</h4>
      <p className="prod-module-desc">{description}</p>
    </div>
  );
}

/* ─── Benefit stat ─── */
function BenefitStat({ stat, label, description }) {
  return (
    <div className="prod-benefit">
      <div className="prod-benefit-stat">
        {stat}
        <span className="prod-benefit-label">{label}</span>
      </div>
      <p className="prod-benefit-desc">{description}</p>
    </div>
  );
}

/* ─── Use case item ─── */
function UseCaseItem({ text }) {
  return (
    <li className="prod-usecase-item">
      <span className="prod-usecase-arrow">→</span>
      <span>{text}</span>
    </li>
  );
}

/**
 * Shared product page template component.
 * Pass the product data object from productsData.js as props.
 *
 * @param {object} data - Product data object
 * @param {string[]} relatedLinks - Array of {label, href, description} for the related products strip
 */
export default function ProductPage({ data, relatedLinks = [] }) {
  const { hero, intro, modules, benefits, useCases, cta } = data;
  const colorClass = `prod-color-${hero.color || 'blue'}`;

  return (
    <div className={`prod-page ${colorClass}`}>

      {/* ── Hero ── */}
      <section className="prod-hero">
        <div className="prod-hero-bg" aria-hidden="true">
          <div className="prod-hero-glow" />
          <div className="prod-hero-dots" />
        </div>
        <div className="container prod-hero-inner">
          <div className="prod-hero-copy">
            <span className="prod-eyebrow">{hero.eyebrow}</span>
            <h1 className="prod-hero-title">{hero.title}</h1>
            <p className="prod-hero-subtitle">{hero.subtitle}</p>
            <div className="prod-hero-badges">
              {hero.badges.map((b) => (
                <span key={b} className="prod-badge">{b}</span>
              ))}
            </div>
            <div className="prod-hero-actions">
              <Link href="/contact" className="btn-primary">Request a Demo</Link>
              <Link href="/products" className="btn-outline-blue">All Products</Link>
            </div>
          </div>
          <div className="prod-hero-visual" aria-hidden="true">
            <div className="prod-visual-screen">
              <div className="prod-vs-topbar">
                <span className="prod-vs-dot" /><span className="prod-vs-dot" /><span className="prod-vs-dot" />
              </div>
              <div className="prod-vs-body">
                <div className="prod-vs-sidebar">
                  {[1, 2, 3, 4, 5].map((i) => <div key={i} className="prod-vs-nav-item" />)}
                </div>
                <div className="prod-vs-content">
                  <div className="prod-vs-bar prod-vs-bar-lg" />
                  <div className="prod-vs-bar prod-vs-bar-md" />
                  <div className="prod-vs-chart">
                    {[60, 80, 55, 90, 70, 95].map((h, i) => (
                      <div key={i} className="prod-vs-chart-col" style={{ '--h': `${h}%` }} />
                    ))}
                  </div>
                  <div className="prod-vs-grid-rows">
                    <div className="prod-vs-bar prod-vs-bar-sm" />
                    <div className="prod-vs-bar prod-vs-bar-md" />
                    <div className="prod-vs-bar prod-vs-bar-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prod-hero-wave" />
      </section>

      {/* ── Intro ── */}
      <section className="prod-section prod-intro-section">
        <div className="container">
          <div className="prod-intro-grid">
            <div className="prod-intro-copy">
              <span className="prod-section-label">Overview</span>
              <h2 className="prod-section-h2">{intro.heading}</h2>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="prod-intro-p">{p}</p>
              ))}
            </div>
            <div className="prod-intro-accent" aria-hidden="true">
              <div className="prod-accent-ring prod-ar-1" />
              <div className="prod-accent-ring prod-ar-2" />
              <div className="prod-accent-icon">📦</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Modules / Features ── */}
      <section className="prod-section prod-modules-section">
        <div className="container">
          <div className="prod-section-header">
            <span className="prod-section-label">Features</span>
            <h2 className="prod-section-h2">What's Included in the Platform</h2>
          </div>
          <div className="prod-modules-grid">
            {modules.map((m) => (
              <ModuleCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="prod-section prod-benefits-section">
        <div className="container">
          <div className="prod-section-header prod-section-header-light">
            <span className="prod-section-label-light">Outcomes</span>
            <h2 className="prod-section-h2-light">What You Can Expect</h2>
          </div>
          <div className="prod-benefits-grid">
            {benefits.map((b) => (
              <BenefitStat key={b.label} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="prod-section prod-usecases-section">
        <div className="container prod-usecases-inner">
          <div className="prod-usecases-copy">
            <span className="prod-section-label">Who It's For</span>
            <h2 className="prod-section-h2">Common Use Cases</h2>
            <ul className="prod-usecase-list">
              {useCases.map((uc) => (
                <UseCaseItem key={uc.slice(0, 30)} text={uc} />
              ))}
            </ul>
          </div>
          <div className="prod-usecase-visual" aria-hidden="true">
            <div className="prod-uv-card">
              <div className="prod-uv-avatar" />
              <div className="prod-uv-lines">
                <div className="prod-uv-line prod-uv-line-lg" />
                <div className="prod-uv-line prod-uv-line-md" />
              </div>
            </div>
            <div className="prod-uv-card prod-uv-card-alt">
              <div className="prod-uv-avatar prod-uv-avatar-alt" />
              <div className="prod-uv-lines">
                <div className="prod-uv-line prod-uv-line-md" />
                <div className="prod-uv-line prod-uv-line-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related products ── */}
      {relatedLinks.length > 0 && (
        <section className="prod-section prod-related-section">
          <div className="container">
            <div className="prod-section-header">
              <span className="prod-section-label">Explore More</span>
              <h2 className="prod-section-h2">Other Products</h2>
            </div>
            <div className="prod-related-grid">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="prod-related-card">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>
                  <span>Open →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="prod-cta-section">
        <div className="container prod-cta-inner">
          <div className="prod-cta-copy">
            <h2 className="prod-cta-heading">{cta.heading}</h2>
            <p className="prod-cta-text">{cta.text}</p>
          </div>
          <div className="prod-cta-actions">
            <Link href="/contact" className="btn-primary">Request a Demo</Link>
            <Link href="/contact" className="btn-outline-blue">Talk to Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
