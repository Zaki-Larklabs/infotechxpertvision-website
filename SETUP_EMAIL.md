# 📧 Email Setup - Quick Guide

## Current Status: ❌ Email Not Configured

Your forms are working, but emails aren't being sent because SMTP isn't configured yet.

---

## ✅ Quick Fix (5 Minutes)

### Step 1: Get Gmail App Password

1. **Go to:** https://myaccount.google.com/apppasswords
2. **Sign in** to your Gmail account
3. **Enable 2-Step Verification** if not already enabled
4. **Create App Password:**
   - Select app: "Mail"
   - Select device: "Other (Custom name)"
   - Name it: "InfotechXpertVision Website"
   - Click **Generate**
5. **Copy** the 16-character password (looks like: `abcd efgh ijkl mnop`)

### Step 2: Update .env.local

Open `.env.local` file and replace these lines:

```bash
# Replace these with YOUR actual values:
SMTP_USER=your-email@gmail.com          # ← Your Gmail address
SMTP_PASSWORD=your-app-password-here    # ← The 16-char password from Step 1
LEAD_EMAIL_TO=your-email@gmail.com      # ← Where you want to receive leads
```

**Example:**
```bash
SMTP_USER=john@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
LEAD_EMAIL_TO=john@gmail.com
```

### Step 3: Restart Server

```bash
# Stop the server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

### Step 4: Test

1. Go to http://localhost:3002/contact
2. Fill out the form
3. Submit
4. Check your Gmail inbox! 📬

---

## 🎯 What Happens Now

### Without Email Configured (Current):
- ✅ Forms still work
- ✅ Data is validated
- ✅ Success message shows
- ✅ Form data logged to console
- ❌ No email sent

### With Email Configured:
- ✅ Forms work
- ✅ Data validated
- ✅ Success message shows
- ✅ Form data logged to console
- ✅ **Email sent to your inbox!** 📧

---

## 📋 Checklist

- [ ] Go to https://myaccount.google.com/apppasswords
- [ ] Enable 2-Step Verification
- [ ] Create App Password for "Mail"
- [ ] Copy the 16-character password
- [ ] Open `.env.local`
- [ ] Replace `SMTP_USER` with your Gmail
- [ ] Replace `SMTP_PASSWORD` with app password
- [ ] Replace `LEAD_EMAIL_TO` with your email
- [ ] Save file
- [ ] Restart server (Ctrl+C, then `npm run dev`)
- [ ] Test form at http://localhost:3002/contact
- [ ] Check Gmail inbox

---

## 🔍 Verify It's Working

### In Terminal, You Should See:

**Before configuration:**
```
📧 EMAIL NOT CONFIGURED - Form submission logged:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
To: contact@infotechxpertvision.com
Subject: Contact Form: Test
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Form data here]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💡 To receive emails, configure SMTP settings in .env.local
```

**After configuration:**
```
✅ Email sent successfully: <message-id>
```

---

## 🚨 Troubleshooting

### "Invalid login" Error

**Problem:** Wrong email or password  
**Solution:** 
- Double-check Gmail address
- Regenerate App Password
- Make sure 2FA is enabled

### "Connection refused" Error

**Problem:** SMTP settings wrong  
**Solution:**
- Verify `SMTP_HOST=smtp.gmail.com`
- Verify `SMTP_PORT=587`
- Check internet connection

### Still Not Working?

1. **Check .env.local exists** in project root
2. **Restart server** after any changes
3. **Check for typos** in email/password
4. **Try different Gmail account**
5. **Check spam folder** for test emails

---

## 🎓 Alternative: Use Mailtrap (Testing)

If you just want to test without real emails:

1. Go to https://mailtrap.io (free)
2. Sign up
3. Get SMTP credentials
4. Use in `.env.local`:

```bash
SMTP_HOST=sandbox.smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your-mailtrap-user
SMTP_PASSWORD=your-mailtrap-password
```

Emails will appear in Mailtrap inbox (not real email).

---

## 📞 Need Help?

- **Full Guide:** See `docs/FORM_NOTIFICATIONS_SETUP.md`
- **Check Logs:** Look at terminal where server is running
- **Test Connection:** Forms work even without email

---

## ⚡ Quick Commands

```bash
# Restart server
npm run dev

# Check if .env.local exists
ls -la .env.local

# View .env.local (Windows)
type .env.local

# View .env.local (Mac/Linux)
cat .env.local
```

---

**Status:** Ready to configure! Follow steps above. ⬆️
