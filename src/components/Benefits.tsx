import Reveal from '@/components/Reveal';

export default function Benefits() {
  const benefits = [
    {
      title: "Reduce Regulatory Risk",
      description: "Consistent, real-time compliance checks ensure your content meets regulatory standards before publication.",
      colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-200",
      icon: "🛡️"
    },
    {
      title: "Save Time",
      description: "Clear, actionable suggestions help your team move fast without compromising on compliance.",
      colorClasses: "bg-cyan-50 text-cyan-600 border-cyan-200",
      icon: "⚡"
    },
    {
      title: "Maintain Audit Trail",
      description: "Complete documentation for regulators, showing your responsible marketing practices.",
      colorClasses: "bg-indigo-50 text-indigo-600 border-indigo-200",
      icon: "📋"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Why Solas
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Built for regulated and high‑growth brands—keep quality high without slowing launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
            <div className="card card-hover text-center p-8 transition-all duration-300 hover-lift h-full flex flex-col">
              <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-6 border border-slate-200 hover-glow animate-float">
                <span className="text-3xl">{benefit.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed flex-grow">
                {benefit.description}
              </p>
            </div>
            </Reveal>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 card p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">99.9%</div>
              <div className="text-slate-600">Accuracy in compliance detection</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">75%</div>
              <div className="text-slate-600">Faster content approval process</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">$2M+</div>
              <div className="text-slate-600">Average compliance cost savings</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
