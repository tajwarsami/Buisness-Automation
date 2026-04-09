'use client';

const news = [
  '🎉 Dynamic Technosoft celebrates 15 years of excellence in IT solutions',
  ' · 🏆 First IRD-Certified ERP Provider in Nepal · ',
  '🌍 Expanding internationally to Dubai, Malaysia & Indonesia · ',
  '📢 15% discount on all software products — limited time offer · ',
  '📱 New mobile app modules available for Academic ERP · ',
];
const text = news.join('') + ' ' + news.join('');

export default function Ticker() {
  return (
    <div className="ticker" aria-label="Latest news" role="marquee" aria-live="off">
      <div className="ticker-label">LATEST NEWS</div>
      <div className="ticker-track">
        <div className="ticker-inner">
          <span className="ticker-text">{text}</span>
        </div>
      </div>
    </div>
  );
}
