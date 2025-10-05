'use client';

import { useState, useEffect, useRef } from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Oracle() {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start the animation sequence
          setTimeout(() => {
            // Animation logic can be added here if needed
          }, 1000);
          
          
          // Start continuous activity simulation
          setIsActive(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Continuous activity simulation
  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);


  const complianceIssues = [
    {
      id: '#101',
      title: 'Brand Guidelines Compliance Rule',
      description: 'Brand logo placement violates minimum clearance space requirements.',
      policy: 'Brand Guidelines',
      severity: 'High',
      status: 'active'
    },
    {
      id: '#102',
      title: 'Copyright & Trademark Check',
      description: 'Potential trademark usage without proper licensing.',
      policy: 'Brand Guidelines',
      severity: 'High',
      status: 'active'
    },
    {
      id: '#103',
      title: 'Legal & Regulatory Review',
      description: 'Promotional content requires disclaimer text.',
      policy: 'Brand Guidelines',
      severity: 'Medium',
      status: 'active'
    },
    {
      id: '#104',
      title: 'Accessibility Requirements',
      description: 'Insufficient color contrast for text elements.',
      policy: 'Brand Guidelines',
      severity: 'Low',
      status: 'resolved'
    }
  ];


  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden matrix-bg py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => {
          const positions = [
            { left: 6, top: 16, delay: 0.7, duration: 5.3 },
            { left: 26, top: 62, delay: 2.3, duration: 6.7 },
            { left: 66, top: 26, delay: 3.9, duration: 5.0 },
            { left: 86, top: 72, delay: 1.5, duration: 7.6 },
            { left: 16, top: 82, delay: 2.8, duration: 5.7 },
            { left: 56, top: 9, delay: 1.9, duration: 6.9 },
            { left: 36, top: 79, delay: 2.7, duration: 5.8 },
            { left: 76, top: 39, delay: 4.7, duration: 4.6 },
            { left: 11, top: 49, delay: 1.3, duration: 6.4 },
            { left: 71, top: 22, delay: 3.4, duration: 5.1 },
            { left: 31, top: 69, delay: 4.2, duration: 4.9 },
            { left: 81, top: 59, delay: 2.1, duration: 6.6 }
          ];
          const pos = positions[i] || { left: 50, top: 50, delay: 2, duration: 6 };
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400/20 rounded-full floating-element"
              style={{
                left: `${pos.left}%`,
                top: `${pos.top}%`,
                animationDelay: `${pos.delay}s`,
                animationDuration: `${pos.duration}s`
              }}
            />
          );
        })}
      </div>
      
      <div className="scrollable-content h-full w-full overflow-y-auto scrollbar-hide">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative w-full py-8 sm:py-12 md:py-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16" style={{ paddingTop: 'var(--section-title-padding-top)' }}>
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-tight">
              Meet your Compliance Oracle
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
              Train Solas with your policies and guidelines. Your team gets instant, personalised compliance guidance for every piece of content.
            </p>
          </Reveal>
        </div>

        {/* Asset Details Screen */}
        <Reveal delay={0.1}>
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
            {/* Navigation Header */}
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-200">
              <div className="flex items-center space-x-2 text-sm text-slate-600">
                <span>Home</span>
                <span>&gt;</span>
                <span>Campaign</span>
                <span>&gt;</span>
                <span className="text-slate-900 font-medium">Asset</span>
              </div>
            </div>

            <div className="p-6">
              {/* Asset Details */}
              <div className="space-y-6">
                {/* Asset Header */}
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">Marketing Banner Campaign Compliance V1</h3>
                  <div className="flex space-x-3">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Edit Policies and re-run
                    </button>
                    <button className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">
                      Timeline
                    </button>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                      Pass to Compliance
                    </button>
                  </div>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-red-600 mb-1">3</div>
                    <div className="text-lg font-semibold text-red-600 mb-1">High</div>
                    <div className="text-xs text-red-500">Critical Issues</div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-1">1</div>
                    <div className="text-lg font-semibold text-yellow-600 mb-1">Medium</div>
                    <div className="text-xs text-yellow-500">Moderate Issues</div>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-green-600 mb-1">0</div>
                    <div className="text-lg font-semibold text-green-600 mb-1">Low</div>
                    <div className="text-xs text-green-500">Minor Suggestions</div>
                  </div>
                </div>

                {/* Risk Summary */}
                <div className="bg-slate-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-slate-900">Risk Summary</h4>
                    <span className="text-sm text-slate-500">4 items</span>
                  </div>
                  
                  <div className="space-y-3">
                    {complianceIssues.map((issue, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-slate-200 hover:shadow-md transition-all cursor-pointer"
                           onClick={() => {}}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-sm font-medium text-slate-900">{issue.title}</span>
                              <span className="text-xs text-slate-500">{issue.id}</span>
                            </div>
                            <p className="text-sm text-slate-600 mb-2">{issue.description}</p>
                            <div className="flex items-center space-x-4 text-xs text-slate-500">
                              <span>Policy Triggered: {issue.policy}</span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                issue.severity === 'High' ? 'bg-red-100 text-red-700' :
                                issue.severity === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                'bg-green-100 text-green-700'
                              }`}>
                                {issue.severity}
                              </span>
                            </div>
                          </div>
                          <div className="ml-4">
                            {issue.status === 'active' ? (
                              <AlertTriangle className="w-5 h-5 text-red-500" />
                            ) : (
                              <CheckCircle className="w-5 h-5 text-green-500" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        </div>
      </div>
    </div>
  );
}