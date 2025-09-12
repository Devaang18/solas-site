import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="section pt-24 pb-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h1 className="heading-gradient text-4xl md:text-6xl font-bold mb-3 tracking-tight">
              Real-time marketing compliance
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-6">without the friction</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Solas flags potential regulatory breaches in content before publication, helping compliance and marketing teams move fast without risking fines or brand damage.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="btn-primary text-lg shadow-md"
              >
                Request Demo
              </Link>
              <Link
                href="#how-it-works"
                className="btn-outline text-lg"
              >
                See How It Works
              </Link>
            </div>
          </Reveal>
        </div>

        {/* Hero Image/Visual */}
        <div className="mt-16 relative">
          <Reveal>
          <div className="card card-hover p-8 hover-lift animate-scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Content Review Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 animate-slide-in-left">
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center hover-glow">
                      <span className="text-slate-600 text-lg">✅</span>
                    </div>
                    <span className="text-slate-700">Compliance check passed</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-in-left" style={{animationDelay: '0.1s'}}>
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center hover-glow">
                      <span className="text-slate-600 text-lg">⚠️</span>
                    </div>
                    <span className="text-slate-700">Review required: promotional terms</span>
                  </div>
                  <div className="flex items-center space-x-3 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
                    <div className="w-8 h-8 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border border-slate-200 flex items-center justify-center hover-glow">
                      <span className="text-slate-600 text-lg">🚫</span>
                    </div>
                    <span className="text-slate-700">Regulatory violation detected</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6">
                <div className="text-sm text-slate-500 mb-2">Sample Creative</div>
                <div className="bg-white p-4 rounded border-l-4 border-yellow-400">
                  <p className="text-slate-700">
                    &ldquo;Risk‑free bet for everyone! Guaranteed winnings. No terms apply.&rdquo;
                  </p>
                  <div className="mt-2 text-xs text-yellow-600">
                    ⚠ Review: Promos must include significant terms; avoid misleading guarantees (ASA/CAP)
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
