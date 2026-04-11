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
