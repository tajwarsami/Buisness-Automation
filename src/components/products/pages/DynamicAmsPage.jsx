import ProductPage from '../ProductPage';
import { dynamicAmsData } from '../data';

export default function DynamicAmsPage({ relatedLinks = [] }) {
  return <ProductPage data={dynamicAmsData} relatedLinks={relatedLinks} />;
}
