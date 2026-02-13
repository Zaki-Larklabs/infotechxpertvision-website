import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  products: [
    { name: 'AI Analytics Platform', href: '/products/ai-analytics-platform' },
    { name: 'Student Management System', href: '/products/student-management-system' },
    { name: 'CRM Pro', href: '/products/crm-pro' },
    { name: 'Healthcare Portal', href: '/products/healthcare-portal' },
    { name: 'Inventory Manager', href: '/products/inventory-manager' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
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
];

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-slate-900 font-bold text-lg">IX</span>
              </div>
              <span className="font-semibold text-white">InfotechXpertVision</span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              Digital systems built for modern institutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} InfotechXpertVision. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built with precision for modern institutions.
          </p>
        </div>
      </div>
    </footer>
  );
}
