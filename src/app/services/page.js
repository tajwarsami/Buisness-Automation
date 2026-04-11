import RoutePageTemplate from '@/components/RoutePageTemplate';
import { getTopLevelPage, getRelatedLinks } from '@/lib/routeData';

export default function ServicesPage() {
  const page = getTopLevelPage('services');

  return (
    <RoutePageTemplate
      {...page}
      relatedLinks={getRelatedLinks('/services')}
      badgeItems={page.highlights}
    />
  );
}
