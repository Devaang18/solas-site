'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onNavigateToSection: (sectionIndex: number) => void;
  onOpenDemo: () => void;
}

export default function Header({ onNavigateToSection, onOpenDemo }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  // Map section names to their indices
  const sectionMap = {
    'benefits': 1,      // Why Solas
    'oracle': 2,        // Compliance Oracle
    'three-pillars': 3, // Four Pillars
    'industries': 4     // Industries
  };

  const handleNavigation = (sectionName: keyof typeof sectionMap) => {
    const sectionIndex = sectionMap[sectionName];
    if (sectionIndex !== undefined) {
      onNavigateToSection(sectionIndex);
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  useEffect(() => {
    // Show header quickly
    const timer = setTimeout(() => setIsVisible(true), 500);
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
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => handleNavigation('benefits')} className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              Why Solas
            </button>
            <button onClick={() => handleNavigation('oracle')} className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              Oracle
            </button>
            <button onClick={() => handleNavigation('three-pillars')} className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              Four Pillars
            </button>
            <button onClick={() => handleNavigation('industries')} className="text-slate-700 hover:text-blue-600 transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-50">
              Industries
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenDemo}
              className="text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium shadow-sm"
              style={{ backgroundColor: '#0f2440' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#06bcc1'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f2440'}
            >
              Get Started
            </button>
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
              <button
                onClick={() => handleNavigation('benefits')}
                className="block w-full text-left px-3 py-2 text-black/70 hover:text-black transition-colors"
              >
                Why Solas
              </button>
              <button
                onClick={() => handleNavigation('oracle')}
                className="block w-full text-left px-3 py-2 text-black/70 hover:text-black transition-colors"
              >
                Oracle
              </button>
              <button
                onClick={() => handleNavigation('three-pillars')}
                className="block w-full text-left px-3 py-2 text-black/70 hover:text-black transition-colors"
              >
                Four Pillars
              </button>
              <button
                onClick={() => handleNavigation('industries')}
                className="block w-full text-left px-3 py-2 text-black/70 hover:text-black transition-colors"
              >
                Industries
              </button>
              <div className="pt-4 space-y-2">
                <button
                  onClick={() => {
                    onOpenDemo();
                    setIsMenuOpen(false);
                  }}
                  className="block mx-3 text-white px-4 py-2 rounded-lg transition-colors text-center"
                  style={{ backgroundColor: '#0f2440' }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#06bcc1'}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#0f2440'}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
