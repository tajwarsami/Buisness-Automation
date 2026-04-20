import Link from 'next/link';
import PageHero from './PageHero';

export default function LegalDocumentPage({
  title,
  summary,
  effectiveLabel,
  sections = [],
  contacts = [],
}) {
  return (
    <div className="legal-page">
      <PageHero title={title} subtitle={summary} theme="blue" compact />

      <section className="legal-section">
        <div className="container legal-shell">
          {effectiveLabel && <p className="legal-effective">{effectiveLabel}</p>}

          {sections.map((section) => (
            <section key={section.heading} className="legal-block">
              <h2 className="legal-heading">{section.heading}</h2>

              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="legal-paragraph">{paragraph}</p>
              ))}

              {section.items?.length > 0 && (
                <ul className="legal-list">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}

              {section.links?.length > 0 && (
                <ul className="legal-list">
                  {section.links.map((item) => (
                    <li key={item.href}>
                      <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {contacts.length > 0 && (
            <section className="legal-contact-card">
              <h2 className="legal-heading">Technical Support</h2>
              {contacts.map((line) => (
                <p key={line} className="legal-contact-line">{line}</p>
              ))}
            </section>
          )}
        </div>
      </section>
    </div>
  );
}
