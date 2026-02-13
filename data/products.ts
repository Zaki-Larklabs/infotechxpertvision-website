export interface Product {
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

export const products: Product[] = [
  {
    id: 'ai-analytics-platform',
    name: 'AI Analytics Platform',
    tagline: 'Transform data into actionable insights with AI',
    description: 'Enterprise-grade analytics platform powered by machine learning that helps businesses make data-driven decisions faster.',
    category: 'ai',
    features: [
      'Real-time data processing',
      'Predictive analytics & forecasting',
      'Custom dashboard builder',
      'Automated reporting',
      'Multi-source data integration',
      'Natural language queries'
    ],
    benefits: [
      'Reduce analysis time by 80%',
      'Increase forecast accuracy by 45%',
      'Make faster, data-driven decisions',
      'Unify data from multiple sources'
    ],
    screenshots: [
      '/images/products/analytics-dashboard.png',
      '/images/products/analytics-reports.png',
      '/images/products/analytics-insights.png'
    ],
    demoUrl: 'https://demo.analytics.infotechxpertvision.com',
    pricing: {
      starter: 299,
      professional: 799,
      enterprise: 'Custom'
    },
    industries: ['Enterprise', 'Healthcare', 'Finance', 'Retail'],
    useCases: [
      'Sales forecasting',
      'Customer behavior analysis',
      'Operational efficiency',
      'Risk management'
    ],
    icon: 'BarChart3'
  },
  {
    id: 'student-management-system',
    name: 'Student Management System',
    tagline: 'Complete education management solution',
    description: 'All-in-one platform for educational institutions to manage students, courses, attendance, grades, and communication.',
    category: 'saas',
    features: [
      'Student enrollment & profiles',
      'Attendance tracking',
      'Grade management',
      'Parent-teacher communication',
      'Fee management',
      'Timetable scheduling',
      'Library management',
      'Mobile app for students & parents'
    ],
    benefits: [
      'Streamline administrative tasks',
      'Improve parent engagement',
      'Reduce paperwork by 90%',
      'Real-time attendance tracking'
    ],
    screenshots: [
      '/images/products/sms-dashboard.png',
      '/images/products/sms-attendance.png',
      '/images/products/sms-grades.png'
    ],
    demoUrl: 'https://demo.sms.infotechxpertvision.com',
    appStoreUrl: 'https://apps.apple.com/app/your-sms',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.infotechxpertvision.sms',
    pricing: {
      starter: 199,
      professional: 499,
      enterprise: 'Custom'
    },
    industries: ['Education', 'Colleges', 'Coaching Centers', 'K-12 Schools'],
    useCases: [
      'School administration',
      'Online learning management',
      'Parent communication',
      'Student performance tracking'
    ],
    icon: 'GraduationCap'
  },
  {
    id: 'crm-pro',
    name: 'CRM Pro',
    tagline: 'Customer relationships, simplified',
    description: 'Modern CRM built for SMEs and growing businesses. Manage leads, track sales, and grow customer relationships.',
    category: 'saas',
    features: [
      'Lead & contact management',
      'Sales pipeline tracking',
      'Email integration',
      'Task & activity management',
      'Reporting & analytics',
      'Mobile CRM app',
      'WhatsApp integration',
      'Custom fields & workflows'
    ],
    benefits: [
      'Close deals 30% faster',
      'Never miss a follow-up',
      'Centralize customer data',
      'Automate repetitive tasks'
    ],
    screenshots: [
      '/images/products/crm-pipeline.png',
      '/images/products/crm-contacts.png',
      '/images/products/crm-analytics.png'
    ],
    demoUrl: 'https://demo.crm.infotechxpertvision.com',
    pricing: {
      starter: 49,
      professional: 149,
      enterprise: 'Custom'
    },
    industries: ['SMEs', 'Sales Teams', 'Agencies', 'Consulting'],
    useCases: [
      'Lead management',
      'Sales tracking',
      'Customer support',
      'Marketing campaigns'
    ],
    icon: 'Users'
  },
  {
    id: 'healthcare-portal',
    name: 'Healthcare Portal',
    tagline: 'Digital health management for modern clinics',
    description: 'Complete patient management system with appointment scheduling, EMR, billing, and telemedicine capabilities.',
    category: 'web',
    features: [
      'Patient records & EMR',
      'Appointment scheduling',
      'Prescription management',
      'Billing & insurance',
      'Telemedicine integration',
      'Lab results portal',
      'Patient mobile app',
      'HIPAA compliant'
    ],
    benefits: [
      'Reduce no-shows by 40%',
      'Streamline patient intake',
      'Secure health records',
      'Enable remote consultations'
    ],
    screenshots: [
      '/images/products/health-dashboard.png',
      '/images/products/health-appointments.png',
      '/images/products/health-records.png'
    ],
    demoUrl: 'https://demo.health.infotechxpertvision.com',
    pricing: {
      starter: 399,
      professional: 899,
      enterprise: 'Custom'
    },
    industries: ['Healthcare', 'Clinics', 'Hospitals', 'Telemedicine'],
    useCases: [
      'Patient management',
      'Appointment booking',
      'Telemedicine',
      'Medical billing'
    ],
    icon: 'Heart'
  },
  {
    id: 'inventory-manager',
    name: 'Inventory Manager',
    tagline: 'Smart inventory control for businesses',
    description: 'Real-time inventory tracking, stock alerts, and automated reordering for retail and e-commerce businesses.',
    category: 'saas',
    features: [
      'Real-time stock tracking',
      'Barcode scanning',
      'Low stock alerts',
      'Purchase order management',
      'Multi-location support',
      'Supplier management',
      'Sales integration',
      'Mobile inventory app'
    ],
    benefits: [
      'Prevent stockouts',
      'Reduce excess inventory by 35%',
      'Automate reordering',
      'Track inventory across locations'
    ],
    screenshots: [
      '/images/products/inventory-dashboard.png',
      '/images/products/inventory-stock.png',
      '/images/products/inventory-orders.png'
    ],
    demoUrl: 'https://demo.inventory.infotechxpertvision.com',
    pricing: {
      starter: 99,
      professional: 299,
      enterprise: 'Custom'
    },
    industries: ['Retail', 'E-commerce', 'Manufacturing', 'Wholesale'],
    useCases: [
      'Stock management',
      'Order fulfillment',
      'Warehouse management',
      'Supplier coordination'
    ],
    icon: 'Package'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsByIndustry = (industry: string): Product[] => {
  return products.filter(p => p.industries.includes(industry));
};
