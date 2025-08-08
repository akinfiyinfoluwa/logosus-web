"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { dummyBlogData, BlogPost } from '../../lib/blogs';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const POSTS_PER_PAGE = 6;

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const totalPages = Math.ceil(dummyBlogData.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = dummyBlogData.slice(startIndex, endIndex);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-geist tracking-tighter text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Blog
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 font-inter max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Insights, tutorials, and thoughts on technology, business, and innovation. 
              Stay updated with the latest trends and best practices in software development.
            </motion.p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <motion.div
            className="max-w-screen-xl mx-auto px-4 md:px-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentPosts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                  <BlogPostCard post={post} />
                </motion.div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-16 flex justify-center items-center space-x-4">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-lg font-satoshi ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                }`}
              >
                Previous
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 rounded-lg font-satoshi transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-lg font-satoshi ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 transition-colors'
                }`}
              >
                Next
              </button>
            </div>

            {/* Page Info */}
            <div className="mt-8 text-center text-gray-600 font-inter">
              Showing {startIndex + 1}-{Math.min(endIndex, dummyBlogData.length)} of {dummyBlogData.length} posts
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const AuthorAvatar: React.FC<{ name: string }> = ({ name }) => {
  // Generate initials from the author's name
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('')
      .slice(0, 2); // Take only first 2 initials
  };

  // Generate a consistent color based on the name
  const getAvatarColor = (name: string) => {
    const colors = [
      'bg-blue-500',
      'bg-green-500',
      'bg-purple-500',
      'bg-pink-500',
      'bg-indigo-500',
      'bg-yellow-500',
      'bg-red-500',
      'bg-teal-500',
      'bg-orange-500',
      'bg-cyan-500'
    ];
    
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    return colors[Math.abs(hash) % colors.length];
  };

  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);

  return (
    <div className={`w-10 h-10 rounded-full ${colorClass} flex items-center justify-center text-white font-medium text-sm`}>
      {initials}
    </div>
  );
};

const getSlugFromUrl = (url: string): string | null => {
  try {
    const parts = url.split('/').filter(Boolean);
    return parts[parts.length - 1] || null;
  } catch {
    return null;
  }
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  const slug = getSlugFromUrl(post.post_url);
  const linkHref = post.articleBody && slug ? `/blog/${slug}` : '/blog';
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl border border-gray-100">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-blue-600 font-satoshi bg-blue-50 px-3 py-1 rounded-full">
            {new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
        
        <h3 className="text-xl font-geist tracking-tighter text-gray-900 mb-3 line-clamp-2">
          <a href={linkHref} className="hover:text-blue-600 transition-colors">
            {post.title}
          </a>
        </h3>
        
        <p className="text-gray-700 font-inter mb-4 line-clamp-3">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <AuthorAvatar name={post.author} />
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900 font-satoshi">{post.author}</p>
            </div>
          </div>
          
          <a 
            href={linkHref}
            className="text-blue-600 hover:text-blue-700 font-satoshi text-sm font-medium transition-colors"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

