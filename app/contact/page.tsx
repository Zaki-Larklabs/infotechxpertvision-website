'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
  const { t, ready } = useTranslation('common');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      alert(t('contact.form.error'));
    } finally {
      setLoading(false);
    }
  };

  // Prevent hydration mismatch
  if (!mounted || !ready) return <div className="min-h-screen bg-[#0B0B15]" />;

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-[#0B0B15]">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            {t('contact.badge')}
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight leading-[1.05]">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {t('contact.description')}
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
                <h2 className="text-2xl font-bold text-foreground mb-4">{t('contact.form.success_title')}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.form.success_desc')}
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
                        <Label htmlFor="name" className="text-foreground font-medium mb-2 block">{t('contact.form.name')}</Label>
                        <Input
                        id="name"
                        {...register('name')}
                        placeholder={t('contact.form.name_ph')}
                        className="h-12"
                        />
                        {errors.name && (
                        <p className="text-destructive text-sm mt-2">{errors.name.message}</p>
                        )}
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-foreground font-medium mb-2 block">{t('contact.form.email')}</Label>
                        <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder={t('contact.form.email_ph')}
                        className="h-12"
                        />
                        {errors.email && (
                        <p className="text-destructive text-sm mt-2">{errors.email.message}</p>
                        )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground font-medium mb-2 block">{t('contact.form.subject')}</Label>
                    <Input
                      id="subject"
                      {...register('subject')}
                      placeholder={t('contact.form.subject_ph')}
                      className="h-12"
                    />
                    {errors.subject && (
                      <p className="text-destructive text-sm mt-2">{errors.subject.message}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground font-medium mb-2 block">{t('contact.form.message')}</Label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      placeholder={t('contact.form.message_ph')}
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
                    {loading ? t('contact.form.submitting') : t('contact.form.submit')}
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
                    <h3 className="font-semibold text-foreground">{t('contact.info.email')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.info.email_desc')}</p>
                </div>
              </div>
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'infotechxpertvision@gmail.com'}`}
                className="text-foreground hover:text-primary transition-colors block font-medium"
              >
                {process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'infotechxpertvision@gmail.com'}
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
                    <h3 className="font-semibold text-foreground">{t('contact.info.phone')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.info.phone_desc')}</p>
                </div>
              </div>
              <div className="space-y-2">
                {(process.env.NEXT_PUBLIC_COMPANY_PHONE || '+91 6380011880, +91 9342849952').split(',').map((phone) => (
                    <a
                        key={phone}
                        href={`tel:${phone.trim()}`}
                        className="text-foreground hover:text-primary transition-colors block font-medium"
                    >
                        {phone.trim()}
                    </a>
                ))}
              </div>
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
                    <h3 className="font-semibold text-foreground">{t('contact.info.office')}</h3>
                    <p className="text-sm text-muted-foreground">{t('contact.info.office_desc')}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {(t('contact.info.address', { returnObjects: true }) as string[]).map((line, i) => (
                   <span key={i}>{line}<br/></span>
                ))}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
