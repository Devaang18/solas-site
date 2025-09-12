export default function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Upload Content",
      description: "Submit ads, landing pages, emails or scripts. Connect via web, plugins or API.",
      colorClasses: "bg-cyan-50 text-cyan-600 border-cyan-200",
      icon: "📤"
    },
    {
      step: "2",
      title: "Smart Checks",
      description: "Your policies and UK guidance are referenced to flag what matters most for that content.",
      colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-200",
      icon: "🔍"
    },
    {
      step: "3",
      title: "Clear Feedback",
      description: "Pass/fail with why, references to your policies, and suggestions to fix.",
      colorClasses: "bg-indigo-50 text-indigo-600 border-indigo-200",
      icon: "💬"
    },
    {
      step: "4",
      title: "Publish with Confidence",
      description: "Launch with an audit trail your team can stand behind—fast and safe.",
      colorClasses: "bg-amber-50 text-amber-600 border-amber-200",
      icon: "🚀"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Solas works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple, powerful checks from upload to approval—minutes, not days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-300 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover-lift">
                <div className="flex items-center justify-center w-12 h-12 bg-slate-800 text-white rounded-full text-lg font-bold mb-4 mx-auto animate-pulse-glow">
                  {step.step}
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center mx-auto mb-4 border border-slate-200 hover-glow animate-bounce-subtle">
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              See Solas in action
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Watch how compliance teams use Solas to catch regulatory issues 
              before they become costly problems.
            </p>
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors">
              Watch Demo Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
