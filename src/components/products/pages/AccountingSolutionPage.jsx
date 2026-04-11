import ProductPage from '../ProductPage';
import { accountingSolutionData } from '../data';

export default function AccountingSolutionPage({ relatedLinks = [] }) {
  return <ProductPage data={accountingSolutionData} relatedLinks={relatedLinks} />;
}
