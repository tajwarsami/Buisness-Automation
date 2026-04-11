import { DomainHostingPage as DomainHostingContent } from '@/components/services/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function DomainRegistrationWebHostingPage() {
  return <DomainHostingContent relatedLinks={getRelatedLinks('/services', 'domain-registration-web-hosting')} />;
}
