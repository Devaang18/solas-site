import Link from 'next/link';
import Image from 'next/image';

interface FooterProps {
  onNavigateToSection?: (sectionIndex: number) => void;
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export default function Footer({ onNavigateToSection, onOpenPrivacy, onOpenTerms }: FooterProps) {
  return (
    <div className="w-full flex flex-col text-white relative" style={{ backgroundColor: 'var(--solas-primary)' }}>
      {/* CTA Section */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_50%_-80px,rgba(20,184,166,0.15),transparent)]"></div>
        <div className="container-fluid-2xl mx-auto p-fluid-lg text-center relative z-10 w-full">
          <h2 className="text-fluid-5xl font-bold mb-fluid-6">
            Ready to Protect Your Brand?
          </h2>
          <p className="text-fluid-2xl text-slate-300 mb-12 container-fluid-lg mx-auto leading-relaxed">
            Join compliance teams at leading companies who trust Solas to keep their 
            marketing content compliant and their brands protected.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-fluid-12">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center bg-white text-slate-900 px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-slate-100 transition-colors shadow-md text-center"
            >
              Request Demo
            </Link>
            <a
              href="mailto:neil@solascompliance.com?subject=Talk to Sales - Interested in Solas Compliance&body=Hi Neil,%0D%0A%0D%0AI'm interested in learning more about Solas Compliance and would like to schedule a sales call.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThanks!"
              className="inline-flex items-center justify-center border border-white/80 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors text-center"
            >
              Talk to the Team
            </a>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-slate-900">
        <div className="container-fluid-2xl mx-auto p-fluid-lg py-fluid-lg pt-fluid-24 relative w-full">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="space-y-6 md:col-span-6">
              <div className="flex items-start">
                  <Image
                  src="/solas-logo-white.png"
                    alt="Solas logo"
                    width={120}
                    height={32}
                    className="block h-8 w-auto"
                    priority
                  />
              </div>
              <div>
                <p className="text-slate-300 leading-relaxed text-base">
                  Real-time compliance assistant for compliance and marketing teams in regulated industries. 
                  Flag potential regulatory breaches before publication.
                </p>
              </div>
              <div>
                <a href="https://www.linkedin.com/company/solas-compliance/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-slate-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-3 group-hover:bg-slate-700 transition-colors">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm font-medium">Follow us on LinkedIn</span>
                </a>
              </div>
            </div>

          {/* Contact Information */}
          <div className="space-y-6 md:col-span-3">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">Contact</h3>
            <div className="space-y-4">
              <a href="tel:+447482585085" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="text-base font-medium">+44-7482585085</div>
                </div>
              </a>
              <a href="mailto:neil@solascompliance.com" className="text-slate-300 hover:text-white transition-colors flex items-center group">
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:bg-slate-700 transition-colors">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-base font-medium">neil@solascompliance.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-6 md:col-span-3">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider mb-6">Legal</h3>
            <div className="space-y-4">
              <button onClick={onOpenPrivacy} className="text-left text-slate-300 hover:text-white transition-colors block">Privacy Policy</button>
              <button onClick={onOpenTerms} className="text-left text-slate-300 hover:text-white transition-colors block">Terms of Service</button>
            </div>
          </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t" style={{ borderColor: 'var(--solas-primary-dark)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2025 Solas. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-2 md:mt-0">
              Built for compliance teams who move fast without compromising on safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
