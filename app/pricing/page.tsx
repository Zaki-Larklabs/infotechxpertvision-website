import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { pricingTiers, pricingComparison } from '@/data/pricing';
import { generateSEO } from '@/lib/seo';
import { Check, X } from 'lucide-react';

export const metadata = generateSEO({
  title: 'Pricing',
  description: 'Transparent pricing for businesses of all sizes. Start with a free trial, no credit card required.',
  url: '/pricing',
  keywords: ['pricing', 'plans', 'subscription', 'enterprise pricing']
});

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative ${
                tier.popular ? 'border-2 border-blue-500 shadow-xl scale-105' : ''
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <CardDescription className="text-base">{tier.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {typeof tier.price === 'number' ? `$${tier.price}` : tier.price}
                  </span>
                  {typeof tier.price === 'number' && (
                    <span className="text-gray-600">/{tier.billingPeriod}</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <Button
                  className="w-full mb-6"
                  variant={tier.popular ? 'gradient' : 'outline'}
                  asChild
                >
                  <Link href={tier.ctaLink}>{tier.cta}</Link>
                </Button>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-center p-4 font-semibold">Starter</th>
                  <th className="text-center p-4 font-semibold">Professional</th>
                  <th className="text-center p-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {pricingComparison.map((row, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="p-4 text-center">
                      {typeof row.starter === 'boolean' ? (
                        row.starter ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-gray-300 mx-auto" size={20} />
                        )
                      ) : (
                        row.starter
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.professional === 'boolean' ? (
                        row.professional ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-gray-300 mx-auto" size={20} />
                        )
                      ) : (
                        row.professional
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.enterprise === 'boolean' ? (
                        row.enterprise ? (
                          <Check className="text-green-500 mx-auto" size={20} />
                        ) : (
                          <X className="text-gray-300 mx-auto" size={20} />
                        )
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I switch plans later?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a setup fee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  No setup fees for Starter and Professional plans. Enterprise plans may include onboarding services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What happens after the trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Your trial automatically converts to a paid plan. You can cancel anytime during the trial with no charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Still Have Questions?</CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Our team is here to help you choose the right plan.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
