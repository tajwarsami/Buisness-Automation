import { notFound } from 'next/navigation';

import ProductPage from '@/components/products/ProductPage';
import { getProductPage, getRelatedLinks, productComponentData, productSlugs } from '@/lib/routeData';

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export default async function ProductSubpage({ params }) {
  const { slug } = await params;
  const page = getProductPage(slug);
  const data = productComponentData[slug];

  if (!page || !data) {
    notFound();
  }

  return <ProductPage data={data} relatedLinks={getRelatedLinks('/products', slug)} />;
}
