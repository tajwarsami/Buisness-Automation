import Link from 'next/link';
import PageHero from '../PageHero';

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
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        badges={hero.badges}
        theme="blue"
      >
        <div className="ph-page-actions">
          <Link href="/contact" className="ph-btn-primary">Request a Demo</Link>
          <Link href="/products" className="ph-btn-ghost">All Products</Link>
        </div>
      </PageHero>

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
