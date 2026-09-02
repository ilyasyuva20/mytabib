import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Logo({ size = 'medium', variant = 'dark', showTagline = false, className = '' }) {
  const { lang } = useLanguage();

  // Balanced size presets - adjusted to be slightly smaller and well-proportioned
  const sizeClasses = {
    small: 'h-10 sm:h-9',
    medium: 'h-13 sm:h-13',
    large: 'h-16 sm:h-16',
    xlarge: 'h-20 sm:h-22'
  };

  const isDarkBg = variant === 'dark' || variant === 'emerald';

  // Exact uploaded logo image variants:
  // - logo-transparent.png for dark/emerald backgrounds (white text, cyan ribbons)
  // - logo-lightbg.png for light backgrounds (dark text, cyan ribbons)
  const logoSrc = isDarkBg ? '/logo-transparent.png' : '/logo-lightbg.png';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Exact Uploaded Logo Image */}
      <div className={`relative ${sizeClasses[size] || 'h-9 sm:h-12'} flex items-center`}>
        <img 
          src={logoSrc} 
          alt="mytabib logo" 
          className="h-full w-auto object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {showTagline && (
        <span className={`text-xs sm:text-sm tracking-wider ${lang === 'ar' ? 'font-arabic' : 'font-medium'} ${isDarkBg ? 'text-[#00C4FA]' : 'text-[#062B28]'} font-bold border-l-2 ${isDarkBg ? 'border-[#00C4FA]/40' : 'border-[#062B28]/20'} pl-2.5 ml-1 hidden sm:inline-block`}>
          {lang === 'ar' ? 'خدمات بلا حدود' : 'Services Beyond Boundaries'}
        </span>
      )}
    </div>
  );
}
