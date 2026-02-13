import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'About Us',
  description: 'Learn about InfotechXpertVision - building reliable digital systems for modern institutions.',
  url: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24">
      <section className="mb-32">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            Our Mission
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 text-foreground tracking-tight leading-[1.1]">
            About Us
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed font-light">
            We build digital systems that institutions depend on.
            <br/>Connecting vision with precision engineering.
          </p>
        </div>
      </section>
    </div>
  );
}
