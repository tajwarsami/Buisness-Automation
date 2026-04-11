import Link from 'next/link';

function AbstractVisual() {
  return (
    <div className="route-visual-card" aria-hidden="true">
      <div className="route-visual-circle route-visual-circle-lg"></div>
      <div className="route-visual-circle route-visual-circle-sm"></div>
      <div className="route-visual-screen">
        <div className="route-visual-topbar"></div>
        <div className="route-visual-row"></div>
        <div className="route-visual-row route-visual-row-short"></div>
        <div className="route-visual-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default function RoutePageTemplate({
  title,
  eyebrow,
  summary,
  introTitle,
  introText,
  highlights = [],
  detailCards = [],
  pillars = [],
  ctaTitle,
  ctaText,
  relatedLinks = [],
  badgeItems = [],
}) {
  return (
    <>
      <section className="route-hero">
        <div className="route-hero-wave"></div>
        <div className="route-hero-accent route-hero-accent-left"></div>
        <div className="route-hero-accent route-hero-accent-right"></div>
        <div className="container route-hero-inner">
          <div className="route-hero-copy">
            <span className="route-eyebrow">{eyebrow}</span>
            <h1 className="route-title">{title}</h1>
            <p className="route-summary">{summary}</p>
            {badgeItems.length > 0 && (
              <div className="route-badges">
                {badgeItems.map((item) => (
                  <span key={item} className="route-badge">{item}</span>
                ))}
              </div>
            )}
          </div>
          <AbstractVisual />
        </div>
      </section>

      <section className="route-content">
        <div className="container">
          <div className="route-main-grid">
            <div className="route-illustration-panel">
              <div className="route-illustration-shell">
                <div className="route-illustration-orb"></div>
                <div className="route-illustration-device">
                  <div className="route-illustration-device-bar"></div>
                  <div className="route-illustration-device-block"></div>
                  <div className="route-illustration-device-line"></div>
                  <div className="route-illustration-device-line short"></div>
                </div>
              </div>
            </div>

            <div className="route-copy-panel">
              <h2>{introTitle}</h2>
              {introText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              {highlights.length > 0 && (
                <div className="route-highlight-list">
                  {highlights.map((item) => (
                    <div key={item} className="route-highlight-item">
                      <span className="route-highlight-mark"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {detailCards.length > 0 && (
            <div className="route-card-grid">
              {detailCards.map((card) => (
                <article key={card.title} className="route-card">
                  <div className="route-card-bar"></div>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          )}

          {pillars.length > 0 && (
            <section className="route-pillars">
              <div className="section-header">
                <span className="section-label">Key Focus</span>
                <h2 className="section-h2">Built Around The Work That Matters</h2>
              </div>
              <div className="route-pillar-grid">
                {pillars.map((pillar) => (
                  <div key={pillar} className="route-pillar">
                    <span className="route-pillar-count"></span>
                    <p>{pillar}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="route-cta">
            <div>
              <span className="section-label">Next Step</span>
              <h2>{ctaTitle}</h2>
              <p>{ctaText}</p>
            </div>
            <div className="route-cta-actions">
              <Link href="/contact" className="btn-primary">Contact Us</Link>
              <Link href="/account" className="btn-outline-blue">Account</Link>
            </div>
          </section>

          {relatedLinks.length > 0 && (
            <section className="route-related">
              <div className="section-header">
                <span className="section-label">Explore More</span>
                <h2 className="section-h2">Related Pages</h2>
              </div>
              <div className="route-related-grid">
                {relatedLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="route-related-card">
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                    <span>Open Page</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  );
}
