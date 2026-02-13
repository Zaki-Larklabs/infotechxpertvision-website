export interface PricingTier {
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

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small teams and startups',
    price: 99,
    billingPeriod: 'month',
    features: [
      'Up to 5 users',
      'Core features access',
      '10 GB storage',
      'Email support',
      'Mobile app access',
      'Basic analytics',
      'API access',
      'Monthly reports'
    ],
    limitations: [
      'Limited integrations',
      'Standard support only'
    ],
    cta: 'Start Free Trial',
    ctaLink: '/book-demo?plan=starter'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses that need more',
    price: 299,
    billingPeriod: 'month',
    features: [
      'Up to 25 users',
      'All Starter features',
      '100 GB storage',
      'Priority support',
      'Advanced analytics',
      'Custom workflows',
      'All integrations',
      'White-label options',
      'Dedicated account manager',
      'Weekly reports',
      'Custom training'
    ],
    cta: 'Start Free Trial',
    ctaLink: '/book-demo?plan=professional',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations',
    price: 'Custom',
    billingPeriod: 'month',
    features: [
      'Unlimited users',
      'All Professional features',
      'Unlimited storage',
      '24/7 phone support',
      'Custom development',
      'On-premise deployment option',
      'SLA guarantee',
      'Security audit',
      'Dedicated infrastructure',
      'Custom integrations',
      'Onboarding & training',
      'Quarterly business reviews'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact?inquiry=enterprise',
    enterprise: true
  }
];

export interface PricingComparison {
  feature: string;
  starter: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export const pricingComparison: PricingComparison[] = [
  { feature: 'Users', starter: '5', professional: '25', enterprise: 'Unlimited' },
  { feature: 'Storage', starter: '10 GB', professional: '100 GB', enterprise: 'Unlimited' },
  { feature: 'Mobile App', starter: true, professional: true, enterprise: true },
  { feature: 'API Access', starter: true, professional: true, enterprise: true },
  { feature: 'Basic Analytics', starter: true, professional: true, enterprise: true },
  { feature: 'Advanced Analytics', starter: false, professional: true, enterprise: true },
  { feature: 'Custom Workflows', starter: false, professional: true, enterprise: true },
  { feature: 'White-Label', starter: false, professional: true, enterprise: true },
  { feature: 'Priority Support', starter: false, professional: true, enterprise: true },
  { feature: '24/7 Phone Support', starter: false, professional: false, enterprise: true },
  { feature: 'Dedicated Manager', starter: false, professional: true, enterprise: true },
  { feature: 'Custom Development', starter: false, professional: false, enterprise: true },
  { feature: 'On-Premise Option', starter: false, professional: false, enterprise: true },
  { feature: 'SLA Guarantee', starter: false, professional: false, enterprise: true }
];
