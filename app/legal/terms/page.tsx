import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Terms of Service',
  description: 'InfotechXpertVision Terms of Service - Terms and conditions for using our services.',
  url: '/legal/terms',
});

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                By accessing and using InfotechXpertVision services, you accept and agree to be bound
                by the terms and provision of this agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Use License</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Permission is granted to temporarily access and use our services for personal or
                commercial purposes. This is the grant of a license, not a transfer of title.
              </p>
              <p>Under this license you may not:</p>
              <ul>
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose without authorization</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>When you create an account with us, you must provide accurate and complete information. You are responsible for:</p>
              <ul>
                <li>Maintaining the security of your account</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Subscription fees are billed in advance on a monthly or annual basis. All fees are
                non-refundable except as required by law. We reserve the right to change our pricing
                with 30 days notice.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Termination</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We may terminate or suspend your account immediately, without prior notice, for any
                breach of these Terms. Upon termination, your right to use the service will immediately
                cease.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                In no event shall InfotechXpertVision be liable for any indirect, incidental, special,
                consequential or punitive damages resulting from your use of or inability to use the
                service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Questions about the Terms of Service should be sent to:
                <br />
                Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'legal@infotechxpertvision.com'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
