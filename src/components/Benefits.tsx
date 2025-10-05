import { Shield, Zap, Clipboard } from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function Benefits() {
  const particlePositions = [
    { left: 5, top: 15, delay: 0.2, duration: 5.2 },
    { left: 25, top: 55, delay: 1.8, duration: 6.8 },
    { left: 65, top: 25, delay: 3.1, duration: 4.9 },
    { left: 85, top: 75, delay: 0.5, duration: 7.3 },
    { left: 15, top: 85, delay: 2.9, duration: 5.6 },
    { left: 55, top: 10, delay: 1.3, duration: 6.5 },
    { left: 35, top: 90, delay: 2.2, duration: 5.8 },
    { left: 75, top: 40, delay: 4.1, duration: 4.7 },
    { left: 10, top: 50, delay: 0.8, duration: 6.2 },
    { left: 70, top: 20, delay: 2.5, duration: 5.4 },
    { left: 30, top: 70, delay: 3.6, duration: 4.8 },
    { left: 80, top: 60, delay: 1.7, duration: 6.9 },
    { left: 20, top: 30, delay: 2.8, duration: 5.3 },
    { left: 60, top: 80, delay: 4.4, duration: 4.6 },
    { left: 45, top: 5, delay: 1.1, duration: 7.1 }
  ];

  const benefits = [
    {
      title: "Reduce Regulatory Risk",
      description: "Consistent, real-time compliance checks ensure your content meets regulatory standards before publication.",
      colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-200",
      icon: Shield
    },
    {
      title: "Save Time",
      description: "Clear, actionable suggestions help your team move fast without compromising on compliance.",
      colorClasses: "bg-cyan-50 text-cyan-600 border-cyan-200",
      icon: Zap
    },
    {
      title: "Maintain Audit Trail",
      description: "Complete documentation for regulators, showing your responsible marketing practices.",
      colorClasses: "bg-indigo-50 text-indigo-600 border-indigo-200",
      icon: Clipboard
    }
  ];

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 relative overflow-hidden matrix-bg py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
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
        ))}
      </div>
      
      <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative w-full z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14" style={{ paddingTop: 'var(--section-title-padding-top-benefits)' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">
            Why Solas
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">
            Built for regulated and high-growth brands to keep quality high without slowing launches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
            <div className="card card-hover text-center p-4 sm:p-6 md:p-8 transition-all duration-300 hover-lift h-full flex flex-col">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border hover-glow animate-float ${
                index === 0 ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-200' :
                index === 1 ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-200' :
                'bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-200'
              }`}>
                <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${index === 0 ? 'text-green-600' : index === 1 ? 'text-cyan-600' : 'text-indigo-600'}`} />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-slate-900 mb-3 sm:mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed flex-grow">
                {benefit.description}
              </p>
            </div>
            </Reveal>
          ))}
        </div>

        
      </div>
    </div>
  );
}
