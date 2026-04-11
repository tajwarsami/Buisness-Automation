import { notFound } from 'next/navigation';

import { getProductPage, getRelatedLinks, productComponentData, productPageComponents, productSlugs } from '@/lib/routeData';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export default async function ProductSubpage({ params }) {
  const { slug } = await params;
  const page = getProductPage(slug);
  const data = productComponentData[slug];
  const PageComponent = productPageComponents[slug];

  if (!page || !data || !PageComponent) {
    notFound();
  }

  return <PageComponent relatedLinks={getRelatedLinks('/products', slug)} />;
}
