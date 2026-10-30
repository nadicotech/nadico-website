import { Clock, Code, ExternalLink, Layers, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
{/* ========================================================================= */}
  {/* 9. CORPORATE FOOTER */}
  {/* ========================================================================= */}
  <footer className="w-full max-w-full footer-gradient-rich border-t border-[#005a75] pt-12 pb-5 text-white text-xs relative overflow-hidden m-0 mt-auto left-0 right-0 bottom-0">
    
    {/* Subtle Tech Icons Watermark Texture in Footer (Delicate Servers, Chips, Cloud, Code) */}
    <div className="absolute inset-0 pointer-events-none footer-tech-icons-pattern"></div>
    <div className="absolute inset-0 pointer-events-none opacity-20 bg-tech-circuit-overlay"></div>

    <div className="w-full px-6 sm:px-10 lg:px-14 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-white/20">
        
        {/* Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="silver-sheen-logo-wrap">
              <img src="/LOGO.png" alt="NADICO Technologies" className="h-20 sm:h-24 w-auto object-contain brightness-0 invert drop-shadow-lg" />
              <div className="silver-sheen-overlay" aria-hidden="true"></div>
            </div>
          </div>
          <p className="text-white/90 text-xs leading-relaxed max-w-sm">
            NADICO Technologies (نادیکو ٹیکنالوجیز) builds reliable Cloud ERP software, school management systems, custom web applications, and high-growth digital marketing campaigns for organizations across Pakistan.
          </p>
          <div className="text-xs text-white flex items-center gap-2 font-bold pt-1">
            <span className="p-1.5 rounded-lg bg-white/15 border border-white/25 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-white" />
            </span>
            <a href="tel:+923337221552" className="hover:underline text-white font-mono tracking-wide text-sm font-bold">+92 333 722 1552</a>
          </div>
        </div>

        {/* ERP Modules */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide border-b border-white/25 pb-1 flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-brand-limeLight" /> ERP Systems
          </h4>
          <ul className="space-y-2">
            <li><Link to="/school-erp" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> School Management ERP</Link></li>
            <li><Link to="/hospital-hms" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> Hospital Management (HMS)</Link></li>
            <li><Link to="/inventory-pos" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> Inventory Management & POS</Link></li>
            <li><a href="https://thereadlyerp.vercel.app/rehan" target="_blank" className="text-white font-bold hover:underline flex items-center gap-1.5 pt-1.5 bg-white/15 hover:bg-white/25 border border-white/20 px-2.5 py-1 rounded-lg w-fit transition-all shadow-xs"><span className="text-brand-limeLight">●</span> The Readly Live Portal <ExternalLink className="w-3 h-3 text-white" /></a></li>
          </ul>
        </div>

        {/* Tech Services */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide border-b border-white/25 pb-1 flex items-center gap-1.5">
            <Code className="w-3.5 h-3.5 text-brand-limeLight" /> Tech Services
          </h4>
          <ul className="space-y-2">
            <li><Link to="/web-development" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> Website Design & UI/UX</Link></li>
            <li><Link to="/web-development" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> Custom Web Applications</Link></li>
            <li><Link to="/digital-marketing" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> Digital Marketing & SEO</Link></li>
            <li><Link to="/about" className="text-white/90 hover:text-white hover:underline transition-colors flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-brand-limeLight"></span> About NADICO TECH</Link></li>
          </ul>
        </div>

        {/* Office & Hours */}
        <div className="space-y-3">
          <h4 className="text-white font-bold text-sm tracking-wide border-b border-white/25 pb-1 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-brand-limeLight" /> Direct Contact
          </h4>
          <ul className="space-y-2.5 text-xs">
            <li className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-white" />
              <a href="tel:+923337221552" className="hover:underline text-white font-semibold">+92 333 722 1552</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-white" />
              <a href="mailto:info@nadico.pk" className="hover:underline text-white font-semibold">info@nadico.pk</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-white" />
              <span className="text-white font-medium">Karachi, Pakistan</span>
            </li>
            <li className="pt-1 text-[11px] text-white/80 flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-white" />
              <span>Mon - Sat: 9:00 AM - 7:00 PM PKT</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright & Quick Links */}
      <div className="pt-4 pb-1 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/80 text-[11px]">
        <div>
          © 2026 NADICO Technologies (NADICO TECH). All Rights Reserved.
        </div>
        <div className="flex items-center gap-4">
          <a href="#hero" className="text-white/85 hover:text-white hover:underline transition-colors">Back to top ↑</a>
          <span>•</span>
          <a href="https://thereadlyerp.vercel.app/rehan" target="_blank" className="text-white/85 hover:text-white hover:underline transition-colors">The Readly ERP Instance</a>
        </div>
      </div>
    </div>
  </footer>
    </>
  );
}
