import Clients from '@/components/Clients';
import ImpactAndBlog from '@/components/ImpactAndBlog';

export const metadata = {
  title: 'Our Clients',
  description: "2,500+ organizations across Nepal, India, and Japan trust Dynamic Technosoft. Explore our client testimonials, case studies, and industry coverage.",
};

const CASE_STUDIES = [
  {
    title: 'Model Secondary School, Kathmandu',
    industry: 'Education',
    color: '#0057A8',
    bg: 'linear-gradient(135deg,#0057A8,#0096D6)',
    challenge: 'Manual fee collection and attendance tracking causing administrative bottlenecks.',
    solution: 'Deployed Dynamic Academic ERP with parent portal and biometric attendance integration.',
    result: ['70% reduction in fee collection time', '98% attendance accuracy', 'Parents get real-time updates', 'ROI achieved in 6 months'],
  },
  {
    title: 'Star Trading Co., Butwal',
    industry: 'Business',
    color: '#22C55E',
    bg: 'linear-gradient(135deg,#16A34A,#22C55E)',
    challenge: 'Disconnected systems for accounting, inventory, and payroll causing errors and delays.',
    solution: 'Implemented Dynamic Accounting ERP with IRD-compliant VAT/TDS filing and multi-branch support.',
    result: ['100% IRD compliance achieved', '60% faster month-end closing', 'Zero manual tax calculation errors', 'Expanded to 3 new branches'],
  },
  {
    title: 'City Hospital, Birgunj',
    industry: 'Healthcare',
    color: '#EF4444',
    bg: 'linear-gradient(135deg,#DC2626,#EF4444)',
    challenge: 'Paper-based patient records causing delays and billing errors in a 200-bed facility.',
    solution: 'End-to-end Hospital ERP covering OPD, IPD, pharmacy, lab, and billing automation.',
    result: ['Patient wait time reduced by 45%', 'Billing errors eliminated', 'Lab results in under 30 mins', 'Insurance claims processed digitally'],
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>OUR CLIENTS</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            Trusted by 2,500+ Organizations
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto',lineHeight:1.75}}>
            From schools and hospitals to businesses and municipalities — organizations across Nepal rely on Dynamic Technosoft.
          </p>
        </div>
      </section>

      {/* Clients & Testimonials */}
      <Clients />

      {/* Case Studies */}
      <section style={{background:'#F5F7FA',padding:'96px 0'}}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">CASE STUDIES</span>
            <h2 className="section-h2">Real Results. Real Impact.</h2>
            <p className="section-sub">See how Dynamic Technosoft has transformed operations for organizations across Nepal.</p>
          </div>
          <div style={{display:'grid',gap:'32px'}}>
            {CASE_STUDIES.map((cs, i) => (
              <div key={cs.title} className="animate-on-scroll" style={{display:'grid',gridTemplateColumns: i%2===0 ? '35% 65%' : '65% 35%',background:'#fff',borderRadius:'16px',overflow:'hidden',border:'1px solid #E2E8F0',boxShadow:'0 4px 20px rgba(0,0,0,0.07)'}}>
                <div style={{background:cs.bg,padding:'40px',display:'flex',flexDirection:'column',justifyContent:'center',order: i%2===0 ? 0 : 1}}>
                  <span style={{background:'rgba(255,255,255,0.2)',color:'#fff',padding:'4px 12px',borderRadius:'999px',fontSize:'0.72rem',fontWeight:600,display:'inline-block',marginBottom:'12px',width:'fit-content'}}>{cs.industry}</span>
                  <h3 style={{color:'#fff',fontSize:'1.3rem',fontWeight:700,lineHeight:1.3}}>{cs.title}</h3>
                </div>
                <div style={{padding:'40px',order: i%2===0 ? 1 : 0}}>
                  <div style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'0.72rem',fontWeight:700,color:cs.color,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'6px'}}>Challenge</p>
                    <p style={{fontSize:'0.9rem',color:'#6B7280',lineHeight:1.65}}>{cs.challenge}</p>
                  </div>
                  <div style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'0.72rem',fontWeight:700,color:cs.color,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'6px'}}>Solution</p>
                    <p style={{fontSize:'0.9rem',color:'#6B7280',lineHeight:1.65}}>{cs.solution}</p>
                  </div>
                  <div>
                    <p style={{fontSize:'0.72rem',fontWeight:700,color:cs.color,textTransform:'uppercase',letterSpacing:'0.1em',marginBottom:'10px'}}>Results</p>
                    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'8px'}}>
                      {cs.result.map(r => (
                        <div key={r} style={{display:'flex',alignItems:'flex-start',gap:'8px'}}>
                          <span style={{color:'#22C55E',fontWeight:700,flexShrink:0,fontSize:'0.85rem'}}>✓</span>
                          <span style={{fontSize:'0.82rem',color:'#374151'}}>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactAndBlog />
    </>
  );
}
