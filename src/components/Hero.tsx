import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <div className="h-full w-full flex items-center justify-center relative overflow-hidden matrix-bg py-16 pt-24">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          // Use fixed positions to avoid hydration mismatch
          const positions = [
            { left: 15, top: 25, delay: 0.5, duration: 5.2 },
            { left: 35, top: 45, delay: 1.8, duration: 6.8 },
            { left: 55, top: 15, delay: 3.2, duration: 4.5 },
            { left: 75, top: 65, delay: 2.1, duration: 7.2 },
            { left: 25, top: 85, delay: 4.5, duration: 5.8 },
            { left: 85, top: 35, delay: 1.2, duration: 6.3 },
            { left: 45, top: 75, delay: 3.8, duration: 4.9 },
            { left: 65, top: 25, delay: 2.7, duration: 7.1 },
            { left: 95, top: 55, delay: 0.9, duration: 5.6 },
            { left: 5, top: 65, delay: 4.2, duration: 6.4 },
            { left: 15, top: 45, delay: 1.5, duration: 4.8 },
            { left: 85, top: 15, delay: 3.6, duration: 5.9 },
            { left: 35, top: 85, delay: 2.8, duration: 6.7 },
            { left: 75, top: 45, delay: 4.1, duration: 5.3 },
            { left: 55, top: 75, delay: 1.9, duration: 6.1 }
          ];
          const pos = positions[i] || { left: 50, top: 50, delay: 2, duration: 6 };
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/20 rounded-full floating-element"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Reveal>
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight text-slate-900 drop-shadow-lg">
            Real-time Marketing Compliance
          </h1>
          <h2 className="text-3xl md:text-5xl font-semibold text-slate-700 mb-8 animate-slide-down">
            Without the Friction
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto animate-slide-up">
            Solas flags potential regulatory breaches in content before publication, helping compliance and marketing teams move fast without risking fines or brand damage.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-zoom-in">
            <Link
              href="/demo"
              className="btn-primary text-xl px-8 py-4 shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Request Demo
            </Link>
            <Link
              href="#how-it-works"
              className="btn-outline text-xl px-8 py-4 hover:bg-slate-100 transition-all duration-300 transform hover:scale-105"
            >
              See How It Works
            </Link>
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
