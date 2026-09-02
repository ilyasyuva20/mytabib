import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, MapPin, Clock, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FlightArc() {
  const { lang, t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState('Riyadh');

  const gccCities = [
    {
      id: 'Riyadh',
      nameEn: 'Riyadh, Saudi Arabia',
      nameAr: 'الرياض، المملكة العربية السعودية',
      flightTime: '4 hrs 15 mins',
      frequency: 'Direct Flights Daily',
      coordinator: 'Dedicated Saudi Liaison',
      coords: { x: 18, y: 30 }
    },
    {
      id: 'Dubai',
      nameEn: 'Dubai / Abu Dhabi, UAE',
      nameAr: 'دبي / أبوظبي، الإمارات',
      flightTime: '3 hrs 45 mins',
      frequency: 'Direct Flights 6x Daily',
      coordinator: 'Emirati Concierge Support',
      coords: { x: 38, y: 38 }
    },
    {
      id: 'Muscat',
      nameEn: 'Muscat, Oman',
      nameAr: 'مسقط، عُمان',
      flightTime: '3 hrs 15 mins',
      frequency: 'Direct Flights Daily',
      coordinator: 'Omani Support Manager',
      coords: { x: 48, y: 50 }
    },
    {
      id: 'Doha',
      nameEn: 'Doha, Qatar',
      nameAr: 'الدوحة، قطر',
      flightTime: '4 hrs 00 mins',
      frequency: 'Direct Flights Daily',
      coordinator: 'Qatari Medical Liaison',
      coords: { x: 30, y: 40 }
    },
    {
      id: 'Kuwait',
      nameEn: 'Kuwait City, Kuwait',
      nameAr: 'مدينة الكويت، الكويت',
      flightTime: '4 hrs 30 mins',
      frequency: 'Direct Flights Daily',
      coordinator: 'Kuwaiti Care Coordinator',
      coords: { x: 22, y: 20 }
    },
    {
      id: 'Manama',
      nameEn: 'Manama, Bahrain',
      nameAr: 'المنامة، البحرين',
      flightTime: '4 hrs 10 mins',
      frequency: 'Direct Flights Daily',
      coordinator: 'Bahraini Care Coordinator',
      coords: { x: 28, y: 32 }
    }
  ];

  const currentCityData = gccCities.find(c => c.id === selectedCity) || gccCities[0];

  return (
    <div className="relative w-full rounded-3xl bg-[#041F1D] border border-[#D4AF37]/30 p-6 lg:p-8 text-white overflow-hidden shadow-2xl">
      {/* Background Subtle Gradient Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#00C4FA_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00C4FA]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />

      {/* Header Info */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00C4FA]/15 border border-[#00C4FA]/30 text-[#00C4FA] text-xs font-semibold uppercase tracking-wider mb-2">
            <Plane className="w-3.5 h-3.5" />
            <span>{t.flight.title}</span>
          </div>
          <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-white">
            {lang === 'ar' ? 'مسار السفر المباشر من الخليج إلى كيرالا' : 'Seamless Direct Travel: GCC to Kerala'}
          </h3>
          <p className={`text-xs lg:text-sm text-gray-300 mt-1 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t.flight.subtitle}
          </p>
        </div>

        {/* Selected City Quick Pill */}
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3">
          <div className="w-10 h-10 rounded-xl bg-[#00C4FA]/20 flex items-center justify-center text-[#00C4FA]">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] text-gray-400 block">{lang === 'ar' ? 'مدة الطيران المباشر' : 'Direct Flight Time'}</span>
            <span className="text-sm font-bold text-[#00C4FA]">{currentCityData.flightTime}</span>
          </div>
        </div>
      </div>

      {/* Map Arc Visualization */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive Flight Map SVG */}
        <div className="lg:col-span-7 relative h-72 sm:h-80 w-full bg-[#062B28]/80 rounded-2xl border border-white/10 p-4 overflow-hidden flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 600 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#00C4FA" stopOpacity="1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
              </linearGradient>

              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background Map Regions Silhouette (Stylized GCC & South India) */}
            <path d="M 50,40 Q 150,30 220,100 Q 250,180 180,240 Q 100,220 50,40 Z" fill="#00C4FA" fillOpacity="0.04" stroke="#00C4FA" strokeWidth="1" strokeDasharray="3 3" />
            <path d="M 420,180 Q 500,160 520,240 Q 480,320 440,280 Z" fill="#D4AF37" fillOpacity="0.06" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3" />

            {/* Flight Arc Paths from each GCC city to Kerala (Destination: x: 470, y: 250) */}
            {gccCities.map((city) => {
              const startX = (city.coords.x / 100) * 350 + 40;
              const startY = (city.coords.y / 100) * 200 + 40;
              const endX = 470;
              const endY = 250;
              const isSelected = city.id === selectedCity;

              // Quadratic curve control point for curved flight path
              const ctrlX = (startX + endX) / 2 - 40;
              const ctrlY = Math.min(startY, endY) - 70;

              return (
                <g key={city.id} className="cursor-pointer" onClick={() => setSelectedCity(city.id)}>
                  {/* Flight Path Arc */}
                  <path
                    d={`M ${startX},${startY} Q ${ctrlX},${ctrlY} ${endX},${endY}`}
                    stroke={isSelected ? "url(#arcGradient)" : "rgba(255,255,255,0.15)"}
                    strokeWidth={isSelected ? "3" : "1.5"}
                    strokeDasharray={isSelected ? "6 4" : "4 4"}
                    filter={isSelected ? "url(#glow)" : "none"}
                  />

                  {/* Animated Plane Pulse along selected Arc */}
                  {isSelected && (
                    <motion.circle
                      r="4"
                      fill="#00C4FA"
                      filter="url(#glow)"
                      animate={{
                        cx: [startX, ctrlX, endX],
                        cy: [startY, ctrlY, endY],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}

                  {/* GCC City Node Point */}
                  <circle
                    cx={startX}
                    cy={startY}
                    r={isSelected ? "8" : "5"}
                    fill={isSelected ? "#00C4FA" : "#D4AF37"}
                    stroke="#FFFFFF"
                    strokeWidth={isSelected ? "2" : "1"}
                    className="transition-all duration-300 hover:r-7"
                  />

                  {/* City Label */}
                  <text
                    x={startX}
                    y={startY - 12}
                    fill={isSelected ? "#00C4FA" : "#A0AEC0"}
                    fontSize={isSelected ? "12" : "10"}
                    fontWeight={isSelected ? "bold" : "normal"}
                    textAnchor="middle"
                    className="select-none font-sans"
                  >
                    {city.id}
                  </text>
                </g>
              );
            })}

            {/* Destination Node: Kerala, India */}
            <g transform="translate(470, 250)">
              <circle r="12" fill="#D4AF37" fillOpacity="0.2" className="animate-ping" />
              <circle r="8" fill="#062B28" stroke="#D4AF37" strokeWidth="3" />
              <circle r="4" fill="#00C4FA" />
              <text x="0" y="24" fill="#D4AF37" fontSize="13" fontWeight="bold" textAnchor="middle">
                Kerala, India 🌴
              </text>
              <text x="0" y="38" fill="#FFFFFF" fontSize="9" textAnchor="middle">
                (Kochi / Trivandrum Int. Airport)
              </text>
            </g>
          </svg>

          <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-gray-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00C4FA] animate-pulse" />
            <span>{lang === 'ar' ? 'انقر على مدينتك لعرض التفاصيل' : 'Click any city to view flight & pickup details'}</span>
          </div>
        </div>

        {/* City Info Details Card */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-[#00C4FA]" />
            <span>{lang === 'ar' ? 'اختر مدينة المغادرة' : 'Select Departure City'}</span>
          </div>

          {/* City Selection Tabs */}
          <div className="grid grid-cols-3 gap-2">
            {gccCities.map((city) => (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`py-2 px-2 text-center rounded-xl text-xs font-semibold transition-all duration-300 border ${
                  selectedCity === city.id
                    ? 'bg-[#00C4FA] text-[#062B28] border-[#00C4FA] shadow-md font-bold'
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                {city.id}
              </button>
            ))}
          </div>

          {/* Active City Details Box */}
          <motion.div
            key={selectedCity}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col gap-3"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div>
                <h4 className="text-base font-bold text-white">
                  {lang === 'ar' ? currentCityData.nameAr : currentCityData.nameEn}
                </h4>
                <span className="text-xs text-[#00C4FA]">{currentCityData.frequency}</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold">
                {currentCityData.flightTime}
              </span>
            </div>

            <div className="grid grid-cols-1 gap-2 text-xs">
              <div className="flex items-center gap-2 text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#00C4FA] flex-shrink-0" />
                <span>{lang === 'ar' ? 'مترجم شخصي يتحدث العربية استقبال المطار' : 'Personal Arabic Concierge waiting at Arrival'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>{lang === 'ar' ? 'مساعدة فورية في التأشيرة الطبية السريعة' : 'Express Medical Visa Assistance within 24-48 Hours'}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-200">
                <HeartHandshake className="w-4 h-4 text-[#00C4FA] flex-shrink-0" />
                <span>{lang === 'ar' ? 'نقل خاص فاصل من المطار إلى الفندق/المستشفى' : 'Private Chauffeur Transfer: Airport → Hotel / Hospital'}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
