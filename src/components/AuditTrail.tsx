export default function AuditTrail() {
  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Complete audit trail, built‑in
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-8">
              Every decision is documented and timestamped—so teams can review, learn and evidence compliance at speed.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Automated Documentation</h3>
                  <p className="text-slate-600">Every content review is automatically logged with timestamps, decisions, and reasoning.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Regulatory Reports</h3>
                  <p className="text-slate-600">Generate compliance reports on demand for regulatory submissions and audits.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Secure Storage</h3>
                  <p className="text-slate-600">All audit data is encrypted and stored securely with enterprise-grade security controls.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col">
            <div className="card p-6 flex-grow">
              <h3 className="font-semibold text-slate-900 mb-4">Sample Audit Log</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Content Approved</p>
                      <p className="text-xs text-slate-500">Product description for new medication</p>
                    </div>
                    <span className="text-xs text-slate-400">2 min ago</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Review Required</p>
                      <p className="text-xs text-slate-500">Medical claim needs substantiation</p>
                    </div>
                    <span className="text-xs text-slate-400">15 min ago</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-red-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Violation Detected</p>
                      <p className="text-xs text-slate-500">Unsubstantiated efficacy claim</p>
                    </div>
                    <span className="text-xs text-slate-400">1 hour ago</span>
                  </div>
                </div>
                
                <div className="border-l-4 border-blue-400 pl-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium text-slate-900">Compliance Check</p>
                      <p className="text-xs text-slate-500">FDA guidelines scan completed</p>
                    </div>
                    <span className="text-xs text-slate-400">2 hours ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
