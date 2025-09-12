import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import AuditTrail from '@/components/AuditTrail';
import CTA from '@/components/CTA';
import Industries from '@/components/Industries';
import USP from '@/components/USP';
import Oracle from '@/components/Oracle';
import IntelligentReview from '@/components/IntelligentReview';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Oracle />
      <IntelligentReview />
      <Industries />
      <USP />
      <AuditTrail />
      <CTA />
    </main>
  );
}
