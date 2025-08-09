import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/database';
import { blog } from '@/database/schema';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, content, author, date, description, post_url, published = false } = body;

    // Validate required fields
    if (!title || !content || !author || !date || !description || !post_url) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert the new blog post (ID will be auto-generated)
    const [newPost] = await db.insert(blog).values({
      title,
      content, // This maps to articleBody in the frontend
      author,
      date,
      description,
      post_url,
      published,
    }).returning();

    return NextResponse.json({ success: true, post: newPost }, { status: 201 });
  } catch (error) {
    console.error('Error adding post:', error);
    return NextResponse.json(
      { error: 'Failed to add post' },
      { status: 500 }
    );
  }
}