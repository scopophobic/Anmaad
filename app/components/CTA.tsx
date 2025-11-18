'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom right, var(--color-primary-dark), var(--color-secondary-dark))' }}>
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(135, 163, 48, 0.2) 1px, transparent 0)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Subtle Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ backgroundColor: 'var(--color-brand)' }}></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ backgroundColor: 'var(--color-brand)', animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block mb-8 px-6 py-3 backdrop-blur-sm border rounded-full shadow-sm" style={{ backgroundColor: 'rgba(135, 163, 48, 0.2)', borderColor: 'rgba(135, 163, 48, 0.3)' }}>
            <span className="text-sm font-heading font-semibold uppercase tracking-widest" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Get Started Today</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-10 leading-tight">
            Need Help With Registrations or Tax Filing?
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-14 max-w-3xl mx-auto leading-relaxed font-light">
            Contact ANMAAD today and let our experts handle your accounting and compliance needs. 
            Experience professional service that makes a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-3 px-12 py-5 text-white text-lg font-heading font-bold rounded-2xl overflow-hidden transition-all duration-300 shadow-[0_20px_45px_rgba(36,48,16,0.35)] hover:shadow-[0_30px_55px_rgba(36,48,16,0.5)]"
              >
                <span
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{
                    background: 'linear-gradient(120deg, var(--color-brand-dark), var(--color-brand))',
                  }}
                />
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(120deg, rgba(202,213,147,0.25), transparent 70%)' }}
                ></span>
                <span className="relative z-10 flex items-center gap-3 tracking-wide">
                  Get Started Now
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link
              href="#services"
              className="px-10 py-5 bg-transparent text-white border-2 border-white/50 rounded-xl text-lg font-semibold hover:bg-white/10 hover:border-white transition-all transform hover:scale-105 backdrop-blur-sm"
            >
              View Services
            </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

