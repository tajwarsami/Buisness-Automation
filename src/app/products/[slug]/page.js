import Link from 'next/link';
import { notFound } from 'next/navigation';

const PRODUCTS = {
  'academic-erp': {
    name: 'Academic ERP',
    category: 'Education',
    color: '#0057A8',
    tagline: "Nepal's Most Widely Adopted School Management Platform",
    ird: true,
    count: '800+ Schools & Colleges',
    desc: "Complete school and college management system designed for universities, campuses, boarding schools, and education boards. Dynamic Academic ERP is Nepal's most widely adopted academic management platform, trusted by 800+ institutions across the country.",
    modules: [
      { name: 'Student Admission', desc: 'Digital admission forms, document management, and enrollment tracking.' },
      { name: 'Fee Collection', desc: 'Automated fee billing, payment tracking, and receipt generation.' },
      { name: 'Attendance Management', desc: 'Biometric integration, daily attendance reports, and alerts.' },
      { name: 'Library Management', desc: 'Book catalog, issuance tracking, and fine management.' },
      { name: 'Online Examinations', desc: 'Schedule exams, manage question banks, and auto-grade MCQs.' },
      { name: 'Result Processing', desc: 'Automated grade calculation, result publication, and marksheets.' },
      { name: 'Parent Portal', desc: 'Real-time updates on attendance, fees, and performance.' },
      { name: 'Report Cards', desc: 'Customizable report card templates with digital signatures.' },
    ],
  },
  'accounting-erp': {
    name: 'Accounting ERP',
    category: 'Business',
    color: '#22C55E',
    tagline: 'IRD-Certified Accounting & Billing Solution',
    ird: true,
    count: '1,200+ Businesses',
    desc: "IRD-certified accounting and billing solution for wholesale, retail, manufacturing, and distribution businesses. Fully compliant with Nepal government tax regulations including VAT, TDS, and all IRD reporting requirements.",
    modules: [
      { name: 'Tax Management', desc: 'Automated VAT, TDS, and income tax calculations and filing.' },
      { name: 'Trade Management', desc: 'Complete purchase and sales order management.' },
      { name: 'Payroll', desc: 'Employee salary processing with tax deductions and payslips.' },
      { name: 'Stock Control', desc: 'Real-time inventory tracking across multiple warehouses.' },
      { name: 'Dynamic Reports', desc: 'Balance sheet, P&L, trial balance, and custom reports.' },
      { name: 'Multi-branch', desc: 'Manage multiple branches from a single dashboard.' },
    ],
  },
  'hospital-erp': {
    name: 'Hospital ERP',
    category: 'Healthcare',
    color: '#EF4444',
    tagline: 'Complete Healthcare Management System',
    ird: false,
    count: '100+ Hospitals & Clinics',
    desc: "Integrated hospital information system for hospitals, clinics, and medical colleges. Streamlines patient flow, billing, and clinical workflows end-to-end — from OPD registration to discharge and billing.",
    modules: [
      { name: 'OPD/IPD Management', desc: 'Patient registration, bed management, and ward tracking.' },
      { name: 'Billing & Insurance', desc: 'Automated billing, insurance claim management.' },
      { name: 'Pharmacy', desc: 'Drug inventory, dispensing, and expiry tracking.' },
      { name: 'Laboratory', desc: 'Test orders, results, and report generation.' },
      { name: 'Radiology', desc: 'Imaging orders, DICOM support, and reporting.' },
      { name: 'Medical Records', desc: 'Electronic health records with full patient history.' },
    ],
  },
  'hrm-payroll': {
    name: 'HRM & Payroll',
    category: 'Business',
    color: '#8B5CF6',
    tagline: 'End-to-End Human Resource Management',
    ird: false,
    count: '500+ Companies',
    desc: "End-to-end human resource and payroll management for organizations of all sizes. Automate attendance, leave, and salary processing with complete compliance support.",
    modules: [
      { name: 'Employee Management', desc: 'Full employee profiles, contracts, and document store.' },
      { name: 'Attendance Tracking', desc: 'Biometric, mobile, and manual attendance integration.' },
      { name: 'Leave Management', desc: 'Leave requests, approvals, and balance tracking.' },
      { name: 'Salary Processing', desc: 'Automated payroll with tax deductions and bank transfer.' },
      { name: 'Performance Appraisal', desc: 'KPI tracking, reviews, and appraisal workflows.' },
      { name: 'Recruitment Module', desc: 'Job postings, applicant tracking, and onboarding.' },
    ],
  },
  'business-erp': {
    name: 'Business ERP',
    category: 'Business',
    color: '#0096D6',
    tagline: 'Unified Enterprise Resource Planning',
    ird: false,
    count: '400+ Enterprises',
    desc: "Comprehensive enterprise resource planning for trading companies, manufacturers, and service businesses. One unified system for all operations — from procurement to delivery.",
    modules: [
      { name: 'Inventory Management', desc: 'Real-time stock tracking across multiple locations.' },
      { name: 'Purchase & Sales', desc: 'End-to-end procurement and sales order management.' },
      { name: 'CRM', desc: 'Customer relationship management and follow-up tracking.' },
      { name: 'Manufacturing Module', desc: 'Production planning, BOM, and work order management.' },
      { name: 'Project Management', desc: 'Task tracking, milestones, and project costing.' },
      { name: 'Custom Reporting', desc: 'Drag-and-drop report builder with scheduled delivery.' },
    ],
  },
  'association-management': {
    name: 'Association Management (AMS)',
    category: 'Government',
    color: '#F59E0B',
    tagline: 'Digital Governance for Cooperatives & NGOs',
    ird: false,
    count: '200+ Associations',
    desc: "Designed for cooperatives, NGOs, professional associations, and municipalities. Manage memberships, contributions, and governance digitally with full transparency and audit trails.",
    modules: [
      { name: 'Member Registration', desc: 'Digital member profiles, ID generation, and renewal.' },
      { name: 'Subscription Management', desc: 'Automated dues collection and receipt management.' },
      { name: 'Meeting Management', desc: 'Schedule meetings, record minutes, and resolutions.' },
      { name: 'Voting & Elections', desc: 'Digital voting system with audit logs.' },
      { name: 'Fund Management', desc: 'Income, expenditure, and fund allocation tracking.' },
      { name: 'Municipality Integration', desc: 'APIs for local government integration.' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = PRODUCTS[params.slug];
  if (!p) return { title: 'Product Not Found' };
  return { title: p.name, description: p.desc };
}

export default function ProductDetailPage({ params }) {
  const product = PRODUCTS[params.slug];
  if (!product) notFound();

  const otherProducts = Object.entries(PRODUCTS).filter(([s]) => s !== params.slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section style={{background:`linear-gradient(135deg,${product.color},${product.color}cc)`,padding:'80px 0 64px'}}>
        <div className="container">
          <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'16px',justifyContent:'center'}}>
            <Link href="/products" style={{color:'rgba(255,255,255,0.7)',fontSize:'0.85rem',fontWeight:500}}>Products</Link>
            <span style={{color:'rgba(255,255,255,0.5)'}}>›</span>
            <span style={{color:'#fff',fontSize:'0.85rem',fontWeight:500}}>{product.name}</span>
          </div>
          <div style={{textAlign:'center'}}>
            {product.ird && <span style={{background:'rgba(34,197,94,0.2)',border:'1px solid rgba(34,197,94,0.5)',color:'#86EFAC',padding:'4px 14px',borderRadius:'999px',fontSize:'0.75rem',fontWeight:700,display:'inline-block',marginBottom:'12px'}}>✓ IRD Certified</span>}
            <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'8px 0 12px',lineHeight:1.2}}>{product.name}</h1>
            <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1rem',maxWidth:'560px',margin:'0 auto 24px',lineHeight:1.75}}>{product.tagline}</p>
            <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
              <span style={{background:'rgba(255,255,255,0.18)',border:'1px solid rgba(255,255,255,0.3)',color:'#fff',padding:'6px 16px',borderRadius:'999px',fontSize:'0.82rem',fontWeight:500}}>{product.count}</span>
              <span style={{background:'rgba(255,255,255,0.18)',border:'1px solid rgba(255,255,255,0.3)',color:'#fff',padding:'6px 16px',borderRadius:'999px',fontSize:'0.82rem',fontWeight:500}}>{product.category}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{background:'#fff',padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 340px',gap:'64px',alignItems:'start'}}>
            {/* Left */}
            <div>
              <h2 style={{fontSize:'1.5rem',fontWeight:700,color:'#1A1A2E',marginBottom:'16px'}}>Overview</h2>
              <p style={{color:'#6B7280',fontSize:'1rem',lineHeight:1.8,marginBottom:'48px'}}>{product.desc}</p>

              <h2 style={{fontSize:'1.5rem',fontWeight:700,color:'#1A1A2E',marginBottom:'24px'}}>Key Modules</h2>
              <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
                {product.modules.map((mod) => (
                  <div key={mod.name} style={{background:'#F5F7FA',borderRadius:'10px',padding:'20px',border:'1px solid #E2E8F0',transition:'all 0.2s'}}>
                    <div style={{width:'28px',height:'28px',borderRadius:'6px',background:`linear-gradient(135deg,${product.color},${product.color}99)`,display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'10px'}}>
                      <svg width="14" height="14" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <h3 style={{fontSize:'0.9rem',fontWeight:700,color:'#1A1A2E',marginBottom:'6px'}}>{mod.name}</h3>
                    <p style={{fontSize:'0.8rem',color:'#6B7280',lineHeight:1.6}}>{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right sidebar */}
            <div>
              <div style={{background:'#F8FAFF',borderRadius:'12px',padding:'28px',border:'1px solid #E2E8F0',marginBottom:'20px',position:'sticky',top:'130px'}}>
                <h3 style={{fontSize:'1.05rem',fontWeight:700,color:'#1A1A2E',marginBottom:'16px'}}>Request a Demo</h3>
                <p style={{fontSize:'0.85rem',color:'#6B7280',marginBottom:'20px',lineHeight:1.6}}>See {product.name} in action. Get a free personalized demo from our experts.</p>
                <Link href="/contact" className="btn-primary" style={{display:'flex',justifyContent:'center',width:'100%',marginBottom:'12px'}}>Get Free Demo →</Link>
                <Link href="/contact" className="btn-outline-blue" style={{display:'flex',justifyContent:'center',width:'100%'}}>Contact Sales</Link>
                <div style={{borderTop:'1px solid #E2E8F0',marginTop:'20px',paddingTop:'16px'}}>
                  <p style={{fontSize:'0.78rem',fontWeight:600,color:'#374151',marginBottom:'10px'}}>Highlights</p>
                  {['Cloud & On-premise options','Free implementation support','Training included','24/7 after-sale support','Regular updates & upgrades'].map(f => (
                    <div key={f} style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}}>
                      <div style={{width:'16px',height:'16px',borderRadius:'50%',background:'#F0FDF4',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
                        <svg width="8" height="8" fill="none" stroke="#22C55E" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span style={{fontSize:'0.8rem',color:'#6B7280'}}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section style={{background:'#F5F7FA',padding:'64px 0'}}>
        <div className="container">
          <h2 style={{fontSize:'1.4rem',fontWeight:700,color:'#1A1A2E',marginBottom:'32px',textAlign:'center'}}>Explore Other Products</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'20px'}}>
            {otherProducts.map(([slug, p]) => (
              <Link key={slug} href={`/products/${slug}`} style={{background:'#fff',borderRadius:'12px',padding:'24px',border:'1px solid #E2E8F0',display:'block',transition:'all 0.2s',textDecoration:'none'}}>
                <div style={{width:'40px',height:'40px',borderRadius:'10px',background:p.color,marginBottom:'12px'}}></div>
                <h3 style={{fontSize:'0.95rem',fontWeight:700,color:'#1A1A2E',marginBottom:'6px'}}>{p.name}</h3>
                <p style={{fontSize:'0.8rem',color:'#6B7280'}}>{p.count}</p>
                <span style={{color:'#0057A8',fontSize:'0.82rem',fontWeight:600,marginTop:'10px',display:'block'}}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
