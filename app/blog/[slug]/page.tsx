import React from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dummyBlogData, BlogPost } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface BlogPostPageProps {
  params: { slug: string };
}

function getSlugFromUrl(url: string): string | null {
  try {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1] || null;
  } catch {
    return null;
  }
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
                <h3 className="text-lg font-geist tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors duration-200 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 font-inter text-sm mb-3 line-clamp-2">
                  {post.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-inter">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span className="font-inter">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function BlogPostPage({ params }: BlogPostPageProps) {

  //@ts-nocheck
  const { slug } = params;

  const post = dummyBlogData.find((p) => getSlugFromUrl(p.post_url) === slug);

  if (!post || !post.articleBody) {
    notFound();
  }

  // Get related posts (3 random posts excluding the current one)
  const relatedPosts = getRelatedPosts(post.id, dummyBlogData, 3);

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      <main className="pt-24 pb-16">
        <article className="max-w-3xl mx-auto px-4 md:px-6">
          <header className="mb-10">
            <p className="text-sm text-blue-600 font-satoshi bg-blue-50 inline-block px-3 py-1 rounded-full">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <h1 className="mt-4 text-3xl md:text-4xl font-geist tracking-tighter text-gray-900">
              {post.title}
            </h1>
            <div className="mt-4 text-gray-700 font-inter">By {post.author}</div>
          </header>

          <div className="prose prose-blue max-w-none">
            <ReactMarkdown
              components={{
                h1: (props: any) => (
                  <h1 className="text-3xl md:text-4xl font-geist tracking-tighter mt-8 mb-4" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="text-2xl md:text-3xl font-geist tracking-tight mt-8 mb-3" {...props} />
                ),
                h3: (props: any) => (
                  <h3 className="text-xl md:text-2xl font-geist tracking-tight mt-6 mb-3" {...props} />
                ),
                p: (props: any) => <p className="font-inter leading-7 text-gray-800 my-4" {...props} />,
                ul: (props: any) => <ul className="list-disc pl-6 my-4 space-y-2" {...props} />,
                ol: (props: any) => <ol className="list-decimal pl-6 my-4 space-y-2" {...props} />,
                li: (props: any) => <li className="font-inter text-gray-800" {...props} />,
                a: (props: any) => (
                  <a className="text-blue-600 hover:text-blue-700 underline" target="_blank" rel="noopener noreferrer" {...props} />
                ),
                img: (props: any) => (
                  // Render markdown images. Use paths under public/ (e.g., /image/xyz.png)
                  <img className="rounded-lg my-6 mx-auto" loading="lazy" alt={props.alt || ''} {...props} />
                ),
                code: ({ inline, className, children, ...rest }: any) => {
                  if (inline) {
                    return (
                      <code className={`bg-gray-100 px-1.5 py-0.5 rounded text-sm ${className || ''}`} {...rest}>
                        {children}
                      </code>
                    );
                  }
                  return (
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                      <code className={className} {...rest}>{children}</code>
                    </pre>
                  );
                },
                blockquote: (props: any) => (
                  <blockquote className="border-l-4 border-blue-200 pl-4 italic text-gray-700 my-6" {...props} />
                ),
                hr: () => <hr className="my-10 border-gray-200" />,
              }}
            >
              {post.articleBody}
            </ReactMarkdown>
          </div>
        </article>
        
        {/* Related Posts Section */}
        <RelatedPosts relatedPosts={relatedPosts} />
      </main>
      <Footer />
    </div>
  );
}

