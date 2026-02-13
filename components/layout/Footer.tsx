import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'AI Analytics Platform', href: '/products/ai-analytics-platform' },
    { name: 'Student Management System', href: '/products/student-management-system' },
    { name: 'CRM Pro', href: '/products/crm-pro' },
    { name: 'Healthcare Portal', href: '/products/healthcare-portal' },
    { name: 'Inventory Manager', href: '/products/inventory-manager' },
  ],
  solutions: [
    { name: 'For Education', href: '/solutions/education' },
    { name: 'For Healthcare', href: '/solutions/healthcare' },
    { name: 'For Enterprise', href: '/solutions/enterprise' },
    { name: 'For SMEs', href: '/solutions/smes' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/legal/privacy' },
    { name: 'Terms of Service', href: '/legal/terms' },
    { name: 'Cookie Policy', href: '/legal/cookies' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/infotechxpertvision', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/infotechxpert', icon: Twitter },
  { name: 'Facebook', href: 'https://facebook.com/infotechxpertvision', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/infotechxpertvision', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@infotechxpertvision', icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">IX</span>
              </div>
              <span className="font-bold text-white">InfotechXpertVision</span>
            </Link>
            <p className="text-sm mb-4">
              Enterprise AI & SaaS solutions for modern businesses.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} InfotechXpertVision. All rights reserved.
          </p>
          <p className="text-sm mt-4 md:mt-0">
            Contact: {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@infotechxpertvision.com'}
          </p>
        </div>
      </div>
    </footer>
  );
}
