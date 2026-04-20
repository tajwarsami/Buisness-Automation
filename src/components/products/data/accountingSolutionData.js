export const accountingSolutionData = {
  slug: 'accounting-solution',
  hero: {
    title: 'Smart Accounting Solution',
    subtitle: 'Simplified financial management for businesses.',
    color: 'amber',
  },
  intro: {
    label: 'Product Overview',
    title: 'A finance-focused platform built to improve visibility, reporting, and control',
    paragraphs: [
      'Smart Accounting Solution is designed for businesses that need stronger command over financial records, reporting accuracy, and day-to-day accounting workflows. It supports a more reliable way to manage ledgers, reconciliation, statements, and financial movement without depending on scattered tools or manual processes.',
      'The system helps organizations see their financial position more clearly, make better-informed decisions, and create a stronger reporting foundation for growth. This makes it especially useful for businesses that want accounting operations to be both dependable and decision-ready.',
    ],
  },
  topology: {
    variant: 'star',
    centerLabel: 'Finance Core',
    nodes: ['Ledger', 'Reporting', 'Compliance', 'Transactions'],
  },
  modules: [
    {
      icon: 'analytics',
      name: 'Accounts Management',
      description:
        "Elevate your financial management with our software, which allows you to assess your business's financial health accurately. Generate essential reports, including journals, profit and loss statements, balance sheets, fund flow statements, cash flow reports, and budgets. These insights empower you to make informed decisions and improve day-to-day visibility across your accounts. The system is designed to support financial stability, stronger control, and long-term growth. Trust us to optimize your financial management with robust reporting capabilities and dependable accounting structure.",
      connectionStyle: 'Star Topology',
      visualItems: [
        'Multiple ledgers',
        'Bank reconciliation',
        'Payment & Receipt',
        'Cost Center',
        'Profit & loss',
        'Cash flow & fund flow',
        'Balance sheet',
        'Journal & Contra',
        'Day Book',
        'Cash/Bank Books',
      ],
    },
  ],
};
