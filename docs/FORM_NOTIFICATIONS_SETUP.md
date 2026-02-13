# Form Notifications Setup Guide

This guide explains how to receive form submissions from your website (Contact Form, Book Demo, etc.)

---

## 📧 Option 1: Email Notifications (Recommended)

### Gmail Setup (Free & Easy)

#### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification

#### Step 2: Create App Password
1. Go to [App Passwords](https://myaccount.google.com/apppasswords)
2. Select "Mail" and "Other (Custom name)"
3. Name it "InfotechXpertVision Website"
4. Click "Generate"
5. Copy the 16-character password

#### Step 3: Configure Environment Variables

Edit `.env.local`:

```bash
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password

# Where to send leads
LEAD_EMAIL_TO=leads@infotechxpertvision.com

# Company email (shown on website)
NEXT_PUBLIC_COMPANY_EMAIL=contact@infotechxpertvision.com
```

#### Step 4: Install Dependencies

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

#### Step 5: Restart Server

```bash
# Stop current server (Ctrl+C)
npm run dev
```

#### Step 6: Test

1. Go to http://localhost:3003/contact
2. Fill out the form
3. Submit
4. Check your email inbox!

---

## 📱 Option 2: Slack Notifications

### Setup Slack Webhook

#### Step 1: Create Incoming Webhook
1. Go to [Slack API](https://api.slack.com/apps)
2. Click "Create New App" → "From scratch"
3. Name it "Website Forms"
4. Select your workspace
5. Click "Incoming Webhooks"
6. Toggle "Activate Incoming Webhooks" to ON
7. Click "Add New Webhook to Workspace"
8. Select channel (e.g., #leads)
9. Copy the Webhook URL

#### Step 2: Add to Environment Variables

Edit `.env.local`:

```bash
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL
```

#### Step 3: Restart & Test

Now form submissions will appear in your Slack channel!

---

## 🔗 Option 3: CRM Integration (HubSpot, Pipedrive)

### HubSpot Setup

#### Step 1: Create Workflow
1. Go to HubSpot → Automation → Workflows
2. Create "Contact-based" workflow
3. Set trigger: "Form submission"
4. Get webhook URL from workflow settings

#### Step 2: Add to Environment Variables

```bash
HUBSPOT_WEBHOOK_URL=https://your-hubspot-webhook-url
```

### Pipedrive Setup

#### Step 1: Get API Token
1. Go to Pipedrive → Settings → API
2. Copy your API token

#### Step 2: Create Webhook Endpoint
1. Use Pipedrive API to create deals
2. Or use Zapier/Make.com as middleware

```bash
PIPEDRIVE_WEBHOOK_URL=https://your-pipedrive-webhook
```

---

## 📊 Option 4: Google Sheets (Simple Tracking)

### Using Zapier or Make.com

#### Step 1: Create Zap/Scenario
1. Trigger: Webhook (Catch Hook)
2. Action: Google Sheets (Create Row)

#### Step 2: Get Webhook URL

```bash
GOOGLE_SHEETS_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
```

---

## 🔍 Where Forms Send Data

### Current Flow:

```
User Submits Form
    ↓
API Route (/api/contact or /api/book-demo)
    ↓
Sanitize & Validate Data
    ↓
Send to Multiple Destinations:
    ├─→ Email (SMTP)
    ├─→ Slack (Webhook)
    ├─→ CRM (Webhook)
    └─→ Google Sheets (Webhook)
```

### Form Endpoints:

1. **Contact Form**: `/api/contact`
   - Sends to: `NEXT_PUBLIC_COMPANY_EMAIL`
   - Also sends to: Slack, CRM webhooks

2. **Book Demo Form**: `/api/book-demo`
   - Sends to: `LEAD_EMAIL_TO`
   - Also sends to: Slack, CRM webhooks

---

## 🧪 Testing Your Setup

### Test Email

```bash
# In your terminal, check if email is configured
echo $SMTP_USER
echo $SMTP_HOST
```

### Test Form Submission

1. Open http://localhost:3003/contact
2. Fill out form with test data
3. Submit
4. Check:
   - ✅ Email inbox
   - ✅ Slack channel
   - ✅ CRM
   - ✅ Browser console (should show success)

### Debug Issues

Check server logs:
```bash
# Look for errors in terminal where dev server is running
# You'll see:
# - "Email sent: <message-id>" (success)
# - "Email error: ..." (failure)
# - "Webhook error: ..." (webhook failure)
```

---

## 📋 Quick Setup Checklist

### Minimum Setup (Email Only):
- [ ] Create Gmail App Password
- [ ] Add to `.env.local`:
  - `SMTP_USER`
  - `SMTP_PASSWORD`
  - `LEAD_EMAIL_TO`
- [ ] Install nodemailer: `npm install nodemailer`
- [ ] Restart server
- [ ] Test form submission

### Full Setup (All Options):
- [ ] Email configured
- [ ] Slack webhook configured
- [ ] CRM webhook configured
- [ ] Test all forms
- [ ] Verify all notifications received

---

## 🚨 Troubleshooting

### Email Not Sending

**Issue**: "Email error: Invalid login"
**Solution**: 
- Check Gmail App Password is correct
- Ensure 2FA is enabled
- Try regenerating App Password

**Issue**: "Email error: Connection timeout"
**Solution**:
- Check SMTP_HOST and SMTP_PORT
- Ensure firewall allows SMTP
- Try port 465 with `secure: true`

### Slack Not Working

**Issue**: Webhook returns 404
**Solution**:
- Verify webhook URL is correct
- Check webhook is still active in Slack
- Regenerate webhook if needed

### Forms Submit But No Notification

**Solution**:
1. Check browser console for errors
2. Check server terminal for errors
3. Verify environment variables are loaded:
   ```bash
   console.log(process.env.SMTP_USER); // Should show your email
   ```

---

## 📧 Email Templates

The system sends beautifully formatted HTML emails with:

### Demo Booking Email Includes:
- Contact information
- Company details
- Product interest
- Requirements
- Preferred time
- Action reminder (respond within 24h)

### Contact Form Email Includes:
- Sender name and email
- Subject line
- Message content
- Reply-to information

---

## 🔐 Security Notes

- ✅ All inputs are sanitized
- ✅ Email credentials stored in environment variables
- ✅ Never commit `.env.local` to Git
- ✅ Use App Passwords, not real passwords
- ✅ Webhooks use HTTPS
- ✅ Rate limiting recommended for production

---

## 📈 Production Recommendations

### For Production Deployment:

1. **Use Professional Email Service**
   - SendGrid (99% deliverability)
   - AWS SES (cheap, reliable)
   - Mailgun (developer-friendly)
   - Resend (modern, great DX)

2. **Set Up Email Forwarding**
   - Forward to multiple team members
   - Set up auto-responder
   - Create email rules/filters

3. **Monitor Deliverability**
   - Check spam folder
   - Monitor bounce rates
   - Set up SPF/DKIM records

4. **Backup Notifications**
   - Use multiple channels (Email + Slack)
   - Log all submissions to database
   - Set up monitoring alerts

---

## 🎯 Next Steps

1. ✅ Choose your notification method(s)
2. ✅ Configure environment variables
3. ✅ Install dependencies if needed
4. ✅ Test form submissions
5. ✅ Set up production email service
6. ✅ Configure team notifications
7. ✅ Monitor and optimize

---

## 📞 Need Help?

- Check server logs for errors
- Verify environment variables
- Test with simple email first
- Review API route code
- Check email service status

---

**Last Updated:** February 13, 2026  
**Status:** ✅ Email integration complete and ready to use
