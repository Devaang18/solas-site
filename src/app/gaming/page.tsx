'use client';

import { useState, useRef, useMemo, useCallback } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import PrivacyModal from '@/components/PrivacyModal';
import TermsModal from '@/components/TermsModal';
import Reveal from '@/components/Reveal';
import { ShieldCheck, AlertTriangle, Globe2, Eye, FileText, Target, Scale, Radar, Search, Activity } from 'lucide-react';

type GamingSection = {
  id: string;
  title: string;
  content: React.ReactNode;
  subtitle?: string;
};

function SectionContainer({ children, title, subtitle }: { children: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="w-full section-alt-1 relative overflow-hidden gaming-bg" style={{ minHeight: '100vh' }}>
      {/* Dark background overlay specific to gaming page */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 gaming-section-overlay pointer-events-none" />
      {/* Ensure moving line animation layer exists on every section */}
      <div className="gaming-lines" />
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-16 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 relative z-10">
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
              Mandatory inclusion of responsible gambling and risk disclaimers (e.g., &quot;gambleaware,&quot; &quot;gamble responsibly,&quot; regional taglines) in all campaign assets.
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
              Restrictions on targeting vulnerable audiences and minors. Ads must avoid portraying gambling as a solution to financial pressure or promising guaranteed winnings.
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
              Fast-changing regulatory guidelines with region-specific requirements (UK, EU, US, Australia, Brazil) on ad disclosure, content, and placement.
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
              Growing brand risk and regulatory fines tied to even minor breaches or missing disclosures on digital, video, social, and influencer campaigns.
            </p>
          </div>
        </div>
      </>
    )},
    
    { id: 'faq', title: 'Key Use Cases', subtitle: 'Solas Compliance makes marketing and advertising in the gaming industry safer, faster, and more scalable by automating the detection of regulatory requirements and compliance caveats across jurisdictions, helping operators stay ahead of ever-changing rules while minimising brand risk and costly fines.', content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 border border-emerald-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Search className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Caveat Detection
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              Scans digital assets (ads, banners, emails, video, landing pages, social media) before launch to identify missing or incorrect disclaimers, ensuring campaigns meet local legal requirements every time.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 border border-sky-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Scale className="w-8 h-8 text-sky-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Rules Engine
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              Maps and automates region-specific advertising restrictions, so teams can tailor messages for UK, US, EU, LATAM, and Asia markets without manual rule-tracking.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-indigo-200 border border-indigo-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Radar className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Live Monitoring
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              Provides always-on oversight for fast-moving campaigns, flagging risks instantly so brands fix issues before regulatory problems arise or ads go live.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Activity className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Audit Evidence
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              Creates reusable compliance reports documenting responsible advertising steps and regulatory adherence, saving critical team time and effort.
            </p>
          </div>
        </div>
      </>
    )},
    { id: 'oracle', title: 'The Solas Advantage', subtitle: 'Solas gives operators speed, market access, and regulatory confidence-reducing bottlenecks, avoiding fines, and making responsible messaging effortless.', content: (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 mt-4">
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-100 to-teal-200 border border-teal-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Purpose-Built for Gaming
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              A dedicated solution for gaming advertising and marketing compliance.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 border border-sky-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <Globe2 className="w-8 h-8 text-sky-600" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Global Standards, Local Precision
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              AI and rule-based logic that show exactly how to adapt messaging for each regulator.
            </p>
          </div>
          <div className="bg-white text-slate-900 border border-slate-200 rounded-2xl p-fluid-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-200 flex items-center justify-center mx-auto mb-6 hover-glow animate-float">
              <AlertTriangle className="w-8 h-8 text-amber-600" />
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 whitespace-nowrap">
              Operational Scale and Speed
            </h4>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed flex-grow">
              Replace manual reviews with intelligent automation so teams can focus on growth.
            </p>
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
        sectionOrder={['benefits','faq','oracle']}
        labels={{
          'benefits': 'Why Gaming needs Solas',
          'faq': 'Key Use Cases',
          'oracle': 'The Solas Advantage'
        }}
        hiddenSections={['industries','three-pillars','how-it-works']}
        theme="dark"
        logoSrc="/solas-logo-white.png"
        logoTagline="for Gaming"
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
                      Solas Compliance makes marketing and advertising in the gaming industry safer, faster, and more scalable by automating the detection of regulatory requirements and compliance caveats across jurisdictions, helping operators stay ahead of ever-changing rules while minimising brand risk and costly fines.
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


