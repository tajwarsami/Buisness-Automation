'use client';
import { useState } from 'react';
import Link from 'next/link';
import { blogsData as d } from './resourcesData';

function BlogCard({ category, title, excerpt, readTime, date }) {
  return (
    <article className="blog-card">
      <div className="blog-card-top">
        <span className="blog-category">{category}</span>
        <span className="blog-date">{date}</span>
      </div>
      <h3 className="blog-card-title">{title}</h3>
      <p className="blog-card-excerpt">{excerpt}</p>
      <div className="blog-card-footer">
        <span className="blog-read-time">⏱ {readTime}</span>
        <span className="blog-read-link">Read article →</span>
      </div>
    </article>
  );
}

export default function Blogs() {
  const { hero, intro, featuredPosts, categories, cta } = d;
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? featuredPosts
    : featuredPosts.filter((p) => p.category === activeCategory);

  return (
    <div className="blog-page">
      {/* Hero */}
      <section className="blog-hero">
        <div className="blog-hero-bg" aria-hidden="true">
          <div className="blog-hero-stripe blog-hs-1" />
          <div className="blog-hero-stripe blog-hs-2" />
          <div className="blog-hero-stripe blog-hs-3" />
        </div>
        <div className="container blog-hero-inner">
          <div className="blog-hero-copy">
            <span className="blog-eyebrow">{hero.eyebrow}</span>
            <h1 className="blog-hero-title">{hero.title}</h1>
            <p className="blog-hero-subtitle">{hero.subtitle}</p>
            <div className="blog-hero-badges">
              {hero.badges.map((b) => <span key={b} className="blog-badge">{b}</span>)}
            </div>
          </div>
          <div className="blog-hero-stats" aria-hidden="true">
            {[{ v: '50+', l: 'Articles' }, { v: '6', l: 'Categories' }, { v: 'Weekly', l: 'Updates' }].map(({ v, l }) => (
              <div key={l} className="blog-hero-stat">
                <span className="blog-hs-value">{v}</span>
                <span className="blog-hs-label">{l}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="blog-hero-wave" />
      </section>

      {/* Filter */}
      <section className="blog-section blog-filter-section">
        <div className="container">
          <span className="blog-section-label">Filter by Category</span>
          <div className="blog-filter-strip">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-filter-btn ${activeCategory === cat ? 'blog-filter-btn-active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="blog-section blog-intro-section">
        <div className="container blog-intro-grid">
          <div>
            <span className="blog-section-label">Our Blog</span>
            <h2 className="blog-section-h2">{intro.heading}</h2>
            {intro.paragraphs.map((p) => <p key={p.slice(0,30)} className="blog-intro-p">{p}</p>)}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="blog-section blog-posts-section">
        <div className="container">
          <div className="blog-posts-grid">
            {filtered.map((post) => <BlogCard key={post.title} {...post} />)}
          </div>
          {filtered.length === 0 && (
            <p className="blog-no-results">No articles found in this category yet.</p>
          )}
          <div className="blog-load-more">
            <button className="blog-load-btn">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blog-cta-section">
        <div className="container blog-cta-inner">
          <div className="blog-cta-copy">
            <h2 className="blog-cta-heading">{cta.heading}</h2>
            <p className="blog-cta-text">{cta.text}</p>
          </div>
          <div className="blog-cta-actions">
            <Link href="/contact" className="btn-primary">Suggest a Topic</Link>
            <Link href="/resources" className="btn-outline-blue">All Resources</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
