export const hrPayrollData = {
  slug: 'hr-payroll',
  hero: {
    title: 'HR and Payroll System',
    subtitle: 'Complete workforce management solution.',
    color: 'purple',
  },
  intro: {
    label: 'Product Overview',
    title: 'A workforce management platform for attendance, payroll, records, and staff performance',
    paragraphs: [
      'HR and Payroll System is built for organizations that want to centralize employee administration, attendance tracking, and salary processing inside one dependable workflow. By reducing reliance on manual files and disconnected spreadsheets, it helps teams work with greater consistency and less repetitive effort.',
      'The platform supports stronger accuracy across payroll and record management while giving decision-makers a clearer view of workforce operations. This makes it valuable for companies that want better control, cleaner HR administration, and more confident payroll execution.',
    ],
  },
  topology: {
    variant: 'hybrid',
    centerLabel: 'HR Hub',
    nodes: ['Attendance', 'Payroll', 'Employee Records', 'Appraisal'],
  },
  modules: [
    { icon: 'attendance', name: 'Time Attendance System', description: 'Time Attendance System tracks employee attendance, shift timing, and daily working hours with better consistency and control. It helps organizations reduce manual errors in attendance handling while improving the accuracy of payroll inputs. HR teams can monitor attendance trends more easily and respond to irregularities faster. This creates a more dependable operational foundation for workforce management.', connectionStyle: 'Hybrid Topology' },
    { icon: 'payroll', name: 'Payroll Management System', description: 'Payroll Management System automates salary calculation, deductions, payslip generation, and structured monthly payroll processing. It helps organizations save time while reducing mistakes that often happen with manual payroll workflows. Finance and HR teams can work with more confidence because payroll records remain consistent and easier to verify. This supports timely salary execution and stronger payroll accuracy across the company.', connectionStyle: 'Hybrid Topology' },
    { icon: 'profile', name: 'Personal Information System (HR)', description: 'Personal Information System keeps employee profiles, records, and core HR data organized inside one secure and searchable platform. It reduces dependence on scattered files and spreadsheets by centralizing workforce information in a structured way. HR teams can access and update employee records more efficiently whenever decisions or documentation are required. This improves both administration quality and overall HR responsiveness.', connectionStyle: 'Hybrid Topology' },
    { icon: 'appraisal', name: 'Staff Appraisal System', description: 'Staff Appraisal System supports performance review workflows, employee evaluation tracking, and better visibility into staff development. It helps management teams assess performance more consistently while keeping appraisal processes easier to manage over time. Review records stay organized, making follow-up actions and growth planning more practical. This encourages a stronger culture of accountability and continuous improvement across the workforce.', connectionStyle: 'Hybrid Topology' },
  ],
};
