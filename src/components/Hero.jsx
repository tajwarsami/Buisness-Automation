'use client';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 112, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero-section" aria-labelledby="hero-heading">
      <div className="hero-dots" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-content">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              <span>Nepal&apos;s #1 IRD-Certified ERP Provider</span>
            </div>
            <h1 className="hero-h1" id="hero-heading">
              Empowering Businesses Through{' '}
              <span className="highlight">Digital Innovation</span>
            </h1>
            <p className="hero-sub">
              Nepal&apos;s leading IT solutions company since 2010. Delivering world-class ERP systems,
              custom software, and digital transformation services to 2,500+ clients across Nepal, India &amp; Japan.
            </p>
            <div className="hero-trust">
              {[
                { icon: '⭐', label: 'IRD Certified' },
                { icon: '🛡️', label: 'ISO Compliant' },
                { icon: '🕐', label: '15+ Years' },
                { icon: '📞', label: '24/7 Support' },
              ].map(b => (
                <div key={b.label} className="trust-badge">
                  <span style={{color:'#F59E0B'}}>{b.icon}</span>{b.label}
                </div>
              ))}
            </div>
            <div className="hero-ctas">
              <button className="btn-primary" onClick={() => scrollTo('products')}>Explore Our Products →</button>
              <button className="btn-outline-white" onClick={() => scrollTo('contact')}>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
                Watch Demo ▶
              </button>
            </div>
            <div className="hero-clients">
              <div className="avatar-stack" aria-hidden="true">
                {[['R','#0057A8','#0096D6'],['S','#22C55E','#16A34A'],['A','#F59E0B','#D97706'],['M','#E8431A','#FF6B3D']].map(([l,c1,c2]) => (
                  <div key={l} className="av" style={{background:`linear-gradient(135deg,${c1},${c2})`}}>{l}</div>
                ))}
              </div>
              <div>
                <strong style={{color:'#fff'}}>2,500+</strong>
                <span style={{color:'rgba(255,255,255,0.75)',fontSize:'0.85rem'}}> clients trust us</span>
              </div>
            </div>
          </div>

          {/* Right — SVG Dashboard Illustration */}
          <div className="hero-right" aria-hidden="true">
            <div className="hero-illustration">
              <svg viewBox="0 0 420 320" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%">
                <defs>
                  <filter id="s1" x="-5%" y="-5%" width="115%" height="120%">
                    <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="rgba(0,0,0,0.10)"/>
                  </filter>
                  <filter id="s2" x="-10%" y="-10%" width="130%" height="140%">
                    <feDropShadow dx="0" dy="3" stdDeviation="6" floodColor="rgba(0,0,0,0.07)"/>
                  </filter>
                  <filter id="s3" x="-15%" y="-15%" width="145%" height="150%">
                    <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="rgba(0,0,0,0.15)"/>
                  </filter>
                  <linearGradient id="bG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0096D6"/>
                    <stop offset="100%" stopColor="#0057A8"/>
                  </linearGradient>
                </defs>
                {/* Main card */}
                <rect x="10" y="20" width="370" height="260" rx="16" fill="white" filter="url(#s1)"/>
                {/* Window bar */}
                <circle cx="32" cy="40" r="6" fill="#EF4444"/>
                <circle cx="50" cy="40" r="6" fill="#F59E0B"/>
                <circle cx="68" cy="40" r="6" fill="#22C55E"/>
                <text x="92" y="44" fontFamily="Poppins,sans-serif" fontSize="11" fill="#6B7280" fontWeight="600">Dynamic ERP Dashboard</text>
                {/* Sidebar */}
                <rect x="10" y="56" width="72" height="224" fill="#0D1B2A"/>
                <rect x="18" y="72" width="56" height="8" rx="4" fill="rgba(255,255,255,0.2)"/>
                <rect x="18" y="92" width="56" height="8" rx="4" fill="rgba(255,255,255,0.15)"/>
                <rect x="18" y="112" width="56" height="8" rx="4" fill="#0057A8"/>
                <rect x="18" y="132" width="56" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
                <rect x="18" y="152" width="56" height="8" rx="4" fill="rgba(255,255,255,0.1)"/>
                {/* Content area */}
                <rect x="82" y="56" width="298" height="224" fill="#F5F7FA"/>
                {/* KPI cards */}
                <rect x="90" y="66" width="130" height="66" rx="8" fill="white" filter="url(#s2)"/>
                <text x="102" y="88" fontFamily="Poppins,sans-serif" fontSize="8" fill="#6B7280">Total Students</text>
                <text x="102" y="108" fontFamily="Poppins,sans-serif" fontSize="16" fill="#0057A8" fontWeight="700">4,280</text>
                <rect x="232" y="66" width="138" height="66" rx="8" fill="white" filter="url(#s2)"/>
                <text x="244" y="88" fontFamily="Poppins,sans-serif" fontSize="8" fill="#6B7280">Revenue (NRS)</text>
                <text x="244" y="108" fontFamily="Poppins,sans-serif" fontSize="16" fill="#22C55E" fontWeight="700">₹12.4L</text>
                {/* Bar chart */}
                <rect x="90" y="146" width="180" height="120" rx="8" fill="white" filter="url(#s2)"/>
                <text x="102" y="164" fontFamily="Poppins,sans-serif" fontSize="8" fill="#6B7280" fontWeight="600">Monthly Admissions</text>
                {[[102,28],[126,40],[150,48],[174,58],[198,45],[222,53]].map(([x,h],i) => (
                  <rect key={i} x={x} y={258-h} width="18" height={h} rx="3" fill="url(#bG)"/>
                ))}
                {/* Donut */}
                <circle cx="320" cy="218" r="38" fill="white" filter="url(#s2)"/>
                <circle cx="320" cy="218" r="28" fill="none" stroke="#E2E8F0" strokeWidth="16"/>
                <circle cx="320" cy="218" r="28" fill="none" stroke="#0057A8" strokeWidth="16" strokeDasharray="52 176" strokeDashoffset="-44" strokeLinecap="round"/>
                <circle cx="320" cy="218" r="28" fill="none" stroke="#22C55E" strokeWidth="16" strokeDasharray="35 176" strokeDashoffset="-96" strokeLinecap="round"/>
                <circle cx="320" cy="218" r="28" fill="none" stroke="#F59E0B" strokeWidth="16" strokeDasharray="20 176" strokeDashoffset="-131" strokeLinecap="round"/>
                <circle cx="320" cy="218" r="16" fill="white"/>
                <text x="320" y="222" fontFamily="Poppins" fontSize="8" fill="#0057A8" fontWeight="700" textAnchor="middle">98%</text>
                {/* Float card 1 */}
                <g className="float-card-1">
                  <rect x="2" y="190" width="90" height="58" rx="10" fill="white" filter="url(#s3)"/>
                  <circle cx="22" cy="225" r="13" fill="#F0FDF4"/>
                  <text x="22" y="230" fontFamily="Poppins" fontSize="13" fill="#22C55E" textAnchor="middle">✓</text>
                  <text x="42" y="216" fontFamily="Poppins" fontSize="7.5" fill="#0057A8" fontWeight="700">IRD Certified</text>
                  <text x="42" y="230" fontFamily="Poppins" fontSize="6.5" fill="#6B7280">First in Nepal</text>
                </g>
                {/* Float card 2 */}
                <g className="float-card-2">
                  <rect x="278" y="4" width="110" height="56" rx="10" fill="white" filter="url(#s3)"/>
                  <text x="296" y="28" fontFamily="Poppins" fontSize="16" fill="#F59E0B">★</text>
                  <text x="316" y="28" fontFamily="Poppins" fontSize="11" fill="#1A1A2E" fontWeight="700">4.9/5</text>
                  <text x="296" y="44" fontFamily="Poppins" fontSize="6.5" fill="#6B7280">Based on 500+ reviews</text>
                </g>
                {/* 15+ badge */}
                <g className="float-badge">
                  <circle cx="376" cy="256" r="30" fill="#E8431A" filter="url(#s3)"/>
                  <text x="376" y="251" fontFamily="Poppins" fontSize="13" fill="white" fontWeight="800" textAnchor="middle">15+</text>
                  <text x="376" y="265" fontFamily="Poppins" fontSize="7" fill="rgba(255,255,255,0.85)" textAnchor="middle">Years</text>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
