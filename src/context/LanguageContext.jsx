import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      treatments: "Treatments",
      testimonials: "Testimonials",
      contact: "Contact",
      bookAppointment: "Book Now",
      whatsappUs: "WhatsApp Us",
      tagline: "Services Beyond Boundaries"
    },
    hero: {
      tag: "SERVICES BEYOND BOUNDARIES",
      headline: "Healthcare Beyond Borders. Personal Care Throughout the Journey.",
      arabicSub: "Services Beyond Boundaries",
      narrative: "mytabib helps international patients access world-class healthcare in Kerala, India, while coordinating every detail surrounding their treatment — from initial medical review to airport reception, lodging, personal translation, and post-care recovery.",
      ctaPrimary: "Book Now",
      ctaSecondary: "WhatsApp Us",
      badge1: "Accredited Hospital Network",
      badge2: "End-to-End Arabic Support",
      badge3: "Complete Medical Visa Guidance"
    },
    flight: {
      title: "Seamless Patient Travel Pathway",
      subtitle: "Connecting the Gulf Region Directly to Kerala's World-Class Medical Hubs",
      from: "Departure Cities (GCC)",
      to: "Destination: Kerala, India",
      flightDuration: "Approx. 3.5 - 4 Hours Direct Flight",
      pickupNotice: "Dedicated Arabic-speaking chauffeur waiting at airport arrival"
    },
    about: {
      title: "Care That Goes Beyond Treatment",
      subTitle: "BRIDGING INTERNATIONAL PATIENTS & KERALA HEALTHCARE",
      leftNarrative1: "Seeking medical treatment in a foreign country can feel overwhelming. Patients often navigate complex challenges—from selecting the right specialist to bridging language barriers, securing visas, and arranging comfortable accommodation.",
      leftNarrative2: "mytabib was established to eliminate this friction. We operate as your dedicated personal concierge in Kerala, ensuring that your healthcare journey is dignified, transparent, and seamlessly coordinated every step of the way.",
      missionTitle: "Our Mission",
      missionDesc: "To make accessing world-class healthcare in India effortless for international patients through reliable coordination, clear communication, and empathetic personal support.",
      visionTitle: "Our Vision",
      visionDesc: "To become the most trusted bridge between international patients—particularly from GCC countries—and premier accredited healthcare providers in India."
    },
    services: {
      title: "Support Throughout Your Medical Journey",
      subtitle: "7 Concierge Services Tailored for International Patients",
      highlightBadge: "Subtly Highlighted Arabic Assistance",
      timelineTitle: "Interactive Patient Journey Timeline"
    },
    treatments: {
      title: "Medical Specialties We Coordinate",
      subtitle: "Partnering with JCI & NABH Accredited Centers of Excellence in Kerala",
      all: "All Specialties",
      customNote: "Don't see your specific condition? Contact us with your medical reports for a personalized medical evaluation."
    },
    testimonials: {
      title: "Patient Experiences — Stories Built on Trust",
      subtitle: "Real journeys from GCC patients who received care in Kerala through mytabib"
    },
    appointment: {
      title: "Start Your Medical Journey",
      subtitle: "Share your medical requirement with us and our specialized medical coordination team will contact you within 24 hours.",
      nameLabel: "Full Name",
      countryLabel: "Country of Residence",
      phoneLabel: "WhatsApp Number",
      emailLabel: "Email Address",
      treatmentLabel: "Treatment / Specialty Required",
      langLabel: "Preferred Contact Language",
      notesLabel: "Brief Medical Requirement / Symptoms",
      uploadLabel: "Upload Medical Reports (PDF, JPG, PNG)",
      uploadDropText: "Drag & drop your medical files here, or click to browse",
      submitBtn: "Submit Request",
      privacyGuard: "Your medical information is strictly confidential and used exclusively for healthcare coordination."
    },
    contact: {
      title: "We Are Here For You 24/7",
      subtitle: "Reach out via Phone, WhatsApp, or Email for immediate medical coordination",
      phone1: "+91 85478 42167",
      phone2: "+91 97455 78473",
      email: "mytabib@outlook.com",
      location: "Kerala, India",
      languages: "Arabic, English & Malayalam",
      quickLinks: "Quick Links",
      copyright: "© 2026 mytabib. All rights reserved. Services Beyond Boundaries."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      treatments: "التخصصات العلاجية",
      testimonials: "تجارب المرضى",
      contact: "تواصل معنا",
      bookAppointment: "احجز الآن",
      whatsappUs: "واتساب",
      tagline: "خدمات بلا حدود"
    },
    hero: {
      tag: "خدمات بلا حدود",
      headline: "رعاية صحية بلا حدود. اهتمام شخصي طوال الرحلة.",
      arabicSub: "خدمات بلا حدود — Services Beyond Boundaries",
      narrative: "تساعدك \"مي طبيب\" في الوصول إلى أحدث الرعاية الطبية في ولاية كيرالا، الهند، مع تنسيق كافة التفاصيل الخاصة برحلتك العلاجية — من التقييم الطبي الأول إلى الاستقبال في المطار، الإقامة، المترجم الشخصي، ومتابعة التعافي.",
      ctaPrimary: "احجز الآن",
      ctaSecondary: "تواصل عبر الواتساب",
      badge1: "شبكة مستشفيات معتمدة دولياً",
      badge2: "دعم ومرافقة باللغة العربية",
      badge3: "إرشاد كامل للتأشيرة الطبية"
    },
    flight: {
      title: "مسار السفر العلاجي السلس",
      subtitle: "ربط دول الخليج العربي مباشرة بأفضل المراكز الطبية في كيرالا",
      from: "مدن المغادرة (دول الخليج)",
      to: "الوجهة: كيرالا، الهند",
      flightDuration: "رحلة مباشرة حوالي 3.5 - 4 ساعات",
      pickupNotice: "سائق خاص يتحدث العربية في انتظارك في صالة الوصول"
    },
    about: {
      title: "رعاية تتجاوز حدود العلاج",
      subTitle: "جسر التواصل بين المرضى الدوليين والرعاية الصحية في كيرالا",
      leftNarrative1: "قد يكون السفر للعلاج في الخارج أمراً مرهقاً. يواجه المرضى تحديات متعددة من اختيار الطبيب المناسب، إلى حاجز اللغة، واستخراج التأشيرات، وترتيب الإقامة المريحة.",
      leftNarrative2: "تأسست \"مي طبيب\" لإزالة هذه العقبات. نعمل كمساعدك الشخصي الخاص في كيرالا، لنضمن أن تكون رحلتك العلاجية مريحة، شفافة، ومصحوبة بالدعم الكامل في كل خطوة.",
      missionTitle: "مهمتنا",
      missionDesc: "تسهيل الوصول إلى رعاية صحية عالمية المستوى في الهند للمرضى الدوليين من خلال التنسيق الموثوق، التواصل الواضح، والدعم الشخصي الإنساني.",
      visionTitle: "رؤيتنا",
      visionDesc: "أن نكون الجسر الأكثر ثقة بين المرضى الدوليين — وخاصة من دول الخليج العربي — وأرقى مستشفيات الهند المعتمدة."
    },
    services: {
      title: "دعم متكامل خلال رحلتك العلاجية",
      subtitle: "7 خدمات تنسيقية مخصصة لراحة المرضى الدوليين وعائلاتهم",
      highlightBadge: "خدمة الترجمة والمرافقة العربية المتميزة",
      timelineTitle: "الجدول الزمني لرحلة المريض"
    },
    treatments: {
      title: "التخصصات الطبية التي ننسقها",
      subtitle: "بالتعاون مع أكبر المستشفيات المعتمدة من JCI و NABH في كيرالا",
      all: "جميع التخصصات",
      customNote: "هل لديك حالة خاصة؟ تواصل معنا وأرسل تقاريرك الطبية للحصول على تقييم طبي مخصص."
    },
    testimonials: {
      title: "تجارب المرضى — قصص بنيت على الثقة",
      subtitle: "تجارب حقيقية لمرضى من الخليج العربي تلقوا العلاج في كيرالا عبر مي طبيب"
    },
    appointment: {
      title: "ابدأ رحلتك العلاجية اليوم",
      subtitle: "شاركنا متطلباتك الطبية وسيتواصل معك فريق التنسيق الطبي المختص خلال 24 ساعة.",
      nameLabel: "الاسم الكامل",
      countryLabel: "بلد الإقامة",
      phoneLabel: "رقم الواتساب",
      emailLabel: "البريد الإلكتروني",
      treatmentLabel: "التخصص أو العلاج المطلوب",
      langLabel: "لغة التواصل المفضلة",
      notesLabel: "ملخص الحالة الطبية / الأعراض",
      uploadLabel: "رفع التقارير الطبية (PDF, JPG, PNG)",
      uploadDropText: "اسحب وأسقط ملفاتك الطبية هنا، أو انقر للاستعراض",
      submitBtn: "إرسال الطلب",
      privacyGuard: "معلوماتك الطبية محاطة بالسرية التامة وتستخدم حصرياً للتنسيق الطبي."
    },
    contact: {
      title: "نحن هنا لخدمتك على مدار الساعة",
      subtitle: "تواصل معنا عبر الهاتف، الواتساب، أو البريد الإلكتروني للتنسيق الطبي الفوري",
      phone1: "+91 85478 42167",
      phone2: "+91 97455 78473",
      email: "mytabib@outlook.com",
      location: "كيرالا، الهند",
      languages: "العربية، الإنجليزية، والمليالم",
      quickLinks: "روابط سريعة",
      copyright: "© 2026 مي طبيب. جميع الحقوق محفوظة. خدمات بلا حدود."
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' or 'ar'

  const toggleLanguage = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage, t, isRTL: lang === 'ar' }}>
      <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className={lang === 'ar' ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
