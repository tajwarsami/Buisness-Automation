export const smsSystemData = {
  slug: 'sms-system',
  hero: {
    title: 'Bulk SMS System',
    subtitle: 'Reliable communication platform for mass messaging.',
    color: 'teal',
  },
  intro: {
    label: 'Product Overview',
    title: 'A mass messaging platform built for speed, reliability, and operational communication',
    paragraphs: [
      'Bulk SMS System is designed for organizations that need a fast and dependable way to communicate with large audiences. Whether the goal is promotional outreach, urgent updates, customer reminders, or routine notice delivery, the platform helps teams manage communication from one organized source.',
      'It combines speed, reach, and reporting visibility so businesses can use messaging as a practical part of their operations instead of an isolated tool. This makes the system especially useful for teams that value direct communication and scalable audience engagement.',
    ],
  },
  topology: {
    variant: 'broadcast',
    centerLabel: 'SMS Engine',
    nodes: ['Alerts', 'Campaigns', 'Reports', 'Coverage'],
  },
  modules: [
    { icon: 'broadcast', name: 'Bulk SMS Service', description: 'Bulk SMS Service allows organizations to send large-scale campaigns, alerts, reminders, and promotional messages quickly from one platform. It supports high-volume communication while keeping message delivery more organized and easier to monitor. Businesses can reach customers faster without relying on slower or more expensive outreach channels. This makes communication more efficient, scalable, and dependable for both marketing and operations.', connectionStyle: 'Broadcast Topology' },
  ],
  benefitCards: [
    { title: 'Fast Delivery', description: 'Messages are sent quickly for urgent alerts and time-sensitive campaigns.' },
    { title: 'Wide Coverage', description: 'Reach broad audiences across locations with a single communication workflow.' },
    { title: 'Delivery Reports', description: 'Track sending status and communication outcomes with clear reporting visibility.' },
    { title: 'Secure Messaging', description: 'Maintain dependable message handling for operational and promotional communication.' },
    { title: 'Cost Effective', description: 'Scale outreach without the overhead of more expensive communication channels.' },
  ],
};
