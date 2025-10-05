"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur effect */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
        {/* Header with close button */}
        <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 rounded-t-2xl flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">Request a Demo</h1>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-slate-600" />
          </button>
        </div>

        {/* Form content */}
        <div className="p-6">
          {status === "success" ? (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center">
              <h2 className="text-xl font-semibold mb-2">Thanks! Request received.</h2>
              <p className="mb-4">We&apos;ll reach out soon to schedule a session tailored to your workflows.</p>
              <button
                onClick={onClose}
                className="text-[var(--solas-primary)] font-medium hover:underline"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-6">
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
                <div className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
              )}

              <div className="flex items-center gap-4 pt-4">
                <button disabled={status === "submitting"} className="text-white px-6 py-3 rounded-xl font-semibold disabled:opacity-60" style={{ backgroundColor: '#0f2440' }}>
                  {status === "submitting" ? "Submitting…" : "Request demo"}
                </button>
                <span className="text-slate-500 text-sm">We&apos;ll respond within 1-2 business days.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
