'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export function Footer() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);
  
  // Isomorphic effect to avoid hydration mismatch
  if (typeof window !== 'undefined' && !mounted) {
      setMounted(true);
  }
  
  if (!ready || !mounted) return <footer className="bg-[#0B0B15] pt-20 pb-10 border-t border-white/5 min-h-[400px]" />;

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Article & News', href: '/blog' },
      { name: 'Legal Notices', href: '/legal' },
    ],
    services: [
      { name: 'Website Development', href: '/services/web' },
      { name: 'App Development', href: '/services/app' },
      { name: 'Digital Marketing', href: '/services/marketing' },
      { name: 'Graphic Design', href: '/services/design' },
      { name: 'Brand Identity', href: '/services/branding' },
      { name: 'Search Engine Optimization', href: '/services/seo' },
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Ticket Support', href: '/support' },
      { name: 'Sales Support', href: '/sales' },
      { name: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-[#0B0B15] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-2">
             <Link href="/" className="flex items-center gap-3 mb-6">
               <div className="relative h-14 w-auto">
                  <Image src="/logo.png" alt="InfotechXpertVision Logo" width={56} height={56} className="h-full w-auto object-contain" />
               </div>
               <div className="flex flex-col leading-none">
                  <span className="font-bold text-lg text-white tracking-wide">Infotech</span>
                  <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">XpertVision</span>
               </div>
             </Link>
            <p className="text-slate-400 max-w-sm mb-8 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-pink-500 hover:text-white transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="font-bold text-white mb-6 text-base">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h3 className="font-bold text-white mb-6 text-base">{t('footer.support')}</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 3 */}
           <div>
            <h3 className="font-bold text-white mb-6 text-base">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link href="/about" className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200">About Us</Link>
              <Link href="/pricing" className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200">Pricing</Link>
              <Link href="/contact" className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200">Contact</Link>
              <Link href="/blog" className="text-slate-400 hover:text-pink-500 text-sm transition-colors duration-200">Blog</Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
