export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-gray-300"></div>
              <span className="text-sm font-medium text-gray-600 uppercase tracking-wider">About Us</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4 leading-tight">
              About <span style={{ color: 'var(--color-brand)' }}>ANMAAD</span>
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg border border-gray-200">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg font-heading mb-6">
                <strong className="text-gray-900">ANMAAD</strong> is a professional Accounting &amp; Compliance Service Provider offering end-to-end financial solutions to startups, SMEs, and enterprises. Powered by a blend of technology, expertise, and commitment, we help businesses streamline operations, maintain accurate books, and stay compliant across every touchpoint.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg font-heading mb-6">
                Our mission is to deliver high-quality accounting solutions that improve efficiency, reduce costs, and give business owners complete financial visibility. From accounting and payroll to complex registrations, export documentation, and Tally automation, everything is handled by dedicated specialists.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
                <p className="text-gray-900 font-semibold uppercase tracking-wider text-sm mb-4">Our Commitment</p>
                <ul className="space-y-3 text-gray-700 text-lg font-heading">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }}></span>
                    <span><strong>Accuracy</strong> in every ledger, report, and statutory filing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }}></span>
                    <span><strong>Transparency</strong> in communication, pricing, and progress.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }}></span>
                    <span><strong>Compliance</strong> that keeps you audit-ready year round.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full" style={{ backgroundColor: 'var(--color-brand)' }}></span>
                    <span><strong>Client-centric service delivery</strong> to match the pace of your business.</span>
                  </li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed text-lg font-heading">
                Let ANMAAD manage your accounts while you focus on growing your business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

