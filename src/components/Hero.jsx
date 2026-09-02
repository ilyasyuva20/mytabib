import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Shield, Award, Users, Sparkles, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import FlightArc from './FlightArc';
import WhatsAppIcon from './WhatsAppIcon';

export default function Hero() {
  const { lang, t } = useLanguage();

  const scrollToAppointment = () => {
    const el = document.getElementById('appointment');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-8 overflow-hidden"
      >
        {/* Full Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.png" 
            alt="Compassionate Medical Care" 
            className="w-full h-full object-cover object-top"
          />
          {/* Dark overlay for readability and premium feel */}
          <div className="absolute inset-0 bg-[#041F1D]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#041F1D]/60 via-transparent to-[#F8FAF9] dark:to-[#021110]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center mt-12 sm:mt-16">
          
          {/* Top Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 sm:mb-8"
          >
            <MapPin className="w-4 h-4 text-[#00C4FA]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white uppercase">
              Kochi • Kerala • India
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#D4AF37] leading-[1.1] mb-6 font-editorial"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subtitle / Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={`text-base sm:text-xl text-gray-200 max-w-3xl leading-relaxed mb-10 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
          >
            {t.hero.narrative}
          </motion.p>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
          >
            <button
              onClick={scrollToAppointment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#00C4FA] text-[#062B28] font-bold text-base hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Calendar className="w-5 h-5" />
              <span>{t.hero.ctaPrimary}</span>
            </button>

            <a
              href="https://wa.me/918547842167?text=Hello%20mytabib%20team,%20I%20would%20like%20to%20inquire%20about%20medical%20treatment%20in%20Kerala."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/30 text-white font-bold text-base hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
              <span>{t.hero.ctaSecondary}</span>
            </a>
          </motion.div>

          {/* Glassmorphism Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 sm:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-4xl"
          >
            <div className="bg-[#041F1D]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
              <Shield className="w-8 h-8 text-[#D4AF37] mb-3" />
              <span className="text-lg font-bold text-white mb-1">{t.hero.badge1}</span>
              <span className="text-xs text-gray-300">JCI & NABH Certified</span>
            </div>

            <div className="bg-[#041F1D]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
              <Users className="w-8 h-8 text-[#00C4FA] mb-3" />
              <span className="text-lg font-bold text-white mb-1">{t.hero.badge2}</span>
              <span className="text-xs text-gray-300">Native Arabic Assistance</span>
            </div>

            <div className="bg-[#041F1D]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center transform transition-transform hover:-translate-y-1">
              <Award className="w-8 h-8 text-[#D4AF37] mb-3" />
              <span className="text-lg font-bold text-white mb-1">{t.hero.badge3}</span>
              <span className="text-xs text-gray-300">Visa & Travel Support</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Flight Arc Section (Placed below the main banner on solid background) */}
      <section className="bg-[#F8FAF9] dark:bg-[#021110] py-16 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <FlightArc />
        </motion.div>
      </section>
    </>
  );
}
