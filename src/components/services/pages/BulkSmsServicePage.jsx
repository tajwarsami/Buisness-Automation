import ServicePage from '../ServicePage';
import { bulkSmsServiceData } from '../data';

export default function BulkSmsServicePage({ relatedLinks = [] }) {
  return <ServicePage data={bulkSmsServiceData} relatedLinks={relatedLinks} />;
}
