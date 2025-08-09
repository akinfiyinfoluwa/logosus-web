import { BlogPost } from './blogs';

// Client-side function to fetch all posts
export async function fetchAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch('/api/posts');
    const data = await response.json();
    
    if (data.success) {
      return data.posts.map((dbPost: any) => ({
        id: dbPost.id,
        title: dbPost.title,
        description: dbPost.description,
        author: dbPost.author,
        date: dbPost.date,
        authorImageUrl: "/image/author1.jpeg", // Default author image
        post_url: dbPost.post_url,
        article_body: dbPost.content,
      }));
    }
    
    throw new Error(data.error || 'Failed to fetch posts');
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

// Client-side function to create a post
export async function createPost(post: Omit<BlogPost, 'id' | 'authorImageUrl'>): Promise<BlogPost | null> {
  try {
    const response = await fetch('/api/add-post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: post.title,
        article_body: post.article_body || '',
        author: post.author,
        date: post.date,
        description: post.description,
        post_url: post.post_url,
        published: false,
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      return {
        id: data.post.id,
        title: data.post.title,
        description: data.post.description,
        author: data.post.author,
        date: data.post.date,
        authorImageUrl: "/image/author1.jpeg",
        post_url: data.post.post_url,
        article_body: data.post.content,
      };
    }
    
    throw new Error(data.error || 'Failed to create post');
  } catch (error) {
    console.error('Error creating post:', error);
    return null;
  }
}

// Client-side function to update a post
export async function updatePost(post: BlogPost): Promise<BlogPost | null> {
  try {
    const response = await fetch('/api/edit-post', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: post.id,
        title: post.title,
        article_body: post.article_body || '',
        author: post.author,
        date: post.date,
        description: post.description,
        post_url: post.post_url,
        published: false,
      }),
    });

    const data = await response.json();
    
    if (data.success) {
      return {
        id: data.post.id,
        title: data.post.title,
        description: data.post.description,
        author: data.post.author,
        date: data.post.date,
        authorImageUrl: "/image/author1.jpeg",
        post_url: data.post.post_url,
        article_body: data.post.content,
      };
    }
    
    throw new Error(data.error || 'Failed to update post');
  } catch (error) {
    console.error('Error updating post:', error);
    return null;
  }
}

// Client-side function to delete a post
export async function deletePost(id: number): Promise<boolean> {
  try {
    const response = await fetch('/api/delete-post', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error('Error deleting post:', error);
    return false;
  }
}