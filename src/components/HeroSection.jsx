import { Activity, AlertCircle, AlertTriangle, ArrowDown, ArrowLeftRight, ArrowRight, Banknote, BarChart2, BarChart3, Bed, BedDouble, Bell, BookMarked, BookOpen, Boxes, Briefcase, Building2, Calendar, CalendarCheck, CheckCircle, CheckSquare, ChevronLeft, ChevronRight, CircleDollarSign, ClipboardList, ClipboardPlus, Code, CreditCard, ExternalLink, FileCheck, FileSpreadsheet, FileText, Fingerprint, FlaskConical, Gauge, Globe, GraduationCap, HeartPulse, Home, Layers, LayoutDashboard, ListOrdered, Lock, LogOut, MessageCircle, Pill, Plus, Printer, Receipt, Scan, ScanBarcode, ScanLine, Scissors, Search, Settings, Shield, ShieldCheck, ShoppingBag, ShoppingCart, Smartphone, Sparkles, Stethoscope, TrendingUp, Truck, UserCheck, Users, Wallet, Zap } from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon.jsx';

const suites = ['school', 'hospital', 'inventory', 'web'];

const laptopUrls = {
  school: 'thereadlyerp.vercel.app/rehan • NadiCo ERP',
  hospital: 'nadico-hms.cloud/clinical-ops • NadiCo HMS',
  inventory: 'nadico-pos.store/terminal-checkout • NadiCo POS',
  web: 'nadicotech.com/web-engineering • NadiCo Web Platform'
};

const schoolBreadcrumbs = {
  dashboard: 'Dashboard & Financial Analytics',
  students: 'Student Directory & Admissions',
  fees: 'Fee Challans & Bank Reconciliation',
  reports: 'Official Terminal Exam Report Cards',
  attendance: 'Biometric Attendance Hardware Log',
  manual: 'Institutional User Manual'
};

const hospitalBreadcrumbs = {
  dashboard: 'Clinical Care Overview',
  opd: 'Live OPD Consultation Queue',
  beds: 'Inpatient (IPD) Bed Allocations',
  pharmacy: 'Hospital Pharmacy POS',
  lab: 'Pathology Diagnostics Workstation'
};

const inventoryBreadcrumbs = {
  dashboard: 'POS Overview & Turnover Velocity',
  pos: 'Active Barcode Cash Register',
  products: 'Warehouse SKU Inventory Catalog',
  po: 'Supplier Purchase Orders & Deliveries'
};

const webBreadcrumbs = {
  speed: 'Speed, SEO & Conversions',
  architecture: 'Next.js Stack & Cloud Scalability',
  seo: 'Technical SEO & Programmatic Schema',
  security: 'SSL Grade A+ & Enterprise WAF'
};

// =========================================================================
// SLIDE TYPEWRITER COMPONENT (HEADING TYPES SMOOTHLY, DESCRIPTION IS STATIC)
// =========================================================================
function SlideTypewriter({ active, prefix = '', highlight = '', highlightClass = "teal-gradient-text", suffix = '', paragraph = '' }) {
  const headlineRef = useRef(null);

  useEffect(() => {
    const hEl = headlineRef.current;
    if (!hEl) return;

    if (!active) {
      hEl.innerHTML = `${prefix}<span class="${highlightClass}">${highlight}</span>${suffix}`;
      return;
    }

    const fullHeadline = `${prefix}${highlight}${suffix}`;
    const pLen = prefix.length;
    const hlLen = highlight.length;

    hEl.innerHTML = '<span class="inline-block w-1 sm:w-1.5 h-6 sm:h-8 md:h-10 bg-brand-teal ml-1 animate-pulse align-middle"></span>';

    let hCount = 0;
    let headlineTimer = null;

    headlineTimer = setInterval(() => {
      hCount += 2; // 2 characters per tick for fast, fluid pacing
      if (hCount >= fullHeadline.length) {
        hCount = fullHeadline.length;
        clearInterval(headlineTimer);
        // Render completed headline
        hEl.innerHTML = `${prefix}<span class="${highlightClass}">${highlight}</span>${suffix}`;
      } else {
        const renderedPrefix = fullHeadline.slice(0, Math.min(hCount, pLen));
        const renderedHl = hCount > pLen
          ? `<span class="${highlightClass}">${fullHeadline.slice(pLen, Math.min(hCount, pLen + hlLen))}</span>`
          : '';
        const renderedSuffix = hCount > pLen + hlLen
          ? fullHeadline.slice(pLen + hlLen, hCount)
          : '';

        hEl.innerHTML = renderedPrefix + renderedHl + renderedSuffix + '<span class="inline-block w-1 sm:w-1.5 h-6 sm:h-8 md:h-10 bg-brand-teal ml-1 animate-pulse align-middle"></span>';
      }
    }, 22);

    return () => {
      if (headlineTimer) clearInterval(headlineTimer);
    };
  }, [active, prefix, highlight, highlightClass, suffix]);

  return (
    <>
      <h1 ref={headlineRef} className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.14]">
        {prefix}<span className={highlightClass}>{highlight}</span>{suffix}
      </h1>

      <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
        {paragraph}
      </p>
    </>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSuite, setActiveSuite] = useState('school');
  const [paused, setPaused] = useState(false);

  // Subtabs
  const [schoolSubTab, setSchoolSubTab] = useState('dashboard');
  const [hospitalSubTab, setHospitalSubTab] = useState('dashboard');
  const [inventorySubTab, setInventorySubTab] = useState('dashboard');
  const [webSubTab, setWebSubTab] = useState('speed');

  // Mobile Subtabs
  const [mobSchoolTab, setMobSchoolTab] = useState('rollcall');
  const [mobHospitalTab, setMobHospitalTab] = useState('queue');
  const [mobInventoryTab, setMobInventoryTab] = useState('scan');

  // Interactive buttons
  const [attendance, setAttendance] = useState(['PRESENT', 'PRESENT', 'LEAVE']);
  const [patientStatus, setPatientStatus] = useState('CALL NEXT');
  const [scanCount, setScanCount] = useState(1);
  const [scanButtonText, setScanButtonText] = useState('SCAN SKU #890124');
  const [scanButtonColor, setScanButtonColor] = useState('bg-emerald-600 hover:bg-emerald-500');

  const goToSlide = (idx) => {
    const nextIdx = (idx + 4) % 4;
    setCurrentSlide(nextIdx);
    setActiveSuite(suites[nextIdx]);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, paused]);

  // Attendance toggle
  const toggleAttendance = (index) => {
    setAttendance(prev => {
      const next = [...prev];
      const cur = next[index];
      if (cur === 'PRESENT') next[index] = 'ABSENT';
      else if (cur === 'ABSENT') next[index] = 'LEAVE';
      else next[index] = 'PRESENT';
      return next;
    });
  };

  // Patient toggle
  const togglePatientStatus = () => {
    setPatientStatus(prev => prev === 'CALL NEXT' ? 'CALLED' : 'CALL NEXT');
  };

  // Scan toggle
  const handleScanClick = () => {
    const nextCount = scanCount + 1;
    setScanCount(nextCount);
    setScanButtonText(`SCANNED (${nextCount} ITEMS)`);
    setScanButtonColor('bg-brand-limeDark hover:bg-brand-lime');
    setTimeout(() => {
      setScanButtonText(`SCAN SKU #8901${23 + nextCount}`);
      setScanButtonColor('bg-emerald-600 hover:bg-emerald-500');
    }, 1200);
  };


  return (
    <>
  {/* ========================================================================= */}
  <section id="hero" className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden light-grid hero-glow">
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* ========================================================================= */}
      {/* HERO SLIDER SECTION (4 COMPREHENSIVE INTERACTIVE SLIDES) */}
      {/* ========================================================================= */}
      <div id="heroSliderContainer" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative group/slider max-w-5xl mx-auto">
        
        {/* Interactive Slide Selector Pills (Top Tabs) */}
        <div className="flex justify-center mb-6 px-2">
          <div className="inline-flex flex-wrap justify-center p-1 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-sm max-w-full gap-1">
            <button onClick={() => goToSlide(0)} id="heroNavTab0" className={`hero-nav-pill px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${currentSlide === 0 ? 'bg-brand-teal text-white shadow-sm' : 'font-semibold text-slate-600 hover:text-slate-900'}`}>
              <span>🏫</span> <span>1. School ERP</span>
            </button>
            <button onClick={() => goToSlide(1)} id="heroNavTab1" className={`hero-nav-pill px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${currentSlide === 1 ? 'bg-sky-700 text-white shadow-sm' : 'font-semibold text-slate-600 hover:text-slate-900'}`}>
              <span>🏥</span> <span>2. Hospital HMS</span>
            </button>
            <button onClick={() => goToSlide(2)} id="heroNavTab2" className={`hero-nav-pill px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${currentSlide === 2 ? 'bg-emerald-700 text-white shadow-sm' : 'font-semibold text-slate-600 hover:text-slate-900'}`}>
              <span>📦</span> <span>3. Retail POS</span>
            </button>
            <button onClick={() => goToSlide(3)} id="heroNavTab3" className={`hero-nav-pill px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${currentSlide === 3 ? 'bg-brand-teal text-white shadow-sm' : 'font-semibold text-slate-600 hover:text-slate-900'}`}>
              <span>💻</span> <span>4. Web Engineering</span>
            </button>
          </div>
        </div>

        {/* Left / Right Slider Navigation Arrow Buttons */}
        <button onClick={prevSlide} aria-label="Previous Slide" className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-brand-teal border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button onClick={nextSlide} aria-label="Next Slide" className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/95 hover:bg-white text-slate-700 hover:text-brand-teal border border-slate-200 shadow-md flex items-center justify-center transition-all hover:scale-105">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slides Content Track */}
        <div className="relative text-center max-w-4xl mx-auto px-4 sm:px-8">
          
          {/* SLIDE 1: SCHOOL MANAGEMENT ERP (THE READLY ERP) */}
          <div id="heroSlide0" className={`hero-slide space-y-4 sm:space-y-5 transition-all duration-500 ${currentSlide === 0 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tealSoft border border-brand-tealBorder text-brand-teal text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
              <span>NadiCo ERP • FLAGSHIP SCHOOL PLATFORM (THE READLY)</span>
              <ShieldCheck className="w-3.5 h-3.5 text-brand-limeDark" />
            </div>

            <SlideTypewriter
              active={currentSlide === 0}
              prefix="Intelligent "
              highlight="School Management ERP"
              highlightClass="teal-gradient-text"
              suffix=" & Native Mobile Apps"
              paragraph="Trusted by 250+ campuses across Pakistan. Automated 3-part bank fee challans, instant WhatsApp parent alerts, 1-tap biometric attendance, and board-compliant exam report cards."
            />

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a href="/school-erp" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-teal hover:bg-brand-tealDark transition-all duration-200 shadow-button flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-limeLight" />
                <span>Explore School ERP Modules</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://thereadlyerp.vercel.app/rehan" target="_blank" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-brand-teal transition-all duration-200 shadow-sm flex items-center gap-2 group">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime"></span>
                <span>View Live School Portal</span>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-brand-teal transition-transform" />
              </a>
              <a href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20would%20like%20to%20schedule%20a%20demo%20for%20NadiCo%20School%20ERP." target="_blank" className="px-5 sm:px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 transition-all duration-200 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-emerald-600" /><span>Two-Factor Authentication (2FA)</span></div>
              <div className="flex items-center gap-1.5"><Receipt className="w-4 h-4 text-brand-teal" /><span>3-Part Bank Challans (Meezan/HBL)</span></div>
              <div className="flex items-center gap-1.5"><Fingerprint className="w-4 h-4 text-brand-limeDark" /><span>ZKTeco Biometric Turnstiles Sync</span></div>
            </div>
          </div>

          {/* SLIDE 2: HOSPITAL MANAGEMENT SYSTEM (HMS) */}
          <div id="heroSlide1" className={`hero-slide space-y-4 sm:space-y-5 transition-all duration-500 ${currentSlide === 1 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
              <span>CLINICAL & HEALTHCARE AUTOMATION • PAPERLESS OPD/IPD</span>
              <Activity className="w-3.5 h-3.5 text-sky-600" />
            </div>

            <SlideTypewriter
              active={currentSlide === 1}
              prefix="Intelligent "
              highlight="Hospital Management"
              highlightClass="text-sky-700"
              suffix=" & Clinical EHR Platform"
              paragraph="A complete hospital system that runs smoothly without paper files: organize OPD tokens, manage patient admissions and beds, link pharmacy billing, and generate lab reports instantly."
            />

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a href="#hospital-hms" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-sky-700 hover:bg-sky-800 transition-all duration-200 shadow-button flex items-center gap-2">
                <Activity className="w-4 h-4" />
                <span>Explore Hospital HMS Modules</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-sky-700 transition-all duration-200 shadow-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-600"></span>
                <span>Request Clinical HMS Walkthrough</span>
              </a>
              <a href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20would%20like%20to%20inquire%20about%20Hospital%20Management%20System." target="_blank" className="px-5 sm:px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 transition-all duration-200 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-sky-600" /><span>OPD/IPD Queue Token Engine</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-sky-600" /><span>Integrated Pharmacy Point of Sale</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-sky-600" /><span>Multi-Consultant Doctor Roster</span></div>
            </div>
          </div>

          {/* SLIDE 3: RETAIL INVENTORY & CLOUD POS */}
          <div id="heroSlide2" className={`hero-slide space-y-4 sm:space-y-5 transition-all duration-500 ${currentSlide === 2 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>COMMERCE & WAREHOUSE • HIGH-SPEED BARCODE POS</span>
              <Boxes className="w-3.5 h-3.5 text-emerald-600" />
            </div>

            <SlideTypewriter
              active={currentSlide === 2}
              prefix="Omnichannel "
              highlight="Cloud POS & Inventory"
              highlightClass="text-emerald-700"
              suffix=" Management"
              paragraph="Built for fast retail and wholesale counters: scan barcodes in a split second, track inventory across multiple branches, maintain customer credit khatas, and generate FBR-compliant invoices."
            />

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a href="#inventory-pos" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-all duration-200 shadow-button flex items-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                <span>Explore POS & Inventory Engine</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-emerald-700 transition-all duration-200 shadow-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span>Request Retail POS Demo</span>
              </a>
              <a href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20would%20like%20to%20inquire%20about%20POS%20and%20Inventory%20System." target="_blank" className="px-5 sm:px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 transition-all duration-200 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Consult on WhatsApp</span>
              </a>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600" /><span>Sub-Second Barcode Scanning</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600" /><span>Inter-Branch Stock Transfer (STN)</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-600" /><span>FBR Digital POS Invoicing</span></div>
            </div>
          </div>

          {/* SLIDE 4: BESPOKE WEB ENGINEERING & DIGITAL MARKETING (IMAGE 2) */}
          <div id="heroSlide3" className={`hero-slide space-y-4 sm:space-y-5 transition-all duration-500 ${currentSlide === 3 ? 'opacity-100 block' : 'opacity-0 hidden'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tealSoft border border-brand-tealBorder text-brand-teal text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
              <span>BESPOKE WEB ENGINEERING • HIGH-IMPACT DIGITAL GROWTH</span>
              <Code className="w-3.5 h-3.5 text-brand-teal" />
            </div>

            <SlideTypewriter
              active={currentSlide === 3}
              prefix="Custom Enterprise "
              highlight="Web Engineering"
              highlightClass="teal-gradient-text"
              suffix=" & Growth"
              paragraph="We build fast, secure custom websites and customer portals from scratch, coupled with high-converting Google and social media marketing to help your business win real, paying clients."
            />

            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
              <a href="#web-development" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-brand-teal hover:bg-brand-tealDark transition-all duration-200 shadow-button flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>Explore Web Engineering</span>
                <ArrowDown className="w-4 h-4" />
              </a>
              <a href="#digital-marketing" className="px-6 sm:px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-brand-teal transition-all duration-200 shadow-sm flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-lime"></span>
                <span>Digital Marketing & SEO</span>
              </a>
              <a href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20would%20like%20to%20discuss%20a%20new%20website%20project." target="_blank" className="px-5 sm:px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 transition-all duration-200 shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:scale-[1.03] active:scale-[0.98] flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Start Web Consultation</span>
              </a>
            </div>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /><span>Custom Full-Stack Web Portals</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /><span>99+ Google PageSpeed Score</span></div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /><span>Targeted Google & Meta Ads Campaigns</span></div>
            </div>
          </div>

        </div>

        {/* Slider Bottom Indicator Dots */}
        <div className="flex items-center justify-center gap-2.5 pt-5 pb-2">
          <button onClick={() => goToSlide(0)} aria-label="Go to slide 1" className={`hero-dot rounded-full transition-all ${currentSlide === 0 ? 'w-7 h-2 bg-brand-teal' : 'w-2.5 h-2 bg-slate-300 hover:bg-slate-400'}`}></button>
          <button onClick={() => goToSlide(1)} aria-label="Go to slide 2" className={`hero-dot rounded-full transition-all ${currentSlide === 1 ? 'w-7 h-2 bg-sky-700' : 'w-2.5 h-2 bg-slate-300 hover:bg-slate-400'}`}></button>
          <button onClick={() => goToSlide(2)} aria-label="Go to slide 3" className={`hero-dot rounded-full transition-all ${currentSlide === 2 ? 'w-7 h-2 bg-emerald-700' : 'w-2.5 h-2 bg-slate-300 hover:bg-slate-400'}`}></button>
          <button onClick={() => goToSlide(3)} aria-label="Go to slide 4" className={`hero-dot rounded-full transition-all ${currentSlide === 3 ? 'w-7 h-2 bg-brand-teal' : 'w-2.5 h-2 bg-slate-300 hover:bg-slate-400'}`}></button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* DUAL DEVICE HERO SHOWCASE (SYNCHRONIZED WITH SLIDER) */}
      {/* ========================================================================= */}
      <div className="mt-8 lg:mt-10 relative max-w-6xl mx-auto">

                {/* Device Grid Container (Widescreen 16:10 Laptop + Compact Edge Phone) */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          {/* 1. LAPTOP MOCKUP (Strict 16:10 Widescreen Landscape Acumatica-Style Dashboard) */}
          <div className="lg:col-span-8 xl:col-span-9 relative">
            
            {/* MacBook Aluminum Chassis */}
            <div className="rounded-2xl p-1.5 sm:p-2.5 bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 shadow-laptop border border-slate-300">
              
              {/* Top Bezel with Camera Dot */}
              <div className="flex items-center justify-between px-2.5 py-1 bg-slate-100 rounded-t-xl border-b border-slate-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>

                {/* Browser Address Bar */}
                <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white border border-slate-200 text-[9px] sm:text-[10px] text-slate-600 w-3/5 justify-center shadow-xs">
                  <Lock className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span id="laptopUrlBar" className="truncate font-mono font-medium">{laptopUrls[activeSuite]}</span>
                </div>

                <div className="flex items-center gap-1 text-[8px] sm:text-[9px] text-emerald-700 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="hidden sm:inline font-mono">ONLINE</span>
                </div>
              </div>

              {/* SCREEN CONTAINER (STRICT 16:10 LANDSCAPE ACUMATICA ERP RATIO) */}
              <div id="laptopScreen" className="laptop-16-10 bg-white rounded-b-xl overflow-hidden text-slate-800 border-t border-slate-200 relative shadow-inner flex flex-col justify-between">
                
                {/* ========================================================= */}
                {/* SUITE 1: SCHOOL MANAGEMENT ERP (THE READLY ERP) */}
                {/* ========================================================= */}
                <div id="viewSchoolERP" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === 'school' ? '' : 'hidden'}`}>
                  
                  {/* READLY ERP TOP BAR (EXACT BRANDING FROM USER'S SCREENSHOT) */}
                  <div className="bg-[#0f172a] text-white px-1.5 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between text-[7.5px] sm:text-[10px] shrink-0 border-b border-slate-800">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      {/* School Logo & Name */}
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px] border border-emerald-400">
                          RS
                        </div>
                        <div className="hidden sm:block">
                          <div className="font-bold text-white text-[9px] sm:text-[11px] leading-tight">Rehan School</div>
                          <div className="text-[7px] text-emerald-400 font-mono tracking-wider">REHAN + ERP</div>
                        </div>
                      </div>

                      {/* Session Pill */}
                      <div className="hidden md:flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-[8.5px] text-emerald-300 border border-emerald-500/30 font-medium">
                        <Calendar className="w-2.5 h-2.5" />
                        <span>Session: 2026-2027 City Academic Session</span>
                      </div>

                      {/* Search Input */}
                      <div className="hidden lg:flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-lg text-[8.5px] text-slate-300 border border-white/10 w-44">
                        <Search className="w-2.5 h-2.5 text-slate-400" />
                        <span className="truncate">Search students, challans, staff... Ctrl+K</span>
                      </div>
                    </div>

                    {/* Top Right Actions */}
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[7.5px] sm:text-[9.5px]">
                      <span className="hidden sm:flex items-center gap-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded font-mono">
                        <Shield className="w-2.5 h-2.5" /> 2FA Access
                      </span>

                      <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded font-bold transition-colors shadow-2xs">
                        + New Admission
                      </button>

                      <button className="hidden sm:block border border-emerald-500 text-emerald-300 hover:bg-emerald-500/10 px-2 py-0.5 rounded font-medium transition-colors">
                        Collect Fee
                      </button>

                      {/* Super Admin Avatar (Jamal Pasha from screenshot) */}
                      <div className="flex items-center gap-1.5 pl-1 sm:pl-2 border-l border-slate-700">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px]">
                          J
                        </div>
                        <div className="hidden sm:block text-left">
                          <div className="font-bold text-white text-[8.5px] leading-tight">Jamal Pasha</div>
                          <div className="text-[6.5px] text-emerald-400 font-mono">SUPER ADMIN</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE BODY: FULL SIDEBAR + PACKED WORKSPACE */}
                  <div className="flex-1 flex flex-row overflow-hidden">
                    
                    {/* LEFT SIDEBAR (ALL AUTHENTIC OPTIONS FROM USER'S SCREENSHOT & LINK - 100% PURE WHITE TEXT) */}
                    <div className="w-7 sm:w-40 md:w-44 bg-[#0a1120] text-white p-0.5 sm:p-1 flex flex-col justify-between shrink-0 overflow-y-auto custom-erp-scrollbar text-[8px] sm:text-[9.5px] border-r border-slate-800">
                      
                      {/* Navigation Menu Items List (ALL PURE CRISP WHITE TEXT) */}
                      <div className="space-y-0.5">
                        
                        {/* 1. Dashboard (Active Green from screenshot) */}
                        <button onClick={() => setSchoolSubTab('dashboard')} id="sideBtn-school-dashboard" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${schoolSubTab === 'dashboard' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <LayoutDashboard className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Dashboard</span>
                        </button>

                        {/* 2. Students (SIS) */}
                        <button onClick={() => setSchoolSubTab('students')} id="sideBtn-school-students" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${schoolSubTab === 'students' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <Users className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Students (SIS)</span>
                        </button>

                        {/* 3. Parents Portal */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <UserCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Parents Portal</span>
                        </button>

                        {/* 4. Teachers */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <GraduationCap className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Teachers & Faculty</span>
                        </button>

                        {/* 5. Staff & HR */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <Briefcase className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Staff & Payroll</span>
                        </button>

                        {/* 6. Academics */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <BookOpen className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Academics & Sessions</span>
                        </button>

                        {/* 7. Attendance */}
                        <button onClick={() => setSchoolSubTab('attendance')} id="sideBtn-school-attendance" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${schoolSubTab === 'attendance' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <Fingerprint className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Biometric Attendance</span>
                        </button>

                        {/* 8. Fees & Challans */}
                        <button onClick={() => setSchoolSubTab('fees')} id="sideBtn-school-fees" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${schoolSubTab === 'fees' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <CreditCard className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Fee Challans & Bank</span>
                        </button>

                        {/* 9. Finance & Accounts */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <Banknote className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Finance & Accounts</span>
                        </button>

                        {/* 10. Examinations */}
                        <button onClick={() => setSchoolSubTab('reports')} id="sideBtn-school-reports" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${schoolSubTab === 'reports' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <FileSpreadsheet className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Examinations & Cards</span>
                        </button>

                        {/* 11. Homework & Tasks */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <CheckSquare className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Homework & Tasks</span>
                        </button>

                        {/* 12. Notice Board */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <Bell className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Notice Board</span>
                        </button>

                        {/* 13. Reports & Analytics */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-slate-800 text-white font-medium transition-all">
                          <BarChart3 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Executive Analytics</span>
                        </button>

                        {/* 14. Manual */}
                        <button onClick={() => setSchoolSubTab('manual')} id="sideBtn-school-manual" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${schoolSubTab === 'manual' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <BookMarked className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">System Manual</span>
                        </button>
                      </div>

                      {/* Bottom User Pill (100% PURE CRISP WHITE) */}
                      <div className="pt-1 border-t border-slate-800 mt-1 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[7px] border border-emerald-400">
                            J
                          </div>
                          <div className="hidden sm:block text-[8px]">
                            <div className="font-bold text-white leading-tight">Jamal Pasha</div>
                            <div className="text-[6.5px] text-white font-mono opacity-90">SUPER ADMIN</div>
                          </div>
                        </div>
                        <LogOut className="w-2.5 h-2.5 text-white hidden sm:block" />
                      </div>

                    </div>

                    {/* RIGHT WORKSPACE (PACKED WITH SCREENSHOT'S WELCOME BANNER, 4 STATS, TABLE & NOTICE BOARD) */}
                    <div className="flex-1 p-1 sm:p-2 bg-slate-100/70 overflow-y-auto custom-erp-scrollbar flex flex-col justify-between space-y-1 sm:space-y-1.5">
                      
                      {/* Breadcrumb */}
                      <div className="flex items-center justify-between text-[7px] sm:text-[9px] text-slate-500 shrink-0">
                        <div className="flex items-center gap-1">
                          <Home className="w-2.5 h-2.5 text-slate-400" />
                          <span className="font-medium text-slate-700">Home</span>
                          <span>/</span>
                          <span className="text-slate-500">Rehan</span>
                          <span>/</span>
                          <span id="schoolBreadcrumbTitle" className="text-emerald-700 font-bold">Dashboard</span>
                        </div>
                        <div className="text-[6.5px] sm:text-[8px] text-slate-400 font-mono">
                          1Link Gateway: <span className="text-emerald-700 font-bold">Active (Meezan/HBL)</span>
                        </div>
                      </div>

                      {/* SUB-VIEW 1: DASHBOARD (MATCHES SCREENSHOT EXACTLY) */}
                      <div id="subView-school-dashboard" className={`space-y-1 sm:space-y-1.5 flex-1 flex flex-col justify-between ${schoolSubTab === 'dashboard' ? '' : 'hidden'}`}>
                        
                        {/* 1. TOP WELCOME HERO BANNER (FROM USER'S SCREENSHOT) */}
                        <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-[#064e3b] via-[#047857] to-[#0f172a] text-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 shrink-0">
                          <div className="space-y-0.5">
                            <span className="bg-white/20 px-1.5 py-0.2 rounded-full text-[6.5px] sm:text-[8px] font-semibold text-emerald-200 uppercase tracking-wider">Institutional Overview</span>
                            <div className="text-[9px] sm:text-xs font-black tracking-tight">Welcome back, Jamal Pasha</div>
                            <div className="text-[6.5px] sm:text-[8px] text-emerald-100/80">The Readly Institute Management System is running smoothly for Academic Year 2026-27.</div>
                          </div>

                          {/* Action Buttons from Screenshot */}
                          <div className="flex items-center gap-1 text-[6.5px] sm:text-[8px] pt-0.5 sm:pt-0">
                            <span className="bg-emerald-500/30 border border-emerald-300/40 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              <ShieldCheck className="w-2.5 h-2.5 text-emerald-300" /> 2FA Security
                            </span>
                            <span className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              <Smartphone className="w-2.5 h-2.5" /> Readly App (APK)
                            </span>
                            <span className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              Reports ↗
                            </span>
                          </div>
                        </div>

                        {/* 2. FOUR STAT CARDS (FROM SCREENSHOT: Students, Faculty, Attendance, Fees) */}
                        <div className="grid grid-cols-4 gap-1 sm:gap-1.5 shrink-0">
                          
                          {/* Card 1: Active Students */}
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Active Students</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">1,420</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-emerald-700 font-bold">✓ 100% Enrolled</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                              <GraduationCap className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          </div>

                          {/* Card 2: Faculty & Staff */}
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Faculty & Staff</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">78</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-sky-700 font-medium truncate">78 Teachers • 0 Staff</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          </div>

                          {/* Card 3: Today's Attendance */}
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Today Attendance</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">98.4%</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-purple-700 font-medium truncate">ZKTeco Marked</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                              <CalendarCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          </div>

                          {/* Card 4: Total Fee Collection */}
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Total Fee Collection</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">Rs. 9.4M</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-rose-600 font-medium truncate">Rs. 185K Due</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                              <CircleDollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                            </div>
                          </div>

                        </div>

                        {/* 3. MAIN WORKSPACE SPLIT (LEFT: ADMISSIONS TABLE | RIGHT: NOTICE BOARD & BULLETINS) */}
                        <div className="grid grid-cols-12 gap-1 sm:gap-1.5 items-stretch flex-1">
                          
                          {/* LEFT PANEL (65%): RECENT STUDENT ADMISSIONS TABLE (FROM SCREENSHOT) */}
                          <div className="col-span-8 p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            
                            <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                              <div>
                                <span className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Recent Student Admissions</span>
                                <span className="text-[5.5px] sm:text-[7.5px] text-slate-400 block">Latest students registered in current academic cycle</span>
                              </div>
                              <a href="#school-erp" className="text-emerald-700 font-bold text-[6.5px] sm:text-[8px] hover:underline">View All</a>
                            </div>

                            <div className="divide-y divide-slate-100 text-[6px] sm:text-[8px]">
                              {/* Row 1 (From Screenshot) */}
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Mahnoor Babar</div>
                                <div className="font-mono text-brand-teal text-[5.5px] sm:text-[7.5px]">DEMO-STU-025</div>
                                <div className="text-slate-500 hidden sm:block">Class 1 (Demo) (B)</div>
                                <div className="text-slate-400 font-mono text-[5.5px] sm:text-[7px] hidden md:block">18 Oct 2026</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">ACTIVE</span>
                              </div>

                              {/* Row 2 (From Screenshot) */}
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Taha Siddiqui</div>
                                <div className="font-mono text-brand-teal text-[5.5px] sm:text-[7.5px]">DEMO-STU-024</div>
                                <div className="text-slate-500 hidden sm:block">Class 1 (Demo) (B)</div>
                                <div className="text-slate-400 font-mono text-[5.5px] sm:text-[7px] hidden md:block">18 Oct 2026</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">ACTIVE</span>
                              </div>

                              {/* Row 3 (From Screenshot) */}
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Anaya Javed</div>
                                <div className="font-mono text-brand-teal text-[5.5px] sm:text-[7.5px]">DEMO-STU-023</div>
                                <div className="text-slate-500 hidden sm:block">Class 1 (Demo) (B)</div>
                                <div className="text-slate-400 font-mono text-[5.5px] sm:text-[7px] hidden md:block">18 Oct 2026</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">ACTIVE</span>
                              </div>

                              {/* Row 4 (From Screenshot) */}
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Hassan Mujtaba</div>
                                <div className="font-mono text-brand-teal text-[5.5px] sm:text-[7.5px]">DEMO-STU-022</div>
                                <div className="text-slate-500 hidden sm:block">Class 1 (Demo) (B)</div>
                                <div className="text-slate-400 font-mono text-[5.5px] sm:text-[7px] hidden md:block">18 Oct 2026</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">ACTIVE</span>
                              </div>

                              {/* Row 5 (From Screenshot) */}
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Areeba Shahid</div>
                                <div className="font-mono text-brand-teal text-[5.5px] sm:text-[7.5px]">DEMO-STU-021</div>
                                <div className="text-slate-500 hidden sm:block">Class 1 (Demo) (B)</div>
                                <div className="text-slate-400 font-mono text-[5.5px] sm:text-[7px] hidden md:block">18 Oct 2026</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">ACTIVE</span>
                              </div>
                            </div>

                          </div>

                          {/* RIGHT PANEL (35%): NOTICE BOARD & QUICK ACTIONS (FROM SCREENSHOT) */}
                          <div className="col-span-4 p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            
                            <div>
                              <div className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Notice Board</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-slate-400 pb-1">Official bulletins & calendar alerts</div>

                              <button className="w-full py-1 rounded-md bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 font-bold text-[6px] sm:text-[8px] transition-colors mb-1.5">
                                Manage All Announcements
                              </button>

                              <div className="space-y-1 text-[5.5px] sm:text-[7.5px]">
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-emerald-500 space-y-0.2">
                                  <div className="font-bold text-slate-900">Mid-Term Datesheet Released</div>
                                  <div className="text-slate-500">Term examinations commence Nov 10.</div>
                                </div>
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-brand-teal space-y-0.2">
                                  <div className="font-bold text-slate-900">1Link 1Bill Reconciliation Done</div>
                                  <div className="text-slate-500">Meezan Bank & HBL Direct sync active.</div>
                                </div>
                              </div>
                            </div>

                            {/* Fast Action Strip */}
                            <div className="pt-1 border-t border-slate-100 grid grid-cols-2 gap-1 text-[6px] sm:text-[7.5px]">
                              <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium flex items-center justify-center gap-0.5">
                                <Plus className="w-2.5 h-2.5 text-emerald-600" /> Admission
                              </button>
                              <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium flex items-center justify-center gap-0.5">
                                <Receipt className="w-2.5 h-2.5 text-brand-teal" /> Fee Challan
                              </button>
                            </div>

                          </div>

                        </div>

                      </div>

                      {/* SUB-VIEW 2: STUDENTS (SIS) */}
                      <div id="subView-school-students" className={`hidden space-y-1 flex-1 overflow-auto ${schoolSubTab === 'students' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900 text-[8px] sm:text-[10px]">Student Admissions Directory (SIS)</div>
                        <div className="overflow-x-auto rounded border border-slate-200 bg-white text-[6px] sm:text-[8px]">
                          <table className="w-full text-left">
                            <thead className="bg-slate-100 font-bold">
                              <tr>
                                <th className="p-1">Roll #</th>
                                <th className="p-1">Student</th>
                                <th className="p-1">Class</th>
                                <th className="p-1">Guardian</th>
                                <th className="p-1">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                              <tr>
                                <td className="p-1 font-mono text-brand-teal font-bold">RS-1001</td>
                                <td className="p-1 font-semibold">Muhammad Rehan</td>
                                <td className="p-1">10-A</td>
                                <td className="p-1 font-mono">0333-7221552</td>
                                <td className="p-1 text-emerald-700 font-bold">Active</td>
                              </tr>
                              <tr>
                                <td className="p-1 font-mono text-brand-teal font-bold">RS-1002</td>
                                <td className="p-1 font-semibold">Ayesha Siddiqua</td>
                                <td className="p-1">10-A</td>
                                <td className="p-1 font-mono">0300-8429110</td>
                                <td className="p-1 text-emerald-700 font-bold">Active</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* SUB-VIEW 3: FEE CHALLANS */}
                      <div id="subView-school-fees" className={`hidden space-y-1 flex-1 overflow-auto text-[6px] sm:text-[8px] ${schoolSubTab === 'fees' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900 text-[8px] sm:text-[10px]">Fee Challan Generation & 1Link 1Bill Automation</div>
                        <div className="p-1.5 rounded bg-white border border-slate-200">
                          <div>Direct Kuickpay / JazzCash / EasyPaisa reconciliation enabled for all branches.</div>
                        </div>
                      </div>

                      {/* SUB-VIEW 4: REPORTS */}
                      <div id="subView-school-reports" className={`hidden space-y-1 flex-1 overflow-auto text-[6px] sm:text-[8px] ${schoolSubTab === 'reports' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900 text-[8px] sm:text-[10px]">Terminal Examination Report Cards</div>
                        <div className="p-1.5 rounded bg-white border border-slate-200">
                          <div>Automated grading (A+, A, B, C) with class positions and QR-coded authentication.</div>
                        </div>
                      </div>

                      {/* SUB-VIEW 5: ATTENDANCE */}
                      <div id="subView-school-attendance" className={`hidden space-y-1 flex-1 overflow-auto text-[6px] sm:text-[8px] ${schoolSubTab === 'attendance' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900 text-[8px] sm:text-[10px]">Biometric Attendance Machine Sync</div>
                        <div className="p-1.5 rounded bg-white border border-slate-200">
                          <div>ZKTeco Hardware connected over LAN. Live student entry SMS sent to parents.</div>
                        </div>
                      </div>

                      {/* SUB-VIEW 6: MANUAL */}
                      <div id="subView-school-manual" className={`hidden space-y-1 flex-1 overflow-auto text-[6px] sm:text-[8px] ${schoolSubTab === 'manual' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900 text-[8px] sm:text-[10px]">Institutional Administrator Guide</div>
                        <div className="p-1.5 rounded bg-white border border-slate-200">
                          <div>Complete Urdu & English operations guide for staff onboarding and fee counter.</div>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* BOTTOM STATUS BAR */}
                  <div className="bg-[#0f172a] text-white px-2 sm:px-3 py-0.5 flex items-center justify-between text-[6.5px] sm:text-[8px] shrink-0 font-mono border-t border-slate-800">
                    <span className="text-slate-300">Product: The Readly ERP Instance • Rehan School Campus (2026-27)</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> ALL MODULES SYNCED 100%</span>
                  </div>

                </div>


                {/* ========================================================= */}
                {/* SUITE 2: HOSPITAL MANAGEMENT SYSTEM (NadiCo HMS) */}
                {/* ========================================================= */}
                <div id="viewHospitalHMS" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === 'hospital' ? '' : 'hidden'}`}>
                  
                  {/* HMS TOP BAR */}
                  <div className="bg-sky-900 text-white px-1.5 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between text-[7.5px] sm:text-[10px] shrink-0 border-b border-sky-950">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px] border border-sky-300">
                          +
                        </div>
                        <div className="hidden sm:block">
                          <div className="font-bold text-white text-[9px] sm:text-[11px] leading-tight">NadiCo HMS</div>
                          <div className="text-[7px] text-sky-300 font-mono tracking-wider">CLINICAL SUITE</div>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-[8.5px] text-sky-200 border border-sky-400/30">
                        <Activity className="w-2.5 h-2.5" />
                        <span>City Medical Center • 24/7 Emergency & Inpatient Hospital</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 text-[7.5px] sm:text-[9.5px]">
                      <button className="bg-sky-600 hover:bg-sky-500 text-white px-2 py-0.5 rounded font-bold shadow-2xs">
                        + Admit Patient
                      </button>

                      <div className="flex items-center gap-1.5 pl-1 sm:pl-2 border-l border-sky-800">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px]">
                          MD
                        </div>
                        <div className="hidden sm:block text-left">
                          <div className="font-bold text-white text-[8.5px] leading-tight">Dr. Farhan MD</div>
                          <div className="text-[6.5px] text-sky-300 font-mono">MEDICAL DIRECTOR</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE BODY: FULL 14-OPTION HOSPITAL SIDEBAR + WORKSPACE */}
                  <div className="flex-1 flex flex-row overflow-hidden">
                    
                    {/* Left Sidebar (Full 14 Hospital Options - 100% PURE UNIFORM WHITE TEXT) */}
                    <div className="w-7 sm:w-40 md:w-44 bg-[#082f49] text-white p-0.5 sm:p-1 flex flex-col justify-between shrink-0 overflow-y-auto custom-erp-scrollbar text-[8px] sm:text-[9.5px] border-r border-sky-900">
                      <div className="space-y-0.5">
                        
                        {/* 1. Overview */}
                        <button onClick={() => setHospitalSubTab('dashboard')} id="sideBtn-hospital-dashboard" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${hospitalSubTab === 'dashboard' ? 'bg-sky-700 text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <LayoutDashboard className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Overview Dashboard</span>
                        </button>

                        {/* 2. OPD Queue */}
                        <button onClick={() => setHospitalSubTab('opd')} id="sideBtn-hospital-opd" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${hospitalSubTab === 'opd' ? 'bg-sky-700 text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <Stethoscope className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">OPD & Patient Queue</span>
                        </button>

                        {/* 3. IPD Wards & Beds */}
                        <button onClick={() => setHospitalSubTab('beds')} id="sideBtn-hospital-beds" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${hospitalSubTab === 'beds' ? 'bg-sky-700 text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <BedDouble className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">IPD Wards & Bed Matrix</span>
                        </button>

                        {/* 4. Doctors & Duty Rosters */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <UserCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Doctors & Duty Rosters</span>
                        </button>

                        {/* 5. Nursing Station */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <HeartPulse className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Nursing Station</span>
                        </button>

                        {/* 6. Pharmacy & Drug Dispensing */}
                        <button onClick={() => setHospitalSubTab('pharmacy')} id="sideBtn-hospital-pharmacy" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${hospitalSubTab === 'pharmacy' ? 'bg-sky-700 text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <Pill className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Pharmacy & Drug Store</span>
                        </button>

                        {/* 7. Laboratory (LIS) */}
                        <button onClick={() => setHospitalSubTab('lab')} id="sideBtn-hospital-lab" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors ${hospitalSubTab === 'lab' ? 'bg-sky-700 text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}`}>
                          <FlaskConical className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Pathology Lab (LIS)</span>
                        </button>

                        {/* 8. Radiology & Imaging */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <Scan className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Radiology & X-Ray</span>
                        </button>

                        {/* 9. Emergency & ICU */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <AlertCircle className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Emergency & ICU Triage</span>
                        </button>

                        {/* 10. Operation Theater */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <Scissors className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Operation Theater (OT)</span>
                        </button>

                        {/* 11. Hospital Billing */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <Receipt className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Billing & Insurance</span>
                        </button>

                        {/* 12. EMR Records */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <ClipboardList className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Electronic EMR Records</span>
                        </button>

                        {/* 13. Reports */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <BarChart2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Clinical Analytics</span>
                        </button>

                        {/* 14. Settings */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-sky-800 text-white font-medium transition-all">
                          <Settings className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Hospital Settings</span>
                        </button>
                      </div>

                      <div className="pt-1 border-t border-sky-800 mt-1 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-sky-700 text-white flex items-center justify-center font-bold text-[7px] border border-sky-400">
                            MD
                          </div>
                          <div className="hidden sm:block text-[8px]">
                            <div className="font-bold text-white leading-tight">Dr. Farhan MD</div>
                            <div className="text-[6.5px] text-white font-mono opacity-90">MEDICAL DIRECTOR</div>
                          </div>
                        </div>
                        <Shield className="w-2.5 h-2.5 text-white hidden sm:block" />
                      </div>
                    </div>

                    {/* Main Workspace Area */}
                    <div className="flex-1 p-1 sm:p-2 bg-slate-100/70 overflow-y-auto custom-erp-scrollbar flex flex-col justify-between space-y-1 sm:space-y-1.5">
                      
                      {/* Breadcrumb */}
                      <div className="flex items-center justify-between text-[7px] sm:text-[9px] text-slate-500 shrink-0">
                        <div className="flex items-center gap-1">
                          <Activity className="w-2.5 h-2.5 text-sky-700" />
                          <span className="font-bold text-slate-800">Hospital Operations</span>
                          <span>/</span>
                          <span id="hospitalBreadcrumbTitle" className="text-sky-700 font-bold">Clinical Care Overview</span>
                        </div>
                        <div className="text-[6.5px] sm:text-[8px] text-slate-400 font-mono">
                          OPD Tokens: <span className="text-sky-700 font-bold">LED Display Synced</span>
                        </div>
                      </div>

                      {/* Dashboard View */}
                      <div id="subView-hospital-dashboard" className={`space-y-1 sm:space-y-1.5 flex-1 flex flex-col justify-between ${hospitalSubTab === 'dashboard' ? '' : 'hidden'}`}>
                        
                        {/* Welcome Hero */}
                        <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-sky-900 via-sky-800 to-slate-900 text-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 shrink-0">
                          <div className="space-y-0.5">
                            <span className="bg-white/20 px-1.5 py-0.2 rounded-full text-[6.5px] sm:text-[8px] font-semibold text-sky-200 uppercase tracking-wider">Clinical Care Hub</span>
                            <div className="text-[9px] sm:text-xs font-black tracking-tight">Welcome back, Dr. Farhan MD</div>
                            <div className="text-[6.5px] sm:text-[8px] text-sky-100/80">City Hospital Inpatient & Outpatient systems operating at 100% capacity.</div>
                          </div>

                          <div className="flex items-center gap-1 text-[6.5px] sm:text-[8px]">
                            <span className="bg-sky-500/30 border border-sky-300/40 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              <Bed className="w-2.5 h-2.5" /> Bed Matrix
                            </span>
                            <span className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              OT Status ↗
                            </span>
                          </div>
                        </div>

                        {/* 4 Stat Cards */}
                        <div className="grid grid-cols-4 gap-1 sm:gap-1.5 shrink-0">
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">OPD Patients</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">342</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-sky-700 font-bold">28 In-Queue</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0"><Stethoscope className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>

                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Bed Occupancy</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">88%</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-emerald-700 font-medium truncate">142/160 Inpatients</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><BedDouble className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>

                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">ICU & Triage</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">12</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-rose-600 font-medium truncate">100% O2 Stable</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0"><HeartPulse className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>

                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Pharmacy Sale</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">Rs. 1.8M</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-amber-700 font-medium truncate">POS Reconciled</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><Pill className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>
                        </div>

                        {/* Main Split Grid */}
                        <div className="grid grid-cols-12 gap-1 sm:gap-1.5 items-stretch flex-1">
                          
                          {/* Table (65%) */}
                          <div className="col-span-8 p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                              <div>
                                <span className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Live Patient Admissions & OPD Consultations</span>
                                <span className="text-[5.5px] sm:text-[7.5px] text-slate-400 block">Active electronic health records (EHR)</span>
                              </div>
                              <span className="text-sky-700 font-bold text-[6.5px] sm:text-[8px]">Token Call Active</span>
                            </div>

                            <div className="divide-y divide-slate-100 text-[6px] sm:text-[8px]">
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Tariq Mahmood</div>
                                <div className="font-mono text-sky-700 text-[5.5px] sm:text-[7.5px]">#MR-8901</div>
                                <div className="text-slate-500 hidden sm:block">Cardiology (Room 4)</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">IN-CONSULT</span>
                              </div>

                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Zainab Bibi</div>
                                <div className="font-mono text-sky-700 text-[5.5px] sm:text-[7.5px]">#MR-8902</div>
                                <div className="text-slate-500 hidden sm:block">Pediatrics (Room 2)</div>
                                <span className="bg-amber-50 text-amber-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">WAITING (#13)</span>
                              </div>

                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Bilal Ahmed</div>
                                <div className="font-mono text-sky-700 text-[5.5px] sm:text-[7.5px]">#MR-8903</div>
                                <div className="text-slate-500 hidden sm:block">Orthopedics (Room 1)</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">IN-CONSULT</span>
                              </div>

                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">Saima Khan</div>
                                <div className="font-mono text-sky-700 text-[5.5px] sm:text-[7.5px]">#MR-8904</div>
                                <div className="text-slate-500 hidden sm:block">Gynaecology (Room 5)</div>
                                <span className="bg-amber-50 text-amber-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">WAITING (#14)</span>
                              </div>
                            </div>
                          </div>

                          {/* Notice Board (35%) */}
                          <div className="col-span-4 p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            <div>
                              <div className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Hospital Bulletins</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-slate-400 pb-1">Emergency & OT Broadcasts</div>

                              <div className="space-y-1 text-[5.5px] sm:text-[7.5px]">
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-sky-600 space-y-0.2">
                                  <div className="font-bold text-slate-900">OT-1 Sterilization OK</div>
                                  <div className="text-slate-500">Ready for cardiac surgery 11:30 AM.</div>
                                </div>
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-emerald-500 space-y-0.2">
                                  <div className="font-bold text-slate-900">Pathology LIS Synced</div>
                                  <div className="text-slate-500">Auto Analyzer results sent to patient SMS.</div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-1 border-t border-slate-100 grid grid-cols-2 gap-1 text-[6px] sm:text-[7.5px]">
                              <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium flex items-center justify-center gap-0.5">
                                <Plus className="w-2.5 h-2.5 text-sky-600" /> Admit
                              </button>
                              <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium flex items-center justify-center gap-0.5">
                                <Pill className="w-2.5 h-2.5 text-emerald-600" /> Rx Dispense
                              </button>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Bottom Bar */}
                  <div className="bg-sky-950 text-white px-2 sm:px-3 py-0.5 flex items-center justify-between text-[6.5px] sm:text-[8px] shrink-0 font-mono border-t border-sky-900">
                    <span className="text-sky-200">Product: NadiCo HMS Enterprise Suite • HIPAA Standards</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> CLINICAL SERVER SYNCED 100%</span>
                  </div>

                </div>


                {/* ========================================================= */}
                {/* SUITE 3: RETAIL INVENTORY & POS (NadiCo POS) */}
                {/* ========================================================= */}
                <div id="viewInventoryPOS" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === 'inventory' ? '' : 'hidden'}`}>
                  
                  {/* POS TOP BAR */}
                  <div className="bg-emerald-950 text-white px-1.5 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between text-[7.5px] sm:text-[10px] shrink-0 border-b border-emerald-900">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px] border border-emerald-400">
                          POS
                        </div>
                        <div className="hidden sm:block">
                          <div className="font-bold text-white text-[9px] sm:text-[11px] leading-tight">NadiCo POS</div>
                          <div className="text-[7px] text-emerald-400 font-mono tracking-wider">RETAIL ENTERPRISE</div>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-[8.5px] text-emerald-200 border border-emerald-400/30">
                        <ScanBarcode className="w-2.5 h-2.5" />
                        <span>Terminal 01 • Main Cash Counter • Fast Barcode Checkout</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 text-[7.5px] sm:text-[9.5px]">
                      <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-2 py-0.5 rounded font-bold shadow-2xs">
                        + New Sale (Ctrl+N)
                      </button>

                      <div className="flex items-center gap-1.5 pl-1 sm:pl-2 border-l border-emerald-800">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px]">
                          SM
                        </div>
                        <div className="hidden sm:block text-left">
                          <div className="font-bold text-white text-[8.5px] leading-tight">Store Manager</div>
                          <div className="text-[6.5px] text-emerald-400 font-mono">SUPER ADMIN</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE BODY: FULL 12-OPTION RETAIL SIDEBAR + WORKSPACE */}
                  <div className="flex-1 flex flex-row overflow-hidden">
                    
                    {/* Left Sidebar (Full 12 Retail Options - 100% PURE UNIFORM WHITE TEXT) */}
                    <div className="w-7 sm:w-40 md:w-44 bg-[#064e3b] text-white p-0.5 sm:p-1 flex flex-col justify-between shrink-0 overflow-y-auto custom-erp-scrollbar text-[8px] sm:text-[9.5px] border-r border-emerald-800">
                      <div className="space-y-0.5">
                        
                        {/* 1. Overview */}
                        <button onClick={() => setInventorySubTab('dashboard')} id="sideBtn-inventory-dashboard" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${inventorySubTab === 'dashboard' ? 'bg-emerald-700 text-white font-bold shadow-xs' : 'hover:bg-emerald-800 text-white font-medium'}`}>
                          <LayoutDashboard className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Overview Dashboard</span>
                        </button>

                        {/* 2. POS Register */}
                        <button onClick={() => setInventorySubTab('pos')} id="sideBtn-inventory-pos" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${inventorySubTab === 'pos' ? 'bg-emerald-700 text-white font-bold shadow-xs' : 'hover:bg-emerald-800 text-white font-medium'}`}>
                          <ShoppingCart className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">POS Cash Register</span>
                        </button>

                        {/* 3. SKU Products */}
                        <button onClick={() => setInventorySubTab('products')} id="sideBtn-inventory-products" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${inventorySubTab === 'products' ? 'bg-emerald-700 text-white font-bold shadow-xs' : 'hover:bg-emerald-800 text-white font-medium'}`}>
                          <Boxes className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">SKU Products & Barcodes</span>
                        </button>

                        {/* 4. Stock Transfers */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <ArrowLeftRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Stock Transfers</span>
                        </button>

                        {/* 5. Purchase Orders */}
                        <button onClick={() => setInventorySubTab('po')} id="sideBtn-inventory-po" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${inventorySubTab === 'po' ? 'bg-emerald-700 text-white font-bold shadow-xs' : 'hover:bg-emerald-800 text-white font-medium'}`}>
                          <Truck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Purchase Orders (PO)</span>
                        </button>

                        {/* 6. Vendors */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <Building2 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Vendor Suppliers</span>
                        </button>

                        {/* 7. Customer Accounts */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <Users className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Customer Khata Ledger</span>
                        </button>

                        {/* 8. Barcodes */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <ScanLine className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Barcode SKU Generator</span>
                        </button>

                        {/* 9. FBR Invoicing */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <FileCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">FBR Tier-1 Invoicing</span>
                        </button>

                        {/* 10. Cash Drawer */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <Wallet className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Cash Drawer Settlement</span>
                        </button>

                        {/* 11. Reports */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <BarChart3 className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Sales & Turnover Reports</span>
                        </button>

                        {/* 12. Settings */}
                        <button className="w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left hover:bg-emerald-800 text-white font-medium transition-all">
                          <Settings className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Terminal Settings</span>
                        </button>
                      </div>

                      <div className="pt-1 border-t border-emerald-800 mt-1 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-4 h-4 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-[7px] border border-emerald-400">
                            SM
                          </div>
                          <div className="hidden sm:block text-[8px]">
                            <div className="font-bold text-white leading-tight">Store Manager</div>
                            <div className="text-[6.5px] text-white font-mono opacity-90">SUPER ADMIN</div>
                          </div>
                        </div>
                        <Lock className="w-2.5 h-2.5 text-white hidden sm:block" />
                      </div>
                    </div>

                    {/* Main Workspace Area */}
                    <div className="flex-1 p-1 sm:p-2 bg-slate-100/70 overflow-y-auto custom-erp-scrollbar flex flex-col justify-between space-y-1 sm:space-y-1.5">
                      
                      {/* Breadcrumb */}
                      <div className="flex items-center justify-between text-[7px] sm:text-[9px] text-slate-500 shrink-0">
                        <div className="flex items-center gap-1">
                          <ShoppingBag className="w-2.5 h-2.5 text-emerald-700" />
                          <span className="font-bold text-slate-800">Retail & POS</span>
                          <span>/</span>
                          <span id="inventoryBreadcrumbTitle" className="text-emerald-700 font-bold">POS Overview & Turnover</span>
                        </div>
                        <div className="text-[6.5px] sm:text-[8px] text-slate-400 font-mono">
                          Shift Status: <span className="text-emerald-700 font-bold">Drawer Reconciled</span>
                        </div>
                      </div>

                      {/* Dashboard View */}
                      <div id="subView-inventory-dashboard" className={`space-y-1 sm:space-y-1.5 flex-1 flex flex-col justify-between ${inventorySubTab === 'dashboard' ? '' : 'hidden'}`}>
                        
                        {/* Welcome Hero */}
                        <div className="p-1.5 sm:p-2 rounded-xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 shrink-0">
                          <div className="space-y-0.5">
                            <span className="bg-white/20 px-1.5 py-0.2 rounded-full text-[6.5px] sm:text-[8px] font-semibold text-emerald-200 uppercase tracking-wider">Retail Checkout System</span>
                            <div className="text-[9px] sm:text-xs font-black tracking-tight">Welcome back, Store Manager</div>
                            <div className="text-[6.5px] sm:text-[8px] text-emerald-100/80">Terminal 01 connected to thermal receipt printer and barcode laser.</div>
                          </div>

                          <div className="flex items-center gap-1 text-[6.5px] sm:text-[8px]">
                            <span className="bg-emerald-500/30 border border-emerald-300/40 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              <FileText className="w-2.5 h-2.5" /> FBR Tier-1
                            </span>
                            <span className="bg-white/10 border border-white/20 px-1.5 py-0.5 rounded text-white font-medium flex items-center gap-1">
                              End Shift ↗
                            </span>
                          </div>
                        </div>

                        {/* 4 Stat Cards */}
                        <div className="grid grid-cols-4 gap-1 sm:gap-1.5 shrink-0">
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Gross Sales</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">Rs. 485K</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-emerald-700 font-bold">312 Invoices</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0"><CircleDollarSign className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>

                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Cash Drawer</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">Rs. 64.5K</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-sky-700 font-medium truncate">Shift Verified</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0"><Wallet className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>

                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Low Stock</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">14 SKUs</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-rose-600 font-medium truncate">Reorder Alert</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center shrink-0"><AlertTriangle className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>

                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-center justify-between">
                            <div>
                              <div className="text-[6px] sm:text-[8px] font-medium text-slate-500 uppercase">Pending POs</div>
                              <div className="text-[8.5px] sm:text-xs md:text-sm font-black text-slate-900 leading-tight">3</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-amber-700 font-medium truncate">In-Transit</div>
                            </div>
                            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0"><Truck className="w-3 h-3 sm:w-4 sm:h-4" /></div>
                          </div>
                        </div>

                        {/* Main Split Grid */}
                        <div className="grid grid-cols-12 gap-1 sm:gap-1.5 items-stretch flex-1">
                          
                          {/* Table (65%) */}
                          <div className="col-span-8 p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            <div className="flex justify-between items-center pb-1 border-b border-slate-100">
                              <div>
                                <span className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Real-Time Barcode Checkouts & Invoices</span>
                                <span className="text-[5.5px] sm:text-[7.5px] text-slate-400 block">Instant thermal receipt & FBR QR generated</span>
                              </div>
                              <span className="text-emerald-700 font-bold text-[6.5px] sm:text-[8px]">Scanner Active</span>
                            </div>

                            <div className="divide-y divide-slate-100 text-[6px] sm:text-[8px]">
                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">8 Items (Counter 1)</div>
                                <div className="font-mono text-emerald-700 text-[5.5px] sm:text-[7.5px]">#INV-9021</div>
                                <div className="font-bold text-slate-800">Rs. 4,320</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">CASH PAID</span>
                              </div>

                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">3 Items (Counter 2)</div>
                                <div className="font-mono text-emerald-700 text-[5.5px] sm:text-[7.5px]">#INV-9022</div>
                                <div className="font-bold text-slate-800">Rs. 1,850</div>
                                <span className="bg-sky-50 text-sky-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">RAAST QR</span>
                              </div>

                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">5 Items (Counter 1)</div>
                                <div className="font-mono text-emerald-700 text-[5.5px] sm:text-[7.5px]">#INV-9023</div>
                                <div className="font-bold text-slate-800">Rs. 2,940</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">CARD PAID</span>
                              </div>

                              <div className="flex items-center justify-between py-0.5">
                                <div className="w-2/5 font-semibold text-slate-900 truncate">12 Items (Bulk Sale)</div>
                                <div className="font-mono text-emerald-700 text-[5.5px] sm:text-[7.5px]">#INV-9024</div>
                                <div className="font-bold text-slate-800">Rs. 14,800</div>
                                <span className="bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded text-[5.5px] sm:text-[7px]">CASH PAID</span>
                              </div>
                            </div>
                          </div>

                          {/* Notice Board (35%) */}
                          <div className="col-span-4 p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            <div>
                              <div className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Store Bulletins</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-slate-400 pb-1">Inventory & Price Tier Alerts</div>

                              <div className="space-y-1 text-[5.5px] sm:text-[7.5px]">
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-emerald-600 space-y-0.2">
                                  <div className="font-bold text-slate-900">FBR POS Live Transmitted</div>
                                  <div className="text-slate-500">Tier-1 digital tax server verified.</div>
                                </div>
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-amber-500 space-y-0.2">
                                  <div className="font-bold text-slate-900">Low Stock Trigger (SKU-992)</div>
                                  <div className="text-slate-500">Cooking oil 5L below 15 units.</div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-1 border-t border-slate-100 grid grid-cols-2 gap-1 text-[6px] sm:text-[7.5px]">
                              <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium flex items-center justify-center gap-0.5">
                                <ScanBarcode className="w-2.5 h-2.5 text-emerald-600" /> Scan SKU
                              </button>
                              <button className="p-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium flex items-center justify-center gap-0.5">
                                <Printer className="w-2.5 h-2.5 text-brand-teal" /> Z-Report
                              </button>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Bottom Bar */}
                  <div className="bg-emerald-950 text-white px-2 sm:px-3 py-0.5 flex items-center justify-between text-[6.5px] sm:text-[8px] shrink-0 font-mono border-t border-emerald-900">
                    <span className="text-emerald-300">Product: NadiCo POS Retail Edition • Cash Drawer Interfaced</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> TERMINAL RECONCILED 100%</span>
                  </div>

                </div>

                {/* ========================================================= */}
                {/* SUITE 4: BESPOKE WEB ENGINEERING & DIGITAL MARKETING */}
                {/* ========================================================= */}
                <div id="viewWebEngineering" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === 'web' ? '' : 'hidden'}`}>
                  
                  {/* WEB TOP BAR */}
                  <div className="bg-slate-900 text-white px-1.5 sm:px-3 py-1 sm:py-1.5 flex items-center justify-between text-[7.5px] sm:text-[10px] shrink-0 border-b border-slate-800">
                    <div className="flex items-center gap-1.5 sm:gap-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px] shadow-sm">
                          DEV
                        </div>
                        <div className="hidden sm:block">
                          <div className="font-bold text-white text-[9px] sm:text-[11px] leading-tight">NadiCo Web Labs</div>
                          <div className="text-[7px] text-teal-400 font-mono tracking-wider">FULL-STACK & GROWTH</div>
                        </div>
                      </div>

                      <div className="hidden md:flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-full text-[8.5px] text-teal-200 border border-teal-400/30">
                        <Zap className="w-2.5 h-2.5 text-brand-lime" />
                        <span>Production Cluster • Global CDN Active • 99+ Core Web Vitals</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2 text-[7.5px] sm:text-[9.5px]">
                      <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        CI/CD DEPLOYED
                      </span>

                      <div className="flex items-center gap-1.5 pl-1 sm:pl-2 border-l border-slate-700">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold text-[7px] sm:text-[9px]">
                          TL
                        </div>
                        <div className="hidden sm:block text-left">
                          <div className="font-bold text-white text-[8.5px] leading-tight">Lead Architect</div>
                          <div className="text-[6.5px] text-teal-400 font-mono">NadiCo Cloud</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE BODY: WEB ARCHITECTURE SIDEBAR + WORKSPACE */}
                  <div className="flex-1 flex flex-row overflow-hidden">
                    
                    {/* Left Sidebar */}
                    <div className="w-7 sm:w-40 md:w-44 bg-slate-900 text-white p-0.5 sm:p-1 flex flex-col justify-between shrink-0 overflow-y-auto custom-erp-scrollbar text-[8px] sm:text-[9.5px] border-r border-slate-800">
                      <div className="space-y-0.5">
                        
                        {/* 1. Overview */}
                        <button onClick={() => setWebSubTab('speed')} id="sideBtn-web-speed" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${webSubTab === 'speed' ? 'bg-brand-teal text-white font-bold shadow-xs' : 'hover:bg-slate-800 text-white font-medium'}`}>
                          <Gauge className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Speed & Performance</span>
                        </button>

                        {/* 2. UI/UX Engineering */}
                        <button onClick={() => setWebSubTab('architecture')} id="sideBtn-web-architecture" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${webSubTab === 'architecture' ? 'bg-brand-teal text-white font-bold shadow-xs' : 'hover:bg-slate-800 text-white font-medium'}`}>
                          <Layers className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">Stack Architecture</span>
                        </button>

                        {/* 3. SEO & Analytics */}
                        <button onClick={() => setWebSubTab('seo')} id="sideBtn-web-seo" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${webSubTab === 'seo' ? 'bg-brand-teal text-white font-bold shadow-xs' : 'hover:bg-slate-800 text-white font-medium'}`}>
                          <TrendingUp className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">SEO & Conversions</span>
                        </button>

                        {/* 4. Cloud API */}
                        <button onClick={() => setWebSubTab('security')} id="sideBtn-web-security" className={`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all ${webSubTab === 'security' ? 'bg-brand-teal text-white font-bold shadow-xs' : 'hover:bg-slate-800 text-white font-medium'}`}>
                          <ShieldCheck className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 text-white" />
                          <span className="hidden sm:inline text-white">SSL & Cloud Defense</span>
                        </button>
                      </div>

                      {/* Sidebar Bottom Stats */}
                      <div className="hidden sm:block p-1.5 rounded-lg bg-slate-800/80 border border-slate-700/60 mt-1">
                        <div className="flex items-center justify-between text-[7px] text-teal-300 pb-0.5">
                          <span>Edge Server SLA</span>
                          <span className="font-bold text-white">99.98%</span>
                        </div>
                        <div className="w-full bg-slate-700 h-1 rounded-full overflow-hidden">
                          <div className="bg-brand-lime h-1 rounded-full" style={{"width":"99.9%"}}></div>
                        </div>
                      </div>
                    </div>

                    {/* Right Workspace Content Area */}
                    <div className="flex-1 bg-slate-50 p-1 sm:p-2 overflow-y-auto custom-erp-scrollbar flex flex-col justify-between">
                      
                      {/* Workspace Header */}
                      <div className="flex items-center justify-between pb-1 sm:pb-1.5 border-b border-slate-200 shrink-0">
                        <div className="flex items-center gap-1 text-[7.5px] sm:text-[9.5px]">
                          <span className="font-bold text-slate-800">NadiCo Web Engine</span>
                          <span className="text-slate-400">/</span>
                          <span id="webBreadcrumbTitle" className="text-brand-teal font-semibold">{webBreadcrumbs[webSubTab]}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[7px] sm:text-[8px]">
                          <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">Lighthouse 100/100</span>
                          <span className="px-1.5 py-0.5 rounded bg-sky-100 text-sky-800 font-bold">Global Edge CDN</span>
                        </div>
                      </div>

                      {/* SubView 1: Speed & Performance Dashboard */}
                      <div id="subView-web-speed" className={`space-y-1 sm:space-y-2 flex-1 pt-1 ${webSubTab === 'speed' ? '' : 'hidden'}`}>
                        {/* Top KPI Cards */}
                        <div className="grid grid-cols-4 gap-1 sm:gap-2">
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                            <div className="text-[6px] sm:text-[7.5px] text-slate-500 font-medium">PageSpeed Mobile</div>
                            <div className="font-bold text-emerald-600 text-[9px] sm:text-xs">99 / 100</div>
                            <div className="text-[5.5px] sm:text-[7px] text-emerald-700">✓ Fast LCP (0.6s)</div>
                          </div>
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                            <div className="text-[6px] sm:text-[7.5px] text-slate-500 font-medium">Organic Traffic</div>
                            <div className="font-bold text-brand-teal text-[9px] sm:text-xs">+385%</div>
                            <div className="text-[5.5px] sm:text-[7px] text-teal-700">Top 3 Google SERP</div>
                          </div>
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                            <div className="text-[6px] sm:text-[7.5px] text-slate-500 font-medium">Conversion Rate</div>
                            <div className="font-bold text-sky-700 text-[9px] sm:text-xs">4.82%</div>
                            <div className="text-[5.5px] sm:text-[7px] text-sky-700">3.4x Industry Avg</div>
                          </div>
                          <div className="p-1 sm:p-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                            <div className="text-[6px] sm:text-[7.5px] text-slate-500 font-medium">API Response Time</div>
                            <div className="font-bold text-purple-700 text-[9px] sm:text-xs">48 ms</div>
                            <div className="text-[5.5px] sm:text-[7px] text-purple-700">Sub-100ms Worldwide</div>
                          </div>
                        </div>

                        {/* 2-Column Split: Tech Pipeline & Live Conversion Funnel */}
                        <div className="grid grid-cols-12 gap-1 sm:gap-2 flex-1">
                          
                          {/* Web Stack Architecture (60%) */}
                          <div className="col-span-7 p-1 sm:p-2 rounded-lg bg-white border border-slate-200 shadow-2xs space-y-1 sm:space-y-1.5">
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Next-Gen Web Architecture</span>
                              <span className="text-[6px] sm:text-[7.5px] text-emerald-600 font-semibold">Continuous Zero-Downtime</span>
                            </div>

                            <div className="grid grid-cols-2 gap-1 text-[6px] sm:text-[8px]">
                              <div className="p-1 rounded bg-slate-50 border border-slate-200">
                                <div className="font-bold text-slate-900 flex items-center gap-1">
                                  <CheckCircle className="w-2.5 h-2.5 text-brand-teal" /> Next.js 15 & React
                                </div>
                                <div className="text-slate-500 text-[5.5px] sm:text-[7px]">SSR, ISR & Edge Streaming</div>
                              </div>
                              <div className="p-1 rounded bg-slate-50 border border-slate-200">
                                <div className="font-bold text-slate-900 flex items-center gap-1">
                                  <CheckCircle className="w-2.5 h-2.5 text-brand-teal" /> Tailwind CSS 4.0
                                </div>
                                <div className="text-slate-500 text-[5.5px] sm:text-[7px]">Ultra-lean CSS & Zero bloat</div>
                              </div>
                              <div className="p-1 rounded bg-slate-50 border border-slate-200">
                                <div className="font-bold text-slate-900 flex items-center gap-1">
                                  <CheckCircle className="w-2.5 h-2.5 text-brand-teal" /> PostgreSQL + Redis
                                </div>
                                <div className="text-slate-500 text-[5.5px] sm:text-[7px]">ACID High-Concurreny DB</div>
                              </div>
                              <div className="p-1 rounded bg-slate-50 border border-slate-200">
                                <div className="font-bold text-slate-900 flex items-center gap-1">
                                  <CheckCircle className="w-2.5 h-2.5 text-brand-teal" /> WhatsApp & Meta API
                                </div>
                                <div className="text-slate-500 text-[5.5px] sm:text-[7px]">Instant Lead Ingestion</div>
                              </div>
                            </div>

                            {/* Live Code Preview Snippet */}
                            <div className="p-1 sm:p-1.5 rounded bg-slate-950 font-mono text-[5.5px] sm:text-[7.5px] text-slate-300">
                              <span className="text-teal-400">const</span> <span className="text-amber-300">enterpriseDeployment</span> = <span className="text-teal-400">await</span> nadico.<span className="text-sky-300">deploy</span>(&#123; <span className="text-slate-400">speed:</span> <span className="text-emerald-400">'99+'</span>, <span className="text-slate-400">seo:</span> <span className="text-emerald-400">'Rank-1'</span>, <span className="text-slate-400">security:</span> <span className="text-emerald-400">'Tier-4'</span> &#125;);
                            </div>
                          </div>

                          {/* Digital Marketing & SEO Growth (40%) */}
                          <div className="col-span-5 p-1 sm:p-2 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between">
                            <div>
                              <div className="font-bold text-slate-900 text-[7px] sm:text-[9.5px]">Performance SEO & Ads</div>
                              <div className="text-[5.5px] sm:text-[7.5px] text-slate-400 pb-1">Omnichannel Lead Funnel</div>

                              <div className="space-y-1 text-[5.5px] sm:text-[7.5px]">
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-brand-teal space-y-0.2">
                                  <div className="font-bold text-slate-900">Google Ads (PPC) ROAS: 6.4x</div>
                                  <div className="text-slate-500">High-intent commercial keywords.</div>
                                </div>
                                <div className="p-1 rounded bg-slate-50 border-l-2 border-emerald-600 space-y-0.2">
                                  <div className="font-bold text-slate-900">Programmatic Schema Markup</div>
                                  <div className="text-slate-500">Rich snippets, FAQ, breadcrumbs.</div>
                                </div>
                              </div>
                            </div>

                            <div className="pt-1 border-t border-slate-100 flex items-center justify-between text-[6px] sm:text-[7.5px]">
                              <span className="font-semibold text-slate-700">SSL Grade: A+ (Strict HSTS)</span>
                              <span className="text-emerald-700 font-bold">100% PROTECTED</span>
                            </div>
                          </div>

                        </div>

                      </div>

                      {/* SubView 2: Stack Architecture (Hidden by default) */}
                      <div id="subView-web-architecture" className={`hidden space-y-1.5 flex-1 pt-1 text-[7px] sm:text-[9px] ${webSubTab === 'architecture' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900">Custom Cloud Architecture & Scalability</div>
                        <div className="p-2 rounded bg-white border border-slate-200 space-y-1">
                          <div className="font-semibold text-slate-800">Microservices & Docker Containers</div>
                          <p className="text-slate-600">Containerized auto-scaling web apps on AWS and DigitalOcean Kubernetes clusters.</p>
                        </div>
                      </div>

                      {/* SubView 3: SEO & Conversions (Hidden by default) */}
                      <div id="subView-web-seo" className={`hidden space-y-1.5 flex-1 pt-1 text-[7px] sm:text-[9px] ${webSubTab === 'seo' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900">Search Engine Optimization & Audit Score</div>
                        <div className="p-2 rounded bg-white border border-slate-200 space-y-1">
                          <div className="font-semibold text-emerald-700">Technical SEO Audit: 100/100</div>
                          <p className="text-slate-600">Semantic HTML5, automated XML sitemaps, OpenGraph tags, and mobile-first responsiveness.</p>
                        </div>
                      </div>

                      {/* SubView 4: SSL & Security (Hidden by default) */}
                      <div id="subView-web-security" className={`hidden space-y-1.5 flex-1 pt-1 text-[7px] sm:text-[9px] ${webSubTab === 'security' ? '' : 'hidden'}`}>
                        <div className="font-bold text-slate-900">Cloudflare Enterprise & WAF DDoS Protection</div>
                        <div className="p-2 rounded bg-white border border-slate-200 space-y-1">
                          <div className="font-semibold text-brand-teal">Enterprise Security Standard</div>
                          <p className="text-slate-600">Strict CSP headers, TLS 1.3 encryption, rate-limiting, and SQL injection sanitization.</p>
                        </div>
                      </div>

                    </div>

                  </div>

                  {/* Bottom Bar */}
                  <div className="bg-slate-900 text-white px-2 sm:px-3 py-0.5 flex items-center justify-between text-[6.5px] sm:text-[8px] shrink-0 font-mono border-t border-slate-800">
                    <span className="text-teal-300">NadiCo Web Platform • Continuous Integration & Deployment</span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span> LIGHTHOUSE 99+ VERIFIED</span>
                  </div>

                </div>

              </div>

            </div>

            {/* Laptop Base Lip */}
            <div className="h-2 w-32 sm:w-44 mx-auto bg-slate-300 rounded-b-xl border-t border-slate-400"></div>

          </div>

          {/* 2. MOBILE APP MOCKUP (COMPACT, EDGE SCREEN WITH INTERNAL SCREEN TABS) */}
          <div className="lg:col-span-4 xl:col-span-3 relative flex justify-center">
            
            {/* Compact Smartphone Shell (Curved Edge-Screen) */}
            <div className="relative w-48 sm:w-56 rounded-[34px] p-1.5 bg-gradient-to-b from-slate-800 to-slate-950 shadow-phone border border-slate-700 transform lg:-translate-x-3 animate-float-phone">
              
              {/* Dynamic Island Pill */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
              </div>

              {/* Edge-to-Edge Screen Content */}
              <div id="mobilePhoneScreen" className="relative bg-white rounded-[26px] overflow-hidden p-2.5 pt-7 text-slate-800 min-h-[380px] sm:min-h-[400px] border border-slate-200 flex flex-col justify-between edge-screen-frame">
                
                {/* MOBILE VIEW 1: SCHOOL (INTERNAL TABS) */}
                <div id="mobileViewSchool" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === 'school' ? '' : 'hidden'}`}>
                  
                  <div className="space-y-1.5">
                    {/* App Bar */}
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded bg-brand-teal text-white flex items-center justify-center font-bold text-[8px]">
                          RS
                        </div>
                        <span className="text-[10px] font-bold text-slate-900">Rehan App</span>
                      </div>
                      <span className="text-[8px] px-1 py-0.2 rounded-full bg-brand-limeSoft text-brand-limeDark font-bold">Teacher</span>
                    </div>

                    {/* TAB 1: ROLLCALL (DEFAULT) */}
                    <div id="mobileSubTab-school-rollcall" className={`space-y-1.5 ${mobSchoolTab === 'rollcall' ? '' : 'hidden'}`}>
                      <div className="p-1.5 rounded-lg bg-brand-tealSoft border border-brand-tealBorder space-y-0.5">
                        <div className="text-[9px] font-bold text-slate-900">Class 10-A • Mathematics</div>
                        <div className="text-[8px] text-slate-500">Tap status button to toggle:</div>
                      </div>

                      <div className="space-y-1">
                        {/* Student 1 */}
                        <div className="flex items-center justify-between p-1 rounded bg-slate-50 border border-slate-200 text-xs">
                          <div>
                            <div className="font-bold text-slate-900 text-[9px]">Ahmed Raza</div>
                            <div className="text-[7px] text-slate-500">Roll #01</div>
                          </div>
                          <button onClick={() => toggleAttendance(0)} className="px-1.5 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-[8px] transition-colors">
                            PRESENT
                          </button>
                        </div>

                        {/* Student 2 */}
                        <div className="flex items-center justify-between p-1 rounded bg-slate-50 border border-slate-200 text-xs">
                          <div>
                            <div className="font-bold text-slate-900 text-[9px]">Fatima Noor</div>
                            <div className="text-[7px] text-slate-500">Roll #02</div>
                          </div>
                          <button onClick={() => toggleAttendance(1)} className="px-1.5 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-[8px] transition-colors">
                            PRESENT
                          </button>
                        </div>

                        {/* Student 3 */}
                        <div className="flex items-center justify-between p-1 rounded bg-slate-50 border border-slate-200 text-xs">
                          <div>
                            <div className="font-bold text-slate-900 text-[9px]">Hamza Ali</div>
                            <div className="text-[7px] text-slate-500">Roll #03</div>
                          </div>
                          <button onClick={() => toggleAttendance(2)} className="px-1.5 py-0.5 rounded bg-rose-100 hover:bg-rose-200 text-rose-800 font-bold text-[8px] transition-colors">
                            LEAVE
                          </button>
                        </div>
                      </div>

                      <div className="p-1 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[8px]">
                        <span className="text-emerald-800">WhatsApp Alert</span>
                        <span className="font-bold text-emerald-700">✓ SENT</span>
                      </div>
                    </div>

                    {/* TAB 2: GRADES (SWITCHES INSIDE MOBILE) */}
                    <div id="mobileSubTab-school-grades" className={`hidden space-y-1 text-[8px] ${mobSchoolTab === 'grades' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Student Exam Marksheet</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">M. Rehan (10-A) - Grade A+</div>
                        <div>Math: 96 | Science: 88 | CS: 92</div>
                      </div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">Ayesha Siddiqua (10-A) - Grade A+</div>
                        <div>Math: 98 | Science: 94 | CS: 95</div>
                      </div>
                    </div>

                    {/* TAB 3: FEES (SWITCHES INSIDE MOBILE) */}
                    <div id="mobileSubTab-school-fees" className={`hidden space-y-1 text-[8px] ${mobSchoolTab === 'fees' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Mobile Fee Challan</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">Challan #CHL-4921: Rs. 8,500</div>
                        <div className="text-emerald-700 font-bold">PAID • Meezan Bank Direct</div>
                      </div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">Challan #CHL-4922: Rs. 7,200</div>
                        <div className="text-emerald-700 font-bold">PAID • HBL Raast Transfer</div>
                      </div>
                    </div>

                    {/* TAB 4: HOME (SWITCHES INSIDE MOBILE) */}
                    <div id="mobileSubTab-school-home" className={`hidden space-y-1 text-[8px] ${mobSchoolTab === 'home' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Teacher Portal Home</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div>Faculty: Sir Rehan Tariq</div>
                        <div>Assigned Class: 10-A (Mathematics)</div>
                        <div>Today Attendance: 98.4% Marked</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav (Switches INSIDE Phone Screen) */}
                  <div className="pt-1 border-t border-slate-100 grid grid-cols-4 gap-0.5 text-center text-[7px] text-slate-400">
                    <button onClick={() => setMobSchoolTab('home')} id="mobBtn-school-home" className={`flex flex-col items-center transition-colors ${mobSchoolTab === 'home' ? 'text-brand-teal font-bold' : 'text-slate-400 hover:text-brand-teal'}`}>
                      <Home className="w-3 h-3" />
                      <span>Home</span>
                    </button>
                    <button onClick={() => setMobSchoolTab('rollcall')} id="mobBtn-school-rollcall" className={`flex flex-col items-center transition-colors ${mobSchoolTab === 'rollcall' ? 'text-brand-teal font-bold' : 'text-slate-400 hover:text-brand-teal'}`}>
                      <CheckCircle className="w-3 h-3" />
                      <span>Rollcall</span>
                    </button>
                    <button onClick={() => setMobSchoolTab('grades')} id="mobBtn-school-grades" className={`flex flex-col items-center transition-colors ${mobSchoolTab === 'grades' ? 'text-brand-teal font-bold' : 'text-slate-400 hover:text-brand-teal'}`}>
                      <FileText className="w-3 h-3" />
                      <span>Grades</span>
                    </button>
                    <button onClick={() => setMobSchoolTab('fees')} id="mobBtn-school-fees" className={`flex flex-col items-center transition-colors ${mobSchoolTab === 'fees' ? 'text-brand-teal font-bold' : 'text-slate-400 hover:text-brand-teal'}`}>
                      <CreditCard className="w-3 h-3" />
                      <span>Fees</span>
                    </button>
                  </div>

                </div>


                {/* MOBILE VIEW 2: HOSPITAL HMS (INTERNAL TABS) */}
                <div id="mobileViewHospital" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === 'hospital' ? '' : 'hidden'}`}>
                  
                  <div className="space-y-1.5">
                    {/* App Bar */}
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded bg-sky-700 text-white flex items-center justify-center font-bold text-[8px]">
                          MD
                        </div>
                        <span className="text-[10px] font-bold text-slate-900">HMS Doctor</span>
                      </div>
                      <span className="text-[8px] px-1 py-0.2 rounded-full bg-sky-100 text-sky-800 font-bold">OPD #04</span>
                    </div>

                    {/* TAB 1: QUEUE (DEFAULT) */}
                    <div id="mobileSubTab-hospital-queue" className={`space-y-1.5 ${mobHospitalTab === 'queue' ? '' : 'hidden'}`}>
                      <div className="p-1.5 rounded-lg bg-sky-50 border border-sky-200 space-y-0.5">
                        <div className="text-[9px] font-bold text-slate-900">Cardiology OPD Waiting List</div>
                        <div className="text-[8px] text-slate-500">Tap call to summon next patient:</div>
                      </div>

                      <div className="space-y-1">
                        {/* Patient 1 */}
                        <div className="flex items-center justify-between p-1 rounded bg-slate-50 border border-slate-200 text-xs">
                          <div>
                            <div className="font-bold text-slate-900 text-[9px]">Tariq Mahmood</div>
                            <div className="text-[7px] text-slate-500">Token #12 • In Chamber</div>
                          </div>
                          <button onClick={togglePatientStatus} className="px-1.5 py-0.5 rounded bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-bold text-[8px] transition-colors">
                            CALLED
                          </button>
                        </div>

                        {/* Patient 2 */}
                        <div className="flex items-center justify-between p-1 rounded bg-slate-50 border border-slate-200 text-xs">
                          <div>
                            <div className="font-bold text-slate-900 text-[9px]">Zainab Bibi</div>
                            <div className="text-[7px] text-slate-500">Token #13 • Waiting</div>
                          </div>
                          <button onclick="toggleHospitalPatientStatus(this)" className="px-1.5 py-0.5 rounded bg-sky-100 hover:bg-sky-200 text-sky-800 font-bold text-[8px] transition-colors">
                            CALL NEXT
                          </button>
                        </div>
                      </div>

                      <div className="p-1 rounded bg-sky-50 border border-sky-200 flex items-center justify-between text-[8px]">
                        <span className="text-sky-800">Lounge TV Screen</span>
                        <span className="font-bold text-sky-700">✓ SYNCED</span>
                      </div>
                    </div>

                    {/* TAB 2: EMR */}
                    <div id="mobileSubTab-hospital-emr" className={`hidden space-y-1 text-[8px] ${mobHospitalTab === 'emr' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Electronic Medical Record (EMR)</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">Patient: Tariq Mahmood (52y / M)</div>
                        <div>BP: 125/82 | Pulse: 74 bpm | SpO2: 99%</div>
                        <div className="text-emerald-700 font-bold">History: Mild Hypertension</div>
                      </div>
                    </div>

                    {/* TAB 3: LABS */}
                    <div id="mobileSubTab-hospital-labs" className={`hidden space-y-1 text-[8px] ${mobHospitalTab === 'labs' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Diagnostic Lab Results</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">CBC & Lipid Profile #LAB-9041</div>
                        <div className="text-emerald-700 font-bold">Status: Ready • Normal Range</div>
                      </div>
                    </div>

                    {/* TAB 4: PHARMACY */}
                    <div id="mobileSubTab-hospital-pharmacy" className={`hidden space-y-1 text-[8px] ${mobHospitalTab === 'pharmacy' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">e-Prescription & Medicine</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">Rx: Tab Atorvastatin 20mg</div>
                        <div>Dispensed by Pharmacy Counter #1</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav (Switches INSIDE Phone Screen) */}
                  <div className="pt-1 border-t border-slate-100 grid grid-cols-4 gap-0.5 text-center text-[7px] text-slate-400">
                    <button onClick={() => setMobHospitalTab('queue')} id="mobBtn-hospital-queue" className={`flex flex-col items-center transition-colors ${mobHospitalTab === 'queue' ? 'text-sky-700 font-bold' : 'text-slate-400 hover:text-sky-700'}`}>
                      <ListOrdered className="w-3 h-3" />
                      <span>Queue</span>
                    </button>
                    <button onClick={() => setMobHospitalTab('emr')} id="mobBtn-hospital-emr" className={`flex flex-col items-center transition-colors ${mobHospitalTab === 'emr' ? 'text-sky-700 font-bold' : 'text-slate-400 hover:text-sky-700'}`}>
                      <ClipboardPlus className="w-3 h-3" />
                      <span>EMR</span>
                    </button>
                    <button onClick={() => setMobHospitalTab('labs')} id="mobBtn-hospital-labs" className={`flex flex-col items-center transition-colors ${mobHospitalTab === 'labs' ? 'text-sky-700 font-bold' : 'text-slate-400 hover:text-sky-700'}`}>
                      <FlaskConical className="w-3 h-3" />
                      <span>Labs</span>
                    </button>
                    <button onClick={() => setMobHospitalTab('pharmacy')} id="mobBtn-hospital-pharmacy" className={`flex flex-col items-center transition-colors ${mobHospitalTab === 'pharmacy' ? 'text-sky-700 font-bold' : 'text-slate-400 hover:text-sky-700'}`}>
                      <Pill className="w-3 h-3" />
                      <span>Rx</span>
                    </button>
                  </div>

                </div>


                {/* MOBILE VIEW 3: INVENTORY POS (INTERNAL TABS) */}
                <div id="mobileViewInventory" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === 'inventory' ? '' : 'hidden'}`}>
                  
                  <div className="space-y-1.5">
                    {/* App Bar */}
                    <div className="flex items-center justify-between pb-1 border-b border-slate-100">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded bg-emerald-700 text-white flex items-center justify-center font-bold text-[8px]">
                          POS
                        </div>
                        <span className="text-[10px] font-bold text-slate-900">NadiCo Store</span>
                      </div>
                      <span className="text-[8px] px-1 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold">Counter 1</span>
                    </div>

                    {/* TAB 1: SCAN (DEFAULT) */}
                    <div id="mobileSubTab-inventory-scan" className={`space-y-1.5 ${mobInventoryTab === 'scan' ? '' : 'hidden'}`}>
                      <div className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 space-y-0.5">
                        <div className="text-[9px] font-bold text-slate-900">Mobile Barcode Terminal</div>
                        <div className="text-[8px] text-slate-500">Tap scan button to simulate barcode read:</div>
                      </div>

                      <div className="p-2 rounded-lg bg-slate-900 text-white text-center space-y-1">
                        <div className="text-[8px] text-emerald-400 font-mono">CAMERA SCANNER READY</div>
                        <div className="w-20 h-10 mx-auto border border-emerald-500/50 rounded flex items-center justify-center">
                          <ScanLine className="w-6 h-6 text-emerald-400 animate-pulse" />
                        </div>
                        <button onClick={handleScanClick} className="w-full py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[8px] transition-colors">
                          SCAN SKU #890123
                        </button>
                      </div>

                      <div className="p-1 rounded bg-slate-50 border border-slate-200 flex items-center justify-between text-[8px]">
                        <span>Last Scanned Item:</span>
                        <span className="font-bold text-emerald-700">Rs. 450 (Milk Pack 1L)</span>
                      </div>
                    </div>

                    {/* TAB 2: CART */}
                    <div id="mobileSubTab-inventory-cart" className={`hidden space-y-1 text-[8px] ${mobInventoryTab === 'cart' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Active Basket #9021</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="flex justify-between">
                          <span>3x Items</span>
                          <span className="font-bold">Total: Rs. 1,850</span>
                        </div>
                        <div className="text-emerald-700 font-bold">Payment Method: Raast QR Active</div>
                      </div>
                    </div>

                    {/* TAB 3: STOCK */}
                    <div id="mobileSubTab-inventory-stock" className={`hidden space-y-1 text-[8px] ${mobInventoryTab === 'stock' ? '' : 'hidden'}`}>
                      <div className="font-bold text-slate-900 text-[9px]">Warehouse SKU Stock Audit</div>
                      <div className="p-1.5 rounded bg-slate-50 border border-slate-200 space-y-0.5">
                        <div className="font-bold text-slate-900">Cooking Oil 5L (SKU-992)</div>
                        <div>Available: 48 units | Reorder: 15 units</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Nav (Switches INSIDE Phone Screen) */}
                  <div className="pt-1 border-t border-slate-100 grid grid-cols-3 gap-0.5 text-center text-[7px] text-slate-400">
                    <button onClick={() => setMobInventoryTab('scan')} id="mobBtn-inventory-scan" className={`flex flex-col items-center transition-colors ${mobInventoryTab === 'scan' ? 'text-emerald-700 font-bold' : 'text-slate-400 hover:text-emerald-700'}`}>
                      <ScanBarcode className="w-3 h-3" />
                      <span>Scan</span>
                    </button>
                    <button onClick={() => setMobInventoryTab('cart')} id="mobBtn-inventory-cart" className={`flex flex-col items-center transition-colors ${mobInventoryTab === 'cart' ? 'text-emerald-700 font-bold' : 'text-slate-400 hover:text-emerald-700'}`}>
                      <ShoppingBag className="w-3 h-3" />
                      <span>Cart</span>
                    </button>
                    <button onClick={() => setMobInventoryTab('stock')} id="mobBtn-inventory-stock" className={`flex flex-col items-center transition-colors ${mobInventoryTab === 'stock' ? 'text-emerald-700 font-bold' : 'text-slate-400 hover:text-emerald-700'}`}>
                      <Boxes className="w-3 h-3" />
                      <span>Stock</span>
                    </button>
                  </div>

                </div>

                {/* MOBILE VIEW 4: WEB & DIGITAL GROWTH */}
                <div id="mobileViewWeb" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === 'web' ? '' : 'hidden'}`}>
                  <div>
                    {/* App Bar Header */}
                    <div className="flex items-center justify-between pb-1.5 border-b border-slate-200">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-md bg-brand-teal text-white flex items-center justify-center font-bold text-[9px]">
                          NW
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 text-[10px] leading-tight">NadiCo Web Studio</div>
                          <div className="text-[7.5px] text-teal-600 font-medium">Digital Engineering</div>
                        </div>
                      </div>
                      <span className="px-1.5 py-0.2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[7px]">⚡ 99+ SPEED</span>
                    </div>

                    {/* TAB CONTENT: SPEED & METRICS */}
                    <div className="space-y-1.5 pt-1.5">
                      <div className="grid grid-cols-2 gap-1 text-[8px]">
                        <div className="p-1.5 rounded-lg bg-teal-50 border border-teal-200">
                          <div className="text-[7px] text-teal-700">Mobile Speed</div>
                          <div className="font-bold text-teal-900 text-[10px]">0.4s FCP</div>
                          <div className="text-[6.5px] text-emerald-700 font-semibold">✓ Core Web Vitals Pass</div>
                        </div>
                        <div className="p-1.5 rounded-lg bg-sky-50 border border-sky-200">
                          <div className="text-[7px] text-sky-700">Google Ads ROAS</div>
                          <div className="font-bold text-sky-900 text-[10px]">6.4x Return</div>
                          <div className="text-[6.5px] text-sky-700 font-semibold">✓ Verified Conversions</div>
                        </div>
                      </div>

                      <div className="p-1.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1 text-[8px]">
                        <div className="font-bold text-slate-900 text-[8.5px]">Active Campaign Ingestion</div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Organic Inquiries (Today):</span>
                          <span className="font-bold text-emerald-700">+42 Leads</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600">Avg Lead Cost:</span>
                          <span className="font-bold text-slate-800">Rs. 185</span>
                        </div>
                      </div>

                      <div className="p-1 rounded bg-emerald-50 border border-emerald-200 flex items-center justify-between text-[8px]">
                        <span className="text-emerald-800 font-medium">WhatsApp Sync API</span>
                        <span className="font-bold text-emerald-700">ACTIVE 100%</span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Bottom Navigation Bar */}
                  <div className="pt-1.5 border-t border-slate-200 grid grid-cols-3 gap-1 text-center text-[7px] text-slate-500">
                    <button className="text-brand-teal font-bold flex flex-col items-center">
                      <Gauge className="w-3 h-3" />
                      <span>Speed</span>
                    </button>
                    <button className="hover:text-brand-teal flex flex-col items-center">
                      <TrendingUp className="w-3 h-3" />
                      <span>SEO</span>
                    </button>
                    <button className="hover:text-brand-teal flex flex-col items-center">
                      <Code className="w-3 h-3" />
                      <span>Stack</span>
                    </button>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  </section>
    </>
  );
}
