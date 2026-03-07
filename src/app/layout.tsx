import type { Metadata } from "next";
import { Cairo, Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Baderaldeen Oil Services (BOS) | شركة بدر الدين للخدمات النفطية",
  description: "Baderaldeen Oil Services (BOS) - Your trusted partner for integrated oil and gas services in Libya. Excellence. Quality. Trust. شركة بدر الدين للخدمات النفطية - شريككم الموثوق لخدمات النفط والغاز المتكاملة في ليبيا",
  keywords: ["Oil Services", "Gas Services", "Libya", "Baderaldeen", "BOS", "Petroleum", "Energy", "Maintenance", "Construction", "Engineering", "الخدمات النفطية", "ليبيا", "بدر الدين"],
  authors: [{ name: "Baderaldeen Oil Services" }],
  icons: {
    icon: "/bos-logo.png",
    apple: "/bos-logo.png",
  },
  openGraph: {
    title: "Baderaldeen Oil Services (BOS)",
    description: "Your trusted partner for integrated oil and gas services in Libya. Excellence. Quality. Trust.",
    url: "https://baderaldeenoil.com",
    siteName: "Baderaldeen Oil Services",
    type: "website",
    locale: "ar_LY",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baderaldeen Oil Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baderaldeen Oil Services (BOS)",
    description: "Your trusted partner for integrated oil and gas services in Libya",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://baderaldeenoil.com",
    languages: {
      "ar-LY": "https://baderaldeenoil.com",
      "en-US": "https://baderaldeenoil.com?lang=en",
    },
  },
};

// JSON-LD Schema for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": {
    "ar": "شركة بدر الدين للخدمات النفطية",
    "en": "Baderaldeen Oil Services"
  },
  "alternateName": "BOS",
  "url": "https://baderaldeenoil.com",
  "logo": "https://baderaldeenoil.com/bos-logo.png",
  "description": {
    "ar": "شريككم الموثوق لخدمات النفط والغاز المتكاملة في ليبيا",
    "en": "Your trusted partner for integrated oil and gas services in Libya"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Benghazi",
    "addressRegion": "Awjila",
    "addressCountry": "LY"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+218-91-376-42-03",
    "contactType": "customer service",
    "availableLanguage": ["Arabic", "English"]
  },
  "sameAs": [
    "https://facebook.com/baderaldeenoil",
    "https://linkedin.com/company/baderaldeenoil",
    "https://twitter.com/baderaldeenoil"
  ]
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cairo.variable} ${montserrat.variable} font-sans antialiased bg-background text-foreground transition-colors duration-300`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
