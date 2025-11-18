'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { serviceDetails } from '../lib/serviceContent';

const ServiceIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute top-16 left-24 h-32 w-32 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(161,195,73,0.25)' }} />
        <div className="absolute bottom-10 right-32 h-32 w-40 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(36,48,16,0.15)' }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Our Services</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
            We Provide Best <span style={{ color: 'var(--color-brand)' }}>Quality</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We provide a wide range of accounting, compliance, and automation solutions tailored to the needs of modern Indian businesses.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08 },
            },
          }}
        >
          {serviceDetails.map((service) => (
            <motion.div
              key={service.id}
              className="group bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, rgba(36,48,16,0.04), rgba(161,195,73,0.05))' }}></div>
              <div>
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300" style={{ backgroundColor: 'var(--color-brand)', border: '1px solid var(--color-brand-dark)' }}>
                    <ServiceIcon className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-display font-bold text-gray-900 mb-3 leading-tight transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm mb-4 font-heading">
                  {service.summary}
                </p>
                
                <div className="pt-4 border-t border-gray-100 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary-lighter)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                  <Link href={`/services#${service.id}`} className="inline-flex items-center font-heading font-semibold text-sm transition-colors" style={{ color: 'var(--color-brand)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-brand)'}>
                    Explore Details
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 text-white rounded-xl font-heading font-semibold transition-all transform shadow-lg hover:shadow-2xl"
              style={{ background: 'linear-gradient(to right, var(--color-brand), var(--color-brand-dark))' }}
            >
              View Complete Service Catalog
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
