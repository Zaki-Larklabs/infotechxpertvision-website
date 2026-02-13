import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSEO } from '@/lib/seo';
import { Target, Users, Zap, Award } from 'lucide-react';

export const metadata = generateSEO({
  title: 'About Us',
  description: 'Learn about InfotechXpertVision - our mission, vision, and the team building the future of enterprise software.',
  url: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">InfotechXpertVision</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to empower businesses with intelligent, scalable software solutions
            that drive growth and innovation.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        {/* Mission & Vision */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <Target className="text-blue-600 mb-4" size={40} />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To democratize enterprise-grade technology by making powerful, AI-driven solutions
                  accessible to businesses of all sizes. We believe every organization deserves tools
                  that help them compete and thrive in the digital age.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="text-purple-600 mb-4" size={40} />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To become the leading provider of intelligent business solutions that transform how
                  organizations operate, make decisions, and serve their customers. We envision a future
                  where technology seamlessly enhances human potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries with cutting-edge technology' },
              { title: 'Quality', desc: 'Delivering excellence in every product and service' },
              { title: 'Customer Success', desc: 'Your success is our success' },
              { title: 'Integrity', desc: 'Transparent, honest, and ethical in all we do' },
            ].map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{value.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Founder */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet Our Founder</h2>
          <Card className="max-w-3xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-32 h-32 gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-5xl font-bold">AZ</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Asjad Zaki</h3>
                  <p className="text-gray-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-700 leading-relaxed">
                    With over 15 years of experience in enterprise software and AI, Asjad founded
                    InfotechXpertVision to bridge the gap between complex technology and practical
                    business solutions. His vision is to make enterprise-grade tools accessible to
                    organizations of all sizes, empowering them to compete in the digital economy.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '15+', label: 'Countries' },
              { number: '99.9%', label: 'Uptime' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold gradient-text mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-blue-600 via-purple-600 to-teal-500 text-white">
            <CardHeader>
              <CardTitle className="text-3xl text-white">Join Our Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/90 mb-6">
                Be part of the future of enterprise software. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/book-demo">Book a Demo</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 border-white text-white hover:bg-white/20"
                  asChild
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
