import Link from 'next/link';
 

export default function TermsOfService() {
  return (
    <main className="w-full min-h-screen section-alt-1 matrix-bg">
      <div className="container-fluid-2xl mx-auto p-fluid-lg">
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="inline-flex items-center justify-center text-white px-6 py-3 rounded-lg font-semibold shadow-sm bg-[var(--solas-primary)] hover:bg-[var(--solas-secondary)] transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-fluid-lg">
            <article className="prose max-w-none text-black">
        <h1>Terms of Service</h1>
        <p><strong>Effective Date:</strong> [Insert Date]</p>
        <p>Welcome to Solas Compliance Ltd (“Solas”, “we”, “our”, or “us”). By accessing or using our website, platform, and related services (the “Services”), you agree to comply with and be bound by these Terms of Service (“Terms”). Please read them carefully before using Solas.</p>

        <h3>1. Use of Services</h3>
        <p>You may use Solas only for lawful, business-related purposes. You are responsible for ensuring that all information and materials you upload comply with applicable laws and your organization’s internal policies.</p>

        <h3>2. Accounts and Security</h3>
        <p>To use certain features, you must create an account and provide accurate registration details. You are responsible for safeguarding your account credentials and any actions taken under your account.</p>

        <h3>3. Data and Content</h3>
        <p>You retain ownership of all materials you upload to Solas. By submitting content, you grant Solas a limited license to process and analyse it solely for the purpose of providing compliance assessment and related functionality.</p>
        <p>We do not use or share uploaded materials for model training or marketing. All data is handled in accordance with our Privacy Policy.</p>

        <h3>4. Intellectual Property</h3>
        <p>All software, designs, and technology within the Solas platform are the property of Solas Compliance Ltd. You may not copy, modify, or reverse-engineer any part of the Services.</p>

        <h3>5. Prohibited Uses</h3>
        <ul>
          <li>Use the Services for illegal or deceptive activity</li>
          <li>Upload unlawful, harmful, or confidential materials not owned or authorised by you</li>
          <li>Interfere with the operation or security of the platform</li>
        </ul>

        <h3>6. Service Availability</h3>
        <p>We aim to ensure continuous access to Solas but cannot guarantee uninterrupted uptime. We may modify or suspend the Services at any time for updates, maintenance, or improvement.</p>

        <h3>7. Disclaimers</h3>
        <p>Solas provides its Services on an “as is” and “as available” basis. We do not guarantee that all outputs or compliance assessments are error-free or legally sufficient. Users should verify results before taking regulatory or operational action.</p>

        <h3>8. Limitation of Liability</h3>
        <p>To the maximum extent permitted by law, Solas Compliance Ltd will not be liable for indirect, incidental, or consequential damages resulting from use or inability to use the Services.</p>

        <h3>9. Termination</h3>
        <p>We reserve the right to suspend or terminate accounts that breach these Terms or misuse the platform. Upon termination, access to all data and features may be revoked.</p>

        <h3>10. Governing Law</h3>
        <p>These Terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

        <h3>11. Contact</h3>
        <p>For any questions about these Terms, please contact: <a href="mailto:legal@solascompliance.com">legal@solascompliance.com</a></p>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}


