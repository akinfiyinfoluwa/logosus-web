import { db } from '@/database';
import { blog } from '@/database/schema';
import { eq } from 'drizzle-orm';
import { BlogPost } from './blogs';

// Transform database post to BlogPost format
function transformDbPost(dbPost: any): BlogPost {
  return {
    id: dbPost.id,
    title: dbPost.title,
    description: dbPost.description,
    author: dbPost.author,
    date: dbPost.date,
    authorImageUrl: "/image/author1.jpeg", // Default author image
    post_url: dbPost.post_url,
    article_body: dbPost.content,
  };
}

// Get all blog posts
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await db.select().from(blog);
    return posts.map(transformDbPost);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Get published blog posts only
export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  try {
    const posts = await db.select().from(blog).where(eq(blog.published, true));
    return posts.map(transformDbPost);
  } catch (error) {
    console.error('Error fetching published blog posts:', error);
    return [];
  }
}

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const post_url = `/blog/${slug}`;
    const [dbPost] = await db.select().from(blog).where(eq(blog.post_url, post_url));
    
    if (!dbPost) {
      return null;
    }
    
    return transformDbPost(dbPost);
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return null;
  }
}

// Get a single blog post by ID
export async function getBlogPostById(id: number): Promise<BlogPost | null> {
  try {
    const [dbPost] = await db.select().from(blog).where(eq(blog.id, id));
    
    if (!dbPost) {
      return null;
    }
    
    return transformDbPost(dbPost);
  } catch (error) {
    console.error('Error fetching blog post by ID:', error);
    return null;
  }
}