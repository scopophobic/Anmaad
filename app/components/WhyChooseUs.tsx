'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Highly Economical Plans',
    description:
      'Choose flexible engagement models that deliver enterprise-grade accounting and compliance without inflating overheads.',
  },
  {
    title: 'Audit-Ready Documentation',
    description:
      'Every ledger, report, and statutory filing is validated and authenticated so you are inspection-ready at a moment’s notice.',
  },
  {
    title: 'Transparent & Timely Delivery',
    description:
      'Upfront scopes, proactive communication, and on-time milestones keep you informed and confident from day one.',
  },
  {
    title: 'Expert, Multi-Industry Team',
    description:
      'Leverage specialists who understand manufacturing, services, D2C, export, and tech-led businesses across India.',
  },
];

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div
    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
    style={{ backgroundColor: 'var(--color-brand)', border: '1px solid var(--color-brand-dark)' }}
  >
    {children}
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-12 right-24 h-40 w-40 rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(135,163,48,0.3)' }} />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Why Choose Us</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
            Why Choose <span style={{ color: 'var(--color-brand)' }}>ANMAAD</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We combine expertise, technology, and personalized service to deliver exceptional results
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
              }}
              whileHover={{ y: -8 }}
            >
              <div>
                <div className="mb-6">
                  <FeatureIcon>
                    {index === 0 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 17l6 3 6-3m-6 3V4.5a1.5 1.5 0 013 0V20" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12l3 3m-3-3l3-3" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 20.5a8.5 8.5 0 100-17 8.5 8.5 0 000 17z" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9-4 9 4-9 4-9-4zm0 14v-8l9 4 9-4v8l-9 4-9-4z" />
                      </svg>
                    )}
                  </FeatureIcon>
                </div>
              
              <h3 className="text-2xl font-display font-bold text-gray-900 mb-5 transition-all duration-300" onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-brand-dark)'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed font-heading">
                {feature.description}
              </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

