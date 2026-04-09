import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{minHeight:'60vh',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',padding:'80px 24px'}}>
      <div style={{width:'120px',height:'120px',borderRadius:'50%',background:'linear-gradient(135deg,#EBF4FF,#DCF0FF)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 24px',fontSize:'3rem'}}>
        🔍
      </div>
      <h1 style={{fontSize:'5rem',fontWeight:800,color:'#0057A8',lineHeight:1}}>404</h1>
      <h2 style={{fontSize:'1.5rem',fontWeight:700,color:'#1A1A2E',margin:'12px 0 8px'}}>Page Not Found</h2>
      <p style={{color:'#6B7280',maxWidth:'400px',lineHeight:1.7,marginBottom:'32px'}}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div style={{display:'flex',gap:'12px',flexWrap:'wrap',justifyContent:'center'}}>
        <Link href="/" className="btn-primary">Go Home</Link>
        <Link href="/contact" className="btn-outline-blue">Contact Support</Link>
      </div>
    </div>
  );
}
