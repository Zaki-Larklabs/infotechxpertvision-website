'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // Assuming you have this or use custom
import {
  Check, ArrowRight, Zap, Globe, Shield, Smartphone,
  Monitor, Code, Star, MessageSquare, Layers,
  School, Bot, Database, Server, Lock, Activity,
  Users, Building2, BookOpen, GraduationCap
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  const { t, ready } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !ready) return <div className="min-h-screen bg-[#0B0B15]" />; // Avoids flash of keys

  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-[#0B0B15]">
      
      {/* --- SECTION 1: HERO (Product Focus) --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6 lg:px-12">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto max-w-screen-2xl grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div 
               initial="initial" animate="animate" variants={staggerContainer}
               className="space-y-8"
            >
               <motion.div variants={fadeInUp}>
                  <span className="text-pink-500 font-bold tracking-widest text-sm uppercase">
                    {t('hero.badge')}
                  </span>
               </motion.div>
               
               <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                  {t('hero.title_prefix')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{t('hero.title_highlight')}</span> <br/>
                  {t('hero.title_suffix')}
               </motion.h1>
               
               <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  {t('hero.description')}
               </motion.p>
               
               <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <Button size="xl" className="bg-neon-gradient text-white rounded-full px-8 shadow-neon hover:shadow-neon-blue transition-all duration-300" asChild>
                     <Link href="/book-demo">{t('hero.cta_primary')}</Link>
                  </Button>
                  <Button variant="outline" size="xl" className="rounded-full px-8 border-white/10 hover:bg-white/5 text-white" asChild>
                     <Link href="#features">{t('hero.cta_secondary')}</Link>
                  </Button>
               </motion.div>

               <div className="pt-8 flex items-center gap-8 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-2"><Check className="text-purple-500 w-4 h-4" /> {t('hero.feature_paperless')}</div>
                  <div className="flex items-center gap-2"><Check className="text-pink-500 w-4 h-4" /> {t('hero.feature_sync')}</div>
                  <div className="flex items-center gap-2"><Check className="text-blue-500 w-4 h-4" /> {t('hero.feature_secure')}</div>
               </div>
            </motion.div>
            
            {/* Dashboard Mockup */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="relative lg:h-[600px] flex items-center justify-center"
            >
               <div className="relative w-full max-w-xl group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-[#151525] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                     <img 
                        src="/hero-dashboard.png" 
                        alt="Attendance Management Dashboard" 
                        className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                     />
                  </div>
               </div>
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: PROBLEM STATEMENT --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-16">
               <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">{t('problem.badge')}</span>
               <h2 className="text-3xl font-bold text-white mt-4">{t('problem.title')}</h2>
               <p className="text-slate-500 mt-4 max-w-2xl mx-auto">{t('problem.description')}</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
               {[
                  { icon: BookOpen, title: t('problem.card_manual.title'), desc: t('problem.card_manual.desc') },
                  { icon: Users, title: t('problem.card_proxy.title'), desc: t('problem.card_proxy.desc') },
                  { icon: Database, title: t('problem.card_silos.title'), desc: t('problem.card_silos.desc') },
                  { icon: Activity, title: t('problem.card_delayed.title'), desc: t('problem.card_delayed.desc') },
                  { icon: Layers, title: t('problem.card_inefficiency.title'), desc: t('problem.card_inefficiency.desc') },
               ].map((item, i) => (
                  <Card key={i} className="bg-[#151525] border-white/5 p-6 hover:bg-white/5 transition-colors group cursor-pointer text-center">
                     <item.icon className="w-10 h-10 mx-auto text-slate-400 group-hover:text-pink-500 mb-4 transition-colors" />
                     <h3 className="text-white font-bold mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 3: OUR SOLUTION --- */}
      <section className="py-24 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B15] to-[#111122]" />
         <div className="container mx-auto max-w-screen-2xl relative z-10">
            <div className="bg-[#151525]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-16 overflow-hidden">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                     <span className="bg-pink-500/10 text-pink-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        {t('solution.badge')}
                     </span>
                     <h2 className="text-3xl lg:text-4xl font-bold text-white">{t('solution.title')}</h2>
                     <p className="text-slate-400 text-lg leading-relaxed">
                        {t('solution.description')}
                     </p>
                     
                     <div className="grid sm:grid-cols-2 gap-6">
                        {[
                           { icon: Check, label: t('solution.feat_accuracy') },
                           { icon: Zap, label: t('solution.feat_paperwork') },
                           { icon: Lock, label: t('solution.feat_secure') },
                           { icon: Monitor, label: t('solution.feat_admin') },
                        ].map((feat, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors">
                              <feat.icon className="text-purple-400 w-6 h-6" />
                              <span className="text-white font-medium">{feat.label}</span>
                           </div>
                        ))}
                     </div>
                     
                     <Button className="mt-4 bg-white text-black hover:bg-slate-200 rounded-full px-8" asChild>
                        <Link href="/book-demo">{t('solution.cta')}</Link>
                     </Button>
                  </div>
                  
                     {/* Feature Preview */}
                     <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative h-full w-full bg-[#151525] border border-white/10 rounded-2xl overflow-hidden">
                           <img 
                              src="/attendance-dashboard.png" 
                              alt="Attendance Management Interface" 
                              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                           />
                        </div>
                     </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 4: KEY FEATURES --- */}
      <section id="features" className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-16 space-y-4">
               <span className="text-purple-500 font-bold text-xs uppercase tracking-widest">{t('features.badge')}</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">{t('features.title')}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { 
                     title: t('features.feat_recording.title'), 
                     icon: Smartphone, 
                     desc: t('features.feat_recording.desc'),
                     features: [t('features.feat_recording.sub_mobile'), t('features.feat_recording.sub_web'), t('features.feat_recording.sub_sync')]
                  },
                  { 
                     title: t('features.feat_dashboard.title'), 
                     icon: Monitor, 
                     desc: t('features.feat_dashboard.desc'),
                     features: [t('features.feat_dashboard.sub_class'), t('features.feat_dashboard.sub_history'), t('features.feat_dashboard.sub_reports')]
                  },
                  { 
                     title: t('features.feat_student.title'), 
                     icon: Users, 
                     desc: t('features.feat_student.desc'),
                     features: [t('features.feat_student.sub_bio'), t('features.feat_student.sub_academic'), t('features.feat_student.sub_parent')]
                  },
                  { 
                     title: t('features.feat_reports.title'), 
                     icon: Database, 
                     desc: t('features.feat_reports.desc'),
                     features: [t('features.feat_reports.sub_pdf'), t('features.feat_reports.sub_excel'), t('features.feat_reports.sub_email')]
                  },
               ].map((item, i) => (
                  <Card key={i} className="bg-[#151525]/50 backdrop-blur-sm border-white/5 p-8 hover:border-pink-500/30 transition-all duration-300 group hover:-translate-y-2">
                     <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 group-hover:text-pink-500 text-slate-300 transition-colors">
                        <item.icon size={28} />
                     </div>
                     <h3 className="font-bold text-xl text-white mb-3">{item.title}</h3>
                     <p className="text-slate-400 text-sm leading-relaxed mb-6 min-h-[60px]">
                        {item.desc}
                     </p>
                     <ul className="space-y-2 mb-6">
                        {item.features.map(f => (
                           <li key={f} className="flex items-center gap-2 text-xs text-slate-500">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> {f}
                           </li>
                        ))}
                     </ul>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 5: HOW IT WORKS --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-20 space-y-4">
               <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">{t('workflow.badge')}</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">{t('workflow.title')}</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-purple-500/0 -z-10" />
               
               {[
                  { step: '01', title: t('workflow.step_01.title'), desc: t('workflow.step_01.desc') },
                  { step: '02', title: t('workflow.step_02.title'), desc: t('workflow.step_02.desc') },
                  { step: '03', title: t('workflow.step_03.title'), desc: t('workflow.step_03.desc') },
                  { step: '04', title: t('workflow.step_04.title'), desc: t('workflow.step_04.desc') },
               ].map((item, i) => (
                  <div key={i} className="text-center group bg-[#0B0B15] p-4">
                     <div className="w-24 h-24 mx-auto bg-[#151525] rounded-full flex items-center justify-center mb-6 border-4 border-[#0B0B15] shadow-lg group-hover:border-pink-500 transition-colors relative z-10">
                        <span className="text-2xl font-bold text-white">{item.step}</span>
                     </div>
                     <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                     <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 6: BENEFITS --- */}
      <section id="beneficiaries" className="py-24 bg-[#151525] relative overflow-hidden">
         <div className="absolute -left-40 -top-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
         <div className="container mx-auto max-w-screen-2xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  {t('benefits.title_prefix')} <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">{t('benefits.title_highlight')}</span>
               </h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  {t('benefits.description')}
               </p>
               
               <div className="space-y-4">
                  {(t('benefits.list', { returnObjects: true }) as string[]).map((item: string, i: number) => (
                     <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
                           <Check className="text-green-500 w-4 h-4" />
                        </div>
                        <span className="text-white font-medium">{item}</span>
                     </div>
                  ))}
               </div>
            </div>
            
             <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 hover:border-pink-500/30 transition-colors">
                   <Users className="text-purple-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">{t('benefits.cards.students')}</h4>
                   <p className="text-slate-500 text-sm">{t('benefits.cards.transparency')}</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 translate-y-8 hover:border-pink-500/30 transition-colors">
                   <Building2 className="text-pink-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">{t('benefits.cards.admin')}</h4>
                   <p className="text-slate-500 text-sm">{t('benefits.cards.control')}</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 hover:border-pink-500/30 transition-colors">
                   <GraduationCap className="text-yellow-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">{t('benefits.cards.faculty')}</h4>
                   <p className="text-slate-500 text-sm">{t('benefits.cards.efficiency')}</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 translate-y-8 hover:border-pink-500/30 transition-colors">
                   <BookOpen className="text-blue-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">{t('benefits.cards.parents')}</h4>
                   <p className="text-slate-500 text-sm">{t('benefits.cards.updates')}</p>
                </Card>
             </div>
         </div>
      </section>

      {/* --- SECTION 7: TRUST & CREDIBILITY --- */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto max-w-screen-2xl text-center">
             <h2 className="text-3xl font-bold text-white mb-12">{t('trust.title')}</h2>
             <div className="flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Shield className="text-purple-400"/> {t('trust.encrypted')}</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Server className="text-green-400"/> {t('trust.cloud')}</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Database className="text-yellow-400"/> {t('trust.scalable')}</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Lock className="text-pink-400"/> {t('trust.privacy')}</div>
             </div>
         </div>
      </section>

      {/* --- SECTION 8: CONVERSION CTA --- */}
      <section className="py-20 px-6">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-pink-600 to-purple-800 p-12 lg:p-24 text-center">
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay" />
               <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl" />
               <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-900/40 rounded-full blur-3xl" />
               
               <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                  <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                     {t('cta_section.title')}
                  </h2>
                  <p className="text-pink-100 text-lg lg:text-xl">
                     {t('cta_section.description')}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                     <Button size="xl" className="bg-white text-pink-600 hover:bg-slate-100 border-0 rounded-full px-12 shadow-2xl font-bold" asChild>
                        <Link href="/book-demo">{t('cta_section.schedule')}</Link>
                     </Button>
                     <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-12" asChild>
                        <Link href="/contact">{t('cta_section.contact')}</Link>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
