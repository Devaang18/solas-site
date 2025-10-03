'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Hide footer on demo page
  const shouldShowFooter = pathname !== '/demo';
  
  return (
    <>
      {children}
      {shouldShowFooter && <Footer />}
    </>
  );
}
