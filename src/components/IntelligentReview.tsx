import Reveal from '@/components/Reveal';

export default function IntelligentReview() {
  const inputs = [
    'Industry Regulations',
    'Previous Campaigns',
    'Brand Guidelines',
    'Internal Policies',
    'Marketing Assets',
    'Jurisdictional Nuances'
  ];

  return (
    <section id="intelligent-review" className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Intelligent Marketing Review</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Solas creates a bespoke model by ingesting diverse data sources, combining regulatory intelligence with your unique context to deliver highly accurate marketing compliance reviews.</p>
        </div>

        <Reveal>
          <div className="card p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {inputs.map((item) => (
                <div key={item} className="p-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-sm text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
