import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import HeroSection from '../components/HeroSection.jsx';
import ClientMarquee from '../components/ClientMarquee.jsx';
import ErpSolutions from '../components/ErpSolutions.jsx';
import WebAndMarketing from '../components/WebAndMarketing.jsx';
import WhyNadico from '../components/WhyNadico.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import { initScrollReveal } from '../utils/useScrollReveal.js';

export default function HomePage() {
  useEffect(() => {

    // 2. Initialize Bi-Directional Scroll Reveal Observer
    const cleanupScroll = initScrollReveal();

    return () => {
      cleanupScroll();
    };
  }, []);

  return (
    <div className="font-sans antialiased selection:bg-brand-teal selection:text-white relative flex flex-col min-h-screen">
      {/* Fixed IT & Digital Tech Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-50 bg-tech-circuit-overlay"></div>

      <Header />
      <main className="flex-1">
        <HeroSection />
        <ClientMarquee />
        <ErpSolutions />
        <WebAndMarketing />
        <WhyNadico />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
