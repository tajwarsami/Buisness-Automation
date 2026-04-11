import RoutePageTemplate from '@/components/RoutePageTemplate';
import { getTopLevelPage, getRelatedLinks } from '@/lib/routeData';

export default function ResourcesPage() {
  const page = getTopLevelPage('resources');

  return (
    <RoutePageTemplate
      {...page}
      relatedLinks={getRelatedLinks('/resources')}
      badgeItems={page.highlights}
    />
  );
}
