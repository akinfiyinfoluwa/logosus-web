import React from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { getBlogPostBySlug, getPublishedBlogPosts } from '@/lib/blogs-server';
import { BlogPost } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string };
}

function getRelatedPosts(currentPostId: number, allPosts: BlogPost[], limit: number = 3): BlogPost[] {
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.id !== currentPostId);
  
  // Shuffle the array randomly
  const shuffled = [...otherPosts].sort(() => Math.random() - 0.5);
  
  // Return the first 'limit' posts
  return shuffled.slice(0, limit);
}

function RelatedPosts({ relatedPosts }: { relatedPosts: BlogPost[] }) {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="max-w-3xl mx-auto px-4 md:px-6 mt-16 pt-16 border-t border-gray-200">
      <h2 className="text-2xl md:text-3xl font-geist tracking-tight text-gray-900 mb-8">
        Related Posts
      </h2>
      <div className="grid gap-6 md:grid-cols-1">
        {relatedPosts.map((post) => (
          <Link
            key={post.id}
            href={post.post_url}
            className="group block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-start space-x-4">
              <img
                src={post.authorImageUrl}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center mt-2 text-xs text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  
  // Fetch the specific blog post from database
  const post = await getBlogPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  // Fetch all published posts for related posts
  const allPosts = await getPublishedBlogPosts();
  const relatedPosts = getRelatedPosts(post.id, allPosts);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <main className="pt-20">
        <article className="max-w-3xl mx-auto px-4 md:px-6 py-16">
          {/* Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-5xl font-geist tracking-tight text-gray-900 leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center space-x-4">
              <img
                src={post.authorImageUrl}
                alt={post.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-900 font-medium">{post.author}</p>
                <time className="text-gray-600 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg prose-gray max-w-none">
            <ReactMarkdown
              components={{
                h1: ({ children, ...props }) => (
                  <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" {...props}>{children}</h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4" {...props}>{children}</h2>
                ),
                h3: ({ children, ...props }) => (
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3" {...props}>{children}</h3>
                ),
                p: ({ children, ...props }) => (
                  <p className="text-gray-700 leading-relaxed mb-4" {...props}>{children}</p>
                ),
                ul: ({ children, ...props }) => (
                  <ul className="list-disc pl-6 mb-4 space-y-2" {...props}>{children}</ul>
                ),
                ol: ({ children, ...props }) => (
                  <ol className="list-decimal pl-6 mb-4 space-y-2" {...props}>{children}</ol>
                ),
                li: ({ children, ...props }) => (
                  <li className="text-gray-700" {...props}>{children}</li>
                ),
                blockquote: ({ children, ...props }) => (
                  <blockquote className="border-l-4 border-blue-200 pl-6 py-2 my-6 bg-blue-50 rounded-r-lg" {...props}>
                    <div className="text-gray-800 italic">{children}</div>
                  </blockquote>
                ),
                code: ({ children, className, ...rest }) => {
                  const isInline = !className || !className.includes('language-');
                  return isInline ? (
                    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono" {...rest}>
                      {children}
                    </code>
                  ) : (
                    <code className="block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono" {...rest}>
                      {children}
                    </code>
                  );
                },
                pre: ({ children, ...props }) => (
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props}>
                    {children}
                  </pre>
                ),
                a: ({ children, href, ...props }) => (
                  <a
                    href={href}
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt, ...props }) => (
                  <img
                    src={src}
                    alt={alt}
                    className="w-full rounded-lg shadow-md my-8"
                    {...props}
                  />
                ),
              }}
            >
              {post.article_body || post.description}
            </ReactMarkdown>
          </div>

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <svg className="w-4 h-4 mr-2 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>

        {/* Related Posts */}
        <RelatedPosts relatedPosts={relatedPosts} />
      </main>

      <Footer />
    </div>
  );
}

