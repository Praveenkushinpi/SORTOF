import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();

  if (!email || !email.includes('@')) {
    return NextResponse.json({ message: 'Valid email is required' }, { status: 400 });
  }

  if (!name || name.trim().length === 0) {
    return NextResponse.json({ message: 'Name is required' }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: 'noreply@yourdomain.com',
      to: email,
      subject: 'Welcome to SORTEDOF Waitlist! 🎉',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000; color: #fff;">
          <h1 style="color: #fff; text-align: center; font-size: 32px; margin-bottom: 20px;">Welcome to SORTEDOF!</h1>
          
          <p style="font-size: 18px; line-height: 1.6; color: #e5e5e5;">Hi ${name},</p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5;">
            Thank you for joining the SORTEDOF waitlist! We're thrilled to have you on board.
          </p>
          
          <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin: 0;">
              📱 <strong>SORTEDOF</strong> is your one-hand solution for everyday notes - designed to make note-taking effortless and intuitive.
            </p>
          </div>
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5;">
            You'll be among the first to know when we launch. We'll keep you updated on our progress and send you early access as soon as it's ready!
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #e5e5e5; margin-top: 30px;">
            Best regards,<br>
            <strong>The SORTEDOF Team</strong>
          </p>
          
          <hr style="border: none; border-top: 1px solid #333; margin: 30px 0;">
          
          <p style="font-size: 12px; color: #999; text-align: center;">
            This email was sent because you signed up for the SORTEDOF waitlist.
          </p>
        </div>
      `,
    });

    console.log('New waitlist signup:', { name, email });
    return NextResponse.json({ message: 'Successfully added to waitlist' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Failed to add to waitlist' }, { status: 500 });
  }
}