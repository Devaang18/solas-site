import { Upload, Search, MessageSquare, Rocket } from 'lucide-react';

export default function HowItWorks() {
  // Floating particles positions for animated background - How It Works section
  const particlePositions = [
    { left: 8, top: 18, delay: 0.6, duration: 4.8 },
    { left: 28, top: 58, delay: 2.2, duration: 6.6 },
    { left: 68, top: 28, delay: 3.5, duration: 5.3 },
    { left: 88, top: 68, delay: 0.9, duration: 7.5 },
    { left: 18, top: 78, delay: 2.7, duration: 5.9 },
    { left: 58, top: 12, delay: 1.5, duration: 6.7 },
    { left: 38, top: 82, delay: 2.4, duration: 5.6 },
    { left: 78, top: 42, delay: 4.3, duration: 4.9 },
    { left: 12, top: 52, delay: 1.0, duration: 6.4 },
    { left: 72, top: 22, delay: 2.9, duration: 5.2 },
    { left: 32, top: 72, delay: 3.8, duration: 4.6 },
    { left: 82, top: 62, delay: 1.9, duration: 6.8 },
    { left: 22, top: 32, delay: 3.0, duration: 5.5 },
    { left: 62, top: 82, delay: 4.6, duration: 4.4 },
    { left: 48, top: 8, delay: 1.3, duration: 7.3 }
  ];

  const steps = [
    {
      step: "1",
      title: "Upload Content",
      description: "Submit images, videos, emails, audio, landing pages, and more.",
      colorClasses: "bg-cyan-50 text-cyan-600 border-cyan-200",
      icon: Upload
    },
    {
      step: "2",
      title: "Smart Checks",
      description: "We reference that content against industry and internal policies to flag any potential legal or compliance issues.",
      colorClasses: "bg-emerald-50 text-emerald-600 border-emerald-200",
      icon: Search
    },
    {
      step: "3",
      title: "Clear Actionable Feedback",
      description: "We suggest a fix and provide a smart workflow to manage your changes in one place, creating an auditable trail.",
      colorClasses: "bg-indigo-50 text-indigo-600 border-indigo-200",
      icon: MessageSquare
    },
    {
      step: "4",
      title: "Publish with Confidence",
      description: "Launch campaigns and publish content in the confidence that you are compliant.",
      colorClasses: "bg-amber-50 text-amber-600 border-amber-200",
      icon: Rocket
    }
  ];

  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 relative overflow-hidden matrix-bg py-16">
      {/* Floating particles */}
      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
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
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Solas Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple, powerful checks from upload to approval in minutes, not days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-slate-300 transform translate-x-4 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-lg p-6 shadow-sm border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover-lift h-full flex flex-col">
                <div className={`flex items-center justify-center w-12 h-12 rounded-lg border mx-auto mb-4 hover-glow animate-bounce-subtle ${
                  index === 0 ? 'bg-gradient-to-br from-cyan-100 to-cyan-200 border-cyan-200' :
                  index === 1 ? 'bg-gradient-to-br from-emerald-100 to-emerald-200 border-emerald-200' :
                  index === 2 ? 'bg-gradient-to-br from-indigo-100 to-indigo-200 border-indigo-200' :
                  'bg-gradient-to-br from-amber-100 to-amber-200 border-amber-200'
                }`}>
                  <step.icon className={`w-6 h-6 ${index === 0 ? 'text-cyan-600' : index === 1 ? 'text-emerald-600' : index === 2 ? 'text-indigo-600' : 'text-amber-600'}`} />
                </div>
                <div className="text-center flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-grow">
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
              See Solas in Action
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
    </div>
  );
}
