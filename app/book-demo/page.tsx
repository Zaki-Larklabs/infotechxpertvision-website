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
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function BookDemoPage() {
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
  } = useForm<DemoFormData>({
    resolver: zodResolver(demoSchema),
  });

  const onSubmit = async (data: DemoFormData) => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  // Prevent hydration mismatch
  if (!mounted || !ready) return <div className="min-h-screen bg-[#0B0B15]" />;

  if (submitted) {
    return (
      <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-[#0B0B15] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/20 rounded-full blur-[120px] -z-10" />
        
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Card className="max-w-xl mx-4 glass-card border-white/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500" />
            <CardHeader className="text-center pb-2">
                <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <CheckCircle className="text-green-500" size={40} />
                </div>
                <CardTitle className="text-3xl font-bold text-white">{t('book_demo.success.title')}</CardTitle>
                <CardDescription className="text-lg text-slate-400 mt-2">
                    {t('book_demo.success.desc')}
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center space-y-8 pt-6">
                <p className="text-slate-500">
                    {t('book_demo.success.info')}
                </p>
                <Button size="lg" className="h-14 px-8 text-lg bg-neon-gradient text-white rounded-full shadow-neon hover:shadow-neon-blue border-0" asChild>
                    <a href="/" >
                        {t('book_demo.success.back')}
                    </a>
                </Button>
            </CardContent>
            </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 lg:pt-40 bg-[#0B0B15] min-h-screen relative overflow-hidden">
      {/* Background Glows */}
      <div className="fixed top-20 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            
            {/* Left Column: Context */}
            <motion.div 
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="space-y-8 lg:sticky lg:top-40"
            >
                <div>
                   <span className="text-pink-500 font-bold tracking-widest text-sm uppercase mb-4 block">{t('book_demo.title_badge')}</span>
                   <h1 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight text-white leading-tight">
                     {t('book_demo.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{t('book_demo.title_highlight')}</span>
                   </h1>
                   <p className="text-xl text-slate-400 font-light max-w-lg leading-relaxed">
                     {t('book_demo.description')}
                   </p>
                </div>
                
                <div className="space-y-6">
                    {[
                        { title: t('book_demo.benefits.b1_title'), desc: t('book_demo.benefits.b1_desc') },
                        { title: t('book_demo.benefits.b2_title'), desc: t('book_demo.benefits.b2_desc') },
                        { title: t('book_demo.benefits.b3_title'), desc: t('book_demo.benefits.b3_desc') },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start group">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 group-hover:border-pink-500/50 transition-colors">
                                <ArrowRight className="text-pink-500 w-4 h-4" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold">{item.title}</h4>
                                <p className="text-slate-500 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="glass-card border-white/10 overflow-hidden relative">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                
                <CardHeader className="p-8 border-b border-white/5">
                  <CardTitle className="text-xl font-semibold text-white">{t('book_demo.form.title')}</CardTitle>
                  <CardDescription className="text-base mt-2 text-slate-400">
                    {t('book_demo.form.desc')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 lg:p-10">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-slate-300 font-medium">{t('book_demo.form.name_label')}</Label>
                        <Input
                          id="name"
                          {...register('name')}
                          placeholder={t('book_demo.form.name_placeholder')}
                          className="h-11 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                        {errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-300 font-medium">{t('book_demo.form.email_label')}</Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          placeholder={t('book_demo.form.email_placeholder')}
                          className="h-11 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                        {errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-slate-300 font-medium">{t('book_demo.form.company_label')}</Label>
                        <Input
                          id="company"
                          {...register('company')}
                          placeholder={t('book_demo.form.company_placeholder')}
                          className="h-11 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                        {errors.company && (
                          <p className="text-red-400 text-xs mt-1">{errors.company.message}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-slate-300 font-medium">{t('book_demo.form.phone_label')}</Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          placeholder={t('book_demo.form.phone_placeholder')}
                          className="h-11 bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-pink-500 focus:ring-pink-500/20"
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements" className="text-slate-300 font-medium">{t('book_demo.form.req_label')}</Label>
                      <Textarea
                        id="requirements"
                        {...register('requirements')}
                        placeholder={t('book_demo.form.req_placeholder')}
                        rows={3}
                        className="resize-none bg-black/20 border-white/10 text-white placeholder:text-slate-600 focus:border-pink-500 focus:ring-pink-500/20"
                      />
                      {errors.requirements && (
                        <p className="text-red-400 text-xs mt-1">{errors.requirements.message}</p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full h-12 text-base font-bold bg-neon-gradient text-white rounded-full shadow-neon hover:shadow-neon-blue transition-all duration-300 border-0"
                      disabled={loading}
                    >
                      {loading ? t('book_demo.form.submitting') : t('book_demo.form.submit')}
                    </Button>
                    
                    <p className="text-xs text-slate-600 text-center">
                       {t('book_demo.form.footer')}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
        </div>
      </div>
    </div>
  );
}
