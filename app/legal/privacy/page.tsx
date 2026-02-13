import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Privacy Policy',
  description: 'InfotechXpertVision Privacy Policy - How we collect, use, and protect your data.',
  url: '/legal/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We collect information you provide directly to us, including:</p>
              <ul>
                <li>Name, email address, and contact information</li>
                <li>Company name and role</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communications with us</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                data against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments</li>
                <li>Access controls and authentication</li>
                <li>Employee training on data protection</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We do not sell your personal information. We may share your information with:</p>
              <ul>
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors</li>
                <li>Law enforcement when required by law</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                We use cookies and similar tracking technologies to track activity on our service and
                hold certain information. You can instruct your browser to refuse all cookies or to
                indicate when a cookie is being sent.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                If you have questions about this Privacy Policy, please contact us at:
                <br />
                Email: {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'privacy@infotechxpertvision.com'}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
