// ─────────────────────────────────────────────
//  Resources – All Pages Data
//  Each resource page has its own named export.
//  Replace placeholder values with real content.
// ─────────────────────────────────────────────

export const tutorialsData = {
  slug: 'tutorials',
  hero: {
    eyebrow: 'Resources · Tutorials',
    title: 'Tutorials',
    subtitle:
      'Step-by-step guides to help you configure, use, and get the most from every Automate IT Limited product — from initial setup to advanced workflows.',
    badges: ['Step-by-Step', 'Video & Text', 'Beginner to Advanced'],
    color: 'blue',
  },
  intro: {
    heading: 'Learn at your own pace with structured guidance',
    paragraphs: [
      'Our tutorials are written and recorded to reflect real usage scenarios — not theoretical feature walkthroughs. Each one targets a specific task or workflow that users actually need to complete.',
      'From getting started on day one to configuring advanced modules, the tutorial library grows as our products evolve.',
    ],
  },
  categories: [
    {
      title: 'Getting Started',
      icon: '🚀',
      description: 'First-time setup, account configuration, and understanding the system layout.',
      items: [
        { title: 'Setting Up Your Account', duration: '5 min', type: 'Video' },
        { title: 'Navigating the Dashboard', duration: '8 min', type: 'Video' },
        { title: 'Configuring User Roles', duration: '10 min', type: 'Article' },
        { title: 'Importing Initial Data', duration: '12 min', type: 'Article' },
      ],
    },
    {
      title: 'Core Workflows',
      icon: '⚙️',
      description: 'Essential tasks and processes your team will use every day.',
      items: [
        { title: 'Managing Student / Patient / Member Records', duration: '15 min', type: 'Video' },
        { title: 'Processing Fees and Payments', duration: '12 min', type: 'Video' },
        { title: 'Generating Reports', duration: '10 min', type: 'Article' },
        { title: 'Sending Notifications', duration: '8 min', type: 'Video' },
      ],
    },
    {
      title: 'Advanced Configuration',
      icon: '🔧',
      description: 'Power-user features, integrations, and customization options.',
      items: [
        { title: 'Customizing Report Templates', duration: '20 min', type: 'Article' },
        { title: 'Setting Up Automated Alerts', duration: '15 min', type: 'Video' },
        { title: 'API Integration Guide', duration: '30 min', type: 'Article' },
        { title: 'Backup and Data Export', duration: '10 min', type: 'Video' },
      ],
    },
    {
      title: 'Troubleshooting',
      icon: '🛟',
      description: 'Common problems, their causes, and step-by-step resolution guides.',
      items: [
        { title: 'Login and Access Issues', duration: '5 min', type: 'Article' },
        { title: 'Report Not Generating', duration: '8 min', type: 'Article' },
        { title: 'SMS Not Delivering', duration: '6 min', type: 'Article' },
        { title: 'Data Import Errors', duration: '10 min', type: 'Article' },
      ],
    },
  ],
  cta: {
    heading: 'Need a tutorial for something not listed here?',
    text: 'Our support team can create custom guidance or walk you through any feature live.',
  },
};

export const blogsData = {
  slug: 'blogs',
  hero: {
    eyebrow: 'Resources · Blogs',
    title: 'Blog',
    subtitle:
      'Product updates, implementation insights, business technology thinking, and industry perspectives from the Automate IT Limited team.',
    badges: ['Product Updates', 'Industry Insights', 'Implementation Tips'],
    color: 'green',
  },
  intro: {
    heading: 'Perspectives that help you make better decisions',
    paragraphs: [
      'Our blog is written for decision-makers, IT managers, and operational leaders who want to stay informed about software trends, implementation strategies, and product development.',
      'We publish regularly on topics that matter to our clients — from choosing the right ERP to understanding mobile-first strategies and digital transformation in specific sectors.',
    ],
  },
  featuredPosts: [
    {
      category: 'Product',
      title: 'How Dynamic Academic ERP Reduces Administrative Load in Schools',
      excerpt: 'A practical look at which modules deliver the most time savings for school administrators in their first year of use.',
      readTime: '6 min read',
      date: 'April 2026',
    },
    {
      category: 'Industry',
      title: 'Why Nepali Healthcare Institutions Are Moving to Integrated ERP',
      excerpt: 'The operational pressures driving hospitals and clinics to adopt connected systems, and what to look for in a vendor.',
      readTime: '8 min read',
      date: 'March 2026',
    },
    {
      category: 'Implementation',
      title: 'The Five Most Common ERP Implementation Mistakes (and How to Avoid Them)',
      excerpt: 'Insights from real deployments that help organizations plan better and set realistic expectations from day one.',
      readTime: '7 min read',
      date: 'February 2026',
    },
    {
      category: 'Technology',
      title: 'SMS vs. App Push Notifications: Choosing the Right Channel for Your Audience',
      excerpt: 'A comparison of communication strategies to help organizations reach their audience reliably and cost-effectively.',
      readTime: '5 min read',
      date: 'January 2026',
    },
    {
      category: 'Product',
      title: 'What\'s New in Dynamic AMS 2.0: A Feature Overview',
      excerpt: 'An overview of the latest updates to our association management platform including the new member portal and reporting module.',
      readTime: '4 min read',
      date: 'December 2025',
    },
    {
      category: 'Business',
      title: 'Building a Technology Roadmap for Small and Medium Organizations',
      excerpt: 'A framework for prioritizing digital investments when budget and team capacity are limited.',
      readTime: '9 min read',
      date: 'November 2025',
    },
  ],
  categories: ['All', 'Product', 'Implementation', 'Industry', 'Technology', 'Business'],
  cta: {
    heading: 'Have a topic you would like us to write about?',
    text: 'We welcome suggestions for blog topics from our clients, partners, and readers.',
  },
};

export const testimonialsData = {
  slug: 'testimonials',
  hero: {
    eyebrow: 'Resources · Testimonials',
    title: 'What Our Clients Say',
    subtitle:
      'Real feedback from organizations that have used our products and services to improve operations, simplify administration, and support their teams more effectively.',
    badges: ['Verified Clients', 'Cross-Industry', 'Long-Term Partners'],
    color: 'amber',
  },
  intro: {
    heading: 'Proof through experience, not just promise',
    paragraphs: [
      'The most reliable signal of good software is how it performs in real daily use — not in demo environments. Our client feedback comes from organizations that rely on our systems for work that matters.',
      'From schools managing thousands of students to hospitals coordinating multiple departments, the outcomes speak for the quality of our delivery.',
    ],
  },
  testimonials: [
    {
      name: 'Ram Bahadur Shrestha',
      role: 'Principal',
      organization: 'ABC Higher Secondary School, Kathmandu',
      rating: 5,
      text: 'Dynamic Academic ERP transformed the way we manage student records, fees, and results. What used to take our staff days at the end of term now happens in hours. The support team is always responsive and genuinely helpful.',
      product: 'Dynamic Academic ERP',
    },
    {
      name: 'Dr. Sita Thapa',
      role: 'Medical Director',
      organization: 'Greenfield Hospital & Research Center',
      rating: 5,
      text: 'We struggled with disconnected systems across OPD, pharmacy, and billing. Since deploying Hospital ERP, our coordination has improved visibly. Billing errors are almost gone and the reports are much more useful for management decisions.',
      product: 'Hospital ERP',
    },
    {
      name: 'Prakash Adhikari',
      role: 'Finance Manager',
      organization: 'National Trading Co. Pvt. Ltd.',
      rating: 5,
      text: 'The accounting solution gave us a cleaner view of our financial position in real time. Month-end closings that used to take a week now take a day. The audit trail has been particularly useful for our annual reviews.',
      product: 'Accounting Solution',
    },
    {
      name: 'Anita Gurung',
      role: 'HR Director',
      organization: 'Summit Services Group',
      rating: 5,
      text: 'HR and Payroll saved our team significant manual effort every month. The leave and attendance system is clean and our employees love being able to see their own records. Payroll has been error-free since we implemented it.',
      product: 'HR & Payroll',
    },
    {
      name: 'Bimal Karki',
      role: 'General Secretary',
      organization: 'Nepal Professionals Association',
      rating: 5,
      text: 'Dynamic AMS digitized our entire membership lifecycle. Renewals are automated, members can update their own profiles, and our event management has become far more organized. Highly recommend for any association.',
      product: 'Dynamic AMS',
    },
    {
      name: 'Deepa Shahi',
      role: 'Operations Manager',
      organization: 'FastDelivery Logistics Pvt. Ltd.',
      rating: 5,
      text: 'Their software development team built our custom order management system exactly as we needed it. The process was transparent throughout, the delivery was on schedule, and post-launch support has been excellent.',
      product: 'Software Development',
    },
  ],
  stats: [
    { value: '500+', label: 'Organizations Served' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: '10+', label: 'Years of Delivery' },
  ],
  cta: {
    heading: 'Ready to become a success story?',
    text: 'Talk to our team and let us map the right solution to your organization\'s specific operational needs.',
  },
};

export const mediaCoverageData = {
  slug: 'media-coverage',
  hero: {
    eyebrow: 'Resources · Media Coverage',
    title: 'Media Coverage',
    subtitle:
      'Press mentions, announcements, industry recognition, and notable moments that document the growth and visibility of Automate IT Limited.',
    badges: ['Press Mentions', 'Industry Recognition', 'Company Milestones'],
    color: 'purple',
  },
  intro: {
    heading: 'Our story out in the world',
    paragraphs: [
      'Over the years, Automate IT Limited has been covered by technology publications, business journals, and event organizers recognizing our contribution to Nepal\'s digital landscape.',
      'This page brings together press features, award recognitions, conference appearances, and milestone announcements.',
    ],
  },
  featured: [
    {
      outlet: 'Tech Khabar Nepal',
      type: 'Feature Article',
      title: 'Automate IT Limited: Building Enterprise Software for Nepal\'s Growing Organizations',
      date: 'March 2026',
      excerpt: 'A profile piece on Automate IT Limited\'s journey from a small development firm to a recognized ERP and services provider across Nepal.',
    },
    {
      outlet: 'Business 360',
      type: 'Interview',
      title: 'Interview: How Automate IT Limited is Solving Real Operational Problems with Custom Software',
      date: 'January 2026',
      excerpt: 'An interview with the leadership team on product philosophy, growth strategy, and building software for the Nepali market.',
    },
    {
      outlet: 'Nepal Business Directory',
      type: 'Award',
      title: 'Best IT Solutions Provider Award 2025',
      date: 'December 2025',
      excerpt: 'Recognized as one of Nepal\'s leading IT solution providers in the small-to-medium enterprise segment.',
    },
    {
      outlet: 'IT Professional Nepal Conference',
      type: 'Speaker',
      title: 'Conference Presentation: ERP Adoption in Education Institutions',
      date: 'November 2025',
      excerpt: 'Automate IT Limited presented findings from ERP deployments across 20+ educational institutions at the annual IT conference.',
    },
  ],
  milestones: [
    { year: '2025', title: 'Reached 500+ Active Client Organizations' },
    { year: '2024', title: 'Launched Dynamic AMS for Association Management' },
    { year: '2023', title: 'Expanded to Hospital ERP market segment' },
    { year: '2022', title: 'Team expanded to 50+ specialists' },
    { year: '2020', title: 'Achieved ISO-aligned delivery processes' },
  ],
  cta: {
    heading: 'Want to feature us or collaborate on a story?',
    text: 'Our communications team welcomes media inquiries, interview requests, and press collaboration opportunities.',
  },
};

export const dealershipData = {
  slug: 'dealership',
  hero: {
    eyebrow: 'Resources · Dealership',
    title: 'Become a Dealer',
    subtitle:
      'Partner with Automate IT Limited to bring our software solutions to your market — with training, commission structure, and marketing support built into the partnership.',
    badges: ['Revenue Sharing', 'Full Training', 'Co-Marketing Support'],
    color: 'teal',
  },
  intro: {
    heading: 'Grow with a recognized technology brand',
    paragraphs: [
      'Our dealership program is designed for companies, consultants, and technology providers who want to expand their portfolio by offering Automate IT Limited\'s proven software solutions.',
      'We equip our dealers with full product knowledge, sales tools, and technical support so they can confidently represent and sell our products in their local markets.',
    ],
  },
  benefits: [
    { icon: '💰', title: 'Competitive Commission', description: 'Earn attractive recurring commissions on every software license and service contract you close.' },
    { icon: '🎓', title: 'Full Product Training', description: 'Deep product training for your sales and technical team so you can demo and support confidently.' },
    { icon: '📢', title: 'Co-Marketing Support', description: 'Access marketing materials, case studies, presentations, and product brochures.' },
    { icon: '🛟', title: 'Technical Backing', description: 'Our team supports you during client demos, pre-sales scoping, and post-sales implementation.' },
    { icon: '📋', title: 'Lead Sharing', description: 'Active dealers may receive qualified leads from our marketing and referral networks.' },
    { icon: '🌱', title: 'Growth Aligned', description: 'As you bring in more clients, your partnership tier and benefits can grow with your performance.' },
  ],
  eligibility: [
    'Registered business operating in technology, consulting, or related sectors.',
    'Minimum one dedicated sales representative for product demonstration.',
    'Willingness to complete the Automate IT Limited dealer training program.',
    'Ability to provide first-line client support with our technical backup.',
    'Alignment with our service quality and ethics standards.',
  ],
  tiers: [
    {
      name: 'Registered Partner',
      requirements: '1–3 deals per year',
      benefits: ['Product access', 'Training certification', 'Marketing materials', 'Email support'],
      highlight: false,
    },
    {
      name: 'Silver Dealer',
      requirements: '4–10 deals per year',
      benefits: ['All Registered benefits', 'Priority lead allocation', 'Co-branded materials', 'Quarterly business review'],
      highlight: false,
    },
    {
      name: 'Gold Dealer',
      requirements: '11+ deals per year',
      benefits: ['All Silver benefits', 'Dedicated partner manager', 'Revenue bonuses', 'Early feature access'],
      highlight: true,
    },
  ],
  process: [
    { step: '01', title: 'Submit Application', description: 'Fill out the partnership form with your business details and market focus.' },
    { step: '02', title: 'Screening Call', description: 'A brief call with our business development team to assess fit and answer questions.' },
    { step: '03', title: 'Sign Agreement', description: 'Complete the dealer agreement with transparent commission and support terms.' },
    { step: '04', title: 'Training & Onboarding', description: 'Complete product training and receive your sales kit, demo access, and support contacts.' },
    { step: '05', title: 'Start Selling', description: 'Begin presenting to prospects with our backing at every stage of the cycle.' },
  ],
  cta: {
    heading: 'Ready to become a Automate IT Limited dealer?',
    text: 'Contact our partnerships team to discuss your market, your clients, and the right dealership tier for your business.',
  },
};
