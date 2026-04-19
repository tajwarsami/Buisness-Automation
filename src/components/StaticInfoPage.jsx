import RoutePageTemplate from './RoutePageTemplate';

export default function StaticInfoPage({ title, eyebrow, summary, introTitle, introText, highlights, pillars, ctaTitle, ctaText }) {
  return (
    <RoutePageTemplate
      title={title}
      eyebrow={eyebrow}
      summary={summary}
      introTitle={introTitle}
      introText={introText}
      highlights={highlights}
      pillars={pillars}
      ctaTitle={ctaTitle}
      ctaText={ctaText}
    />
  );
}
