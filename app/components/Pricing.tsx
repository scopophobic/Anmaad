'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const plans = [
  {
    name: 'Basic Plan',
    price: '₹2,999',
    period: '/month',
    description: 'Perfect for small businesses and startups',
    features: [
      'GST Registration',
      'Monthly GST Return Filing',
      'Income Tax Filing (Individual)',
      'PAN/TAN Services',
      'Basic Bookkeeping',
      'Email Support',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Professional Plan',
    price: '₹7,999',
    period: '/month',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Basic',
      'Company/LLP Registration',
      'Annual Compliance Filing',
      'TDS Return Filing',
      'Complete Bookkeeping & Accounting',
      'MSME Registration',
      'DSC Services',
      'Priority Support',
    ],
    popular: true,
    cta: 'Get Started',
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large enterprises',
    features: [
      'Everything in Professional',
      'Dedicated Account Manager',
      'Custom Compliance Solutions',
      'Audit Support',
      'Tax Planning & Advisory',
      '24/7 Support',
      'Quarterly Business Reviews',
      'Custom Reporting',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute left-10 top-20 w-40 h-40 rounded-full blur-[150px]" style={{ backgroundColor: 'rgba(161,195,73,0.45)' }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Pricing</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
            Choose Our <span style={{ color: 'var(--color-brand)' }}>Best Plan</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing with no hidden charges. Select the plan that best fits your business needs.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border ${
                plan.popular 
                  ? 'scale-105 md:scale-110' 
                  : 'border-gray-200'
              }`}
              style={plan.popular ? { borderColor: 'var(--color-brand)', boxShadow: '0 0 0 2px var(--color-primary-lighter)' } : {}}
              onMouseEnter={(e) => !plan.popular && (e.currentTarget.style.borderColor = 'var(--color-brand)')}
              onMouseLeave={(e) => !plan.popular && (e.currentTarget.style.borderColor = '')}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <span className="text-white px-6 py-2 rounded-full text-sm font-heading font-bold shadow-lg" style={{ background: 'linear-gradient(to right, var(--color-brand), var(--color-brand-dark))' }}>
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">{plan.name}</h3>
                <p className="text-gray-600 mb-6 font-heading">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-display font-bold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600 font-heading ml-2">{plan.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-brand)' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-heading">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#contact"
                className={`block w-full text-center py-4 px-6 rounded-xl font-heading font-bold transition-all transform hover:scale-105 ${
                  plan.popular
                    ? 'text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                }`}
                style={plan.popular ? { background: 'linear-gradient(to right, var(--color-brand), var(--color-brand-dark))' } : {}}
                onMouseEnter={(e) => plan.popular && (e.currentTarget.style.background = 'linear-gradient(to right, var(--color-brand-dark), var(--color-primary-dark))')}
                onMouseLeave={(e) => plan.popular && (e.currentTarget.style.background = 'linear-gradient(to right, var(--color-brand), var(--color-brand-dark))')}
              >
                {plan.cta}
              </Link>
                </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 font-heading mb-4">
            Need a custom solution? We&apos;re here to help.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center font-heading font-semibold transition-colors"
            style={{ color: 'var(--color-brand)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-dark)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-brand)'}
          >
            Contact Us for Custom Pricing
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

