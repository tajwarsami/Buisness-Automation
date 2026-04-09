'use client';
import { useState, useEffect } from 'react';

export default function FloatingElements() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Back to top */}
      <button
        className={`back-to-top${visible ? ' visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        <svg width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </button>

      {/* Chat bubble */}
      <div
        className="chat-bubble"
        role="button"
        tabIndex={0}
        aria-label="Chat with us"
        style={{position:'fixed',bottom:'28px',left:'28px',zIndex:999}}
        onClick={() => { const el = document.getElementById('contact'); el && window.scrollTo({ top: el.offsetTop - 112, behavior: 'smooth' }); }}
      >
        <svg width="26" height="26" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
        <div className="chat-tooltip">Chat with us!</div>
      </div>
    </>
  );
}
