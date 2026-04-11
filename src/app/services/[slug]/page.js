import { notFound } from 'next/navigation';

import ServicePage from '@/components/services/ServicePage';
import { getRelatedLinks, getServicePage, serviceComponentData, serviceSlugs } from '@/lib/routeData';

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export default async function ServiceSubpage({ params }) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const data = serviceComponentData[slug];

  if (!page || !data) {
    notFound();
  }

  return <ServicePage data={data} relatedLinks={getRelatedLinks('/services', slug)} />;
}
