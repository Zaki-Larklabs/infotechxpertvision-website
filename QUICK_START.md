# Quick Start Guide
## InfotechXpertVision Website

Get up and running in 5 minutes!

---

## 🚀 Installation

### 1. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- TypeScript
- Tailwind CSS
- ShadCN UI components
- Framer Motion
- React Hook Form + Zod
- And more...

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your configuration:

```bash
# Required for basic functionality
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=InfotechXpertVision
NEXT_PUBLIC_COMPANY_EMAIL=contact@infotechxpertvision.com

# Optional (add when ready)
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── app/                    # Next.js pages
│   ├── page.tsx           # Homepage
│   ├── products/          # Products pages
│   ├── pricing/           # Pricing page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── book-demo/         # Demo booking
│   └── legal/             # Legal pages
├── components/
│   ├── layout/            # Header, Footer, CTAs
│   └── ui/                # Reusable components
├── data/                  # Content (edit here!)
│   ├── products.ts        # Product catalog
│   ├── pricing.ts         # Pricing tiers
│   ├── features.ts        # Platform features
│   └── testimonials.ts    # Customer testimonials
├── lib/                   # Utilities
├── docs/                  # Documentation
└── public/                # Static assets
```

---

## ✏️ Editing Content

### Update Products

Edit `data/products.ts`:

```typescript
export const products: Product[] = [
  {
    id: 'your-product',
    name: 'Your Product Name',
    tagline: 'Short tagline',
    description: 'Full description',
    // ... more fields
  }
];
```

### Update Pricing

Edit `data/pricing.ts`:

```typescript
export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 99,
    // ... more fields
  }
];
```

### Update Company Info

Edit `components/layout/Footer.tsx` and `app/about/page.tsx`

---

## 🎨 Customization

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: 'hsl(221.2 83.2% 53.3%)', // Blue
    // ... more shades
  },
}
```

### Change Fonts

Edit `app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

### Update Logo

Replace logo in:
- `components/layout/Header.tsx`
- `components/layout/Footer.tsx`

---

## 🧪 Testing

### Type Check

```bash
npm run type-check
```

### Lint

```bash
npm run lint
```

### Build

```bash
npm run build
```

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy!

---

## 📚 Documentation

- **README.md** - Full project documentation
- **docs/PRD.md** - Product requirements
- **docs/DESIGN_DOC.md** - Design specifications
- **docs/TECH_RULES.md** - Technical architecture
- **docs/DEPLOYMENT.md** - Deployment guide
- **docs/APP_LAUNCH_CHECKLIST.md** - Launch checklist
- **docs/MARKETING_LAUNCH_PACK.md** - Marketing templates
- **docs/CONTENT_GUIDE.md** - Content management
- **todo.md** - Development tasks

---

## 🆘 Common Issues

### Build Error: Cannot find module 'tailwindcss-animate'

**Solution:**
```bash
npm install tailwindcss-animate
```

### Port 3000 already in use

**Solution:**
```bash
# Use a different port
npm run dev -- -p 3001
```

### Environment variables not working

**Solution:**
- Ensure `.env.local` exists
- Restart dev server after changes
- Public vars must start with `NEXT_PUBLIC_`

---

## 📞 Support

- **Documentation**: See `/docs` folder
- **Issues**: Create a GitHub issue
- **Email**: dev@infotechxpertvision.com

---

## ✅ Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment variables
3. ✅ Run development server
4. ⏳ Update content in `/data` files
5. ⏳ Add your images to `/public/images`
6. ⏳ Configure analytics
7. ⏳ Set up forms and email
8. ⏳ Deploy to production

---

**Happy coding! 🚀**
