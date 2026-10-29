import { MessageCircle } from 'lucide-react';
import React from 'react';

export default function FloatingWhatsApp() {
  return (
    <>
{/* ========================================================================= */}
  {/* 10. FLOATING WHATSAPP PILL BUTTON */}
  {/* ========================================================================= */}
  <a href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20ERP%20and%20tech%20solutions." target="_blank" aria-label="WhatsApp Chat" className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform duration-200 flex items-center gap-2 group">
    <MessageCircle className="w-6 h-6" />
    <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold font-sans">
      Chat With Us
    </span>
    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-red-500 border-2 border-white"></span>
  </a>
    </>
  );
}
