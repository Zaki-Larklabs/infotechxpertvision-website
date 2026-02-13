import { NextRequest, NextResponse } from 'next/server';
import { sanitizeInput } from '@/lib/utils';
import { sendEmail, generateContactEmail } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      subject: sanitizeInput(data.subject),
      message: sanitizeInput(data.message),
    };

    // Send email notification
    const emailTemplate = generateContactEmail(sanitizedData);
    const emailTo = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@infotechxpertvision.com';
    
    await sendEmail({
      to: emailTo,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text,
    });

    // Send to webhook if configured
    const webhookUrl = process.env.SLACK_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New Contact Form Submission from ${sanitizedData.name}`,
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*New Contact Message*\n*Name:* ${sanitizedData.name}\n*Email:* ${sanitizedData.email}\n*Subject:* ${sanitizedData.subject}\n*Message:* ${sanitizedData.message}`,
              },
            },
          ],
        }),
      }).catch(err => console.error('Slack error:', err));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
