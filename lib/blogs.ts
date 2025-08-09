export interface BlogPost {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  authorImageUrl: string;
  post_url: string;
  article_body?: string; // Optional field for markdown content
  published?: boolean; // Add published for draft support
}

// DUMMY DATA REMOVED. Use backend API for all blog data.
// export const dummyBlogData: BlogPost[] = [ ... ];