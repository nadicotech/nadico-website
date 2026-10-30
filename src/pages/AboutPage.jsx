import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Users, Award, Star, CheckCircle, 
  ArrowRight, MessageCircle, Phone, Mail, MapPin, Sparkles, 
  HeartHandshake, Target, Check, Clock, Globe, Laptop, Code2, Server
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';

export default function AboutPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    organization: '',
    inquiryType: 'Corporate Partnership',
    city: 'Karachi',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NADICO Technologies! I want to discuss a corporate inquiry / partnership.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Organization:* ${formData.organization}%0A*Type:* ${formData.inquiryType}%0A*City:* ${formData.city}%0A*Message:* ${formData.message || 'N/A'}`;
    window.open(`https://wa.me/923337221552?text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  const reviews = [
    {
      name: "Prof. Sajjad Ahmed",
      role: "Director of Education",
      org: "Cambridge Grammar Network (8 Campuses), Karachi",
      rating: 5,
      text: "We have partnered with NADICO Technologies for over 3 years. Their support engineers are readily accessible on WhatsApp even late in the evening. No foreign software provider understands Pakistani educational workflows—from bank challan formats to load-shedding resilience—better than NADICO.",
      metric: "3+ Years Client • 8 Campuses Sync"
    },
    {
      name: "Dr. Kamran Qureshi",
      role: "Chief Executive",
      org: "Al-Shifa Healthcare Center, Hyderabad",
      rating: 5,
      text: "Too many software vendors collect payments and vanish. NADICO's engineering team spent 3 full days on-site at our healthcare center training our receptionists, nurses, and consulting doctors step by step. It is refreshing to work with such a dedicated Pakistani technology partner.",
      metric: "On-Site Staff Training • Zero Friction"
    },
    {
      name: "Mian Haris",
      role: "Chief Financial Officer",
      org: "Pak Steel & Hardware Corp, Lahore",
      rating: 5,
      text: "NADICO's integrated cloud accounting and multi-warehouse inventory engine automated our monthly financial reconciliations completely. Their data encryption and two-factor authentication meet true bank standards.",
      metric: "Full Financial Audit • 100% Accurate"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Header />

      {/* TOP HERO BANNER */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-tech-circuit-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tealSoft text-brand-teal text-xs font-bold uppercase tracking-wider border border-brand-tealBorder shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-brand-teal" />
              <span>About NADICO Technologies (NADICO TECH) • Karachi, Pakistan</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Engineering Reliable <span className="text-brand-teal">Pakistani B2B Tech</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We build high-performance Cloud ERP systems, school platforms, retail software, and digital growth engines designed specifically for Pakistani business operations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href="#contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-teal hover:bg-brand-tealDark transition-all shadow-button flex items-center justify-center gap-2"
              >
                <span>Partner with NADICO</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+923337221552"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>Call Hotline: +92 333 722 1552</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Active Campuses</div>
                <div className="text-lg font-extrabold text-brand-teal">250+ Schools</div>
                <div className="text-[10px] text-slate-400">Across Pakistan</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Cloud Uptime</div>
                <div className="text-lg font-extrabold text-brand-teal">99.9% SLA</div>
                <div className="text-[10px] text-slate-400">Multi-region redundancy</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Security Standard</div>
                <div className="text-lg font-extrabold text-brand-teal">2FA Protected</div>
                <div className="text-[10px] text-slate-400">256-Bit SSL encryption</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Technical Support</div>
                <div className="text-lg font-extrabold text-brand-teal">24/7 WhatsApp</div>
                <div className="text-[10px] text-slate-400">Karachi HQ team</div>
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
                <span>Verified Client Feedback</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                What Pakistani Educational & Business Leaders Say
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <span className="flex text-amber-400">
                {'★'.repeat(5)}
              </span>
              <span>4.9 / 5.0 Institutional Trust</span>
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
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-tealSoft text-brand-teal border border-brand-tealBorder">
                      {rev.metric}
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
      {/* 2. OUR COMPANY STORY & ENGINEERING PHILOSOPHY */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
                Our Mission & Origins
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
                Software Built for the Ground Realities of Pakistan
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most international software was never built for Pakistani business conditions. They don't support 3-part bank fee challans, they freeze when load-shedding interrupts your internet, and they charge thousands of dollars in foreign currency with zero local customer support.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                NADICO Technologies was founded in Karachi to fix this once and for all. We combine Silicon-Valley engineering standards (React, Next.js, Node, PostgreSQL, multi-region cloud snapshots) with direct on-the-ground support in Urdu and English.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900">Offline Resilience for Load-Shedding</div>
                    <div className="text-xs text-slate-600">POS and School counters continue printing receipts even when the internet drops.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900">Direct Pakistani Bank & 1Link Integration</div>
                    <div className="text-xs text-slate-600">Meezan, HBL, Allied, Alfalah, Raast, JazzCash, and FBR digital stamps fully supported.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 font-bold" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900">Human Telephone & On-Site Support</div>
                    <div className="text-xs text-slate-600">No robotic automated tickets. Speak directly to our Karachi engineering team.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-6 relative overflow-hidden shadow-card">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none"></div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-brand-teal text-white flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">NADICO Security Guarantee</h3>
                  <p className="text-xs text-slate-400">Strict Data Privacy & Sovereignty</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Your organizational records, student data, financial ledgers, and patient histories belong 100% to you. We never share, sell, or advertise against your information.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800 text-xs">
                <div>
                  <div className="text-emerald-400 font-bold">Two-Factor Authentication</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">TOTP Google Authenticator on all admin logins</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold">Daily Cloud Backups</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Automated snapshots across encrypted data centers</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold">Zero Unauthorized Edits</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Every financial change logged with IP and timestamp</div>
                </div>
                <div>
                  <div className="text-emerald-400 font-bold">Free Migration</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Full Excel import assistance by our technical engineers</div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20would%20like%20to%20learn%20more%20about%20your%20company%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Connect with Engineering Leadership on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DIRECT CONTACT & INQUIRY FORM */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-card">
            
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
                Corporate Headquarters
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Start a Conversation with NADICO TECH
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you are an educational board, medical director, retail chain owner, or technology partner, we welcome direct discussions.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-teal-50 border border-brand-tealBorder text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-brand-teal mx-auto" />
                <h3 className="font-bold text-lg text-brand-tealDark">Inquiry Received!</h3>
                <p className="text-xs text-brand-teal">
                  Our director of client relations will reach out to you directly on WhatsApp.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jamaluddin"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Phone / WhatsApp *</label>
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Organization / School / Business *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Oxford Educational Trust"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">City</label>
                    <input
                      type="text"
                      placeholder="e.g. Karachi, Lahore, Islamabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">How can we assist you?</label>
                  <textarea
                    rows={2}
                    placeholder="Share a brief overview of your organization's goals or questions..."
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
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Send Inquiry on WhatsApp</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
