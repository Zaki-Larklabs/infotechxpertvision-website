'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation('common');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: t('nav.product'), href: '/' },
    { name: t('nav.features'), href: '#features' },
    { name: t('nav.institutions'), href: '#beneficiaries' },
    { name: t('nav.pricing'), href: '/pricing' },
    { name: t('nav.demo'), href: '/book-demo' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || mobileMenuOpen ? 'bg-[#0B0B15]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
           <div className="relative h-10 w-auto">
              <img src="/logo.png" alt="InfotechXpertVision Logo" className="h-full w-auto object-contain group-hover:brightness-110 transition-all" />
           </div>
           <div className="flex flex-col leading-none">
              <span className="font-bold text-base text-white tracking-wide group-hover:text-pink-500 transition-colors">Infotech</span>
              <span className="font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">XpertVision</span>
           </div>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
           {navigation.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:tracking-wide transition-all duration-300 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-pink-500 after:transition-all hover:after:w-full"
              >
                 {item.name}
              </Link>
           ))}
        </nav>
        
        {/* CTA & Language */}
        <div className="hidden lg:flex items-center gap-4">
           <LanguageToggle />
           <Button className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold rounded-full px-6 shadow-lg shadow-pink-500/20 transition-all hover:scale-105" asChild>
              <Link href="/book-demo">{t('nav.bookDemo')}</Link>
           </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
         <div className="lg:hidden absolute top-20 left-0 right-0 bg-[#0B0B15] border-b border-white/10 p-6 flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navigation.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  className="text-base font-medium text-slate-300 hover:text-pink-500 py-2 border-b border-white/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                   {item.name}
                </Link>
             ))}
             <div className="flex items-center justify-between pt-4">
               <LanguageToggle />
               <Button className="w-full ml-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold rounded-full" asChild>
                  <Link href="/book-demo">{t('nav.bookDemo')}</Link>
               </Button>
             </div>
         </div>
      )}
    </header>
  );
}
