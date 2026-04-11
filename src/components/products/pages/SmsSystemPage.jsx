import ProductPage from '../ProductPage';
import { smsSystemData } from '../data';

export default function SmsSystemPage({ relatedLinks = [] }) {
  return <ProductPage data={smsSystemData} relatedLinks={relatedLinks} />;
}
