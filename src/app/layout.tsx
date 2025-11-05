import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Solas - Real-time Marketing Compliance Assistant for Regulated Industries",
  description: "Flag potential regulatory breaches in content before publication. Move fast without risking fines or brand damage. Built for compliance and marketing teams in regulated industries.",
  keywords: ["compliance", "regulatory", "marketing", "content review", "audit trail", "regulated industries"],
  authors: [{ name: "Solas" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  openGraph: {
    title: "Solas - Real-time Marketing Compliance Assistant",
    description: "Flag potential regulatory breaches in content before publication. Move fast without risking fines or brand damage.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solas - Real-time Marketing Compliance Assistant",
    description: "Flag potential regulatory breaches in content before publication. Move fast without risking fines or brand damage.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
