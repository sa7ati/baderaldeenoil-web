import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { History, Eye, Target, Building2, Users, Award, ChevronDown, ChevronUp } from 'lucide-react';

export default function About() {
  const { t, isRTL, locale } = useI18n();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const toggleExpand = (key: string) => {
    setExpandedCard(expandedCard === key ? null : key);
  };

  const items = [
    {
      key: 'story',
      title: t('about.storyTitle'),
      content: t('about.storyContent'),
      details: t('about.storyDetails'),
      icon: History,
      color: 'from-[#004D40] to-[#006B5E]',
      image: '/about-story.jpg',
    },
    {
      key: 'vision',
      title: t('about.visionTitle'),
      content: t('about.visionContent'),
      details: t('about.visionDetails'),
      icon: Eye,
      color: 'from-[#D4AF37] to-[#B8962E]',
      image: '/about-vision.jpg',
    },
    {
      key: 'mission',
      title: t('about.missionTitle'),
      content: t('about.missionContent'),
      details: t('about.missionDetails'),
      icon: Target,
      color: 'from-[#1A1A1A] to-[#333333]',
      image: '/about-mission.jpg',
    },
  ];

  const galleryImages = [
    {
      src: '/company-office-2.jpg',
      alt: locale === 'ar' ? 'مكاتب الشركة' : 'Company Offices',
    },
    {
      src: '/company-team.jpg',
      alt: locale === 'ar' ? 'فريق العمل' : 'Our Team',
    },
    {
      src: '/company-facility.jpg',
      alt: locale === 'ar' ? 'المنشآت الحقلية' : 'Field Facilities',
    },
  ];

  const companyHighlights = [
    {
      icon: Building2,
      value: locale === 'ar' ? '14+ سنة' : '14+ Years',
      label: locale === 'ar' ? 'من الخبرة المتراكمة' : 'Of Accumulated Experience',
    },
    {
      icon: Users,
      value: '200+',
      label: locale === 'ar' ? 'موظف متخصص' : 'Specialized Employees',
    },
    {
      icon: Award,
      value: 'ISO',
      label: locale === 'ar' ? 'معتمد دولياً' : 'Internationally Certified',
    },
  ];

  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-[#F5F5F5] to-white dark:from-[#001A16] dark:to-[#002621]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D40] dark:text-[#D4AF37] mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Company Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 aspect-[4/3]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#004D40]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Logo Watermark */}
              <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <img
                  src="/bos-logo.png"
                  alt="BOS"
                  className="w-8 h-8 object-contain drop-shadow-lg"
                />
              </div>
              {/* Caption */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-white text-xs font-medium bg-black/30 backdrop-blur-sm rounded-full px-3 py-1">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Company Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {companyHighlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-white dark:bg-white/5 rounded-xl p-5 shadow-md hover:shadow-lg border border-gray-100 dark:border-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#004D40] to-[#006B5E] flex items-center justify-center flex-shrink-0">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#004D40] dark:text-[#D4AF37]">
                  {item.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {items.map((item) => (
            <Card
              key={item.key}
              className="group relative h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white dark:bg-white/5"
            >
              {/* Background Image Container */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-90 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A16]/95 via-[#001A16]/80 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500"></div>
              </div>

              {/* Top Accent Gradient */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 z-20 bg-gradient-to-r ${item.color} opacity-80`}
              ></div>

              <CardContent className="relative z-10 p-8 pt-10 h-full flex flex-col">
                {/* Icon Container */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-xl border border-white/10`}
                >
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Content */}
                <div className="flex-grow">
                  <p className="text-gray-200 leading-relaxed text-justify group-hover:text-white transition-colors duration-300 mb-6">
                    {item.content}
                  </p>
                </div>

                {/* Show More Button */}
                <button
                  onClick={() => toggleExpand(item.key)}
                  className={`flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40 ${
                    expandedCard === item.key
                      ? 'bg-white text-[#004D40] dark:text-[#1A1A1A]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>
                    {expandedCard === item.key
                      ? t('about.showLess')
                      : t('about.showMore')}
                  </span>
                  {expandedCard === item.key ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Expanded Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === item.key ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                  }`}
                >
                  <div className="bg-black/30 backdrop-blur-md rounded-lg p-4 border border-white/10">
                    <p className="text-white text-sm leading-relaxed text-justify">
                      {item.details}
                    </p>
                  </div>
                </div>

                {/* Bottom Watermark Logo */}
                <div className="mt-auto pt-6 flex justify-end opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                  <img src="/bos-logo.png" alt="BOS" className="w-10 h-10 object-contain transition-all duration-300" />
                </div>
              </CardContent>

              {/* Interactive Border Effect on Hover */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 z-20 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center max-w-4xl mx-auto">
          <div className="bg-[#004D40]/5 dark:bg-[#D4AF37]/5 rounded-2xl p-8 border border-[#004D40]/10 dark:border-[#D4AF37]/10 hover:shadow-lg transition-all duration-300">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {locale === 'ar'
                ? 'تتمتع BOS بسجل حافل من النجاحات في تنفيذ المشاريع النفطية والغازية في ليبيا، حيث نعمل مع كبرى الشركات النفطية العالمية والمحلية.'
                : 'BOS has a proven track record of success in executing oil and gas projects in Libya, working with major international and local oil companies.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
