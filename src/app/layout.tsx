import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Solas Compliance";
const SITE_URL = "https://www.solascompliance.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: `${SITE_NAME} - Real-time Marketing Compliance Assistant for Regulated Industries`,
  description:
    "Flag potential regulatory breaches in content before publication. Move fast without risking fines or brand damage. Built for compliance and marketing teams in regulated industries.",
  keywords: [
    "compliance",
    "regulatory",
    "marketing",
    "content review",
    "audit trail",
    "regulated industries",
  ],
  authors: [{ name: SITE_NAME }],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: `${SITE_NAME} - Real-time Marketing Compliance Assistant`,
    description:
      "Flag potential regulatory breaches in content before publication. Move fast without risking fines or brand damage.",
    type: "website",
    locale: "en_GB",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - Real-time Marketing Compliance Assistant`,
    description:
      "Flag potential regulatory breaches in content before publication. Move fast without risking fines or brand damage.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };

  return (
    <html lang="en-GB">
      <head>
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Script
          id="organization-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}
