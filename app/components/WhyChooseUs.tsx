'use client';

const features = [
  {
    title: 'Expert Team',
    description: 'Qualified professionals with extensive experience in accounting and taxation. Our team of CAs and tax experts brings decades of combined expertise.',
  },
  {
    title: 'Accurate & Timely',
    description: 'Precision in every calculation and commitment to meeting deadlines. We ensure zero errors and on-time delivery of all services.',
  },
  {
    title: 'Transparent Pricing',
    description: 'Clear, upfront pricing with no hidden charges or surprises. You know exactly what you\'re paying for with detailed cost breakdowns.',
  },
  {
    title: 'Quick Support',
    description: 'Responsive customer service to address your queries promptly. Dedicated account managers ensure your concerns are resolved quickly.',
  },
  {
    title: 'Compliance Assurance',
    description: 'Stay compliant with all regulations and avoid penalties. Proactive monitoring ensures your business remains in good standing.',
  },
  {
    title: 'Technology-Driven',
    description: 'Modern tools and software for efficient and secure service delivery. Cloud-based solutions for real-time access to your financial data.',
  },
];

const FeatureIcon = ({ children }: { children: React.ReactNode }) => (
  <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" style={{ backgroundColor: 'var(--color-brand)', border: '1px solid var(--color-brand-dark)' }}>
    {children}
  </div>
);

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-brand)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <div>
                <div className="mb-6">
                  <FeatureIcon>
                  {index === 0 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )}
                  {index === 5 && (
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
          </div>
          ))}
        </div>
      </div>
    </section>
  );
}

