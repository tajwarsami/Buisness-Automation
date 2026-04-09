'use client';
import { useEffect, useRef } from 'react';

const features = [
  'First IRD-Certified ERP provider in Nepal',
  '15+ years of proven industry experience',
  '2,500+ satisfied clients across 3 countries',
  '800+ schools & colleges use our Academic ERP',
  '100+ hospitals powered by our Hospital ERP',
  '50+ authorized dealers across Nepal',
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry, _) => {
        if (entry.isIntersecting) {
          const siblings = Array.from(entry.target.parentElement?.children || [entry.target]);
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${idx * 0.07}s`;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    els?.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef} aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left */}
          <div>
            <div className="section-header left animate-on-scroll">
              <span className="section-label">WHO WE ARE</span>
              <h2 className="section-h2" id="about-heading">A Trusted Name in Nepal&apos;s IT Industry Since 2010</h2>
            </div>
            <p className="about-lead animate-on-scroll">
              Dynamic Technosoft Pvt. Ltd. is a recognized leader in IT service provision, delivering
              comprehensive ERP software, web development, computer training, hardware &amp; networking, and
              IT consultancy services. Founded in 2010 in Birgunj, we have grown into a team of 200+
              dedicated professionals serving clients across Nepal, India, and Japan.
            </p>
            <p className="about-body animate-on-scroll">
              We pioneered ERP adoption in Nepal and remain the country&apos;s first and only
              Inland Revenue Department (IRD)-certified ERP provider. Our One-Stop Shop philosophy
              means clients get everything from software implementation to after-sale support
              through a single point of contact.
            </p>
            <div className="feature-list">
              {features.map((f, i) => (
                <div key={i} className="feature-item animate-on-scroll">
                  <div className="feature-icon">
                    <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <span className="feature-text">{f}</span>
                </div>
              ))}
            </div>
            <div className="about-leaders animate-on-scroll">
              <p className="leader-label">Leadership</p>
              <div className="leader-card">
                <div className="leader-av">D</div>
                <div>
                  <div className="leader-name">Mr. Deepak Sah</div>
                  <div className="leader-title">Founder &amp; CEO</div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{color:'#0A66C2',fontSize:'0.78rem',fontWeight:'600'}}>🔗 LinkedIn</a>
                </div>
              </div>
              <p className="leader-quote">
                &quot;Over 15 years, we have built a new dimension in Nepal&apos;s technology sector through trust, commitment, and continuous improvement.&quot;
              </p>
            </div>
            <div className="about-ctas animate-on-scroll">
              <button className="btn-secondary">Our Full Story →</button>
              <button className="btn-outline-blue">Meet the Team</button>
            </div>
          </div>

          {/* Right — Nepal Map SVG */}
          <div className="about-visual animate-on-scroll">
            <svg viewBox="0 0 420 380" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" style={{maxWidth:'420px'}}>
              <defs>
                <filter id="shaA" x="-10%" y="-10%" width="130%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="rgba(0,0,0,0.10)"/>
                </filter>
              </defs>
              <ellipse cx="210" cy="190" rx="190" ry="165" fill="#E8F4FD" opacity="0.7"/>
              <path d="M60 200 Q80 160 120 155 Q150 150 180 145 Q210 140 240 150 Q270 155 300 160 Q330 165 360 170 Q380 180 370 210 Q360 230 330 240 Q300 250 270 255 Q240 260 210 260 Q180 260 150 255 Q120 248 90 238 Q65 225 60 200z"
                fill="#0057A8" opacity="0.12" stroke="#0057A8" strokeWidth="1.5" strokeOpacity="0.3"/>
              {/* Kathmandu */}
              <circle cx="220" cy="175" r="18" fill="#E8431A" opacity="0.15"/>
              <circle cx="220" cy="175" r="8" fill="#E8431A" opacity="0.3"/>
              <circle cx="220" cy="175" r="5" fill="#E8431A"/>
              <rect x="228" y="162" width="82" height="22" rx="5" fill="white" filter="url(#shaA)"/>
              <text x="234" y="177" fontFamily="Poppins,sans-serif" fontSize="8.5" fill="#0057A8" fontWeight="600">Kathmandu HQ</text>
              {/* Birgunj */}
              <circle cx="235" cy="240" r="6" fill="#E8431A" opacity="0.4"/>
              <circle cx="235" cy="240" r="4" fill="#E8431A"/>
              <rect x="243" y="232" width="74" height="20" rx="5" fill="white" filter="url(#shaA)"/>
              <text x="247" y="246" fontFamily="Poppins,sans-serif" fontSize="8" fill="#0057A8" fontWeight="500">Birgunj Branch</text>
              {/* Pokhara */}
              <circle cx="140" cy="185" r="5" fill="#E8431A" opacity="0.4"/>
              <circle cx="140" cy="185" r="3.5" fill="#E8431A"/>
              <rect x="58" y="178" width="68" height="18" rx="5" fill="white" filter="url(#shaA)"/>
              <text x="63" y="191" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="#0057A8" fontWeight="500">Pokhara</text>
              {/* Butwal */}
              <circle cx="168" cy="228" r="4.5" fill="#E8431A" opacity="0.4"/>
              <circle cx="168" cy="228" r="3" fill="#E8431A"/>
              <rect x="92" y="221" width="62" height="18" rx="5" fill="white" filter="url(#shaA)"/>
              <text x="96" y="234" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="#0057A8" fontWeight="500">Butwal</text>
              {/* Dhangadhi */}
              <circle cx="82" cy="195" r="4.5" fill="#E8431A" opacity="0.4"/>
              <circle cx="82" cy="195" r="3" fill="#E8431A"/>
              {/* Achievement card */}
              <rect x="14" y="285" width="170" height="76" rx="10" fill="white" filter="url(#shaA)"/>
              <rect x="14" y="285" width="4" height="76" rx="2" fill="#22C55E"/>
              <text x="28" y="310" fontFamily="Poppins,sans-serif" fontSize="11" fill="#1A1A2E">🏆</text>
              <text x="50" y="309" fontFamily="Poppins,sans-serif" fontSize="9" fill="#1A1A2E" fontWeight="700">Nepal&apos;s #1 ERP Company</text>
              <text x="28" y="332" fontFamily="Poppins,sans-serif" fontSize="8" fill="#6B7280">15 consecutive years</text>
              <text x="28" y="348" fontFamily="Poppins,sans-serif" fontSize="7.5" fill="#22C55E" fontWeight="600">✓ Verified Achievement</text>
              {/* Stats card */}
              <rect x="256" y="50" width="148" height="86" rx="10" fill="white" filter="url(#shaA)"/>
              <line x1="256" y1="93" x2="404" y2="93" stroke="#E2E8F0" strokeWidth="1"/>
              <text x="280" y="80" fontFamily="Poppins,sans-serif" fontSize="18" fill="#0057A8" fontWeight="800">200+</text>
              <text x="280" y="95" fontFamily="Poppins,sans-serif" fontSize="9" fill="#6B7280">Team Members</text>
              <text x="350" y="80" fontFamily="Poppins,sans-serif" fontSize="18" fill="#22C55E" fontWeight="800">3</text>
              <text x="345" y="95" fontFamily="Poppins,sans-serif" fontSize="9" fill="#6B7280">Countries</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
