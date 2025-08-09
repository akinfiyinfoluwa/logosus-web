import { NextRequest, NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = body.email;
    const emailType = body.emailType;
    const message = body.message || '';

    if (!email) {
      return NextResponse.json({ message: 'Email is required' }, { status: 400 });
    } else if (!emailType) {
      return NextResponse.json({ message: 'The emailtype is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GOOGLE_MAILER_USER,
        pass: process.env.GOOGLE_MAILER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GOOGLE_MAILER_USER,
      to: process.env.GOOGLE_MAILER_USER, // send to yourself
      subject: `New ${emailType} from ${email}`,
      text: message,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ 
      message: 'Message sent successfully', 
      contactPage: '/contact' 
    }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to send message', error: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
