import ServicePage from '../ServicePage';
import { softwareDevelopmentData } from '../data';

export default function SoftwareDevelopmentPage({ relatedLinks = [] }) {
  return <ServicePage data={softwareDevelopmentData} relatedLinks={relatedLinks} />;
}
