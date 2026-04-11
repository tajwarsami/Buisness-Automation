import {
  ABOUT_DETAIL_PAGES,
  ABOUT_SUBPAGES,
  CLIENT_PAGE,
  PRODUCT_PAGES,
  RESOURCE_SUBPAGES,
  SERVICE_SUBPAGES,
  TOP_LEVEL_PAGES,
  getChildLinks,
} from '@/data/siteContent';
import {
  accountingSolutionData,
  dynamicAcademicErpData,
  dynamicAmsData,
  hospitalErpData,
  hrPayrollData,
  smsSystemData,
} from '@/components/products/data';
import {
  AccountingSolutionPage,
  DynamicAcademicErpPage,
  DynamicAmsPage,
  HospitalErpPage,
  HrPayrollPage,
  SmsSystemPage,
} from '@/components/products/pages';
import {
  bulkSmsServiceData,
  domainHostingData,
  mobileAppDevelopmentData,
  softwareDevelopmentData,
  webAppDevelopmentData,
} from '@/components/services/data';
import {
  BulkSmsServicePage,
  DomainHostingPage,
  MobileAppDevelopmentPage,
  SoftwareDevelopmentPage,
  WebApplicationDevelopmentPage,
} from '@/components/services/pages';

export const topLevelPageKeys = {
  about: 'about',
  products: 'products',
  services: 'services',
  resources: 'resources',
  'our-client': 'ourClient',
  contact: 'contact',
  account: 'account',
};

export const aboutSlugs = Object.keys(ABOUT_SUBPAGES);
export const productSlugs = Object.keys(PRODUCT_PAGES);
export const serviceSlugs = Object.keys(SERVICE_SUBPAGES);
export const resourceSlugs = Object.keys(RESOURCE_SUBPAGES);

export const productComponentData = {
  'dynamic-academic-erp': dynamicAcademicErpData,
  'hospital-erp': hospitalErpData,
  'accounting-solution': accountingSolutionData,
  'hr-payroll': hrPayrollData,
  'sms-system': smsSystemData,
  'dynamic-ams': dynamicAmsData,
};

export const productPageComponents = {
  'dynamic-academic-erp': DynamicAcademicErpPage,
  'hospital-erp': HospitalErpPage,
  'accounting-solution': AccountingSolutionPage,
  'hr-payroll': HrPayrollPage,
  'sms-system': SmsSystemPage,
  'dynamic-ams': DynamicAmsPage,
};

export const serviceComponentData = {
  'software-development': softwareDevelopmentData,
  'mobile-app-development': mobileAppDevelopmentData,
  'web-application-development': webAppDevelopmentData,
  'bulk-sms-service': bulkSmsServiceData,
  'domain-registration-web-hosting': domainHostingData,
};

export const servicePageComponents = {
  'software-development': SoftwareDevelopmentPage,
  'mobile-app-development': MobileAppDevelopmentPage,
  'web-application-development': WebApplicationDevelopmentPage,
  'bulk-sms-service': BulkSmsServicePage,
  'domain-registration-web-hosting': DomainHostingPage,
};

export function getTopLevelPage(slug) {
  const key = topLevelPageKeys[slug];
  return key ? TOP_LEVEL_PAGES[key] : null;
}

export function getAboutPage(slug) {
  return ABOUT_SUBPAGES[slug] ?? null;
}

export function getAboutDetailPage(slug) {
  return ABOUT_DETAIL_PAGES[slug] ?? null;
}

export function getProductPage(slug) {
  return PRODUCT_PAGES[slug] ?? null;
}

export function getServicePage(slug) {
  return SERVICE_SUBPAGES[slug] ?? null;
}

export function getResourcePage(slug) {
  return RESOURCE_SUBPAGES[slug] ?? null;
}

export function getRelatedLinks(parentHref, currentSlug) {
  return getChildLinks(parentHref).filter((item) => !item.href.endsWith(`/${currentSlug}`));
}

export function getClientPageBadges() {
  return CLIENT_PAGE.spotlight.map((item) => item.title);
}
