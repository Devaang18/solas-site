'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Industries from '@/components/Industries';
import FAQ from '@/components/FAQ';
import Oracle from '@/components/Oracle';
import TrustedBy from '@/components/TrustedBy';
import ThreePillars from '@/components/ThreePillars';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IntroAnimation from '@/components/IntroAnimation';
import DemoModal from '@/components/DemoModal';
import PrivacyModal from '@/components/PrivacyModal';
import TermsModal from '@/components/TermsModal';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);


  const sections = useMemo(() => [
    { id: 'hero', component: Hero, bg: 'section-alt-1', title: 'Home' },
    { id: 'benefits', component: Benefits, bg: 'section-alt-2', title: 'Why Solas' },
    { id: 'how-it-works', component: HowItWorks, bg: 'section-alt-1', title: 'How It Works' },
    { id: 'three-pillars', component: ThreePillars, bg: 'section-alt-2', title: 'Four Pillars' },
    { id: 'oracle', component: Oracle, bg: 'section-alt-1', title: 'Oracle' },
    { id: 'industries', component: Industries, bg: 'section-alt-2', title: 'Industries' },
    { id: 'faq', component: FAQ, bg: 'section-alt-1', title: 'FAQ' }
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

  // Allow components (e.g., Hero) to open the demo modal via a custom event
  useEffect(() => {
    const handler = () => setShowDemoModal(true);
    document.addEventListener('open-demo-modal', handler as EventListener);
    return () => document.removeEventListener('open-demo-modal', handler as EventListener);
  }, []);




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
        
        {/* Trusted By Banner */}
        <div className="w-full section-alt-2">
          <TrustedBy />
        </div>

        {/* Footer rendered separately to avoid duplication */}
        <Footer onNavigateToSection={goToPage} onOpenPrivacy={() => setShowPrivacyModal(true)} onOpenTerms={() => setShowTermsModal(true)} />
      
      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
      <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </main>
  );
}
