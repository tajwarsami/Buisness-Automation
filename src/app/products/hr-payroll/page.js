import { HrPayrollPage as HrPayrollContent } from '@/components/products/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function HrPayrollPage() {
  return <HrPayrollContent relatedLinks={getRelatedLinks('/products', 'hr-payroll')} />;
}
