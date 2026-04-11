import { DynamicAcademicErpPage as DynamicAcademicErpContent } from '@/components/products/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function DynamicAcademicErpPage() {
  return <DynamicAcademicErpContent relatedLinks={getRelatedLinks('/products', 'dynamic-academic-erp')} />;
}
