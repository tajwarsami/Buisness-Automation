import { DynamicAmsPage as DynamicAmsContent } from '@/components/products/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function DynamicAmsPage() {
  return <DynamicAmsContent relatedLinks={getRelatedLinks('/products', 'dynamic-ams')} />;
}
