'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { serviceDetails } from '../lib/serviceContent';

const coreServices = serviceDetails.map((service) => service.title);

const trustPoints = [
  'Highly economical service plans',
  'Audit-ready, authenticated financial reports',
  'Transparent, reliable, and timely delivery',
  'Expert team with multi-industry experience',
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-28 bg-white">
      <motion.div
        className="absolute -top-32 -right-10 w-[520px] h-[520px] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(161,195,73,0.4), transparent 65%)' }}
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -25, 15, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-16 left-[-160px] w-[420px] h-[420px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(202,213,147,0.5), transparent 70%)' }}
        animate={{
          x: [0, -20, 15, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div>
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
              Welcome to <span style={{ color: 'var(--color-brand)' }}>ANMAAD</span> — Your Trusted Accounting & Compliance Partner
            </motion.h1>

            <motion.p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              We deliver reliable accounting, bookkeeping, compliance, Tally automation, payroll, and export documentation services backed by a deep understanding of Indian Accounting Standards and government regulations. Stay compliant, organized, and financially strong with a partner that scales with you.
            </motion.p>

            <motion.div className="flex flex-col sm:flex-row gap-4 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }}>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-white rounded-lg font-heading font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: 'var(--color-brand)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand)'}
              >
                Get Started
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-heading font-semibold transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
              >
                View Detailed Services
              </Link>
            </motion.div>

            <motion.div className="grid sm:grid-cols-2 gap-12 pt-6 border-t border-gray-200" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 0.8 }}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Core Solutions</p>
                <ul className="space-y-3">
                  {coreServices.slice(0, 6).map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-800">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }} />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Why Businesses Trust ANMAAD</p>
                <ul className="space-y-3">
                  {trustPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-800">
                      <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-brand)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-medium">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
