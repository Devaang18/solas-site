'use client';

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Industries from '@/components/Industries';
import Oracle from '@/components/Oracle';
import ThreePillars from '@/components/ThreePillars';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import IntroAnimation from '@/components/IntroAnimation';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);

  const resetScrollingState = () => {
    setIsScrolling(false);
  };

  const sections = useMemo(() => [
    { id: 'hero', component: Hero, bg: 'section-alt-1', title: 'Home' },
    { id: 'benefits', component: Benefits, bg: 'section-alt-2', title: 'Why Solas' },
    { id: 'oracle', component: Oracle, bg: 'section-alt-1', title: 'Oracle', hasScrollableContent: true },
    { id: 'three-pillars', component: ThreePillars, bg: 'section-alt-2', title: 'Four Pillars', hasScrollableContent: true },
    { id: 'industries', component: Industries, bg: 'section-alt-1', title: 'Industries' },
    { id: 'footer', component: Footer, bg: 'section-alt-2', title: 'Footer' }
  ], []);

  const getScrollOffset = (sectionIndex: number) => {
    return sectionIndex * 100;
  };

  const getTotalHeight = () => {
    return sections.length * 100;
  };

  const centerSectionTitle = (sectionIndex: number) => {
    setTimeout(() => {
      const sectionElement = sectionRefs.current[sectionIndex];
      const scrollableContainer = sectionElement?.querySelector('.scrollable-content') as HTMLElement;
      if (scrollableContainer) {
        const titleElement = scrollableContainer.querySelector('h2');
        if (titleElement) {
          const viewportHeight = window.innerHeight;
          const titleHeight = titleElement.offsetHeight;
          const titleOffsetTop = titleElement.offsetTop;
          
          const targetScrollTop = Math.max(0, titleOffsetTop - (viewportHeight / 2) + (titleHeight / 2));
          
          scrollableContainer.scrollTo({
            top: targetScrollTop,
            behavior: 'smooth'
          });
        }
      }
    }, 200);
  };

  const goToPage = useCallback((direction: 'next' | 'prev' | number) => {
    if (isScrolling) return;
    
    setIsScrolling(true);
    
    let targetSection: number = currentSection;
    
    if (typeof direction === 'number') {
      if (direction >= 0 && direction < sections.length && direction !== currentSection) {
        targetSection = direction;
        setCurrentSection(direction);
      }
    } else if (direction === 'next' && currentSection < sections.length - 1) {
      targetSection = currentSection + 1;
      setCurrentSection(prev => prev + 1);
    } else if (direction === 'prev' && currentSection > 0) {
      targetSection = currentSection - 1;
      setCurrentSection(prev => prev - 1);
    }
    
    if (targetSection >= 0 && targetSection < sections.length) {
      const targetSectionData = sections[targetSection];
      if (targetSectionData?.hasScrollableContent && (targetSectionData.id === 'oracle' || targetSectionData.id === 'three-pillars')) {
        setTimeout(() => centerSectionTitle(targetSection), 300);
      }
    }
    
    setTimeout(() => {
      setIsScrolling(false);
    }, 600);
  }, [isScrolling, currentSection, sections]);

  useEffect(() => {
    if (!showIntro) {
      let scrollTimeout: NodeJS.Timeout | undefined;

      const handleWheel = (e: WheelEvent) => {
        e.preventDefault();
        
        const currentSectionData = sections[currentSection];
        if (currentSectionData?.hasScrollableContent) {
          const sectionElement = sectionRefs.current[currentSection];
          const scrollableContainer = sectionElement?.querySelector('.scrollable-content') as HTMLElement;
          
          if (scrollableContainer) {
            const { scrollTop, scrollHeight, clientHeight } = scrollableContainer;
            const isAtTop = scrollTop === 0;
            const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10;
            
            if ((e.deltaY < -25 && isAtTop) || (e.deltaY > 25 && isAtBottom)) {
              if (!isScrolling) {
                if (e.deltaY > 25) {
                  goToPage('next');
                } else if (e.deltaY < -25) {
                  goToPage('prev');
                }
              }
            } else {
              scrollableContainer.scrollTop += e.deltaY * 0.8;
              return;
            }
          }
        } else {
          if (isScrolling) return;
          
          if (e.deltaY > 20 && currentSection < sections.length - 1) {
            const targetSection = currentSection + 1;
            const targetSectionData = sections[targetSection];
            goToPage('next');
            
            if (targetSectionData?.hasScrollableContent && (targetSectionData.id === 'oracle' || targetSectionData.id === 'three-pillars')) {
              setTimeout(() => centerSectionTitle(targetSection), 250);
            }
          } else if (e.deltaY < -20 && currentSection > 0) {
            const targetSection = currentSection - 1;
            const targetSectionData = sections[targetSection];
            goToPage('prev');
            
            if (targetSectionData?.hasScrollableContent && (targetSectionData.id === 'oracle' || targetSectionData.id === 'three-pillars')) {
              setTimeout(() => centerSectionTitle(targetSection), 250);
            }
          }
        }
      };

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
        
        if ((e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') && currentSection < sections.length - 1) {
          e.preventDefault();
          goToPage('next');
        } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && currentSection > 0) {
          e.preventDefault();
          goToPage('prev');
        }
      };

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

  useEffect(() => {
    if (!isScrolling) return;
    
    const timer = setTimeout(() => {
      setIsScrolling(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, [currentSection, isScrolling]);

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
      <Header onNavigateToSection={goToPage} />
      
      <div className="fixed right-4 sm:right-6 top-1/2 transform -translate-y-1/2 z-50 page-tracker">
        <div className="flex flex-col space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                goToPage(index);
              }}
              className={`page-tracker-dot rounded-full transition-all duration-300 ${
                index === currentSection
                  ? 'bg-blue-600'
                  : 'bg-slate-400/40 hover:bg-slate-400/60'
              }`}
              style={{
                width: index === currentSection ? '8px' : '6px',
                height: index === currentSection ? '8px' : '6px',
                minWidth: '6px',
                minHeight: '6px',
                maxWidth: '8px',
                maxHeight: '8px'
              }}
              title={`Go to ${section.title}`}
            />
          ))}
        </div>
      </div>


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
              {section.id === 'footer' ? (
                <Footer onNavigateToSection={goToPage} />
              ) : (
                <Component />
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
