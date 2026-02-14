'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Product', href: '/' },
  { name: 'Features', href: '#features' },
  { name: 'Institutions', href: '#beneficiaries' },
  { name: 'Demo', href: '/book-demo' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0B0B15]/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6 max-w-7xl flex items-center justify-between" aria-label="Main navigation">
        
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
             <div className="relative h-14 w-auto">
                <img src="/logo.png" alt="InfotechXpertVision Logo" className="h-full w-auto object-contain" />
             </div>
             {/* Text removed if logo contains text, or keep if it's just an icon. 
                 Assuming logo might be icon-only based on previous icon usage. 
                 If user says 'cant see properly', maybe it was squished. 
                 Let's keep text but ensure logo isn't squashed. */}
             <div className="flex flex-col leading-none">
                <span className="font-bold text-lg text-white tracking-wide">Infotech</span>
                <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">XpertVision</span>
             </div>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="bg-neon-gradient text-white hover:opacity-90 rounded-full px-6 text-xs font-bold tracking-widest uppercase"
            asChild
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#0B0B15] border-b border-white/10 shadow-xl animate-fade-in-up p-4">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-slate-300 hover:text-pink-500 px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-neon-gradient" asChild>
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
