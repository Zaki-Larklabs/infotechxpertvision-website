export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  productUsed?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc',
    content: 'InfotechXpertVision transformed our operations. The AI Analytics Platform helped us increase revenue by 40% in just 6 months.',
    rating: 5,
    avatar: '/images/testimonials/sarah.jpg',
    productUsed: 'AI Analytics Platform'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    role: 'Director',
    company: 'City Medical Center',
    content: 'The Healthcare Portal streamlined our patient management completely. Appointment no-shows dropped by 45% and patient satisfaction is at an all-time high.',
    rating: 5,
    avatar: '/images/testimonials/michael.jpg',
    productUsed: 'Healthcare Portal'
  },
  {
    id: '3',
    name: 'Priya Sharma',
    role: 'Principal',
    company: 'Greenfield Academy',
    content: 'Managing 2,000+ students was a nightmare before. The Student Management System made everything so simple. Parents love the mobile app!',
    rating: 5,
    avatar: '/images/testimonials/priya.jpg',
    productUsed: 'Student Management System'
  },
  {
    id: '4',
    name: 'James Rodriguez',
    role: 'Sales Director',
    company: 'Global Solutions Ltd',
    content: 'CRM Pro helped us close deals 30% faster. The pipeline visibility and automation features are game-changers for our sales team.',
    rating: 5,
    avatar: '/images/testimonials/james.jpg',
    productUsed: 'CRM Pro'
  },
  {
    id: '5',
    name: 'Emily Watson',
    role: 'Operations Manager',
    company: 'RetailHub',
    content: 'Inventory Manager saved us from constant stockouts. Real-time tracking across 15 locations has been a lifesaver.',
    rating: 5,
    avatar: '/images/testimonials/emily.jpg',
    productUsed: 'Inventory Manager'
  },
  {
    id: '6',
    name: 'Ahmed Al-Rashid',
    role: 'Founder',
    company: 'EduTech Solutions',
    content: 'The team at InfotechXpertVision delivered beyond expectations. Professional, responsive, and truly understand business needs.',
    rating: 5,
    avatar: '/images/testimonials/ahmed.jpg'
  }
];
