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
    <div className="h-full w-full flex items-start justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden matrix-bg py-16 pt-50">
      <div className="absolute inset-0">
        {particlePositions.map((pos, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full floating-element"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
              animationDelay: `${pos.delay}s`,
              animationDuration: `${pos.duration}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Built For Your Industry</h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Configured to your brand policies and workflows across regulated and high-growth sectors.</p>
        </div>

        <div className="relative mb-12">
          <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-700/50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-indigo-400/20"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-2xl shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                  Comprehensive Industry Coverage
                </h3>
              </div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['Financial Services', 'Gambling', 'Pharmaceuticals', 'Healthcare', 'Insurance', 'Energy', 'Food & Beverage'].map((industry, index) => (
                  <div 
                    key={industry}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {industry}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-6 left-6 w-1 h-1 bg-indigo-400 rounded-full animate-ping"></div>
            <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-3xl blur-xl -z-10 scale-105"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all hover-lift h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl flex items-center justify-center mb-4 border border-orange-200 hover-glow animate-float mx-auto">
              <Target className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">Consumer Promotions</h3>
            <p className="text-slate-600 mb-4 flex-grow">Help ensure ads and offers are clear, fair and not misleading. Surface significant terms and avoid risky wording.</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Promotions: significant terms visibility</li>
              <li>• Age-gating and audience suitability</li>
              <li>• Claims: no undue pressure or guarantees</li>
            </ul>
          </div>

          <div className="card card-hover p-8 hover-lift h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 border border-green-200 hover-glow animate-float mx-auto">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">Performance Marketing</h3>
            <p className="text-slate-600 mb-4 flex-grow">Standardise checks across landing pages, ads, and emails to keep speed and protect conversion.</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Claims and incentives review</li>
              <li>• Cross-channel consistency</li>
              <li>• Clear, fair and non-misleading</li>
            </ul>
          </div>

          <div className="card card-hover p-8 hover-lift h-full flex flex-col">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 border border-blue-200 hover-glow animate-float mx-auto">
              <Building className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2 text-center">Regulated Industries</h3>
            <p className="text-slate-600 mb-4 flex-grow">From finance to health, supporting teams that move fast while meeting sector rules and internal policies.</p>
            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Internal policy mapping</li>
              <li>• Audit-ready logs</li>
              <li>• Approvals and handoffs</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
