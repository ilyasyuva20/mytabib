import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Menu, X, Globe } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../context/LanguageContext';
import WhatsAppIcon from './WhatsAppIcon';

export default function Navbar() {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section tracking
      const sections = ['about', 'services', 'treatments', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Removed 'home' per user request - clicking the Logo serves as Home
  const navLinks = [
    { id: 'about', label: t.nav.about, arLabel: 'من نحن' },
    { id: 'services', label: t.nav.services, arLabel: 'خدماتنا' },
    { id: 'treatments', label: t.nav.treatments, arLabel: 'التخصصات' },
    { id: 'testimonials', label: t.nav.testimonials, arLabel: 'تجارب المرضى' },
    { id: 'contact', label: t.nav.contact, arLabel: 'اتصل بنا' }
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className={`transition-all duration-500 rounded-full px-6 py-2.5 flex items-center justify-between bg-[#062B28]/95 backdrop-blur-xl border text-white ${
          scrolled ? 'shadow-2xl shadow-[#062B28]/40 border-[#D4AF37]/40' : 'shadow-xl shadow-[#062B28]/20 border-[#D4AF37]/30'
        }`}>
          {/* Logo (Serves as Home) */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); scrollTo('home'); }} 
            className="flex items-center gap-2 group py-0.5"
            title="mytabib - Home"
          >
            <Logo size="medium" variant="dark" />
          </a>

          {/* Desktop Navigation Links - Centered & Properly Aligned */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'text-[#00C4FA] font-semibold' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-white/10 border border-[#00C4FA]/40"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action CTAs: Language Switcher & Book Appointment Pill */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-white/20 hover:border-[#00C4FA] text-gray-200 hover:text-[#00C4FA] bg-white/5 transition-all duration-300"
              title="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#00C4FA]" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Highlighted Appointment Pill */}
            <button
              onClick={() => scrollTo('appointment')}
              className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#00C4FA] via-[#00A2D9] to-[#062B28] p-[1.5px] transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-[#00C4FA]/20"
            >
              <span className="flex items-center gap-2 rounded-full bg-[#062B28] px-4.5 py-1.5 text-xs font-bold text-white transition-colors duration-300 group-hover:bg-opacity-90">
                <Calendar className="w-3.5 h-3.5 text-[#00C4FA]" />
                <span>{t.nav.bookAppointment}</span>
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full border text-xs font-bold border-white/20 text-white"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-white hover:bg-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden absolute top-20 left-4 right-4 bg-[#062B28] text-white rounded-3xl p-6 border border-[#D4AF37]/30 shadow-2xl shadow-[#062B28]/50 z-50 backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <Logo size="small" variant="dark" />
                {lang === 'ar' && <span className="text-xs text-[#00C4FA] font-arabic">خدمات بلا حدود</span>}
              </div>

              <div className="flex flex-col gap-2 py-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="flex items-center justify-between py-2.5 px-4 rounded-xl text-start text-sm font-medium hover:bg-white/10 transition-colors text-gray-200 hover:text-white"
                  >
                    <span>{link.label}</span>
                    {lang === 'ar' && <span className="text-xs font-arabic text-[#00C4FA]">{link.arLabel}</span>}
                  </button>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
                <button
                  onClick={() => scrollTo('appointment')}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#00C4FA] to-[#00A2D9] text-[#062B28] font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#00C4FA]/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t.nav.bookAppointment}</span>
                </button>

                <a
                  href="https://wa.me/918547842167?text=Hello%20mytabib%20team,%20I%20would%20like%20to%20inquire%20about%20medical%20treatment%20in%20Kerala."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-full border border-[#25D366] text-[#25D366] font-semibold text-sm flex items-center justify-center gap-2 hover:bg-[#25D366]/10"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp (+91 85478 42167)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
