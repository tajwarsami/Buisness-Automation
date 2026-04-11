import ServicePage from '../ServicePage';
import { mobileAppDevelopmentData } from '../data';

export default function MobileAppDevelopmentPage({ relatedLinks = [] }) {
  return <ServicePage data={mobileAppDevelopmentData} relatedLinks={relatedLinks} />;
}
