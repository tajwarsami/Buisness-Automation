import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import StatsBar from '@/components/StatsBar';

export const metadata = {
  title: 'Our Services',
  description: "Full-spectrum IT services from Dynamic Technosoft — Software Development, Web Development, Mobile Apps, Hardware & Networking, Computer Training, IT Consultancy, Digital Governance, and Cloud Solutions.",
};

const PROCESS = [
  { step: '01', title: 'Consultation', desc: 'We start with understanding your business requirements and challenges through detailed discussions.' },
  { step: '02', title: 'Planning', desc: 'Our team creates a tailored technology roadmap and project plan aligned with your goals.' },
  { step: '03', title: 'Development', desc: 'Experienced developers build your solution using modern technologies and best practices.' },
  { step: '04', title: 'Testing', desc: 'Rigorous QA testing ensures the solution is bug-free, secure, and performs at scale.' },
  { step: '05', title: 'Deployment', desc: 'We deploy your solution and provide hands-on training for your team.' },
  { step: '06', title: 'Support', desc: '24/7 after-sale support ensures your solution keeps running smoothly long-term.' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>WHAT WE DO</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            Full-Spectrum IT Solutions
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto',lineHeight:1.75}}>
            From software development to hardware setup — everything your business needs under one roof.
          </p>
        </div>
      </section>

      <StatsBar />

      {/* Services Grid */}
      <Services />

      {/* Process */}
      <section style={{background:'#F5F7FA',padding:'96px 0'}}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">HOW WE WORK</span>
            <h2 className="section-h2">Our Delivery Process</h2>
            <p className="section-sub">A proven 6-step methodology that ensures on-time, on-budget delivery.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>
            {PROCESS.map((step) => (
              <div key={step.step} className="animate-on-scroll" style={{background:'#fff',borderRadius:'12px',padding:'32px',border:'1px solid #E2E8F0',position:'relative',overflow:'hidden'}}>
                <div style={{position:'absolute',top:'-10px',right:'-10px',fontSize:'5rem',fontWeight:800,color:'rgba(0,87,168,0.05)',lineHeight:1}}>{step.step}</div>
                <div style={{width:'44px',height:'44px',borderRadius:'10px',background:'linear-gradient(135deg,#0057A8,#0096D6)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'16px',color:'#fff',fontWeight:700,fontSize:'0.9rem'}}>{step.step}</div>
                <h3 style={{fontSize:'1rem',fontWeight:700,color:'#1A1A2E',marginBottom:'8px'}}>{step.title}</h3>
                <p style={{fontSize:'0.85rem',color:'#6B7280',lineHeight:1.65}}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
    </>
  );
}
