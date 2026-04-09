'use client';
import { useEffect, useRef } from 'react';

const stats = [
  { target: 2500, suffix: '+', label1: 'Clients', label2: 'Nationwide' },
  { target: 800, suffix: '+', label1: 'Schools &', label2: 'Colleges' },
  { target: 100, suffix: '+', label1: 'Hospitals &', label2: 'Clinics' },
  { target: 50, suffix: '+', label1: 'Authorized', label2: 'Dealers' },
];

function easeOutQuad(t) { return t * (2 - t); }

export default function StatsBar() {
  const refs = useRef([]);
  const started = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const idx = refs.current.indexOf(entry.target);
        if (idx === -1 || started.current[idx]) return;
        started.current[idx] = true;
        const { target, suffix } = stats[idx];
        let startTime = null;
        const duration = 2000;
        const step = (ts) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / duration, 1);
          const val = Math.floor(easeOutQuad(progress) * target);
          if (entry.target) entry.target.textContent = val.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.3 });

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-bar" aria-label="Company statistics">
      <div className="stats-inner container">
        {stats.map((s, i) => (
          <div key={i} className="stat-item">
            <span
              className="stat-number"
              ref={el => refs.current[i] = el}
              data-target={s.target}
              data-suffix={s.suffix}
            >
              {s.target.toLocaleString()}{s.suffix}
            </span>
            <span className="stat-label1">{s.label1}</span>
            <span className="stat-label2">{s.label2}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
