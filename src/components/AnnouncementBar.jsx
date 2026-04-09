'use client';
import { useState } from 'react';

export default function AnnouncementBar({ onClose }) {
  const [closed, setClosed] = useState(false);

  const handleClose = () => {
    setClosed(true);
    onClose?.();
  };

  return (
    <div className={`announcement-bar${closed ? ' closed' : ''}`} role="banner" aria-label="Announcement">
      <span>
        🎉 Celebrating 15+ Years of Excellence! Get 15% OFF on all ERP products — Limited time offer.
        <a href="#contact">Claim Offer →</a>
      </span>
      <button className="bar-close" onClick={handleClose} aria-label="Close announcement">✕</button>
    </div>
  );
}
