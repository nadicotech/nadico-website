import { Activity, ArrowRight, Calendar, Check, Cpu, ExternalLink, GraduationCap, MessageCircle, Play, ShoppingBag, Sparkles } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTypewriterTitle from './ScrollTypewriterTitle.jsx';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function ErpSolutions() {
  return (
    <>
{/* ========================================================================= */}
  {/* 5. CORE ERP SYSTEMS SECTION (LIGHT THEME, CORPORATE CARDS, NO PRICING) */}
  {/* ========================================================================= */}
  <section id="erp-solutions" className="py-20 lg:py-28 bg-slate-50/70 tech-icons-bg-erp relative border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll reveal-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tealSoft border border-brand-tealBorder text-brand-teal text-xs font-bold uppercase tracking-wider">
          <Cpu className="w-3.5 h-3.5" /> Enterprise ERP Systems
        </div>
        <ScrollTypewriterTitle
          as="h2"
          className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          prefix="Purpose-Built "
          highlight="NadiCo ERP"
          highlightClass="teal-gradient-text"
          suffix=" Solutions"
        />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Whether you run an educational network, a multi-specialty hospital, or a busy retail warehouse, NadiCo Technologies builds software that actually fits how businesses operate in Pakistan—free from complicated jargon and ready to use on day one.
        </p>
      </div>

      {/* 3 ERP Pillar Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* CARD 1: SCHOOL MANAGEMENT ERP (FLAGSHIP) */}
        <div id="school-erp" className="rounded-3xl p-7 sm:p-8 bg-white border-2 border-brand-teal shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden reveal-on-scroll reveal-left">
          <div className="space-y-5">
            
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-brand-teal text-white flex items-center justify-center shadow-sm">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-brand-limeSoft text-brand-limeDark border border-brand-limeBorder">
                FLAGSHIP SUITE
              </span>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-brand-teal transition-colors">
                School Management ERP
              </h3>
              <p className="text-xs text-brand-teal font-bold mt-1">
                Live Cloud Platform • Trusted by 250+ Campuses
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Designed specifically for school owners, principals, and accountants to stop manual registers, issue 1-click bank fee challans, mark attendance, and print report cards without confusion.
            </p>

            {/* Real Feature Checklist */}
            <ul className="space-y-3 text-xs text-slate-700 pt-3 border-t border-slate-100">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Multi-Campus Cloud Network:</strong> Manage multiple branches or a single campus from one secure login with full staff access controls.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Automated 3-Part Bank Challans:</strong> Authentic Meezan, HBL, Allied Bank & 1Link 1Bill deposit slips with barcode tracking.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Smart ID Cards & Exam Admit Slips:</strong> 1-click printable student PVC cards with barcode, faculty badges, and term exam roll no. slips.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Official Certificate Studio with QR:</strong> Instant School Leaving (SLC), Character, and Merit certificates with public anti-fraud QR verification.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Autonomous Owner Balance Sheets:</strong> Real-time cash & bank balances, automated P&L, aging defaulters, and 6:00 PM WhatsApp executive summary.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Biometric & WhatsApp Alerts:</strong> Hardware gate sync (ZKTeco) with instant automated absent notifications to parents.</span>
              </li>
            </ul>

          </div>

          <div className="pt-8 space-y-3">
            <a href="https://thereadlyerp.vercel.app/rehan" target="_blank" className="w-full py-3.5 rounded-xl bg-brand-teal hover:bg-brand-tealDark text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-button">
              <span>Test Live School Deployment</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="/school-erp" className="w-full py-3.5 rounded-xl bg-brand-lime hover:bg-brand-limeDark text-brand-charcoal font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-button-lime">
              <Sparkles className="w-4 h-4" />
              <span>See More Benefits & All System Modules</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* CARD 2: HOSPITAL MANAGEMENT SYSTEM (HMS) */}
        <div id="hospital-hms" className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden reveal-on-scroll reveal-up delay-150">
          <div className="space-y-5">
            
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-sky-700 text-white flex items-center justify-center shadow-sm">
                <Activity className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-sky-50 text-sky-800 border border-sky-200">
                HEALTHCARE
              </span>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                Hospital Management (HMS)
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Complete Clinic, OPD & IPD Management
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              A smooth, paperless workflow for doctors, receptionists, and pharmacy staff—from patient tokens and ward beds to medicine billing and lab tests.
            </p>

            <ul className="space-y-3 text-xs text-slate-700 pt-3 border-t border-slate-100">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>OPD & IPD Management:</strong> Quick patient token queues, doctor appointments, room & bed admissions, and nurse logs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Doctor Scheduling & EMR:</strong> Digital prescription builder, patient history records, and scheduled doctor timings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Pharmacy & Stock Control:</strong> Real-time medicine sales, stock expiry warnings, and barcode point-of-sale.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Laboratory Pathology System:</strong> Print diagnostic test reports with doctor signatures and send direct PDF copies via WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Insurance & Panel Billing:</strong> Cash payments, corporate panel invoicing, and transparent financial records.</span>
              </li>
            </ul>

          </div>

          <div className="pt-8 space-y-3">
            <Link to="/hospital-hms" className="w-full py-3.5 rounded-xl bg-sky-700 hover:bg-sky-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm">
              <span>Explore Hospital HMS Page & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20am%20interested%20in%20your%20Hospital%20Management%20System." target="_blank" className="w-full py-3 rounded-xl bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-emerald-200 shadow-xs">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

        {/* CARD 3: INVENTORY MANAGEMENT & POS */}
        <div id="inventory-pos" className="rounded-3xl p-7 sm:p-8 bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col justify-between group relative overflow-hidden reveal-on-scroll reveal-right delay-200">
          <div className="space-y-5">
            
            <div className="flex items-center justify-between">
              <div className="w-14 h-14 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-sm">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-800 border border-emerald-200">
                RETAIL & COMMERCE
              </span>
            </div>

            <div>
              <h3 className="font-heading text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                Inventory & POS Suite
              </h3>
              <p className="text-xs text-slate-500 font-semibold mt-1">
                Barcode Retail Counter & Stock Management
              </p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              Keep your checkout counters moving fast and your stock accurate across multiple shops and godowns without losing track of a single rupee.
            </p>

            <ul className="space-y-3 text-xs text-slate-700 pt-3 border-t border-slate-100">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>High-Speed POS Checkout:</strong> Scan barcodes, apply discounts, accept cash or card, and print thermal slips in seconds.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Multi-Warehouse Stock Control:</strong> Track items across multiple branches and godowns with automated low-stock warnings.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Supplier Ledgers & Purchases:</strong> Manage vendor purchase orders, receive bulk deliveries, and track payable balances.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Customer Credit & Khata:</strong> Track customer credit balances, set credit limits, and send polite payment reminders.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Financial Analytics:</strong> See your exact daily sales, gross profits, and cash register closing reports at closing time.</span>
              </li>
            </ul>

          </div>

          <div className="pt-8 space-y-3">
            <Link to="/inventory-pos" className="w-full py-3.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm">
              <span>Explore Inventory & POS Page & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20want%20a%20quote%20for%20Inventory%20and%20POS%20software." target="_blank" className="w-full py-3 rounded-xl bg-emerald-50/80 hover:bg-emerald-100/90 text-emerald-900 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-emerald-200 shadow-xs">
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" fill="#25D366" />
              <span>Inquire via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  </section>
    </>
  );
}
