'use client';

const QUICK_LINKS = ['Home','About Us','Our Products','Our Services','Our Clients','Careers','Blog','Contact Us','Privacy Policy','Terms of Service'];
const PRODUCTS = ['Academic ERP','Accounting ERP','Hospital ERP','HRM & Payroll','Association Management','Business ERP'];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id === 'Home' ? 'hero' : id.toLowerCase().replace(/ /g,'-'));
    if (el) window.scrollTo({ top: el.offsetTop - 112, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Col 1 */}
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'10px',marginBottom:'12px'}}>
              <svg width="36" height="36" viewBox="0 0 38 38" fill="none" aria-hidden="true">
                <rect width="38" height="38" rx="8" fill="rgba(255,255,255,0.12)"/>
                <path d="M10 8h8c6.627 0 12 5.373 12 12s-5.373 12-12 12h-8V8z" fill="white" opacity="0.95"/>
                <path d="M10 14h6c3.314 0 6 2.686 6 6s-2.686 6-6 6h-6V14z" fill="rgba(255,255,255,0.1)"/>
                <circle cx="16" cy="20" r="2" fill="rgba(0,87,168,0.6)"/>
                <path d="M24 12 L28 12 L28 28 L24 28" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
                <circle cx="28" cy="12" r="1.5" fill="#E8431A"/>
                <circle cx="28" cy="20" r="1.5" fill="#E8431A"/>
                <circle cx="28" cy="28" r="1.5" fill="#E8431A"/>
              </svg>
              <div>
                <div className="footer-logo-name">Dynamic Technosoft</div>
                <div className="footer-logo-sub">Pvt. Ltd.</div>
              </div>
            </div>
            <p className="footer-tagline">One-stop shop for all your IT needs.</p>
            <p className="footer-desc">Nepal&apos;s leading IT solutions company providing comprehensive ERP systems, software development, hardware &amp; networking, and computer training since 2010.</p>
            <div className="footer-social">
              {[
                { cls: 'fb', label: 'Facebook', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { cls: 'li', label: 'LinkedIn', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', extra: <circle cx="4" cy="4" r="2"/> },
                { cls: 'tw', label: 'Twitter', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                { cls: 'yt', label: 'YouTube', path: 'M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.41 19.1C5.12 19.56 12 19.56 12 19.56s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z', extra: <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/> },
              ].map(s => (
                <button key={s.cls} className="footer-social-btn" aria-label={s.label}>
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={s.path}/>{s.extra}
                  </svg>
                </button>
              ))}
            </div>
            <div className="footer-cert">🏆 IRD Certified ERP Provider</div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            {QUICK_LINKS.map(l => (
              <a key={l} href="#" className="footer-link" onClick={e=>{e.preventDefault();scrollTo(l);}}>{l}</a>
            ))}
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="footer-col-title">Our Products</h4>
            {PRODUCTS.map(p => (
              <a key={p} href="#products" className="footer-link" onClick={e=>{e.preventDefault();const el=document.getElementById('products');el&&window.scrollTo({top:el.offsetTop-112,behavior:'smooth'});}}>{p}</a>
            ))}
            <div className="footer-promo">
              <p className="footer-promo-text">🎉 15th Anniversary Offer: 15% OFF all products</p>
              <a href="#contact" className="footer-promo-link" onClick={e=>{e.preventDefault();const el=document.getElementById('contact');el&&window.scrollTo({top:el.offsetTop-112,behavior:'smooth'});}}>Claim Now →</a>
            </div>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            {[
              { icon:'pin', text:'B&S Complex, 2nd Floor, Sankhamul Road, New Baneshwor, Kathmandu, Nepal' },
              { icon:'phone', text:'+977-9851163652 | +977-9801050626' },
              { icon:'mail', text:'info@dynamic.net.np', isLink:true },
              { icon:'clock', text:'Sun–Fri: 9:00 AM – 6:00 PM (NPT)' },
            ].map((item, i) => (
              <div key={i} className="footer-info-item">
                <span className="footer-info-icon">
                  {item.icon==='pin' && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>}
                  {item.icon==='phone' && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.08 9.82 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>}
                  {item.icon==='mail' && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>}
                  {item.icon==='clock' && <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>}
                </span>
                <span className="footer-info-text">
                  {item.isLink ? <a href={`mailto:${item.text}`} style={{color:'rgba(255,255,255,0.65)'}}>{item.text}</a> : item.text}
                </span>
              </div>
            ))}
            <p className="footer-branch">Branch Offices: Birgunj · Pokhara · Butwal · Dhangadhi · Biratnagar</p>
            <div className="footer-newsletter">
              <span className="footer-newsletter-label">Stay Updated</span>
              <div className="newsletter-row">
                <input type="email" className="newsletter-input" placeholder="your@email.com" aria-label="Email for newsletter"/>
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="footer-copy">© 2025 Dynamic Technosoft Pvt. Ltd. All Rights Reserved.</p>
          <p className="footer-credit">Designed &amp; Developed in Nepal 🇳🇵</p>
        </div>
      </div>
    </footer>
  );
}
