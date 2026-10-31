import { Activity, ArrowRight, Calendar, CheckCircle, ChevronDown, ExternalLink, GraduationCap, HelpCircle, Layers, Layout, Mail, Menu, MessageCircle, PhoneCall, Shield, ShoppingCart, Sparkles, TrendingUp, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isSchoolErp = location.pathname === '/school-erp' || location.pathname.includes('school-erp');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [drawerOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* MAIN NAVIGATION (FIXED FLOATING ROUNDED CAPSULE STYLE - ROBUST ON ALL PAGES) */}
      {/* ========================================================================= */}
      <header id="mainHeader" className="fixed top-2.5 sm:top-3.5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 transition-all duration-300 pointer-events-none">
        <div className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-lg transition-all duration-300 pointer-events-auto ${scrolled ? 'shadow-xl bg-white/98 border-slate-300' : ''}`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 sm:h-20">
              
              {/* LOGO & BRANDING */}
              <Link to="/" onClick={scrollToTop} className="flex items-center gap-3.5 group py-1 shrink-0">
                <div className="silver-sheen-logo-wrap transition-transform group-hover:scale-105">
                  <img
                    src="/LOGO.png"
                    alt="NadiCo Technologies"
                    className="h-10 sm:h-12 w-auto object-contain drop-shadow-sm"
                  />
                  <div className="silver-sheen-overlay" aria-hidden="true"></div>
                </div>
              </Link>

              {/* DESKTOP NAVIGATION LINKS (UNIFIED & RELIABLE ACROSS ALL PAGES) */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-slate-700">
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className={`hover:text-brand-teal transition-colors ${location.pathname === '/' ? 'text-brand-teal font-bold' : ''}`}
                >
                  Home
                </Link>

                {/* ERP SOLUTIONS MEGA-DROPDOWN */}
                <div className="relative group" id="erpDropdownContainer">
                  <button
                    className="flex items-center gap-1.5 hover:text-brand-teal transition-colors py-2 focus:outline-none"
                    aria-expanded="false"
                  >
                    <span>ERP Systems</span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-brand-tealSoft text-brand-teal border border-brand-tealBorder">
                      CORE
                    </span>
                    <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-teal group-hover:rotate-180 transition-transform" />
                  </button>

                  {/* Dropdown Menu Box */}
                  <div className="absolute top-full left-0 w-80 p-3 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    
                    {/* School ERP Item */}
                    <Link
                      to="/school-erp"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-brand-tealSoft border border-brand-tealBorder flex items-center justify-center text-brand-teal shrink-0 group-hover/item:bg-brand-teal group-hover/item:text-white transition-colors">
                        <GraduationCap className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                          <span>School Management ERP</span>
                          <span className="px-1.5 py-0.2 rounded text-[9px] bg-brand-limeSoft text-brand-limeDark font-bold">FLAGSHIP</span>
                        </div>
                        <div className="text-slate-500 text-[11px] leading-tight mt-0.5">Admissions, bank challans, exam cards & teacher app</div>
                      </div>
                    </Link>

                    {/* Hospital HMS Item */}
                    <Link
                      to="/hospital-hms"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-700 shrink-0 group-hover/item:bg-sky-700 group-hover/item:text-white transition-colors">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Hospital Management (HMS)</div>
                        <div className="text-slate-500 text-[11px] leading-tight mt-0.5">OPD/IPD tokens, EMR, pharmacy POS & lab tests</div>
                      </div>
                    </Link>

                    {/* Inventory & POS Item */}
                    <Link
                      to="/inventory-pos"
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shrink-0 group-hover/item:bg-emerald-700 group-hover/item:text-white transition-colors">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-xs">Inventory & POS System</div>
                        <div className="text-slate-500 text-[11px] leading-tight mt-0.5">Barcode retail checkout, stock ledger & purchase orders</div>
                      </div>
                    </Link>

                    {/* Live Link Footer */}
                    <div className="pt-2 mt-1 border-t border-slate-100 flex items-center justify-between px-2 text-[11px]">
                      <span className="text-slate-500 font-medium">Looking for school demo?</span>
                      <a
                        href="https://thereadlyerp.vercel.app/rehan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-brand-teal hover:text-brand-limeDark flex items-center gap-1"
                      >
                        Test Live Instance <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>

                  </div>
                </div>

                {/* SERVICES LINKS */}
                <Link
                  to="/web-development"
                  className={`hover:text-brand-teal transition-colors ${location.pathname === '/web-development' ? 'text-brand-teal font-bold' : ''}`}
                >
                  Web Development
                </Link>
                <Link
                  to="/digital-marketing"
                  className={`hover:text-brand-limeDark transition-colors ${location.pathname === '/digital-marketing' ? 'text-brand-limeDark font-bold' : ''}`}
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/about"
                  className={`hover:text-brand-teal transition-colors ${location.pathname === '/about' ? 'text-brand-teal font-bold' : ''}`}
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className={`hover:text-brand-teal transition-colors ${location.pathname === '/contact' ? 'text-brand-teal font-bold' : ''}`}
                >
                  Contact
                </Link>
              </nav>

              {/* DESKTOP RIGHT CTA BUTTONS */}
              <div className="hidden sm:flex items-center gap-2.5">
                <a
                  href="https://thereadlyerp.vercel.app/rehan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl text-xs font-bold text-brand-teal bg-brand-tealSoft border border-brand-tealBorder hover:bg-brand-teal hover:text-white transition-all flex items-center gap-1.5 shadow-2xs"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
                  <span>Live ERP Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {location.pathname === '/' ? (
                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-teal hover:bg-brand-tealDark transition-all duration-200 shadow-button flex items-center gap-1.5"
                  >
                    <span>Book Live Demo</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <Link
                    to="/contact"
                    className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-teal hover:bg-brand-tealDark transition-all duration-200 shadow-button flex items-center gap-1.5"
                  >
                    <span>Book Live Demo</span>
                    <Calendar className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>

              {/* MOBILE ACTIONS: HAMBURGER */}
              <div className="flex lg:hidden items-center">
                <button
                  id="mobileMenuBtn"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open Navigation Menu"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 flex items-center justify-center focus:outline-none transition-colors"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Spacer so page content starts cleanly below the fixed floating header on mobile, tablet & desktop */}
      <div className="h-20 sm:h-24 w-full pointer-events-none" aria-hidden="true" />

      {/* ========================================================================= */}
      {/* MOBILE SLIDE-OUT DRAWER (PREMIUM MODERN APP-LIKE EXPERIENCE) */}
      {/* ========================================================================= */}
      <div
        id="mobileDrawerOverlay"
        onClick={() => setDrawerOpen(false)}
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 transition-opacity duration-300 ${
          drawerOpen ? 'block opacity-100' : 'hidden opacity-0'
        }`}
      ></div>

      <div
        id="mobileDrawer"
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl rounded-l-3xl border-l border-slate-200 transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Top Header with Logo & Close Button */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/70 flex items-center justify-between">
          <Link to="/" onClick={() => setDrawerOpen(false)} className="flex items-center gap-2">
            <div className="silver-sheen-logo-wrap">
              <img
                src="/LOGO.png"
                alt="NadiCo Technologies"
                className="h-10 w-auto object-contain"
              />
              <div className="silver-sheen-overlay" aria-hidden="true"></div>
            </div>
          </Link>
          <button
            id="closeDrawerBtn"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close Menu"
            className="w-9 h-9 rounded-full bg-slate-200/80 hover:bg-slate-300 text-slate-700 flex items-center justify-center transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Operational System Badge */}
        <div className="px-5 pt-4 pb-1">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-brand-tealSoft border border-brand-tealBorder text-brand-teal text-[11px] font-semibold">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              NadiCo Cloud Architecture
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
              Online
            </span>
          </div>
        </div>

        {/* Drawer Navigation Links */}
        <div className="p-5 space-y-4 flex-1">
          
          <Link
            to="/"
            onClick={() => setDrawerOpen(false)}
            className="block px-3 py-2 text-sm font-bold text-slate-900 hover:text-brand-teal transition-colors"
          >
            Home
          </Link>

          {/* ERP Suites Cards */}
          <div className="space-y-2">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3">
              Enterprise ERP Suites
            </div>
            
            <div className="space-y-1.5">
              <Link
                to="/school-erp"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-brand-tealSoft border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-teal text-white flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs group-hover:text-brand-teal">School ERP</div>
                    <div className="text-[10px] text-slate-500">Challans, Biometric, Grading</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-brand-limeSoft text-brand-limeDark">
                  FLAGSHIP
                </span>
              </Link>

              <Link
                to="/hospital-hms"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-sky-50 border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-700 text-white flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs group-hover:text-sky-700">Hospital HMS</div>
                    <div className="text-[10px] text-slate-500">OPD/IPD, EMR, Pharmacy POS</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-sky-100 text-sky-800">
                  HEALTH
                </span>
              </Link>

              <Link
                to="/inventory-pos"
                onClick={() => setDrawerOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs group-hover:text-emerald-700">Inventory & POS</div>
                    <div className="text-[10px] text-slate-500">Barcode Checkout, Multi-Branch</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-100 text-emerald-800">
                  RETAIL
                </span>
              </Link>
            </div>
          </div>

          {/* If on School ERP page, show quick-jump anchor links for user convenience */}
          {isSchoolErp && (
            <div className="space-y-1.5 pt-2 border-t border-slate-100">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-brand-teal px-3">
                School ERP Page Sections
              </div>
              <div className="grid grid-cols-2 gap-1.5 px-1">
                <a
                  href="#modules"
                  onClick={() => setDrawerOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-semibold text-slate-700 text-center"
                >
                  14 Modules
                </a>
                <a
                  href="#power-features"
                  onClick={() => setDrawerOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-semibold text-slate-700 text-center"
                >
                  Cards & Balance
                </a>
                <a
                  href="#comparison"
                  onClick={() => setDrawerOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-[11px] font-semibold text-slate-700 text-center"
                >
                  Why NadiCo
                </a>
                <a
                  href="#pricing"
                  onClick={() => setDrawerOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg bg-brand-tealSoft text-brand-teal text-[11px] font-bold text-center border border-brand-tealBorder"
                >
                  Campus Pricing
                </a>
              </div>
            </div>
          )}

          {/* Additional Tech Services */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3">
              Web & Growth Services
            </div>
            
            <Link
              to="/web-development"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-tealSoft text-brand-teal flex items-center justify-center shrink-0">
                <Layout className="w-4 h-4" />
              </div>
              <span>Custom Website Design & Dev</span>
            </Link>

            <Link
              to="/digital-marketing"
              onClick={() => setDrawerOpen(false)}
              className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-limeSoft text-brand-limeDark flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span>Digital Marketing & SEO</span>
            </Link>
          </div>

          <div className="space-y-1 pt-2 border-t border-slate-100">
            <Link
              to="/about"
              onClick={() => setDrawerOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-brand-teal transition-colors"
            >
              About NadiCo Tech
            </Link>
            <Link
              to="/contact"
              onClick={() => setDrawerOpen(false)}
              className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-brand-teal transition-colors"
            >
              Contact & Support
            </Link>
          </div>
        </div>

        {/* Drawer Footer Actions: Live Portal, Call, WhatsApp */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 space-y-2.5">
          <a
            href="https://thereadlyerp.vercel.app/rehan"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 rounded-xl text-xs font-bold text-white bg-brand-teal hover:bg-brand-tealDark text-center flex items-center justify-center gap-2 shadow-button transition-all"
          >
            <span className="w-2 h-2 rounded-full bg-brand-lime animate-pulse"></span>
            <span>Test Live School ERP Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="tel:+923337221552"
              className="py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 text-center flex items-center justify-center gap-1.5 shadow-xs transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-teal" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20want%20to%20consult%20regarding%20ERP%20software."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 text-center flex items-center justify-center gap-1.5 shadow-[0_4px_14px_rgba(37,211,102,0.35)] transition-all"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
