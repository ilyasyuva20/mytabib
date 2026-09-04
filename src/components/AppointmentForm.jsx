import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, UploadCloud, CheckCircle2, Lock, 
  Send, FileText, X, User, Globe, Phone, Mail, MessageSquare 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AppointmentForm() {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    fullName: '',
    country: 'Saudi Arabia',
    countryCode: '+966',
    whatsapp: '',
    email: '',
    specialty: 'Orthopaedics & Joint Replacement',
    language: 'Arabic',
    notes: ''
  });

  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');
  const fileInputRef = useRef(null);

  const countries = [
    { name: 'Saudi Arabia', code: '+966', flag: '🇸🇦' },
    { name: 'United Arab Emirates', code: '+971', flag: '🇦🇪' },
    { name: 'Oman', code: '+968', flag: '🇴🇲' },
    { name: 'Qatar', code: '+974', flag: '🇶🇦' },
    { name: 'Kuwait', code: '+965', flag: '🇰🇼' },
    { name: 'Bahrain', code: '+973', flag: '🇧🇭' },
    { name: 'Iraq', code: '+964', flag: '🇮🇶' },
    { name: 'Yemen', code: '+967', flag: '🇾🇪' },
    { name: 'India', code: '+91', flag: '🇮🇳' },
    { name: 'Other International', code: '+1', flag: '🌐' }
  ];

  const specialties = [
    'Orthopaedics & Joint Replacement',
    'Spine Care',
    'Brain & Neurosurgery',
    'Cardiology & Cardiac Surgery',
    'Gastroenterology & Hepatology',
    'Dental Care & Full-Mouth Rehabilitation',
    'Ophthalmology & Eye Surgery',
    'Ayurveda & Rehabilitation',
    'Fertility & IVF',
    'ENT & Head & Neck Care',
    'Other Specialized Treatments'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (e) => {
    const selected = countries.find(c => c.name === e.target.value);
    if (selected) {
      setFormData(prev => ({
        ...prev,
        country: selected.name,
        countryCode: selected.code
      }));
    }
  };

  // Drag & Drop Handlers with Spring Physics State
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      addFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      addFiles(Array.from(e.target.files));
    }
  };

  const addFiles = (newFiles) => {
    const validFiles = newFiles.filter(file => {
      const sizeMB = file.size / (1024 * 1024);
      return sizeMB <= 25; // 25MB limit
    });
    setFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataObj = new FormData();
    // Use clear field names for the email formatting
    formDataObj.append("Name", formData.fullName);
    formDataObj.append("Email", formData.email);
    formDataObj.append("WhatsApp", `${formData.countryCode} ${formData.whatsapp}`);
    formDataObj.append("Country", formData.country);
    formDataObj.append("Required Treatment", formData.specialty);
    formDataObj.append("Preferred Language", formData.language);
    formDataObj.append("Medical Notes", formData.notes || "None provided");
    formDataObj.append("_subject", `New Medical Request: ${formData.fullName}`);

    // Append medical files
    files.forEach((file, index) => {
      formDataObj.append(`Medical_Report_${index + 1}`, file);
    });

    try {
      // Send directly to the provided email using FormSubmit
      const response = await fetch("https://formsubmit.co/ajax/mytabib@outlook.com", {
        method: "POST",
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setReferenceId(`#MYT-${Math.floor(100000 + Math.random() * 900000)}`);
        setIsSubmitting(false);
        setIsSubmitted(true);
      } else {
        alert("There was an issue sending your request. Please try again or contact via WhatsApp.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("A network error occurred. Please try again or contact via WhatsApp.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="appointment" className="py-20 lg:py-28 px-4 sm:px-8 bg-[#F8FAF9] dark:bg-[#021110] relative border-t border-[#062B28]/10 dark:border-white/10">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B28] text-white border border-[#D4AF37]/30 text-xs font-bold uppercase tracking-wider mb-3 shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#00C4FA]" />
            <span>CONFIDENTIAL MEDICAL COORDINATION</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#062B28] dark:text-white">
            {t.appointment.title}
          </h2>

          <p className="text-sm sm:text-base text-[#5A6C67] dark:text-gray-400 font-arabic mt-3 max-w-2xl">
            {t.appointment.subtitle}
          </p>
        </div>

        {/* High-Trust Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-white dark:bg-[#041F1D] p-6 sm:p-10 border border-[#062B28]/15 dark:border-white/10 shadow-2xl relative overflow-hidden"
        >
          {/* Top Emerald Header Strip */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#062B28] via-[#00C4FA] to-[#D4AF37]" />

          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-20 h-20 rounded-full bg-[#062B28] text-[#00C4FA] flex items-center justify-center border-4 border-[#00C4FA]/30 shadow-xl animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#062B28] dark:text-white">
                {lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Medical Coordination Request Received!'}
              </h3>
              <p className="text-sm text-[#5A6C67] max-w-md font-arabic">
                شكرًا لك. سيتواصل معك أحد منسقي مي طبيب المختصين باللغة العربية عبر الواتساب أو الهاتف لمراجعة التقارير وتوفير التقييم الطبي المعتمد.
              </p>
              <div className="p-4 rounded-2xl bg-[#F8FAF9] border border-[#062B28]/10 text-xs text-[#062B28] font-bold">
                Reference ID: {referenceId}
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFiles([]);
                  setFormData({
                    fullName: '',
                    country: 'Saudi Arabia',
                    countryCode: '+966',
                    whatsapp: '',
                    email: '',
                    specialty: 'Orthopaedics & Joint Care',
                    language: 'Arabic',
                    notes: ''
                  });
                }}
                className="px-6 py-2.5 rounded-full bg-[#062B28] text-white font-bold text-xs hover:bg-[#041F1D]"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Full Name & Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#00C4FA]" />
                    <span>{t.appointment.nameLabel} *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="e.g. Sheikh Ahmed Al-Sabah"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#00C4FA]" />
                    <span>{t.appointment.countryLabel} *</span>
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                  >
                    {countries.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.flag} {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 2: WhatsApp Number & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>{t.appointment.phoneLabel} *</span>
                  </label>
                  <div className="flex gap-2">
                    <span className="px-3.5 py-3 rounded-2xl bg-[#062B28] text-white font-mono text-sm flex items-center justify-center font-bold">
                      {formData.countryCode}
                    </span>
                    <input
                      type="tel"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="50 123 4567"
                      className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#00C4FA]" />
                    <span>{t.appointment.emailLabel} *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="patient@example.com"
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Specialty & Preferred Language */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2">
                    {t.appointment.treatmentLabel} *
                  </label>
                  <select
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                  >
                    {specialties.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2">
                    {t.appointment.langLabel} *
                  </label>
                  <select
                    name="language"
                    value={formData.language}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                  >
                    <option value="Arabic">العربية (Arabic)</option>
                    <option value="English">English</option>
                    <option value="Malayalam">Malayalam</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Brief Medical Requirement */}
              <div>
                <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#00C4FA]" />
                  <span>{t.appointment.notesLabel}</span>
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Please describe your current condition, doctor recommendations, or specific questions..."
                  className="w-full px-4 py-3 rounded-2xl bg-[#F8FAF9] dark:bg-[#021110] border border-[#062B28]/15 dark:border-white/15 text-sm text-[#1A2321] dark:text-white focus:outline-none focus:border-[#00C4FA] focus:bg-white dark:focus:bg-[#041F1D] transition-all"
                />
              </div>

              {/* Row 5: Custom Drag-and-Drop Medical Report Uploader */}
              <div>
                <label className="block text-xs font-bold text-[#062B28] dark:text-white mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{t.appointment.uploadLabel}</span>
                  </span>
                  <span className="text-[11px] text-[#5A6C67] dark:text-gray-400 font-normal">Max 25MB total</span>
                </label>

                <motion.div
                  animate={{ scale: isDragging ? 1.02 : 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center transition-all duration-300 ${
                    isDragging
                      ? 'border-[#00C4FA] bg-[#00C4FA]/10 shadow-lg'
                      : 'border-[#062B28]/20 dark:border-white/20 bg-[#F8FAF9] dark:bg-[#021110] hover:border-[#00C4FA]/50 hover:bg-white dark:hover:bg-[#041F1D]'
                  }`}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.dicom"
                    className="hidden"
                  />

                  <UploadCloud className={`w-10 h-10 mx-auto mb-2 transition-transform duration-300 ${isDragging ? 'scale-110 text-[#00C4FA]' : 'text-[#062B28]'}`} />
                  <p className="text-xs font-bold text-[#062B28] dark:text-white mb-1">
                    {t.appointment.uploadDropText}
                  </p>
                  <p className="text-[11px] text-[#5A6C67]">
                    Supports MRI scans, X-Rays, Lab Bloodwork, Doctor Prescriptions (PDF, JPG, PNG)
                  </p>
                </motion.div>

                {/* Uploaded Files List */}
                {files.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#062B28] text-white text-xs">
                        <div className="flex items-center gap-2 overflow-hidden">
                          <FileText className="w-4 h-4 text-[#00C4FA] flex-shrink-0" />
                          <span className="truncate font-medium">{file.name}</span>
                          <span className="text-[10px] text-gray-400">({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFile(idx)}
                          className="p-1 rounded-full text-gray-400 hover:text-red-400"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Privacy Guardrail Badge */}
              <div className="p-4 rounded-2xl bg-[#062B28]/5 dark:bg-white/5 border border-[#062B28]/10 dark:border-white/10 flex items-center gap-3 text-xs text-[#062B28] dark:text-gray-200">
                <Lock className="w-5 h-5 text-[#00C4FA] flex-shrink-0" />
                <span className="leading-snug">{t.appointment.privacyGuard}</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#062B28] via-[#041F1D] to-[#062B28] text-white font-bold text-base shadow-xl shadow-[#062B28]/30 hover:shadow-2xl transition-all duration-300 border border-[#D4AF37]/40 flex items-center justify-center gap-3 hover:scale-[1.01] active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Processing Medical Request...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5 text-[#00C4FA]" />
                    <span>{t.appointment.submitBtn}</span>
                  </>
                )}
              </button>

            </form>
          )}

        </motion.div>

      </div>
    </section>
  );
}
