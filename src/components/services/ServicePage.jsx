import Link from 'next/link';
import PageHero from '../PageHero';

/* ─── Process step ─── */
function ProcessStep({ step, title, description }) {
  return (
    <div className="svc-step">
      <div className="svc-step-num">{step}</div>
      <div className="svc-step-body">
        <h4 className="svc-step-title">{title}</h4>
        <p className="svc-step-desc">{description}</p>
      </div>
    </div>
  );
}

/* ─── Tech pill ─── */
function TechPill({ tech }) {
  return <span className="svc-tech-pill">{tech}</span>;
}

/* ─── Feature / Highlight card ─── */
function FeatureCard({ icon, title, text }) {
  return (
    <div className="svc-feature-card">
      <div className="svc-feature-icon">{icon}</div>
      <h4 className="svc-feature-title">{title}</h4>
      <p className="svc-feature-text">{text}</p>
    </div>
  );
}

/* ─── Use case item ─── */
function UseCaseItem({ text }) {
  return (
    <li className="svc-usecase-item">
      <span className="svc-usecase-bullet" />
      <span>{text}</span>
    </li>
  );
}

/**
 * Shared service page component.
 * data: one of the exports from servicesData.js
 * relatedLinks: array of {label, href, description}
 */
export default function ServicePage({ data, relatedLinks = [] }) {
  const { hero, intro, process, useCases, cta } = data;
  const features = data.features || data.highlights || [];
  const techStack = data.techStack || null;
  const colorClass = `svc-color-${hero.color || 'blue'}`;

  return (
    <div className={`svc-page ${colorClass}`}>

      {/* ── Hero ── */}
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        badges={hero.badges}
        theme="teal"
      >
        <div className="ph-page-actions">
          <Link href="/contact" className="ph-btn-primary">Start a Conversation</Link>
          <Link href="/services" className="ph-btn-ghost">All Services</Link>
        </div>
      </PageHero>

      {/* ── Intro ── */}
      <section className="svc-section svc-intro-section">
        <div className="container">
          <div className="svc-intro-grid">
            <div className="svc-intro-copy">
              <span className="svc-section-label">What This Service Involves</span>
              <h2 className="svc-section-h2">{intro.heading}</h2>
              {intro.paragraphs.map((p) => (
                <p key={p.slice(0, 30)} className="svc-intro-p">{p}</p>
              ))}
            </div>
            <div className="svc-intro-flow-card">
              <div className="svc-intro-flow-bar" />
              <div className="svc-intro-flow-content">
                <span className="svc-intro-flow-label">Smooth Delivery</span>
                <h3>Clear planning, practical execution, and long-term support.</h3>
                <p>
                  Our service pages now use a cleaner presentation that keeps the focus on the service itself
                  instead of decorative stat boxes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="svc-section svc-process-section">
        <div className="container">
          <div className="svc-section-header">
            <span className="svc-section-label">How It Works</span>
            <h2 className="svc-section-h2">Our Delivery Process</h2>
          </div>
          <div className="svc-process-track">
            {process.map((step, i) => (
              <ProcessStep key={step.step} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Features / Highlights ── */}
      {features.length > 0 && (
        <section className="svc-section svc-features-section">
          <div className="container">
            <div className="svc-section-header svc-section-header-light">
              <span className="svc-section-label-light">Key Strengths</span>
              <h2 className="svc-section-h2-light">What Makes Our Approach Different</h2>
            </div>
            <div className="svc-features-grid">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Tech Stack ── */}
      {techStack && (
        <section className="svc-section svc-tech-section">
          <div className="container">
            <div className="svc-section-header">
              <span className="svc-section-label">Technologies</span>
              <h2 className="svc-section-h2">Tools & Technologies We Use</h2>
            </div>
            <div className="svc-tech-grid">
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="svc-tech-category">
                  <h4 className="svc-tech-cat-title">{category.replace(/([A-Z])/g, ' $1').trim()}</h4>
                  <div className="svc-tech-pills">
                    {items.map((t) => <TechPill key={t} tech={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Use Cases ── */}
      <section className="svc-section svc-usecases-section">
        <div className="container svc-usecases-inner">
          <div className="svc-usecases-copy">
            <span className="svc-section-label">Common Scenarios</span>
            <h2 className="svc-section-h2">Who Uses This Service</h2>
            <ul className="svc-usecase-list">
              {useCases.map((uc) => (
                <UseCaseItem key={uc.slice(0, 30)} text={uc} />
              ))}
            </ul>
          </div>
          <div className="svc-usecases-visual" aria-hidden="true">
            <div className="svc-uv-window">
              <div className="svc-uv-titlebar">
                <div className="svc-uv-controls">
                  <span /><span /><span />
                </div>
              </div>
              <div className="svc-uv-content">
                <div className="svc-uv-row svc-uv-row-lg" />
                <div className="svc-uv-row svc-uv-row-md" />
                <div className="svc-uv-row svc-uv-row-sm" />
                <div className="svc-uv-row svc-uv-row-lg" />
                <div className="svc-uv-row svc-uv-row-xs" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      {relatedLinks.length > 0 && (
        <section className="svc-section svc-related-section">
          <div className="container">
            <div className="svc-section-header">
              <span className="svc-section-label">Explore More</span>
              <h2 className="svc-section-h2">Other Services</h2>
            </div>
            <div className="svc-related-grid">
              {relatedLinks.map((item) => (
                <Link key={item.href} href={item.href} className="svc-related-card">
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
      <section className="svc-cta-section">
        <div className="container svc-cta-inner">
          <div className="svc-cta-copy">
            <h2 className="svc-cta-heading">{cta.heading}</h2>
            <p className="svc-cta-text">{cta.text}</p>
          </div>
          <div className="svc-cta-actions">
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
            <Link href="/contact" className="btn-outline-blue">Get a Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
