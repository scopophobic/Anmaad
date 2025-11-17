'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const cardData = [
  { title: 'GST Filing', subtitle: 'Monthly Returns' },
  { title: 'Tax Filing', subtitle: 'ITR & TDS' },
  { title: 'Company Registration', subtitle: 'Pvt Ltd & LLP' },
  { title: 'Compliance', subtitle: 'Annual Filing' },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '4.8/5', label: 'Average Rating' },
  { value: '15+', label: 'Years Experience' },
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
          className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
          }}
        >
          <div>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span style={{ color: 'var(--color-brand)' }}>ANMAAD</span> - Your trusted partner for{' '}
              <span style={{ color: 'var(--color-brand)' }}>accounting, tax & business compliance</span>
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Turn your business idea into reality with us! From company registration to expert accounting,
              tax filing, legal compliance, and business services — we make business simple, seamless, and
              stress-free for startups, SMEs, and enterprises across India.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
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
                href="#services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-lg font-heading font-semibold transition-all hover:border-brand hover:text-brand hover:-translate-y-0.5"
              >
                Our Services
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="min-w-[120px]"
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">4.8/5</div>
                  <div className="text-xs text-gray-600">Ratings</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative hidden lg:block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9 }}
          >
            <motion.div
              className="absolute inset-0 rounded-[32px]"
              style={{
                background: 'linear-gradient(135deg, rgba(135,163,48,0.12), rgba(36,48,16,0.08))',
              }}
              animate={{ borderRadius: ['32px', '26px', '32px'] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative rounded-[32px] p-12 border border-gray-200 backdrop-blur bg-white/80 shadow-[0_25px_80px_rgba(36,48,16,0.08)]">
              <motion.div
                className="grid grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.12 },
                  },
                }}
              >
                {cardData.map((card, index) => (
                  <motion.div
                    key={card.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between min-h-[150px]"
                    variants={{
                      hidden: { opacity: 0, y: 25 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.05 } },
                    }}
                    whileHover={{ y: -6, boxShadow: '0px 20px 35px rgba(36,48,16,0.08)' }}
                  >
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--color-primary-lighter)' }}>
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-brand)' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{card.title}</div>
                      <div className="text-xs text-gray-600 mt-1">{card.subtitle}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
