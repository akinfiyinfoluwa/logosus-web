import React from 'react';
import ReactMarkdown from 'react-markdown';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { dummyBlogData } from '@/lib/blogs';
import { notFound } from 'next/navigation';

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

export default function BlogPostPage({ params }: BlogPostPageProps) {

  //@ts-nocheck
  const { slug } = params;

  const post = dummyBlogData.find((p) => getSlugFromUrl(p.post_url) === slug);

  if (!post || !post.articleBody) {
    notFound();
  }

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
      </main>
      <Footer />
    </div>
  );
}
