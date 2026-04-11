import { AccountingSolutionPage as AccountingSolutionContent } from '@/components/products/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function AccountingSolutionPage() {
  return <AccountingSolutionContent relatedLinks={getRelatedLinks('/products', 'accounting-solution')} />;
}
