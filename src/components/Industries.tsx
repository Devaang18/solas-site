import Link from 'next/link';

export default function Industries() {
  return (
    <section id="industries" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Built for your industry</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Configured to your brand policies and workflows—across regulated and high‑growth sectors.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Consumer Promotions</h3>
            <p className="text-slate-600 mb-4">Help ensure ads and offers are clear, fair and not misleading—surface significant terms and avoid risky wording.</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Promotions: significant terms visibility</li>
              <li>• Age‑gating and audience suitability</li>
              <li>• Claims: no undue pressure or guarantees</li>
            </ul>
          </div>

          <div className="card card-hover p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Performance Marketing</h3>
            <p className="text-slate-600 mb-4">Standardise checks across landing pages, ads, and emails—keep speed and protect conversion.</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Claims and incentives review</li>
              <li>• Cross‑channel consistency</li>
              <li>• Clear, fair and non‑misleading</li>
            </ul>
          </div>

          <div className="card card-hover p-8">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏛️</span>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Regulated Brands</h3>
            <p className="text-slate-600 mb-4">From finance to health—supporting teams that move fast while meeting sector rules and internal policies.</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Internal policy mapping</li>
              <li>• Audit‑ready logs</li>
              <li>• Approvals and handoffs</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="#get-started" className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-700">Talk to us about your use case</Link>
        </div>
      </div>
    </section>
  );
}
