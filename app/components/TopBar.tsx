import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="bg-gray-50 border-b border-gray-200 py-2 text-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-6 text-gray-600">
            <a href="mailto:info@anmaad.com" className="hover:text-blue-700 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@anmaad.com
            </a>
            <a href="tel:+911234567890" className="hover:text-blue-700 transition-colors flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 1234567890
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">
              Contact Us
            </Link>
            <Link href="#contact" className="bg-blue-700 text-white px-4 py-1.5 rounded-md hover:bg-blue-800 transition-colors text-sm font-medium">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

