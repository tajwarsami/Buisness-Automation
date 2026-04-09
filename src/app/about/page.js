import About from '@/components/About';
import WhyUs from '@/components/WhyUs';

export const metadata = {
  title: 'About Us',
  description: "Learn about Dynamic Technosoft — Nepal's #1 IRD-certified ERP provider since 2010. 200+ team members, 2,500+ clients, 15+ years of excellence.",
};

const TEAM = [
  { name: 'Mr. Deepak Sah', title: 'Founder & CEO', initial: 'D', bg: 'linear-gradient(135deg,#0057A8,#0096D6)', quote: 'Over 15 years, we have built a new dimension in Nepal\'s technology sector through trust, commitment, and continuous improvement.' },
  { name: 'Mr. Rajesh Kumar', title: 'Chief Technology Officer', initial: 'R', bg: 'linear-gradient(135deg,#22C55E,#16A34A)', quote: 'Our engineering team is committed to building world-class ERP systems that solve real problems for real businesses.' },
  { name: 'Ms. Priya Sharma', title: 'Head of Operations', initial: 'P', bg: 'linear-gradient(135deg,#8B5CF6,#7C3AED)', quote: 'Operational excellence is what keeps our clients coming back and recommending us to others.' },
  { name: 'Mr. Anish Gupta', title: 'Sales Director', initial: 'A', bg: 'linear-gradient(135deg,#E8431A,#FF6B3D)', quote: 'We don\'t just sell software — we build partnerships that last decades.' },
];

const MILESTONES = [
  { year: '2010', title: 'Founded in Birgunj', desc: 'Dynamic Technosoft was established with a vision to revolutionize IT in Nepal.' },
  { year: '2012', title: 'First ERP Launch', desc: 'Launched Academic ERP, quickly adopted by 50+ schools in the first year.' },
  { year: '2014', title: 'IRD Certification', desc: 'Became Nepal\'s first and only IRD-certified ERP provider.' },
  { year: '2016', title: 'Hospital ERP Launch', desc: 'Entered healthcare sector with integrated Hospital Management System.' },
  { year: '2018', title: '1,000+ Clients', desc: 'Crossed the milestone of 1,000 satisfied clients across Nepal.' },
  { year: '2020', title: 'International Expansion', desc: 'Extended operations to India and Japan with dedicated support teams.' },
  { year: '2022', title: 'Mobile Revolution', desc: 'Launched mobile apps for Academic ERP with parent & student portals.' },
  { year: '2025', title: '15 Years & 2,500+ Clients', desc: 'Celebrating 15 years of excellence with 2,500+ clients nationwide.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>WHO WE ARE</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            A Trusted Name in Nepal&apos;s IT Industry
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto',lineHeight:1.75}}>
            Building Nepal&apos;s digital future since 2010 — one enterprise solution at a time.
          </p>
        </div>
      </section>

      {/* About Detail */}
      <About />

      {/* Timeline */}
      <section style={{background:'#F5F7FA',padding:'96px 0'}}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">OUR JOURNEY</span>
            <h2 className="section-h2">15 Years of Milestones</h2>
            <p className="section-sub">From a small startup in Birgunj to Nepal&apos;s leading IT company.</p>
          </div>
          <div style={{position:'relative',maxWidth:'800px',margin:'0 auto'}}>
            <div style={{position:'absolute',left:'50%',top:0,bottom:0,width:'2px',background:'linear-gradient(to bottom,#0057A8,#0096D6)',transform:'translateX(-50%)'}}></div>
            {MILESTONES.map((m, i) => (
              <div key={m.year} className="animate-on-scroll" style={{display:'flex',gap:'40px',marginBottom:'40px',flexDirection: i%2===0?'row':'row-reverse',alignItems:'center'}}>
                <div style={{flex:1,textAlign: i%2===0?'right':'left'}}>
                  <div style={{background:'#fff',borderRadius:'12px',padding:'24px',border:'1px solid #E2E8F0',boxShadow:'0 2px 12px rgba(0,0,0,0.06)'}}>
                    <span style={{fontSize:'0.75rem',fontWeight:700,color:'#0096D6',textTransform:'uppercase',letterSpacing:'0.1em'}}>{m.year}</span>
                    <h3 style={{fontSize:'1rem',fontWeight:700,color:'#1A1A2E',margin:'6px 0 8px'}}>{m.title}</h3>
                    <p style={{fontSize:'0.85rem',color:'#6B7280',lineHeight:1.65}}>{m.desc}</p>
                  </div>
                </div>
                <div style={{width:'44px',height:'44px',borderRadius:'50%',background:'linear-gradient(135deg,#0057A8,#0096D6)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0,zIndex:1,color:'#fff',fontWeight:700,fontSize:'0.75rem'}}>{m.year.slice(2)}</div>
                <div style={{flex:1}}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{background:'#fff',padding:'96px 0'}}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">LEADERSHIP</span>
            <h2 className="section-h2">Meet Our Team</h2>
            <p className="section-sub">The passionate people driving Nepal&apos;s digital transformation.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))',gap:'24px'}}>
            {TEAM.map(member => (
              <div key={member.name} className="animate-on-scroll" style={{background:'#fff',border:'1px solid #E2E8F0',borderRadius:'12px',padding:'32px 24px',textAlign:'center',transition:'all 0.25s',boxShadow:'0 2px 12px rgba(0,0,0,0.06)'}}>
                <div style={{width:'80px',height:'80px',borderRadius:'50%',background:member.bg,display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 16px',fontSize:'2rem',fontWeight:700,color:'#fff'}}>{member.initial}</div>
                <h3 style={{fontSize:'1rem',fontWeight:700,color:'#1A1A2E',marginBottom:'4px'}}>{member.name}</h3>
                <p style={{fontSize:'0.8rem',color:'#0057A8',fontWeight:600,marginBottom:'12px'}}>{member.title}</p>
                <p style={{fontSize:'0.82rem',color:'#6B7280',fontStyle:'italic',lineHeight:1.6}}>"{member.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <WhyUs />
    </>
  );
}
