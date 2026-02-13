import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Check if email is configured
const isEmailConfigured = () => {
  return !!(
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASSWORD
  );
};

// Create reusable transporter only if configured
let transporter: nodemailer.Transporter | null = null;

if (isEmailConfigured()) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  // If email not configured, just log to console
  if (!isEmailConfigured() || !transporter) {
    console.log('📧 EMAIL NOT CONFIGURED - Form submission logged:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(text || html);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('💡 To receive emails, configure SMTP settings in .env.local');
    console.log('   See docs/FORM_NOTIFICATIONS_SETUP.md for instructions');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
    return { success: true, messageId: 'console-log' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"InfotechXpertVision" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: text || '',
      html,
    });

    console.log('✅ Email sent successfully: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('❌ Email error:', error);
    console.log('💡 Check your SMTP settings in .env.local');
    return { success: false, error };
  }
}

// Email templates
export function generateDemoBookingEmail(data: {
  name: string;
  email: string;
  company: string;
  phone: string;
  requirements: string;
  product?: string;
  preferredTime?: string;
}) {
  return {
    subject: `New Demo Request from ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Demo Booking Request</h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          ${data.product ? `<p><strong>Product Interest:</strong> ${data.product}</p>` : ''}
          ${data.preferredTime ? `<p><strong>Preferred Time:</strong> ${data.preferredTime}</p>` : ''}
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin-top: 0;">Requirements</h3>
          <p>${data.requirements}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: #EFF6FF; border-radius: 8px;">
          <p style="margin: 0; color: #1D4ED8;">
            <strong>Action Required:</strong> Please respond to this lead within 24 hours.
          </p>
        </div>
      </div>
    `,
    text: `
New Demo Booking Request

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Phone: ${data.phone}
${data.product ? `Product Interest: ${data.product}` : ''}
${data.preferredTime ? `Preferred Time: ${data.preferredTime}` : ''}

Requirements:
${data.requirements}
    `,
  };
}

export function generateContactEmail(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return {
    subject: `Contact Form: ${data.subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3B82F6;">New Contact Form Submission</h2>
        
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>From:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
        </div>

        <div style="background: #fff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
          <h3 style="margin-top: 0;">Message</h3>
          <p>${data.message}</p>
        </div>

        <div style="margin-top: 20px; padding: 15px; background: #EFF6FF; border-radius: 8px;">
          <p style="margin: 0; color: #1D4ED8;">
            <strong>Reply to:</strong> ${data.email}
          </p>
        </div>
      </div>
    `,
    text: `
New Contact Form Submission

From: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}
    `,
  };
}
