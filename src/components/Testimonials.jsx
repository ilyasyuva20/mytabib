import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const [selectedReview, setSelectedReview] = useState(null);
  const scrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Tariq Al-Mansoori",
      arabicName: "طارق المنصوري",
      country: "Riyadh, Saudi Arabia",
      countryFlag: "🇸🇦",
      treatment: "Robotic Knee Replacement",
      treatmentAr: "استبدال مفصل الركبة بالروبوت",
      hospital: "Aster Medcity, Kochi",
      rating: 5,
      quoteEn: "mytabib organized everything seamlessly. The Arabic translator was with us from the airport to the hospital. My father's knee surgery was a total success.",
      quoteAr: "قامت شركة مي طبيب بتنظيم كل شيء بسلاسة فائقة. المترجم العربي كان معنا منذ وصولنا المطار وحتى المغادرة. نجحت عملية ركبة والدي بفضل الله.",
      date: "August 2026",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Fatima & Zayed Al-Zaabi",
      arabicName: "فاطمة وزايد الظاهري",
      country: "Abu Dhabi, UAE",
      countryFlag: "🇦🇪",
      treatment: "IVF & Fertility Treatment",
      treatmentAr: "علاج الأخصاب وأطفال الأنابيب",
      hospital: "KIMSHEALTH, Trivandrum",
      rating: 5,
      quoteEn: "After 4 years of trying, we chose Kerala through mytabib. Their team ensured utmost privacy, top doctor care, and a beautiful quiet stay near the backwaters.",
      quoteAr: "بعد سنوات من البحث، اخترنا كيرالا عن طريق مي طبيب. وفروا لنا أعلى درجات الخصوصية، رعاية طبية ممتازة، وإقامة مريحة في مكان هادئ.",
      date: "July 2026",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Bader Al-Otaibi",
      arabicName: "بدر العتيبي",
      country: "Kuwait City, Kuwait",
      countryFlag: "🇰🇼",
      treatment: "Micro Spine Surgery & Rehab",
      treatmentAr: "جراحة الديسك بالمناظير والتأهيل",
      hospital: "VPS Lakeshore, Kochi",
      rating: 5,
      quoteEn: "I was suffering from severe back pain. The doctors in Kochi performed a micro-discectomy and I was walking pain-free within 48 hours. Incredible service!",
      quoteAr: "كنت أعاني من آلام حادة بالظهر. أجرى الأطباء في كوتشي جراحة مناظير واستطعت المشي بدون ألم خلال 48 ساعة. خدمة ممتازة جداً!",
      date: "June 2026",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 4,
      name: "Sultan & Aisha Al-Busaidi",
      arabicName: "سلطان وعائشة البوسعيدي",
      country: "Muscat, Oman",
      countryFlag: "🇴🇲",
      treatment: "Cardiac Bypass & Wellness",
      treatmentAr: "جراحة القلب المفتوح والنقاهة",
      hospital: "Amrita Institute of Medical Sciences",
      rating: 5,
      quoteEn: "The medical visa assistance took less than 24 hours. The hospital standards in Kerala match Europe, but at a fraction of the cost. God bless mytabib.",
      quoteAr: "استغرق استخراج التأشيرة الطبية أقل من 24 ساعة. مستوى المستشفيات في كيرالا يضاهي أوروبا، وبتكلفة أنسب بكثير. شكرًا لمي طبيب.",
      date: "May 2026",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 5,
      name: "Khalid Al-Kuwari",
      arabicName: "خالد الكواري",
      country: "Doha, Qatar",
      countryFlag: "🇶🇦",
      treatment: "Full Mouth Dental Implants",
      treatmentAr: "زراعة وتجميل الأسنان الشامل",
      hospital: "Rajagiri Hospital, Aluva",
      rating: 5,
      quoteEn: "Finished 8 implants in 5 days with zero discomfort. The driver picked me up every morning from the hotel. Truly a 5-star medical concierge experience.",
      quoteAr: "أتممت زراعة 8 أسنان في 5 أيام بدون أي انزعاج. السائق كان ينقلني كل صباح من الفندق. تجربة راقية بحق.",
      date: "April 2026",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 px-4 sm:px-8 bg-[#062B28] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00C4FA]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header & Navigation Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-3">
              <Quote className="w-4 h-4 text-[#00C4FA]" />
              <span>VERIFIED PATIENT REVIEWS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {t.testimonials.title}
            </h2>

            <p className={`text-sm sm:text-base text-gray-300 mt-2 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              {t.testimonials.subtitle}
            </p>
          </div>

          {/* Slider Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#00C4FA] hover:text-[#062B28] hover:border-[#00C4FA] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#00C4FA] hover:text-[#062B28] hover:border-[#00C4FA] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Momentum Drag Horizontal Slider Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedReview(item)}
              className="snap-start flex-shrink-0 w-85 sm:w-96 rounded-3xl p-6 bg-white/5 border border-white/10 hover:border-[#00C4FA]/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header Rating & Verified Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00C4FA]/15 border border-[#00C4FA]/30 text-[#00C4FA] text-[10px] font-bold">
                    <ShieldCheck className="w-3 h-3" />
                    <span>Verified Patient</span>
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-gray-200 leading-relaxed font-editorial mb-4 italic">
                  "{lang === 'ar' ? item.quoteAr : item.quoteEn}"
                </p>
              </div>

              {/* Patient Profile Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-[#D4AF37]/50"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-snug">
                      {lang === 'ar' ? item.arabicName : item.name}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-[#00C4FA]">
                      <span>{item.countryFlag}</span>
                      <span>{item.country}</span>
                    </div>
                  </div>
                </div>

                <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded-md">
                  {lang === 'ar' ? item.treatmentAr : item.treatment}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full Testimonial Story */}
        <AnimatePresence>
          {selectedReview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative w-full max-w-lg bg-[#062B28] border border-[#D4AF37]/40 text-white rounded-3xl p-8 shadow-2xl overflow-hidden"
              >
                <button
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={selectedReview.avatar}
                    alt={selectedReview.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#D4AF37]"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-white">{lang === 'ar' ? selectedReview.arabicName : selectedReview.name}</h3>
                    <p className="text-xs text-[#00C4FA]">{selectedReview.country}</p>
                    <span className="text-xs text-[#D4AF37] block mt-1">{lang === 'ar' ? selectedReview.treatmentAr : selectedReview.treatment} at {selectedReview.hospital}</span>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-gray-200 leading-relaxed mb-6">
                  <p className="font-editorial">"{lang === 'ar' ? selectedReview.quoteAr : selectedReview.quoteEn}"</p>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-white/10">
                  <span>Treatment Date: {selectedReview.date}</span>
                  <span className="text-[#00C4FA] font-bold">Coordination by mytabib</span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
