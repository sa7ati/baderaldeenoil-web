'use client';

import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Shield, FileText, Download } from 'lucide-react';

export default function HSE() {
  const { t, isRTL, locale } = useI18n();

  const downloadHSEManual = () => {
    const link = document.createElement('a');
    link.href = '/BOS-HSE-Manual.pdf';
    link.download = 'BOS-HSE-Manual.pdf';
    link.click();
  };

  const downloadCompanyProfile = () => {
    const link = document.createElement('a');
    link.href = '/BOS Profile.pdf';
    link.download = 'BOS Profile.pdf';
    link.click();
  };

  return (
    <section
      id="hse"
      className="py-16 bg-gradient-to-br from-[#004D40] via-[#00332E] to-[#1A1A1A] relative overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#D4AF37]/20 mb-8 animate-pulse">
            <Shield className="w-10 h-10 text-[#D4AF37]" />
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t('hse.title')}
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-8"></div>

          {/* Content */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
            {t('hse.content')}
          </p>

          {/* HSE Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/10">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">0</div>
              <div className="text-white/80">
                {locale === 'ar' ? 'حادثة خطيرة' : 'Major Incidents'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/10">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">ISO</div>
              <div className="text-white/80">
                {locale === 'ar' ? 'معتمد' : 'Certified'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/10">
              <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
              <div className="text-white/80">
                {locale === 'ar' ? 'التزام بالمعايير' : 'Compliance Rate'}
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#D4AF37] text-white hover:bg-[#B8962E] px-8 py-6 hover:scale-105 hover:shadow-xl hover:shadow-[#D4AF37]/30 transition-all duration-300"
              onClick={downloadCompanyProfile}
            >
              <FileText className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              {t('hse.downloadCompanyProfile')}
            </Button>
            <Button
              size="lg"
              className="bg-[#1A1A1A] text-white hover:bg-[#333333] px-8 py-6 hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 border-white/30"
              onClick={downloadHSEManual}
            >
              <Download className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
              {t('hse.downloadHSEGuide')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
