export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'ai' | 'automation' | 'integration' | 'analytics' | 'security' | 'mobile';
}

export const features: Feature[] = [
  {
    id: 'ai-powered',
    title: 'AI-Powered Intelligence',
    description: 'Leverage machine learning and AI to automate decisions, predict outcomes, and gain deeper insights.',
    icon: 'Brain',
    category: 'ai'
  },
  {
    id: 'real-time-analytics',
    title: 'Real-Time Analytics',
    description: 'Monitor your business metrics in real-time with interactive dashboards and instant alerts.',
    icon: 'Activity',
    category: 'analytics'
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce human error.',
    icon: 'Zap',
    category: 'automation'
  },
  {
    id: 'seamless-integration',
    title: 'Seamless Integrations',
    description: 'Connect with your existing tools via APIs, webhooks, and pre-built integrations.',
    icon: 'Link',
    category: 'integration'
  },
  {
    id: 'mobile-first',
    title: 'Mobile-First Design',
    description: 'Access your data and manage operations on-the-go with native mobile apps.',
    icon: 'Smartphone',
    category: 'mobile'
  },
  {
    id: 'enterprise-security',
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption, role-based access, and compliance with industry standards.',
    icon: 'Shield',
    category: 'security'
  },
  {
    id: 'custom-dashboards',
    title: 'Custom Dashboards',
    description: 'Build personalized dashboards with drag-and-drop widgets tailored to your needs.',
    icon: 'LayoutDashboard',
    category: 'analytics'
  },
  {
    id: 'api-first',
    title: 'API-First Architecture',
    description: 'Extend and customize with our comprehensive REST and GraphQL APIs.',
    icon: 'Code',
    category: 'integration'
  },
  {
    id: 'multi-tenant',
    title: 'Multi-Tenant Support',
    description: 'Manage multiple organizations, locations, or clients from a single platform.',
    icon: 'Building',
    category: 'automation'
  },
  {
    id: 'white-label',
    title: 'White-Label Ready',
    description: 'Rebrand and customize the platform with your logo, colors, and domain.',
    icon: 'Palette',
    category: 'integration'
  },
  {
    id: 'data-export',
    title: 'Data Export & Backup',
    description: 'Export your data anytime in multiple formats. Automated backups included.',
    icon: 'Download',
    category: 'security'
  },
  {
    id: '24-7-support',
    title: '24/7 Expert Support',
    description: 'Get help when you need it with our dedicated support team and knowledge base.',
    icon: 'Headphones',
    category: 'automation'
  }
];

export const getFeaturesByCategory = (category: string): Feature[] => {
  return features.filter(f => f.category === category);
};
