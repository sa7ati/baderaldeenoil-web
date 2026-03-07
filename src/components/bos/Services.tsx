'use client';

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
} from 'lucide-react';

export default function Services() {
  const { t, isRTL } = useI18n();

  const services = [
    {
      key: 'maintenance',
      icon: Wrench,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
    },
    {
      key: 'construction',
      icon: Building2,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
    },
    {
      key: 'procurement',
      icon: Package,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
    },
    {
      key: 'engineering',
      icon: DraftingCompass,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
    },
    {
      key: 'manpower',
      icon: Users,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
    },
    {
      key: 'catering',
      icon: UtensilsCrossed,
      color: 'text-[#D4AF37]',
      bgColor: 'bg-[#D4AF37]/10',
    },
    {
      key: 'transporting',
      icon: Truck,
      color: 'text-[#004D40]',
      bgColor: 'bg-[#004D40]/10',
    },
  ];

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
          {services.map((service, index) => (
            <Card
              key={service.key}
              className="group relative overflow-hidden border border-gray-100 dark:border-white/10 hover:border-[#D4AF37]/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white dark:bg-white/5"
            >
              {/* Card Number */}
              <div className="absolute top-4 right-4 text-5xl font-bold text-gray-50 dark:text-white/5 group-hover:text-[#D4AF37]/20 transition-colors duration-300">
                0{index + 1}
              </div>

              <CardContent className="p-6">
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}
                >
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-3 group-hover:text-[#004D40] dark:group-hover:text-[#D4AF37] transition-colors duration-300">
                  {t(`services.items.${service.key}.title`)}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                  {t(`services.items.${service.key}.description`)}
                </p>

                {/* Hover Indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#004D40] to-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
