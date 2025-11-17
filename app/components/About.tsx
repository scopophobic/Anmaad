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
                <strong className="text-gray-900">ANMAAD</strong> is a leading accounting and tax consultancy firm dedicated to providing comprehensive financial solutions to businesses and individuals across India. With over 15 years of experience in the industry, we combine deep expertise with personalized service to help our clients achieve their financial goals and maintain regulatory compliance.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg font-heading mb-6">
                Our mission is to simplify complex financial and regulatory processes for our clients, enabling them to focus on growing their business while we handle their accounting, tax, and compliance needs with precision and care. We understand that every business is unique, and we tailor our services to meet the specific requirements of each client.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg font-heading mb-6">
                Our team of qualified professionals, including Chartered Accountants and tax experts, brings extensive experience in accounting, taxation, and business compliance. We stay updated with the latest regulations and industry best practices to provide you with accurate, timely, and reliable financial services.
              </p>
              
              <p className="text-gray-700 leading-relaxed text-lg font-heading">
                Clients trust ANMAAD for our commitment to accuracy, timely service delivery, transparent communication, and personalized attention to their unique business requirements. We build long-term relationships based on trust, integrity, and results. Whether you&apos;re a startup, growing business, or established enterprise, we&apos;re here to support your financial journey every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
