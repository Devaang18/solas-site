import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden matrix-bg py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
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
              className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-slate-300/30 rounded-full floating-element"
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

      <div className="container-fluid-2xl mx-auto p-fluid-lg text-center relative z-10">
        <div style={{ paddingTop: 'var(--section-title-padding-top)' }}>
          <Reveal>
            <h1 className="text-fluid-7xl font-bold mb-6 tracking-tight text-slate-900 drop-shadow-lg leading-tight">
              Real-time Marketing Compliance
            </h1>
            <h2 className="text-fluid-5xl font-semibold text-slate-700 mb-8 animate-slide-down leading-tight">
              Without the Friction
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-fluid-2xl text-slate-600 mb-12 container-fluid-lg mx-auto animate-slide-up leading-relaxed">
              Solas flags potential regulatory breaches in content before publication, helping compliance and marketing teams move fast without risking fines or brand damage.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-zoom-in">
              <button
                onClick={() => document.dispatchEvent(new CustomEvent('open-demo-modal'))}
                className="inline-flex items-center justify-center text-center text-white px-6 py-3 rounded-lg font-semibold shadow-sm text-base sm:text-lg mx-auto"
                style={{ backgroundColor: '#0f2440', width: 'fit-content' }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#06bcc1')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#0f2440')}
              >
                Request Demo
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center" style={{ width: 'clamp(1.5rem, 4vw, 2rem)', height: 'clamp(2.5rem, 6vw, 3rem)' }}>
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse" style={{ width: 'clamp(0.25rem, 1vw, 0.5rem)', height: 'clamp(0.75rem, 2vw, 1rem)', marginTop: 'clamp(0.5rem, 1vw, 1rem)' }}></div>
        </div>
      </div>
    </div>
  );
}
