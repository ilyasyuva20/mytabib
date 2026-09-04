import React from 'react';
import { Phone, Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';
import InstagramIcon from './InstagramIcon';
import YouTubeIcon from './YouTubeIcon';

export default function Footer() {
  const { lang, t } = useLanguage();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#041F1D] text-white pt-20 pb-12 px-4 sm:px-8 border-t border-[#D4AF37]/30 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00C4FA]/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Contact Bar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16 border-b border-white/10">
          
          {/* Contact Item 1: Direct Phone / WhatsApp 1 */}
          <a
            href="https://wa.me/918547842167?text=Hello%20mytabib,%20I%20would%20like%20to%20inquire%20about%20medical%20care."
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#25D366] transition-all duration-300 group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <WhatsAppIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block mb-1">Primary WhatsApp & Phone</span>
              <span className="text-base font-bold text-white group-hover:text-[#25D366] transition-colors">
                +91 85478 42167
              </span>
              {lang === 'ar' && (
                <span className="text-[11px] text-[#00C4FA] block font-arabic mt-1">خدمة الواتساب المباشرة</span>
              )}
            </div>
          </a>

          {/* Contact Item 2: Instagram Page */}
          <a
            href="https://www.instagram.com/my_tabib"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ee2a7b] transition-all duration-300 group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#f9ce34]/20 via-[#ee2a7b]/20 to-[#6228d7]/20 border border-[#ee2a7b]/40 text-[#ee2a7b] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block mb-1">Instagram Official Page</span>
              <span className="text-base font-bold text-white group-hover:text-[#ee2a7b] transition-colors">
                @my_tabib
              </span>
              {lang === 'ar' && (
                <span className="text-[11px] text-[#00C4FA] block font-arabic mt-1">تابعنا على إنستغرام</span>
              )}
            </div>
          </a>

          {/* Contact Item 3: YouTube Channel */}
          <a
            href="https://www.youtube.com/@_mytabib"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0000] transition-all duration-300 group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#FF0000]/15 border border-[#FF0000]/30 text-[#FF0000] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <YouTubeIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block mb-1">YouTube Official Channel</span>
              <span className="text-base font-bold text-white group-hover:text-[#FF0000] transition-colors">
                @_mytabib
              </span>
              {lang === 'ar' && (
                <span className="text-[11px] text-[#00C4FA] block font-arabic mt-1">قناة اليوتيوب الرسمية</span>
              )}
            </div>
          </a>

          {/* Contact Item 4: Email */}
          <a
            href="mailto:mytabib@outlook.com"
            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] transition-all duration-300 group flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-gray-400 block mb-1">Official Email Inquiries</span>
              <span className="text-sm font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                mytabib@outlook.com
              </span>
              {lang === 'ar' && (
                <span className="text-[11px] text-gray-400 block font-arabic mt-1">البريد الإلكتروني الرسمي</span>
              )}
            </div>
          </a>

        </div>

        {/* Main Footer Links & Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <Logo size="large" variant="dark" />
            
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-editorial max-w-md">
              mytabib is a dedicated medical concierge and healthcare travel coordinator operating in Kerala, India. We empower international patients—especially from GCC countries—with seamless hospital matching, native Arabic support, and complete travel care.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/918547842167?text=Hello%20mytabib,%20I%20would%20like%20to%20inquire%20about%20medical%20care."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white bg-[#25D366]/15 border border-[#25D366]/40 hover:border-[#25D366] px-3.5 py-3 rounded-xl transition-colors font-bold"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span>+91 85478 42167</span>
              </a>

              <a
                href="https://www.instagram.com/my_tabib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white bg-gradient-to-r from-[#f9ce34]/20 via-[#ee2a7b]/20 to-[#6228d7]/20 border border-[#ee2a7b]/40 hover:border-[#ee2a7b] px-3.5 py-3 rounded-xl transition-colors font-bold"
              >
                <InstagramIcon className="w-4 h-4 text-[#ee2a7b]" />
                <span>@my_tabib</span>
              </a>

              <a
                href="https://www.youtube.com/@_mytabib"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-white bg-[#FF0000]/15 border border-[#FF0000]/40 hover:border-[#FF0000] px-3.5 py-3 rounded-xl transition-colors font-bold"
              >
                <YouTubeIcon className="w-4 h-4 text-[#FF0000]" />
                <span>@_mytabib</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-4">
              {t.contact.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {['home', 'treatments', 'services', 'about', 'testimonials', 'appointment'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="hover:text-[#00C4FA] transition-colors flex items-center gap-1 capitalize"
                  >
                    <span>{id === 'home' ? 'Home' : id === 'treatments' ? 'Medical Specialties' : id === 'services' ? 'Our Services' : id === 'about' ? 'About Us' : id === 'testimonials' ? 'Patient Testimonials' : 'Book Appointment'}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Reassurance & Accreditation Column */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h4 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2">
              Concierge Excellence
            </h4>
            
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-gray-300">
              <div className="flex items-center gap-2 text-[#00C4FA] font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>NABH & JCI Accredited Hospital Network</span>
              </div>
              <p className="text-[11px] text-gray-400">
                All partnered hospitals adhere to strict international clinical protocols and patient safety guidelines.
              </p>
            </div>

            <div className="text-[11px] text-gray-400 leading-normal">
              Disclaimer: mytabib is a medical tourism & travel coordination agency. Medical evaluations and treatment plans are provided exclusively by certified hospital specialists in Kerala.
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>{t.contact.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Confidentiality</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Coordination</span>
          </div>
        </div>

      </div>

      {/* Docked Floating Social Action Buttons at Bottom Right (YouTube, Instagram & WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
        {/* Floating YouTube Channel Button */}
        <a
          href="https://www.youtube.com/@_mytabib"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FF0000] text-white shadow-2xl shadow-[#FF0000]/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
          aria-label="Visit YouTube @_mytabib"
        >
          <YouTubeIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-black/90 text-white text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/20">
            YouTube @_mytabib
          </span>
        </a>

        {/* Floating Instagram Icon Button */}
        <a
          href="https://www.instagram.com/my_tabib"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-2xl shadow-[#ee2a7b]/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
          aria-label="Visit Instagram @my_tabib"
        >
          <InstagramIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-black/90 text-white text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/20">
            Instagram @my_tabib
          </span>
        </a>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/918547842167?text=Hello%20mytabib%20team,%20I%20would%20like%20to%20inquire%20about%20medical%20treatment%20in%20Kerala."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white group relative"
          aria-label="Direct WhatsApp Chat"
        >
          <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-black/90 text-white text-[11px] font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-white/20">
            WhatsApp Us
          </span>
        </a>
      </div>
    </footer>
  );
}
