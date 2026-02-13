// Quick email test script
// Run with: node test-email.js

const nodemailer = require('nodemailer');
require('dotenv').config({ path: '.env.local' });

console.log('Testing email configuration...\n');
console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASSWORD:', process.env.SMTP_PASSWORD ? '***' + process.env.SMTP_PASSWORD.slice(-4) : 'NOT SET');
console.log('\nAttempting to send test email...\n');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  debug: true, // Show debug output
  logger: true // Log information
});

transporter.sendMail({
  from: process.env.SMTP_USER,
  to: process.env.LEAD_EMAIL_TO,
  subject: 'Test Email from InfotechXpertVision',
  text: 'If you receive this, email is working!',
  html: '<h1>Success!</h1><p>Email configuration is working correctly.</p>'
}, (error, info) => {
  if (error) {
    console.error('\n❌ ERROR:', error.message);
    console.error('\nTroubleshooting:');
    console.error('1. Go to https://myaccount.google.com/apppasswords');
    console.error('2. Delete the old "InfotechXpertVision Website" password');
    console.error('3. Create a NEW app password');
    console.error('4. Copy the 16-character password (no spaces)');
    console.error('5. Update SMTP_PASSWORD in .env.local');
    console.error('6. Run this test again\n');
  } else {
    console.log('\n✅ SUCCESS! Email sent:', info.messageId);
    console.log('Check your inbox at:', process.env.LEAD_EMAIL_TO);
  }
  process.exit(error ? 1 : 0);
});
