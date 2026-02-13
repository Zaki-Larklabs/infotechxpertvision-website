'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 lg:pt-48">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            Contact Support
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight leading-[1.05]">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Have questions? We'd love to hear from you. Send us a message and we'll respond promptly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          <div className="lg:col-span-2">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-2xl p-12 border border-border text-center shadow-soft"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-white" size={32} />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Message Sent</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card rounded-2xl p-8 lg:p-12 border border-border shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="name" className="text-foreground font-medium mb-2 block">Name</Label>
                        <Input
                        id="name"
                        {...register('name')}
                        placeholder="Your name"
                        className="h-12"
                        />
                        {errors.name && (
                        <p className="text-destructive text-sm mt-2">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-foreground font-medium mb-2 block">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="your@email.com"
                        className="h-12"
                        />
                        {errors.email && (
                        <p className="text-destructive text-sm mt-2">{errors.email.message}</p>
                        )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder="How can we help?"
                      className="h-12"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-2">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder="Tell us more..."
                      rows={6}
                      className="resize-none"
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-2">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full h-14 text-lg font-medium shadow-premium transition-all duration-300 hover:scale-[1.01]"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </motion.div>
            )}
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card rounded-xl p-8 border border-border shadow-soft"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail size={20} className="text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-sm text-muted-foreground">Direct contact</p>
                </div>
              </div>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@infotechxpertvision.com'}`}
                className="text-foreground hover:text-primary transition-colors block font-medium"
              >
                {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'contact@infotechxpertvision.com'}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card rounded-xl p-8 border border-border shadow-soft"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-sm text-muted-foreground">Mon-Fri from 8am to 5pm</p>
                </div>
              </div>
              <a
                href={`tel:${process.env.NEXT_PUBLIC_COMPANY_PHONE || '+15550000000'}`}
                className="text-foreground hover:text-primary transition-colors block font-medium"
              >
                {process.env.NEXT_PUBLIC_COMPANY_PHONE || '+1 (555) 000-0000'}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-card rounded-xl p-8 border border-border shadow-soft"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-sm text-muted-foreground">Visit us</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                123 Business Street<br />
                Suite 100<br />
                City, State 12345
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
