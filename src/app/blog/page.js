import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: "Latest news, product updates, and industry insights from Dynamic Technosoft — Nepal's leading IT solutions company.",
};

const POSTS = [
  { slug: '15-years-anniversary', cat: 'Company News', date: 'April 27, 2025', readTime: '4 min read', title: 'Dynamic Technosoft Celebrates 15 Years — Offering 15% Discount on All ERP Products', excerpt: 'Marking a milestone of 15 years in the IT industry, Dynamic Technosoft announces a special discount on all software products and shares its vision for international expansion.', color: 'linear-gradient(135deg,#0057A8,#0096D6)' },
  { slug: 'academic-erp-parent-portal', cat: 'Product Update', date: 'March 15, 2025', readTime: '3 min read', title: 'New Academic ERP Modules: Parent Portal & Online Examination Now Available', excerpt: 'Dynamic Academic ERP introduces powerful new modules designed to connect parents, teachers, and administrators on a single platform with real-time updates.', color: 'linear-gradient(135deg,#16A34A,#22C55E)' },
  { slug: 'hospital-erp-nepal', cat: 'Industry Insight', date: 'February 10, 2025', readTime: '6 min read', title: "Why Nepal's Hospitals Are Switching to Integrated Hospital ERP Systems", excerpt: 'A look at how 100+ hospitals across Nepal have streamlined operations, reduced billing errors, and improved patient care with Dynamic Hospital ERP.', color: 'linear-gradient(135deg,#DC2626,#EF4444)' },
  { slug: 'ird-certified-accounting', cat: 'Compliance', date: 'January 22, 2025', readTime: '5 min read', title: 'What IRD Certification Means for Your Accounting Software — And Why It Matters', excerpt: "Understanding the Inland Revenue Department's certification requirements and why using IRD-certified software protects your business from compliance risks.", color: 'linear-gradient(135deg,#D97706,#F59E0B)' },
  { slug: 'digital-nepal-erp', cat: 'Industry Insight', date: 'December 5, 2024', readTime: '7 min read', title: "Digital Nepal: How ERP is Transforming the Country's Business Landscape", excerpt: 'An analysis of ERP adoption trends across Nepal with growth data, industry coverage, and projections for 2025 and beyond.', color: 'linear-gradient(135deg,#7C3AED,#8B5CF6)' },
  { slug: 'cooperative-digital', cat: 'Product Update', date: 'November 18, 2024', readTime: '4 min read', title: 'How Cooperatives & NGOs Are Going Digital with Association Management Software', excerpt: "Dynamic's Association Management System is now deployed in 200+ cooperatives and NGOs across Nepal, transforming governance and membership management.", color: 'linear-gradient(135deg,#0096D6,#38BDF8)' },
];

const CATS = ['All', 'Company News', 'Product Update', 'Industry Insight', 'Compliance'];

export default function BlogPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>LATEST NEWS</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            Blog & Updates
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'580px',margin:'0 auto',lineHeight:1.75}}>
            Product news, industry insights, and technology tips from Dynamic Technosoft.
          </p>
        </div>
      </section>

      <section style={{background:'#F5F7FA',padding:'80px 0'}}>
        <div className="container">
          {/* Category Pills */}
          <div style={{display:'flex',gap:'10px',flexWrap:'wrap',marginBottom:'40px',justifyContent:'center'}}>
            {CATS.map(c => (
              <span key={c} style={{padding:'7px 18px',borderRadius:'999px',fontSize:'0.82rem',fontWeight:500,background:c==='All'?'#0057A8':'#fff',color:c==='All'?'#fff':'#6B7280',border:'1px solid',borderColor:c==='All'?'#0057A8':'#E2E8F0',cursor:'pointer'}}>{c}</span>
            ))}
          </div>

          {/* Featured Post */}
          <Link href={`/blog/${featured.slug}`} style={{display:'grid',gridTemplateColumns:'400px 1fr',background:'#fff',borderRadius:'16px',overflow:'hidden',border:'1px solid #E2E8F0',marginBottom:'32px',boxShadow:'0 4px 20px rgba(0,0,0,0.07)',textDecoration:'none'}}>
            <div style={{background:featured.color,minHeight:'260px',display:'flex',alignItems:'center',justifyContent:'center',position:'relative'}}>
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="30" fill="rgba(255,255,255,0.1)"/><path d="M25 27h30M25 35h30M25 43h20" stroke="white" strokeWidth="3" strokeLinecap="round"/></svg>
              <span style={{position:'absolute',bottom:0,left:0,background:'rgba(0,0,0,0.3)',color:'#fff',padding:'4px 12px',fontSize:'0.75rem',fontWeight:600}}>FEATURED</span>
            </div>
            <div style={{padding:'40px'}}>
              <div style={{display:'flex',gap:'12px',marginBottom:'12px',alignItems:'center'}}>
                <span style={{background:'rgba(232,67,26,0.1)',color:'#E8431A',padding:'3px 10px',borderRadius:'999px',fontSize:'0.72rem',fontWeight:600}}>{featured.cat}</span>
                <span style={{fontSize:'0.78rem',color:'#9CA3AF'}}>{featured.date}</span>
                <span style={{fontSize:'0.78rem',color:'#9CA3AF'}}>· {featured.readTime}</span>
              </div>
              <h2 style={{fontSize:'1.4rem',fontWeight:700,color:'#1A1A2E',marginBottom:'12px',lineHeight:1.35}}>{featured.title}</h2>
              <p style={{color:'#6B7280',lineHeight:1.75,marginBottom:'20px'}}>{featured.excerpt}</p>
              <span style={{color:'#0057A8',fontWeight:600,fontSize:'0.9rem'}}>Read Full Article →</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="blog-grid">
            {rest.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{textDecoration:'none'}}>
                <div className="blog-img" style={{background:post.color}}>
                  <svg width="60" height="60" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="25" fill="rgba(255,255,255,0.1)"/><path d="M25 32h30M25 40h30M25 48h18" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
                  <span className="blog-cat">{post.cat}</span>
                </div>
                <div className="blog-content">
                  <p className="blog-date">{post.date} · {post.readTime}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <span className="blog-read">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
