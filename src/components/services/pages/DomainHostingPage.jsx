import ServicePage from '../ServicePage';
import { domainHostingData } from '../data';

export default function DomainHostingPage({ relatedLinks = [] }) {
  return <ServicePage data={domainHostingData} relatedLinks={relatedLinks} />;
}
