import ProductPage from '../ProductPage';
import { hrPayrollData } from '../data';

export default function HrPayrollPage({ relatedLinks = [] }) {
  return <ProductPage data={hrPayrollData} relatedLinks={relatedLinks} />;
}
