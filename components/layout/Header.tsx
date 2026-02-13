'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Products', href: '/products' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8 max-w-7xl" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-slate-900 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">IX</span>
              </div>
              <span className="font-semibold text-lg text-slate-900 hidden sm:block">InfotechXpertVision</span>
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 transition-colors duration-300 font-medium text-[15px]"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button 
              variant="ghost" 
              className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-all duration-300"
              asChild
            >
              <Link href="/contact">Contact</Link>
            </Button>
            <Button 
              className="bg-slate-900 hover:bg-slate-800 text-white transition-all duration-300 hover:scale-[1.02]"
              asChild
            >
              <Link href="/book-demo">Book Demo</Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              className="text-slate-700 hover:text-slate-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200">
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-slate-900 transition-colors font-medium text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                <Button 
                  variant="ghost" 
                  className="justify-start text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  asChild
                >
                  <Link href="/contact">Contact</Link>
                </Button>
                <Button 
                  className="bg-slate-900 hover:bg-slate-800 text-white"
                  asChild
                >
                  <Link href="/book-demo">Book Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
