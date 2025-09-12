'use client';

import { useState, useEffect, useRef } from 'react';
import Reveal from '@/components/Reveal';

export default function Oracle() {
  const [isTyping, setIsTyping] = useState(false);
  const [showResponse, setShowResponse] = useState(false);
  const [policiesCount, setPoliciesCount] = useState(0);
  const [contentCount, setContentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start the chat animation sequence
          setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
              setShowResponse(true);
            }, 2000);
          }, 1000);
          
          // Animate counters
          animateCounter(setPoliciesCount, 247, 2000);
          animateCounter(setContentCount, 12400, 2500);
          
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
      // Simulate occasional content review updates
      if (Math.random() > 0.7) {
        setContentCount(prev => prev + Math.floor(Math.random() * 3) + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isActive]);

  const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(current));
      }
    }, 16);
  };

  const steps = [
    { icon: '📝', title: 'Train Your Oracle', desc: 'Upload your compliance policies, brand guidelines, and regulatory requirements. Solas learns your specific rules and becomes your personalized compliance expert.' },
    { icon: '👥', title: 'Team Ownership', desc: 'Your compliance team maintains control. Update policies, refine guidelines, and ensure Solas stays current with changing regulations.' },
    { icon: '⚡', title: 'Instant Guidance', desc: 'Marketing teams get immediate, actionable feedback. No more waiting for compliance reviews or guessing about regulatory requirements.' }
  ];

  return (
    <section ref={sectionRef} id="oracle" className="py-20 bg-gradient-to-br from-white to-emerald-50 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-emerald-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Meet your compliance oracle
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Train Solas with your policies and guidelines. Your team gets instant, personalized compliance guidance for every piece of content.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Interactive Chat Interface */}
          <Reveal>
            <div className="relative h-full flex flex-col">
              <div className="card p-0 overflow-hidden shadow-2xl border-0 bg-white hover-lift animate-scale-in h-full flex flex-col">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-teal-500 to-blue-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse animate-pulse-glow"></div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">Solas Oracle</h3>
                        <p className="text-sm text-white/80">Always learning, always compliant</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Live</span>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-6 space-y-4 flex-grow bg-slate-50 flex flex-col justify-between">
                  {/* User Message */}
                  <div className="flex justify-end animate-slide-in-right">
                    <div className="max-w-[80%] bg-white rounded-2xl rounded-br-md p-4 shadow-sm border">
                      <div className="text-sm text-slate-500 mb-1">now · Content Creator</div>
                      <div className="text-slate-800">
                        Review this email: &lsquo;Get rich quick with our trading platform! 90% win rate guaranteed!&rsquo;
                      </div>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  {isTyping && !showResponse && (
                    <div className="flex justify-start animate-slide-in-left">
                      <div className="bg-white rounded-2xl rounded-bl-md p-4 shadow-sm border">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Oracle Response */}
                  {showResponse && (
                    <div className="flex justify-start animate-slide-in-left">
                      <div className="max-w-[85%] bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl rounded-bl-md p-4 shadow-sm border border-rose-200">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center animate-pulse-glow">
                            <span className="text-rose-600 text-sm">🚫</span>
                          </div>
                          <div className="text-sm text-rose-600 font-semibold">HIGH RISK: Multiple violations detected</div>
                        </div>
                        
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start space-x-2 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">&lsquo;Get rich quick&rsquo; - prohibited language</span>
                          </div>
                          <div className="flex items-start space-x-2 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">&lsquo;90% guaranteed&rsquo; - unsubstantiated claims</span>
                          </div>
                          <div className="flex items-start space-x-2 animate-slide-in-left" style={{animationDelay: '0.3s'}}>
                            <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-slate-700">Missing risk warnings</span>
                          </div>
                        </div>

                        <div className="mt-4 p-3 bg-white/60 rounded-lg border border-emerald-200 animate-scale-in" style={{animationDelay: '0.4s'}}>
                          <div className="text-xs text-emerald-600 font-semibold mb-1">SUGGESTED REVISION:</div>
                          <div className="text-slate-700 text-sm">
                            &lsquo;Start trading with our platform. Risk warning: 76% of retail accounts lose money.&rsquo;
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats and Process Steps */}
          <Reveal delay={0.2}>
            <div className="space-y-8 h-full flex flex-col">
              {/* Live Stats - Integrated into chat interface */}
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center">
                        <span className="text-slate-600 text-lg">📚</span>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Policies Learned</div>
                        <div className="text-lg font-bold text-slate-900">
                          {policiesCount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center">
                        <span className="text-slate-600 text-lg">📊</span>
                      </div>
                      <div>
                        <div className="text-sm text-slate-500">Content Reviewed</div>
                        <div className="text-lg font-bold text-slate-900">
                          {contentCount >= 1000 ? `${(contentCount / 1000).toFixed(1)}K` : contentCount.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs text-slate-400">Live metrics</div>
                    {isActive && (
                      <div className="flex items-center space-x-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-xs text-green-600 font-medium">Processing</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Process Steps */}
              <div className="space-y-6 flex-grow">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-white/60 border border-slate-200 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
