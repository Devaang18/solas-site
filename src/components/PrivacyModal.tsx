"use client";
import { X } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-xl sm:rounded-2xl shadow-2xl">
        {/* Floating close button (top-right) */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-2 right-2 sm:top-3 sm:right-3 h-8 w-8 rounded-full text-white shadow flex items-center justify-center"
          style={{ backgroundColor: '#0f2440' }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.backgroundColor = '#06bcc1')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = '#0f2440')}
        >
          <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600" />
        </button>
        <div className="sticky top-0 bg-white border-b border-slate-200 px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-t-xl sm:rounded-t-2xl flex items-center justify-between">
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900">Privacy Policy</h1>
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        <div className="p-3 sm:p-4 md:p-6">
          {(() => {
            const url = '/api/docs/privacy';
            return url ? (
            <div className="space-y-3">
              <div className="flex justify-end">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-3 py-2 text-sm rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Download PDF
                </a>
              </div>
              <div className="rounded-lg border border-slate-200 overflow-hidden">
                <iframe
                  title="Privacy Policy PDF"
                  src={url}
                  className="w-full h-[70vh]"
                />
              </div>
            </div>
            ) : (
            <article className="prose max-w-none text-black">
              <p className="text-sm text-red-600">Privacy PDF URL is not configured. Set NEXT_PUBLIC_PRIVACY_PDF_URL.</p>
            </article>
            );
          })()}
        </div>
      </div>
    </div>
  );
}


