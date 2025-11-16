'use client';

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
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gray-300"></div>
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">Testimonials</span>
            <div className="h-px w-12 bg-gray-300"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
            What Our <span style={{ color: 'var(--color-brand)' }}>Clients</span> Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Trusted by businesses and individuals across the country
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 relative overflow-hidden"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary-lighter)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = ''}
            >
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" style={{ backgroundColor: 'var(--color-primary-lighter)' }}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: 'var(--color-brand)' }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <div className="mb-8">
                  <svg className="w-14 h-14 mb-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'var(--color-primary-lighter)', opacity: 0.5 }}>
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-3.313.772-5.996 3.549-5.996 7.003 0 2.689 1.17 5.143 3.017 6.849v5.849h-9.999zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-3.313.772-5.996 3.549-5.996 7.003 0 2.689 1.17 5.143 3.017 6.849v5.849h-10.017z" />
                  </svg>
                </div>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg italic">
                  "{testimonial.content}"
                </p>
                
                <div className="pt-6 border-t border-gray-100">
                  <p className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-medium">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

