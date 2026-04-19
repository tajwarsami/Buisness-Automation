import StaticInfoPage from '@/components/StaticInfoPage';

export const metadata = {
  title: 'Privacy Policy — Automate IT Limited',
  description: 'Read the privacy and data handling overview for Automate IT Limited.',
};

export default function PrivacyPolicyPage() {
  return (
    <StaticInfoPage
      title="Privacy Policy"
      eyebrow="Legal / Privacy Policy"
      summary="An overview of how Automate IT Limited approaches information handling, service communication, and responsible data use."
      introTitle="Privacy handled with clarity and responsibility"
      introText={[
        'This page provides a simple policy overview covering the types of information we collect, how it may be used, and how communication preferences are respected.',
        'For product-specific or support-related questions, our team can provide additional guidance through the contact page.',
      ]}
      highlights={['Inquiry and communication data', 'Support and service-related records', 'Reasonable safeguards and limited use']}
      pillars={['Transparency', 'Purpose limitation', 'Responsible handling', 'Support access']}
      ctaTitle="Need clarification about privacy or data handling?"
      ctaText="Reach out to our team and we will help route your question to the appropriate contact."
    />
  );
}
