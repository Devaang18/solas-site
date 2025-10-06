import { Target, TrendingUp, Building, Shield, CheckCircle } from 'lucide-react';

export default function Industries() {
  const particlePositions = [
    { left: 3, top: 12, delay: 0.4, duration: 5.6 },
    { left: 23, top: 52, delay: 2.1, duration: 6.9 },
    { left: 63, top: 22, delay: 3.8, duration: 5.1 },
    { left: 83, top: 72, delay: 1.2, duration: 7.7 },
    { left: 13, top: 82, delay: 2.5, duration: 5.4 },
    { left: 53, top: 8, delay: 1.7, duration: 6.8 },
    { left: 33, top: 88, delay: 2.6, duration: 5.7 },
    { left: 73, top: 48, delay: 4.5, duration: 4.8 },
    { left: 7, top: 48, delay: 1.4, duration: 6.5 },
    { left: 67, top: 18, delay: 3.2, duration: 5.3 },
    { left: 27, top: 68, delay: 4.1, duration: 4.7 },
    { left: 77, top: 58, delay: 2.0, duration: 6.7 },
    { left: 17, top: 28, delay: 3.3, duration: 5.6 },
    { left: 57, top: 78, delay: 4.8, duration: 4.3 },
    { left: 43, top: 3, delay: 1.6, duration: 7.5 }
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-indigo-50 to-slate-100 relative overflow-hidden matrix-bg py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 content-offset-top-30">
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
      
      <div className="w-full">
        <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative w-full py-8 sm:py-12 md:py-16 z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-10" style={{ paddingTop: 'var(--section-title-padding-top-industries)' }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight leading-tight">Built For Your Industry</h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-600 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed">Configured to your brand policies and workflows across regulated and high-growth sectors.</p>
        </div>

        <div className="relative mb-8 sm:mb-10 md:mb-12">
          <div className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl relative overflow-hidden" style={{ backgroundColor: '#0f2440' }}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-transparent to-teal-400/20"></div>
              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-bl from-cyan-500/10 to-transparent rounded-full -translate-y-16 sm:-translate-y-24 md:-translate-y-32 translate-x-16 sm:translate-x-24 md:translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-36 sm:h-36 md:w-48 md:h-48 bg-gradient-to-tr from-teal-500/10 to-transparent rounded-full translate-y-12 sm:translate-y-18 md:translate-y-24 -translate-x-12 sm:-translate-x-18 md:-translate-x-24"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-lg" style={{ backgroundColor: '#06bcc1' }}>
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-tight leading-tight">
                  Comprehensive Industry Coverage
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                {['Financial Services', 'Gambling', 'Healthcare', 'Insurance', 'Energy', 'Food & Beverage'].map((industry, index) => (
                  <div 
                    key={industry}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-2 text-xs sm:text-sm md:text-base font-medium text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: '#06bcc1' }}></div>
            <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full animate-ping" style={{ backgroundColor: '#c5d8d1' }}></div>
            <div className="absolute top-1/2 right-4 sm:right-8 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-xl -z-10 scale-105" style={{ backgroundColor: '#06bcc1', opacity: 0.2 }}></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover-lift h-full flex flex-col">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 border border-orange-200 hover-glow animate-float mx-auto">
              <Target className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-2 text-center leading-tight">Consumer Promotions</h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-3 sm:mb-4 flex-grow leading-relaxed">Help ensure ads and offers are clear, fair and not misleading. Surface significant terms and avoid risky wording.</p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1 sm:space-y-2">
              <li>• Promotions: significant terms visibility</li>
              <li>• Age-gating and audience suitability</li>
              <li>• Claims: no undue pressure or guarantees</li>
            </ul>
          </div>

          <div className="card card-hover p-4 sm:p-6 md:p-8 hover-lift h-full flex flex-col">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 border border-green-200 hover-glow animate-float mx-auto">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-2 text-center leading-tight">Performance Marketing</h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-3 sm:mb-4 flex-grow leading-relaxed">Standardise checks across landing pages, ads, and emails to keep speed and protect conversion.</p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1 sm:space-y-2">
              <li>• Claims and incentives review</li>
              <li>• Cross-channel consistency</li>
              <li>• Clear, fair and non-misleading</li>
            </ul>
          </div>

          <div className="card card-hover p-4 sm:p-6 md:p-8 hover-lift h-full flex flex-col sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 border border-blue-200 hover-glow animate-float mx-auto">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-2 text-center leading-tight">Regulated Industries</h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mb-3 sm:mb-4 flex-grow leading-relaxed">From finance to health, supporting teams that move fast while meeting sector rules and internal policies.</p>
            <ul className="text-xs sm:text-sm text-slate-600 space-y-1 sm:space-y-2">
              <li>• Internal policy mapping</li>
              <li>• Audit-ready logs</li>
              <li>• Approvals and handoffs</li>
            </ul>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
