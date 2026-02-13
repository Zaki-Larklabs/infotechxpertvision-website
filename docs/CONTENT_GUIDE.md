# Content Management Guide

Guide for updating and managing content on the InfotechXpertVision website.

## 📝 Content Structure

All dynamic content is stored in `/data` directory as TypeScript files. This makes content easy to update without touching page code.

## 🛍️ Managing Products

### Adding a New Product

Edit `data/products.ts`:

```typescript
{
  id: 'product-slug',  // Used in URL
  name: 'Product Name',
  tagline: 'Short compelling tagline',
  description: 'Full product description (2-3 sentences)',
  category: 'web' | 'mobile' | 'saas' | 'ai',
  features: [
    'Feature 1',
    'Feature 2',
    // Add 6-8 features
  ],
  benefits: [
    'Benefit 1',
    'Benefit 2',
    // Add 3-4 key benefits
  ],
  screenshots: [
    '/images/products/product-screenshot-1.png',
    '/images/products/product-screenshot-2.png',
  ],
  demoUrl: 'https://demo.product.com',  // Optional
  appStoreUrl: 'https://apps.apple.com/...',  // Optional
  playStoreUrl: 'https://play.google.com/...',  // Optional
  pricing: {
    starter: 99,
    professional: 299,
    enterprise: 'Custom'
  },
  industries: ['Industry 1', 'Industry 2'],
  useCases: ['Use case 1', 'Use case 2'],
  icon: 'IconName'  // Lucide icon name
}
```

### Updating Product Information

1. Open `data/products.ts`
2. Find the product by `id`
3. Update the relevant fields
4. Save the file
5. Changes appear immediately in development
6. Deploy to see changes in production

### Product Screenshots

1. Create screenshots at 1200x800px minimum
2. Save in `/public/images/products/`
3. Use descriptive filenames: `product-name-feature.png`
4. Optimize images before uploading
5. Update `screenshots` array in product data

## 💰 Managing Pricing

### Updating Pricing Tiers

Edit `data/pricing.ts`:

```typescript
{
  id: 'tier-id',
  name: 'Tier Name',
  description: 'Short description',
  price: 99,  // or 'Custom' for enterprise
  billingPeriod: 'month' | 'year',
  features: [
    'Feature 1',
    'Feature 2',
  ],
  cta: 'Button text',
  ctaLink: '/book-demo?plan=tier-id',
  popular: true,  // Highlights this tier
  enterprise: false
}
```

### Updating Comparison Table

Edit `pricingComparison` array in `data/pricing.ts`:

```typescript
{
  feature: 'Feature Name',
  starter: true | false | 'Custom text',
  professional: true | false | 'Custom text',
  enterprise: true | false | 'Custom text'
}
```

## ⭐ Managing Testimonials

Edit `data/testimonials.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Customer Name',
  role: 'Job Title',
  company: 'Company Name',
  content: 'Testimonial text (keep under 200 characters)',
  rating: 5,
  avatar: '/images/testimonials/name.jpg',  // Optional
  productUsed: 'Product Name'  // Optional
}
```

### Testimonial Best Practices

- Keep quotes concise and impactful
- Include specific results/metrics when possible
- Use real names and companies (with permission)
- Add professional headshots
- Rotate testimonials regularly

## ✨ Managing Features

Edit `data/features.ts`:

```typescript
{
  id: 'feature-id',
  title: 'Feature Title',
  description: 'Feature description (1-2 sentences)',
  icon: 'LucideIconName',
  category: 'ai' | 'automation' | 'integration' | 'analytics' | 'security' | 'mobile'
}
```

## 📄 Updating Page Content

### Homepage

Edit `app/page.tsx`:
- Hero section text
- Feature highlights
- CTA copy
- Section headings

### About Page

Edit `app/about/page.tsx`:
- Mission statement
- Vision statement
- Company values
- Team information
- Founder bio

### Legal Pages

Edit files in `app/legal/`:
- `privacy/page.tsx` - Privacy Policy
- `terms/page.tsx` - Terms of Service
- `cookies/page.tsx` - Cookie Policy

Update the "Last updated" date when making changes.

## 🖼️ Managing Images

### Image Guidelines

**Product Screenshots:**
- Size: 1200x800px minimum
- Format: PNG or WebP
- Location: `/public/images/products/`

**Testimonial Avatars:**
- Size: 400x400px
- Format: JPG or WebP
- Location: `/public/images/testimonials/`

**Blog Images:**
- Size: 1200x630px (for social sharing)
- Format: JPG or WebP
- Location: `/public/images/blog/`

**OG Images:**
- Size: 1200x630px
- Format: JPG or PNG
- Location: `/public/images/`

### Image Optimization

Before uploading images:

1. Resize to appropriate dimensions
2. Compress using tools like:
   - TinyPNG
   - ImageOptim
   - Squoosh
3. Use WebP format when possible
4. Keep file size under 200KB

## 📝 Blog Posts (Future)

When blog is implemented, posts will be in `/content/blog/`:

```markdown
---
title: "Post Title"
date: "2024-01-01"
author: "Author Name"
excerpt: "Short description"
image: "/images/blog/post-image.jpg"
tags: ["tag1", "tag2"]
---

Post content in Markdown...
```

## 🔍 SEO Content

### Page Titles

Format: `Page Title | InfotechXpertVision`
- Keep under 60 characters
- Include primary keyword
- Make it compelling

### Meta Descriptions

- Keep under 160 characters
- Include call-to-action
- Use active voice
- Include primary keyword

### Updating SEO

Edit `lib/seo.ts` for global SEO settings.

For page-specific SEO, update the `metadata` export:

```typescript
export const metadata = generateSEO({
  title: 'Page Title',
  description: 'Page description',
  url: '/page-url',
  keywords: ['keyword1', 'keyword2']
});
```

## 📊 Analytics & Tracking

### Adding Custom Events

In your component:

```typescript
// Track button click
onClick={() => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'button_click', {
      button_name: 'Book Demo',
      page_location: window.location.href
    });
  }
}}
```

### Common Events to Track

- Form submissions
- Button clicks
- Video plays
- Download clicks
- External link clicks
- Scroll depth

## 🔄 Content Update Workflow

1. **Edit Content**
   - Update data files or page content
   - Test locally with `npm run dev`

2. **Review Changes**
   - Check all affected pages
   - Verify links work
   - Test on mobile

3. **Commit & Deploy**
   ```bash
   git add .
   git commit -m "Update: [description]"
   git push origin main
   ```

4. **Verify Production**
   - Check live site
   - Test forms
   - Verify analytics tracking

## 📋 Content Checklist

Before publishing new content:

- [ ] Spelling and grammar checked
- [ ] Links tested
- [ ] Images optimized
- [ ] Mobile responsive
- [ ] SEO metadata added
- [ ] Analytics events added
- [ ] Accessibility checked
- [ ] Legal review (if needed)

## 🎨 Brand Guidelines

### Voice & Tone

- **Professional but approachable**
- **Clear and concise**
- **Benefit-focused**
- **Action-oriented**

### Writing Style

- Use active voice
- Short paragraphs (2-3 sentences)
- Bullet points for lists
- Clear headings
- Avoid jargon

### Formatting

- **Bold** for emphasis
- *Italics* for quotes
- `Code` for technical terms
- > Blockquotes for testimonials

## 🆘 Common Tasks

### Change Company Email

1. Update `.env.local`:
   ```
   NEXT_PUBLIC_COMPANY_EMAIL=new@email.com
   ```
2. Update footer in `components/layout/Footer.tsx`
3. Update contact page

### Update Phone Number

1. Update `.env.local`:
   ```
   NEXT_PUBLIC_COMPANY_PHONE=+1-XXX-XXX-XXXX
   ```
2. Update footer and contact page

### Add New Social Media Link

Edit `components/layout/Footer.tsx`:

```typescript
const socialLinks = [
  // Add new social link
  { name: 'TikTok', href: 'https://...', icon: TikTokIcon },
];
```

## 📞 Support

For content questions:
- Email: marketing@infotechxpertvision.com
- Slack: #marketing channel
- Documentation: This guide

---

**Last Updated:** {Date}
