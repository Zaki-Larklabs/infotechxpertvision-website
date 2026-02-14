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
                    Institutional Digital Transformation
                  </span>
               </motion.div>
               
               <motion.h1 variants={fadeInUp} className="text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
                  Smart Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Attendance Management</span> <br/>
                  for Modern Colleges
               </motion.h1>
               
               <motion.p variants={fadeInUp} className="text-slate-400 text-lg leading-relaxed max-w-xl">
                  Automate attendance tracking, centralize student records, and gain real-time insights — all in one secure platform designed for educational efficiency.
               </motion.p>
               
               <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                  <Button size="xl" className="bg-neon-gradient text-white rounded-full px-8 shadow-neon hover:shadow-neon-blue transition-all duration-300" asChild>
                     <Link href="/book-demo">Request Live Demo</Link>
                  </Button>
                  <Button variant="outline" size="xl" className="rounded-full px-8 border-white/10 hover:bg-white/5 text-white" asChild>
                     <Link href="#features">Explore System Features</Link>
                  </Button>
               </motion.div>

               <div className="pt-8 flex items-center gap-8 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-2"><Check className="text-purple-500 w-4 h-4" /> 100% Paperless</div>
                  <div className="flex items-center gap-2"><Check className="text-pink-500 w-4 h-4" /> Real-time Sync</div>
                  <div className="flex items-center gap-2"><Check className="text-blue-500 w-4 h-4" /> Secure Data</div>
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

      {/* --- SECTION 2: PROBLEM STATEMENT (Old Industries) --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-16">
               <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">The Problem</span>
               <h2 className="text-3xl font-bold text-white mt-4">The Attendance Challenge in Modern Institutions</h2>
               <p className="text-slate-500 mt-4 max-w-2xl mx-auto">Traditional methods are slowing you down. Manual tracking is prone to errors and inefficiency.</p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
               {[
                  { icon: BookOpen, title: 'Manual Registers', desc: 'Time-consuming and prone to human errors.' },
                  { icon: Users, title: 'Proxy Attendance', desc: 'Students marking attendance for friends.' },
                  { icon: Database, title: 'Data Silos', desc: 'Records scattered across files and Excel sheets.' },
                  { icon: Activity, title: 'Delayed Reporting', desc: 'Parents informed too late about absence.' },
                  { icon: Layers, title: 'Inefficiency', desc: 'Faculty wasting valuable teaching time.' },
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

      {/* --- SECTION 3: OUR SOLUTION (Old Smart Campus) --- */}
      <section className="py-24 relative">
         <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B15] to-[#111122]" />
         <div className="container mx-auto max-w-screen-2xl relative z-10">
            <div className="bg-[#151525]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 lg:p-16 overflow-hidden">
               <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                     <span className="bg-pink-500/10 text-pink-500 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                        Flagship Product
                     </span>
                     <h2 className="text-3xl lg:text-4xl font-bold text-white">Introducing the InfotechXpertVision Attendance System</h2>
                     <p className="text-slate-400 text-lg leading-relaxed">
                        A unified platform to streamline institutional operations. Our Intelligent Attendance System replaces paper with precision, offering digital tracking, role-based logins, and automated reporting.
                     </p>
                     
                     <div className="grid sm:grid-cols-2 gap-6">
                        {[
                           { icon: Check, label: '100% Accuracy' },
                           { icon: Zap, label: 'Zero Paperwork' },
                           { icon: Lock, label: 'Secure Cloud Storage' },
                           { icon: Monitor, label: 'Admin Dashboard' },
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

      {/* --- SECTION 4: KEY FEATURES (Old Core Solutions) --- */}
      <section id="features" className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-16 space-y-4">
               <span className="text-purple-500 font-bold text-xs uppercase tracking-widest">System Capabilities</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">Key System Features</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
               {[
                  { 
                     title: 'Digital Recording', 
                     icon: Smartphone, 
                     desc: 'Mark attendance in clicks on mobile or web. Fast and intuitive.',
                     features: ['Mobile App', 'Web Portal', 'Instant Sync']
                  },
                  { 
                     title: 'Faculty Dashboard', 
                     icon: Monitor, 
                     desc: 'Real-time view of class performance and student regularity.',
                     features: ['Class Stats', 'History View', 'One-Click Reports']
                  },
                  { 
                     title: 'Student Management', 
                     icon: Users, 
                     desc: 'Complete digital profile for every student in your institution.',
                     features: ['Bio-data', 'Academic History', 'Parent Contact']
                  },
                  { 
                     title: 'Automated Reports', 
                     icon: Database, 
                     desc: 'One-click generation of daily, monthly, and yearly reports.',
                     features: ['PDF Export', 'Excel Download', 'Email Alerts']
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

      {/* --- SECTION 5: HOW IT WORKS (Old Process) --- */}
      <section className="py-24 bg-[#0B0B15]">
         <div className="container mx-auto max-w-screen-2xl">
            <div className="text-center mb-20 space-y-4">
               <span className="text-pink-500 font-bold text-xs uppercase tracking-widest">Workflow</span>
               <h2 className="text-3xl lg:text-4xl font-bold text-white">Simple. Secure. Structured.</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 relative">
               {/* Connector Line */}
               <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500/0 via-pink-500/50 to-purple-500/0 -z-10" />
               
               {[
                  { step: '01', title: 'System Setup', desc: 'We configure the platform for your institution.' },
                  { step: '02', title: 'Faculty Access', desc: 'Secure role assignment for teachers and staff.' },
                  { step: '03', title: 'Mark Attendance', desc: 'Real-time recording via mobile or web.' },
                  { step: '04', title: 'Automated Reports', desc: 'Instant monitoring, alerts, and analytics.' },
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

      {/* --- SECTION 6: BENEFITS (Old Why Infotech) --- */}
      <section id="beneficiaries" className="py-24 bg-[#151525] relative overflow-hidden">
         <div className="absolute -left-40 -top-40 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
         <div className="container mx-auto max-w-screen-2xl grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
               <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                  Designed Specifically for <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Educational Institutions</span>
               </h2>
               <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                  We understand the unique challenges of colleges and schools. Our system is built to reduce workload, improve accuracy, and ensure data integrity.
               </p>
               
               <div className="space-y-4">
                  {[
                     'Reduce Admin Workload', 'Eliminate Paper Registers', 'Prevent Proxy Attendance', 'Centralize Data Availability'
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
                   <Users className="text-purple-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">Students</h4>
                   <p className="text-slate-500 text-sm">Transparency</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 translate-y-8 hover:border-pink-500/30 transition-colors">
                   <Building2 className="text-pink-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">Admin</h4>
                   <p className="text-slate-500 text-sm">Control</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 hover:border-pink-500/30 transition-colors">
                   <GraduationCap className="text-yellow-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">Faculty</h4>
                   <p className="text-slate-500 text-sm">Efficiency</p>
                </Card>
                <Card className="bg-[#0B0B15] border-white/5 p-6 flex flex-col items-center justify-center text-center h-48 translate-y-8 hover:border-pink-500/30 transition-colors">
                   <BookOpen className="text-blue-500 mb-4 w-10 h-10" />
                   <h4 className="text-white font-bold mb-1">Parents</h4>
                   <p className="text-slate-500 text-sm">Updates</p>
                </Card>
             </div>
         </div>
      </section>

      {/* --- SECTION 7: TRUST & CREDIBILITY --- */}
      <section className="py-24 relative overflow-hidden">
         <div className="container mx-auto max-w-screen-2xl text-center">
             <h2 className="text-3xl font-bold text-white mb-12">Built With Secure Modern Tech</h2>
             <div className="flex flex-wrap justify-center gap-12 opacity-60 hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Shield className="text-purple-400"/> Encrypted</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Server className="text-green-400"/> Cloud Hosted</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Database className="text-yellow-400"/> Scalable DB</div>
                <div className="flex items-center gap-2 text-xl font-bold text-white"><Lock className="text-pink-400"/> Data Privacy</div>
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
                     Ready to Digitize Your Attendance System?
                  </h2>
                  <p className="text-pink-100 text-lg lg:text-xl">
                     Get started with the most advanced attendance management platform for institutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                     <Button size="xl" className="bg-white text-pink-600 hover:bg-slate-100 border-0 rounded-full px-12 shadow-2xl font-bold" asChild>
                        <Link href="/book-demo">Schedule Demo</Link>
                     </Button>
                     <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-full px-12" asChild>
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
