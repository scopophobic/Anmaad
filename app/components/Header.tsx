'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl lg:text-3xl font-display font-bold text-brand">
              ANMAAD
            </span>
            <span className="hidden sm:block text-sm text-gray-600 font-medium">
              Accounting & Tax Services
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-gray-700 hover:text-brand font-medium transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-brand font-medium transition-colors">
              About
            </Link>
            <Link href="#pricing" className="text-gray-700 hover:text-brand font-medium transition-colors">
              Pricing
            </Link>
            <Link href="#contact" className="bg-brand text-white px-6 py-2 rounded-lg hover:bg-brand-dark transition-colors font-medium" style={{ backgroundColor: 'var(--color-brand)' }}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-200">
            <Link href="#services" className="block text-gray-700 hover:text-brand font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="#about" className="block text-gray-700 hover:text-brand font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="#pricing" className="block text-gray-700 hover:text-brand font-medium py-2" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </Link>
            <Link href="#contact" className="block text-white px-6 py-2 rounded-lg transition-colors font-medium text-center" style={{ backgroundColor: 'var(--color-brand)' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand-dark)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--color-brand)'} onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
