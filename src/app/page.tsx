'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Industries from '@/components/Industries';
import Oracle from '@/components/Oracle';
import ThreePillars from '@/components/ThreePillars';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IntroAnimation from '@/components/IntroAnimation';
import DemoModal from '@/components/DemoModal';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);


  const sections = useMemo(() => [
    { id: 'hero', component: Hero, bg: 'section-alt-1', title: 'Home' },
    { id: 'benefits', component: Benefits, bg: 'section-alt-2', title: 'Why Solas' },
    { id: 'how-it-works', component: HowItWorks, bg: 'section-alt-1', title: 'How It Works' },
    { id: 'oracle', component: Oracle, bg: 'section-alt-2', title: 'Oracle' },
    { id: 'three-pillars', component: ThreePillars, bg: 'section-alt-1', title: 'Four Pillars' },
    { id: 'industries', component: Industries, bg: 'section-alt-2', title: 'Industries' }
  ], []);



  const goToPage = useCallback((direction: 'next' | 'prev' | number) => {
    if (typeof direction === 'number') {
      if (direction >= 0 && direction < sections.length) {
        const targetElement = sectionRefs.current[direction];
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    }
  }, [sections]);

  useEffect(() => {
    if (!showIntro) {
      // Intersection Observer for section animations
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = parseInt(entry.target.getAttribute('data-section-index') || '0');
              setVisibleSections(prev => new Set([...prev, index]));
            }
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -100px 0px'
        }
      );

      // Scroll progress tracking
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        setScrollProgress(progress);
      };

      // Observe all sections
      sectionRefs.current.forEach((section, index) => {
        if (section) {
          section.setAttribute('data-section-index', index.toString());
          observer.observe(section);
        }
      });

      // Add scroll listener
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [showIntro]);



  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <main className="relative">
      <Header onNavigateToSection={goToPage} onOpenDemo={() => setShowDemoModal(true)} />
      
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200/30 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

        {sections.map((section, index) => {
          const Component = section.component;
          const isVisible = visibleSections.has(index);
          
          return (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className={`w-full ${section.bg} relative overflow-hidden section-transition ${
                isVisible ? 'section-fade-in' : ''
              }`}
              style={{
                minHeight: '100vh'
              }}
            >
              <Component />
            </section>
          );
        })}
        
        {/* Footer rendered separately to avoid duplication */}
        <Footer onNavigateToSection={goToPage} />
      
      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
    </main>
  );
}
