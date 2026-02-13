import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { products } from '@/data/products';
import { generateSEO } from '@/lib/seo';
import { ArrowRight } from 'lucide-react';

export const metadata = generateSEO({
  title: 'Products',
  description: 'Explore our suite of AI-powered SaaS solutions for education, healthcare, enterprise, and SMEs.',
  url: '/products',
  keywords: ['SaaS products', 'AI solutions', 'business software', 'enterprise platforms']
});

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to solve real business challenges across industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-xl transition-all hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-3xl font-bold">
                    {product.name.charAt(0)}
                  </span>
                </div>
                <CardTitle className="text-2xl">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.tagline}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Features:</p>
                  <ul className="space-y-1">
                    {product.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Industries:</p>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.slice(0, 3).map((industry) => (
                      <span
                        key={industry}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="gradient" className="flex-1" asChild>
                    <Link href={`/products/${product.id}`}>
                      View Details
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                  {product.demoUrl && (
                    <Button variant="outline" asChild>
                      <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl">Need a Custom Solution?</CardTitle>
              <CardDescription className="text-base">
                We can build tailored solutions for your specific business needs.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="gradient" asChild>
                <Link href="/contact?inquiry=custom">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
