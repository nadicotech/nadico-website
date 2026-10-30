import React, { useState } from 'react';
import { 
  Activity, Shield, Stethoscope, Pill, Bed, FileText, Users, Clock, 
  CheckCircle, ArrowRight, Star, Phone, MessageCircle, Calendar, 
  HelpCircle, ChevronDown, Check, Building2, Microchip, Database, Award, 
  Sparkles, HeartPulse, ClipboardCheck, ArrowLeft, ExternalLink, MapPin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';

export default function HospitalHmsPage() {
  const [selectedTier, setSelectedTier] = useState('clinic');
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    hospitalName: '',
    facilityType: 'Private Hospital',
    bedsCount: '25-50 Beds',
    city: 'Karachi',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NADICO Technologies! I want a live demo for Hospital HMS.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Hospital/Clinic:* ${formData.hospitalName}%0A*Type:* ${formData.facilityType}%0A*Beds:* ${formData.bedsCount}%0A*City:* ${formData.city}%0A*Details:* ${formData.notes || 'N/A'}`;
    window.open(`https://wa.me/923337221552?text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  const reviews = [
    {
      name: "Dr. Farhan Qureshi",
      role: "Medical Director",
      facility: "Shifa Care General Hospital, Karachi",
      rating: 5,
      text: "NADICO Hospital HMS ne hamare OPD token aur pharmacy billing ka rush khatam kar diya hai. Doctor ke prescription print hote hi pharmacy counter par slip auto-load ho jati hai. 100% reliable system hai.",
      beds: "65 Beds Facility"
    },
    {
      name: "Dr. Samina Tariq",
      role: "Chief of Medicine",
      facility: "Al-Razi Poly Clinic & Diagnostic, Lahore",
      rating: 5,
      text: "Hamare 14 specialist doctors ki roaster scheduling aur patient EMR records ek click par open hote hain. Sab se achi baat 2FA security hai, patient ka data bilkul safe aur confidential rehta hai.",
      beds: "Multi-Specialty OPD"
    },
    {
      name: "Muhammad Usman",
      role: "Hospital Administrator",
      facility: "Iqra Medical Complex, Rawalpindi",
      rating: 5,
      text: "IPD admission se discharge tak, bed charges, nursing notes aur OT billing automatic calculate hoti hai. Month-end accounts audit mein pehle hafte lagte thay, ab 10 minute mein P&L report ban jati hai.",
      beds: "110 Beds Hospital"
    }
  ];

  const modules = [
    {
      icon: Users,
      title: "OPD Token & Queue Dispenser",
      desc: "Fast counter registration with CNIC/mobile lookup, automated thermal slip printing, and real-time waiting screen display."
    },
    {
      icon: Stethoscope,
      title: "Doctor Clinic & EMR Desk",
      desc: "Paperless patient medical history, vital signs graph, ICD-10 diagnosis selector, and customized Urdu/English prescription pad."
    },
    {
      icon: Bed,
      title: "IPD & Ward Bed Manager",
      desc: "Visual graphical bed occupancy layout (ICU, Private, General Ward), daily round notes, oxygen tracking, and multi-day billing ledger."
    },
    {
      icon: Pill,
      title: "Pharmacy POS & Expiry Tracker",
      desc: "Barcode medicine checkout, batch-wise expiry alerts, automated supplier returns, and FBR digital invoice integration."
    },
    {
      icon: Activity,
      title: "Pathology & Radiology Lab",
      desc: "CBC, Ultrasound, X-Ray test booking, normal range auto-validation, and instant WhatsApp SMS report delivery to patient mobile."
    },
    {
      icon: Shield,
      title: "2FA Security & Staff Audit",
      desc: "Bank-grade Two-Factor Authentication, role-based access for nurses, cashiers, and doctors with zero unauthorized record deletion."
    }
  ];

  const faqs = [
    {
      q: "Kya internet band hone par hospital ka OPD counter ruk jaye ga?",
      a: "Hargiz nahi! NADICO HMS mein offline hybrid mode available hai. Internet na hone par bhi counter token slips print hoti hain aur internet aate hi cloud database se auto-sync ho jati hain."
    },
    {
      q: "Kya pharmacy inventory FBR POS aur barcode scanners ko support karti hai?",
      a: "Jee haan, sabhi standard USB/Bluetooth barcode scanners, thermal receipt printers (58mm/80mm), aur FBR digital tax integration fully supported hain."
    },
    {
      q: "Doctors apni appointment schedule aur commissions kaise check karein ge?",
      a: "Har doctor ke paas apna personal doctor portal hota hai jahan wo daily appointments, completed OPDs, aur apni procedure-wise commission report live dekh sakte hain."
    },
    {
      q: "Hospital ka purana patient data is software mein transfer ho sakta hai?",
      a: "Bilkul! Hamari technical team aap ke Excel ya legacy software se patient records, inventory, aur staff profiles ko 24-48 ghante ke andar safely migrate kar deti hai."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Header />

      {/* TOP HERO BANNER */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-tech-circuit-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-200 text-sky-800 text-xs font-bold mb-6">
            <HeartPulse className="w-4 h-4 text-sky-600 animate-pulse" />
            <span>Pakistan's Dedicated Cloud Hospital Management System</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.18] font-heading">
                Hospital & Clinic Software Jo <span className="teal-gradient-text">OPD, Beds, EMR & Pharmacy</span> Ko 100% Control Mein Laye
              </h1>
              
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
                Manual register aur ghalat bills se chutkara payein. NADICO Hospital HMS aap ke hospital ko fast OPD tokens, instant lab report WhatsApp delivery, aur automated pharmacy inventory faraham karta hai.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="#pricing"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-sky-700 hover:bg-sky-800 transition-all shadow-md flex items-center gap-2"
                >
                  <span>Starting Packages Check Karein</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a 
                  href="#contact-form"
                  className="px-6 py-3.5 rounded-xl font-bold text-sm text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-all flex items-center gap-2 shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-sky-700" />
                  <span>Book Free Hospital Demo</span>
                </a>
              </div>

              {/* Verified Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80 max-w-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>2FA Data Security</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>FBR POS Ready</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp Alerts</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Card */}
            <div className="lg:col-span-5">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sky-100 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-sky-700 text-white flex items-center justify-center font-bold">
                      <Activity className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">NADICO HMS Cloud Engine</h4>
                      <div className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> 99.98% Live Server Uptime
                      </div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-sky-100 text-sky-800">HEALTH TECH</span>
                </div>

                <div className="space-y-4 py-5">
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-bold text-slate-700">Daily OPD Average Processed</span>
                    <span className="font-mono font-extrabold text-sky-800">1,200+ Patients</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-bold text-slate-700">Lab Reports Auto-Delivered</span>
                    <span className="font-mono font-extrabold text-emerald-700">Instant SMS/PDF</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="font-bold text-slate-700">Pharmacy Expiry Wastage</span>
                    <span className="font-mono font-extrabold text-rose-600">Reduced by 85%</span>
                  </div>
                </div>

                <a 
                  href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20want%20to%20see%20a%20live%20walkthrough%20of%20Hospital%20HMS."
                  target="_blank"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Direct WhatsApp Consultation: +92 333 722 1552</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* TOP REVIEWS SECTION (REQUESTED BY USER AT THE TOP) */}
      {/* ========================================================================= */}
      <section className="py-14 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold mb-3 shadow-xs">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Verified Hospital Director Reviews</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              Doctors Aur Hospital Administrators Ka Aitaymad
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Dekhein Pakistani clinics aur hospitals NADICO HMS ke sath apne daily operations kaise asaan bana chukay hain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-sky-50 text-sky-800 border border-sky-100">
                      {rev.beds}
                    </span>
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed italic mb-6">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-700 to-sky-900 text-white font-bold flex items-center justify-center text-xs shrink-0">
                    {rev.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs">{rev.name}</h4>
                    <div className="text-[11px] text-slate-500">{rev.role}</div>
                    <div className="text-[10px] font-semibold text-sky-700">{rev.facility}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6 POWERFUL HMS MODULES */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-sky-700 font-extrabold text-xs tracking-wider uppercase">Complete Hospital Automation</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Har Department Ke Liye Mukammal Digital Control
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Reception se le kar Doctor chamber, Pharmacy, Lab aur Finance tak, har cheez aapas mein jurri hui hai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, i) => {
              const IconComp = mod.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 shadow-sm hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition-colors mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 font-heading">{mod.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{mod.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PRICING SECTION & VISUAL GRAPH (STARTING FROM MODEL AS REQUESTED) */}
      {/* ========================================================================= */}
      <section id="pricing" className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sky-700 font-extrabold text-xs uppercase tracking-wider">Transparent & Flexible Model</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 font-heading">
              Hospital HMS Starting Packages
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Hamara model fixed aur bohot mehanga nahi hai; aap ki facility ke size ke mutabiq asaan monthly subscription plan hai.
            </p>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Tier 1: Poly Clinic / Single OPD */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700 uppercase">
                  Polyclinics & OPD Centers
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 font-heading">Clinic Care Edition</h3>
                <p className="text-slate-500 text-xs mt-1">1 se 4 Doctors wale private clinic centers ke liye.</p>

                <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Starting Package</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">
                    Rs. 7,499 <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[10px] text-emerald-600 font-bold mt-1">Includes unlimited patient token history</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> OPD Token Counter Slip</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Digital Prescription Pad</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Patient Medical History Records</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Daily Cash Summary Ledger</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 2FA Administrator Login</li>
                </ul>
              </div>

              <a 
                href="#contact-form"
                className="mt-8 w-full py-3 rounded-xl font-bold text-xs text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 text-center transition-colors"
              >
                Inquire For Clinic Edition
              </a>
            </div>

            {/* Tier 2: Medium Hospital (Featured) */}
            <div className="bg-white rounded-3xl p-7 border-2 border-sky-600 shadow-xl relative flex flex-col justify-between transform md:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-extrabold bg-sky-700 text-white uppercase tracking-wider shadow-sm">
                MOST POPULAR IN PAKISTAN
              </div>

              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-sky-100 text-sky-800 uppercase">
                  15 to 60 Beds Hospitals
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 font-heading">General Hospital ERP</h3>
                <p className="text-slate-500 text-xs mt-1">Complete OPD, IPD, Pharmacy aur Pathology coverage.</p>

                <div className="my-6 p-4 rounded-2xl bg-sky-50/80 border border-sky-100">
                  <div className="text-[11px] text-sky-800 font-semibold uppercase tracking-wider">Starting Package</div>
                  <div className="text-2xl font-extrabold text-sky-900 mt-1">
                    Rs. 14,999 <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[10px] text-emerald-700 font-bold mt-1">All 14 modules with free data migration</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Full OPD Token + Doctor Queue</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> IPD Ward & Bed Occupancy Matrix</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Pharmacy POS with Batch Expiry Alert</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Lab Test Booking with WhatsApp Delivery</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Doctor Commission Settlement Engine</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> 24/7 Priority Emergency Support</li>
                </ul>
              </div>

              <a 
                href="#contact-form"
                className="mt-8 w-full py-3 rounded-xl font-bold text-xs text-white bg-sky-700 hover:bg-sky-800 shadow-md text-center transition-colors"
              >
                Book Hospital Live Walkthrough
              </a>
            </div>

            {/* Tier 3: Tertiary Care / Multi-Branch */}
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <span className="px-3 py-1 rounded-full text-[10px] font-extrabold bg-slate-100 text-slate-700 uppercase">
                  Large Hospital / Multi-Branch
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-4 font-heading">Enterprise Healthcare</h3>
                <p className="text-slate-500 text-xs mt-1">100+ Beds facilities aur multi-city hospital groups.</p>

                <div className="my-6 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Custom Tailored</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-1">
                    Custom Quote
                  </div>
                  <div className="text-[10px] text-sky-700 font-bold mt-1">Dedicated cloud instance & SLA agreement</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-700">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Multi-Branch Centralized Patient Database</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Operation Theater (OT) & Anesthesia Logs</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Full Accounting GL & Payroll Sync</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> Automated Offsite Cloud Data Snapshots</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600 shrink-0" /> On-Premise Local Server Option</li>
                </ul>
              </div>

              <a 
                href="#contact-form"
                className="mt-8 w-full py-3 rounded-xl font-bold text-xs text-slate-800 bg-slate-100 hover:bg-slate-200 text-center transition-colors"
              >
                Contact Enterprise Specialist
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* DIRECT HOSPITAL INQUIRY FORM (REQUESTED BY USER) */}
      {/* ========================================================================= */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mb-8">
              <span className="text-sky-400 font-bold text-xs uppercase tracking-wider">Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold mt-2 font-heading">
                Apne Hospital Ya Clinic Ka Free Demo Schedule Karein
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm mt-2">
                Neechay details darj karein ya hamari helpline par call karein. Hamari technical team aap ke software requirements ka audit kare gi.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Aap Ka Naam *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Dr. / Mr. Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">WhatsApp / Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="0333 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Hospital / Clinic Ka Naam *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Al-Shifa Care Hospital"
                  value={formData.hospitalName}
                  onChange={(e) => setFormData({...formData, hospitalName: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Facility Type</label>
                <select 
                  value={formData.facilityType}
                  onChange={(e) => setFormData({...formData, facilityType: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-sky-400 [&>option]:bg-slate-900"
                >
                  <option value="Private Hospital">Private Hospital</option>
                  <option value="Poly Clinic & OPD Center">Poly Clinic & OPD Center</option>
                  <option value="Maternity & Care Center">Maternity & Care Center</option>
                  <option value="Diagnostic & Lab Facility">Diagnostic & Lab Facility</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">Beds Capacity</label>
                <select 
                  value={formData.bedsCount}
                  onChange={(e) => setFormData({...formData, bedsCount: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-xs focus:outline-none focus:border-sky-400 [&>option]:bg-slate-900"
                >
                  <option value="OPD Only (No Beds)">OPD Only (No Beds)</option>
                  <option value="Under 25 Beds">Under 25 Beds</option>
                  <option value="25-50 Beds">25-50 Beds</option>
                  <option value="50-100 Beds">50-100 Beds</option>
                  <option value="100+ Beds">100+ Beds</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">City / Location</label>
                <input 
                  type="text" 
                  placeholder="Karachi, Lahore, etc."
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-slate-300 mb-1">Koi Khaas Requirement Ya Sawal?</label>
                <textarea 
                  rows="2"
                  placeholder="e.g. Pharmacy barcode scanners, doctor commission setup, etc."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-sky-400"
                ></textarea>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button 
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition-colors shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit & Connect with HMS Consultant on WhatsApp</span>
                </button>
              </div>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Direct Helpline: <strong>+92 333 722 1552</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Karachi, Sindh, Pakistan</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-14 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-slate-900 font-heading">Hospital HMS ke Mutaliq Ahem Sawalat</h2>
            <p className="text-slate-500 text-xs mt-1">Aam tor par administrators hum se yeh sawalat poochte hain.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between text-xs font-bold text-slate-900 hover:text-sky-700 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${openFaq === idx ? 'rotate-180 text-sky-700' : 'text-slate-400'}`} />
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
