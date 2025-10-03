"use client";

import { useState } from "react";
import Link from "next/link";

export default function DemoPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    // Client-side validation for consent
    if (!payload.consent) {
      setStatus("error");
      setError("You must agree to be contacted to submit this form.");
      return;
    }

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Request failed");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Request a demo</h1>
        </div>

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Thanks! Request received.</h2>
            <p className="mb-4">We’ll reach out soon to schedule a session tailored to your workflows.</p>
            <button 
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Back to home button clicked');
                // Force a hard navigation to ensure clean state
                window.location.href = '/';
              }}
              className="inline-flex items-center gap-2 bg-[var(--solas-primary)] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--solas-primary-dark)] transition-colors shadow-md cursor-pointer"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to home
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            {/* Back to home button */}
            <div className="mb-6">
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Form back to home button clicked');
                  // Force a hard navigation to ensure clean state
                  window.location.href = '/';
                }}
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
                style={{ pointerEvents: 'auto', zIndex: 10 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to home
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="firstName">First name</label>
                <input required name="firstName" id="firstName" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="lastName">Last name</label>
                <input required name="lastName" id="lastName" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Work email</label>
                <input required type="email" name="email" id="email" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="jobTitle">Job title</label>
                <input name="jobTitle" id="jobTitle" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="company">Company</label>
                <input required name="company" id="company" className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="industry">Industry</label>
                <select name="industry" id="industry" className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]">
                  <option value="">Select…</option>
                  <option>Marketing & Advertising</option>
                  <option>Consumer Promotions</option>
                  <option>Financial Services</option>
                  <option>Healthcare</option>
                  <option>Gaming & Entertainment</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="teamSize">Team size</label>
                <select name="teamSize" id="teamSize" className="w-full rounded-lg border border-slate-300 px-3 py-2 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]">
                  <option value="">Select…</option>
                  <option>1-10</option>
                  <option>11-50</option>
                  <option>51-200</option>
                  <option>201-1000</option>
                  <option>1000+</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="useCase">What would you like to achieve?</label>
                <textarea name="useCase" id="useCase" rows={4} className="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--solas-primary)]" />
              </div>
              <div className="md:col-span-2 space-y-3">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--solas-primary)] focus:ring-[var(--solas-primary)]" required />
                  <span className="text-sm text-slate-700 font-medium">
                    I agree to be contacted about my demo request and related product information. <span className="text-red-500">*</span>
                  </span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" name="marketing" className="mt-1 h-4 w-4 rounded border-slate-300 text-[var(--solas-primary)] focus:ring-[var(--solas-primary)]" />
                  <span className="text-sm text-slate-600">I&apos;d like to receive occasional product updates and insights.</span>
                </label>
              </div>
            </div>

            {status === "error" && (
              <div className="mt-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
            )}

            <div className="mt-8 flex items-center gap-4">
              <button disabled={status === "submitting"} className="bg-[var(--solas-primary)] disabled:opacity-60 text-white px-6 py-3 rounded-xl font-semibold hover:bg-[var(--solas-primary-dark)]">
                {status === "submitting" ? "Submitting…" : "Request demo"}
              </button>
              <span className="text-slate-500 text-sm">We'll respond within 1-2 business days.</span>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
