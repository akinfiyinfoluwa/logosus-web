import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/database';
import { blog } from '@/database/schema';
import { eq } from 'drizzle-orm';

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, title, content, author, date, description, post_url, published } = body;

    // Validate required fields
    if (!id || !title || !content || !author || !date || !description || !post_url) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Update the blog post
    const [updatedPost] = await db.update(blog)
      .set({
        title,
        content, // This maps to article_body in the frontend
        author,
        date,
        description,
        post_url,
        published: published ?? false,
      })
      .where(eq(blog.id, id))
      .returning();

    if (!updatedPost) {
      return NextResponse.json(
        { error: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, post: updatedPost }, { status: 200 });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { error: 'Failed to update post' },
      { status: 500 }
    );
  }
}