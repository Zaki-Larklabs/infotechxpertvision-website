'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

// Data moved to component for translation

export default function PricingPage() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted || !ready) return <div className="min-h-screen bg-[#0B0B15]" />;

  const pricingPlans = [
    {
      name: t('pricing.starter.name'),
      price: t('pricing.starter.price'),
      description: t('pricing.starter.desc'),
      features: (t('pricing.starter.features', { returnObjects: true }) as string[]),
      cta: t('pricing.starter.cta'),
      popular: false,
      gradient: 'from-blue-500 to-cyan-400'
    },
    {
      name: t('pricing.growth.name'),
      price: t('pricing.growth.price'),
      description: t('pricing.growth.desc'),
      features: (t('pricing.growth.features', { returnObjects: true }) as string[]),
      cta: t('pricing.growth.cta'),
      popular: true,
      gradient: 'from-pink-500 to-purple-600'
    },
    {
      name: t('pricing.enterprise.name'),
      price: t('pricing.enterprise.price'),
      description: t('pricing.enterprise.desc'),
      features: (t('pricing.enterprise.features', { returnObjects: true }) as string[]),
      cta: t('pricing.enterprise.cta'),
      popular: false,
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  const faqs = [
    { question: t('pricing.faq.q1'), answer: t('pricing.faq.a1') },
    { question: t('pricing.faq.q2'), answer: t('pricing.faq.a2') },
    { question: t('pricing.faq.q3'), answer: t('pricing.faq.a3') }
  ];

  return (
    <div className="pt-32 pb-24 lg:pt-48 bg-[#0B0B15] min-h-screen relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-6">
           <motion.div 
             initial="initial" animate="animate" variants={fadeInUp}
           >
              <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">{t('pricing.badge')}</span>
              <h1 className="text-4xl lg:text-6xl font-bold mt-4 text-white leading-tight">
                 {t('pricing.title')}
              </h1>
              <p className="text-xl text-slate-400 mt-6 font-light">
                 {t('pricing.description')}
              </p>
           </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
          {pricingPlans.map((plan, i) => (
            <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
            >
               <Card className={`relative h-full flex flex-col glass-card border-white/10 hover:border-pink-500/30 transition-all duration-300 ${plan.popular ? 'scale-105 shadow-2xl shadow-purple-500/10 z-10' : ''}`}>
                  {plan.popular && (
                     <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500" />
                  )}
                  {plan.popular && (
                     <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                     </div>
                  )}
                  
                  <CardHeader className="text-center pb-2 pt-8">
                     <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                     <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                     <CardDescription className="text-slate-400 min-h-[50px]">{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                     <div className="w-full h-px bg-white/5 my-6" />
                     <ul className="space-y-4">
                        {plan.features.map((feature, f) => (
                           <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                              <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full bg-gradient-to-br ${plan.gradient} flex items-center justify-center`}>
                                 <Check size={10} className="text-white" />
                              </div>
                              {feature}
                           </li>
                        ))}
                     </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-8">
                     <Button className={`w-full h-12 rounded-full font-bold bg-gradient-to-r ${plan.gradient} hover:brightness-110 shadow-lg transition-all`} asChild>
                        <Link href="/contact">{plan.cta}</Link>
                     </Button>
                  </CardFooter>
               </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-24">
           <h2 className="text-3xl font-bold text-white text-center mb-12">{t('pricing.faq.title')}</h2>
           <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, i) => (
                 <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg px-4 bg-white/5 data-[state=open]:bg-white/10 transition-colors">
                    <AccordionTrigger className="text-white hover:text-pink-400 hover:no-underline text-left">
                       {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-400">
                       {faq.answer}
                    </AccordionContent>
                 </AccordionItem>
              ))}
           </Accordion>
        </div>

        {/* CTA Bottom */}
        <div className="text-center">
            <p className="text-slate-400 mb-6">{t('pricing.enterprise.desc')}</p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8" asChild>
               <Link href="/contact" className="flex items-center gap-2">{t('pricing.enterprise.cta')} <ArrowRight size={16}/></Link>
            </Button>
        </div>

      </div>
    </div>
  );
}
