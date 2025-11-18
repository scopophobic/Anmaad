'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    company: 'Tech Solutions Pvt Ltd',
    content: 'ANMAAD has been handling our GST and tax filings for over 2 years. Their service is prompt, accurate, and they always keep us informed. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Entrepreneur',
    company: 'Fashion Boutique',
    content: 'The team at ANMAAD made company incorporation so smooth. They guided us through every step and ensured all compliance requirements were met. Excellent service!',
    rating: 5,
  },
  {
    name: 'Amit Patel',
    role: 'Director',
    company: 'Manufacturing Co.',
    content: 'Professional, reliable, and knowledgeable. ANMAAD handles all our accounting and compliance needs, allowing us to focus on growing our business. Thank you!',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'Founder',
    company: 'Digital Marketing Agency',
    content: 'Outstanding support with TDS filing and bookkeeping. The team is responsive and always available to answer our questions. Great value for money!',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'Operations Head',
    company: 'LogiTrans Pvt Ltd',
    content: 'ANMAAD streamlined our payroll and compliance, freeing up our internal team to focus on growth. Seamless communication and flawless execution every month.',
    rating: 5,
  },
  {
    name: 'Nisha Verma',
    role: 'Co-founder',
    company: 'FreshBite Foods',
    content: 'Their Tally automation and MIS reports give us real-time visibility into finances. The ANMAAD team feels like an extension of ours.',
    rating: 5,
  },
  {
    name: 'Vikram Batra',
    role: 'Export Manager',
    company: 'Global Textiles',
    content: 'Export documentation used to be chaotic—now it is fully organized and timely thanks to ANMAAD. We never miss a filing or incentive window.',
    rating: 5,
  },
];

const VISIBLE_COUNT = 3;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: '0%',
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
    opacity: 0,
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => handleNext(), 6000);
    return () => clearInterval(timer);
  }, [index]);

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getVisibleTestimonials = () =>
    Array.from({ length: VISIBLE_COUNT }).map(
      (_, offset) => testimonials[(index + offset) % testimonials.length],
    );

  return (
    <section className="py-20 lg:py-28 bg-gray-50 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gray-300" />
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Testimonials</span>
            <div className="h-px w-12 bg-gray-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
            What Our <span style={{ color: 'var(--color-brand)' }}>Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses and founders across India
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <button
            aria-label="Previous testimonials"
            onClick={handlePrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-white hover:bg-brand transition-all items-center justify-center shadow-md z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Next testimonials"
            onClick={handleNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-700 hover:text-white hover:bg-brand transition-all items-center justify-center shadow-md z-20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {getVisibleTestimonials().map((testimonial) => (
                  <div
                    key={`${testimonial.name}-${testimonial.company}`}
                    className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center text-brand font-semibold text-lg">
                          {testimonial.name
                            .split(' ')
                            .map((chunk) => chunk[0])
                            .join('')
                            .slice(0, 2)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-brand">
                        {[...Array(testimonial.rating)].map((_, starIndex) => (
                          <svg key={starIndex} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-700 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

