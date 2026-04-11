import { notFound } from 'next/navigation';

import AboutDetailPage from '@/components/about/AboutDetailPage';
import RoutePageTemplate from '@/components/RoutePageTemplate';
import { aboutSlugs, getAboutDetailPage, getAboutPage, getRelatedLinks } from '@/lib/routeData';

export function generateStaticParams() {
  return aboutSlugs.map((slug) => ({ slug }));
}

export default async function AboutSubpage({ params }) {
  const { slug } = await params;
  const page = getAboutPage(slug);
  const detailPage = getAboutDetailPage(slug);

  if (!page) {
    notFound();
  }

  if (detailPage) {
    return <AboutDetailPage page={detailPage} relatedLinks={getRelatedLinks('/about', slug)} />;
  }

  return (
    <RoutePageTemplate
      {...page}
      relatedLinks={getRelatedLinks('/about', slug)}
      badgeItems={page.highlights}
    />
  );
}
