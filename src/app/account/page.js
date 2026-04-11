import RoutePageTemplate from '@/components/RoutePageTemplate';
import { getTopLevelPage } from '@/lib/routeData';

export default function AccountPage() {
  const page = getTopLevelPage('account');

  return <RoutePageTemplate {...page} relatedLinks={[]} badgeItems={page.highlights} />;
}
