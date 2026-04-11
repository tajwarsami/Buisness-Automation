import { BulkSmsServicePage as BulkSmsServiceContent } from '@/components/services/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function BulkSmsServicePage() {
  return <BulkSmsServiceContent relatedLinks={getRelatedLinks('/services', 'bulk-sms-service')} />;
}
