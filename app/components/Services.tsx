'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'GST Registration & Filing',
    description: 'Complete GST registration and timely filing services to keep your business compliant with tax regulations.',
  },
  {
    title: 'Income Tax Filing',
    description: 'Expert assistance with individual and corporate income tax returns, ensuring maximum deductions and compliance.',
  },
  {
    title: 'Company Incorporation',
    description: 'End-to-end support for private and public company registration with streamlined documentation.',
  },
  {
    title: 'LLP Registration',
    description: 'Professional Limited Liability Partnership registration services for your business structure needs.',
  },
  {
    title: 'Bookkeeping & Accounting',
    description: 'Accurate financial record-keeping and accounting services to maintain your business finances.',
  },
  {
    title: 'TDS Filing',
    description: 'Timely TDS return filing and compliance to avoid penalties and ensure smooth operations.',
  },
  {
    title: 'Partnership Registration',
    description: 'Complete partnership firm registration with proper documentation and legal compliance.',
  },
  {
    title: 'PAN / TAN Services',
    description: 'Quick and hassle-free PAN and TAN application and correction services.',
  },
  {
    title: 'MSME Registration',
    description: 'MSME/Udyam registration to avail government benefits and schemes for your business.',
  },
  {
    title: 'Digital Signature Certificate',
    description: 'DSC application and renewal services for secure online transactions and document signing.',
  },
  {
    title: 'Professional Tax',
    description: 'Professional tax registration and filing services for businesses across different states.',
  },
  {
    title: 'Compliance & Audit Support',
    description: 'Comprehensive compliance management and audit support to keep your business in good standing.',
  },
];

const ServiceIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? services : services.slice(0, 6);

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
            Comprehensive accounting, tax, and compliance solutions for your business
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
          {displayedServices.map((service) => (
            <motion.div
              key={service.title}
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
                  {service.description}
                </p>
                
                <div className="pt-4 border-t border-gray-100 transition-colors" onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary-lighter)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}>
                  <Link href="#contact" className="inline-flex items-center font-heading font-semibold text-sm transition-colors" style={{ color: 'var(--color-brand)' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-brand)'}>
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <div className="text-center">
            <motion.button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center px-8 py-4 text-white rounded-xl font-heading font-semibold transition-all transform shadow-lg hover:shadow-2xl"
              style={{ background: 'linear-gradient(to right, var(--color-brand), var(--color-brand-dark))' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
}
