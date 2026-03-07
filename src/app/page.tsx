'use client';

import { I18nProvider } from '@/lib/i18n';
import Header from '@/components/bos/Header';
import Hero from '@/components/bos/Hero';
import About from '@/components/bos/About';
import Services from '@/components/bos/Services';
import HSE from '@/components/bos/HSE';
import Clients from '@/components/bos/Clients';
import Contact from '@/components/bos/Contact';
import Footer from '@/components/bos/Footer';

export default function Home() {
  return (
    <I18nProvider>
      <main className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <Services />
        <HSE />
        <Clients />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  );
}
