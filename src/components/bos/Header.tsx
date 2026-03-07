'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'hse', href: '#hse' },
  { key: 'clients', href: '#clients' },
  { key: 'contact', href: '#contact' },
];

export default function Header() {
  const { locale, setLocale, t, isRTL } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLocale(locale === 'ar' ? 'en' : 'ar');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${isScrolled
          ? 'bg-white/95 dark:bg-[#001A16]/95 backdrop-blur-md shadow-xl py-2 border-b border-gray-100 dark:border-white/10'
          : 'bg-transparent py-4'
        }`}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 hover:scale-105">
              <img
                src="/bos-logo.png"
                alt="BOS Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className={`hidden md:block transition-colors duration-300 ${isScrolled ? 'text-[#004D40]' : 'text-white'}`}>
              <div className="font-bold text-lg leading-tight">
                {locale === 'ar' ? 'بدر الدين' : 'Baderaldeen'}
              </div>
              <div className="text-xs opacity-80">
                {locale === 'ar' ? 'للخدمات النفطية' : 'Oil Services'}
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group ${isScrolled
                    ? 'text-[#1A1A1A] hover:text-[#004D40]'
                    : 'text-white/90 hover:text-white'
                  }`}
              >
                <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${isScrolled
                    ? 'bg-[#004D40]/0 group-hover:bg-[#004D40]/10'
                    : 'bg-white/0 group-hover:bg-white/10'
                  }`}></span>
              </button>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className={`transition-all duration-300 hover:scale-110 ${isScrolled
                  ? 'text-[#004D40] dark:text-[#D4AF37] hover:bg-[#004D40]/10 hover:text-[#004D40] dark:hover:bg-[#D4AF37]/10 dark:hover:text-[#D4AF37]'
                  : 'text-white hover:bg-white/10 hover:text-white'
                }`}
            >
              <Globe className="w-5 h-5" />
              <span className="sr-only">Toggle language</span>
            </Button>

            <ThemeToggle
              className={`transition-all duration-300 hover:scale-110 ${isScrolled
                  ? 'text-[#004D40] dark:text-[#D4AF37] hover:bg-[#004D40]/10'
                  : 'text-white hover:bg-white/10'
                }`}
            />

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection('#contact')}
              className={`hidden md:flex bg-[#D4AF37] text-white hover:bg-[#B8962E] hover:scale-105 hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300 ${!isScrolled && 'shadow-lg shadow-[#D4AF37]/20'
                }`}
            >
              {t('nav.requestQuote')}
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className={`lg:hidden transition-all duration-300 hover:scale-110 ${isScrolled
                  ? 'text-[#004D40] hover:bg-[#004D40]/10'
                  : 'text-white hover:bg-white/10'
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
          <nav className="flex flex-col gap-1 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-4 border border-gray-100">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="px-4 py-3 rounded-lg font-medium text-[#1A1A1A] hover:bg-[#004D40] hover:text-white transition-all duration-300 text-right"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="mt-2 bg-[#D4AF37] text-white hover:bg-[#B8962E] hover:scale-[1.02] transition-all duration-300"
            >
              {t('nav.requestQuote')}
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
