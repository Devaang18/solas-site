import { Upload, Search, MessageSquare, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Content",
      description: "Submit images, videos, emails, audio, landing pages, and more.",
      bgColor: "from-blue-100 to-blue-200",
      borderColor: "border-blue-200",
      iconColor: "text-blue-600"
    },
    {
      icon: Search,
      title: "Smart Checks",
      description: "We reference that content against industry and internal policies to flag any potential legal or compliance issues.",
      bgColor: "from-green-100 to-green-200",
      borderColor: "border-green-200",
      iconColor: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Clear Actionable Feedback",
      description: "We suggest a fix and provide a smart workflow to manage your changes in one place, creating an auditable trail.",
      bgColor: "from-purple-100 to-purple-200",
      borderColor: "border-purple-200",
      iconColor: "text-purple-600"
    },
    {
      icon: Rocket,
      title: "Publish with Confidence",
      description: "Launch campaigns and publish content in the confidence that you are compliant.",
      bgColor: "from-yellow-100 to-yellow-200",
      borderColor: "border-yellow-200",
      iconColor: "text-yellow-600"
    }
  ];

  const particlePositions = [
    { left: 12, top: 18, delay: 0.8, duration: 6.2 },
    { left: 32, top: 68, delay: 2.1, duration: 7.4 },
    { left: 72, top: 28, delay: 3.7, duration: 5.8 },
    { left: 88, top: 78, delay: 1.4, duration: 8.1 },
    { left: 18, top: 88, delay: 2.9, duration: 6.7 },
    { left: 58, top: 8, delay: 1.8, duration: 7.9 },
    { left: 38, top: 82, delay: 2.6, duration: 6.3 },
    { left: 78, top: 42, delay: 4.2, duration: 5.5 },
    { left: 8, top: 52, delay: 1.1, duration: 7.2 },
    { left: 68, top: 72, delay: 3.3, duration: 6.9 }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-blue-50 relative overflow-hidden matrix-bg py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 content-offset-top-30">
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
        <div className="text-center mb-16" style={{ paddingTop: 'var(--section-title-padding-top)' }}>
          <h2 className="text-fluid-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
            How Solas Works
          </h2>
          <p className="text-fluid-2xl text-slate-600 container-fluid-lg mx-auto leading-relaxed">
            Simple, powerful checks from upload to approval in minutes, not days.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-fluid-lg shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-300 hover-lift h-full flex flex-col text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.bgColor} rounded-xl flex items-center justify-center mx-auto mb-6 border ${step.borderColor} hover-glow animate-float`}>
                  <step.icon className={`w-8 h-8 ${step.iconColor}`} />
                </div>
                <h3 className="text-fluid-2xl font-semibold text-slate-900 mb-4 leading-tight">
                  {step.title}
                </h3>
                <p className="text-fluid-lg text-slate-600 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
