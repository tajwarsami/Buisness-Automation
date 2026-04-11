import { SmsSystemPage as SmsSystemContent } from '@/components/products/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function SmsSystemPage() {
  return <SmsSystemContent relatedLinks={getRelatedLinks('/products', 'sms-system')} />;
}
