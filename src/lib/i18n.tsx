'use client';

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo, useRef } from 'react';

type Locale = 'ar' | 'en';

interface Translations {
  [key: string]: string | Translations;
}

const translations: Record<Locale, Translations> = {
  ar: {
    // Header
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'خدماتنا',
      hse: 'الجودة والسلامة',
      clients: 'عملاؤنا',
      contact: 'اتصل بنا',
      requestQuote: 'اطلب عرض سعر',
    },
    // Hero
    hero: {
      title: 'شريككم الموثوق لخدمات النفط والغاز المتكاملة في ليبيا',
      slogan: 'التميز. الجودة. الثقة.',
      cta: 'استكشف خدماتنا',
    },
    // About
    about: {
      title: 'من نحن',
      storyTitle: 'قصتنا',
      storyContent: 'تأسست شركة بدر الدين لخدمات النفط والغاز منذ أكثر من 14 عاماً في تجهيز المنشآت النفطية والنقل الثقيل والخفيف، وهي متخصصة في تقديم كافة الخدمات لحقول النفط والغاز وكل ما يشمل الأنشطة المتعلقة بهما. هدفها الأساسي الانخراط في الهندسة والإنشاءات وخدمات العمالة المتخصصة.',
      visionTitle: 'رؤيتنا',
      visionContent: 'هدفنا تجاوز توقعات العملاء بتقديم خدمة متميزة وأن نكون المزود الرائد للخدمات المهنية بأسعار تنافسية. نقدم حلولاً هندسية مبتكرة ونلتزم بصرامة بالصحة والسلامة والبيئة (HSE).',
      missionTitle: 'مهمتنا',
      missionContent: 'الريادة في تقديم حلول قوى عاملة عالية الموهبة والخبرة في صناعة النفط والغاز لتمكين عملائنا من النجاح. تتخصص BOS في جلب أفضل الموارد للمشاريع الصعبة.',
    },
    // Services
    services: {
      title: 'خدماتنا المتكاملة',
      items: {
        maintenance: {
          title: 'خدمات الصيانة',
          description: 'إصلاح وتجديد المعدات الثابتة والدوارة',
        },
        construction: {
          title: 'خدمات الإنشاءات',
          description: 'خطوط الأنابيب، خطوط النقل الرئيسية، وأنابيب المعالجة',
        },
        procurement: {
          title: 'توريد المواد',
          description: 'الأنابيب، التركيبات، والمواد الصناعية',
        },
        engineering: {
          title: 'التصميم والهندسة',
          description: 'مخططات P&ID، مخططات التدفق، والتصاميم الكهربائية',
        },
        manpower: {
          title: 'توريد القوى العاملة',
          description: 'توفير فرق عمل متخصصة للعمليات الميدانية',
        },
        catering: {
          title: 'خدمات التموين والإعاشة',
          description: 'خدمات الطعام، التدبير المنزلي، والخدمات الفندقية للحقول',
        },
        transporting: {
          title: 'خدمات النقل',
          description: 'لوجستيات نقل الآليات الثقيلة والخفيفة',
        },
      },
    },
    // HSE
    hse: {
      title: 'التزامنا الراسخ بالصحة والسلامة والبيئة (HSE)',
      content: 'نحن ملتزمون بأعلى معايير الصحة والسلامة والبيئة في جميع عملياتنا. سلامة موظفينا وحماية البيئة هي أولويتنا القصوى.',
      downloadCompanyProfile: 'تحميل ملف الشركة التعريفي (PDF)',
      downloadHSEGuide: 'تحميل دليل الصحة والسلامة والبيئة (PDF)',
    },
    // Clients
    clients: {
      title: 'شركاء النجاح',
    },
    // Contact
    contact: {
      title: 'اتصل بنا',
      form: {
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'الموضوع',
        message: 'الرسالة',
        submit: 'إرسال الرسالة',
        sending: 'جاري الإرسال...',
        success: 'تم إرسال رسالتك بنجاح!',
        error: 'حدث خطأ. يرجى المحاولة مرة أخرى.',
      },
      info: {
        title: 'معلومات التواصل',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        address: 'العنوان',
        addressValue: 'أوجلة (الواحات)، بنغازي (الرحبة) - ليبيا',
        workingHours: 'ساعات العمل',
        workingHoursValue: 'دعم 24/7 (المكتب: 9 ص - 8 م)',
      },
    },
    // Footer
    footer: {
      quickLinks: 'روابط الموقع',
      contactInfo: 'معلومات التواصل',
      followUs: 'تابعنا',
      copyright: '© 2024 Baderaldeen Oil Services. جميع الحقوق محفوظة.',
      companyName: 'شركة بدر الدين للخدمات النفطية',
    },
  },
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      hse: 'HSE',
      clients: 'Clients',
      contact: 'Contact Us',
      requestQuote: 'Request a Quote',
    },
    // Hero
    hero: {
      title: 'Your Trusted Partner for Integrated Oil & Gas Services in Libya',
      slogan: 'Excellence. Quality. Trust.',
      cta: 'Explore Our Services',
    },
    // About
    about: {
      title: 'About Us',
      storyTitle: 'Our Story',
      storyContent: 'Baderaldeen Oil & Gas Services Company was established more than 14 years ago in equipping oil facilities and heavy and light transportation. It specializes in providing all services for oil and gas fields and all related activities. Its main goal is to engage in engineering, construction, and specialized labor services.',
      visionTitle: 'Our Vision',
      visionContent: 'Our goal is to exceed customer expectations by providing distinguished service and becoming the leading provider of professional services at competitive prices. We provide innovative engineering solutions and strictly commit to Health, Safety, and Environment (HSE).',
      missionTitle: 'Our Mission',
      missionContent: 'Leading in providing highly talented and experienced workforce solutions in the oil and gas industry to enable our clients to succeed. BOS specializes in bringing the best resources for challenging projects.',
    },
    // Services
    services: {
      title: 'Our Integrated Services',
      items: {
        maintenance: {
          title: 'Maintenance Services',
          description: 'Repair and refurbishment of static and rotating equipment',
        },
        construction: {
          title: 'Construction Services',
          description: 'Pipelines, main transmission lines, and processing pipes',
        },
        procurement: {
          title: 'Material Procurement',
          description: 'Pipes, fittings, and industrial materials',
        },
        engineering: {
          title: 'Design & Engineering',
          description: 'P&ID diagrams, flow charts, and electrical designs',
        },
        manpower: {
          title: 'Manpower Supply',
          description: 'Providing specialized work teams for field operations',
        },
        catering: {
          title: 'Catering Services',
          description: 'Food services, housekeeping, and hospitality services for fields',
        },
        transporting: {
          title: 'Transporting Services',
          description: 'Logistics for heavy and light vehicle transportation',
        },
      },
    },
    // HSE
    hse: {
      title: 'Our Strong Commitment to Health, Safety & Environment (HSE)',
      content: 'We are committed to the highest standards of health, safety, and environment in all our operations. The safety of our employees and environmental protection is our top priority.',
      downloadCompanyProfile: 'Download Company Profile (PDF)',
      downloadHSEGuide: 'Download HSE Guide (PDF)',
    },
    // Clients
    clients: {
      title: 'Success Partners',
    },
    // Contact
    contact: {
      title: 'Contact Us',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Your message has been sent successfully!',
        error: 'An error occurred. Please try again.',
      },
      info: {
        title: 'Contact Information',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
        addressValue: 'Awjila (Oases), Benghazi (Rahba) - Libya',
        workingHours: 'Working Hours',
        workingHoursValue: '24/7 Support (Office: 9 AM - 8 PM)',
      },
    },
    // Footer
    footer: {
      quickLinks: 'Site Links',
      contactInfo: 'Contact Info',
      followUs: 'Follow Us',
      copyright: '© 2024 Baderaldeen Oil Services. All Rights Reserved.',
      companyName: 'Baderaldeen Oil Services',
    },
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  isRTL: boolean;
  isClient: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ar');
  const [isClient, setIsClient] = useState(false);
  const initializedRef = useRef(false);

  // Initialize on mount - using a pattern that avoids ESLint warning
  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;
    
    // Get stored locale or detect from browser
    const storedLocale = localStorage.getItem('locale') as Locale | null;
    let detectedLocale: Locale = 'ar';
    
    if (storedLocale === 'ar' || storedLocale === 'en') {
      detectedLocale = storedLocale;
    } else {
      const browserLang = navigator.language.split('-')[0];
      detectedLocale = browserLang === 'ar' ? 'ar' : 'en';
    }
    
    // Use flushSync-like pattern with timeout to batch updates
    const applyLocale = () => {
      setLocaleState(detectedLocale);
      setIsClient(true);
      document.documentElement.lang = detectedLocale;
      document.documentElement.dir = detectedLocale === 'ar' ? 'rtl' : 'ltr';
    };
    
    // Defer state updates to next tick
    setTimeout(applyLocale, 0);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      document.documentElement.lang = newLocale;
      document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
    }
  }, []);

  const t = useMemo(() => {
    return (key: string): string => {
      const keys = key.split('.');
      let value: string | Translations = translations[locale];
      
      for (const k of keys) {
        if (typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return key;
        }
      }
      
      return typeof value === 'string' ? value : key;
    };
  }, [locale]);

  const isRTL = locale === 'ar';

  const value = useMemo(() => ({
    locale,
    setLocale,
    t,
    isRTL,
    isClient,
  }), [locale, setLocale, t, isRTL, isClient]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
