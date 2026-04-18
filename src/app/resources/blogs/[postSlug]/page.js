import Link from 'next/link';
import { notFound } from 'next/navigation';

import { blogsData, getBlogPostBySlug } from '@/components/resources/resourcesData';

export function generateStaticParams() {
  return blogsData.featuredPosts.map((post) => ({ postSlug: post.slug }));
}

export default async function BlogDetailPage({ params }) {
  const { postSlug } = await params;
  const post = getBlogPostBySlug(postSlug);

  if (!post) {
    notFound();
  }

  return (
    <section className="blog-detail-page">
      <div className="container blog-detail-container">
        <span className="blog-section-label">{post.category}</span>
        <h1 className="blog-detail-title">{post.title}</h1>
        <p className="blog-detail-meta">{post.date} · {post.readTime}</p>
        <p className="blog-detail-excerpt">{post.excerpt}</p>
        <div className="blog-detail-body">
          {post.content.map((paragraph) => (
            <p key={paragraph.slice(0, 30)}>{paragraph}</p>
          ))}
        </div>
        <div className="blog-detail-actions">
          <Link href="/resources/blogs" className="btn-primary">Back to Blogs</Link>
          <Link href="/contact" className="btn-outline-blue">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
