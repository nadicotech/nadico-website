import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, 
  ArrowRight, Star, Building2, Send, ShieldCheck, Sparkles, 
  HelpCircle, ChevronDown, Check, Users, Headphones
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'School Management ERP',
    city: 'Karachi',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NADICO Technologies! I am contacting you from the website contact page.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email || 'N/A'}%0A*Department:* ${formData.department}%0A*City:* ${formData.city}%0A*Message:* ${formData.message || 'N/A'}`;
    window.open(`https://wa.me/923337221552?text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  const reviews = [
    {
      name: "Tariq Aziz",
      role: "Campus Administrator",
      org: "Al-Huda Higher Secondary School, Karachi",
      rating: 5,
      text: "When we reported a printing issue on a Saturday evening, a NADICO senior support engineer resolved it over a WhatsApp video session within 10 minutes. That level of responsive client service is unmatched in Pakistan.",
      tag: "Instant 10-Min Response"
    },
    {
      name: "Danish Lakhani",
      role: "Managing Director",
      org: "Lakhani Mart & Cosmetics, Hyderabad",
      rating: 5,
      text: "The NADICO deployment team visited our retail mart in person, calibrated our barcode hardware, and thoroughly trained our cashier staff. Even years after deployment, their helpline is consistently reliable.",
      tag: "Dedicated On-Site Support"
    },
    {
      name: "Dr. Adeel Hashmi",
      role: "Clinic Operations Head",
      org: "Hashmi Health Center, Rawalpindi",
      rating: 5,
      text: "Their official WhatsApp helpline (+92 333 722 1552) is remarkably responsive. Software updates, audit reports, and technical assistance are always delivered on schedule.",
      tag: "24/7 WhatsApp Hotline"
    }
  ];

  const faqs = [
    {
      q: "Where is your primary office located, and can we schedule an in-person meeting?",
      a: "Our corporate headquarters is located in Karachi, Pakistan. You are welcome to visit our office by confirming an appointment via WhatsApp (+92 333 722 1552), or our technical deployment team can visit your campus or facility for an on-site demonstration."
    },
    {
      q: "Do you provide technical assistance to clients in Lahore, Islamabad, and other cities across Pakistan?",
      a: "Yes, nationwide. We actively support institutional clients across Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, and Hyderabad with instant 24/7 technical assistance via WhatsApp, telephone, and secure remote desktop sessions."
    },
    {
      q: "How quickly does your technical team respond to new inquiries?",
      a: "During corporate business hours (Monday to Saturday, 9:00 AM to 7:00 PM PKT), all inquiries submitted via WhatsApp or our web forms receive a dedicated response within 15 minutes."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Header />

      {/* TOP HERO BANNER */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-tech-circuit-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tealSoft text-brand-teal text-xs font-bold uppercase tracking-wider border border-brand-tealBorder shadow-xs">
              <Headphones className="w-3.5 h-3.5 text-brand-teal" />
              <span>Direct Support & Corporate Inquiries • Karachi Headquarters</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Get in Touch with <span className="text-brand-teal">NADICO Technologies</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Have questions about School ERP, Hospital HMS, POS Systems, Web Development, or Marketing? Our Karachi engineering team is ready to assist you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20want%20to%20connect%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-600 hover:bg-emerald-700 transition-all shadow-button flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 333 722 1552)</span>
              </a>
              <a
                href="tel:+923337221552"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>Call Hotline Directly</span>
              </a>
            </div>

            {/* Direct Contact Pillars Bar */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Phone & WhatsApp</div>
                  <a href="tel:+923337221552" className="text-sm font-bold text-slate-900 hover:text-brand-teal">+92 333 722 1552</a>
                  <div className="text-[10px] text-emerald-700 font-semibold mt-0.5">Live Mon - Sat (9am - 7pm)</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Official Email</div>
                  <a href="mailto:info@nadico.pk" className="text-sm font-bold text-slate-900 hover:text-brand-teal">info@nadico.pk</a>
                  <div className="text-[10px] text-sky-700 font-semibold mt-0.5">Corporate Communications</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-semibold">Headquarters</div>
                  <div className="text-sm font-bold text-slate-900">Karachi, Pakistan</div>
                  <div className="text-[10px] text-amber-700 font-semibold mt-0.5">Nationwide Deployments</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. TOP CLIENT REVIEWS SECTION (REQUESTED BY USER AT TOP OF PAGE) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-tealSoft text-brand-teal text-[11px] font-bold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Support Ratings</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Responsive Human Support You Can Always Count On
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <span className="flex text-amber-400">
                {'★'.repeat(5)}
              </span>
              <span>Average 15-Minute Support Turnaround</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div 
                key={idx} 
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-amber-400 text-sm">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {rev.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-bold text-xs text-slate-900">{rev.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{rev.role}</div>
                  <div className="text-[11px] text-brand-teal font-bold mt-0.5">{rev.org}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT INQUIRY FORM */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
                Quick Message
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Send a Direct Message to Our Technical Team
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose the department you need assistance with, and our dedicated specialist will contact you immediately.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-teal-50 border border-brand-tealBorder text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-brand-teal mx-auto" />
                <h3 className="font-bold text-lg text-brand-tealDark">Message Sent Successfully!</h3>
                <p className="text-xs text-brand-teal">
                  Our department head is reviewing your inquiry and will reach out via WhatsApp shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Muhammad Aslam"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0333 7221552"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Department / Service *</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    >
                      <option>School Management ERP (The Readly)</option>
                      <option>Hospital Management System (HMS)</option>
                      <option>Inventory Management & POS</option>
                      <option>Custom Website Design & Development</option>
                      <option>Digital Marketing & Lead Generation</option>
                      <option>Corporate Partnership / Accounts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your City</label>
                    <input
                      type="text"
                      placeholder="e.g. Karachi, Lahore, Islamabad, Peshawar"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Message / Inquiry Details</label>
                  <textarea
                    rows={3}
                    placeholder="Describe your requirements, system size, or any specific questions you have..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-brand-teal" />
                    <span>Average reply time: under 15 minutes</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-brand-teal hover:bg-brand-tealDark transition-all shadow-button flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
              Support FAQ
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-slate-900 flex items-center justify-between gap-3 focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-brand-teal' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
