import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurServices from './components/OurServices';
import Treatments from './components/Treatments';
import Testimonials from './components/Testimonials';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-[#F8FAF9] dark:bg-[#021110] text-[#1A2321] dark:text-gray-100 selection:bg-[#00B2E3] selection:text-white font-sans antialiased overflow-x-hidden transition-colors duration-300">
          {/* Floating Active Navbar */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          {/* Hero Section (#home) with Parallax Tilt & GCC Flight Arc */}
          <Hero />

          {/* About Us Section (#about) */}
          <AboutUs />

          {/* Our Services Section (#services) with 11 Concierge Services */}
          <OurServices />

          {/* Treatments Section (#treatments) */}
          <Treatments />

          {/* Patient Testimonials Section (#testimonials) */}
          <Testimonials />

          {/* High-Trust Appointment Booking Engine (#appointment) */}
          <AppointmentForm />
        </main>

        {/* Deep Contrast Luxury Footer (#contact) */}
        <Footer />
      </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
