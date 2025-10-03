'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Show header after intro animation
    const timer = setTimeout(() => setIsVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm animate-slide-down">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-40">
                <Image
                  src="/solas-logo.png"
                  alt="Solas logo"
                  fill
                  priority
                  sizes="160px"
                  className="object-contain"
                  quality={90}
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              Why Solas
            </Link>
            <Link href="/#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              How It Works
            </Link>
            <Link href="/#industries" className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              Industries
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/demo"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium shadow-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black/70 hover:text-black focus:outline-none focus:text-black"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Demo breadcrumb/back link */}
        {pathname && pathname.startsWith('/demo') && (
          <div className="py-2">
            <Link href="/" className="inline-flex items-center text-[15px] font-medium text-black/80 hover:text-black">
              <span className="mr-2">←</span> Back to home
            </Link>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t" style={{ borderColor: 'var(--solas-primary-light)' }}>
              <Link
                href="/#features"
                className="block px-3 py-2 text-black/70 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Why Solas
              </Link>
              <Link
                href="/#how-it-works"
                className="block px-3 py-2 text-black/70 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="/#industries"
                className="block px-3 py-2 text-black/70 hover:text-black transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
              <div className="pt-4 space-y-2">
                <Link
                  href="/demo"
                  className="block mx-3 bg-[var(--solas-primary)] text-white px-4 py-2 rounded-lg hover:bg-[var(--solas-primary-dark)] transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
