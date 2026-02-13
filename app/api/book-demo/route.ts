import { NextRequest, NextResponse } from 'next/server';
import { sanitizeInput } from '@/lib/utils';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      company: sanitizeInput(data.company),
      phone: sanitizeInput(data.phone),
      role: data.role ? sanitizeInput(data.role) : '',
      product: data.product ? sanitizeInput(data.product) : '',
      requirements: sanitizeInput(data.requirements),
      preferredTime: data.preferredTime ? sanitizeInput(data.preferredTime) : '',
    };

    // Send to CRM webhook if configured
    const webhookUrl = process.env.HUBSPOT_WEBHOOK_URL || process.env.PIPEDRIVE_WEBHOOK_URL;
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(sanitizedData),
      });
    }

    // Send Slack notification if configured
    if (process.env.SLACK_WEBHOOK_URL) {
      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `New Demo Request from ${sanitizedData.name} at ${sanitizedData.company}`,
          blocks: [
            {
              type: 'section',
              text: {
                type: 'mrkdwn',
                text: `*New Demo Request*\n*Name:* ${sanitizedData.name}\n*Email:* ${sanitizedData.email}\n*Company:* ${sanitizedData.company}\n*Phone:* ${sanitizedData.phone}\n*Requirements:* ${sanitizedData.requirements}`,
              },
            },
          ],
        }),
      });
    }

    // Send email notification (implement with your email service)
    // Example: SendGrid, AWS SES, Nodemailer, etc.

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Demo request error:', error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
