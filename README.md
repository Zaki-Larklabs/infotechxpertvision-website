# InfotechXpertVision - Enterprise Marketing Website

A modern, high-converting marketing and lead-generation website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **Conversion-Optimized**: Sticky CTAs, floating contact buttons, lead capture forms
- **SEO-Ready**: Dynamic meta tags, sitemap, robots.txt, structured data
- **Mobile-First**: Fully responsive design with accessibility (WCAG AA)
- **Dynamic Content**: All products, features, pricing from data files
- **Form Handling**: Contact forms, demo booking with webhook integrations
- **Analytics Ready**: Google Analytics, GTM, Facebook Pixel support
- **Performance**: Image optimization, code splitting, SSG/ISR
- **Security**: Input sanitization, XSS protection, HTTPS enforcement

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes (contact, demo booking)
│   ├── products/          # Product pages (dynamic)
│   ├── legal/             # Legal pages (privacy, terms, cookies)
│   ├── layout.tsx         # Root layout with analytics
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Header, Footer, CTAs
│   └── ui/                # Reusable UI components
├── data/                  # Dynamic content (products, pricing, etc.)
├── lib/                   # Utilities (SEO, validation)
├── public/                # Static assets
└── docs/                  # Documentation

```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd infotechxpertvision-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your configuration:
   - Site URL and company info
   - Analytics IDs (GA, GTM, Facebook Pixel)
   - Email/webhook URLs for lead capture
   - reCAPTCHA keys
   - Calendly URL

4. **Run development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:3000](http://localhost:3000)

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your Git repository
   - Vercel auto-detects Next.js

2. **Configure environment variables**
   - Add all variables from `.env.example` in Vercel dashboard
   - Settings → Environment Variables

3. **Deploy**
   - Push to main branch for automatic deployment
   - Or click "Deploy" in Vercel dashboard

### Other Platforms

- **Netlify**: Use `next export` or Netlify's Next.js plugin
- **AWS Amplify**: Connect repository and configure build settings
- **Docker**: Dockerfile included (see deployment docs)

## 📊 Analytics & Tracking

### Google Analytics (GA4)

Add to `.env.local`:
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Google Tag Manager

Add to `.env.local`:
```
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

### Search Console Verification

Add to `.env.local`:
```
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
NEXT_PUBLIC_BING_SITE_VERIFICATION=your-verification-code
```

## 📝 Content Management

### Updating Products

Edit `data/products.ts`:
```typescript
export const products: Product[] = [
  {
    id: 'product-slug',
    name: 'Product Name',
    tagline: 'Short tagline',
    description: 'Full description',
    // ... more fields
  }
];
```

### Updating Pricing

Edit `data/pricing.ts` to modify pricing tiers and comparison table.

### Updating Features

Edit `data/features.ts` to add/modify platform features.

### Updating Testimonials

Edit `data/testimonials.ts` to add customer testimonials.

## 🔧 Customization

### Brand Colors

Edit `tailwind.config.ts` to change color scheme:
```typescript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Typography

Change fonts in `app/layout.tsx`:
```typescript
import { Inter, Poppins } from 'next/font/google';
```

### Logo

Replace logo in `components/layout/Header.tsx` and `Footer.tsx`

## 📧 Lead Capture Integration

### Email Setup

Configure SMTP in `.env.local`:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### CRM Webhooks

Add webhook URLs:
```
HUBSPOT_WEBHOOK_URL=https://...
PIPEDRIVE_WEBHOOK_URL=https://...
SLACK_WEBHOOK_URL=https://...
```

### reCAPTCHA

1. Get keys from [Google reCAPTCHA](https://www.google.com/recaptcha)
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-site-key
   RECAPTCHA_SECRET_KEY=your-secret-key
   ```

## 🎯 SEO Checklist

- [x] Dynamic meta tags on all pages
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Sitemap.xml generation
- [x] Robots.txt configuration
- [x] Structured data (JSON-LD)
- [x] Canonical URLs
- [x] Mobile-friendly design
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Set up Google Analytics
- [ ] Configure GTM container

## 🚦 Performance

### Lighthouse Scores Target

- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

### Optimization Features

- Next.js Image optimization
- Code splitting
- Lazy loading
- Font optimization
- CSS purging

## 🔒 Security

- HTTPS enforced
- Input sanitization on all forms
- XSS protection headers
- CSRF protection
- Rate limiting (implement as needed)
- Environment variables for secrets

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Run tests (when implemented)
npm test
```

## 📱 Mobile Apps

If you have mobile apps, update:
- App Store URLs in `data/products.ts`
- Download buttons in product pages
- App preview videos

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

Proprietary - InfotechXpertVision

## 📞 Support

- Email: contact@infotechxpertvision.com
- Documentation: See `/docs` folder
- Issues: Create a GitHub issue

## 🎉 Launch Checklist

See `docs/APP_LAUNCH_CHECKLIST.md` for complete pre-launch checklist.

---

Built with ❤️ by InfotechXpertVision Team
