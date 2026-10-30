import React from 'react';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp quick contact">
      <a 
        href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20would%20like%20to%20inquire%20about%20your%20ERP%20software%20and%20tech%20solutions." 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with NADICO Technologies on WhatsApp" 
        className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 group flex items-center focus:outline-none"
      >
        {/* Soft Background Ping Animation */}
        <span 
          className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none group-hover:opacity-60" 
          aria-hidden="true"
        ></span>

        {/* Floating Capsule Button */}
        <div className="relative flex items-center gap-2 pl-2 pr-3 sm:pr-3.5 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white shadow-[0_6px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_20px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/30">
          
          {/* WhatsApp Icon in White Circle */}
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#25D366] flex items-center justify-center shadow-xs shrink-0 group-hover:rotate-12 transition-transform duration-300">
            <WhatsAppIcon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#25D366]" fill="currentColor" />
          </div>

          {/* Text Labels */}
          <div className="text-left leading-tight hidden xs:block sm:block">
            <div className="text-[11px] sm:text-xs font-bold tracking-tight text-white drop-shadow-xs">
              Chat on WhatsApp
            </div>
            <div className="text-[9px] text-emerald-100 font-medium flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse"></span>
              <span>Online • Replies in &lt;15m</span>
            </div>
          </div>

          {/* Active Notification Pill */}
          <span 
            className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-rose-500 text-white font-mono text-[8px] font-bold flex items-center justify-center border-2 border-white shadow-xs"
            aria-hidden="true"
          >
            1
          </span>
        </div>
      </a>
    </aside>
  );
}
