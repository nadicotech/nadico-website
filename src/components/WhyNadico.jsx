import { Server, ShieldCheck, Users } from 'lucide-react';
import React from 'react';
import ScrollTypewriterTitle from './ScrollTypewriterTitle.jsx';

export default function WhyNadico() {
  return (
    <>
{/* ========================================================================= */}
  {/* 7. WHY CHOOSE NADICO TECHNOLOGIES (ABOUT US & ADVANTAGES) */}
  {/* ========================================================================= */}
  <section id="about" className="py-20 lg:py-24 bg-slate-50/60 tech-icons-bg-partnership border-t border-slate-200 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll reveal-up">
        <ScrollTypewriterTitle
          as="h2"
          className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight"
          prefix="Why Organizations Partner With "
          highlight="NADICO TECH"
          highlightClass="teal-gradient-text"
        />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          We know the ground realities of running a business in Pakistan. From slow internet and power cuts to staff hesitant about computers—our software is built to be simple, fast, and 100% reliable every single day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div className="tech-box-texture tech-icons-bg-partnership tech-transition-box p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md space-y-4 overflow-hidden relative reveal-on-scroll reveal-left">
          <div className="w-12 h-12 rounded-xl bg-brand-tealSoft text-brand-teal flex items-center justify-center">
            <Server className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg">Built for Real Operations in Pakistan</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pre-configured for local banking challans (Meezan, HBL, 1Link), PKR currency, provincial tax rules, Urdu & English support, and instant WhatsApp alerts for customers and parents.
          </p>
        </div>

        <div className="tech-box-texture tech-icons-bg-partnership tech-transition-box p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md space-y-4 overflow-hidden relative reveal-on-scroll reveal-up delay-150">
          <div className="w-12 h-12 rounded-xl bg-brand-limeSoft text-brand-limeDark flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg">On-Site Training & Smooth Setup</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            We don't just email a password and leave. Our technical team visits your campus or office, migrates your old data, trains your staff hands-on, and connects your biometric hardware with zero hassle.
          </p>
        </div>

        <div className="tech-box-texture tech-icons-bg-partnership tech-transition-box p-7 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md space-y-4 overflow-hidden relative reveal-on-scroll reveal-right delay-200">
          <div className="w-12 h-12 rounded-xl bg-brand-tealSoft text-brand-teal flex items-center justify-center">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h4 className="font-bold text-slate-900 text-lg">Strict Data Privacy & Daily Backups</h4>
          <p className="text-xs text-slate-600 leading-relaxed">
            Your business and student records belong only to you. Protected with Two-Factor Authentication (2FA), 256-bit SSL encryption, and automated daily cloud backups so you never lose a single file.
          </p>
        </div>

      </div>

    </div>
  </section>
    </>
  );
}
