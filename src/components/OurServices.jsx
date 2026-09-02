import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, ClipboardCheck, Building2, Calendar, Plane, Car, 
  Hotel, Languages, Navigation, HeartPulse, Stethoscope, ChevronRight, CheckCircle2, Sparkles, X
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function OurServices() {
  const { lang, t } = useLanguage();
  const [activeService, setActiveService] = useState(null);

  const servicesList = [
    {
      id: 1,
      titleEn: "Medical Consultation Coordination",
      titleAr: "تنسيق الاستشارات الطبية الأولية",
      descEn: "Initial tele-consultation with leading Kerala specialists to discuss symptoms, diagnosis, and preliminary treatment advice.",
      descAr: "استشارة طبية أولية عبر الاتصال المرئي مع كبار الاستشاريين في كيرالا لمناقشة التشخيص وخطة العلاج.",
      icon: Stethoscope,
      highlight: false,
      details: ["Review of symptoms prior to travel", "Video call setup with Chief Specialist", "Pre-admission clinical guidance"]
    },
    {
      id: 2,
      titleEn: "Medical Report & Treatment Plan Coordination",
      titleAr: "تقييم التقارير وإعداد الخطة العلاجية",
      descEn: "Comprehensive translation and evaluation of your medical files by top hospital boards with cost estimates.",
      descAr: "ترجمة وتقييم شامل لتقاريرك الطبية من قبل لجان المستشفيات المختصة مع تقديم تقدير تكلفة معتمد.",
      icon: FileText,
      highlight: false,
      details: ["Official hospital cost estimation", "Multi-disciplinary doctor review", "Dual Arabic-English report breakdown"]
    },
    {
      id: 3,
      titleEn: "Hospital & Doctor Coordination",
      titleAr: "اختيار وتنسيق المستشفى والطبيب",
      descEn: "Direct access to NABH/JCI accredited centers of excellence and renowned senior surgeons across Kerala.",
      descAr: "ربط مباشر بأفضل المستشفيات المعتمدة دولياً وأبرز كبار الجراحين في ولاية كيرالا.",
      icon: Building2,
      highlight: false,
      details: ["JCI & NABH accredited hospitals", "Direct doctor appointment confirmation", "Second medical opinion options"]
    },
    {
      id: 4,
      titleEn: "Appointment Scheduling",
      titleAr: "جدولة وتحديد المواعيد الطبية",
      descEn: "Priority queue placement ensuring zero waiting time upon your arrival at the hospital clinic.",
      descAr: "حجز مواعيد أولوية تضمن عدم الانتظار والدخول المباشر للطبيب فور وصولك كيرالا.",
      icon: Calendar,
      highlight: false,
      details: ["Priority patient queueing", "Flexible rescheduling support", "Surgical theatre slot lock"]
    },
    {
      id: 5,
      titleEn: "Medical Travel & Visa Assistance",
      titleAr: "تسهيل التأشيرة الطبية وترتيبات السفر",
      descEn: "Fast-track Medical Visa invitation letters issued by certified hospitals to ensure quick embassy approval.",
      descAr: "إصدار خطابات الدعوة الطبية الرسمية للتأشيرة السريعة مع متابعة وإرشاد سفارات كيرالا.",
      icon: Plane,
      highlight: false,
      details: ["Official hospital invitation letter", "Attendant visa processing for family", "Flight itinerary coordination"]
    },
    {
      id: 6,
      titleEn: "Airport Pickup & Drop",
      titleAr: "الاستقبال والتوديع في المطار",
      descEn: "Warm VIP reception at Kochi / Trivandrum Airport with private vehicle transfer and dedicated assistant.",
      descAr: "استقبال خاص في المطار بمدينة كوتشي أو تريفاندروم وسائق خاص ينقلك مباشرة للوجهة.",
      icon: Car,
      highlight: false,
      details: ["24/7 Flight tracking", "Private luxury vehicle transfer", "Wheelchair / ambulance assistance if needed"]
    },
    {
      id: 7,
      titleEn: "Accommodation Assistance",
      titleAr: "ترتيبات الإقامة والسكن المريح",
      descEn: "Curated options from luxury hotels to fully furnished serviced apartments near hospital centers.",
      descAr: "خيارات إقامة مختارة تشمل الفنادق الفاخرة أو الشقق المفروشة المجهزة بالكامل بالقرب من المستشفيات.",
      icon: Hotel,
      highlight: false,
      details: ["Kitchen-equipped apartments for families", "Proximity to medical centers", "Halal food & Arabic grocery access"]
    },
    {
      id: 8,
      titleEn: "Arabic Language Assistance",
      titleAr: "المرافقة والترجمة باللغة العربية",
      descEn: "Full-time dedicated Arabic translator accompanying you during all doctor visits, procedures, and daily needs.",
      descAr: "مترجم ومرافق شخصي يتحدث العربية طوال فترة إقامتك وخلال جميع الجلسات والفحوصات الطبية.",
      icon: Languages,
      highlight: true, // Subtly highlighted badge
      details: ["Native Arabic medical translators", "24/7 On-call translation hotline", "Prescription & discharge summary translation"]
    },
    {
      id: 9,
      titleEn: "Local Transportation",
      titleAr: "المواصلات والنقل المحلي الخاص",
      descEn: "Dedicated chauffeur-driven vehicle for hospital commutes, pharmacy trips, and local excursions.",
      descAr: "سيارة خاصة وسائق تحت طلبك للتنقل اليومي بين مقر الإقامة، المستشفى، والصيدليات.",
      icon: Navigation,
      highlight: false,
      details: ["Chauffeur on demand", "Discounts for long-stay patients", "Safe & clean climate-controlled vehicles"]
    },
    {
      id: 10,
      titleEn: "Treatment & Recovery Coordination",
      titleAr: "تنسيق فترة العلاج والتعافي",
      descEn: "Daily care management, nursing coordination, specialized dietary plans, and Kerala rehab options.",
      descAr: "إدارة يومية للعناية، التنسيق مع التمريض، تقديم وجبات مخصصة، وجلسات إعادة التأهيل.",
      icon: HeartPulse,
      highlight: false,
      details: ["In-hospital daily patient check-in", "Customized dietary management", "Post-op physiotherapy & Kerala wellness"]
    },
    {
      id: 11,
      titleEn: "Post-Treatment Follow-Up",
      titleAr: "المتابعة الطبية بعد العودة للوطن",
      descEn: "Continued connection with your treating doctor after you return home to monitor long-term recovery.",
      descAr: "استمرار التواصل والمتابعة مع طبيبك المعالج بعد عودتك إلى وطنك لضمان تمام الشفاء.",
      icon: ClipboardCheck,
      highlight: false,
      details: ["Tele-consultation follow-up sessions", "Medication dispatch coordination", "Long-term medical record maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-28 px-4 sm:px-8 bg-[#F8FAF9] relative overflow-hidden border-t border-[#062B28]/10">
      {/* Background Decor */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#00C4FA]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B28] text-white border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider mb-3 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-[#00C4FA]" />
            <span>END-TO-END CARE CONCIERGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#062B28]"
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

        {/* 11 Services Non-Cluttered Grid */}
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
                className={`group cursor-pointer rounded-3xl p-6 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                  isHighlight
                    ? 'bg-[#062B28] text-white border-2 border-[#D4AF37] shadow-xl shadow-[#062B28]/25 transform hover:-translate-y-1'
                    : 'bg-white text-[#1A2321] border border-[#062B28]/10 hover:border-[#00C4FA]/50 shadow-sm hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                {/* Subtle Glow & Highlight Badge */}
                {isHighlight && (
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#062B28] text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>FEATURED SERVICE</span>
                  </div>
                )}

                <div>
                  {/* Icon Header */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    isHighlight
                      ? 'bg-[#00C4FA]/20 text-[#00C4FA] border border-[#00C4FA]/30'
                      : 'bg-[#062B28]/8 text-[#062B28] group-hover:bg-[#062B28] group-hover:text-[#00C4FA]'
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Title & Arabic subtitle */}
                  <h3 className={`text-lg font-bold mb-1 leading-snug ${isHighlight ? 'text-white' : 'text-[#062B28]'}`}>
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  {lang === 'ar' && (
                    <span className={`text-xs font-sans block mb-3 font-semibold ${isHighlight ? 'text-[#00C4FA]' : 'text-[#00A2D9]'}`}>
                      {service.titleEn}
                    </span>
                  )}

                  {/* Description */}
                  <p className={`text-xs leading-relaxed ${isHighlight ? 'text-gray-200' : 'text-[#5A6C67]'}`}>
                    {lang === 'ar' ? service.descAr : service.descEn}
                  </p>
                </div>

                {/* Footer Action Arrow */}
                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-bold ${
                  isHighlight ? 'border-white/15 text-[#00C4FA]' : 'border-[#062B28]/10 text-[#062B28] group-hover:text-[#00A2D9]'
                }`}>
                  <span>{lang === 'ar' ? 'عرض التفاصيل' : 'View Details'}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Drawer for Service Details */}
        <AnimatePresence>
          {activeService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl bg-white text-[#1A2321] rounded-3xl p-6 sm:p-8 border border-[#062B28]/20 shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveService(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#062B28]/10 text-[#062B28] hover:bg-[#062B28] hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#062B28] text-[#00C4FA] flex items-center justify-center">
                    <activeService.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#062B28]">
                      {lang === 'ar' ? activeService.titleAr : activeService.titleEn}
                    </h3>
                    {lang === 'ar' && (
                      <span className="text-sm text-[#00A2D9] font-sans font-bold">
                        {activeService.titleEn}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-sm text-[#5A6C67] mb-6 leading-relaxed">
                  {lang === 'ar' ? activeService.descAr : activeService.descEn}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-[#062B28] uppercase tracking-wider mb-3">
                    {lang === 'ar' ? 'مميزات وركائز الخدمة:' : 'Included Service Highlights:'}
                  </h4>
                  <div className="space-y-2">
                    {activeService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#1A2321] p-2.5 rounded-xl bg-[#F8FAF9] border border-[#062B28]/8">
                        <CheckCircle2 className="w-4 h-4 text-[#00C4FA] flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#062B28]/10">
                  <a
                    href="#appointment"
                    onClick={() => {
                      setActiveService(null);
                      const el = document.getElementById('appointment');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 py-3 rounded-full bg-[#062B28] text-white font-bold text-xs text-center shadow-md hover:bg-[#041F1D]"
                  >
                    {t.nav.bookAppointment}
                  </a>
                  <a
                    href="https://wa.me/918547842167?text=Hello%20mytabib,%20I%20would%20like%20more%20information%20about%20your%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full border border-[#25D366] text-[#128C7E] font-bold text-xs hover:bg-[#25D366]/10"
                  >
                    WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
