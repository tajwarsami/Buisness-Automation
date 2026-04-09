import CareersAndContact from '@/components/CareersAndContact';

export const metadata = {
  title: 'Contact Us',
  description: "Get in touch with Dynamic Technosoft for ERP demos, product inquiries, software support, or partnership opportunities. Kathmandu, Nepal.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>GET IN TOUCH</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            Let&apos;s Start Your Digital Transformation
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto',lineHeight:1.75}}>
            Reach out for a free product demo, pricing inquiry, or any questions. Our team responds within 24 hours.
          </p>
        </div>
      </section>
      <CareersAndContact />
    </>
  );
}
