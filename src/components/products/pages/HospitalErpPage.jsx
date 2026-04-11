import ProductPage from '../ProductPage';
import { hospitalErpData } from '../data';

export default function HospitalErpPage({ relatedLinks = [] }) {
  return <ProductPage data={hospitalErpData} relatedLinks={relatedLinks} />;
}
