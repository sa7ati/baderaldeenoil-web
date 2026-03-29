'use client';

import { useI18n } from '@/lib/i18n';
import { Facebook, Linkedin, Instagram, X } from 'lucide-react';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'about', href: '#about' },
  { key: 'services', href: '#services' },
  { key: 'hse', href: '#hse' },
  { key: 'clients', href: '#clients' },
  { key: 'contact', href: '#contact' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: X, href: 'https://x.com', label: 'X' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

export default function Footer() {
  const { t, isRTL, locale } = useI18n();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className="bg-[#004D40] text-white"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <img
                  src="/bos-logo.png"
                  alt="BOS Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <div className="font-bold text-lg">
                  {locale === 'ar' ? 'بدر الدين' : 'Baderaldeen'}
                </div>
                <div className="text-white/70 text-sm">
                  {locale === 'ar' ? 'للخدمات النفطية' : 'Oil Services'}
                </div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              {locale === 'ar'
                ? 'شريككم الموثوق لخدمات النفط والغاز المتكاملة في ليبيا منذ أكثر من 14 عاماً.'
                : 'Your trusted partner for integrated oil and gas services in Libya for over 14 years.'}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Site Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.quickLinks')}</h4>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="block text-white/70 hover:text-[#D4AF37] transition-colors duration-300 hover:translate-x-1 transform"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <div className="text-white/70">
                <span className="block text-sm mb-1">{t('contact.info.phone')} 1</span>
                <a
                  href="tel:+218912771000"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                  dir="ltr"
                  style={{ display: 'inline-block', unicodeBidi: 'isolate' }}
                >
                  +218 91 277 1000
                </a>
              </div>
              <div className="text-white/70">
                <span className="block text-sm mb-1">{t('contact.info.phone')} 2</span>
                <a
                  href="tel:+8821621460925"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                  dir="ltr"
                  style={{ display: 'inline-block', unicodeBidi: 'isolate' }}
                >
                  +882 16 214 6092
                </a>
              </div>
              <div className="text-white/70">
                <span className="block text-sm mb-1">{t('contact.info.email')}</span>
                <a
                  href="mailto:info@baderaldeenoil.com"
                  className="text-white hover:text-[#D4AF37] transition-colors duration-300"
                  dir="ltr"
                  style={{ display: 'inline-block', unicodeBidi: 'isolate' }}
                >
                  info@baderaldeenoil.com
                </a>
              </div>
              <div className="text-white/70">
                <span className="block text-sm mb-1">{t('contact.info.address')}</span>
                <span className="text-white">{t('contact.info.addressValue')}</span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t('contact.info.workingHours')}</h4>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10">
              <div className="text-white mb-2">{t('contact.info.workingHoursValue')}</div>
              <div className="text-white/60 text-sm mt-4">
                {locale === 'ar'
                  ? 'نحن هنا لخدمتكم على مدار الساعة'
                  : 'We are here to serve you 24/7'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <img
              src="/bos-logo.png"
              alt="BOS"
              className="h-6 w-auto opacity-80 transition-opacity duration-300 object-contain"
            />
            <p className="text-white/60 text-sm text-center">
              © {currentYear} Baderaldeen Oil Services Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
