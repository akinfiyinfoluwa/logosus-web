"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { dummyBlogData, BlogPost } from '../lib/blogs';

const BlogSection: React.FC = () => {
  const blogPosts = dummyBlogData.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        className="max-w-screen-xl mx-auto px-4 md:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-geist tracking-tighter text-gray-800 sm:text-5xl">From the Blog</h2>
          <p className="mt-4 text-lg text-gray-600 font-inter">
            Stay up-to-date with the latest trends and insights in technology and business.
          </p>
        </div>
        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogPostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <a href="/blog" className="text-lg font-satoshi text-blue-600 hover:text-blue-700">
            View All Posts
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <div className="p-6">
        <p className="text-sm text-gray-500 font-satoshi">
          {new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </p>
        <h3 className="mt-2 text-xl font-geist tracking-tighter text-gray-900">
          <a href={post.post_url} className="hover:text-blue-600 transition-colors">{post.title}</a>
        </h3>
        <p className="mt-3 text-base text-gray-700 font-inter">{post.description}</p>
        <div className="mt-4 flex items-center">
          <img 
            src={post.authorImageUrl} 
            alt={post.author} 
            className="w-10 h-10 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(post.author)}&background=3b82f6&color=fff`;
            }}
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 font-satoshi">{post.author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
