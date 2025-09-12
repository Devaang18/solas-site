import Reveal from '@/components/Reveal';

export default function Benefits() {
  const benefits = [
    {
      title: "Reduce Regulatory Risk",
      description: "Real-time checks aligned to UKGC and ASA/CAP guidance help teams catch issues pre‑launch and protect brand trust.",
      colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-200",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-1 15l-4-4 1.414-1.414L11 13.172l5.586-5.586L18 9z" />
        </svg>
      )
    },
    {
      title: "Ship Campaigns Faster",
      description: "Clear, actionable suggestions reduce legal ping‑pong. Fix issues quickly and keep your momentum.",
      colorClasses: "bg-cyan-50 text-cyan-600 border-cyan-200",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14h-2v-4h2zm0-6h-2V8h2z" />
        </svg>
      )
    },
    {
      title: "Full Audit Readiness",
      description: "Clear pass/fail rationale with links to your policies provides transparency for internal review and regulators.",
      colorClasses: "bg-indigo-50 text-indigo-600 border-indigo-200",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path d="M6 2h9a2 2 0 012 2v3h1a2 2 0 012 2v11a2 2 0 01-2 2H8a2 2 0 01-2-2V17H5a1 1 0 01-1-1V4a2 2 0 012-2zm1 2v12h9V4z" />
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            Why teams choose Solas
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Built for regulated and high‑growth brands—keep quality high without slowing launches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Reveal key={index} delay={index * 0.1}>
            <div className="card card-hover text-center p-8 transition-all duration-300">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border ${benefit.colorClasses}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
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
