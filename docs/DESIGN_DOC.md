# Design Document
## InfotechXpertVision Company Website

**Version:** 1.0  
**Date:** February 13, 2026  
**Designer:** Design Team  
**Status:** In Development

---

## 1. Design Philosophy

### Core Principles
1. **Conversion-First**: Every design decision optimized for lead generation
2. **Enterprise Trust**: Professional, credible, authoritative aesthetic
3. **Modern & Clean**: Contemporary design without overwhelming users
4. **Performance-Focused**: Beautiful but fast-loading
5. **Accessible**: WCAG AA compliant for all users

### Design Inspiration
- **Instasite.ai**: Hero animations, block-based sections, micro-interactions
- **Crayont.com**: Clean product layouts, use-case cards, pricing UI
- **Additional**: Stripe, Linear, Vercel for modern SaaS aesthetics

---

## 2. Design System

### 2.1 Color Palette

#### Primary Colors
```css
/* Blue - Trust, Technology */
--primary-blue-50: #EFF6FF;
--primary-blue-100: #DBEAFE;
--primary-blue-500: #3B82F6;
--primary-blue-600: #2563EB;
--primary-blue-700: #1D4ED8;

/* Purple - Innovation, Creativity */
--primary-purple-50: #FAF5FF;
--primary-purple-100: #F3E8FF;
--primary-purple-500: #A855F7;
--primary-purple-600: #9333EA;
--primary-purple-700: #7E22CE;

/* Teal - Growth, Success */
--primary-teal-50: #F0FDFA;
--primary-teal-100: #CCFBF1;
--primary-teal-500: #14B8A6;
--primary-teal-600: #0D9488;
--primary-teal-700: #0F766E;
```

#### Neutral Colors
```css
/* Grays */
--gray-50: #F9FAFB;
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;
--gray-900: #111827;

/* Semantic Colors */
--success: #10B981;
--warning: #F59E0B;
--error: #EF4444;
--info: #3B82F6;
```

#### Gradient Combinations
```css
/* Primary Gradient */
background: linear-gradient(135deg, #3B82F6 0%, #9333EA 50%, #14B8A6 100%);

/* Hero Gradient */
background: linear-gradient(to bottom right, #EFF6FF, #FAF5FF, #F0FDFA);

/* Card Gradient */
background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1));
```

### 2.2 Typography

#### Font Families
```css
/* Primary Font - Inter */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Alternative - Poppins (for headings if needed) */
--font-heading: 'Poppins', sans-serif;

/* Monospace - for code */
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

#### Type Scale
```css
/* Headings */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.75;

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

#### Typography Usage
- **H1**: 48-60px, Bold, Tight leading - Hero headlines
- **H2**: 36-48px, Bold, Tight leading - Section headers
- **H3**: 24-30px, Semibold, Normal leading - Subsections
- **H4**: 20-24px, Semibold, Normal leading - Card titles
- **Body**: 16-18px, Normal, Relaxed leading - Paragraphs
- **Small**: 14px, Normal, Normal leading - Captions, labels

### 2.3 Spacing System

#### Base Unit: 4px (0.25rem)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

#### Section Spacing
- **Section Padding (Desktop)**: 80-120px top/bottom
- **Section Padding (Mobile)**: 48-64px top/bottom
- **Container Max Width**: 1280px
- **Container Padding**: 16px (mobile), 24px (tablet), 32px (desktop)

### 2.4 Border Radius

```css
--radius-sm: 0.25rem;   /* 4px - inputs, small buttons */
--radius-md: 0.5rem;    /* 8px - cards, buttons */
--radius-lg: 0.75rem;   /* 12px - large cards */
--radius-xl: 1rem;      /* 16px - hero cards */
--radius-2xl: 1.5rem;   /* 24px - feature sections */
--radius-full: 9999px;  /* Full round - pills, avatars */
```

### 2.5 Shadows

```css
/* Elevation System */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Colored Shadows (for CTAs) */
--shadow-primary: 0 10px 30px -5px rgba(59, 130, 246, 0.3);
--shadow-purple: 0 10px 30px -5px rgba(147, 51, 234, 0.3);
```

### 2.6 Glassmorphism

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

---

## 3. Component Structure

### 3.1 Layout Components

#### Header/Navigation
```
┌─────────────────────────────────────────────────┐
│ [Logo]  Products  Solutions  Pricing  About     │
│                          Blog  [Sign In] [Demo] │
└─────────────────────────────────────────────────┘
```

**Specifications:**
- Height: 80px (desktop), 64px (mobile)
- Background: Transparent → White on scroll
- Sticky positioning
- Backdrop blur on scroll
- Mobile: Hamburger menu

#### Footer
```
┌─────────────────────────────────────────────────┐
│ [Logo]                                          │
│ Company tagline                                 │
│ [Social Icons]                                  │
│                                                 │
│ Products    Solutions    Company    Legal      │
│ - Item 1    - Item 1     - About    - Privacy  │
│ - Item 2    - Item 2     - Blog     - Terms    │
│ - Item 3    - Item 3     - Contact  - Cookies  │
│                                                 │
│ © 2026 InfotechXpertVision. All rights reserved│
└─────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Gray-900
- Text: Gray-300
- Padding: 64px top/bottom
- 4-column grid (desktop), stacked (mobile)

### 3.2 Hero Section

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         Transform Your Business with            │
│         AI-Powered Solutions                    │
│                                                 │
│    Enterprise-grade SaaS platforms that help    │
│    businesses automate, gain insights, scale    │
│                                                 │
│    [Book Demo →]  [Explore Products]            │
│                                                 │
│    ✓ No credit card  ✓ 14-day trial  ✓ Cancel  │
│                                                 │
│    [Animated Dashboard Mockup]                  │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**
- Min height: 600px (desktop), 500px (mobile)
- Background: Gradient (blue → purple → teal)
- Text: Centered, max-width 800px
- Animation: Fade in + slide up
- Mockup: Floating animation, subtle parallax

### 3.3 Feature Card

```
┌──────────────────────┐
│  [Icon]              │
│                      │
│  Feature Title       │
│                      │
│  Short description   │
│  of the feature and  │
│  its benefits.       │
│                      │
└──────────────────────┘
```

**Specifications:**
- Padding: 32px
- Border radius: 12px
- Background: White
- Shadow: md → lg on hover
- Icon: 48x48px, gradient background
- Hover: Lift effect (translateY -4px)

### 3.4 Product Card

```
┌──────────────────────┐
│  [Product Icon]      │
│                      │
│  Product Name        │
│  Short tagline       │
│                      │
│  Brief description   │
│  of what it does.    │
│                      │
│  [Learn More →]      │
└──────────────────────┘
```

**Specifications:**
- Aspect ratio: 4:5
- Padding: 24px
- Border: 1px solid gray-200
- Hover: Shadow xl, border blue-500
- Icon: 64x64px, gradient circle
- CTA: Text link with arrow

### 3.5 Testimonial Card

```
┌──────────────────────┐
│  ★★★★★               │
│                      │
│  "Customer quote     │
│  goes here with      │
│  their experience."  │
│                      │
│  [Avatar] Name       │
│           Role, Co.  │
└──────────────────────┘
```

**Specifications:**
- Padding: 24px
- Background: Gray-50
- Border radius: 12px
- Stars: Yellow-400
- Avatar: 48x48px, rounded-full
- Quote: Italic, gray-700

### 3.6 Pricing Card

```
┌──────────────────────┐
│  [POPULAR]           │
│                      │
│  Plan Name           │
│  Short description   │
│                      │
│  $299                │
│  per month           │
│                      │
│  [Get Started]       │
│                      │
│  ✓ Feature 1         │
│  ✓ Feature 2         │
│  ✓ Feature 3         │
│  ✓ Feature 4         │
│                      │
└──────────────────────┘
```

**Specifications:**
- Popular: Border 2px blue-500, scale 105%
- Padding: 32px
- Background: White
- Shadow: lg
- Price: 48px, bold
- CTA: Full width button
- Features: Checkmark + text

### 3.7 CTA Section

```
┌─────────────────────────────────────────────────┐
│                                                 │
│         Ready to Transform Your Business?       │
│                                                 │
│    Join hundreds of businesses already using    │
│    our platforms to drive growth.               │
│                                                 │
│    [Book a Demo]  [Contact Sales]               │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Specifications:**
- Background: Gradient (blue → purple → teal)
- Text: White, centered
- Padding: 80px top/bottom
- Buttons: White bg + outline variant

---

## 4. Page Wireframes

### 4.1 Homepage

```
┌─────────────────────────────────────────────────┐
│ [Header/Navigation]                             │
├─────────────────────────────────────────────────┤
│                                                 │
│ [Hero Section]                                  │
│ - Headline                                      │
│ - Subheadline                                   │
│ - CTAs                                          │
│ - Animated mockup                               │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ [Features Section]                              │
│ - Section title                                 │
│ - 3x2 grid of feature cards                     │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ [Products Section]                              │
│ - Section title                                 │
│ - 3-column grid of product cards                │
│ - "View All" CTA                                │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ [Testimonials Section]                          │
│ - Section title                                 │
│ - 3-column grid of testimonial cards            │
│                                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│ [CTA Section]                                   │
│ - Headline                                      │
│ - Subheadline                                   │
│ - CTAs                                          │
│                                                 │
├─────────────────────────────────────────────────┤
│ [Footer]                                        │
└─────────────────────────────────────────────────┘
```

### 4.2 Product Detail Page

```
┌─────────────────────────────────────────────────┐
│ [Header]                                        │
├─────────────────────────────────────────────────┤
│ [Product Hero]                                  │
│ - Icon                                          │
│ - Name                                          │
│ - Tagline                                       │
│ - CTAs (Demo + Live Demo)                       │
├─────────────────────────────────────────────────┤
│ [Description]                                   │
├─────────────────────────────────────────────────┤
│ [Benefits Grid] - 4 cards                       │
├─────────────────────────────────────────────────┤
│ [Features List] - 3 columns                     │
├─────────────────────────────────────────────────┤
│ [Use Cases] - 2 columns                         │
├─────────────────────────────────────────────────┤
│ [Industries] - Pills/badges                     │
├─────────────────────────────────────────────────┤
│ [Pricing] - 3 tiers                             │
├─────────────────────────────────────────────────┤
│ [CTA Section]                                   │
├─────────────────────────────────────────────────┤
│ [Footer]                                        │
└─────────────────────────────────────────────────┘
```

### 4.3 Pricing Page

```
┌─────────────────────────────────────────────────┐
│ [Header]                                        │
├─────────────────────────────────────────────────┤
│ [Page Hero]                                     │
│ - Title                                         │
│ - Subtitle                                      │
├─────────────────────────────────────────────────┤
│ [Pricing Cards] - 3 columns                     │
│ - Starter                                       │
│ - Professional (highlighted)                    │
│ - Enterprise                                    │
├─────────────────────────────────────────────────┤
│ [Comparison Table]                              │
│ - Feature rows                                  │
│ - Checkmarks/values per tier                    │
├─────────────────────────────────────────────────┤
│ [FAQ Section]                                   │
│ - Accordion of common questions                 │
├─────────────────────────────────────────────────┤
│ [CTA Card]                                      │
├─────────────────────────────────────────────────┤
│ [Footer]                                        │
└─────────────────────────────────────────────────┘
```

---

## 5. Animation Guidelines

### 5.1 Animation Principles
- **Subtle**: Animations should enhance, not distract
- **Fast**: Duration 200-400ms for most interactions
- **Purposeful**: Every animation serves a function
- **Accessible**: Respect prefers-reduced-motion

### 5.2 Animation Types

#### Page Load
```css
/* Fade in + Slide up */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Stagger children */
.stagger-children > * {
  animation: fadeInUp 0.5s ease-out;
  animation-fill-mode: both;
}

.stagger-children > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-children > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-children > *:nth-child(3) { animation-delay: 0.3s; }
```

#### Hover Effects
```css
/* Card lift */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

/* Button scale */
.button {
  transition: transform 0.2s ease;
}
.button:hover {
  transform: scale(1.05);
}

/* Icon rotate */
.icon {
  transition: transform 0.3s ease;
}
.icon:hover {
  transform: rotate(15deg);
}
```

#### Scroll Animations
```javascript
// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-in');
    }
  });
});
```

#### Loading States
```css
/* Skeleton loader */
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 5.3 Micro-interactions

**Button Click:**
- Scale down to 0.95 on press
- Return to 1.0 on release
- Duration: 100ms

**Form Focus:**
- Border color transition
- Subtle glow effect
- Duration: 200ms

**Success State:**
- Checkmark animation
- Green color transition
- Confetti (optional, for major conversions)

**Error State:**
- Shake animation
- Red color transition
- Duration: 300ms

---

## 6. Responsive Breakpoints

```css
/* Mobile First Approach */

/* Extra Small (Mobile) */
@media (min-width: 0px) {
  /* Base styles */
}

/* Small (Large Mobile) */
@media (min-width: 640px) {
  /* sm: */
}

/* Medium (Tablet) */
@media (min-width: 768px) {
  /* md: */
}

/* Large (Desktop) */
@media (min-width: 1024px) {
  /* lg: */
}

/* Extra Large (Large Desktop) */
@media (min-width: 1280px) {
  /* xl: */
}

/* 2X Large (Ultra Wide) */
@media (min-width: 1536px) {
  /* 2xl: */
}
```

### Responsive Behavior

**Navigation:**
- Mobile: Hamburger menu
- Desktop: Horizontal menu

**Grid Layouts:**
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

**Typography:**
- Mobile: Smaller sizes (H1: 36px)
- Desktop: Larger sizes (H1: 60px)

**Spacing:**
- Mobile: Tighter spacing (48px sections)
- Desktop: Generous spacing (96px sections)

---

## 7. UI Interaction Principles

### 7.1 Feedback
- **Immediate**: Visual feedback within 100ms
- **Clear**: Obvious state changes
- **Consistent**: Same interactions behave the same way

### 7.2 Affordance
- **Clickable**: Buttons look clickable (shadow, color, cursor)
- **Hoverable**: Hover states indicate interactivity
- **Disabled**: Disabled states clearly communicated

### 7.3 Progressive Disclosure
- **Show essentials first**: Don't overwhelm
- **Reveal on demand**: "Show more" for details
- **Contextual help**: Tooltips for complex features

### 7.4 Error Prevention
- **Validation**: Real-time form validation
- **Confirmation**: Confirm destructive actions
- **Undo**: Allow users to reverse actions

---

## 8. Accessibility Standards (WCAG AA)

### 8.1 Color Contrast
- **Normal text**: 4.5:1 minimum
- **Large text**: 3:1 minimum
- **UI components**: 3:1 minimum

### 8.2 Keyboard Navigation
- **Tab order**: Logical flow
- **Focus indicators**: Visible focus states
- **Skip links**: Skip to main content

### 8.3 Screen Readers
- **Alt text**: All images have descriptive alt text
- **ARIA labels**: Buttons and links labeled
- **Semantic HTML**: Proper heading hierarchy

### 8.4 Motion
- **Reduced motion**: Respect prefers-reduced-motion
- **No auto-play**: Videos don't auto-play with sound
- **Pause controls**: Animations can be paused

---

## 9. Design Checklist

### Before Development
- [ ] All wireframes approved
- [ ] Design system documented
- [ ] Component library defined
- [ ] Responsive breakpoints planned
- [ ] Animation specs documented

### During Development
- [ ] Components match designs
- [ ] Spacing consistent
- [ ] Colors from design system
- [ ] Typography correct
- [ ] Animations smooth

### Before Launch
- [ ] Mobile responsive tested
- [ ] Accessibility audit passed
- [ ] Cross-browser tested
- [ ] Performance optimized
- [ ] Design QA complete

---

## 10. Design Assets

### Required Assets
- Logo (SVG, multiple sizes)
- Product icons (SVG, 64x64px)
- Feature icons (SVG, 48x48px)
- Product screenshots (1200x800px)
- Testimonial photos (400x400px)
- OG images (1200x630px)
- Favicon (multiple sizes)

### Asset Guidelines
- **Format**: SVG for icons, WebP for photos
- **Optimization**: Compress all images
- **Naming**: Descriptive, kebab-case
- **Organization**: /public/images/[category]/

---

**Document Status:** ✅ Approved  
**Next Review:** Post-development  
**Owner:** Design Team  
**Stakeholders:** Product, Engineering, Marketing
