import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, X, Play, ExternalLink, Heart, Eye, Share2, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import InstagramIcon from './InstagramIcon';

export default function Testimonials() {
  const { lang, t } = useLanguage();
  const [selectedReview, setSelectedReview] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      instagramUrl: "https://www.instagram.com/my_tabib",
      instagramHandle: "@my_tabib",
      likesCount: "4.8K",
      viewsCount: "32.5K",
      reelCover: "/services/service_consultation.png",
      hasReel: true
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
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      instagramUrl: "https://www.instagram.com/my_tabib",
      instagramHandle: "@my_tabib",
      likesCount: "6.2K",
      viewsCount: "48.1K",
      reelCover: "/services/service_hospital.png",
      hasReel: true
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
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      instagramUrl: "https://www.instagram.com/my_tabib",
      instagramHandle: "@my_tabib",
      likesCount: "3.9K",
      viewsCount: "29.4K",
      reelCover: "/treatments/treatment_spine.png",
      hasReel: true
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
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      instagramUrl: "https://www.instagram.com/my_tabib",
      instagramHandle: "@my_tabib",
      likesCount: "5.5K",
      viewsCount: "41.0K",
      reelCover: "/treatments/treatment_cardio.png",
      hasReel: true
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
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
      instagramUrl: "https://www.instagram.com/my_tabib",
      instagramHandle: "@my_tabib",
      likesCount: "7.1K",
      viewsCount: "53.8K",
      reelCover: "/treatments/treatment_dental.png",
      hasReel: true
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const openInstagramReel = (e, review) => {
    e.stopPropagation();
    setSelectedReview(review);
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
              <span>VERIFIED PATIENT REVIEWS & INSTAGRAM REELS</span>
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
              className="snap-start flex-shrink-0 w-85 sm:w-96 rounded-3xl p-6 bg-white/5 border border-white/10 hover:border-[#00C4FA]/50 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header Rating, Verified Pill & Instagram Reel Icon */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-[#D4AF37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00C4FA]/15 border border-[#00C4FA]/30 text-[#00C4FA] text-[10px] font-bold">
                      <ShieldCheck className="w-3 h-3" />
                      <span>Verified</span>
                    </span>

                    {/* Instagram Reel Trigger Button */}
                    <button
                      onClick={(e) => openInstagramReel(e, item)}
                      title="Watch Patient Story on Instagram Reel @my_tabib"
                      className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white text-[10px] font-bold shadow-md hover:scale-105 active:scale-95 transition-transform"
                    >
                      <InstagramIcon className="w-3.5 h-3.5" />
                      <span>Reel</span>
                    </button>
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-gray-200 leading-relaxed font-editorial mb-4 italic">
                  "{lang === 'ar' ? item.quoteAr : item.quoteEn}"
                </p>
              </div>

              {/* Patient Profile & Reel CTA Footer */}
              <div>
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]"
                      />
                      {/* Gradient Ring Badge */}
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white border border-[#062B28]">
                        <InstagramIcon className="w-2.5 h-2.5" />
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug flex items-center gap-1.5">
                        <span>{lang === 'ar' ? item.arabicName : item.name}</span>
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

                {/* Quick Instagram Reel Banner Strip */}
                <div 
                  onClick={(e) => openInstagramReel(e, item)}
                  className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-white/10 via-white/5 to-transparent border border-white/10 hover:border-[#ee2a7b]/50 flex items-center justify-between text-xs transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] flex items-center justify-center text-white shadow-sm">
                      <Play className="w-3 h-3 fill-current ml-0.5" />
                    </div>
                    <span className="text-[11px] font-medium text-gray-200">Watch Reel @my_tabib</span>
                  </div>
                  <span className="text-[10px] text-[#00C4FA] font-bold flex items-center gap-1">
                    {item.viewsCount} views
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for Full Instagram Reel & Patient Review Story */}
        <AnimatePresence>
          {selectedReview && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-3xl bg-[#062B28] border border-[#D4AF37]/40 text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedReview(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left Side: Simulated Instagram Reel Player */}
                <div className="w-full md:w-1/2 bg-black relative flex flex-col justify-between p-6 min-h-[360px] md:min-h-[480px]">
                  {/* Reel Background Preview Image */}
                  <img 
                    src={selectedReview.reelCover || selectedReview.avatar} 
                    alt="Instagram Reel" 
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/60" />

                  {/* Reel Top Bar */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-0.5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
                        <img src={selectedReview.avatar} alt="Profile" className="w-8 h-8 rounded-full object-cover border border-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-white block leading-none">{selectedReview.instagramHandle}</span>
                        <span className="text-[10px] text-gray-300">mytabib Patient Story</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 rounded-full bg-black/50 text-white border border-white/20 backdrop-blur-md"
                    >
                      {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Reel Center Play Button Overlay */}
                  <div className="relative z-10 self-center text-center my-auto">
                    <button 
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-2xl border-2 border-white/40 hover:scale-110 transition-transform"
                    >
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </button>
                    <span className="inline-block mt-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-semibold text-gray-200 border border-white/20">
                      🎬 Reel Video Review
                    </span>
                  </div>

                  {/* Reel Bottom Action Overlay */}
                  <div className="relative z-10 flex items-end justify-between">
                    <div className="space-y-1 text-xs text-gray-200">
                      <p className="font-bold text-white">{selectedReview.name}</p>
                      <p className="line-clamp-2 text-gray-300">{lang === 'ar' ? selectedReview.quoteAr : selectedReview.quoteEn}</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-white ml-4">
                      <button className="flex flex-col items-center gap-0.5">
                        <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
                        <span className="text-[10px] font-bold">{selectedReview.likesCount}</span>
                      </button>
                      <button className="flex flex-col items-center gap-0.5">
                        <Eye className="w-5 h-5 text-[#00C4FA]" />
                        <span className="text-[10px] font-bold">{selectedReview.viewsCount}</span>
                      </button>
                      <button className="flex flex-col items-center gap-0.5">
                        <Share2 className="w-5 h-5 text-gray-300" />
                        <span className="text-[10px] font-bold">Share</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Side: Detailed Review & Instagram Redirect CTA */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    {/* Patient Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={selectedReview.avatar}
                        alt={selectedReview.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-white">{lang === 'ar' ? selectedReview.arabicName : selectedReview.name}</h3>
                        <p className="text-xs text-[#00C4FA] font-medium flex items-center gap-1">
                          <span>{selectedReview.countryFlag}</span>
                          <span>{selectedReview.country}</span>
                        </p>
                        <span className="text-xs text-[#D4AF37] block mt-1 font-semibold">
                          {lang === 'ar' ? selectedReview.treatmentAr : selectedReview.treatment} • {selectedReview.hospital}
                        </span>
                      </div>
                    </div>

                    {/* Star Rating & Verified */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-[#D4AF37]">
                        {[...Array(selectedReview.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-[#00C4FA] bg-[#00C4FA]/10 px-2.5 py-0.5 rounded-full border border-[#00C4FA]/30">
                        Verified Hospital Patient
                      </span>
                    </div>

                    {/* Review Quote Text */}
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6">
                      <p className="text-sm text-gray-200 leading-relaxed font-editorial italic">
                        "{lang === 'ar' ? selectedReview.quoteAr : selectedReview.quoteEn}"
                      </p>
                    </div>
                  </div>

                  {/* Actions & Instagram Direct Link */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {/* Direct Instagram Link Button */}
                    <a
                      href="https://www.instagram.com/my_tabib"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-xl hover:opacity-95 hover:scale-[1.02] transition-all"
                    >
                      <InstagramIcon className="w-4 h-4" />
                      <span>{lang === 'ar' ? 'مشاهدة الفيديو على إنستغرام @my_tabib' : 'Watch Story on Instagram @my_tabib'}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>

                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span>Treatment Date: {selectedReview.date}</span>
                      <span className="text-[#00C4FA] font-semibold">Verified by mytabib</span>
                    </div>
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
