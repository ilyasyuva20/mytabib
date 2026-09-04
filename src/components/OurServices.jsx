import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, ClipboardCheck, Building2, Calendar, Plane, Car, 
  Hotel, Languages, Navigation, HeartPulse, Stethoscope, ChevronRight, CheckCircle2, Sparkles, X, ImageIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function OurServices() {
  const { lang, t } = useLanguage();
  const [activeService, setActiveService] = useState(null);

  const servicesList = [
    {
      id: 1,
      titleEn: "Medical Visa & Travel Assistance",
      titleAr: "تسهيل التأشيرة الطبية وترتيبات السفر",
      descEn: "Fast-track Medical Visa invitation letters issued by certified hospitals to ensure quick embassy approval and flight planning.",
      descAr: "إصدار خطابات الدعوة الطبية الرسمية للتأشيرة السريعة مع متابعة وإرشاد سفارات كيرالا وتنسيق حجز الطيران.",
      icon: Plane,
      image: "/services/service_travel_visa.png",
      highlight: false,
      details: ["Official hospital invitation letter", "Attendant visa processing for family", "Flight itinerary coordination"]
    },
    {
      id: 2,
      titleEn: "Treatment Plan & Hospital Coordination",
      titleAr: "تقييم التقارير وتنسيق المستشفى والخطة العلاجية",
      descEn: "Comprehensive translation and evaluation of your medical files by top hospital boards with transparent cost estimates.",
      descAr: "ترجمة وتقييم شامل لتقاريرك الطبية من قبل لجان المستشفيات المختصة واختيار المركز المناسب مع تقديم تقدير تكلفة معتمد.",
      icon: Building2,
      image: "/services/service_hospital.png",
      highlight: false,
      details: ["JCI & NABH accredited hospital selection", "Official hospital cost estimation", "Multi-disciplinary doctor board review"]
    },
    {
      id: 3,
      titleEn: "Airport Pickup & Drop",
      titleAr: "الاستقبال والتوديع في المطار",
      descEn: "Warm VIP reception at Kochi / Trivandrum Airport with private vehicle transfer and dedicated assistant.",
      descAr: "استقبال خاص في المطار بمدينة كوتشي أو تريفاندروم وسائق خاص ينقلك مباشرة للوجهة.",
      icon: Car,
      image: "/services/service_airport_pickup.png",
      highlight: false,
      details: ["24/7 Flight tracking", "Private luxury vehicle transfer", "Wheelchair / ambulance assistance if needed"]
    },
    {
      id: 4,
      titleEn: "Hospital Appointment & Treatment Coordination",
      titleAr: "حجز المواعيد وتنسيق العلاج الطبي",
      descEn: "Priority queue placement ensuring zero waiting time and direct admission to renowned senior surgeons across Kerala.",
      descAr: "حجز مواعيد أولوية تضمن عدم الانتظار والدخول المباشر لأبرز كبار الجراحين والاستشاريين.",
      icon: Calendar,
      image: "/services/service_consultation.png",
      highlight: false,
      details: ["Priority patient queueing", "Direct doctor appointment confirmation", "Surgical theatre slot lock"]
    },
    {
      id: 5,
      titleEn: "Accommodation Assistance",
      titleAr: "ترتيبات الإقامة والسكن المريح",
      descEn: "Curated options from luxury hotels to fully furnished serviced apartments near hospital centers.",
      descAr: "خيارات إقامة مختارة تشمل الفنادق الفاخرة أو الشقق المفروشة المجهزة بالكامل بالقرب من المستشفيات.",
      icon: Hotel,
      image: "/services/service_accommodation.png",
      highlight: false,
      details: ["Kitchen-equipped apartments for families", "Proximity to medical centers", "Halal food & Arabic grocery access"]
    },
    {
      id: 6,
      titleEn: "Arabic Language & Patient Support",
      titleAr: "المرافقة والترجمة باللغة العربية والدعم الشخصي",
      descEn: "Full-time dedicated Arabic translator accompanying you during all doctor visits, procedures, and daily needs.",
      descAr: "مترجم ومرافق شخصي يتحدث العربية طوال فترة إقامتك وخلال جميع الجلسات والفحوصات الطبية.",
      icon: Languages,
      image: "/services/service_translator.png",
      highlight: true,
      details: ["Native Arabic medical translators", "24/7 On-call translation hotline", "Prescription & discharge summary translation"]
    },
    {
      id: 7,
      titleEn: "Recovery & Post-Treatment Follow-Up",
      titleAr: "متابعة التعافي والرعاية بعد العلاج",
      descEn: "Continued connection with your treating doctor after returning home, plus daily rehab and post-op care coordination.",
      descAr: "استمرار التواصل والمتابعة مع طبيبك المعالج بعد عودتك إلى وطنك وإدارة فترة التعافي والعلاج الطبيعي.",
      icon: HeartPulse,
      image: "/services/service_recovery.png",
      highlight: false,
      details: ["Tele-consultation follow-up sessions", "Post-op physiotherapy & Kerala wellness", "Long-term medical record maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 px-4 sm:px-8 bg-[#F8FAF9] dark:bg-[#021110] relative overflow-hidden border-t border-[#062B28]/10 dark:border-white/10">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00C4FA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B28] dark:bg-[#00C4FA]/10 text-white dark:text-[#00C4FA] border border-[#D4AF37]/30 dark:border-[#00C4FA]/30 text-xs font-bold uppercase tracking-wider mb-3 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#00C4FA]" />
            <span>END-TO-END CARE CONCIERGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#062B28] dark:text-white"
          >
            {t.services.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg text-[#5A6C67] mt-3 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
          >
            {t.services.subtitle}
          </motion.p>
        </div>

        {/* 7 Services Non-Cluttered Grid with AI Generated Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesList.map((service, index) => {
            const isHighlight = service.highlight;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.04 }}
                onClick={() => setActiveService(service)}
                className={`group cursor-pointer rounded-3xl overflow-hidden transition-all duration-300 relative flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-[#062B28] text-white border-2 border-[#D4AF37] shadow-xl shadow-[#062B28]/25 transform hover:-translate-y-1'
                    : 'bg-white dark:bg-[#041F1D] text-[#1A2321] dark:text-gray-200 border border-[#062B28]/10 dark:border-white/10 hover:border-[#00C4FA]/50 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* AI Service Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={service.image}
                    alt={service.titleEn}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* AI Visual Badge */}
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md border border-white/20 text-white text-[9px] font-semibold flex items-center gap-1">
                    <ImageIcon className="w-3 h-3 text-[#00C4FA]" />
                    <span>AI Visual Concierge</span>
                  </div>

                  {/* Featured Badge */}
                  {isHighlight && (
                    <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#062B28] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                      <Sparkles className="w-3 h-3" />
                      <span>FEATURED</span>
                    </div>
                  )}

                  {/* Floating Icon Badge */}
                  <div className={`absolute -bottom-4 left-5 w-10 h-10 rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                    isHighlight
                      ? 'bg-[#D4AF37] text-[#062B28]'
                      : 'bg-[#062B28] dark:bg-[#00C4FA] text-[#00C4FA] dark:text-[#062B28]'
                  }`}>
                    <service.icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title & Arabic subtitle */}
                    <h3 className={`text-base font-bold mb-1 leading-snug ${isHighlight ? 'text-white' : 'text-[#062B28] dark:text-white'}`}>
                      {lang === 'ar' ? service.titleAr : service.titleEn}
                    </h3>
                    {lang === 'ar' && (
                      <span className={`text-xs font-sans block mb-2 font-semibold ${isHighlight ? 'text-[#00C4FA]' : 'text-[#00A2D9]'}`}>
                        {service.titleEn}
                      </span>
                    )}

                    {/* Description */}
                    <p className={`text-xs leading-relaxed line-clamp-3 ${isHighlight ? 'text-gray-200' : 'text-[#5A6C67] dark:text-gray-400'}`}>
                      {lang === 'ar' ? service.descAr : service.descEn}
                    </p>
                  </div>

                  {/* Footer Action Arrow */}
                  <div className={`mt-5 pt-3 border-t flex items-center justify-between text-xs font-bold ${
                    isHighlight ? 'border-white/15 text-[#00C4FA]' : 'border-[#062B28]/10 dark:border-white/10 text-[#062B28] dark:text-[#00A2D9] group-hover:text-[#00A2D9]'
                  }`}>
                    <span>{lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Drawer for Service Details with AI Hero Image */}
        <AnimatePresence>
          {activeService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl bg-white dark:bg-[#062B28] text-[#1A2321] dark:text-white rounded-3xl border border-[#062B28]/20 dark:border-white/20 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Modal Top AI Banner Image */}
                <div className="relative h-52 sm:h-60 w-full overflow-hidden bg-gray-900 flex-shrink-0">
                  <img
                    src={activeService.image}
                    alt={activeService.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Close Button */}
                  <button
                    onClick={() => setActiveService(null)}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-white hover:text-[#062B28] transition-colors border border-white/20"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Title Overlay on Hero Image */}
                  <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#00C4FA] text-[#062B28] flex items-center justify-center shadow-lg flex-shrink-0">
                      <activeService.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {lang === 'ar' ? activeService.titleAr : activeService.titleEn}
                      </h3>
                      {lang === 'ar' && (
                        <span className="text-xs text-[#00C4FA] font-sans font-bold">
                          {activeService.titleEn}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Modal Scrollable Body */}
                <div className="p-6 sm:p-8 overflow-y-auto">
                  <p className="text-sm text-[#5A6C67] dark:text-gray-300 mb-6 leading-relaxed">
                    {lang === 'ar' ? activeService.descAr : activeService.descEn}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs font-bold text-[#062B28] dark:text-[#00C4FA] uppercase tracking-wider mb-3">
                      {lang === 'ar' ? 'مميزات وركائز الخدمة:' : 'Included Service Highlights:'}
                    </h4>
                    <div className="space-y-2">
                      {activeService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#1A2321] dark:text-gray-200 p-2.5 rounded-xl bg-[#F8FAF9] dark:bg-white/5 border border-[#062B28]/8 dark:border-white/10">
                          <CheckCircle2 className="w-4 h-4 text-[#00C4FA] flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#062B28]/10 dark:border-white/10">
                    <a
                      href="#appointment"
                      onClick={() => {
                        setActiveService(null);
                        const el = document.getElementById('appointment');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="flex-1 py-3 rounded-full bg-[#062B28] dark:bg-[#00C4FA] text-white dark:text-[#062B28] font-bold text-xs text-center shadow-md hover:bg-[#041F1D] dark:hover:bg-[#00A2D9] transition-colors"
                    >
                      {t.nav.bookAppointment}
                    </a>
                    <a
                      href="https://wa.me/918547842167?text=Hello%20mytabib,%20I%20would%20like%20more%20information%20about%20your%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full border border-[#25D366] text-[#128C7E] dark:text-[#25D366] font-bold text-xs hover:bg-[#25D366]/10 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

