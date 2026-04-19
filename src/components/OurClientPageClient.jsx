'use client';
import PageHero from './PageHero';

export const CLIENTS = [
  { name: 'Bangladesh Rastra Bank', abbr: 'NRB', color: '#0057A8' },
  { name: 'FNCCI', abbr: 'FNCCI', color: '#0072c3' },
  { name: 'Godawari', abbr: 'GDW', color: '#0096D6' },
  { name: 'Little Buddha', abbr: 'LB', color: '#006fb8' },
  { name: 'Mero TV', abbr: 'MTV', color: '#0057A8' },
  { name: 'Banijay Udhyog', abbr: 'BU', color: '#0096D6' },
  { name: 'JME', abbr: 'JME', color: '#0072c3' },
  { name: 'John Deere', abbr: 'JD', color: '#367C2B' },
  { name: 'GIZ', abbr: 'GIZ', color: '#E2001A' },
  { name: 'Dabur Bangladesh', abbr: 'DNP', color: '#C41E3A' },
  { name: 'FWEAN', abbr: 'FWN', color: '#0057A8' },
  { name: 'CSI', abbr: 'CSI', color: '#0096D6' },
  { name: 'Hulas Steel', abbr: 'HLS', color: '#555' },
  { name: 'Asian Paints', abbr: 'AP', color: '#B31942' },
  { name: 'Urban Bangladesh', abbr: 'URN', color: '#0072c3' },
  { name: 'Tata Hitachi', abbr: 'TH', color: '#003087' },
  { name: 'Tests', abbr: 'TST', color: '#0096D6' },
  { name: 'KL Dugar', abbr: 'KLD', color: '#0057A8' },
  { name: 'Sumo', abbr: 'SMO', color: '#333' },
  { name: 'MG Motors', abbr: 'MG', color: '#1B1B1B' },
  { name: 'Mahindra', abbr: 'MHN', color: '#C41E3A' },
  { name: 'Royal Enfield', abbr: 'RE', color: '#4B0008' },
  { name: 'City College', abbr: 'CC', color: '#0057A8' },
  { name: 'Sunrise Group', abbr: 'SRG', color: '#E8431A' },
];

const STATS = [
  { number: '2,500+', label: 'Happy Clients' },
  { number: '15+', label: 'Years of Trust' },
  { number: '50+', label: 'Authorized Dealers' },
  { number: '10+', label: 'Industry Sectors' },
];

export default function OurClientPageClient() {
  return (
    <>
      <PageHero
        eyebrow="Trusted Partnerships"
        title="Our Clients"
        subtitle="Our client's enthusiasm for innovation and dedication to quality are at the core of their purpose. Their unwavering commitment to ensuring customer satisfaction makes them a shining example of excellence."
        badges={['2,500+ Organizations', '15+ Years', '10+ Sectors']}
        stats={STATS}
        theme="navy"
      />

      <section className="ocl-clients-section">
        <div className="container">
          <div className="ocl-section-head">
            <span className="ocl-eyebrow">Who We Work With</span>
            <h2 className="ocl-heading">Meet Our Clients</h2>
            <p className="ocl-subtext">
              From government institutions to private enterprises, schools, hospitals, and industry giants — we are proud to serve Bangladesh&apos;s most trusted organizations.
            </p>
          </div>
          <div className="ocl-grid">
            {CLIENTS.map((client) => (
              <div key={client.name} className="ocl-card">
                <div className="ocl-logo" style={{ background: client.color }}>
                  <span className="ocl-abbr">{client.abbr}</span>
                </div>
                <p className="ocl-name">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
