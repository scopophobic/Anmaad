import Link from 'next/link';
import { serviceDetails } from '../lib/serviceContent';

export const metadata = {
  title: 'Services | ANMAAD',
  description:
    'Explore ANMAAD’s in-depth accounting, compliance, automation, payroll, and export documentation services tailored for Indian businesses.',
};

export default function ServicesPage() {
  return (
    <main className="bg-gray-50">
      <section className="relative overflow-hidden py-20 bg-white">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--color-brand) 1px, transparent 0)', backgroundSize: '120px 120px' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Service Catalogue</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">Comprehensive Accounting, Compliance & Automation Services</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The main page gives you a quick overview. This section dives deeper into every service we provide—so you know exactly what to expect when you partner with ANMAAD.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {serviceDetails.map((service) => (
                <a key={service.id} href={`#${service.id}`} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:border-brand hover:text-brand transition-colors">
                  {service.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {serviceDetails.map((service, index) => (
          <section key={service.id} id={service.id} className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10">
              <div className="flex-1">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400 mb-2">Service #{index + 1}</p>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{service.intro}</p>
              </div>
              <div className="lg:w-64 bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500 mb-4">Quick Snapshot</p>
                <p className="text-gray-900 font-semibold">{service.summary}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {service.sections.map((section) => (
                <div key={section.title} className="rounded-2xl border border-gray-100 p-6 bg-gray-50/70">
                  <h3 className="text-xl font-heading font-semibold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-3 text-gray-700">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <svg className="w-4 h-4 mt-1 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {service.closingNote && (
              <div className="mt-8 rounded-2xl border border-dashed border-gray-200 bg-white/70 p-6">
                <p className="text-gray-800 font-semibold">{service.closingNote}</p>
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-3xl p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-3">Need a Custom Plan?</p>
              <h3 className="text-3xl font-display font-bold mb-3">Let’s discuss your accounting & compliance journey.</h3>
              <p className="text-white/80 max-w-2xl">
                Whether you need one service or the full stack, ANMAAD tailors deliverables to your industry, tools, and growth timeline.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="/#contact" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-heading font-semibold bg-white text-brand-dark hover:bg-gray-100 transition">
                Contact Team ANMAAD
              </Link>
              <Link href="mailto:mkmadhu4u@gmail.com" className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-heading font-semibold border border-white/40 text-white hover:bg-white/10 transition">
                mkmadhu4u@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

