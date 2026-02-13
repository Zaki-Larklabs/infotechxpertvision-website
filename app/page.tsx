'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
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
    <>
      {/* Hero Section - Emotional Precision */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-white -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)] -z-10" />
        
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Clear Statement */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="space-y-8"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
              >
                Digital Systems Built for{' '}
                <span className="text-slate-600">Modern Institutions</span>
              </motion.h1>
              
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 leading-relaxed max-w-xl"
              >
                Precision-engineered platforms that transform how educational institutions 
                and enterprises manage operations, data, and growth.
              </motion.p>
              
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-slate-900 hover:bg-slate-800 text-white px-8 h-14 text-base font-medium transition-all duration-300 hover:scale-[1.02]"
                  asChild
                >
                  <Link href="/book-demo">
                    Request Private Demo
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 h-14 text-base font-medium transition-all duration-300"
                  asChild
                >
                  <Link href="/products">View Solutions</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right: Subtle Dashboard Mockup */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 backdrop-blur">
                  <div className="space-y-4">
                    <div className="h-3 bg-slate-200 rounded w-1/3" />
                    <div className="h-32 bg-gradient-to-br from-slate-100 to-slate-50 rounded-lg" />
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-slate-100 rounded-lg" />
                      <div className="h-20 bg-slate-100 rounded-lg" />
                      <div className="h-20 bg-slate-100 rounded-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credibility Layer - Core Pillars */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
              We build systems that institutions depend on. Every line of code, 
              every interface decision, every security measure — engineered for reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                icon: Zap,
                title: 'Precision',
                description: 'Architectured for accuracy. Built to handle complexity without compromise.'
              },
              {
                icon: Shield,
                title: 'Scalability',
                description: 'Designed to grow with you. From hundreds to hundreds of thousands.'
              },
              {
                icon: Lock,
                title: 'Security',
                description: 'Enterprise-grade protection. Your data, your control, always.'
              }
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-slate-100 text-slate-700">
                  <pillar.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{pillar.title}</h3>
                <p className="text-slate-600 leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase - Alternating Layout */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          {products.slice(0, 3).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Screenshot */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl" />
                  <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 p-8 aspect-[4/3]">
                    <div className="h-full bg-gradient-to-br from-slate-50 to-white rounded-lg flex items-center justify-center">
                      <span className="text-6xl font-bold text-slate-200">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                  {product.name}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-slate-900 font-medium hover:gap-3 gap-2 transition-all duration-300"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
              Why It Feels Different
            </h2>
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                We don't build software for the sake of features. We build systems that last, 
                interfaces that feel natural, and experiences that respect your time.
              </p>
              <p>
                Every decision — from architecture to animation — is made with intention. 
                Built for clarity. Designed for longevity. Engineered for scale.
              </p>
              <p className="text-slate-900 font-medium">
                This is software you can depend on.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Founded on Expertise</h3>
              <p className="text-slate-600 leading-relaxed">
                Led by Asjad Zaki, with over 15 years of experience building enterprise systems. 
                We understand the complexity of institutional operations because we've lived it.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900">Built to Last</h3>
              <p className="text-slate-600 leading-relaxed">
                Our commitment isn't just to deliver software — it's to be your long-term partner. 
                Security audited. Compliance ready. Support that actually helps.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Elegant CTA */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Let's build your digital foundation.
            </h2>
            <Button 
              size="lg" 
              className="bg-slate-900 hover:bg-slate-800 text-white px-12 h-16 text-lg font-medium transition-all duration-300 hover:scale-[1.02]"
              asChild
            >
              <Link href="/book-demo">
                Request Private Demo
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
