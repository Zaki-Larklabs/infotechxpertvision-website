import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { products, getProductById } from '@/data/products';
import { generateSEO, generateProductSchema } from '@/lib/seo';
import { ArrowRight, CheckCircle, Download, ExternalLink } from 'lucide-react';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  
  if (!product) {
    return {};
  }

  return generateSEO({
    title: product.name,
    description: product.description,
    url: `/products/${product.id}`,
    type: 'product',
    keywords: [product.name, ...product.industries, ...product.useCases]
  });
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    image: product.screenshots[0] || '/images/og-default.png',
    price: typeof product.pricing.starter === 'number' ? product.pricing.starter : undefined,
    currency: 'USD'
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      
      <div className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-4xl font-bold">
                  {product.name.charAt(0)}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-8">{product.tagline}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="gradient" asChild>
                  <Link href={`/book-demo?product=${product.id}`}>
                    Book a Demo
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                {product.demoUrl && (
                  <Button size="lg" variant="outline" asChild>
                    <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                      Try Live Demo
                      <ExternalLink className="ml-2" size={20} />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          {/* Description */}
          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Key Benefits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.benefits.map((benefit, idx) => (
                <Card key={idx}>
                  <CardContent className="pt-6">
                    <CheckCircle className="text-green-500 mb-3" size={32} />
                    <p className="font-semibold">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {product.useCases.map((useCase, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle className="text-lg">{useCase}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          {/* Industries */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {product.industries.map((industry) => (
                <span
                  key={industry}
                  className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full font-semibold"
                >
                  {industry}
                </span>
              ))}
            </div>
          </section>

          {/* Pricing */}
          {product.pricing && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Pricing</h2>
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {product.pricing.starter && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Starter</CardTitle>
                      <CardDescription>
                        <span className="text-3xl font-bold text-gray-900">
                          ${product.pricing.starter}
                        </span>
                        /month
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/book-demo">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
                {product.pricing.professional && (
                  <Card className="border-2 border-blue-500">
                    <CardHeader>
                      <CardTitle>Professional</CardTitle>
                      <CardDescription>
                        <span className="text-3xl font-bold text-gray-900">
                          ${product.pricing.professional}
                        </span>
                        /month
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="gradient" asChild>
                        <Link href="/book-demo">Get Started</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
                {product.pricing.enterprise && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>
                        <span className="text-3xl font-bold text-gray-900">
                          {product.pricing.enterprise}
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/contact">Contact Sales</Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>

          {/* CTA */}
          <section className="text-center">
            <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Ready to Get Started?</CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Book a personalized demo and see how {product.name} can transform your business.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href={`/book-demo?product=${product.id}`}>Book Demo</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20" asChild>
                  <Link href="/pricing">View Pricing</Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
}
