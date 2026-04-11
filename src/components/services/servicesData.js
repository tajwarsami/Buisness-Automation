// ─────────────────────────────────────────────
//  Services – All Pages Data
//  Each service has its own named export.
//  Replace placeholder values with real content.
// ─────────────────────────────────────────────

export const softwareDevelopmentData = {
  slug: 'software-development',
  hero: {
    eyebrow: 'Services · Software Development',
    title: 'Software Development',
    subtitle:
      'Custom business software that reflects how your organization actually works — designed around your workflow, built for reliability, and supported long after launch.',
    badges: ['Custom Build', 'Workflow First', 'Post-Launch Support'],
    color: 'blue',
    icon: '💻',
  },
  intro: {
    heading: 'Software built around your real-world process',
    paragraphs: [
      "We develop business software for organizations that need something that fits their exact process — not an off-the-shelf solution that requires adapting your team to someone else's logic.",
      'Our approach starts with deep requirement understanding, then moves to architecture design, phased development, user testing, and a post-launch support model that stays active.',
    ],
  },
  process: [
    { step: '01', title: 'Discovery', description: 'We map your workflows, constraints, user roles, and data requirements before writing a single line of code.' },
    { step: '02', title: 'Architecture', description: 'We design a system structure that is maintainable, scalable, and appropriate for your technical environment.' },
    { step: '03', title: 'Development', description: 'Phased builds with regular review cycles keep the project visible and adaptable throughout delivery.' },
    { step: '04', title: 'Testing & QA', description: 'Structured testing ensures the system performs reliably across all expected user scenarios.' },
    { step: '05', title: 'Deployment', description: 'We manage a smooth production launch with rollback readiness and stakeholder communication.' },
    { step: '06', title: 'Support', description: 'Post-launch support covers issue resolution, change requests, and continuous improvement.' },
  ],
  techStack: {
    backend: ['PHP / Laravel', 'Node.js', 'Python', 'REST APIs', 'MySQL / PostgreSQL'],
    frontend: ['React / Next.js', 'Vue.js', 'HTML5 / CSS3', 'JavaScript / TypeScript'],
    infrastructure: ['Linux Servers', 'Nginx / Apache', 'Docker', 'Git / CI Pipelines'],
    tools: ['Postman', 'Figma', 'Jira', 'PHPUnit / Jest'],
  },
  useCases: [
    'Business process automation for operations, sales, or HR departments.',
    'Internal tools and dashboards for data management and reporting.',
    'Custom CRM or ERP modules extending an existing platform.',
    'Workflow systems for approval chains, document routing, or task management.',
    'Integration middleware connecting disparate systems and databases.',
  ],
  highlights: [
    { icon: '🎯', title: 'Requirement-Led', text: 'We spend time understanding before we start building — ensuring scope is accurate and deliverables are useful.' },
    { icon: '🔄', title: 'Iterative Delivery', text: 'Phased releases keep stakeholders informed and allow course corrections without costly rework.' },
    { icon: '🛡️', title: 'Quality Focus', text: 'Testing is integrated throughout delivery, not bolted on at the end.' },
    { icon: '📞', title: 'Accountable After Launch', text: 'We remain engaged post-deployment with support SLAs and change request handling.' },
  ],
  cta: {
    heading: 'Have a business process that needs a custom solution?',
    text: 'We can scope a practical build based on your current operations, team size, and delivery timeline.',
  },
};

export const mobileAppDevelopmentData = {
  slug: 'mobile-app-development',
  hero: {
    eyebrow: 'Services · Mobile App Development',
    title: 'Mobile App Development',
    subtitle:
      'Android and iOS experiences designed around what your users actually need to do — connected to your systems, built for real devices, and maintained after launch.',
    badges: ['Android & iOS', 'API-Connected', 'User-Centered Design'],
    color: 'green',
    icon: '📱',
  },
  intro: {
    heading: 'Mobile applications designed for daily use',
    paragraphs: [
      'We design and develop mobile applications for organizations that need a credible, usable presence on smartphones — whether for field workers, customers, members, or students.',
      'Every mobile project starts with user journey mapping to ensure the app solves real problems efficiently on a small screen.',
    ],
  },
  process: [
    { step: '01', title: 'User Journey Mapping', description: 'We identify what users need to accomplish on mobile and design flows that respect their context and time.' },
    { step: '02', title: 'UI/UX Design', description: 'Wireframes and high-fidelity designs that feel native, clear, and aligned with your brand.' },
    { step: '03', title: 'API Planning', description: 'We define how the mobile app connects to your backend systems and data sources.' },
    { step: '04', title: 'Development', description: 'Android and iOS development using modern frameworks with shared logic where appropriate.' },
    { step: '05', title: 'Testing', description: 'Device-specific testing, performance checks, and user acceptance validation before release.' },
    { step: '06', title: 'Publishing & Support', description: 'Play Store / App Store submission, versioning, and post-launch bug support.' },
  ],
  techStack: {
    android: ['Android / Kotlin', 'Java', 'Android Studio'],
    ios: ['Swift', 'Xcode', 'UIKit / SwiftUI'],
    crossPlatform: ['Flutter', 'React Native'],
    backend: ['REST APIs', 'Firebase', 'Node.js', 'Laravel'],
    tools: ['Figma', 'Postman', 'Git', 'Firebase Analytics'],
  },
  useCases: [
    'Student and parent apps connecting to school or college systems.',
    'Field service apps for technicians, sales reps, or delivery staff.',
    'Patient-facing apps for appointments, reports, or health tracking.',
    'Member apps for associations providing digital ID, events, and news.',
    'Companion apps extending existing web platforms to mobile users.',
  ],
  highlights: [
    { icon: '🎨', title: 'Designed for Mobile', text: 'Native-feeling UI patterns and interaction models rather than shrunken desktop interfaces.' },
    { icon: '🔗', title: 'Backend Connected', text: 'Real-time data sync with your existing systems ensures the app stays accurate.' },
    { icon: '⚡', title: 'Performance-Oriented', text: 'We optimize for fast load, smooth transitions, and offline state handling.' },
    { icon: '📊', title: 'Analytics Ready', text: 'Usage tracking and crash monitoring are built in from day one.' },
  ],
  cta: {
    heading: 'Thinking about a mobile product for your users?',
    text: 'We can help define the right mobile scope, platform choice, and integration approach based on your audience and goals.',
  },
};

export const webAppDevelopmentData = {
  slug: 'web-application-development',
  hero: {
    eyebrow: 'Services · Web Application Development',
    title: 'Web Application Development',
    subtitle:
      'Browser-based business applications — dashboards, portals, management tools, and process platforms — built to be responsive, reliable, and easy to use across teams.',
    badges: ['Responsive Design', 'Scalable Architecture', 'Dashboard & Portals'],
    color: 'amber',
    icon: '🌐',
  },
  intro: {
    heading: 'Web applications that work for your team every day',
    paragraphs: [
      'We develop web applications for organizations that need browser-based tools for internal operations, client-facing portals, or process automation — without the complexity of native apps.',
      'The focus is on usability, page performance, and maintainability so the system keeps working well as your team grows and requirements evolve.',
    ],
  },
  process: [
    { step: '01', title: 'Requirements Definition', description: 'We document user roles, key workflows, data structure, and access control needs.' },
    { step: '02', title: 'UX & Wireframing', description: 'Navigation, layout, and interaction design aligned with the tasks users need to complete.' },
    { step: '03', title: 'Frontend Development', description: 'Responsive, accessible interfaces with clean code structured for maintainability.' },
    { step: '04', title: 'Backend & APIs', description: 'Server-side logic, database design, authentication, and API development.' },
    { step: '05', title: 'Integration', description: 'Connecting the application to existing tools, databases, payment systems, or external APIs.' },
    { step: '06', title: 'Launch & Support', description: 'Deployment to production with monitoring, documentation, and ongoing support.' },
  ],
  techStack: {
    frontend: ['React / Next.js', 'Vue.js', 'HTML5 / CSS3', 'JavaScript / TypeScript'],
    backend: ['Laravel / PHP', 'Node.js / Express', 'Python / Django', 'REST & GraphQL APIs'],
    database: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    hosting: ['Linux VPS', 'cPanel', 'Nginx / Apache', 'AWS / DigitalOcean'],
  },
  useCases: [
    'Internal management portals for HR, operations, or inventory teams.',
    'Customer-facing self-service portals with secure login and data access.',
    'Admin dashboards for managing CMS content, users, or records.',
    'Multi-tenant SaaS applications serving multiple client organizations.',
    'Reporting and analytics platforms transforming raw data into decisions.',
  ],
  highlights: [
    { icon: '📱', title: 'Fully Responsive', text: 'Works well on desktop, tablet, and mobile without separate codebases.' },
    { icon: '🔐', title: 'Secure by Design', text: 'Role-based access control and secure authentication are built into the foundation.' },
    { icon: '📈', title: 'Built to Scale', text: 'Architecture decisions account for growing data, users, and feature complexity.' },
    { icon: '🔧', title: 'Maintainable Code', text: 'Clean, documented code that future developers and support teams can work with confidently.' },
  ],
  cta: {
    heading: 'Have a web application in mind?',
    text: 'We can scope the right web application approach based on your users, workflow, data needs, and hosting environment.',
  },
};

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
      'Whether you\'re running a one-time campaign or setting up recurring operational alerts, we provision, manage, and support the messaging infrastructure so your team can focus on the message itself.',
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

export const domainHostingData = {
  slug: 'domain-registration-web-hosting',
  hero: {
    eyebrow: 'Services · Domain Registration & Web Hosting',
    title: 'Domain Registration & Web Hosting',
    subtitle:
      'Everything your organization needs to get online and stay online — domain setup, professional hosting, deployment support, and reliability-focused infrastructure management.',
    badges: ['Domain Setup', 'Reliable Hosting', 'Managed Deployment'],
    color: 'teal',
    icon: '🖥️',
  },
  intro: {
    heading: 'A dependable foundation for your web presence',
    paragraphs: [
      'This service handles the essential infrastructure work that keeps websites and web applications available, performing well, and recoverable when issues arise.',
      'We combine domain registration, hosting selection, configuration, deployment coordination, and monitoring so your team can stay focused on running the business rather than managing servers.',
    ],
  },
  process: [
    { step: '01', title: 'Domain Consultation', description: 'We help select, register, and configure the right domain name and DNS settings.' },
    { step: '02', title: 'Hosting Assessment', description: 'Recommend shared, VPS, or dedicated hosting based on traffic, application type, and budget.' },
    { step: '03', title: 'Server Setup', description: 'Configure the server environment: OS, web server, database, email, and SSL certificates.' },
    { step: '04', title: 'Application Deployment', description: 'Deploy your website or application with proper environment, backups, and configuration.' },
    { step: '05', title: 'Go-Live Checks', description: 'Pre-launch checklist covering performance, security headers, redirect rules, and form testing.' },
    { step: '06', title: 'Ongoing Management', description: 'Uptime monitoring, certificate renewal, updates, and maintenance as needed.' },
  ],
  features: [
    { icon: '🌐', title: 'Domain Registration', text: '.com, .np, .org, and other TLDs — registration, transfer, and DNS configuration.' },
    { icon: '🖥️', title: 'Web Hosting', text: 'Shared, VPS, and dedicated server options matched to your performance and budget needs.' },
    { icon: '🔒', title: 'SSL Certificates', text: 'Free and premium SSL options with automatic renewal and HTTPS enforcement.' },
    { icon: '📧', title: 'Business Email', text: 'Custom domain email accounts with webmail, IMAP, and collaboration support.' },
    { icon: '💾', title: 'Backup & Recovery', text: 'Automated daily backups with restoration support for minimal downtime.' },
    { icon: '📈', title: 'Uptime Monitoring', text: 'Continuous monitoring with alerts and rapid response for outage handling.' },
  ],
  useCases: [
    'Organizations launching their first professional website.',
    'Businesses migrating from slow or unreliable hosting providers.',
    'Developers needing deployment support for client applications.',
    'Companies requiring business email alongside their website hosting.',
    'Growth-stage organizations planning for increased traffic and scale.',
  ],
  cta: {
    heading: 'Ready to get your site or app online?',
    text: 'Tell us what you are building and we will recommend the right domain, hosting, and deployment setup for your needs.',
  },
};
