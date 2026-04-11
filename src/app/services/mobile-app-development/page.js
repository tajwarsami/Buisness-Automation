import { MobileAppDevelopmentPage as MobileAppDevelopmentContent } from '@/components/services/pages';
import { getRelatedLinks } from '@/lib/routeData';

export default function MobileAppDevelopmentPage() {
  return <MobileAppDevelopmentContent relatedLinks={getRelatedLinks('/services', 'mobile-app-development')} />;
}
