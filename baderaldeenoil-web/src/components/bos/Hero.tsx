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
      {/* Base Background Image - Bright & Clear */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style={{
          backgroundImage: 'url(/hero-bg-bright.jpg)',
        }}
      ></div>

      {/* Light Overlay - keeps image visible and clear */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004D40]/50 via-[#00332E]/55 to-[#004D40]/65 dark:from-[#001A16]/60 dark:via-[#001A16]/65 dark:to-[#001A16]/75"></div>

      {/* Subtle side gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

      {/* Floating Light Particles Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 bg-[#D4AF37]/8 rounded-full blur-3xl animate-float-particle-1"></div>
        <div className="absolute top-[60%] right-[15%] w-48 h-48 bg-white/5 rounded-full blur-2xl animate-float-particle-2"></div>
        <div className="absolute bottom-[20%] left-[30%] w-56 h-56 bg-[#D4AF37]/5 rounded-full blur-3xl animate-float-particle-3"></div>
      </div>

      {/* Subtle shimmer line effect */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent animate-shimmer-line"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo Badge */}
        <div className="mb-8 inline-block animate-fade-in-up">
          <div className="bg-white/15 dark:bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/25 dark:border-white/15 hover:bg-white/20 dark:hover:bg-white/15 transition-all duration-300 shadow-lg shadow-black/10">
            <span className="text-[#D4AF37] font-semibold text-sm md:text-base drop-shadow-sm">
              Baderaldeen Oil Services (BOS)
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl mx-auto animate-fade-in-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
          {t('hero.title')}
        </h1>

        {/* Slogan */}
        <div className="mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-xl md:text-2xl lg:text-3xl text-[#D4AF37] font-bold tracking-wide drop-shadow-md">
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
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/15 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <AnimatedCounter end={14} suffix="+" />
            <div className="text-white/90 text-sm md:text-base">
              {locale === 'ar' ? 'سنة من الخبرة' : 'Years Experience'}
            </div>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/15 dark:border-white/10 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <AnimatedCounter end={50} suffix="+" />
            <div className="text-white/90 text-sm md:text-base">
              {locale === 'ar' ? 'مشروع مكتمل' : 'Projects Completed'}
            </div>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/15 dark:border-white/10 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <AnimatedCounter end={100} suffix="+" />
            <div className="text-white/90 text-sm md:text-base">
              {locale === 'ar' ? 'عميل راضٍ' : 'Satisfied Clients'}
            </div>
          </div>
          <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/15 dark:border-white/10 hover:bg-white/15 hover:border-[#D4AF37]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
            <div className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-2">24/7</div>
            <div className="text-white/90 text-sm md:text-base">
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
        /* Ken Burns - slow zoom on background */
        @keyframes ken-burns {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-ken-burns {
          animation: ken-burns 30s ease-in-out infinite;
        }

        /* Floating particle 1 */
        @keyframes float-particle-1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.08;
          }
          25% {
            transform: translate(30px, -20px) scale(1.1);
            opacity: 0.12;
          }
          50% {
            transform: translate(-10px, 20px) scale(0.95);
            opacity: 0.06;
          }
          75% {
            transform: translate(20px, 10px) scale(1.05);
            opacity: 0.1;
          }
        }
        .animate-float-particle-1 {
          animation: float-particle-1 15s ease-in-out infinite;
        }

        /* Floating particle 2 */
        @keyframes float-particle-2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.05;
          }
          33% {
            transform: translate(-25px, 15px) scale(1.15);
            opacity: 0.08;
          }
          66% {
            transform: translate(15px, -25px) scale(0.9);
            opacity: 0.04;
          }
        }
        .animate-float-particle-2 {
          animation: float-particle-2 18s ease-in-out infinite;
        }

        /* Floating particle 3 */
        @keyframes float-particle-3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.06;
          }
          50% {
            transform: translate(20px, -30px) scale(1.1);
            opacity: 0.1;
          }
        }
        .animate-float-particle-3 {
          animation: float-particle-3 20s ease-in-out infinite;
        }

        /* Shimmer line at top */
        @keyframes shimmer-line {
          0% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer-line {
          animation: shimmer-line 6s ease-in-out infinite;
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
