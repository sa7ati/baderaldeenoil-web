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
  metadataBase: new URL("https://baderaldeenoil.com"),
  title: {
    default: "Baderaldeen Oil Services (BOS) | شركة بدر الدين للخدمات النفطية",
    template: "%s | BOS",
  },
  description: "Baderaldeen Oil Services (BOS) provides world-class integrated oil and gas solutions in Libya, specializing in engineering, maintenance, and logistics. شركة بدر الدين للخدمات النفطية - شريك الابتكار والجودة لخدمات النفط والغاز المتكاملة في ليبيا.",
  keywords: ["Oil Services Libya", "Gas Services Libya", "Baderaldeen Oil", "BOS Libya", "Petroleum Engineering Benghazi", "Oilfield maintenance Libya", "الخدمات النفطية في ليبيا", "شركة بدر الدين", "خدمات الحقول النفطية", "هندسة النفط والغاز"],
  authors: [{ name: "Baderaldeen Oil Services", url: "https://baderaldeenoil.com" }],
  creator: "Baderaldeen Oil Services",
  publisher: "Baderaldeen Oil Services",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Baderaldeen Oil Services (BOS) - Excellence in Energy",
    description: "Discover premium integrated oil and gas services in Libya. Leading the industry with quality, safety, and 14+ years of expertise.",
    url: "https://baderaldeenoil.com",
    siteName: "Baderaldeen Oil Services",
    type: "website",
    locale: "ar_LY",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Baderaldeen Oil Services (BOS) - Libya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baderaldeen Oil Services (BOS) | Leading Energy Solutions in Libya",
    description: "Excellence. Quality. Trust. Explore our integrated services for the oil and gas sector in Libya.",
    images: ["/og-image.png"],
    creator: "@baderaldeenoil",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
