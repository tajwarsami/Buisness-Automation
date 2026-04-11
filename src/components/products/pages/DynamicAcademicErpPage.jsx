import ProductPage from '../ProductPage';
import { dynamicAcademicErpData } from '../data';

export default function DynamicAcademicErpPage({ relatedLinks = [] }) {
  return <ProductPage data={dynamicAcademicErpData} relatedLinks={relatedLinks} />;
}
