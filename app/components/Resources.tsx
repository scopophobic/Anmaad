const resources = [
  {
    title: 'Tax Filing Guide',
    description: 'Complete guide to understanding income tax filing requirements and deadlines.',
    category: 'Tax',
  },
  {
    title: 'GST Compliance Checklist',
    description: 'Essential checklist to ensure your business stays GST compliant.',
    category: 'GST',
  },
  {
    title: 'Company Registration Process',
    description: 'Step-by-step guide to registering your company in India.',
    category: 'Registration',
  },
  {
    title: 'MSME Benefits Guide',
    description: 'Learn about the benefits and schemes available for MSME businesses.',
    category: 'MSME',
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-50/10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-block mb-6 px-6 py-3 bg-blue-50/80 border border-blue-200/30 rounded-full shadow-sm">
            <span className="text-sm font-heading font-semibold text-blue-900 uppercase tracking-widest">Knowledge Center</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
            Resources
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-heading">
            Helpful guides and information to keep you informed about accounting and tax matters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3 border border-gray-200 hover:border-blue-300/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 text-xs font-semibold text-blue-900 bg-blue-50 rounded-lg uppercase tracking-wider border border-blue-200/50">
                    {resource.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-gray-900 mb-5 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-800 group-hover:to-blue-900 group-hover:bg-clip-text transition-all duration-300">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-[15px] font-heading">
                  {resource.description}
                </p>
                
                <a
                  href="#"
                  className="inline-flex items-center text-blue-800 font-heading font-semibold text-sm hover:text-blue-900 transition-colors group-hover:translate-x-2 transform duration-300"
                >
                  Read More
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

