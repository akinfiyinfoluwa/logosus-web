import { NextResponse } from 'next/server';
import { db } from '@/database';
import { blog } from '@/database/schema';
import { eq } from 'drizzle-orm';

export async function GET() {
  try {
    // Fetch all blog posts from the database
    const posts = await db.select().from(blog).where(eq(blog.published, true));

    return NextResponse.json({ success: true, posts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
