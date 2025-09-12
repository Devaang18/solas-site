import Link from 'next/link';
import Reveal from '@/components/Reveal';

export default function Hero() {
  return (
    <section className="section section-accent pt-24 pb-20 bg-[linear-gradient(to_bottom,white,white)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Reveal>
            <h1 className="heading-gradient text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Real‑time compliance for high‑velocity marketing teams
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              Catch potential breaches before content goes live. Keep your brand safe and your campaigns moving—backed by explainable, audit‑ready checks.
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
          <div className="card card-hover p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Content Review Dashboard
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-emerald-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M10 15l-3.5-3.5 1.41-1.41L10 12.17l6.09-6.09L17.5 7.5z" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Compliance check passed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-amber-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 14h-2v-2h2zm0-4h-2V7h2z" />
                      </svg>
                    </div>
                    <span className="text-slate-700">Review required: promotional terms</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center">
                      <svg className="w-3.5 h-3.5 text-rose-600" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                        <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12z"/>
                      </svg>
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
