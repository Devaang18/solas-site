import Reveal from '@/components/Reveal';

export default function USP() {
  const items = [
    {
      title: 'Purpose‑built for compliance',
      description: 'Not a generic chatbot. A system designed to reflect your policies and sector guidance.'
    },
    {
      title: 'Transparent, explainable results',
      description: 'Every decision comes with clear reasoning and pointers back to your policy sources.'
    },
    {
      title: 'Secure and auditable by design',
      description: 'Privacy‑first handling with an audit trail your team can trust and verify.'
    },
    {
      title: 'Built for speed and scale',
      description: 'From a single campaign to enterprise roll‑outs—keeps quality high without slowing teams.'
    }
  ];

  return (
    <section id="why-solas" className="py-16 bg-slate-50 section section-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why teams choose Solas</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Accuracy, transparency and trust—without exposing how we do it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="card card-hover p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
