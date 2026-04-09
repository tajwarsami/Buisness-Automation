import CareersAndContact from '@/components/CareersAndContact';

export const metadata = {
  title: 'Careers',
  description: "Join Nepal's leading IT company. Dynamic Technosoft is hiring Software Developers, Business Development Executives, and Technical Support Engineers.",
};

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>CAREERS</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            Grow with Dynamic Technosoft
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto',lineHeight:1.75}}>
            Join a team of 200+ passionate professionals building Nepal&apos;s digital future.
          </p>
        </div>
      </section>
      <CareersAndContact />
    </>
  );
}
