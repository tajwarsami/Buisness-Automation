import RoutePageTemplate from '@/components/RoutePageTemplate';
import { getTopLevelPage } from '@/lib/routeData';

export default function ContactPage() {
  const page = getTopLevelPage('contact');

  return <RoutePageTemplate {...page} relatedLinks={[]} badgeItems={page.highlights} />;
}
