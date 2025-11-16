'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onNavigateToSection: (sectionIndex: number) => void;
  onOpenDemo: () => void;
  labels?: Partial<Record<'benefits' | 'how-it-works' | 'three-pillars' | 'oracle' | 'industries' | 'faq', string>>;
  hiddenSections?: Array<'benefits' | 'how-it-works' | 'three-pillars' | 'oracle' | 'industries' | 'faq'>;
  sectionOrder?: Array<'benefits' | 'how-it-works' | 'three-pillars' | 'oracle' | 'industries' | 'faq'>;
  theme?: 'light' | 'dark';
  logoSrc?: string;
  logoTagline?: string;
}

export default function Header({ onNavigateToSection, onOpenDemo, labels, hiddenSections, sectionOrder, theme = 'light', logoSrc = '/solas-logo.png', logoTagline }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const isDark = theme === 'dark';
  const headerClass = `fixed top-0 left-0 right-0 z-50 ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white/95 border-slate-200'} backdrop-blur-sm border-b shadow-sm animate-slide-down`;
  const navBtnClass = `text-base sm:text-lg ${isDark ? 'text-slate-200 hover:text-white hover:bg-white/10' : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'} transition-colors duration-200 px-3 py-2 rounded-md font-medium`;
  const mobileMenuBtnClass = `text-black/70 hover:text-black focus:outline-none focus:text-black p-1 ${isDark ? 'text-white/80 hover:text-white' : ''}`;
  const mobileNavBtnClass = `block w-full text-left px-2 sm:px-3 py-2 text-sm sm:text-base transition-colors ${isDark ? 'text-slate-200 hover:text-white' : 'text-black/70 hover:text-black'}`;

  // Map section names to their indices
  const defaultSectionMap = {
    'benefits': 1,      // Why Solas
    'how-it-works': 2,  // How It Works
    'three-pillars': 3, // Four Pillars
    'oracle': 4,        // Compliance Oracle
    'industries': 5,    // Industries
    'faq': 6            // FAQ
  } as const;

  const computedSectionMap = sectionOrder && sectionOrder.length
    ? sectionOrder.reduce((acc, key, idx) => {
        // +1 because index 0 is 'hero' on pages
        acc[key] = idx + 1;
        return acc;
      }, {} as Record<'benefits' | 'how-it-works' | 'three-pillars' | 'oracle' | 'industries' | 'faq', number>)
    : { ...defaultSectionMap };

  // Determine the order to render sections
  const sectionsToRender = sectionOrder && sectionOrder.length
    ? sectionOrder.filter(section => !hiddenSections?.includes(section))
    : (['benefits', 'how-it-works', 'three-pillars', 'oracle', 'industries', 'faq'] as const).filter(section => !hiddenSections?.includes(section));

  const handleNavigation = (sectionName: 'benefits' | 'how-it-works' | 'three-pillars' | 'oracle' | 'industries' | 'faq') => {
    const sectionIndex = computedSectionMap[sectionName];
    if (sectionIndex !== undefined) {
      onNavigateToSection(sectionIndex);
      setIsMenuOpen(false); // Close mobile menu
    }
  };

  const getSectionLabel = (section: 'benefits' | 'how-it-works' | 'three-pillars' | 'oracle' | 'industries' | 'faq') => {
    const defaultLabels = {
      'benefits': 'Why Solas',
      'how-it-works': 'How It Works',
      'three-pillars': 'Four Pillars',
      'oracle': 'Product',
      'industries': 'Industries',
      'faq': 'FAQ'
    };
    return labels?.[section] ?? defaultLabels[section];
  };

  useEffect(() => {
    // Show header quickly
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <header className={headerClass}>
      <div className="relative container-fluid-2xl mx-auto p-fluid-sm">
        <div className="flex justify-between items-center" style={{ height: 'clamp(3rem, 8vh, 5rem)' }}>
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-end gap-0 sm:gap-[2px]">
              <div
                className="relative"
                style={{ height: 'clamp(1.75rem, 4.5vw, 2.75rem)', width: 'clamp(7.5rem, 16vw, 11rem)' }}
              >
                <Image
                  src={logoSrc}
                  alt="Solas logo"
                  fill
                  priority
                  sizes="(max-width: 640px) 110px, (max-width: 768px) 150px, 180px"
                  className="object-contain"
                  quality={90}
                />
              </div>
              {logoTagline && (
                <span
                  className={`hidden sm:inline-block -ml-6 translate-y-[2px] text-[0.6rem] sm:text-[0.7rem] font-medium tracking-wide whitespace-nowrap italic ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                  style={{ fontFamily: '"Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", sans-serif' }}
                >
                  {logoTagline}
                </span>
              )}
            </Link>
          </div>

          {/* Desktop Navigation – always centered within full header width */}
          <nav
            className="hidden lg:flex absolute inset-y-0 left-1/2 -translate-x-1/2 items-center"
            style={{ gap: 'clamp(0.5rem, 2vw, 1.5rem)' }}
          >
            {sectionsToRender.map((section) => (
              <button key={section} onClick={() => handleNavigation(section)} className={navBtnClass}>
                {getSectionLabel(section)}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center" style={{ gap: 'clamp(0.5rem, 2vw, 1rem)' }}>
            <button
              onClick={onOpenDemo}
              className={`px-6 py-3 rounded-lg transition-colors duration-200 font-semibold shadow-sm text-base sm:text-lg ${
                isDark ? 'bg-white text-slate-900 hover:bg-slate-100' : 'text-white'
              }`}
              style={!isDark ? { backgroundColor: '#0f2440' } : undefined}
              onMouseEnter={(e) => {
                if (!isDark) (e.target as HTMLElement).style.backgroundColor = '#06bcc1';
              }}
              onMouseLeave={(e) => {
                if (!isDark) (e.target as HTMLElement).style.backgroundColor = '#0f2440';
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={mobileMenuBtnClass}
            >
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <div className={`px-2 pt-2 pb-3 space-y-1 ${isDark ? 'bg-slate-900' : 'bg-white'} border-t`} style={{ borderColor: 'var(--solas-primary-light)' }}>
              {sectionsToRender.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigation(section)}
                  className={mobileNavBtnClass}
                >
                  {getSectionLabel(section)}
                </button>
              ))}
              <div className="pt-3 sm:pt-4 space-y-2">
                <button
                  onClick={() => {
                    onOpenDemo();
                    setIsMenuOpen(false);
                  }}
                  className={`block mx-2 sm:mx-3 px-3 sm:px-4 py-2 rounded-lg transition-colors text-center text-sm sm:text-base ${
                    isDark ? 'bg-white text-slate-900 hover:bg-slate-100' : 'text-white'
                  }`}
                  style={!isDark ? { backgroundColor: '#0f2440' } : undefined}
                  onMouseEnter={(e) => {
                    if (!isDark) (e.target as HTMLElement).style.backgroundColor = '#06bcc1';
                  }}
                  onMouseLeave={(e) => {
                    if (!isDark) (e.target as HTMLElement).style.backgroundColor = '#0f2440';
                  }}
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
