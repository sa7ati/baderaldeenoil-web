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
      storyDetails: 'بدأت رحلتنا بطموح كبير لتطوير البنية التحتية النفطية. على مدار 14 عاماً، واجهنا التحديات وحولناها إلى نجاحات، مما جعلنا اليوم من أسرع الشركات نمواً وأكثرها موثوقية في السوق الليبي.',
      visionTitle: 'رؤيتنا',
      visionContent: 'هدفنا تجاوز توقعات العملاء بتقديم خدمة متميزة وأن نكون المزود الرائد للخدمات المهنية بأسعار تنافسية. نقدم حلولاً هندسية مبتكرة ونلتزم بصرامة بالصحة والسلامة والبيئة (HSE).',
      visionDetails: 'نسعى لأن نكون المعيار الأول للجودة والابتكار في ليبيا، من خلال بناء شراكات استراتيجية عالمية ونقل التكنولوجيا المتقدمة لتعزيز الإنتاج الوطني وحماية البيئة.',
      missionTitle: 'مهمتنا',
      missionContent: 'الريادة في تقديم حلول قوى عاملة عالية الموهبة والخبرة في صناعة النفط والغاز لتمكين عملائنا من النجاح. تتخصص BOS في جلب أفضل الموارد للمشاريع الصعبة.',
      missionDetails: 'نحن نعمل بلا كلل لتوفير حلول مبتكرة في قطاع النفط والغاز، مع التركيز على الكفاءة التشغيلية، استخدام أحدث التقنيات، وتدريب الكوادر الليبية الشابة لقيادة المستقبل.',
      showMore: 'إظهار المزيد من التفاصيل',
      showLess: 'عرض أقل',
    },
    // Services
    services: {
      title: 'خدماتنا المتكاملة',
      items: {
        maintenance: {
          title: 'خدمات الصيانة',
          description: 'إصلاح وتجديد المعدات الثابتة والدوارة',
          details: 'نقدم خدمات صيانة شاملة للمعدات الثابتة والدوارة في المنشآت النفطية والغازية. يشمل ذلك إصلاح المضخات والمكابح والضواغط والمبدلات الحرارية وأجهزة الفصل. يعمل فريقنا المتخصص وفق أعلى معايير الصحة والسلامة لضمان أداء أمثل وموثوقية عالية لجميع المعدات.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
        },
        construction: {
          title: 'خدمات الإنشاءات',
          description: 'خطوط الأنابيب، خطوط النقل الرئيسية، وأنابيب المعالجة',
          details: 'نمتلك خبرة واسعة في تنفيذ مشاريع الإنشاءات النفطية بما في ذلك تركيب خطوط الأنابيب وخطوط النقل الرئيسية ومحطات المعالجة. فريقنا المؤهل يؤدي أعمال اللحام والتركيب والاختبار وفق المواصفات الدولية مع الالتزام الكامل بمعايير HSE لضمان جودة التنفيذ وسلامة التشغيل.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
        },
        procurement: {
          title: 'توريد المواد',
          description: 'الأنابيب، التركيبات، والمواد الصناعية',
          details: 'نوفر خدمات توريد مواد شاملة ومتكاملة تشمل الأنابيب الفولاذية والتركيبات والصمامات والمواد الصناعية المتنوعة. نتعامل مع موردين معتمدين دولياً لضمان جودة المنتجات وتوافرها في الوقت المحدد، مع القدرة على تلبية احتياجات المشاريع الكبرى في قطاع النفط والغاز.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
        },
        engineering: {
          title: 'التصميم والهندسة',
          description: 'مخططات P&ID، مخططات التدفق، والتصاميم الكهربائية',
          details: 'نقدم خدمات التصميم والهندسة المتقدمة التي تشمل إعداد مخططات P&ID ومخططات التدفق والتصاميم الكهربائية والميكانيكية والمدنية. يستخدم فريق مهندسينا أحدث البرمجيات والتقنيات لتقديم تصاميم دقيقة تلبي المتطلبات الفنية والمواصفات القياسية الدولية لمشاريع النفط والغاز.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
        },
        manpower: {
          title: 'توريد القوى العاملة',
          description: 'توفير فرق عمل متخصصة للعمليات الميدانية',
          details: 'نتخصص في توفير الكوادر البشرية المؤهلة والمتخصصة لقطاع النفط والغاز. يشمل ذلك المهندسين والفنيين والعمال المهرة في مجالات التشغيل والصيانة والإنشاءات. نحرص على اختيار أفضل العناصر وتدريبهم وفق أعلى المعايير لضمان تقديم خدمات متميزة تلبي تطلعات عملائنا.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
        },
        catering: {
          title: 'خدمات التموين والإعاشة',
          description: 'خدمات الطعام، التدبير المنزلي، والخدمات الفندقية للحقول',
          details: 'نقدم خدمات تموين وإعاشة متكاملة لمعسكرات العمل في الحقول النفطية تشمل إعداد الوجبات الغذائية المتنوعة والخدمات الفندقية والتدبير المنزلي. نلتزم بأعلى معايير النظافة والجودة في تقديم خدمات غذائية صحية ومتوازنة تضمن راحة وسلامة العاملين في مواقع العمل.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
        },
        transporting: {
          title: 'خدمات النقل',
          description: 'لوجستيات نقل الآليات الثقيلة والخفيفة',
          details: 'نوفر خدمات نقل ولوجستيات شاملة تشمل نقل المعدات الثقيلة والخفيفة والمواد إلى مواقع العمل في الحقول النفطية. نمتلك أسطولاً متنوعاً من المركبات والمقطورات المتخصصة مع سائقين ذوي خبرة عالية لنقل البضائع والمعدات بأمان وكفاءة عبر مختلف أنواع الطرق والظروف المناخية.',
          showMore: 'إظهار المزيد من التفاصيل',
          showLess: 'عرض أقل',
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
        addressValue: 'شارع الوكالات، بجوار فندق برنيتشي، بنغازي - ليبيا',
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
      storyDetails: 'Our journey began with a great ambition to develop oil infrastructure. Over 14 years, we faced challenges and turned them into successes, making us today one of the fastest-growing and most reliable companies in the Libyan market.',
      visionTitle: 'Our Vision',
      visionContent: 'Our goal is to exceed customer expectations by providing distinguished service and becoming the leading provider of professional services at competitive prices. We provide innovative engineering solutions and strictly commit to Health, Safety, and Environment (HSE).',
      visionDetails: 'We aim to be the primary benchmark for quality and innovation in Libya, by building global strategic partnerships and transferring advanced technology to enhance national production and protect the environment.',
      missionTitle: 'Our Mission',
      missionContent: 'Leading in providing highly talented and experienced workforce solutions in the oil and gas industry to enable our clients to succeed. BOS specializes in bringing the best resources for challenging projects.',
      missionDetails: 'We work tirelessly to provide innovative solutions in the oil and gas sector, focusing on operational efficiency, utilizing the latest technologies, and training young Libyan talents to lead the future.',
      showMore: 'Show More Details',
      showLess: 'Show Less',
    },
    // Services
    services: {
      title: 'Our Integrated Services',
      items: {
        maintenance: {
          title: 'Maintenance Services',
          description: 'Repair and refurbishment of static and rotating equipment',
          details: 'We provide comprehensive maintenance services for static and rotating equipment in oil and gas facilities. This includes the repair of pumps, brakes, compressors, heat exchangers, and separation units. Our specialized team operates according to the highest health and safety standards to ensure optimal performance and high reliability for all equipment.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
        },
        construction: {
          title: 'Construction Services',
          description: 'Pipelines, main transmission lines, and processing pipes',
          details: 'We have extensive experience in executing oil construction projects including pipeline installation, main transmission lines, and processing stations. Our qualified team performs welding, installation, and testing in accordance with international specifications with full HSE compliance to ensure quality execution and safe operations.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
        },
        procurement: {
          title: 'Material Procurement',
          description: 'Pipes, fittings, and industrial materials',
          details: 'We provide comprehensive procurement services including steel pipes, fittings, valves, and various industrial materials. We work with internationally certified suppliers to ensure product quality and timely availability, with the capacity to meet the needs of major projects in the oil and gas sector.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
        },
        engineering: {
          title: 'Design & Engineering',
          description: 'P&ID diagrams, flow charts, and electrical designs',
          details: 'We offer advanced design and engineering services including P&ID diagrams, flow charts, and electrical, mechanical, and civil designs. Our engineering team uses the latest software and technologies to deliver precise designs that meet technical requirements and international standards for oil and gas projects.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
        },
        manpower: {
          title: 'Manpower Supply',
          description: 'Providing specialized work teams for field operations',
          details: 'We specialize in providing qualified and specialized human resources for the oil and gas sector. This includes engineers, technicians, and skilled workers in operations, maintenance, and construction. We carefully select and train the best personnel according to the highest standards to deliver services that meet our clients expectations.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
        },
        catering: {
          title: 'Catering Services',
          description: 'Food services, housekeeping, and hospitality services for fields',
          details: 'We provide integrated catering services for oil field work camps including diverse meal preparation, hospitality services, and housekeeping. We comply with the highest hygiene and quality standards in providing healthy and balanced food services that ensure the comfort and safety of workers at job sites.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
        },
        transporting: {
          title: 'Transporting Services',
          description: 'Logistics for heavy and light vehicle transportation',
          details: 'We provide comprehensive transportation and logistics services including the transport of heavy and light equipment and materials to oil field work sites. We own a diverse fleet of specialized vehicles and trailers with highly experienced drivers to transport goods and equipment safely and efficiently across all road types and weather conditions.',
          showMore: 'Show More Details',
          showLess: 'Show Less',
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
        addressValue: 'Al-Wikalat Street, next to Bernichi Hotel, Benghazi - Libya',
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
