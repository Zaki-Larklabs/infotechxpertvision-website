# Technical Rules & Architecture
## InfotechXpertVision Company Website

**Version:** 1.0  
**Date:** February 13, 2026  
**Tech Lead:** Engineering Team  
**Status:** In Development

---

## 1. Technology Stack

### 1.1 Frontend Framework

**Next.js 14+ (App Router)**
- **Why**: Best-in-class React framework with built-in optimization
- **Features Used**:
  - App Router for file-based routing
  - Server Components for performance
  - Server Actions for form handling
  - Image optimization
  - Font optimization
  - Metadata API for SEO

**TypeScript 5.3+**
- **Why**: Type safety, better DX, fewer runtime errors
- **Configuration**: Strict mode enabled
- **Rules**:
  - All components must be typed
  - No `any` types (use `unknown` if needed)
  - Interfaces for data structures
  - Type guards for runtime checks

### 1.2 Styling

**Tailwind CSS 3.4+**
- **Why**: Utility-first, fast development, small bundle size
- **Configuration**:
  - Custom color palette
  - Custom spacing scale
  - Custom breakpoints
  - JIT mode enabled

**ShadCN UI**
- **Why**: Accessible, customizable, copy-paste components
- **Components Used**:
  - Button, Card, Input, Textarea
  - Dialog, Dropdown, Tabs
  - Label, Select

**Framer Motion**
- **Why**: Powerful animations, React-first API
- **Usage**:
  - Page transitions
  - Scroll animations
  - Micro-interactions
  - Gesture handling

### 1.3 Forms & Validation

**React Hook Form 7.51+**
- **Why**: Performant, minimal re-renders, great DX
- **Features**:
  - Uncontrolled components
  - Built-in validation
  - Error handling
  - Form state management

**Zod 3.22+**
- **Why**: TypeScript-first schema validation
- **Usage**:
  - Form validation schemas
  - API request validation
  - Type inference
  - Error messages

**reCAPTCHA v3**
- **Why**: Bot protection without user friction
- **Implementation**:
  - Invisible reCAPTCHA
  - Score-based verification
  - Fallback to v2 if needed

---

## 2. Backend Architecture

### 2.1 API Layer

**Next.js API Routes**
- **Location**: `/app/api/`
- **Usage**:
  - Form submissions
  - Webhook handlers
  - Third-party integrations
  - Server-side logic

**Server Actions**
- **Usage**:
  - Form handling
  - Data mutations
  - Progressive enhancement
  - Type-safe RPC

### 2.2 Email Service

**Primary: Resend**
- **Why**: Modern API, great DX, reliable delivery
- **Fallback**: Nodemailer with SMTP

**Email Templates**:
- Demo booking confirmation
- Contact form notification
- Lead notification to sales
- Welcome email

### 2.3 CRM Integration

**Webhook Support**:
- HubSpot
- Pipedrive
- Salesforce
- Custom webhooks

**Data Sent**:
```typescript
interface LeadData {
  name: string;
  email: string;
  company: string;
  phone: string;
  product?: string;
  requirements: string;
  source: string;
  timestamp: string;
}
```

---

## 3. Data Management

### 3.1 Content Structure

**Static Data Files** (`/data/`)
- `products.ts` - Product catalog
- `pricing.ts` - Pricing tiers
- `features.ts` - Platform features
- `testimonials.ts` - Customer testimonials

**Why Static Files**:
- Type-safe
- Version controlled
- Fast builds
- No database needed initially

**Future: Headless CMS**
- Sanity or Contentful
- For blog and dynamic content
- API-first architecture

### 3.2 Data Types

```typescript
// Product
interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'web' | 'mobile' | 'saas' | 'ai';
  features: string[];
  benefits: string[];
  screenshots: string[];
  demoUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  pricing: {
    starter?: number;
    professional?: number;
    enterprise?: string;
  };
  industries: string[];
  useCases: string[];
  icon: string;
}

// Pricing Tier
interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: number | string;
  billingPeriod: 'month' | 'year';
  features: string[];
  limitations?: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  enterprise?: boolean;
}

// Testimonial
interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  productUsed?: string;
}
```

---

## 4. SEO Implementation

### 4.1 Metadata

**Dynamic Metadata API**:
```typescript
export async function generateMetadata({ params }): Promise<Metadata> {
  return {
    title: 'Page Title | InfotechXpertVision',
    description: 'Page description',
    openGraph: {
      title: 'OG Title',
      description: 'OG Description',
      images: ['/og-image.jpg'],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Twitter Title',
      description: 'Twitter Description',
      images: ['/twitter-image.jpg'],
    },
  };
}
```

### 4.2 Structured Data

**JSON-LD Schemas**:
- Organization
- Product
- BreadcrumbList
- FAQPage
- Article (for blog)

**Implementation**:
```typescript
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(schema),
  }}
/>
```

### 4.3 Sitemap & Robots

**Sitemap.xml**:
- Auto-generated from routes
- Includes all public pages
- Dynamic product pages
- Blog posts (future)

**Robots.txt**:
- Allow all crawlers
- Disallow /api/, /admin/
- Sitemap reference

---

## 5. Performance Optimization

### 5.1 Image Optimization

**Next.js Image Component**:
```typescript
<Image
  src="/image.jpg"
  alt="Description"
  width={1200}
  height={800}
  quality={85}
  loading="lazy"
  placeholder="blur"
/>
```

**Image Guidelines**:
- Use WebP/AVIF formats
- Lazy load below fold
- Responsive sizes
- Blur placeholder

### 5.2 Code Splitting

**Dynamic Imports**:
```typescript
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false,
});
```

**Route-based Splitting**:
- Automatic with App Router
- Each route is a separate chunk

### 5.3 Font Optimization

**Next.js Font**:
```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});
```

### 5.4 Performance Targets

**Lighthouse Scores**:
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 95
- SEO: 100

**Core Web Vitals**:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 6. Security

### 6.1 Input Sanitization

**All User Inputs**:
```typescript
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, 1000); // Max length
}
```

**Validation**:
- Client-side: Zod schemas
- Server-side: Double validation
- Type checking: TypeScript

### 6.2 Security Headers

**next.config.js**:
```javascript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin'
        }
      ]
    }
  ];
}
```

### 6.3 Rate Limiting

**API Routes**:
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
```

### 6.4 Environment Variables

**Required Variables**:
```bash
# Public
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=

# Private (Server-only)
RECAPTCHA_SECRET_KEY=
SMTP_HOST=
SMTP_USER=
SMTP_PASSWORD=
HUBSPOT_WEBHOOK_URL=
```

**Rules**:
- Never commit `.env` files
- Use `.env.example` for documentation
- Prefix public vars with `NEXT_PUBLIC_`
- Validate required vars on startup

---

## 7. Analytics & Monitoring

### 7.1 Google Analytics (GA4)

**Implementation**:
```typescript
// app/layout.tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `}
</Script>
```

**Events to Track**:
- Page views
- Button clicks (CTAs)
- Form submissions
- Video plays
- Scroll depth
- Outbound links

### 7.2 Google Tag Manager

**Container Setup**:
- Create GTM container
- Add to layout
- Configure tags, triggers, variables

### 7.3 Error Tracking

**Sentry (Recommended)**:
```typescript
import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
});
```

---

## 8. Testing Strategy

### 8.1 Type Checking

**TypeScript**:
```bash
npm run type-check
```

**Pre-commit Hook**:
- Run type check before commit
- Fail if errors found

### 8.2 Linting

**ESLint**:
```bash
npm run lint
```

**Rules**:
- Next.js recommended
- React hooks rules
- Accessibility rules

### 8.3 Manual Testing

**Checklist**:
- [ ] All forms submit correctly
- [ ] All links work
- [ ] Mobile responsive
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] Keyboard navigation
- [ ] Screen reader compatible

### 8.4 Performance Testing

**Lighthouse CI**:
```bash
npm run lighthouse
```

**Run on**:
- Every PR
- Before deployment
- Weekly in production

---

## 9. CI/CD Pipeline

### 9.1 GitHub Actions

**Workflow** (`.github/workflows/ci.yml`):
1. Lint & Type Check
2. Build
3. Lighthouse CI (on PR)
4. Deploy Preview (on PR)
5. Deploy Production (on main)

### 9.2 Deployment

**Vercel (Recommended)**:
- Auto-deploy on push to main
- Preview deployments for PRs
- Environment variables in dashboard
- Custom domain configuration

**Alternative Platforms**:
- Netlify
- AWS Amplify
- Docker + Cloud Run

### 9.3 Environment Strategy

**Environments**:
- **Development**: Local (`npm run dev`)
- **Preview**: PR deployments
- **Production**: Main branch

---

## 10. Code Organization

### 10.1 Folder Structure

```
/
├── app/                    # Next.js app directory
│   ├── (routes)/          # Route groups
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/
│   ├── layout/            # Layout components
│   ├── sections/          # Page sections
│   └── ui/                # Reusable UI components
├── data/                  # Static data
├── lib/                   # Utilities
│   ├── seo.ts            # SEO helpers
│   ├── utils.ts          # General utilities
│   └── validations.ts    # Zod schemas
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript types
├── public/                # Static assets
└── docs/                  # Documentation
```

### 10.2 Naming Conventions

**Files**:
- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`utils.ts`)
- Pages: lowercase (`page.tsx`)
- Types: PascalCase (`types.ts`)

**Variables**:
- Constants: UPPER_SNAKE_CASE
- Functions: camelCase
- Components: PascalCase
- Types/Interfaces: PascalCase

### 10.3 Import Order

```typescript
// 1. External dependencies
import React from 'react';
import { useForm } from 'react-hook-form';

// 2. Internal components
import { Button } from '@/components/ui/button';
import { Header } from '@/components/layout/Header';

// 3. Utilities
import { cn } from '@/lib/utils';
import { generateSEO } from '@/lib/seo';

// 4. Types
import type { Product } from '@/types';

// 5. Styles
import './styles.css';
```

---

## 11. Development Workflow

### 11.1 Git Strategy

**Branching**:
- `main` - Production
- `develop` - Development
- `feature/*` - New features
- `fix/*` - Bug fixes
- `hotfix/*` - Production hotfixes

**Commit Messages**:
```
type(scope): subject

body

footer
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Adding tests
- `chore`: Maintenance

### 11.2 Pull Request Process

1. Create feature branch
2. Make changes
3. Run tests locally
4. Push and create PR
5. CodeRabbit review
6. Team review
7. Merge to develop
8. Deploy to preview
9. Merge to main
10. Deploy to production

### 11.3 Code Review Checklist

- [ ] Code follows style guide
- [ ] Types are correct
- [ ] No console.logs
- [ ] Comments for complex logic
- [ ] Tests pass
- [ ] No security issues
- [ ] Performance considered
- [ ] Accessibility checked

---

## 12. Dependencies Management

### 12.1 Package Updates

**Strategy**:
- Review updates weekly
- Test in development first
- Update one major package at a time
- Check breaking changes

**Tools**:
- Dependabot for automated PRs
- `npm outdated` to check versions
- `npm audit` for security

### 12.2 Bundle Size

**Monitor**:
- Use `@next/bundle-analyzer`
- Keep total JS < 200KB
- Lazy load heavy components
- Tree-shake unused code

---

## 13. Documentation

### 13.1 Code Documentation

**JSDoc Comments**:
```typescript
/**
 * Generates SEO metadata for a page
 * @param title - Page title
 * @param description - Page description
 * @returns Metadata object for Next.js
 */
export function generateSEO(title: string, description: string): Metadata {
  // ...
}
```

### 13.2 Component Documentation

**Storybook (Future)**:
- Component playground
- Props documentation
- Usage examples
- Accessibility notes

---

## 14. Technical Debt

### 14.1 Known Issues

- [ ] None currently

### 14.2 Future Improvements

- [ ] Add Storybook for component documentation
- [ ] Implement E2E tests with Playwright
- [ ] Add visual regression testing
- [ ] Implement A/B testing framework
- [ ] Add internationalization (i18n)

---

## 15. Support & Maintenance

### 15.1 Monitoring

**Uptime**:
- UptimeRobot or Pingdom
- Alert on downtime
- Check every 5 minutes

**Performance**:
- Vercel Analytics
- Core Web Vitals monitoring
- Real User Monitoring (RUM)

**Errors**:
- Sentry for error tracking
- Alert on critical errors
- Weekly error review

### 15.2 Backup Strategy

**Code**:
- Git repository (GitHub)
- Automated backups

**Content**:
- Version controlled in Git
- Future: CMS backups

---

**Document Status:** ✅ Approved  
**Next Review:** Monthly  
**Owner:** Engineering Team  
**Stakeholders:** Product, DevOps, Security
