
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // In a real application, you would validate credentials against a database
  // For this example, we'll use a simple hardcoded check
  if (email === 'test@example.com' && password === 'password') {
    // In a real application, you would set a session cookie or JWT here
    return NextResponse.json({ success: true, message: 'Sign-in successful' });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}
