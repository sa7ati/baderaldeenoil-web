

import { useI18n } from '@/lib/i18n';

const clients = [
  { name: 'Sirte Oil Company', logo: '/clients/sirte-oil.png' },
  { name: 'Arabian Gulf Oil Company', logo: '/clients/arabian-gulf-oil.png' },
  { name: 'Waha Oil Company', logo: '/clients/waha-oil.jpeg' },
  { name: 'Harouge Oil Operations', logo: '/clients/harouge-oil.jpeg' },
  { name: 'ENI Libya', logo: '/clients/eni-libya.png' },
  { name: 'Mellitah Oil & Gas', logo: '/clients/mellitah-oil.jpeg' },
];

const clientsReversed = [...clients].reverse();

function LogoItem({ client }: { client: typeof clients[0] }) {
  return (
    <div className="flex-shrink-0 px-4 sm:px-6 md:px-10 w-28 h-20 sm:w-36 sm:h-24 md:w-44 md:h-28 flex items-center justify-center box-content">
      <div
        className="bg-white dark:bg-white/5 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg hover:shadow-2xl transition-all duration-300 p-2 sm:p-3 md:p-4 w-full h-full flex items-center justify-center border border-gray-100 dark:border-white/10 hover:border-[#D4AF37]/30 hover:scale-105"
        style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
      >
        <img
          src={client.logo}
          alt={client.name}
          loading="eager"
          className="max-w-full max-h-full object-contain transition-all duration-300 dark:brightness-90"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `<span class="text-[#004D40] dark:text-[#D4AF37] font-bold text-xs sm:text-sm text-center">${client.name}</span>`;
            }
          }}
        />
      </div>
    </div>
  );
}

function LogoSet({ items }: { items: typeof clients }) {
  return (
    <>
      {items.map((client, i) => (
        <LogoItem key={i} client={client} />
      ))}
    </>
  );
}

export default function Clients() {
  const { t, isRTL, locale } = useI18n();

  return (
    <section
      id="clients"
      className="py-12 sm:py-16 bg-gradient-to-b from-white to-[#F5F5F5] dark:from-[#001A16] dark:to-[#002621]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D40] dark:text-[#D4AF37] mb-4">
            {t('clients.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-2">
            {locale === 'ar'
              ? 'نفخر بثقة كبرى الشركات النفطية العاملة في ليبيا'
              : 'We are proud of the trust of major oil companies operating in Libya'}
          </p>
        </div>
      </div>

      {/* Row 1 - Twin sets for mathematically perfect loop */}
      <div className="marquee-viewport mb-8 sm:mb-12">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white dark:from-[#001A16] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#F5F5F5] dark:from-[#002621] to-transparent z-10 pointer-events-none"></div>
        <div className="marquee-track marquee-track-top">
          <LogoSet items={clients} />
          <LogoSet items={clients} />
        </div>
      </div>

      {/* Row 2 - Reversed Twin sets */}
      <div className="marquee-viewport">
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white dark:from-[#001A16] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-[#F5F5F5] dark:from-[#002621] to-transparent z-10 pointer-events-none"></div>
        <div className="marquee-track marquee-track-bottom">
          <LogoSet items={clientsReversed} />
          <LogoSet items={clientsReversed} />
        </div>
      </div>

      <style jsx>{`
        .marquee-viewport {
          position: relative;
          overflow: hidden;
          width: 100%;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          perspective: 1000px;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .marquee-track-top {
          animation: scroll-left-50 40s linear infinite;
        }

        .marquee-track-bottom {
          animation: scroll-right-50 30s linear infinite;
        }

        @keyframes scroll-left-50 {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes scroll-right-50 {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        [dir='rtl'] .marquee-track-top {
          animation-name: scroll-right-50;
        }
        [dir='rtl'] .marquee-track-bottom {
          animation-name: scroll-left-50;
        }

        @media (max-width: 768px) {
          .marquee-track-top { animation-duration: 20s; }
          .marquee-track-bottom { animation-duration: 15s; }
        }
      `}</style>

    </section>
  );
}

