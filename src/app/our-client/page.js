import RoutePageTemplate from '@/components/RoutePageTemplate';
import { getClientPageBadges, getTopLevelPage } from '@/lib/routeData';

export default function OurClientPage() {
  const page = getTopLevelPage('our-client');

  return <RoutePageTemplate {...page} relatedLinks={[]} badgeItems={getClientPageBadges()} />;
}
