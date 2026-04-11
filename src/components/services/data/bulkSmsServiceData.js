export const bulkSmsServiceData = {
  slug: 'bulk-sms-service',
  hero: {
    eyebrow: 'Services · Bulk SMS Service',
    title: 'Bulk SMS Service',
    subtitle:
      'Managed messaging infrastructure for promotional campaigns, operational alerts, customer notifications, and scheduled communication at scale.',
    badges: ['High Delivery Rate', 'Campaign Support', 'Managed Service'],
    color: 'purple',
    icon: '📨',
  },
  intro: {
    heading: 'Messaging that reaches people when it matters',
    paragraphs: [
      'The Bulk SMS Service is a managed communication service for organizations that need dependable, large-volume outbound messaging as part of their operational or marketing workflow.',
      "Whether you're running a one-time campaign or setting up recurring operational alerts, we provision, manage, and support the messaging infrastructure so your team can focus on the message itself.",
    ],
  },
  process: [
    { step: '01', title: 'Account Setup', description: 'We configure your sender IDs, contact lists, and messaging environment.' },
    { step: '02', title: 'Campaign Planning', description: 'Define target audience, message content, timing, and delivery windows.' },
    { step: '03', title: 'Message Creation', description: 'Template building with personalization variables and compliance checks.' },
    { step: '04', title: 'Scheduling & Dispatch', description: 'Queue messages for immediate or time-based sending to full or segmented lists.' },
    { step: '05', title: 'Delivery Monitoring', description: 'Real-time status updates showing delivery, failure, and pending counts.' },
    { step: '06', title: 'Reporting', description: 'Campaign summary reports with delivery rates and recommendation for optimization.' },
  ],
  features: [
    { icon: '📋', title: 'Contact Management', text: 'Upload and segment contact lists by group, attribute, or import from your system.' },
    { icon: '⏰', title: 'Scheduling', text: 'Set exact dispatch times, recurring sends, and time-zone-aware delivery.' },
    { icon: '✍️', title: 'Message Templates', text: 'Save reusable templates with merge fields for personalized bulk sends.' },
    { icon: '📊', title: 'Delivery Reports', text: 'Per-campaign and aggregate visibility into what reached recipients and what failed.' },
    { icon: '🔗', title: 'API Access', text: 'Trigger automated sends directly from your business system or application.' },
    { icon: '🛡️', title: 'Compliance', text: 'Opt-out handling, DND filtering, and operator-level compliance for legitimate messaging.' },
  ],
  useCases: [
    'Schools and colleges sending fee reminders, event notices, and result alerts.',
    'Healthcare providers notifying patients about appointments and medications.',
    'Businesses running seasonal promotions and loyalty campaigns.',
    'Organizations sending automated system-triggered transactional alerts.',
    'NGOs and associations communicating time-sensitive information to members.',
  ],
  cta: {
    heading: 'Ready to scale your communication?',
    text: 'Tell us your volume, audience, and message type — we will set up the right messaging infrastructure for you.',
  },
};
