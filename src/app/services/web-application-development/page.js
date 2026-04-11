import { WebApplicationDevelopmentPage as WebApplicationDevelopmentContent } from '@/components/services/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function WebApplicationDevelopmentPage() {
  return <WebApplicationDevelopmentContent relatedLinks={getRelatedLinks('/services', 'web-application-development')} />;
}
