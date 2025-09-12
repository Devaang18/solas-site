import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import HowItWorks from '@/components/HowItWorks';
import AuditTrail from '@/components/AuditTrail';
import CTA from '@/components/CTA';
import Industries from '@/components/Industries';
import USP from '@/components/USP';

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <HowItWorks />
      <Industries />
      <USP />
      <AuditTrail />
      <CTA />
    </main>
  );
}
