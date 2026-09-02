import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Bone, Activity, Smile, Heart, Stethoscope, Scale, Sparkles, 
  Eye, Ear, Leaf, HelpCircle, ArrowRight, CheckCircle2, Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Treatments() {
  const { lang, t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('All');

  const specialties = [
    {
      id: 'ortho',
      category: 'Surgical',
      nameEn: 'Orthopaedics & Joint Care',
      nameAr: 'جراحة العظام والمفاصل',
      descEn: 'Robotic knee & hip replacements, complex fracture reconstruction, and arthroscopic sports medicine.',
      descAr: "استبدال الركبة والحوض بالروبوت، ترميم الكسور المعقدة، وجراحات المناظير الرياضية.",
      icon: Bone,
      highlights: ['Robotic Knee Replacement', 'Hip Resurfacing', 'Spinal Fusion'],
      stayDuration: '7 - 14 Days Recovery'
    },
    {
      id: 'spine',
      category: 'Surgical',
      nameEn: 'Spine & Neurosurgery',
      nameAr: 'جراحة العمود الفقري والأعصاب',
      descEn: 'Minimally invasive spine surgery (MISS), disc replacement, and neuro-oncology interventions.',
      descAr: "جراحات العمود الفقري بالمناظير التدخلية، استبدال الديسك، وجراحات الأورام العصبية.",
      icon: Activity,
      highlights: ['Micro-Discectomy', 'Spinal Decompression', 'Brain Tumor Resection'],
      stayDuration: '10 - 18 Days Recovery'
    },
    {
      id: 'dental',
      category: 'Cosmetic & Care',
      nameEn: 'Dental Care & Surgery',
      nameAr: 'طب وتجميل الأسنان الجراحي',
      descEn: 'All-on-4 / All-on-6 dental implants, full mouth rehabilitation, and aesthetic smile designing.',
      descAr: "زراعة الأسنان الفورية All-on-4/6، إعادة تأهيل الفك الكامل، وتصميم الابتسامة التجميلية.",
      icon: Smile,
      highlights: ['Zirconia Implants', 'Full Mouth Rehab', 'Maxillofacial Surgery'],
      stayDuration: '3 - 7 Days'
    },
    {
      id: 'cardio',
      category: 'Surgical',
      nameEn: 'Cardiology & Cardiac Surgery',
      nameAr: 'أمراض وجراحة القلب والأوعية',
      descEn: 'Coronary artery bypass grafting (CABG), TAVI, heart valve repair, and pediatric cardiology.',
      descAr: "عمليات قلب المفتوح (CABG)، زراعة الصمامات بالقسطرة، وقسطرة الشرايين المعقدة.",
      icon: Heart,
      highlights: ['CABG Bypass', 'TAVI Valve Repair', 'Pediatric Heart Surgery'],
      stayDuration: '12 - 21 Days'
    },
    {
      id: 'gastro',
      category: 'Surgical',
      nameEn: 'Gastroenterology & Hepatology',
      nameAr: 'أمراض الجهاز الهضمي والكبد',
      descEn: 'Advanced endoscopic procedures, liver transplant coordination, and GI oncology care.',
      descAr: "مناظير الجهاز الهضمي المتقدمة، زراعة الكبد، وعلاج أورام القناة الهضمية.",
      icon: Stethoscope,
      highlights: ['Liver Transplant', 'ERCP Endoscopy', 'GI Surgery'],
      stayDuration: '14 - 28 Days'
    },
    {
      id: 'bariatric',
      category: 'Surgical',
      nameEn: 'Bariatric & Weight-Loss Surgery',
      nameAr: 'جراحات السمنة وتكميم المعدة',
      descEn: 'Laparoscopic gastric sleeve, gastric bypass, and metabolic surgery for long-term weight wellness.',
      descAr: "تكميم المعدة بالمنظار، تحويل المسار، وجراحات الأيض للتخلص من السمنة المفرطة.",
      icon: Scale,
      highlights: ['Laparoscopic Sleeve', 'Roux-en-Y Bypass', 'Post-Op Nutrition'],
      stayDuration: '5 - 10 Days'
    },
    {
      id: 'fertility',
      category: 'Specialized',
      nameEn: 'Fertility & IVF',
      nameAr: 'علاج العقم والأخصاب المساعد (IVF)',
      descEn: 'High success rate IVF, ICSI, genetic testing (PGD/PGS), and reproductive endocrinology.',
      descAr: "تقنيات الحقن المجهري (IVF/ICSI)، الفحص الجيني للأجنة، وعلاج أسباب تأخر الإنجاب.",
      icon: Sparkles,
      highlights: ['IVF / ICSI Cycles', 'Genetic Screening (PGD)', 'Male Infertility Care'],
      stayDuration: '14 - 21 Days'
    },
    {
      id: 'eyecare',
      category: 'Specialized',
      nameEn: 'Ophthalmology & Eye Surgery',
      nameAr: 'طب وجراحة العيون واللايزك',
      descEn: 'Femto-LASIK, corneal transplants, advanced cataract phacoemulsification, and retinal surgery.',
      descAr: "عمليات تصحيح النظر بالفيمتو لايزك، زراعة القرنية، وإزالة المياه البيضاء بأحدث التقنيات.",
      icon: Eye,
      highlights: ['Femto-LASIK', 'Cataract Phaco', 'Retinal Detachment Repair'],
      stayDuration: '3 - 7 Days'
    },
    {
      id: 'ent',
      category: 'Specialized',
      nameEn: 'ENT & Head & Neck Surgery',
      nameAr: 'أمراض الأذن وأنف وحنجرة',
      descEn: 'Cochlear implant surgery, endoscopic sinus surgery, and vocal cord restoration.',
      descAr: "زراعة القوقعة للأطفال والكبار، جراحات الجيوب الأنفية بالمناظير، وجراحات الحنجرة.",
      icon: Ear,
      highlights: ['Cochlear Implants', 'Endoscopic Sinus', 'Tonsillectomy'],
      stayDuration: '4 - 8 Days'
    },
    {
      id: 'ayurveda',
      category: 'Kerala Specialty',
      nameEn: 'Ayurveda & Rehabilitation',
      nameAr: 'الطب الطبيعي التراثي وإعادة التأهيل (كيرالا)',
      descEn: 'Authentic Kerala NABH-accredited Ayurvedic treatments, post-stroke rehab, and joint wellness.',
      descAr: "العلاج الطبيعي والتأهيلي بالطب الشعبي الهندي التقليدي المعتمد (الآيورفيدا) للتعافي الشامل.",
      icon: Leaf,
      highlights: ['Panchakarma Detox', 'Post-Stroke Rehab', 'Arthritis Management'],
      stayDuration: '14 - 28 Days Wellness'
    },
    {
      id: 'custom',
      category: 'Specialized',
      nameEn: 'Other Specialized Treatments',
      nameAr: 'تخصصات وعلاجات أخرى مخصصة',
      descEn: 'Oncology, Urology, Dermatology, and Pediatric Surgeries. Submit your medical reports for customized review.',
      descAr: "علاج الأورام، المسالك البولية، الجلدية، وجراحة الأطفال. تواصل معنا لإجراء تقييم شامل.",
      icon: HelpCircle,
      highlights: ['Oncology & Chemo', 'Urology & Kidney Stone', 'Custom Medical Review'],
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
    <section id="treatments" className="py-20 lg:py-28 px-4 sm:px-8 bg-white border-t border-[#062B28]/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062B28]/5 border border-[#062B28]/15 text-[#062B28] text-xs font-bold uppercase tracking-wider mb-3"
          >
            <Shield className="w-4 h-4 text-[#00C4FA]" />
            <span>SPECIALIZED MEDICAL NETWORK</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#062B28]"
          >
            {t.treatments.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-base sm:text-lg text-[#5A6C67] mt-3 ${lang === 'ar' ? 'font-arabic' : 'font-sans'}`}
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
                  ? 'bg-[#062B28] text-white border border-[#D4AF37]/50 shadow-md'
                  : 'bg-[#F8FAF9] text-[#5A6C67] border border-[#062B28]/10 hover:border-[#062B28]/30 hover:text-[#062B28]'
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
              className="rounded-3xl p-6 bg-[#F8FAF9] border border-[#062B28]/10 hover:border-[#00C4FA]/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#062B28] text-[#00C4FA] flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold text-[#D4AF37] bg-[#062B28]/90 px-2.5 py-1 rounded-full border border-[#D4AF37]/30">
                    {item.stayDuration}
                  </span>
                </div>

                {/* Titles */}
                <h3 className="text-xl font-bold text-[#062B28] mb-1">
                  {lang === 'ar' ? item.nameAr : item.nameEn}
                </h3>
                {lang === 'ar' && (
                  <span className="text-xs text-[#00A2D9] font-sans font-semibold block mb-3">
                    {item.nameEn}
                  </span>
                )}

                {/* Description */}
                <p className="text-xs text-[#5A6C67] leading-relaxed mb-4">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>

                {/* Highlights Pills */}
                <div className="space-y-1.5 mb-6">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#1A2321] font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00C4FA] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={scrollToForm}
                className="w-full py-2.5 rounded-2xl border border-[#062B28]/20 group-hover:border-[#062B28] group-hover:bg-[#062B28] group-hover:text-white text-[#062B28] text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2"
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
          className="mt-12 p-8 rounded-3xl bg-[#062B28] text-white border-2 border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="flex items-center gap-4">
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
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#00C4FA] to-[#00A2D9] text-[#062B28] font-bold text-xs whitespace-nowrap shadow-lg shadow-[#00C4FA]/20 hover:scale-105 transition-transform"
          >
            {t.nav.bookAppointment}
          </button>
        </motion.div>

      </div>
    </section>
  );
}
