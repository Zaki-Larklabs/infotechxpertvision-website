# Deployment Guide

Complete guide for deploying InfotechXpertVision website to production.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the recommended platform for Next.js applications with zero-configuration deployment.

#### Initial Setup

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

2. **Import Project**
   - Click "Add New Project"
   - Import your Git repository
   - Vercel auto-detects Next.js configuration

3. **Configure Environment Variables**
   
   Go to Project Settings → Environment Variables and add:

   ```
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://infotechxpertvision.com
   NEXT_PUBLIC_SITE_NAME=InfotechXpertVision
   NEXT_PUBLIC_COMPANY_EMAIL=contact@infotechxpertvision.com
   NEXT_PUBLIC_COMPANY_PHONE=+1-XXX-XXX-XXXX

   # Analytics
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

   # Forms & Lead Capture
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   LEAD_EMAIL_TO=leads@infotechxpertvision.com

   # Webhooks
   HUBSPOT_WEBHOOK_URL=https://...
   SLACK_WEBHOOK_URL=https://...

   # reCAPTCHA
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
   RECAPTCHA_SECRET_KEY=your-secret-key

   # Other
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
   NEXT_PUBLIC_WHATSAPP_NUMBER=+1XXXXXXXXXX
   ```

4. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically
   - Get your deployment URL

5. **Custom Domain**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - SSL certificate auto-provisioned

#### Continuous Deployment

- Push to `main` branch → Auto-deploy to production
- Push to other branches → Auto-deploy preview URLs
- Pull requests → Preview deployments with unique URLs

### Option 2: Netlify

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **Environment Variables**
   - Add all variables from `.env.example`
   - Site settings → Environment variables

4. **Deploy**
   - Click "Deploy site"
   - Configure custom domain in Domain settings

### Option 3: AWS Amplify

1. **Connect Repository**
   - Open AWS Amplify Console
   - Click "New app" → "Host web app"
   - Connect your Git repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm ci
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: .next
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Environment Variables**
   - Add in App settings → Environment variables

4. **Custom Domain**
   - Domain management → Add domain
   - Follow DNS configuration steps

### Option 4: Docker + Any Cloud Provider

#### Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Build and Run

```bash
# Build image
docker build -t infotechxpertvision-web .

# Run container
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_SITE_URL=https://infotechxpertvision.com \
  -e NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX \
  infotechxpertvision-web
```

#### Deploy to Cloud

- **AWS ECS/Fargate**: Push to ECR, deploy with ECS
- **Google Cloud Run**: Push to GCR, deploy with Cloud Run
- **Azure Container Instances**: Push to ACR, deploy with ACI
- **DigitalOcean App Platform**: Connect repository, auto-deploy

## 🔧 Post-Deployment Configuration

### 1. DNS Configuration

Point your domain to deployment platform:

**Vercel:**
```
A Record: 76.76.21.21
CNAME: cname.vercel-dns.com
```

**Netlify:**
```
A Record: 75.2.60.5
CNAME: your-site.netlify.app
```

### 2. SSL Certificate

- Vercel/Netlify: Auto-provisioned
- Custom server: Use Let's Encrypt with Certbot

### 3. CDN Configuration

- Vercel/Netlify: Built-in global CDN
- Custom: Configure CloudFlare or AWS CloudFront

### 4. Analytics Setup

#### Google Analytics

1. Create GA4 property
2. Get Measurement ID
3. Add to environment variables
4. Verify tracking in GA Real-Time

#### Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property
3. Verify ownership (meta tag method)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

#### Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Verify ownership
4. Submit sitemap

### 5. Performance Monitoring

#### Vercel Analytics

- Enable in Vercel dashboard
- View Core Web Vitals
- Monitor real user metrics

#### Third-Party Tools

- **New Relic**: Application performance monitoring
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **Hotjar**: User behavior analytics

### 6. Uptime Monitoring

Set up monitoring with:
- **UptimeRobot**: Free tier available
- **Pingdom**: Comprehensive monitoring
- **StatusCake**: Multiple check locations

Configure alerts for:
- Website down
- Response time > 3s
- SSL certificate expiry

## 🔒 Security Checklist

- [ ] HTTPS enforced (redirect HTTP to HTTPS)
- [ ] Security headers configured
- [ ] Environment variables secured
- [ ] API routes rate-limited
- [ ] Input validation on all forms
- [ ] CORS configured properly
- [ ] Dependencies updated regularly
- [ ] Secrets not in repository

## 📊 Performance Optimization

### Image Optimization

- Use Next.js Image component
- Serve WebP/AVIF formats
- Lazy load images
- Optimize image sizes

### Code Optimization

- Enable code splitting
- Tree shake unused code
- Minimize bundle size
- Use dynamic imports

### Caching Strategy

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

## 🚨 Rollback Procedure

### Vercel

1. Go to Deployments
2. Find previous working deployment
3. Click "..." → "Promote to Production"

### Git-based Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force origin main
```

## 📈 Monitoring & Alerts

### Key Metrics to Monitor

- Uptime percentage
- Response time
- Error rate
- Conversion rate
- Page load time
- Core Web Vitals

### Alert Configuration

Set up alerts for:
- Site down > 5 minutes
- Error rate > 1%
- Response time > 3 seconds
- SSL certificate expiring < 30 days

## 🔄 Continuous Deployment

### GitHub Actions

See `.github/workflows/ci.yml` for:
- Automated testing
- Linting and type checking
- Build verification
- Lighthouse CI
- Auto-deployment

### Deployment Workflow

1. Developer pushes to feature branch
2. CI runs tests and builds
3. Preview deployment created
4. Code review and approval
5. Merge to main
6. Auto-deploy to production
7. Smoke tests run
8. Monitoring alerts active

## 📞 Support

For deployment issues:
- Check deployment logs
- Review environment variables
- Verify DNS configuration
- Contact platform support
- Consult Next.js documentation

---

**Last Updated:** {Date}
