import Reveal from '@/components/Reveal';

export default function USP() {
  const features = [
    {
      title: 'Compliance Engine Aligned with Your Policy',
      description: 'Solas is purpose-built for compliance, not just a generic chatbot. It is designed to deeply reflect industry regulations, company policies, and sector-specific guidance, giving teams assurance that every recommendation is aligned with the rules that apply.',
      icon: '🎯'
    },
    {
      title: 'Transparent and Explainable Decisions',
      description: 'Every compliance decision is explained with clear, traceable reasoning, including references back to original policy documents and regulatory sources. Teams get source-linked explanations so they know exactly why and how each outcome was determined, supporting review and audit.',
      icon: '🔍'
    },
    {
      title: 'Privacy, Security, and Full Audit Trail',
      description: 'Solas is secure and auditable by design, handling sensitive data according to best-in-class privacy practices with detailed audit logs for every action. This ensures every step is recorded and verifiable, making Solas suitable for regulated industries and internal governance needs.',
      icon: '🔒'
    },
    {
      title: 'Fast, Scalable Content Review',
      description: 'Solas delivers high-speed, automated compliance checks for marketing campaigns, from single pieces to enterprise-scale campaign rollouts, without sacrificing accuracy or quality. Automated workflows, real-time monitoring, and centralised content review ensure fast feedback and scalable operations.',
      icon: '⚡'
    },
    {
      title: 'Centralised Collaboration and Integration',
      description: 'The platform provides a centralised system for cross-team collaboration, approvals, and communication between compliance, legal, and marketing teams. Solas integrates with your existing tools and processes, streamlining reviews and helping teams work faster together.',
      icon: '🤝'
    }
  ];

  return (
    <section id="why-solas" className="py-16 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Features</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Accuracy, transparency and trust without exposing how we do it.</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {features.map((feature, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="card card-hover p-8 hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0 border border-slate-200 hover-glow animate-float">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
