import { Mail, MapPin, MessageCircle, MessageSquare, Phone, PhoneCall, Send } from 'lucide-react';
import React, { useState } from 'react';
import ScrollTypewriterTitle from './ScrollTypewriterTitle.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    phone: '',
    service: 'School Management ERP',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      const text = encodeURIComponent(
        `Hi NADICO Technologies!\n\nI want to request a live demo:\n- Name: ${formData.name || 'Prospective Client'}\n- Organization: ${formData.org || 'Institution'}\n- Phone: ${formData.phone || 'Pending'}\n- Solution: ${formData.service}\n- Notes: ${formData.message || 'None'}`
      );
      window.open(`https://wa.me/923337221552?text=${text}`, '_blank');
    }, 700);
  };

  return (
    <>
{/* ========================================================================= */}
  {/* 8. CONTACT & CONSULTATION (NO PRICING - DIRECT INQUIRY & WHATSAPP) */}
  {/* ========================================================================= */}
  <section id="contact" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="tech-box-texture tech-icons-bg-contact tech-transition-box rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-xl relative overflow-hidden">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Left Info Column */}
          <div className="lg:col-span-5 space-y-6 reveal-on-scroll reveal-left">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tealSoft text-brand-teal text-xs font-bold uppercase tracking-wider">
              <PhoneCall className="w-3.5 h-3.5" /> Direct Inquiries
            </div>

            <ScrollTypewriterTitle
              as="h2"
              className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 leading-tight"
              prefix="Ready to Upgrade to "
              highlight="NADICO ERP"
              highlightClass="teal-gradient-text"
              suffix="?"
            />

            <p className="text-slate-600 text-sm leading-relaxed">
              Let's talk about your setup. Call or message us on WhatsApp, and our technical team will give you a live screen demo tailored to your school, hospital, or shop.
            </p>

            {/* Direct Contact List */}
            <div className="space-y-3.5 pt-2">
              
              {/* Phone */}
              <a href="tel:+923337221552" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal flex items-center gap-4 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Direct Phone Consultation</div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-teal transition-colors">+92 333 722 1552</div>
                </div>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20would%20like%20to%20request%20a%20live%20demo%20and%20consultation." target="_blank" className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 hover:border-emerald-500 hover:shadow-md flex items-center gap-4 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-[0_4px_12px_rgba(37,211,102,0.35)]">
                  <WhatsAppIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Instant WhatsApp Chat</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">+92 333 722 1552</div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:info@nadico.pk" className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-brand-teal flex items-center gap-4 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Official Email</div>
                  <div className="text-base font-bold text-slate-900 group-hover:text-brand-teal transition-colors">info@nadico.pk</div>
                </div>
              </a>

              {/* Location */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-teal" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Head Office</div>
                  <div className="text-sm font-bold text-slate-900">Karachi, Pakistan (Serving Nationwide)</div>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Right Form Column */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 reveal-on-scroll reveal-right delay-150">
            <h3 className="font-heading text-xl font-bold text-slate-900 mb-1.5">Book a Live 1-on-1 Demonstration</h3>
            <p className="text-xs text-slate-500 mb-6">Tell us about your organization and our technical team will reach out within 2 hours.</p>

            <form id="demoForm" onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input type="text" id="formName" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required placeholder="e.g. Muhammad Rehan" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-colors shadow-xs" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Organization / School Name *</label>
                  <input type="text" id="formOrg" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} required placeholder="e.g. The Readly Grammar School" className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-colors shadow-xs" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone / WhatsApp Number *</label>
                  <input type="tel" id="formPhone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required placeholder="0333XXXXXXX or +92..." className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-colors shadow-xs" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Solution of Interest *</label>
                  <select id="formService" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-colors shadow-xs">
                    <option value="School Management ERP (The Readly)">🏫 School Management ERP (Flagship)</option>
                    <option value="Hospital Management System (HMS)">🏥 Hospital Management System (HMS)</option>
                    <option value="Inventory & POS Solutions">📦 Inventory Management & POS</option>
                    <option value="Website Design & Custom Web Software">💻 Website Design & Custom Web Development</option>
                    <option value="Digital Marketing & Lead Growth">📈 Digital Marketing & Brand Acceleration</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Additional Requirements / Campus Size</label>
                <textarea id="formMessage" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="3" placeholder="Tell us about your student/patient volume, current system, or custom requirements..." className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 text-xs focus:border-brand-teal focus:ring-1 focus:ring-brand-teal focus:outline-none transition-colors shadow-xs"></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="flex-1 py-3.5 rounded-xl bg-brand-teal hover:bg-brand-tealDark text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-button">
                  <Send className="w-4 h-4" />
                  <span>Submit Demo Request</span>
                </button>
                <button type="button" onClick={handleSubmit} className="py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98]">
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>

              <div id="formSuccessMessage" className="hidden p-3.5 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs text-center font-bold">
                ✓ Thank you! Your demo request has been received. Our team will contact you shortly on your provided number.
              </div>

            </form>
          </div>

        </div>

      </div>

    </div>
  </section>
    </>
  );
}
