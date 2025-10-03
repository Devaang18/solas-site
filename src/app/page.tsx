'use client';

import { useState, useEffect, useRef } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import Industries from '@/components/Industries';
import Oracle from '@/components/Oracle';
import ThreePillars from '@/components/ThreePillars';
import Footer from '@/components/Footer';
import IntroAnimation from '@/components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  // Debug function to reset scrolling state
  const resetScrollingState = () => {
    setIsScrolling(false);
  };

  const sections = [
    { id: 'hero', component: Hero, bg: 'section-alt-1', title: 'Home' },
    { id: 'benefits', component: Benefits, bg: 'section-alt-2', title: 'Why Solas' },
    { id: 'how-it-works', component: HowItWorks, bg: 'section-alt-1', title: 'How It Works' },
    { id: 'oracle', component: Oracle, bg: 'section-alt-2', title: 'Oracle', hasScrollableContent: true },
    { id: 'three-pillars', component: ThreePillars, bg: 'section-alt-1', title: 'Four Pillars', hasScrollableContent: true },
    { id: 'industries', component: Industries, bg: 'section-alt-2', title: 'Industries' },
    { id: 'footer', component: Footer, bg: 'section-alt-1', title: 'Footer' }
  ];

  // Helper function to calculate scroll offset - simple 100vh per section
  const getScrollOffset = (sectionIndex: number) => {
    return sectionIndex * 100;
  };

  // Helper function to calculate total height
  const getTotalHeight = () => {
    return sections.length * 100;
  };

  // Handle page-like scrolling - accessible to page tracker
  const goToPage = (direction: 'next' | 'prev' | number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    if (typeof direction === 'number') {
      // Direct navigation to specific section with bounds checking
      if (direction >= 0 && direction < sections.length && direction !== currentSection) {
        setCurrentSection(direction);
      }
    } else if (direction === 'next' && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'prev' && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  };

  useEffect(() => {
    if (!showIntro) {
      let scrollTimeout: NodeJS.Timeout | undefined;

      // Mouse wheel handling with internal scroll support
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        
        
        // Check if current section has scrollable content
        const currentSectionData = sections[currentSection];
        if (currentSectionData?.hasScrollableContent) {
          const sectionElement = sectionRefs.current[currentSection];
          const scrollableContainer = sectionElement?.querySelector('.scrollable-content') as HTMLElement;
          
          if (scrollableContainer) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            
            // If scrolling up and at top, or scrolling down and at bottom, allow section change
            // Use more reasonable thresholds for better navigation
            if ((e.deltaY < -25 && isAtTop) || (e.deltaY > 25 && isAtBottom)) {
              // Allow section change immediately for better responsiveness
              if (!isScrolling) {
                if (e.deltaY > 25) {
                  goToPage('next');
                } else if (e.deltaY < -25) {
                  goToPage('prev');
                }
              }
            } else {
              // Scroll within the section - make it more responsive
              scrollableContainer.scrollTop += e.deltaY * 0.8;
              return;
            }
          }
        } else {
          // Normal section scrolling - require larger scroll movement
          if (isScrolling) return;
          
          // Additional bounds checking for normal sections
          if (e.deltaY > 20 && currentSection < sections.length - 1) {
            goToPage('next');
          } else if (e.deltaY < -20 && currentSection > 0) {
            goToPage('prev');
          }
        }
      };

      // Keyboard navigation with internal scroll support
      const handleKeyDown = (e: KeyboardEvent) => {
        const currentSectionData = sections[currentSection];
        if (currentSectionData?.hasScrollableContent) {
          const sectionElement = sectionRefs.current[currentSection];
          const scrollableContainer = sectionElement?.querySelector('.scrollable-content') as HTMLElement;
          
          if (scrollableContainer) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            
            if (e.key === 'ArrowDown' && !isAtBottom) {
              e.preventDefault();
              scrollableContainer.scrollTop += 100;
              return;
            } else if (e.key === 'ArrowUp' && !isAtTop) {
              e.preventDefault();
              scrollableContainer.scrollTop -= 100;
              return;
            }
          }
        }
        
        // Section navigation with bounds checking
        if ((e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') && currentSection < sections.length - 1) {
          e.preventDefault();
          goToPage('next');
        } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
          e.preventDefault();
          goToPage('prev');
        }
      };

      // Touch handling
      let touchStartY = 0;
      let touchStartTime = 0;
      
      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
      };

      const handleTouchEnd = (e: TouchEvent) => {
        const touchEndY = e.changedTouches[0].clientY;
        const deltaY = touchStartY - touchEndY;
        const deltaTime = Date.now() - touchStartTime;
        
        // Only trigger if it's a quick swipe (not a long scroll) - less sensitive
        if (deltaTime < 300 && Math.abs(deltaY) > 80) {
          if (deltaY > 0 && currentSection < sections.length - 1) {
            goToPage('next');
          } else if (deltaY < 0 && currentSection > 0) {
            goToPage('prev');
          }
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });

      return () => {
        window.removeEventListener('wheel', handleWheel);
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchend', handleTouchEnd);
        if (scrollTimeout) {
          clearTimeout(scrollTimeout);
        }
      };
    }
  }, [showIntro, currentSection, sections, isScrolling, goToPage]);

  // Reset scrolling state when section changes
  useEffect(() => {
    if (!isScrolling) return;
    
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [currentSection, isScrolling]);

  // Global escape key to reset scrolling state
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        resetScrollingState();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <main className="relative">
      {/* Page Tracker - Responsive */}
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-50 page-tracker">
        <div className="flex flex-col space-y-0.5">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                goToPage(index);
              }}
              className={`page-tracker-dot rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'bg-blue-600/30 active scale-110'
                  : 'bg-slate-400/20 hover:bg-slate-400/30 hover:scale-105'
              }`}
              title={`Go to ${section.title}`}
            />
          ))}
        </div>
      </div>


      {/* Fullscreen Sections with Page-like Scrolling */}
      <div 
        className="page-transition"
        style={{ 
          transform: `translateY(-${getScrollOffset(currentSection)}vh)`,
          height: `${getTotalHeight()}vh`
        }}
      >
        {sections.map((section, index) => {
          const Component = section.component;
          const isLastSection = index === sections.length - 1;
          
          return (
            <section
              key={section.id}
              id={section.id}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className={`h-screen w-full ${section.bg} relative overflow-hidden ${
                isLastSection ? 'border-t-0' : ''
              }`}
            >
              <Component />
            </section>
          );
        })}
      </div>
    </main>
  );
}
