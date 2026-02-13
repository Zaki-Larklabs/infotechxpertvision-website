'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
      <Button
        size="lg"
        variant="gradient"
        className="shadow-2xl hover:scale-105 transition-transform"
        asChild
      >
        <Link href="/book-demo">
          <Calendar className="mr-2" size={20} />
          Book Demo
        </Link>
      </Button>
    </div>
  );
}
