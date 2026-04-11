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
