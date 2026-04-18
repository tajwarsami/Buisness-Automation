/**
 * PageHero — Universal hero banner used on every submenu / top-level page.
 *
 * Props:
 *   eyebrow     {string}   – small label above the title
 *   title       {string}   – main h1 text
 *   titleAccent {string}   – optional word(s) to render in gradient accent colour
 *   subtitle    {string}   – paragraph below title
 *   badges      {string[]} – pill badges
 *   stats       [{value, label}] – optional stat cards on the right
 *   theme       {string}   – 'blue'|'teal'|'violet'|'rose'|'amber'|'navy' (default 'blue')
 *   children    – extra content rendered below the text block
 */
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  badges = [],
  stats = [],
  theme = 'blue',
  children,
}) {
  /* Build the h1 with optional accent split */
  let titleNode;
  if (titleAccent && title.includes(titleAccent)) {
    const parts = title.split(titleAccent);
    titleNode = (
      <h1 className="ph-title">
        {parts[0]}
        <span className="ph-title-accent">{titleAccent}</span>
        {parts[1]}
      </h1>
    );
  } else {
    titleNode = <h1 className="ph-title">{title}</h1>;
  }

  return (
    <section className={`ph-hero ph-theme-${theme}`}>
      {/* ── Decorative background ── */}
      <div className="ph-bg" aria-hidden="true">
        <div className="ph-orb ph-orb-a" />
        <div className="ph-orb ph-orb-b" />
        <div className="ph-grid" />
        <div className="ph-dots" />
      </div>

      {/* ── Content ── */}
      <div className="container ph-inner">
        <div className="ph-left">
          {eyebrow && (
            <span className="ph-eyebrow">
              <span className="ph-eyebrow-pip" />
              {eyebrow}
            </span>
          )}
          {titleNode}
          {subtitle && <p className="ph-subtitle">{subtitle}</p>}
          {badges.length > 0 && (
            <div className="ph-badges">
              {badges.map((b) => (
                <span key={b} className="ph-badge">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {b}
                </span>
              ))}
            </div>
          )}
          {children}
        </div>

        {stats.length > 0 && (
          <div className="ph-stats">
            {stats.map((s) => (
              <div key={s.label} className="ph-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Wave divider ── */}
      <div className="ph-wave-wrap" aria-hidden="true">
        <svg
          className="ph-wave"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,20 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
          <path
            d="M0,55 C200,20 400,70 600,45 C800,20 1000,65 1200,50 C1350,38 1440,55 1440,55 L1440,80 L0,80 Z"
            fill="rgba(255,255,255,0.35)"
          />
        </svg>
      </div>
    </section>
  );
}
