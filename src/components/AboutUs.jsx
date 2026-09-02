import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, HeartHandshake, ShieldCheck, Globe2, Stethoscope, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUs() {
  const { lang, t } = useLanguage();

  const keyPillars = [
    {
      titleEn: "Hospital & Doctor Matching",
      titleAr: "اختيار الطبيب والمستشفى المناسب",
      descEn: "Connecting patients with verified top-tier specialists across Kerala based on specific medical reports.",
      icon: Stethoscope
    },
    {
      titleEn: "Native Arabic Coordination",
      titleAr: "تنسيق مخصص باللغة العربية",
      descEn: "Dedicated Arabic-speaking case manager accompanying you from consultation to hospital discharge.",
      icon: Globe2
    },
    {
      titleEn: "Complete Hospitality Concierge",
      titleAr: "خدمات الضيافة والإقامة الشاملة",
      descEn: "Hand-picked luxury accommodation, dietary customization, and private chauffeur transportation.",
      icon: Building2
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 px-4 sm:px-8 bg-white dark:bg-[#041F1D] border-t border-[#062B28]/10 dark:border-white/10 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C4FA]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062B28]/5 border border-[#062B28]/15 dark:border-[#00C4FA]/30 dark:bg-[#00C4FA]/10 text-[#062B28] dark:text-[#00C4FA] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <HeartHandshake className="w-4 h-4 text-[#00C4FA]" />
            <span>{t.about.subTitle}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#062B28] dark:text-white"
          >
            {t.about.title}
          </motion.h2>

          {lang === 'ar' && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg text-[#5A6C67] dark:text-gray-300 font-arabic mt-3"
            >
              رعاية تتجاوز العلاج — جسر التواصل الموثوق بين المرضى الدوليين والرعاية الصحية المتقدمة في الهند
            </motion.p>
          )}
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Deep Narrative on Medical Travel Friction & Bridge Solution */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="p-8 lg:p-10 rounded-3xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/10 dark:border-white/10 shadow-sm relative">
              <span className="absolute -top-3 left-8 px-3 py-1 bg-[#062B28] text-[#00C4FA] text-xs font-bold rounded-full">
                WHY MYTABIB
              </span>

              <h3 className="text-2xl font-bold text-[#062B28] dark:text-white mb-4">
                {lang === 'ar' ? 'إزالة عقبات السفر العلاجي الدولي' : 'Removing the Friction from International Medical Travel'}
              </h3>

              <div className="space-y-4 text-base text-[#1A2321] dark:text-gray-200 leading-relaxed">
                <p>{t.about.leftNarrative1}</p>
                <p className="font-medium text-[#062B28] dark:text-white">{t.about.leftNarrative2}</p>
              </div>

              {/* Arabic Callout Box */}
              {lang === 'ar' && (
                <div className="mt-6 p-4 rounded-2xl bg-[#062B28] text-white border-s-4 border-s-[#D4AF37] font-arabic text-sm leading-relaxed">
                  <p>
                    "نحن في مي طبيب لا نكتفي بحجز المواعيد الطبية، بل نرافقك كعائلة واحدة من لحظة وصولك إلى مطار كيرالا حتى عودتك سالماً إلى وطنك."
                  </p>
                </div>
              )}
            </div>

            {/* 3 Pillar Cards below Left Narrative */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {keyPillars.map((pillar, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white dark:bg-[#062B28] border border-[#062B28]/10 dark:border-white/10 shadow-sm hover:border-[#00C4FA]/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-[#062B28] text-[#00C4FA] flex items-center justify-center mb-3">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#062B28] dark:text-white mb-1">
                    {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                  </h4>
                  <p className="text-[11px] text-[#5A6C67] dark:text-gray-300 leading-normal">
                    {pillar.descEn}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Mission & Vision Minimalist Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Mission Card */}
            <div className="p-8 rounded-3xl bg-[#062B28] text-white border-2 border-[#00C4FA]/30 shadow-xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C4FA]/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00C4FA]/20 border border-[#00C4FA]/40 text-[#00C4FA] flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.about.missionTitle}</h3>
                  {lang === 'ar' && <span className="text-xs font-arabic text-[#00C4FA]">مهمتنا الأسمى</span>}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-editorial">
                {t.about.missionDesc}
              </p>
            </div>

            {/* Vision Card */}
            <div className="p-8 rounded-3xl bg-[#041F1D] text-white border-2 border-[#D4AF37]/30 shadow-xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{t.about.visionTitle}</h3>
                  {lang === 'ar' && <span className="text-xs font-arabic text-[#D4AF37]">رؤيتنا المستقبلية</span>}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-editorial">
                {t.about.visionDesc}
              </p>
            </div>

            {/* Reassurance Stat Badge */}
            <div className="p-6 rounded-3xl bg-[#F8FAF9] dark:bg-[#062B28] border border-[#062B28]/10 dark:border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-[#5A6C67] dark:text-gray-300 font-semibold block">ACCURACY & CARE</span>
                <span className="text-xl font-bold text-[#062B28] dark:text-white">100% Arabic Concierge</span>
              </div>
              <ShieldCheck className="w-8 h-8 text-[#00C4FA]" />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
