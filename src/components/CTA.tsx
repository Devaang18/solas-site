import Link from 'next/link';

export default function CTA() {
  return (
    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white relative overflow-hidden matrix-bg py-16">
      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-80px,rgba(20,184,166,0.15),transparent)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Protect Your Brand?
        </h2>
        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Join compliance teams at leading companies who trust Solas to keep their 
          marketing content compliant and their brands protected.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/demo"
            className="inline-flex items-center justify-center bg-white text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-colors shadow-md text-center"
          >
            Request Demo
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center justify-center border border-white/80 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors text-center"
          >
            Talk to Sales
          </Link>
        </div>

      </div>
    </div>
  );
}
