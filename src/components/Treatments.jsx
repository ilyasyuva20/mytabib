import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bone, Activity, Smile, Heart, Stethoscope, Scale, Sparkles, 
  Eye, Ear, Leaf, HelpCircle, ArrowRight, CheckCircle2, Shield, ImageIcon
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Treatments() {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const specialties = [
    {
      id: 'ortho',
      category: 'Surgical',
      nameEn: 'Orthopaedics & Joint Replacement',
      nameAr: 'جراحة العظام واستبدال المفاصل',
      descEn: 'Advanced care for joint problems, arthritis, sports injuries and complex orthopaedic conditions.',
      descAr: 'رعاية متقدمة لمشاكل المفاصل والتهاباتها وإصابات الملاعب والحالات المعقدة.',
      icon: Bone,
      image: "/treatments/treatment_ortho.png",
      highlights: [
        'Robotic Knee Replacement',
        'Total Hip Replacement',
        'Arthroscopy & Sports Injuries',
        'Complex Joint Reconstruction'
      ],
      stayDuration: '7 - 14 Days Recovery'
    },
    {
      id: 'spine',
      category: 'Surgical',
      nameEn: 'Spine Care',
      nameAr: 'رعاية وجراحة العمود الفقري',
      descEn: 'Advanced diagnosis and minimally invasive treatment for back, neck and spinal disorders.',
      descAr: 'تشخيص متقدم وعلاج طفيف التوغل لاضطرابات الظهر والرقبة والعمود الفقري.',
      icon: Activity,
      image: "/treatments/treatment_spine.png",
      highlights: [
        'Endoscopic / Minimally Invasive Spine Surgery',
        'Microdiscectomy',
        'Spinal Decompression & Fusion',
        'Cervical Disc Replacement'
      ],
      stayDuration: '10 - 18 Days Recovery'
    },
    {
      id: 'brain',
      category: 'Surgical',
      nameEn: 'Brain & Neurosurgery',
      nameAr: 'جراحة المخ والأعصاب',
      descEn: 'Specialist neurosurgical care for complex brain and neurological conditions.',
      descAr: 'رعاية متخصصة في جراحة الأعصاب للحالات المعقدة للدماغ والجهاز العصبي.',
      icon: Activity,
      image: "/treatments/treatment_brain.png",
      highlights: [
        'Brain Tumour Surgery',
        'Endoscopic Skull Base Surgery',
        'Brain Aneurysm Treatment',
        'Epilepsy Surgery'
      ],
      stayDuration: '10 - 20 Days Recovery'
    },
    {
      id: 'cardio',
      category: 'Surgical',
      nameEn: 'Cardiology & Cardiac Surgery',
      nameAr: 'أمراض وجراحة القلب',
      descEn: 'Advanced heart care covering interventional cardiology and cardiac surgery.',
      descAr: 'رعاية متقدمة للقلب تشمل قسطرة القلب وجراحات القلب المفتوح.',
      icon: Heart,
      image: "/treatments/treatment_cardio.png",
      highlights: [
        'Angioplasty & Stenting',
        'Coronary Bypass Surgery (CABG)',
        'TAVI / TAVR',
        'Electrophysiology & Ablation'
      ],
      stayDuration: '12 - 21 Days'
    },
    {
      id: 'gastro',
      category: 'Surgical',
      nameEn: 'Gastroenterology & Hepatology',
      nameAr: 'أمراض الجهاز الهضمي والكبد',
      descEn: 'Specialist care for digestive, liver, pancreatic and gastrointestinal conditions.',
      descAr: 'رعاية متخصصة لأمراض الجهاز الهضمي والكبد والبنكرياس والقناة الهضمية.',
      icon: Stethoscope,
      image: "/treatments/treatment_gastro.png",
      highlights: [
        'Advanced Endoscopy & ERCP',
        'Liver & Pancreatic Care',
        'Gastrointestinal Surgery',
        'Liver Transplant Evaluation'
      ],
      stayDuration: '14 - 28 Days'
    },
    {
      id: 'dental',
      category: 'Cosmetic & Care',
      nameEn: 'Dental Care & Full-Mouth Rehabilitation',
      nameAr: 'العناية بالأسنان وإعادة تأهيل الفك الكامل',
      descEn: 'Advanced dental solutions for implants, fixed teeth and complete smile rehabilitation.',
      descAr: 'حلول أسنان متقدمة للزراعة والتركيبات الثابتة وتجميل الابتسامة الشامل.',
      icon: Smile,
      image: "/treatments/treatment_dental.png",
      highlights: [
        'Full-Mouth Dental Implants',
        'All-on-4 / All-on-6 Implants',
        'Immediate-Loading Fixed Zirconia Teeth',
        'Full-Mouth Rehabilitation'
      ],
      stayDuration: '3 - 7 Days'
    },
    {
      id: 'eyecare',
      category: 'Specialized',
      nameEn: 'Ophthalmology & Eye Surgery',
      nameAr: 'طب وجراحة العيون',
      descEn: 'Advanced diagnosis and surgical treatment for vision and eye-related conditions.',
      descAr: 'تشخيص متقدم وعلاج جراحي لمشاكل الإبصار وأمراض العيون.',
      icon: Eye,
      image: "/treatments/treatment_eye.png",
      highlights: [
        'Cataract Surgery',
        'LASIK / SMILE Vision Correction',
        'Retina & Vitreous Surgery',
        'Glaucoma Treatment'
      ],
      stayDuration: '3 - 7 Days'
    },
    {
      id: 'ayurveda',
      category: 'Kerala Specialty',
      nameEn: 'Ayurveda & Rehabilitation',
      nameAr: 'الطب الطبيعي (الآيورفيدا) وإعادة التأهيل',
      descEn: 'Personalized rehabilitation programs combining recovery support, physiotherapy and Ayurveda.',
      descAr: 'برامج تأهيلية مخصصة تجمع بين دعم التعافي، العلاج الطبيعي، والآيورفيدا.',
      icon: Leaf,
      image: "/services/service_recovery.png",
      highlights: [
        'Post-Stroke Rehabilitation',
        'Neurological Rehabilitation',
        'Musculoskeletal Rehabilitation',
        'Spine & Joint Rehabilitation'
      ],
      stayDuration: '14 - 28 Days Wellness'
    },
    {
      id: 'fertility',
      category: 'Specialized',
      nameEn: 'Fertility & IVF',
      nameAr: 'علاج العقم والإخصاب المساعد (IVF)',
      descEn: 'Advanced fertility evaluation and assisted reproductive treatment for couples.',
      descAr: 'تقييم متقدم للخصوبة وتقنيات المساعدة على الإنجاب للزوجين.',
      icon: Sparkles,
      image: "/treatments/treatment_ivf.png",
      highlights: [
        'IVF & ICSI',
        'Preimplantation Genetic Testing (PGT)',
        'Male & Female Infertility Care',
        'Fertility Preservation'
      ],
      stayDuration: '14 - 21 Days'
    },
    {
      id: 'ent',
      category: 'Specialized',
      nameEn: 'ENT & Head & Neck Care',
      nameAr: 'أنف وأذن وحنجرة ورعاية الرأس والرقبة',
      descEn: 'Advanced treatment for ear, nose, throat, hearing and head & neck conditions.',
      descAr: 'علاج متقدم لأمراض الأذن والأنف والحنجرة والسمع وجراحات الرأس والرقبة.',
      icon: Ear,
      image: "/treatments/treatment_ent.png",
      highlights: [
        'Cochlear Implantation',
        'Endoscopic Sinus Surgery',
        'Ear & Hearing Surgery',
        'Head & Neck Surgery'
      ],
      stayDuration: '4 - 8 Days'
    },
    {
      id: 'custom',
      category: 'Specialized',
      nameEn: 'Other Specialized Treatments',
      nameAr: 'تخصصات وعلاجات أخرى مخصصة',
      descEn: 'Access specialist care across additional medical disciplines based on your individual requirements.',
      descAr: 'الوصول إلى رعاية متخصصة عبر تخصصات طبية إضافية بناءً على احتياجاتك الفردية.',
      icon: HelpCircle,
      image: "/services/service_consultation.png",
      highlights: [
        'Oncology Care',
        'Urology & Kidney Stone Care',
        'Endocrinology & Diabetes',
        'Paediatric Specialties'
      ],
      stayDuration: 'Varies by Case'
    }
  ];

  const filters = ['All', 'Surgical', 'Specialized', 'Kerala Specialty', 'Cosmetic & Care'];

  const filteredSpecialties = selectedFilter === 'All' 
    ? specialties 
    : specialties.filter(s => s.category === selectedFilter);

  const scrollToForm = () => {
    const el = document.getElementById('appointment');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="treatments" className="py-20 lg:py-28 px-4 sm:px-8 bg-white dark:bg-[#010908] border-t border-[#062B28]/10 dark:border-white/10 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062B28]/5 dark:bg-[#00C4FA]/10 border border-[#062B28]/15 dark:border-[#00C4FA]/30 text-[#062B28] dark:text-[#00C4FA] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Shield className="w-4 h-4 text-[#00C4FA]" />
            <span>SPECIALIZED MEDICAL NETWORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#062B28] dark:text-white"
          >
            {t.treatments.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg text-[#5A6C67] dark:text-gray-300 mt-3 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
          >
            {t.treatments.subtitle}
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-[#062B28] dark:bg-[#00C4FA] text-white dark:text-[#062B28] border border-[#D4AF37]/50 dark:border-transparent shadow-md'
                  : 'bg-[#F8FAF9] dark:bg-[#021110] text-[#5A6C67] dark:text-gray-400 border border-[#062B28]/10 dark:border-white/10 hover:border-[#062B28]/30 dark:hover:border-white/30 hover:text-[#062B28] dark:hover:text-white'
              }`}
            >
              {filter === 'All' ? t.treatments.all : filter}
            </button>
          ))}
        </div>

        {/* Specialty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-3xl p-6 bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/10 dark:border-white/10 hover:border-[#00C4FA]/40 dark:hover:border-[#00C4FA]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                {/* Card Top Image Header */}
                <div className="relative h-48 -mx-6 -mt-6 mb-5 overflow-hidden bg-[#062B28]/10">
                  <img 
                    src={item.image} 
                    alt={item.nameEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAF9] dark:from-[#021110] via-black/20 to-transparent" />
                  
                  {/* Floating Icon & Stay Duration Badge */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <div className="w-10 h-10 rounded-xl bg-[#062B28]/90 backdrop-blur-md text-[#00C4FA] flex items-center justify-center border border-[#00C4FA]/30 shadow-md group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#D4AF37] bg-[#062B28]/90 backdrop-blur-md px-2.5 py-1 rounded-full border border-[#D4AF37]/30 shadow-sm">
                      {item.stayDuration}
                    </span>
                  </div>

                  {/* AI Visual Tag */}
                  <div className="absolute bottom-2 left-3 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[10px] text-gray-200 font-medium">
                    <Sparkles className="w-3 h-3 text-[#00C4FA]" />
                    <span>AI Visual Specialty</span>
                  </div>
                </div>

                {/* Titles */}
                <h3 className="text-xl font-bold text-[#062B28] dark:text-white mb-1">
                  {lang === 'ar' ? item.nameAr : item.nameEn}
                </h3>
                {lang === 'ar' && (
                  <span className="text-xs text-[#00A2D9] font-sans font-semibold block mb-3">
                    {item.nameEn}
                  </span>
                )}

                {/* Description */}
                <p className="text-xs text-[#5A6C67] dark:text-gray-400 leading-relaxed mb-4">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>

                {/* Highlights Pills */}
                <div className="space-y-1.5 mb-6">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1A2321] dark:text-gray-200 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C4FA] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToForm}
                className="w-full py-2.5 rounded-2xl border border-[#062B28]/20 dark:border-white/20 group-hover:border-[#062B28] dark:group-hover:border-[#00C4FA] group-hover:bg-[#062B28] dark:group-hover:bg-[#00C4FA] group-hover:text-white dark:group-hover:text-[#062B28] text-[#062B28] dark:text-white text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>{lang === 'ar' ? 'طلب تقييم الحالة' : 'Inquire for this Treatment'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Custom Condition Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-3xl bg-[#062B28] text-white border-2 border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#00C4FA]/20 border border-[#00C4FA]/30 text-[#00C4FA] flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                {lang === 'ar' ? 'هل تحتاج إلى علاج لحالة طليقة أخرى؟' : 'Have a Specific or Unlisted Medical Condition?'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-200 font-arabic">
                {t.treatments.customNote}
              </p>
            </div>
          </div>

          <button
            onClick={scrollToForm}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00C4FA] to-[#00A2D9] text-[#062B28] font-bold text-xs whitespace-nowrap shadow-lg shadow-[#00C4FA]/20 hover:scale-105 transition-transform relative z-10"
          >
            {t.nav.bookAppointment}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
