'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface IntroAnimationProps {
  onComplete: () => void;
}

export default function IntroAnimation({ onComplete }: IntroAnimationProps) {
  const [phase, setPhase] = useState<'logo' | 'tagline' | 'complete'>('logo');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase('tagline'), 1000); // Show tagline after 1s
    const timer2 = setTimeout(() => {
      setPhase('complete');
      setIsVisible(false);
      setTimeout(onComplete, 500); // Quick transition to website
    }, 3000); // Total intro time: 3s (1s for logo, 2s for tagline)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Simple background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main Logo Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* Logo */}
        <div className={`transition-all duration-1000 mb-8 ${
          phase === 'complete' ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
        }`}>
          <div className="relative h-16 w-64 sm:h-20 sm:w-72 md:h-24 md:w-80 mx-auto">
            <Image
              src="/solas-logo.png"
              alt="Solas logo"
              fill
              priority
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Tagline */}
        <div className={`transition-all duration-1000 ${
          phase === 'tagline' || phase === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 text-center bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent px-4">
            AI-Powered Compliance Intelligence
          </h1>
        </div>
      </div>


    </div>
  );
}
