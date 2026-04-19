import StaticInfoPage from '@/components/StaticInfoPage';

export const metadata = {
  title: 'Terms & Conditions — Automate IT Limited',
  description: 'Review the general terms and conditions presented by Automate IT Limited.',
};

export default function TermsPage() {
  return (
    <StaticInfoPage
      title="Terms & Conditions"
      eyebrow="Legal / Terms & Conditions"
      summary="General usage terms covering website access, inquiry submission, service communication, and business engagement expectations."
      introTitle="Clear expectations help build better working relationships"
      introText={[
        'These terms provide a general framework for using our website and interacting with our team through product, service, and support inquiries.',
        'Specific project agreements, commercial proposals, and implementation documents may include additional terms relevant to the engagement.',
      ]}
      highlights={['Website and inquiry usage', 'Communication expectations', 'Project-specific agreements where applicable']}
      pillars={['Clarity', 'Respectful use', 'Commercial alignment', 'Defined engagement']}
      ctaTitle="Need help with a commercial or service question?"
      ctaText="Our team can clarify the next step for proposals, onboarding, and project-specific documentation."
    />
  );
}
