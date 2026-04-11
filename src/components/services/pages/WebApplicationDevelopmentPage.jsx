import ServicePage from '../ServicePage';
import { webAppDevelopmentData } from '../data';

export default function WebApplicationDevelopmentPage({ relatedLinks = [] }) {
  return <ServicePage data={webAppDevelopmentData} relatedLinks={relatedLinks} />;
}
