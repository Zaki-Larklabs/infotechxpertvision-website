'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle } from 'lucide-react';

const demoSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  company: z.string().min(2, 'Company name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  role: z.string().optional(),
  product: z.string().optional(),
  requirements: z.string().min(10, 'Please describe your requirements'),
  preferredTime: z.string().optional(),
});

type DemoFormData = z.infer<typeof demoSchema>;

export default function BookDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <Card className="max-w-2xl mx-4">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-green-600" size={32} />
            </div>
            <CardTitle className="text-3xl">Thank You!</CardTitle>
            <CardDescription className="text-lg">
              Your demo request has been received. Our team will contact you within 24 hours.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              In the meantime, check your email for a confirmation and a link to schedule your demo.
            </p>
            {process.env.NEXT_PUBLIC_CALENDLY_URL && (
              <Button size="lg" variant="gradient" asChild>
                <a
                  href={process.env.NEXT_PUBLIC_CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2" size={20} />
                  Schedule Now
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Book a <span className="gradient-text">Demo</span>
            </h1>
            <p className="text-xl text-gray-600">
              See our solutions in action. Schedule a personalized demo with our team.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Request a Demo</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      {...register('name')}
                      placeholder="John Doe"
                      className="mt-1"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="john@company.com"
                      className="mt-1"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      {...register('company')}
                      placeholder="Company Name"
                      className="mt-1"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      {...register('phone')}
                      placeholder="+1 (555) 000-0000"
                      className="mt-1"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="role">Your Role</Label>
                    <Input
                      id="role"
                      {...register('role')}
                      placeholder="e.g., CEO, CTO, Manager"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="product">Product Interest</Label>
                    <Input
                      id="product"
                      {...register('product')}
                      placeholder="e.g., CRM Pro"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="requirements">Tell us about your requirements *</Label>
                  <Textarea
                    id="requirements"
                    {...register('requirements')}
                    placeholder="What challenges are you looking to solve?"
                    rows={4}
                    className="mt-1"
                  />
                  {errors.requirements && (
                    <p className="text-red-500 text-sm mt-1">{errors.requirements.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="preferredTime">Preferred Demo Time</Label>
                  <Input
                    id="preferredTime"
                    {...register('preferredTime')}
                    placeholder="e.g., Next week, Tuesday afternoon"
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  variant="gradient"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Request Demo'}
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
