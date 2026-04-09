import Products from '@/components/Products';
import StatsBar from '@/components/StatsBar';

export const metadata = {
  title: 'Our Products',
  description: "Explore Dynamic Technosoft's complete range of ERP solutions — Academic ERP, Accounting ERP, Hospital ERP, HRM & Payroll, Business ERP, and Association Management System.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{background:'linear-gradient(135deg,#0057A8,#0096D6)',padding:'80px 0 64px',textAlign:'center'}}>
        <div className="container">
          <span className="section-label" style={{color:'rgba(255,255,255,0.7)',justifyContent:'center'}}>OUR PRODUCTS</span>
          <h1 style={{fontSize:'clamp(2rem,4vw,3rem)',fontWeight:800,color:'#fff',margin:'12px 0 16px',lineHeight:1.2}}>
            Comprehensive ERP Solutions
          </h1>
          <p style={{color:'rgba(255,255,255,0.85)',fontSize:'1.05rem',maxWidth:'600px',margin:'0 auto 32px',lineHeight:1.75}}>
            Industry-specific platforms built to optimize operations, reduce costs, and drive digital transformation across Nepal.
          </p>
          <div style={{display:'flex',gap:'12px',justifyContent:'center',flexWrap:'wrap'}}>
            {['IRD Certified','15+ Years Experience','2,500+ Clients','24/7 Support'].map(b => (
              <span key={b} style={{background:'rgba(255,255,255,0.18)',border:'1px solid rgba(255,255,255,0.3)',color:'#fff',padding:'6px 16px',borderRadius:'999px',fontSize:'0.82rem',fontWeight:500}}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <StatsBar />
      <Products />
    </>
  );
}
