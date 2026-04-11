import { notFound } from 'next/navigation';

import { getRelatedLinks, getServicePage, serviceComponentData, servicePageComponents, serviceSlugs } from '@/lib/routeData';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServiceSubpage({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const data = serviceComponentData[slug];
  const PageComponent = servicePageComponents[slug];

  if (!page || !data || !PageComponent) {
    notFound();
  }

  return <PageComponent relatedLinks={getRelatedLinks('/services', slug)} />;
}
