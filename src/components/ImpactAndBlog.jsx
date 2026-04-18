'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { blogsData, tutorialsData } from '@/components/resources/resourcesData';

const tutorialLinks = [
  { title: tutorialsData.videos[0].title, href: '/resources/tutorials' },
  { title: tutorialsData.videos[1].title, href: '/resources/tutorials' },
  { title: 'Watch Product Tutorials on YouTube', href: 'https://www.youtube.com/' },
];

export default function ImpactAndBlog() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    ref.current?.querySelectorAll('.animate-on-scroll').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <section id="trust-resources" className="impact-section impact-section-refined" aria-labelledby="trust-heading">
        <div className="container">
          <div className="section-header left animate-on-scroll">
            <span className="section-label">Trusted By 2500+ Happy Customers</span>
            <h2 className="section-h2" id="trust-heading">Our commitment to excellence</h2>
            <p className="section-sub impact-sub-left">
              Learn from quick tutorials, explore helpful resources, and move directly into the product and service pages that fit your need.
            </p>
          </div>

          <div className="home-resource-grid">
            {tutorialLinks.map((item, index) => {
              const isExternal = item.href.startsWith('http');
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="home-resource-card animate-on-scroll"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                >
                  <span className="home-resource-kicker">{isExternal ? 'YouTube' : 'Tutorial'}</span>
                  <h3>{item.title}</h3>
                  <span className="product-learn">Open →</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section id="blog" className="blog-section blog-section-refined" aria-labelledby="blog-heading">
        <div className="container">
          <div className="section-header left animate-on-scroll">
            <span className="section-label">Latest Blogs</span>
            <h2 className="section-h2" id="blog-heading">Recent updates and practical insights</h2>
          </div>
          <div className="blog-grid">
            {blogsData.featuredPosts.slice(0, 3).map((post, index) => (
              <article key={post.title} className="blog-card animate-on-scroll" style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="blog-content">
                  <p className="blog-date">{post.date} · {post.readTime}</p>
                  <h3 className="blog-title">{post.title}</h3>
                  <p className="blog-excerpt">{post.excerpt}</p>
                  <Link href={`/resources/blogs/${post.slug}`} className="blog-read">Read More →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
