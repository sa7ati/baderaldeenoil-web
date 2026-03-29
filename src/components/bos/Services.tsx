'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import {
  Wrench,
  Building2,
  Package,
  DraftingCompass,
  Users,
  UtensilsCrossed,
  Truck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const serviceImages: Record<string, string> = {
  maintenance: '/services/maintenance.jpg',
  construction: '/services/construction.jpg',
  procurement: '/services/procurement.jpg',
  engineering: '/services/engineering.jpg',
  manpower: '/services/manpower.jpg',
  catering: '/services/catering.jpg',
  transporting: '/services/transporting.jpg',
};

export default function Services() {
  const { t, isRTL } = useI18n();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const services = [
    {
      key: 'maintenance',
      icon: Wrench,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
      gradient: 'from-[#004D40]/80 to-[#00332E]/80',
    },
    {
      key: 'construction',
      icon: Building2,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
      gradient: 'from-[#D4AF37]/80 to-[#B8962E]/80',
    },
    {
      key: 'procurement',
      icon: Package,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
      gradient: 'from-[#004D40]/80 to-[#00332E]/80',
    },
    {
      key: 'engineering',
      icon: DraftingCompass,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
      gradient: 'from-[#D4AF37]/80 to-[#B8962E]/80',
    },
    {
      key: 'manpower',
      icon: Users,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
      gradient: 'from-[#004D40]/80 to-[#00332E]/80',
    },
    {
      key: 'catering',
      icon: UtensilsCrossed,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
      gradient: 'from-[#D4AF37]/80 to-[#B8962E]/80',
    },
    {
      key: 'transporting',
      icon: Truck,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
      gradient: 'from-[#004D40]/80 to-[#00332E]/80',
    },
  ];

  const toggleExpand = (key: string) => {
    setExpandedCard(expandedCard === key ? null : key);
  };

  return (
    <section
      id="services"
      className="py-16 bg-white dark:bg-[#001A16]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D40] dark:text-[#D4AF37] mb-4">
            {t('services.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const isExpanded = expandedCard === service.key;
            const Icon = service.icon;

            return (
              <Card
                key={service.key}
                className="group relative overflow-hidden border border-gray-100 dark:border-white/10 hover:border-[#D4AF37]/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white dark:bg-white/5"
              >
                {/* Background Image with Semi-transparent Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={serviceImages[service.key]}
                    alt={t(`services.items.${service.key}.title`)}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Light Mode Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/70 dark:from-[#001A16] dark:via-[#001A16]/85 dark:to-[#001A16]/70 transition-all duration-500 group-hover:from-white/95 group-hover:via-white/75 group-hover:to-white/60 dark:group-hover:from-[#001A16]/95 dark:group-hover:via-[#001A16]/75 dark:group-hover:to-[#001A16]/60"></div>
                </div>

                {/* Card Number */}
                <div className="absolute top-4 right-4 text-5xl font-bold text-gray-100 dark:text-white/5 group-hover:text-[#D4AF37]/20 transition-colors duration-300 z-10">
                  0{index + 1}
                </div>

                <CardContent className="relative z-10 p-6 flex flex-col min-h-[280px]">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                  >
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-3 group-hover:text-[#004D40] dark:group-hover:text-[#D4AF37] transition-colors duration-300">
                    {t(`services.items.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 mb-4">
                    {t(`services.items.${service.key}.description`)}
                  </p>

                  {/* Spacer */}
                  <div className="flex-grow"></div>

                  {/* Show More Button */}
                  <button
                    onClick={() => toggleExpand(service.key)}
                    className={`mt-auto flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isExpanded
                        ? 'bg-[#004D40] text-white hover:bg-[#00332E] dark:bg-[#D4AF37] dark:text-[#1A1A1A] dark:hover:bg-[#B8962E]'
                        : 'bg-[#D4AF37]/10 text-[#004D40] hover:bg-[#D4AF37]/20 dark:bg-[#D4AF37]/10 dark:text-[#D4AF37] dark:hover:bg-[#D4AF37]/20'
                    }`}
                  >
                    <span>
                      {isExpanded
                        ? t(`services.items.${service.key}.showLess`)
                        : t(`services.items.${service.key}.showMore`)}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {/* Expanded Details */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isExpanded ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <div className="bg-[#004D40]/5 dark:bg-[#D4AF37]/5 rounded-lg p-4 border border-[#004D40]/10 dark:border-[#D4AF37]/10">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                        {t(`services.items.${service.key}.details`)}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#004D40] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
