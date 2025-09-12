import Link from 'next/link';

export default function CTA() {
  return (
    <section id="get-started" className="py-20 bg-slate-900 text-white bg-[radial-gradient(800px_400px_at_50%_-80px,rgba(20,184,166,0.2),transparent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to protect your brand?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Join compliance teams at leading companies who trust Solas to keep their 
          marketing content compliant and their brands protected.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/demo"
            className="bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-colors shadow-md"
          >
            Request Demo
          </Link>
          <Link
            href="/demo"
            className="border border-white/80 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
          >
            Talk to Sales
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-slate-300 mb-6">Trusted by leading companies in regulated industries</p>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-90">
            <div className="h-8 flex items-center">
              <span className="text-white/90 font-semibold tracking-wide uppercase">Betfair</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-white/90 font-semibold tracking-wide uppercase">Paddy Power</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-white/90 font-semibold tracking-wide uppercase">LiveScore</span>
            </div>
            <div className="h-8 flex items-center">
              <span className="text-white/90 font-semibold tracking-wide uppercase">Sky Bet</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
