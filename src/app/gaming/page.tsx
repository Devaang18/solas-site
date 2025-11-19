'use client';

import { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import PrivacyModal from '@/components/PrivacyModal';
import TermsModal from '@/components/TermsModal';
import Reveal from '@/components/Reveal';
import { ShieldCheck, AlertTriangle, Globe2, Eye, FileText, Target, Scale, Radar, Search, Activity, Brain, Zap, Network, CheckCircle2, Sparkles, Upload, CheckCircle, MapPin, RotateCw } from 'lucide-react';

type GamingSection = {
  id: string;
  title: string;
  content: React.ReactNode;
  subtitle?: string;
};

// Agentic Process Section Component
function AgenticProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Sequential animation sequence
  const startSequence = useCallback(() => {
    if (prefersReducedMotion) return;
    
    const steps = [0, 1, 2, 3, 4];
    steps.forEach((step, index) => {
      setTimeout(() => {
        setActiveStep(step);
        if (step === 4) {
          setTimeout(() => setShowResults(true), 600);
        }
      }, index * 1200);
    });
  }, [prefersReducedMotion]);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          if (!prefersReducedMotion) {
            startSequence();
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible, prefersReducedMotion, startSequence]);

  const steps = [
    { 
      icon: Upload, 
      title: 'Document Upload', 
      description: 'Marketing asset submitted',
      color: 'cyan',
      microAnimation: 'upload'
    },
    { 
      icon: MapPin, 
      title: 'Jurisdiction Checks', 
      description: 'Rules applied per market',
      color: 'amber',
      microAnimation: 'map'
    },
    { 
      icon: Brain, 
      title: 'Specialist Agents', 
      description: 'Each inspects a compliance angle',
      color: 'purple',
      microAnimation: 'brain'
    },
    { 
      icon: Network, 
      title: 'Multi-step Review', 
      description: 'Cross-checks and reasoning across policies',
      color: 'emerald',
      microAnimation: 'network'
    },
    { 
      icon: CheckCircle2, 
      title: 'Results', 
      description: 'Clear, traceable compliance report',
      color: 'green',
      microAnimation: 'check'
    }
  ];

  return (
    <div ref={sectionRef} className="relative w-full max-w-7xl mx-auto mt-8">
      {/* Headline and Subhead with entrance animation */}
      <div 
        className={`text-center mb-12 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2.5'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Multi-Agent Compliance Engine
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-4xl md:max-w-5xl mx-auto">
          Experience the power of autonomous AI agents that intelligently analyse your marketing documents through multi-step reasoning, ensuring comprehensive compliance across all jurisdictions.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Progress Bar */}
        <div className="hidden md:block absolute -top-8 left-0 right-0 h-1 bg-slate-700/50 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-400 via-purple-400 via-emerald-400 via-amber-400 to-green-400 transition-all duration-300 ease-out"
            style={{ 
              width: prefersReducedMotion ? '100%' : `${(activeStep / 4) * 100}%`,
              transition: prefersReducedMotion ? 'none' : 'width 0.6s ease-out'
            }}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-stretch relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep >= index;
            const isCurrent = activeStep === index;
            const colorClasses = {
              cyan: { bg: 'from-cyan-400 to-blue-500', border: 'border-cyan-400/50', glow: 'rgba(6,182,212,0.3)' },
              purple: { bg: 'from-purple-400 to-indigo-500', border: 'border-purple-400/50', glow: 'rgba(168,85,247,0.3)' },
              emerald: { bg: 'from-emerald-400 to-teal-500', border: 'border-emerald-400/50', glow: 'rgba(16,185,129,0.3)' },
              amber: { bg: 'from-amber-400 to-orange-500', border: 'border-amber-400/50', glow: 'rgba(251,191,36,0.3)' },
              green: { bg: 'from-green-400 to-emerald-500', border: 'border-green-400/50', glow: 'rgba(34,197,94,0.3)' }
            };
            const colors = colorClasses[step.color as keyof typeof colorClasses];

            return (
              <div key={index} className="relative">
                {/* Vertical connector for mobile (after each card except last) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-slate-600/50 z-0">
                    {isActive && (
                      <div 
                        className="absolute top-0 left-0 w-full bg-gradient-to-b transition-all duration-600"
                        style={{
                          background: `linear-gradient(to bottom, ${
                            step.color === 'cyan' ? '#22d3ee' : 
                            step.color === 'purple' ? '#a855f7' : 
                            step.color === 'emerald' ? '#10b981' : 
                            step.color === 'amber' ? '#fbbf24' : '#22c55e'
                          }, ${
                            steps[index + 1]?.color === 'purple' ? '#a855f7' : 
                            steps[index + 1]?.color === 'emerald' ? '#10b981' : 
                            steps[index + 1]?.color === 'amber' ? '#fbbf24' : 
                            steps[index + 1]?.color === 'green' ? '#22c55e' : '#22d3ee'
                          })`,
                          height: prefersReducedMotion ? '100%' : '100%',
                          transition: prefersReducedMotion ? 'none' : 'height 0.6s ease-out'
                        }}
                      />
                    )}
                  </div>
                )}

                {/* SVG Connector Line (between cards for desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full z-0" style={{ width: 'calc(100% + 1.5rem)', height: '2px' }}>
                    <svg className="w-full h-full" viewBox="0 0 100 2" preserveAspectRatio="none">
                      <line
                        x1="0"
                        y1="1"
                        x2="100"
                        y2="1"
                        stroke={isActive ? `url(#gradient-${step.color}-${index})` : '#475569'}
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        strokeLinecap="round"
                        style={{
                          strokeDashoffset: isActive ? 0 : 100,
                          transition: prefersReducedMotion ? 'none' : 'stroke-dashoffset 0.6s ease-out'
                        }}
                      />
                      <defs>
                        <linearGradient id={`gradient-${step.color}-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={step.color === 'cyan' ? '#22d3ee' : step.color === 'purple' ? '#a855f7' : step.color === 'emerald' ? '#10b981' : step.color === 'amber' ? '#fbbf24' : '#22c55e'} />
                          <stop offset="100%" stopColor={steps[index + 1]?.color === 'purple' ? '#a855f7' : steps[index + 1]?.color === 'emerald' ? '#10b981' : steps[index + 1]?.color === 'amber' ? '#fbbf24' : steps[index + 1]?.color === 'green' ? '#22c55e' : '#22d3ee'} />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Animated dot on connector */}
                    {isCurrent && !prefersReducedMotion && (
                      <div 
                        className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full animate-pulse"
                        style={{
                          left: '50%',
                          backgroundColor: step.color === 'cyan' ? '#22d3ee' : step.color === 'purple' ? '#a855f7' : step.color === 'emerald' ? '#10b981' : step.color === 'amber' ? '#fbbf24' : '#22c55e',
                          animation: prefersReducedMotion ? 'none' : 'pulse 1s ease-in-out infinite'
                        }}
                      />
                    )}
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative bg-white border border-slate-200 rounded-xl p-6 shadow-lg transition-all duration-300 h-full flex flex-col group ${
                    isCurrent ? 'ring-2 ring-offset-2 ring-offset-slate-900' : ''
                  }`}
                  style={{
                    transform: isCurrent && !prefersReducedMotion ? 'scale(1.02)' : 'scale(1)',
                    boxShadow: isCurrent ? `0 0 20px ${colors.glow}` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                    transition: prefersReducedMotion ? 'none' : 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!prefersReducedMotion) {
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!prefersReducedMotion) {
                      e.currentTarget.style.transform = isCurrent ? 'scale(1.02)' : 'translateY(0)';
                      e.currentTarget.style.boxShadow = isCurrent ? `0 0 20px ${colors.glow}` : '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                  role="article"
                  aria-label={`Step ${index + 1}: ${step.title}`}
                  tabIndex={0}
                >
                  {/* Active Glow Ring */}
                  {isCurrent && !prefersReducedMotion && (
                    <div 
                      className="absolute inset-0 rounded-xl border-2 pointer-events-none"
                      style={{
                        borderColor: step.color === 'cyan' ? '#06b6d4' : step.color === 'purple' ? '#a855f7' : step.color === 'emerald' ? '#10b981' : step.color === 'amber' ? '#fbbf24' : '#22c55e',
                        animation: 'pulse 2s ease-in-out infinite'
                      }}
                    />
                  )}

                  {/* Icon Container */}
                  <div className="relative mb-4 flex justify-center">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg relative`}>
                      <Icon className="w-8 h-8 text-white" />
                      
                      {/* Micro-animations */}
                      {isCurrent && !prefersReducedMotion && (
                        <>
                          {step.microAnimation === 'upload' && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                          )}
                          {step.microAnimation === 'brain' && (
                            <Sparkles className="absolute -top-2 -right-2 w-5 h-5 text-purple-400 animate-pulse" />
                          )}
                          {step.microAnimation === 'network' && (
                            <div className="absolute inset-0 rounded-xl border-2 border-emerald-400/30 animate-ping" />
                          )}
                          {step.microAnimation === 'map' && (
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-amber-400/50 rounded-full animate-pulse" />
                          )}
                          {step.microAnimation === 'check' && (
                            <div className="absolute inset-0 rounded-xl bg-green-400/20 animate-ping" />
                          )}
                        </>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h4 className="text-base font-bold text-slate-900 mb-2 text-center">
                    {step.title}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-slate-600 text-center flex-grow">
                    {step.description}
                  </p>

                  {/* Results Summary Panel (only on last card) */}
                  {index === 4 && showResults && (
                    <div 
                      className="mt-4 pt-4 border-t border-slate-200"
                      style={{
                        animation: prefersReducedMotion ? 'none' : 'slide-up 0.4s ease-out'
                      }}
                    >
                      <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold">
                          4 issues found
                        </span>
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
                        <div className="flex items-center gap-1">
                          <AlertTriangle className="w-4 h-4 text-red-500" />
                          <span className="text-xs text-slate-600">1 critical</span>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          <AlertTriangle className="w-4 h-4 text-amber-500" />
                          <span className="text-xs text-slate-600">2 medium</span>
                        </div>
                        <div className="flex items-center gap-1 ml-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-500" />
                          <span className="text-xs text-slate-600">1 low</span>
                        </div>
                      </div>
                      <button 
                        className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                        onClick={() => {/* Handle view report */}}
                      >
                        View report
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Replay Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => {
            setActiveStep(0);
            setShowResults(false);
            if (!prefersReducedMotion) {
              setTimeout(() => startSequence(), 100);
            }
          }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors"
          aria-label="Replay demo animation"
        >
          <RotateCw className="w-4 h-4" />
          Replay
        </button>
      </div>
    </div>
  );
}

function SectionContainer({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="w-full section-alt-1 relative overflow-hidden gaming-bg" style={{ minHeight: '100vh' }}>
      {/* Dark background overlay specific to gaming page */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 gaming-section-overlay pointer-events-none" />
      {/* Ensure moving line animation layer exists on every section */}
      <div className="gaming-lines" />
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 relative z-10">
        {title && (
          <div className="text-center mb-6 sm:mb-8 md:mb-10 section-title-offset">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight leading-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-slate-300 text-base sm:text-lg max-w-4xl md:max-w-5xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="prose max-w-none text-slate-200">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function GamingPage() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  // Keep the same section IDs so the existing Header navigation works unchanged
  const sections = useMemo<GamingSection[]>(() => [
    { id: 'hero', title: 'Gaming Marketing Compliance', content: null },
    { id: 'benefits', title: 'Why Gaming needs Solas', subtitle: 'Gaming advertising is tightly regulated and fast-moving. Solas brings structure, speed, and auditability in one place.', content: (
      <>
        

        {/* Gaming advertising faces strict rules */}
        <h3 className="text-xl font-semibold text-white mt-10">Gaming advertising faces strict rules, such as:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6">
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 border border-teal-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <FileText className="w-8 h-8 text-teal-600" />
            </div>
            <h4 className="font-semibold text-slate-900 text-lg sm:text-xl mb-3 whitespace-nowrap">
              Required Disclaimers
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
            Mandatory responsible gambling disclaimers across all creative assets.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 border border-indigo-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Target className="w-8 h-8 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-slate-900 text-lg sm:text-xl mb-3 whitespace-nowrap">
              Ethical Targeting
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
            Restrictions on targeting minors and vulnerable audiences, and rules against implying gambling solves financial issues or guarantees winnings.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 border border-teal-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Globe2 className="w-8 h-8 text-teal-600" />
            </div>
            <h4 className="font-semibold text-slate-900 text-lg sm:text-xl mb-3 whitespace-nowrap">
              Track Regulations
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
            Constantly evolving, region-specific guidelines (UK, EU, US, Australia, Brazil) governing content, disclosures, and placement.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <h4 className="font-semibold text-slate-900 text-lg sm:text-xl mb-3 whitespace-nowrap">
              Reduce Brand Risk
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
            Rising enforcement and brand risk tied to even small compliance breaches.
            </p>
          </div>
        </div>
      </>
    )},
    
    { id: 'how-it-works', title: '', subtitle: '', content: (
      <AgenticProcessSection />
    )},
    
    { id: 'faq', title: 'Key Use Cases', subtitle: 'Solas Compliance helps gaming operators navigate complex regulations effortlessly by automating compliance checks across jurisdictions, reducing risk, avoiding fines, and keeping marketing campaigns safe and scalable.', content: (
      <>
        {/* 2x2 grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mt-4">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:bg-slate-50 transition-all duration-300 flex flex-col shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-emerald-100 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                <Search className="w-7 h-7 md:w-8 md:h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide">
                Regulatory Breach Detection
              </h3>
            </div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Scans ads, emails, video, landing pages, and social assets to flag missing or incorrect disclaimers before campaigns go live.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:bg-slate-50 transition-all duration-300 flex flex-col shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-sky-100 border border-sky-200 flex items-center justify-center flex-shrink-0">
                <Scale className="w-7 h-7 md:w-8 md:h-8 text-sky-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide">
                Jurisdictional Rules Engine
              </h3>
            </div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Applies market-specific advertising rules so teams can confidently tailor campaigns for the UK, US, EU, LATAM, and Asia without manual tracking.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:bg-slate-50 transition-all duration-300 flex flex-col shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-indigo-100 border border-indigo-200 flex items-center justify-center flex-shrink-0">
                <Radar className="w-7 h-7 md:w-8 md:h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide">
                Real-Time Compliance Monitoring
              </h3>
            </div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Provides continuous oversight for fast-moving campaigns, surfacing risks instantly so issues are fixed before they escalate.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 hover:bg-slate-50 transition-all duration-300 flex flex-col shadow-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-amber-100 border border-amber-200 flex items-center justify-center flex-shrink-0">
                <Activity className="w-7 h-7 md:w-8 md:h-8 text-amber-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 tracking-wide">
                Audit-Ready Compliance Reporting
              </h3>
            </div>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Generates reusable evidence packs documenting all responsible marketing steps, saving teams time during regulatory reviews.
            </p>
          </div>
        </div>
      </>
    )},
    { id: 'oracle', title: 'The Solas Advantage', subtitle: 'Solas gives operators speed, market access, and regulatory confidence, reducing bottlenecks, avoiding fines, and making responsible messaging effortless.', content: (
      <>
        <div className="flex flex-col gap-4 mt-4 max-w-lg mx-auto">
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl px-4 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 border border-teal-200 flex items-center justify-center flex-shrink-0 hover-glow animate-float">
                <ShieldCheck className="w-8 h-8 text-teal-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 whitespace-nowrap mb-3">
                  Built for Gaming
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A dedicated solution for gaming advertising and marketing compliance.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl px-4 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 border border-sky-200 flex items-center justify-center flex-shrink-0 hover-glow animate-float">
                <Globe2 className="w-8 h-8 text-sky-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 whitespace-nowrap mb-3">
                Global Coverage with Local Precision
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                AI and rule-based logic that show exactly how to adapt messaging for each regulator.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl px-4 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift flex flex-col">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200 flex items-center justify-center flex-shrink-0 hover-glow animate-float">
                <AlertTriangle className="w-8 h-8 text-amber-600" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-lg sm:text-xl font-semibold text-slate-900 whitespace-nowrap mb-3">
                Speed and Scale
                </h4>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Replaces manual reviews with intelligent automation so compliance and marketing teams can focus on growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )},
  ], []);

  const goToPage = useCallback((direction: number) => {
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
  }, [sections]);

  return (
    <main className="relative gaming-theme">
      <Header
        onNavigateToSection={goToPage}
        onOpenDemo={() => setShowDemoModal(true)}
        sectionOrder={['benefits','how-it-works','faq','oracle']}
        labels={{
          'benefits': 'Why Gaming needs Solas',
          'how-it-works': 'Multi-Agent Compliance Engine',
          'faq': 'Key Use Cases',
          'oracle': 'The Solas Advantage'
        }}
        hiddenSections={['industries','three-pillars']}
        theme="dark"
        logoSrc="/solas-logo-white.png"
      />

      {sections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          ref={(el) => { sectionRefs.current[index] = el; }}
          className="w-full section-alt-1 relative overflow-hidden"
          style={{ minHeight: '100vh' }}
        >
          {section.id === 'hero' ? (
            <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden gaming-bg py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
              {/* Dark hero overlay to match gaming theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 pointer-events-none" />
              <div className="container-fluid-2xl mx-auto p-fluid-lg text-center relative z-10">
                <div style={{ paddingTop: 'var(--section-title-padding-top)' }}>
                  <Reveal>
                    <h1 className="text-fluid-7xl font-bold mb-6 tracking-tight text-white drop-shadow-lg leading-tight">
                      Gaming Marketing Compliance
                    </h1>
                    <h2 className="text-fluid-5xl font-semibold text-slate-200 mb-8 animate-slide-down leading-tight">
                      Built for Speed, Accuracy, and Trust
                    </h2>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <p className="text-fluid-2xl text-slate-300 mb-12 container-fluid-lg mx-auto animate-slide-up leading-relaxed">
                    Solas Compliance makes gaming marketing safer, faster, and more scalable by using specialized agentic systems that understand your guidelines and policies and automatically detect regulatory requirements across global jurisdictions. This helps operators stay ahead of shifting rules while reducing brand risk and costly fines.
                    </p>
                  </Reveal>
                  <Reveal delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center animate-zoom-in">
                      <button
                        onClick={() => setShowDemoModal(true)}
                        className="inline-flex items-center justify-center text-center bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-lg font-semibold shadow-sm text-base sm:text-lg mx-auto"
                        style={{ width: 'fit-content' }}
                      >
                        Request Demo
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center" style={{ width: 'clamp(1.5rem, 4vw, 2rem)', height: 'clamp(2.5rem, 6vw, 3rem)' }}>
                  <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" style={{ width: 'clamp(0.25rem, 1vw, 0.5rem)', height: 'clamp(0.75rem, 2vw, 1rem)', marginTop: 'clamp(0.5rem, 1vw, 1rem)' }}></div>
                </div>
              </div>
            </div>
          ) : (
            <SectionContainer title={section.title} subtitle={section.subtitle}>
              {section.content}
            </SectionContainer>
          )}
        </section>
      ))}

      <Footer
        onNavigateToSection={goToPage}
        onOpenPrivacy={() => setShowPrivacyModal(true)}
        onOpenTerms={() => setShowTermsModal(true)}
        onOpenDemo={() => setShowDemoModal(true)}
        ctaSubtitle="With Solas, gaming operators gain speed, market access, and regulatory confidence, reducing compliance bottlenecks, avoiding costly fines, and building safer player relationships by making responsible messaging effortless and automatic."
      />

      <DemoModal isOpen={showDemoModal} onClose={() => setShowDemoModal(false)} />
      <PrivacyModal isOpen={showPrivacyModal} onClose={() => setShowPrivacyModal(false)} />
      <TermsModal isOpen={showTermsModal} onClose={() => setShowTermsModal(false)} />
    </main>
  );
}


