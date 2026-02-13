'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { products } from '@/data/products';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

export default function ProductsPage() {
  return (
    <div className="pt-32 pb-24 lg:pt-48">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="text-center mb-20"
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary mb-6">
            Our Suite
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight leading-[1.05]">
            Our Solutions
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Precision-engineered platforms designed to solve real challenges across industries.
          </p>
        </motion.div>

        <div className="space-y-32">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Screenshot */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-slate-200 to-slate-100 rounded-[2rem] opacity-50 blur-xl group-hover:opacity-75 transition-opacity duration-700" />
                  <div className="relative bg-card rounded-[1.5rem] shadow-premium border border-border p-2 overflow-hidden aspect-[4/3] flex items-center justify-center">
                    <div className="w-full h-full bg-slate-50/50 rounded-xl flex items-center justify-center border border-slate-50">
                      <span className="text-8xl font-black text-slate-200/50 tracking-tighter select-none">
                        {product.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="space-y-4">
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
                    {product.name}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.description}
                    </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Key Capabilities
                  </p>
                  <ul className="space-y-3">
                    {product.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {product.industries.slice(0, 3).map((industry) => (
                    <span
                      key={industry}
                      className="text-xs bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex gap-4">
                  <Button
                    size="lg"
                    className="h-12 px-6 shadow-soft hover:shadow-md transition-all duration-300"
                    asChild
                  >
                    <Link href={`/products/${product.id}`}>
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                  {product.demoUrl && (
                    <Button
                      variant="outline"
                      size="lg"
                      className="h-12 px-6"
                      asChild
                    >
                      <a href={product.demoUrl} target="_blank" rel="noopener noreferrer">
                        View Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-40 text-center"
        >
          <div className="max-w-4xl mx-auto bg-card rounded-[2rem] p-12 lg:p-16 border border-border shadow-soft relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-50" />
            <div className="relative z-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 tracking-tight">
                Need Something Custom?
                </h2>
                <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto font-light">
                We build tailored solutions for unique business requirements. Let's discuss your specific needs.
                </p>
                <Button
                size="xl"
                className="h-14 px-10 text-lg shadow-premium hover:shadow-soft hover:scale-[1.02] transition-all duration-300 rounded-full"
                asChild
                >
                <Link href="/contact">
                    Discuss Your Project
                    <ArrowRight className="ml-2" size={20} />
                </Link>
                </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
