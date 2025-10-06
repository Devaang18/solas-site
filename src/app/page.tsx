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




  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <main className="relative">
      <Header onNavigateToSection={goToPage} onOpenDemo={() => setShowDemoModal(true)} />
      
        {sections.map((section, index) => {
          const Component = section.component;
          
          return (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className={`w-full ${section.bg} relative overflow-hidden`}
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
