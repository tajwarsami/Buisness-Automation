export const hospitalErpData = {
  slug: 'hospital-erp',
  hero: {
    title: 'Hospital Enterprise Resource Planning',
    subtitle: 'Integrated system to manage hospital operations efficiently.',
    color: 'green',
  },
  intro: {
    label: 'Product Overview',
    title: 'A hospital platform that helps departments work in one coordinated operational flow',
    paragraphs: [
      'Hospital ERP is designed for healthcare institutions that need stronger coordination between administration, communication, stock, and financial operations. Instead of relying on disconnected processes, the system brings key operational areas into one controlled environment so information can move more clearly across the organization.',
      'This improves day-to-day efficiency, helps management monitor service delivery more effectively, and supports better financial and inventory visibility. The platform is especially useful for hospitals and clinics that want to reduce manual bottlenecks while improving overall operational discipline.',
    ],
  },
  topology: {
    variant: 'bus',
    nodes: ['Accounts', 'Patients', 'Inventory', 'SMS Alerts'],
  },
  modules: [
    { icon: 'accounting', name: 'Accounts Management', description: 'Accounts Management supports hospital billing, payments, record keeping, and financial oversight through a more structured workflow. It helps finance teams reduce manual handling while improving clarity across everyday income and expense activity. Reports remain easier to review because transactions stay connected inside one organized system. This gives hospital management stronger control over operational finances and billing transparency.', connectionStyle: 'Bus Topology' },
    { icon: 'sms', name: 'SMS Management', description: 'SMS Management helps hospitals send appointment reminders, follow-up notices, and patient notifications quickly and consistently. It improves communication flow between the institution and patients without relying on time-consuming manual outreach. Timely updates can reduce missed appointments and support a more dependable service experience. This strengthens patient engagement and improves coordination around hospital operations.', connectionStyle: 'Bus Topology' },
    { icon: 'inventory', name: 'Inventory Management', description: 'Inventory Management gives hospitals better visibility into medicines, equipment, supplies, and stock movement across departments. It helps reduce waste and shortages by keeping stock levels more organized and easier to monitor. Staff can make better purchasing and replenishment decisions when current inventory data stays accurate and accessible. This supports smoother clinical and administrative operations throughout the hospital.', connectionStyle: 'Bus Topology' },
  ],
};
