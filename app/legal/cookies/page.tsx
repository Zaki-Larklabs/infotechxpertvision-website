import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Cookie Policy',
  description: 'InfotechXpertVision Cookie Policy - How we use cookies and tracking technologies.',
  url: '/legal/cookies',
});

export default function CookiesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                Cookies are small text files that are placed on your device when you visit our website.
                They help us provide you with a better experience by remembering your preferences and
                understanding how you use our site.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <h3 className="font-semibold mt-4">Essential Cookies</h3>
              <p>Required for the website to function properly. These cannot be disabled.</p>

              <h3 className="font-semibold mt-4">Analytics Cookies</h3>
              <p>Help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>

              <h3 className="font-semibold mt-4">Marketing Cookies</h3>
              <p>Used to track visitors across websites to display relevant advertisements.</p>

              <h3 className="font-semibold mt-4">Preference Cookies</h3>
              <p>Enable the website to remember information that changes the way it behaves or looks.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>We use the following third-party services that may set cookies:</p>
              <ul>
                <li>Google Analytics - for website analytics</li>
                <li>Google Tag Manager - for managing marketing tags</li>
                <li>Facebook Pixel - for advertising and analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                You can control and/or delete cookies as you wish. You can delete all cookies that are
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
              <p>
                However, if you do this, you may have to manually adjust some preferences every time you
                visit our site and some services and functionalities may not work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="prose max-w-none">
              <p>
                If you have questions about our use of cookies, please contact us at:
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
