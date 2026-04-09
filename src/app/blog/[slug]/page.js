import Link from 'next/link';
import { notFound } from 'next/navigation';

const POSTS = {
  '15-years-anniversary': {
    title: 'Dynamic Technosoft Celebrates 15 Years — Offering 15% Discount on All ERP Products',
    cat: 'Company News', date: 'April 27, 2025', readTime: '4 min read', author: 'Deepak Sah', authorTitle: 'Founder & CEO',
    color: 'linear-gradient(135deg,#0057A8,#0096D6)',
    content: `Dynamic Technosoft Pvt. Ltd. is proud to celebrate 15 years of delivering world-class ERP and IT solutions to businesses, schools, hospitals, and government organizations across Nepal. Founded in Birgunj in 2010 with a small team of passionate engineers, we have grown into a company of 200+ professionals serving 2,500+ clients.\n\nTo mark this milestone, we are offering a 15% discount across all our software products — Academic ERP, Accounting ERP, Hospital ERP, HRM & Payroll, Business ERP, and Association Management System. This offer is available for new subscriptions made before December 31, 2025.\n\nLooking ahead, we are excited to announce our expansion plans into Dubai, Malaysia, and Indonesia. These markets share similar challenges in ERP adoption and digital transformation, and we believe Dynamic Technosoft's proven Nepal model can make a significant impact.\n\nThank you to every client, partner, dealer, and team member who has been part of this incredible journey. The best is yet to come.`,
  },
  'academic-erp-parent-portal': {
    title: 'New Academic ERP Modules: Parent Portal & Online Examination Now Available',
    cat: 'Product Update', date: 'March 15, 2025', readTime: '3 min read', author: 'Product Team', authorTitle: 'Dynamic Technosoft R&D',
    color: 'linear-gradient(135deg,#16A34A,#22C55E)',
    content: `We are excited to announce two major new modules for Dynamic Academic ERP: the Parent Portal and Online Examination System. These additions address the growing demand for digital connectivity between schools and parents, and the need for scalable online assessment tools.\n\nThe Parent Portal allows parents to monitor their child's attendance, fee payments, exam schedules, and results in real-time from any device. Parents receive instant notifications via SMS and email for important updates. The module also includes a two-way communication channel between parents and teachers.\n\nThe Online Examination System enables institutions to conduct fully digital exams with question banks, randomized question delivery, timer controls, and automatic grading for objective questions. Results are published instantly and archived for future reference.`,
  },
  'hospital-erp-nepal': {
    title: "Why Nepal's Hospitals Are Switching to Integrated Hospital ERP Systems",
    cat: 'Industry Insight', date: 'February 10, 2025', readTime: '6 min read', author: 'Research Team', authorTitle: 'Dynamic Technosoft',
    color: 'linear-gradient(135deg,#DC2626,#EF4444)',
    content: `Nepal's healthcare sector is undergoing a quiet but significant digital revolution. Over the past five years, more than 100 hospitals and clinical facilities across the country have adopted integrated Hospital ERP systems — a shift that is transforming patient care and administrative efficiency.\n\nThe primary driver is the growing burden of paper-based processes. In a typical paper-based hospital, a patient's records may be spread across different departments — registration, OPD, pharmacy, lab, and billing — with no centralized view. This leads to billing errors, duplicate tests, medication mistakes, and frustrating patient experiences.\n\nWith an integrated Hospital ERP like Dynamic's, all patient data flows through a single system. From the moment a patient registers at the counter to their discharge and insurance claim processing, every step is digitized and linked. Staff spend less time searching for records and more time caring for patients.\n\nOur data shows that hospitals using Dynamic Hospital ERP have seen a 45% reduction in patient wait times and complete elimination of billing errors. Insurance claims that previously took weeks are now processed digitally in days.`,
  },
  'ird-certified-accounting': {
    title: 'What IRD Certification Means for Your Accounting Software — And Why It Matters',
    cat: 'Compliance', date: 'January 22, 2025', readTime: '5 min read', author: 'Compliance Team', authorTitle: 'Dynamic Technosoft',
    color: 'linear-gradient(135deg,#D97706,#F59E0B)',
    content: `If you operate a business in Nepal, your accounting software must be compliant with the Inland Revenue Department's requirements. Non-compliant software can lead to audit failures, penalties, and legal liability. In this article, we explain what IRD certification means and why it should be a non-negotiable requirement when choosing accounting software.\n\nThe IRD certifies accounting software that correctly implements Nepal's tax laws — including VAT (Value Added Tax), TDS (Tax Deducted at Source), and advance income tax. Certified software must generate bills in IRD-approved formats, maintain proper audit trails, and submit reports in the required formats.\n\nDynamic Technosoft was Nepal's first company to achieve IRD certification for its Accounting ERP. Since then, thousands of businesses have used our software to stay fully compliant without the headache of manual tax calculations.\n\nWhen evaluating accounting software, always verify that it carries IRD certification. Ask for the certification number and verify it with IRD directly.`,
  },
  'digital-nepal-erp': {
    title: "Digital Nepal: How ERP is Transforming the Country's Business Landscape",
    cat: 'Industry Insight', date: 'December 5, 2024', readTime: '7 min read', author: 'Research Team', authorTitle: 'Dynamic Technosoft',
    color: 'linear-gradient(135deg,#7C3AED,#8B5CF6)',
    content: `Nepal's business landscape is in the midst of a historic digital transformation. Driven by government initiatives, improving internet infrastructure, and a new generation of tech-savvy business owners, ERP adoption across the country has accelerated significantly over the past three years.\n\nAccording to Dynamic Technosoft's internal data, the number of businesses actively using ERP software in Nepal grew by 40% between 2022 and 2024. This growth is particularly strong in the education sector, where schools and colleges are rapidly moving away from manual record-keeping.\n\nThe government's Digital Nepal Framework, launched in 2019, has also played a catalytic role. Municipalities are now required to maintain digital financial records, driving adoption of accounting and municipal ERP systems in local governments across the country.\n\nLooking ahead, we project continued strong growth in ERP adoption throughout 2025 and 2026, particularly in the healthcare, manufacturing, and cooperative sectors. Mobile-first ERP access and cloud hosting are expected to be the two biggest trends shaping Nepal's enterprise software market in the coming years.`,
  },
  'cooperative-digital': {
    title: 'How Cooperatives & NGOs Are Going Digital with Association Management Software',
    cat: 'Product Update', date: 'November 18, 2024', readTime: '4 min read', author: 'Product Team', authorTitle: 'Dynamic Technosoft R&D',
    color: 'linear-gradient(135deg,#0096D6,#38BDF8)',
    content: `Nepal has over 35,000 registered cooperatives and thousands of NGOs, professional associations, and community organizations. Traditionally, these organizations have relied entirely on paper registers, manual ledgers, and spreadsheets to manage their members and finances. Dynamic Technosoft's Association Management System (AMS) is changing that.\n\nSince its launch, the AMS has been deployed in 200+ cooperatives and NGOs across Nepal. The system digitizes the complete member lifecycle — registration, ID generation, subscription collection, meeting management, voting, and fund tracking.\n\nOne of our most impactful deployments has been with a cooperative in Chitwan with 4,000+ members. Before AMS, member records were stored in physical registers that were difficult to search and prone to errors. After deployment, the cooperative now has a searchable digital database, automated SMS reminders for due payments, and a transparent fund management system that has significantly improved member trust.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }));
}

export async function generateMetadata({ params }) {
  const p = POSTS[params.slug];
  if (!p) return { title: 'Post Not Found' };
  return { title: p.title, description: p.content.slice(0, 160) };
}

export default function BlogPostPage({ params }) {
  const post = POSTS[params.slug];
  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section style={{background:post.color,padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <div style={{display:'flex',justifyContent:'center',gap:'12px',marginBottom:'16px',alignItems:'center',flexWrap:'wrap'}}>
            <Link href="/blog" style={{color:'rgba(255,255,255,0.7)',fontSize:'0.85rem',fontWeight:500}}>Blog</Link>
            <span style={{color:'rgba(255,255,255,0.5)'}}>›</span>
            <span style={{background:'rgba(255,255,255,0.2)',color:'#fff',padding:'3px 10px',borderRadius:'999px',fontSize:'0.72rem',fontWeight:600}}>{post.cat}</span>
          </div>
          <h1 style={{fontSize:'clamp(1.5rem,3vw,2.2rem)',fontWeight:800,color:'#fff',maxWidth:'750px',margin:'0 auto 16px',lineHeight:1.3}}>{post.title}</h1>
          <div style={{display:'flex',justifyContent:'center',gap:'16px',color:'rgba(255,255,255,0.8)',fontSize:'0.85rem',flexWrap:'wrap'}}>
            <span>✍ {post.author}, {post.authorTitle}</span>
            <span>📅 {post.date}</span>
            <span>⏱ {post.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{background:'#fff',padding:'80px 0'}}>
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:'64px',alignItems:'start'}}>
            <article>
              {post.content.split('\n\n').map((para, i) => (
                <p key={i} style={{color:'#374151',fontSize:'1rem',lineHeight:1.9,marginBottom:'24px'}}>{para}</p>
              ))}
              <div style={{borderTop:'1px solid #E2E8F0',paddingTop:'32px',marginTop:'32px',display:'flex',gap:'12px',flexWrap:'wrap'}}>
                <Link href="/blog" className="btn-outline-blue">← Back to Blog</Link>
                <Link href="/contact" className="btn-primary">Contact Us →</Link>
              </div>
            </article>

            {/* Sidebar */}
            <div style={{position:'sticky',top:'130px'}}>
              <div style={{background:'#F8FAFF',borderRadius:'12px',padding:'24px',border:'1px solid #E2E8F0',marginBottom:'20px'}}>
                <h3 style={{fontSize:'0.95rem',fontWeight:700,color:'#1A1A2E',marginBottom:'16px'}}>Need more information?</h3>
                <p style={{fontSize:'0.82rem',color:'#6B7280',marginBottom:'16px',lineHeight:1.6}}>Talk to our experts and see how Dynamic Technosoft can help your organization.</p>
                <Link href="/contact" className="btn-primary" style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>Get a Free Demo</Link>
                <Link href="/products" className="btn-outline-blue" style={{display:'flex',justifyContent:'center'}}>View Products</Link>
              </div>
              <div style={{background:'#fff',borderRadius:'12px',padding:'24px',border:'1px solid #E2E8F0'}}>
                <h3 style={{fontSize:'0.9rem',fontWeight:700,color:'#1A1A2E',marginBottom:'16px'}}>More Articles</h3>
                {Object.entries(POSTS).filter(([s]) => s !== params.slug).slice(0,3).map(([slug, p]) => (
                  <Link key={slug} href={`/blog/${slug}`} style={{display:'block',padding:'10px 0',borderBottom:'1px solid #E2E8F0',textDecoration:'none'}}>
                    <span style={{fontSize:'0.7rem',color:'#E8431A',fontWeight:600,display:'block',marginBottom:'4px'}}>{p.cat}</span>
                    <span style={{fontSize:'0.82rem',color:'#1A1A2E',fontWeight:500,lineHeight:1.4,display:'block'}}>{p.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
