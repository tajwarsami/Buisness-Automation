import { SoftwareDevelopmentPage as SoftwareDevelopmentContent } from '@/components/services/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function SoftwareDevelopmentPage() {
  return <SoftwareDevelopmentContent relatedLinks={getRelatedLinks('/services', 'software-development')} />;
}
