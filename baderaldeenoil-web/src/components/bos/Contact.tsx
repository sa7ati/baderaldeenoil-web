'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const { t, isRTL, locale } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.info.phone'),
      value: '+218 91 277 1000',
      href: 'tel:+218912771000',
      isPhone: true,
    },
    {
      icon: Phone,
      label: t('contact.info.phone') + ' 2',
      value: '+882 16 214 6092',
      href: 'tel:+8821621460925',
      isPhone: true,
    },
    {
      icon: Mail,
      label: t('contact.info.email'),
      value: 'info@baderaldeenoil.com',
      href: 'mailto:info@baderaldeenoil.com',
    },
    {
      icon: MapPin,
      label: t('contact.info.address'),
      value: t('contact.info.addressValue'),
    },
    {
      icon: Clock,
      label: t('contact.info.workingHours'),
      value: t('contact.info.workingHoursValue'),
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-[#F5F5F5] dark:bg-[#002621]"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004D40] dark:text-[#D4AF37] mb-4">
            {t('contact.title')}
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-xl border-0 bg-white dark:bg-white/5">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.subject')}
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.message')}
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-[#D4AF37] focus:ring-[#D4AF37] resize-none"
                  />
                </div>

                {/* Submit Status */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                    {t('contact.form.success')}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    {t('contact.form.error')}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#D4AF37] text-white hover:bg-[#B8962E] py-6 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0 animate-spin" />
                      {t('contact.form.sending')}
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-[#004D40] to-[#00332E]">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6">
                  {t('contact.info.title')}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-[#D4AF37]" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm mb-1">{item.label}</div>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-white font-medium hover:text-[#D4AF37] transition-colors"
                            dir="ltr"
                            style={{ display: 'inline-block', unicodeBidi: 'isolate' }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-white font-medium">{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="shadow-xl border-0 overflow-hidden">
              <div className="relative">
                <iframe
                  src="https://maps.google.com/maps?q=Bernichi+Hotel+Benghazi+Libya&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Baderaldeen Oil Services Location"
                  className="w-full"
                ></iframe>
              </div>
              <div className="p-4 bg-gradient-to-r from-[#004D40] to-[#00332E]">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />
                  <p className="text-white text-sm font-medium">
                    {locale === 'ar'
                      ? 'شارع الوكالات ، بجوار فندق برنيتشي ، بنغازي ، ليبيا'
                      : 'Al-Wikalat Street, next to Bernichi Hotel, Benghazi, Libya'}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
