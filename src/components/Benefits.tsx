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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden matrix-bg content-offset-top-30">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
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
        ))}
      </div>
      
      <div className="container-fluid-2xl mx-auto p-fluid-lg relative w-full z-10">
        <div className="text-center mb-14 section-title-offset">
          <h2 className="text-fluid-5xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
            Why Solas
          </h2>
          <p className="text-fluid-2xl text-slate-600 container-fluid-lg mx-auto leading-relaxed">
            Built for regulated and high-growth brands to keep quality high without slowing launches.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
            <div className="card card-hover text-center p-fluid-lg transition-all duration-300 hover-lift h-full flex flex-col">
              <div className={`rounded-xl flex items-center justify-center mx-auto mb-6 border hover-glow animate-float ${
                index === 0 ? 'bg-gradient-to-br from-green-100 to-green-200 border-green-200' :
                index === 1 ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-200' :
                'bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-200'
              }`} style={{ width: 'clamp(3rem, 6vw, 4rem)', height: 'clamp(3rem, 6vw, 4rem)' }}>
                <benefit.icon className={`${index === 0 ? 'text-green-600' : index === 1 ? 'text-cyan-600' : 'text-indigo-600'}`} style={{ width: 'clamp(1.5rem, 3vw, 2rem)', height: 'clamp(1.5rem, 3vw, 2rem)' }} />
              </div>
              <h3 className="text-fluid-2xl font-semibold text-slate-900 mb-4 leading-tight">
                {benefit.title}
              </h3>
              <p className="text-fluid-lg text-slate-600 leading-relaxed flex-grow">
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
