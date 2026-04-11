import { HospitalErpPage as HospitalErpContent } from '@/components/products/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function HospitalErpPage() {
  return <HospitalErpContent relatedLinks={getRelatedLinks('/products', 'hospital-erp')} />;
}
