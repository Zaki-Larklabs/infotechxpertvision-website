'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Check, ArrowRight, Zap, Globe, Shield, Smartphone, 
  Monitor, Code, Star, MessageSquare, Layers, 
  School, Bot, Database, Server, Lock, Activity,
  Users, Building2, BookOpen, GraduationCap 
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0 overflow-hidden bg-[#0B0B15]">
      
      {/* --- SECTION 1: HERO (Strategic Version) --- */}
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
                    Strategic Structural Realignment
                  </span>
               </motion.div>
               
               <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                  Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Digital Systems</span> <br/>
                  for Modern Institutions
               </motion.h1>
               
               <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  Empowering colleges, schools, and enterprises with AI-powered Smart Campus Management 
                  and custom scalable architecture. Reduce workload, centralize data, and drive growth.
               </motion.p>
               
               <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <Button size="xl" className="bg-neon-gradient text-white rounded-full px-8 shadow-neon hover:shadow-neon-blue transition-all duration-300">
                     <Link href="/contact">Book Private Demo</Link>
                  </Button>
                  <Button variant="outline" size="xl" className="rounded-full px-8 border-white/10 hover:bg-white/5 text-white">
                     <Link href="/solutions">Explore Solutions</Link>
                  </Button>
               </motion.div>

               <div className="pt-8 flex items-center gap-8 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-2"><Check className="text-purple-500 w-4 h-4" /> AI-Powered</div>
                  <div className="flex items-center gap-2"><Check className="text-pink-500 w-4 h-4" /> Cloud-Based</div>
                  <div className="flex items-center gap-2"><Check className="text-blue-500 w-4 h-4" /> Secure</div>
               </div>
            </motion.div>
            
            {/* Dashboard Mockup (Product UI) */}
            <motion.div 
               initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="relative lg:h-[600px] flex items-center justify-center"
            >
               <div className="relative w-full max-w-xl group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative bg-[#151525] border border-white/10 rounded-2xl p-4 shadow-2xl">
                     {/* Mock Browser Header */}
                     <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                        <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500/50" />
                           <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                           <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="h-6 w-full max-w-sm bg-white/5 rounded mx-auto" />
                     </div>
                     {/* Mock Dashboard Grid */}
                     <div className="grid grid-cols-3 gap-4 h-[300px]">
                        <div className="col-span-1 bg-white/5 rounded-lg border border-white/5 animate-pulse" />
                        <div className="col-span-2 grid grid-rows-2 gap-4">
                           <div className="bg-white/5 rounded-lg border border-white/5" />
                           <div className="grid grid-cols-2 gap-4">
                              <div className="bg-white/5 rounded-lg border border-white/5" />
                              <div className="bg-pink-500/10 rounded-lg border border-pink-500/20" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
        </div>
      </section>

      {/* --- SECTION 2: CORE SOLUTIONS --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-16 space-y-4">
               <span className="text-purple-500 font-bold text-xs uppercase tracking-widest">Our Core Solutions</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">Comprehensive Digital Ecosystem</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { 
                     title: 'Smart Campus Suite', 
                     icon: School, 
                     desc: 'End-to-end management for educational institutions.',
                     features: ['Student Lifecycle', 'Fee Automation', 'Academic ERP']
                  },
                  { 
                     title: 'Custom Web Platforms', 
                     icon: Globe, 
                     desc: 'Scalable, high-performance web applications.',
                     features: ['React/Next.js', 'Cloud Native', 'Enterprise Scale']
                  },
                  { 
                     title: 'Mobile Applications', 
                     icon: Smartphone, 
                     desc: 'Native and cross-platform mobile experiences.',
                     features: ['iOS & Android', 'Real-time Sync', 'Offline Mode']
                  },
                  { 
                     title: 'AI Automation Systems', 
                     icon: Bot, 
                     desc: 'Intelligent workflows to reduce manual effort.',
                     features: ['Chatbots', 'Predictive Analytics', 'Process RPA']
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
                     <Link href="/solutions" className="text-sm font-bold text-pink-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More <ArrowRight size={14} />
                     </Link>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 3: SMART CAMPUS FOCUS BLOCK --- */}
      <section className="py-24 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B15] to-[#111122]" />
         <div className="container mx-auto max-w-screen-2xl relative z-10">
            <div className="bg-[#151525]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-16 overflow-hidden">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                     <span className="bg-pink-500/10 text-pink-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Flagship Product
                     </span>
                     <h2 className="text-3xl lg:text-4xl font-bold text-white">Smart Campus Management</h2>
                     <p className="text-slate-400 text-lg leading-relaxed">
                        A unified platform to streamline institutional operations. From admission to alumni management, 
                        our AI-driven system automates complex workflows, giving you total control and visibility.
                     </p>
                     
                     <div className="grid sm:grid-cols-2 gap-6">
                        {[
                           { icon: Users, label: 'Student Management' },
                           { icon: Activity, label: 'Attendance Tracking' },
                           { icon: Database, label: 'Fee Automation' },
                           { icon: Lock, label: 'Role-Based Access' },
                        ].map((feat, i) => (
                           <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-pink-500/30 transition-colors">
                              <feat.icon className="text-purple-400 w-6 h-6" />
                              <span className="text-white font-medium">{feat.label}</span>
                           </div>
                        ))}
                     </div>
                     
                     <Button className="mt-4 bg-white text-black hover:bg-slate-200 rounded-full px-8" asChild>
                        <Link href="/book-demo">Request System Demo</Link>
                     </Button>
                  </div>
                  
                  <div className="relative">
                     {/* Dashboard Preview */}
                     <div className="aspect-[4/3] bg-gradient-to-br from-[#1A1A2E] to-[#0B0B15] rounded-2xl border border-white/10 shadow-2xl p-4 flex flex-col gap-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]" />
                        
                        <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/5">
                           <div className="w-32 h-4 bg-white/10 rounded" />
                           <div className="w-8 h-8 rounded-full bg-pink-500/20" />
                        </div>
                        
                        <div className="flex gap-4 h-full">
                           <div className="w-16 h-full bg-white/5 rounded-lg border border-white/5 hidden sm:block" />
                           <div className="flex-1 space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                 <div className="h-24 bg-pink-500/10 rounded-lg border border-pink-500/20 flex flex-col justify-center items-center">
                                    <span className="text-3xl font-bold text-white">98%</span>
                                    <span className="text-xs text-pink-400 uppercase mt-1">Attendance</span>
                                 </div>
                                 <div className="h-24 bg-purple-500/10 rounded-lg border border-purple-500/20 flex flex-col justify-center items-center">
                                    <span className="text-3xl font-bold text-white">2.4k</span>
                                    <span className="text-xs text-purple-400 uppercase mt-1">Students</span>
                                 </div>
                              </div>
                              <div className="flex-1 bg-white/5 rounded-lg border border-white/5" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 4: PROCESS (Structured) --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-20 space-y-4">
               <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">Our Methodology</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">From Strategy to Scalable Execution</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-purple-500/0 -z-10" />
               
               {[
                  { step: '01', title: 'Discovery', desc: 'Requirement mapping & goal definition.' },
                  { step: '02', title: 'Architecture', desc: 'System design & tech selection.' },
                  { step: '03', title: 'Development', desc: 'Secure coding & integration.' },
                  { step: '04', title: 'Support', desc: 'Deployment & long-term maintenance.' },
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

      {/* --- SECTION 5: WHY INFOTECHXPERTVISION --- */}
      <section className="py-24 bg-[#151525] relative overflow-hidden">
         <div className="absolute -left-40 -top-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
         <div className="container mx-auto max-w-screen-2xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Built for Precision. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Designed for Scale.</span>
               </h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We don't just build websites; we engineer digital ecosystems. Our solutions are designed to handle high loads, secure sensitive data, and adapt to your institution's growth.
               </p>
               
               <div className="space-y-4">
                  {[
                     'AI-Ready Architecture', 'Cloud-Based Deployment', 'Enterprise-Grade Security', 'Modular & Customizable'
                  ].map((item, i) => (
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
                   <Server className="text-purple-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">99.9%</h4>
                   <p className="text-slate-500 text-sm">Uptime Guarantee</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 translate-y-8 hover:border-pink-500/30 transition-colors">
                   <Shield className="text-pink-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">ISO</h4>
                   <p className="text-slate-500 text-sm">Standard Security</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 hover:border-pink-500/30 transition-colors">
                   <Zap className="text-yellow-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">2x</h4>
                   <p className="text-slate-500 text-sm">Faster Deployment</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 translate-y-8 hover:border-pink-500/30 transition-colors">
                   <Users className="text-blue-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">24/7</h4>
                   <p className="text-slate-500 text-sm">Dedicated Support</p>
                </Card>
             </div>
         </div>
      </section>

      {/* --- SECTION 6: INDUSTRIES --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-white">Industries We Serve</h2>
               <p className="text-slate-500 mt-4">Tailored digital solutions for every educational and business sector.</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
               {[
                  { icon: GraduationCap, title: 'Colleges', desc: 'Complex role management & ERP.' },
                  { icon: BookOpen, title: 'Schools', desc: 'Parent-teacher communication.' },
                  { icon: Users, title: 'Coaching', desc: 'Fees & attendance tracking.' },
                  { icon: Building2, title: 'SMEs', desc: 'Digital presence & automation.' },
                  { icon: Globe, title: 'Enterprises', desc: 'Scalable custom architecture.' },
               ].map((ind, i) => (
                  <Card key={i} className="bg-[#151525] border-white/5 p-6 hover:bg-white/5 transition-colors group cursor-pointer text-center">
                     <ind.icon className="w-10 h-10 mx-auto text-slate-400 group-hover:text-pink-500 mb-4 transition-colors" />
                     <h3 className="text-white font-bold mb-2">{ind.title}</h3>
                     <p className="text-slate-500 text-xs leading-relaxed">{ind.desc}</p>
                  </Card>
               ))}
            </div>
         </div>
      </section>

      {/* --- SECTION 7: TRUST & CREDIBILITY --- */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto max-w-screen-2xl text-center">
             <h2 className="text-3xl font-bold text-white mb-12">Trusted Technology Partners</h2>
             <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholders for Tech Logos using Text/Icons for now */}
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Code className="text-blue-400"/> React</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Server className="text-green-400"/> Node.js</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Database className="text-yellow-400"/> AWS</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Shield className="text-purple-400"/> Python</div>
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
                     Ready to Digitize Your Institution?
                  </h2>
                  <p className="text-pink-100 text-lg lg:text-xl">
                     Join the future of education management. Secure, scalable, and simple.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                     <Button size="xl" className="bg-white text-pink-600 hover:bg-slate-100 border-0 rounded-full px-12 shadow-2xl font-bold">
                        <Link href="/contact">Schedule Demo</Link>
                     </Button>
                     <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-12">
                        <Link href="/contact">Contact Sales</Link>
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
