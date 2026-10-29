import { ArrowRight, BadgeCheck, Banknote, BarChart3, Bell, BookOpen, Briefcase, Calculator, Check, CheckCircle, CheckSquare, Cloud, ExternalLink, FileSpreadsheet, FileText, Fingerprint, GraduationCap, KeyRound, Layers, LayoutDashboard, Lock, Mail, MessageCircle, Receipt, RotateCcw, Server, Shield, ShieldCheck, Smartphone, UserCheck, Users } from 'lucide-react';
import React, { useEffect, useState, useRef } from 'react';
import ScrollTypewriterTitle from '../components/ScrollTypewriterTitle.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import { initScrollReveal } from '../utils/useScrollReveal.js';

const comparisonRows = [
  {
    feature: "Security & 2FA Protection",
    legacy: "❌ Simple plain-text password; high risk of unauthorized tampering",
    nadico: "✓ Two-Factor Authentication (2FA), 256-bit SSL, and full audit logs"
  },
  {
    feature: "3-Part Bank Fee Challans",
    legacy: "❌ Generic receipts; doesn't match Meezan / HBL / 1Link formats",
    nadico: "✓ Authentic 3-part bank slips with barcodes & automatic fine rules"
  },
  {
    feature: "Parent Communication",
    legacy: "❌ Paper diaries often lost; costly manual phone calls to parents",
    nadico: "✓ Native Parent Mobile App, whiteboard photo diary, & WhatsApp SMS"
  },
  {
    feature: "Biometric Attendance",
    legacy: "❌ Standalone USB download required; no parent notifications",
    nadico: "✓ Real-time ZKTeco cloud sync with automated instant absent SMS"
  },
  {
    feature: "Campus Accounting & P&L",
    legacy: "❌ Separate registers; accountant takes days to tally monthly cash",
    nadico: "✓ Integrated double-entry general ledger with automatic real-time P&L"
  },
  {
    feature: "Disaster Recovery & Backups",
    legacy: "❌ Stored on a single computer; virus/ransomware destroys all records",
    nadico: "✓ Automated daily multi-region cloud snapshots with zero data loss"
  },
  {
    feature: "Accessibility",
    legacy: "❌ Locked to the school office PC; principal cannot monitor from home",
    nadico: "✓ 100% Cloud-accessible from laptop, tablet, or smartphone 24/7"
  }
];

function ComparisonTypewriterTable() {
  const tableRef = useRef(null);
  const typingActiveRef = useRef(false);

  const startTyping = () => {
    typingActiveRef.current = true;

    // Reset cells
    comparisonRows.forEach((_, i) => {
      const legEl = document.getElementById(`reactCellLegacy${i}`);
      const nadEl = document.getElementById(`reactCellNadico${i}`);
      const rowEl = document.getElementById(`reactCompRow${i}`);
      if (legEl) legEl.innerHTML = '<span class="text-slate-300 italic text-[11px]">...</span>';
      if (nadEl) nadEl.innerHTML = '<span class="text-slate-300 italic text-[11px]">...</span>';
      if (rowEl) rowEl.className = 'transition-colors opacity-70';
    });

    function typeRow(idx) {
      if (idx >= comparisonRows.length) {
        typingActiveRef.current = false;
        return;
      }

      const row = comparisonRows[idx];
      const legEl = document.getElementById(`reactCellLegacy${idx}`);
      const nadEl = document.getElementById(`reactCellNadico${idx}`);
      const rowEl = document.getElementById(`reactCompRow${idx}`);
      if (rowEl) rowEl.className = 'transition-colors bg-brand-tealSoft/30';

      let legChar = 0;
      if (legEl) legEl.innerHTML = '';

      const legTimer = setInterval(() => {
        legChar += 2;
        if (legChar >= row.legacy.length) {
          clearInterval(legTimer);
          if (legEl) legEl.innerHTML = row.legacy;

          // Start typing Nadico green line
          let nadChar = 0;
          if (nadEl) nadEl.innerHTML = '';
          const nadTimer = setInterval(() => {
            nadChar += 2;
            if (nadChar >= row.nadico.length) {
              clearInterval(nadTimer);
              if (nadEl) nadEl.innerHTML = row.nadico;
              if (rowEl) rowEl.className = 'transition-colors hover:bg-slate-50/60';
              setTimeout(() => typeRow(idx + 1), 80);
            } else {
              if (nadEl) nadEl.innerHTML = row.nadico.slice(0, nadChar) + '<span class="inline-block w-1.5 h-3.5 bg-emerald-600 ml-1 animate-pulse align-middle"></span>';
            }
          }, 18);
        } else {
          if (legEl) legEl.innerHTML = row.legacy.slice(0, legChar) + '<span class="inline-block w-1.5 h-3.5 bg-rose-500 ml-1 animate-pulse align-middle"></span>';
        }
      }, 18);
    }

    typeRow(0);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const el = tableRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !typingActiveRef.current) {
            startTyping();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={tableRef} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card reveal-on-scroll reveal-up">
      {/* Table Header with Replay Action */}
      <div className="bg-slate-50/80 px-6 py-3.5 border-b border-slate-200 flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Live Feature Comparison • Lightweight Typing Animation</span>
        </div>
        <button
          onClick={startTyping}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold text-brand-teal hover:bg-brand-tealSoft border border-brand-tealBorder transition-all flex items-center gap-1.5 shadow-xs"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Replay Typing Animation</span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-[11px]">
            <tr>
              <th className="p-5 w-1/4">Capability / Requirement</th>
              <th className="p-5 w-3/8 text-rose-700 bg-rose-50/50">Old Desktop / Excel Software</th>
              <th className="p-5 w-3/8 text-emerald-800 bg-emerald-50">NADICO School ERP (The Readly)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600">
            {comparisonRows.map((row, idx) => (
              <tr
                key={idx}
                id={`reactCompRow${idx}`}
                className="transition-colors"
              >
                <td className="p-5 font-bold text-slate-900">
                  {row.feature}
                </td>

                <td id={`reactCellLegacy${idx}`} className="p-5 text-rose-600 font-medium">
                  {row.legacy}
                </td>

                <td id={`reactCellNadico${idx}`} className="p-5 text-emerald-700 bg-emerald-50/30 font-bold">
                  {row.nadico}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SchoolErpPage() {
  useEffect(() => {

    // 2. Initialize Bi-Directional Scroll Reveal Observer
    const cleanupScroll = initScrollReveal();

    return () => {
      cleanupScroll();
    };
  }, []);

  return (
    <div className="font-sans antialiased selection:bg-brand-teal selection:text-white relative flex flex-col min-h-screen">
      {/* Fixed IT & Digital Tech Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-50 bg-tech-circuit-overlay"></div>

      <Header />
      <main className="flex-1">

  {/* Hero Section */}
  <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-brand-tealSoft/30 to-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-4xl mx-auto space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-tealSoft border border-brand-tealBorder text-brand-teal text-xs sm:text-sm font-bold shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Enterprise Institutional Cloud Architecture • 2FA Protected • Built for Pakistan</span>
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
        </div>

        {/* Main Headline in Poppins */}
        <ScrollTypewriterTitle
          as="h1"
          className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]"
          prefix="The Complete "
          highlight="School Management ERP"
          highlightClass="teal-gradient-text"
          suffix=" System"
        />

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
          Run your entire school from one place: generate 3-part bank fee challans, sync biometric gate attendance, automate school accounting, and print official report cards with zero stress.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a href="https://thereadlyerp.vercel.app/rehan" target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold text-white bg-brand-teal hover:bg-brand-tealDark shadow-button hover:shadow-card-hover transition-all flex items-center justify-center gap-2">
            <ExternalLink className="w-4 h-4" />
            <span>Launch Live Production Portal</span>
          </a>
          <a href="#modules" className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm font-bold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-brand-teal transition-all shadow-xs flex items-center justify-center gap-2">
            <Layers className="w-4 h-4 text-brand-teal" />
            <span>Explore All 14 Modules</span>
          </a>
        </div>

        {/* Micro Feature Badges */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-semibold text-slate-600">
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-emerald-600" /> 2FA Security
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-1.5">
            <Receipt className="w-3.5 h-3.5 text-brand-teal" /> 3-Part Challans
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-1.5">
            <Fingerprint className="w-3.5 h-3.5 text-indigo-600" /> Biometric Sync
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" /> CAIE & BISE Grading
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-1.5">
            <Calculator className="w-3.5 h-3.5 text-teal-600" /> Double-Entry Accounts
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-slate-200/90 shadow-xs flex items-center justify-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5 text-emerald-600" /> Parent & Staff Apps
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* ========================================================================= */}
  {/* HIGH-LEVEL SECURITY & 2FA SECTION (CRITICAL REQUIREMENT) */}
  {/* ========================================================================= */}
  <section id="security" className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-[#0a1120] to-slate-900 text-white relative overflow-hidden">
    {/* Subtle Tech Grid Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,101,132,0.15),transparent_60%)] pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-bold text-xs uppercase tracking-wider">
          <Lock className="w-3.5 h-3.5" /> High-Level Security Architecture
        </div>
        <ScrollTypewriterTitle
          as="h2"
          className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          prefix="Fortified Security & "
          highlight="Two-Factor Authentication (2FA)"
          highlightClass="text-emerald-400"
          cursorColor="bg-emerald-400"
        />
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Your school holds sensitive student records, fee collection details, and staff payroll. NADICO ERP protects your data with bank-standard encryption, Two-Factor Authentication (2FA), and complete audit logs so no unauthorized person can ever access or alter your files.
        </p>
      </div>

      {/* 6 Security Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Security Pillar 1: 2FA */}
        <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-emerald-500/50 transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <KeyRound className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Two-Factor Authentication (2FA)</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Protect administrative and accountant accounts with time-based one-time passwords (TOTP) compatible with Google Authenticator, Microsoft Authenticator, or direct SMS verification codes.
          </p>
          <ul className="text-[11px] text-emerald-300 space-y-1.5 pt-2 border-t border-slate-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Mandatory 2FA for Super Admin & Accounts</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Secure backup recovery codes</li>
          </ul>
        </div>

        {/* Security Pillar 2: 256-Bit SSL */}
        <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-teal/50 transition-all space-y-4 reveal-on-scroll reveal-up delay-100">
          <div className="w-14 h-14 rounded-2xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Bank-Grade 256-Bit SSL Encryption</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            All data in-transit and at-rest is encrypted with TLS 1.3 cryptographic protocols and AES-256 standard encryption, ensuring zero risk of packet sniffing or eavesdropping.
          </p>
          <ul className="text-[11px] text-sky-300 space-y-1.5 pt-2 border-t border-slate-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> HTTPS end-to-end security certificates</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Encrypted student family records</li>
          </ul>
        </div>

        {/* Security Pillar 3: RBAC Role Permissions */}
        <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-brand-lime/50 transition-all space-y-4 reveal-on-scroll reveal-right delay-200">
          <div className="w-14 h-14 rounded-2xl bg-lime-500/20 text-lime-400 flex items-center justify-center">
            <UserCheck className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Granular Role-Based Access (RBAC)</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Customizable permissions prevent staff from seeing unauthorized data. Teachers only see their assigned classes; accountants handle fee transactions; only principals see school financial totals.
          </p>
          <ul className="text-[11px] text-lime-300 space-y-1.5 pt-2 border-t border-slate-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Custom roles: Principal, Accountant, Teacher, Clerk</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Fine-grained read/write/edit/delete control</li>
          </ul>
        </div>

        {/* Security Pillar 4: Audit Trails */}
        <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-amber-500/50 transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Tamper-Proof Audit Trail</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Every critical action inside the ERP — such as fee waiver grants, marks modifications, challan cancellations, and profile edits — is logged with the user's name, timestamp, and IP address.
          </p>
          <ul className="text-[11px] text-amber-300 space-y-1.5 pt-2 border-t border-slate-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Complete historical edit logs</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Immediate alert on unauthorized actions</li>
          </ul>
        </div>

        {/* Security Pillar 5: Daily Cloud Backups */}
        <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-teal-500/50 transition-all space-y-4 reveal-on-scroll reveal-up delay-100">
          <div className="w-14 h-14 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center">
            <Cloud className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">Automated Daily Cloud Backups</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            Eliminate computer crash nightmares. All school databases are automatically snapshotted daily and replicated across physically separated tier-4 secure data centers.
          </p>
          <ul className="text-[11px] text-teal-300 space-y-1.5 pt-2 border-t border-slate-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> 1-Click point-in-time database restoration</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Manual on-demand database backup download</li>
          </ul>
        </div>

        {/* Security Pillar 6: High Availability SLA */}
        <div className="p-8 rounded-3xl bg-slate-800/60 border border-slate-700/80 hover:border-purple-500/50 transition-all space-y-4 reveal-on-scroll reveal-right delay-200">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
            <Server className="w-7 h-7" />
          </div>
          <h3 className="font-heading font-bold text-xl text-white">99.9% Cloud Availability SLA</h3>
          <p className="text-slate-300 text-xs leading-relaxed">
            High-speed cloud clusters engineered to withstand fee deadline traffic spikes without slowdowns or database lockups. Your campus portal is always accessible 24/7/365.
          </p>
          <ul className="text-[11px] text-purple-300 space-y-1.5 pt-2 border-t border-slate-700">
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Instant multi-server auto-scaling</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-3.5 h-3.5" /> Local Pakistani CDN caching for fast loading</li>
          </ul>
        </div>

      </div>

    </div>
  </section>

  {/* ========================================================================= */}
  {/* ALL 14 CORE MODULES (MATCHING THE READLY ERP DASHBOARD) */}
  {/* ========================================================================= */}
  <section id="modules" className="py-20 lg:py-28 bg-[#fafcfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Complete Functional Suite</span>
        <ScrollTypewriterTitle
          as="h2"
          className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight"
          prefix="Everything Your School Needs to "
          highlight="Run Seamlessly"
          highlightClass="teal-gradient-text"
        />
        <p className="text-slate-600 text-base leading-relaxed">
          Explore all 14 integrated modules available inside The Readly ERP / NADICO School ERP dashboard.
        </p>
      </div>

      {/* Modules 14 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Module 1: Dashboard */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">1. Executive Dashboard & KPIs</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Bird's-eye view of campus vitals: total enrolled students, present faculty, today's attendance rate, monthly fee recovery in PKR, and instant defaulter summary.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Real-time student & staff counters</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Instant cash, bank & pending balances</div>
          </div>
        </div>

        {/* Module 2: SIS */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-up delay-100">
          <div className="w-12 h-12 rounded-2xl bg-brand-tealSoft text-brand-teal flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">2. Student Information System (SIS)</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Complete digital lifecycle: General Register (GR) numbers, family/sibling linking, previous academic transcripts, medical emergency files, and B-form records.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Automatic sibling concession mapping</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Digital inquiry-to-admission pipeline</div>
          </div>
        </div>

        {/* Module 3: Parents Portal */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-right delay-200">
          <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
            <UserCheck className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">3. Parents Portal & Mobile Access</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Native mobile app and web portal allowing parents to inspect gate attendance, review daily homework, view fee challan dues, and download term result cards.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Single login for multiple enrolled siblings</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Paid bank receipt slip photo upload</div>
          </div>
        </div>

        {/* Module 4: Teachers & Faculty */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <GraduationCap className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">4. Teachers & Faculty Management</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Streamlined educator workflows: subject period allotments, weekly timetable schedules, substitute teacher assignments, and lesson plan submission tracking.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Fast mobile marks and grades entry</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Digital leave applications with approval flow</div>
          </div>
        </div>

        {/* Module 5: Staff HR & Payroll */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-up delay-100">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Briefcase className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">5. Staff HR & Biometric Payroll</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Syncs employee biometric attendance with salary engines. Calculates late arrival deductions, allowances, provident funds, and generates PDF salary slips with 1-click.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Automated late deduction calculation</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Printable PDF staff pay slips</div>
          </div>
        </div>

        {/* Module 6: Academics & Sessions */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-right delay-200">
          <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-cyan-700 flex items-center justify-center">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">6. Academics, Curriculum & Sessions</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Multi-year academic sessions (e.g. 2026-27), class section configurations, subject curriculum mapping, syllabus milestones, and class period schedule generator.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Automatic student rollover to next grade</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Conflict-free period timetable scheduler</div>
          </div>
        </div>

        {/* Module 7: Biometric Attendance */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
            <Fingerprint className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">7. 1-Tap Biometric Attendance</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Direct network sync with ZKTeco, Hikvision, and RFID turnstiles. Teachers can also mark 30-second mobile roll calls. Instant automated absent SMS sent to parents.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Instant WhatsApp / SMS absent alerts</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Gate turnstile & biometric machine sync</div>
          </div>
        </div>

        {/* Module 8: 3-Part Fee Challans */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-up delay-100">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
            <Receipt className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">8. 3-Part Fee Challans & Banking</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Full compliance with Pakistani banking standards: Bank Copy, School Copy, and Student Copy. Supports Meezan Bank, HBL, Allied Bank, 1Link 1Bill, Easypaisa & JazzCash.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Automated late fine rules & discount heads</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 1-Click WhatsApp fee reminders to defaulters</div>
          </div>
        </div>

        {/* Module 9: Accounting & Financials */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-right delay-200">
          <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center">
            <Banknote className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">9. Double-Entry School Accounting</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Eliminate QuickBooks dependencies. Purpose-built chart of accounts, general ledger, payment/receipt vouchers with bill attachments, and automatic real-time P&L statement.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Auto fee-challan posting to bank ledgers</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Daily cash flow & trial balance reports</div>
          </div>
        </div>

        {/* Module 10: Examinations & Report Cards */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">10. Exams & Digital Report Cards</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Dynamic grading scales supporting BISE Board (Matric / FSC), Cambridge CAIE (O/A Levels), or custom GPA. Generates beautiful printable result cards with school logo.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Automated class positions & subject ranks</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Direct result card publishing to Parent App</div>
          </div>
        </div>

        {/* Module 11: Homework & Tasks */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-up delay-100">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
            <CheckSquare className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">11. Daily Diary & Homework Broadcast</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Teachers publish subject-wise homework, test syllabus, and whiteboard snapshots directly to parent smartphones. Eliminates lost paper diaries completely.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Photo attachments of whiteboard assignments</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Student conduct & behavioral praise notes</div>
          </div>
        </div>

        {/* Module 12: Notice Board */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-right delay-200">
          <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">12. Notice Board & Circulars</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Campus-wide emergency alerts, weather holiday announcements, PTM schedule circulars, and sports event notices pushed directly to parents and staff simultaneously.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Target specific classes or whole campus</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Read receipt acknowledgments by parents</div>
          </div>
        </div>

        {/* Module 13: Executive Analytics */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-left">
          <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">13. Chain-Level & Multi-Campus Analytics</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Essential for school chains and campus networks. Toggle between different school branches, compare enrollment trends, track fee recovery rates, and oversee branch budgets.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Consolidated multi-branch P&L</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> 1-Click Excel and PDF data export</div>
          </div>
        </div>

        {/* Module 14: Smart Certificates & IDs */}
        <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all space-y-4 reveal-on-scroll reveal-right delay-150">
          <div className="w-12 h-12 rounded-2xl bg-lime-100 text-lime-700 flex items-center justify-center">
            <BadgeCheck className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-slate-900">14. Smart ID Cards & Certificates</h3>
          <p className="text-slate-600 text-xs leading-relaxed">
            Print PVC student and employee ID cards with QR barcodes in seconds. Generate leaving certificates, character certificates, and merit diplomas directly from student records.
          </p>
          <div className="text-[11px] text-slate-500 font-medium space-y-1">
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Pre-designed ID card templates with barcode</div>
            <div className="flex items-center gap-2"><Check className="w-3.5 h-3.5 text-emerald-600" /> Official school leaving certificates with verification</div>
          </div>
        </div>

      </div>

    </div>
  </section>

  {/* ========================================================================= */}
  {/* LIVE SYSTEM PREVIEW & MOCKUP BANNER */}
  {/* ========================================================================= */}
  <section className="py-16 bg-white border-y border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="bg-gradient-to-br from-brand-charcoal to-[#004c63] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 reveal-on-scroll reveal-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-lime/20 border border-brand-lime/30 text-brand-limeLight font-bold text-xs uppercase">
              <ExternalLink className="w-3.5 h-3.5" /> Live Interactive Instance
            </div>
            <ScrollTypewriterTitle
              as="h2"
              className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight"
              prefix="Test The Readly ERP in "
              highlight="Your Browser Right Now"
              highlightClass="text-brand-limeLight"
              cursorColor="bg-brand-lime"
            />
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Experience the actual live production dashboard deployed for operational campuses. View real-time attendance graphs, test the fee challan generator, and inspect student records hands-on.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="https://thereadlyerp.vercel.app/rehan" target="_blank" className="px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-brand-charcoal bg-brand-lime hover:bg-brand-limeLight transition-all shadow-button-lime flex items-center gap-2">
                <span>Launch Live Rehan School Instance</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20would%20like%20to%20request%20credentials%20for%20The%20Readly%20ERP%20demo." target="_blank" className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Request Custom Demo on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-5 border border-slate-700 text-xs space-y-3 font-mono reveal-on-scroll reveal-right delay-150">
            <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-slate-400 text-[10px]">
              <span>portal.thereadlyerp.vercel.app/rehan</span>
              <span className="text-emerald-400 font-bold flex items-center gap-1">● 100% OPERATIONAL</span>
            </div>
            <div className="space-y-2 text-slate-300 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-400">Security Architecture:</span>
                <span className="text-emerald-400 font-bold">2FA + TLS 1.3 256-bit</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Active Campus:</span>
                <span className="text-white font-bold">Rehan Model School</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Daily Attendance Rate:</span>
                <span className="text-emerald-400 font-bold">98.2% Synced</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Fee Recovery Engine:</span>
                <span className="text-brand-limeLight font-bold">3-Part Bank Challan OK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Biometric Sync:</span>
                <span className="text-emerald-400 font-bold">ZKTeco Cloud Active</span>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800 text-center">
              <span className="text-[10px] text-slate-400">Pre-configured with sample student rosters and exam marks</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* ========================================================================= */}
  {/* WHY PAKISTANI SCHOOLS CHOOSE NADICO ERP (COMPARISON TABLE) */}
  {/* ========================================================================= */}
  <section id="comparison" className="py-20 lg:py-28 bg-[#fafcfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Built For Pakistan</span>
        <ScrollTypewriterTitle
          as="h2"
          className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight"
          prefix="How NADICO ERP Outperforms "
          highlight="Outdated Legacy Systems"
          highlightClass="teal-gradient-text"
        />
        <p className="text-slate-600 text-base">
          See why 250+ campuses across Pakistan have left old desktop software behind and switched to NADICO ERP.
        </p>
      </div>

      <ComparisonTypewriterTable />

    </div>
  </section>

  {/* ========================================================================= */}
  {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
  {/* ========================================================================= */}
  <section id="faq" className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <span className="text-xs font-bold uppercase tracking-wider text-brand-teal">Common Questions</span>
      <ScrollTypewriterTitle
        as="h2"
        className="font-heading font-extrabold text-3xl text-slate-900 tracking-tight mt-1"
        prefix="Frequently Asked "
        highlight="Questions"
        highlightClass="teal-gradient-text"
      />
    </div>

    <div className="space-y-4">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <h4 className="font-heading font-bold text-slate-900 text-sm">Can we migrate our current students and fee data from Excel?</h4>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Yes! Our deployment engineers handle 100% of your data migration free of charge. Simply share your Excel rosters with student names, family details, and current fee structures, and we will configure your live campus database within 24 to 48 hours.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs reveal-on-scroll reveal-left">
        <h4 className="font-heading font-bold text-slate-900 text-sm">How does Two-Factor Authentication (2FA) work in NADICO ERP?</h4>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          When 2FA is enabled, administrators and accountants log in using their password plus a 6-digit dynamic passcode generated on their smartphone (Google Authenticator) or sent via SMS. This ensures that even if someone discovers a password, they cannot breach your school's records.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs reveal-on-scroll reveal-right delay-100">
        <h4 className="font-heading font-bold text-slate-900 text-sm">Which Pakistani banks are supported for 3-part fee challans?</h4>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          We support all major Pakistani commercial and Islamic banks including Meezan Bank, HBL, Allied Bank, UBL, Bank Alfalah, Askari Bank, and MCB. We also support 1Link 1Bill digital barcodes, Raast, JazzCash, and Easypaisa reconciliation.
        </p>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs reveal-on-scroll reveal-left delay-150">
        <h4 className="font-heading font-bold text-slate-900 text-sm">Do you provide on-site staff training?</h4>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed">
          Yes. Our corporate technical teams are available in Karachi and nationwide. We conduct interactive training sessions for your principals, accountants, teachers, and front-desk coordinators, along with 24/7 dedicated telephone and WhatsApp support.
        </p>
      </div>
    </div>
  </section>

  {/* ========================================================================= */}
  {/* HIGH CONVERSION CTA BANNER */}
  {/* ========================================================================= */}
  <section className="py-20 bg-gradient-to-r from-brand-charcoal via-brand-tealDark to-brand-charcoal text-white text-center relative overflow-hidden">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 reveal-on-scroll reveal-up">
      
      <span className="inline-block bg-white/10 text-brand-limeLight text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
        Transform Your Campus Today
      </span>

      <ScrollTypewriterTitle
        as="h2"
        className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight"
        prefix="Ready to Modernize Your School with "
        highlight="NADICO ERP"
        highlightClass="text-brand-limeLight"
        suffix="?"
        cursorColor="bg-brand-lime"
      />

      <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
        Join leading schools across Pakistan. Schedule a free, personalized 15-minute online walkthrough or on-site consultation.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <a href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20would%20like%20to%20schedule%20a%20demo%20for%20NADICO%20School%20ERP." target="_blank" className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs sm:text-sm text-brand-charcoal bg-brand-lime hover:bg-brand-limeLight transition-all shadow-button-lime flex items-center justify-center gap-2">
          <MessageCircle className="w-4 h-4" />
          <span>Schedule Walkthrough on WhatsApp (+92 333 722 1552)</span>
        </a>
        <a href="/#contact" className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-white/10 hover:bg-white/20 border border-white/25 transition-all flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" />
          <span>Submit Direct Inquiry Form</span>
        </a>
      </div>

    </div>
  </section>

  {/* ========================================================================= */}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
