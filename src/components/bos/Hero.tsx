'use client';

import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Counter component with its own Intersection Observer
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  const { t, isRTL, locale } = useI18n();

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Base Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-bg-new.png)',
        }}
      ></div>

      {/* Animated Layer 1 - Horizontal Movement (Rigs swaying) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 animate-swipe-horizontal"
        style={{
          backgroundImage: 'url(/hero-bg-new.png)',
          transformOrigin: 'center center',
        }}
      ></div>

      {/* Animated Layer 2 - Vertical Movement (Pump motion) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 animate-swipe-vertical"
        style={{
          backgroundImage: 'url(/hero-bg-new.png)',
          transformOrigin: 'center center',
        }}
      ></div>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/85 via-[#00332E]/90 to-[#1A1A1A]/95 dark:from-[#001A16]/90 dark:via-[#001A16]/95 dark:to-[#001A16]"></div>

      {/* Additional overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>

      {/* Animated Light Rays Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-[#D4AF37]/5 via-transparent to-transparent animate-rotate-slow"></div>
      </div>

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#D4AF37] rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo Badge */}
        <div className="mb-8 inline-block animate-fade-in-up">
          <div className="bg-white/10 dark:bg-[#D4AF37]/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20 dark:border-[#D4AF37]/20 hover:bg-white/15 dark:hover:bg-[#D4AF37]/20 transition-colors duration-300">
            <span className="text-[#D4AF37] font-semibold text-sm md:text-base">
              Baderaldeen Oil Services (BOS)
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          {t('hero.title')}
        </h1>

        {/* Slogan */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-xl md:text-2xl lg:text-3xl text-[#D4AF37] font-bold tracking-wide">
            {t('hero.slogan')}
          </span>
        </div>

        {/* CTA Button */}
        <Button
          onClick={scrollToServices}
          size="lg"
          className="bg-[#D4AF37] text-white hover:bg-[#B8962E] text-lg px-10 py-6 shadow-xl shadow-[#D4AF37]/30 hover:shadow-2xl hover:shadow-[#D4AF37]/40 hover:scale-105 transition-all duration-300 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          {t('hero.cta')}
        </Button>

        {/* Stats with Counter Animation */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 dark:border-white/5 hover:bg-white/15 dark:hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <AnimatedCounter end={14} suffix="+" />
            <div className="text-white/80 dark:text-gray-300 text-sm md:text-base">
              {locale === 'ar' ? 'سنة من الخبرة' : 'Years Experience'}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <AnimatedCounter end={50} suffix="+" />
            <div className="text-white/80 text-sm md:text-base">
              {locale === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <AnimatedCounter end={100} suffix="+" />
            <div className="text-white/80 text-sm md:text-base">
              {locale === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">24/7</div>
            <div className="text-white/80 text-sm md:text-base">
              {locale === 'ar' ? 'دعم متواصل' : 'Support Available'}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => {
            const element = document.querySelector('#about');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}
          className="text-white/60 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        /* Horizontal sway animation - rigs moving left/right */
        @keyframes swipe-horizontal {
          0%, 100% {
            transform: translateX(0) scale(1.01);
          }
          25% {
            transform: translateX(8px) scale(1.015);
          }
          50% {
            transform: translateX(0) scale(1.01);
          }
          75% {
            transform: translateX(-8px) scale(1.015);
          }
        }
        .animate-swipe-horizontal {
          animation: swipe-horizontal 12s ease-in-out infinite;
        }

        /* Vertical pump animation - pump jacks moving up/down */
        @keyframes swipe-vertical {
          0%, 100% {
            transform: translateY(0) scale(1.01);
          }
          50% {
            transform: translateY(-6px) scale(1.02);
          }
        }
        .animate-swipe-vertical {
          animation: swipe-vertical 6s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Slow rotation for light effect */
        @keyframes rotate-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-rotate-slow {
          animation: rotate-slow 60s linear infinite;
        }

        /* Pulse animation for decorative elements */
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-delayed {
          animation: pulse-slow 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Fade in up animation */
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
