'use client';

import { useState } from 'react';
import Link from 'next/link';

function ProfileAvatar({ member }) {
  if (member.photo) {
    return <img src={member.photo} alt={member.name} className="about-profile-avatar-image" />;
  }

  const initials = member.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

  return <div className="about-profile-avatar-fallback">{initials}</div>;
}

export default function AboutDetailPage({ page, relatedLinks = [] }) {
  const [selectedMemberId, setSelectedMemberId] = useState(page.teamMembers?.[0]?.id ?? null);
  const [expandedMemberId, setExpandedMemberId] = useState(null);
  const primaryMember = page.teamMembers?.find((member) => member.id === selectedMemberId) ?? page.teamMembers?.[0] ?? null;
  const sectionCards = page.sections ?? page.focusCards ?? [];
  const logoItems = page.logos ?? [];
  const showHero = page.showHero !== false;
  const showIntro = page.showIntro !== false;
  const narrativeLayout = page.narrativeLayout === true;
  const isExpanded = primaryMember ? expandedMemberId === primaryMember.id : false;
  const visibleSpeech = primaryMember
    ? isExpanded
      ? primaryMember.fullSpeech ?? primaryMember.speech
      : primaryMember.speech
    : '';

  function handleMemberSelect(memberId) {
    setSelectedMemberId(memberId);
    setExpandedMemberId(null);
  }

  return (
    <div className="about-detail-page">
      {showHero && (
        <section className="about-detail-hero">
          <div className="about-detail-hero-wave" aria-hidden="true" />
          <div className="container about-detail-hero-inner">
            <div className="about-detail-copy">
              <span className="about-detail-eyebrow">About Us</span>
              <h1 className="about-detail-title">{page.heroTitle}</h1>
              <p className="about-detail-subtitle">{page.heroSubtitle}</p>
              {page.badgeItems?.length > 0 && (
                <div className="about-detail-badges">
                  {page.badgeItems.map((item) => (
                    <span key={item} className="about-detail-badge">{item}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {showIntro && (
        <section className="about-detail-section">
          <div className="container about-detail-intro-grid">
            <div>
              <span className="about-detail-label">Overview</span>
              <h2 className="about-detail-heading">{page.introTitle}</h2>
              {page.introText?.map((paragraph) => (
                <p key={paragraph} className="about-detail-text">{paragraph}</p>
              ))}
            </div>
            <div className="about-detail-panel">
              <div className="about-detail-panel-accent" />
              <div className="about-detail-panel-body">
                <h3>{page.heroTitle}</h3>
                <p>{page.heroSubtitle}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {page.teamMembers?.length > 0 && primaryMember && (
        <section className="about-detail-section about-detail-team-section">
          <div className="container">
            <div className="about-detail-section-header">
              {page.teamSectionLabel && <span className="about-detail-label">{page.teamSectionLabel}</span>}
              <h2 className="about-detail-heading">{page.teamSectionTitle ?? 'Photo, Name, Position, and Speech'}</h2>
              {page.teamSectionDescription && (
                <p className="about-detail-text about-team-section-text">{page.teamSectionDescription}</p>
              )}
            </div>

            <div className="about-team-layout">
              <div className="about-profile-grid" role="tablist" aria-label="Leadership team">
                {page.teamMembers.map((member) => (
                  <button
                    key={member.id}
                    type="button"
                    className={`about-profile-button${primaryMember?.id === member.id ? ' active' : ''}`}
                    onClick={() => handleMemberSelect(member.id)}
                  >
                    <span className="about-profile-avatar">
                      <ProfileAvatar member={member} />
                    </span>
                    <span className="about-profile-meta">
                      <span className="about-profile-name">{member.name}</span>
                      <span className="about-profile-position">{member.position}</span>
                    </span>
                  </button>
                ))}
              </div>

              <article key={`${primaryMember.id}-${isExpanded ? 'open' : 'closed'}`} className="about-speech-card about-speech-card-animated">
                <div className="about-speech-visual">
                  <div className="about-speech-avatar about-speech-avatar-large">
                    <ProfileAvatar member={primaryMember} />
                  </div>
                </div>
                <div className="about-speech-header">
                  <div>
                    <h3>{primaryMember.name}</h3>
                    <p>{primaryMember.position}</p>
                  </div>
                </div>
                <blockquote className="about-speech-quote">"{visibleSpeech}"</blockquote>
                {primaryMember.summary && <p className="about-speech-summary">{primaryMember.summary}</p>}
                {primaryMember.fullSpeech && primaryMember.fullSpeech !== primaryMember.speech && (
                  <button
                    type="button"
                    className="about-read-more-button"
                    onClick={() => setExpandedMemberId(isExpanded ? null : primaryMember.id)}
                  >
                    {isExpanded ? 'View Less' : 'View More'}
                  </button>
                )}
              </article>
            </div>
          </div>
        </section>
      )}

      {sectionCards.length > 0 && (
        <section className={`about-detail-section${narrativeLayout ? ' about-detail-section-narrative' : ''}`}>
          <div className="container">
            <div className={narrativeLayout ? 'about-detail-story-grid' : 'about-detail-card-grid'}>
              {sectionCards.map((section) => (
                <article key={section.title} className={`about-detail-card${narrativeLayout ? ' about-detail-story-card' : ''}`}>
                  <h3>{section.title}</h3>
                  {section.text.split('\n\n').map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {logoItems.length > 0 && (
        <section className="about-detail-section about-detail-logo-section">
          <div className="container">
            <div className="about-detail-section-header">
              <span className="about-detail-label">Dynamic Group</span>
              <h2 className="about-detail-heading">Group Companies</h2>
            </div>
            <div className={`about-logo-grid${narrativeLayout ? ' about-logo-grid-band' : ''}`}>
              {logoItems.map((logo) => (
                <div key={logo.name} className="about-logo-card">
                  <div className="about-logo-mark">{logo.short}</div>
                  <h3>{logo.name}</h3>
                  <p>{logo.tagline}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {page.showCta !== false && (
        <section className="about-detail-section">
          <div className="container">
            <div className="about-detail-cta">
              <div>
                <span className="about-detail-label">Next Step</span>
                <h2 className="about-detail-heading">Let&apos;s talk about your requirement</h2>
                <p className="about-detail-text">
                  These pages now pull their content from data, so we can update text, profiles, logos, and company messaging much faster.
                </p>
              </div>
              <div className="about-detail-cta-actions">
                <Link href="/contact" className="btn-primary">Contact Us</Link>
                {relatedLinks[0] && <Link href={relatedLinks[0].href} className="btn-outline-blue">{relatedLinks[0].label}</Link>}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
