import React, { useState } from 'react';
import { 
  ShoppingCart, Barcode, Shield, CheckCircle, ArrowRight, Star, 
  MessageCircle, Calendar, HelpCircle, ChevronDown, Check, Building2, 
  Database, Award, Sparkles, TrendingUp, Layers, Package, Store, 
  Receipt, Truck, RefreshCw, Cpu, Phone, Clock, FileSpreadsheet, AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';
import WhatsAppIcon from '../components/WhatsAppIcon.jsx';

export default function InventoryPosPage() {
  const [selectedTier, setSelectedTier] = useState('retail');
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    businessType: 'Supermarket / Grocery Mart',
    countersCount: '1-2 Counters',
    city: 'Karachi',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NadiCo Technologies! I want a live demo for Inventory & POS System.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Business Name:* ${formData.businessName}%0A*Type:* ${formData.businessType}%0A*Counters/Branches:* ${formData.countersCount}%0A*City:* ${formData.city}%0A*Details:* ${formData.notes || 'N/A'}`;
    window.open(`https://wa.me/923337221552?text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  const reviews = [
    {
      name: "Haji Abdul Rasheed",
      role: "Owner & Managing Director",
      business: "Al-Madina Cash & Carry (3 Branches), Karachi",
      rating: 5,
      text: "We used to rely on manual ledgers and unverified local software, which resulted in stock shortages every month. Since deploying NadiCo POS, every single item is barcode-scanned at the checkout counter, and an automated daily sales closing report is delivered straight to my WhatsApp every night. Our inventory shrinkage has dropped to zero.",
      scale: "3 Superstore Branches • 8 POS Counters"
    },
    {
      name: "Tariq Mehmood",
      role: "Operations Head",
      business: "Metro Hardware & Sanitary Wholesale, Lahore",
      rating: 5,
      text: "In the wholesale distribution trade, tracking customer credit accounts and vendor payables is critical. NadiCo's vendor ledger and customer credit limit engine helped us recover over Rs. 2.5 million in overdue receivables. FBR digital tax receipts print in less than a second.",
      scale: "Wholesale & Godown Network"
    },
    {
      name: "Dr. Bilal Siddiqui",
      role: "Managing Partner",
      business: "City Care Pharmacy & Cosmetics, Rawalpindi",
      rating: 5,
      text: "Tracking pharmaceutical batch numbers and expiry dates was our biggest logistical headache. NadiCo POS alerts our pharmacists 60 days before any medicine expires, allowing us to generate supplier return slips immediately. Counter checkout speed is exceptionally fast even during evening rush hours.",
      scale: "Pharmacy Chain • Batch & Expiry Sync"
    }
  ];

  const modules = [
    {
      icon: Barcode,
      title: "Ultra-Fast Barcode Checkout",
      desc: "Sub-second item scanning, dual monitor customer display, cash/card/digital wallet split tender, and instant thermal receipt printing (58mm/80mm)."
    },
    {
      icon: Building2,
      title: "Multi-Branch & Godown Stock Sync",
      desc: "Real-time stock balance across multiple shops and central godowns. Dispatch stock between branches with inter-branch delivery challans."
    },
    {
      icon: Shield,
      title: "FBR Tier-1 Digital POS Integration",
      desc: "Fully certified FBR invoice generation with official fiscal QR codes, SRB/PRA tax compliance, and automated monthly tax return exports."
    },
    {
      icon: AlertTriangle,
      title: "Batch, Serial & Expiry Date Alert",
      desc: "Mandatory batch numbers and expiry tracking for pharmacies, foods, and cosmetics. Automated warning notifications before items expire."
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Daily Closing Reports",
      desc: "Get total cash sales, card payments, customer balance, and net profit report delivered straight to your personal WhatsApp every night."
    },
    {
      icon: FileSpreadsheet,
      title: "Customer Credit Accounts & Vendor Ledger",
      desc: "Complete double-entry accounting: track customer credit limits, automated overdue reminders via SMS, and purchase order tracking."
    }
  ];

  const faqs = [
    {
      q: "Will the billing counter stop functioning if load-shedding causes an internet interruption?",
      a: "Not at all. NadiCo POS incorporates an offline hybrid checkout engine. Barcode scanning, invoice creation, automatic cash drawer opening, and thermal receipt printing continue running smoothly without internet. All transactions automatically sync to the cloud as soon as connection is restored."
    },
    {
      q: "Are our existing barcode scanners and thermal receipt printers compatible with NadiCo POS?",
      a: "Yes, 100%. All standard USB, Bluetooth, and wireless 1D/2D barcode scanners (Honeywell, Zebra, Datalogic, and local models) along with 58mm and 80mm thermal receipt printers work plug-and-play without requiring any proprietary hardware."
    },
    {
      q: "Can we upload our existing product inventory and price lists in bulk from Excel?",
      a: "Yes, absolutely. Our deployment engineers format and import your product catalogs, barcodes, purchase costs, retail prices, and opening stock balances into your live system within 2 hours, free of charge."
    },
    {
      q: "Can cashiers cancel invoices or tamper with sales data without management authorization?",
      a: "Never. With granular role-based security, cashiers cannot void bills, alter discounts, or modify inventory quantities without a supervisor's master PIN. Every transaction and modification is recorded in a tamper-proof audit trail."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Header />

      {/* TOP HERO BANNER */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-tech-circuit-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>Smart Retail & Wholesale POS Engine • Built for Pakistan</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Cloud-Powered <span className="text-emerald-700">Inventory & POS System</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Fast barcode checkout, multi-warehouse stock sync, FBR tax-stamped slips, and automated night sales reports sent straight to your WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-emerald-700 hover:bg-emerald-800 transition-all shadow-button flex items-center justify-center gap-2"
              >
                <span>View Pricing & Packages</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20want%20a%20live%20demo%20of%20Inventory%20and%20POS%20System."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-emerald-50/60 border border-slate-300 hover:border-emerald-500 transition-all shadow-xs flex items-center justify-center gap-2 group"
              >
                <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xs shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                </div>
                <span>Chat on WhatsApp (+92 333 722 1552)</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Checkout Speed</div>
                <div className="text-lg font-extrabold text-emerald-800">&lt; 1 Second</div>
                <div className="text-[10px] text-slate-400">Barcode scan to print</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">FBR Certification</div>
                <div className="text-lg font-extrabold text-emerald-800">Tier-1 POS</div>
                <div className="text-[10px] text-slate-400">Official digital QR code</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Offline Operation</div>
                <div className="text-lg font-extrabold text-emerald-800">100% Reliable</div>
                <div className="text-[10px] text-slate-400">Works during load-shedding</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Store Sync</div>
                <div className="text-lg font-extrabold text-emerald-800">Multi-Branch</div>
                <div className="text-[10px] text-slate-400">Central godown ledger</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 1. TOP CLIENT REVIEWS SECTION (REQUESTED BY USER AT THE TOP OF THE PAGE) */}
      {/* ========================================================================= */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Verified Business Feedback</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Trusted by Retail Superstores & Wholesalers Across Pakistan
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <span className="flex text-amber-400">
                {'★'.repeat(5)}
              </span>
              <span>4.9 / 5.0 Average Retailer Rating</span>
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
                      {rev.scale}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic mb-4">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="font-bold text-xs text-slate-900">{rev.name}</div>
                  <div className="text-[11px] text-slate-500 font-medium">{rev.role}</div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-0.5">{rev.business}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE POS & INVENTORY CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              End-to-End Retail Automation
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Six Powerful Modules Built for Busy Pakistani Counters
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              No complicated training required. Cashiers learn to bill in less than 15 minutes, while business owners get complete control over every item entering and leaving their shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-emerald-600 hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. FLEXIBLE PRICING SECTION & VISUAL GRAPH (REQUESTED BY USER) */}
      {/* ========================================================================= */}
      <section id="pricing" className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-3.5 py-1 rounded-full border border-emerald-200">
              Transparent, Flexible Investment
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Simple Pricing with Zero Hidden Surprises
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every shop is unique in size and daily sales volume. We keep pricing honest and affordable—pay only for the counters and features your business actually needs.
            </p>
          </div>

          {/* PRICING CARDS WITH STARTING FROM MODEL */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* TIER 1 */}
            <div 
              onClick={() => setSelectedTier('retail')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'retail' 
                  ? 'border-emerald-700 shadow-card ring-2 ring-emerald-700/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Single Retail Counter</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Small Shop</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Ideal for grocery stores, boutiques, electronics shops, and mobile outlets.</p>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100 mb-6">
                  <div className="text-xs text-emerald-900 font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-emerald-800 tracking-tight mt-0.5">
                    Rs. 2,999 <span className="text-xs font-bold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 mt-1">Includes cloud backup & offline cashier engine</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 1 POS Billing Counter</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 5,000 Barcode Products</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Thermal Receipt Printing (58/80mm)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> WhatsApp Daily Sales Summary</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Free Data Import from Excel</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-emerald-800 bg-emerald-100 hover:bg-emerald-200 transition-colors"
              >
                Choose Single Counter
              </a>
            </div>

            {/* TIER 2 (RECOMMENDED) */}
            <div 
              onClick={() => setSelectedTier('mart')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'mart' 
                  ? 'border-emerald-700 shadow-card ring-2 ring-emerald-700/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-700 text-white text-[10px] font-extrabold uppercase tracking-wider">
                Most Popular for Marts
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Multi-Counter Mart</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">Superstore</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">For busy supermarkets, department stores, and cash-and-carry retail.</p>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 mb-6">
                  <div className="text-xs text-emerald-900 font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-emerald-800 tracking-tight mt-0.5">
                    Rs. 5,999 <span className="text-xs font-bold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-emerald-700 mt-1">Includes FBR POS Tier-1 QR stamp support</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 4 Concurrent Cashier Counters</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Unlimited Products & Barcodes</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> FBR Digital Tax Invoicing Integration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Batch & Expiry Management</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Customer Credit Ledger & Payment Reminders</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-button"
              >
                Choose Superstore Package
              </a>
            </div>

            {/* TIER 3 */}
            <div 
              onClick={() => setSelectedTier('wholesale')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'wholesale' 
                  ? 'border-emerald-700 shadow-card ring-2 ring-emerald-700/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Multi-Branch & Wholesale</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Enterprise</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Complete enterprise ERP for multi-city branches, central godowns, and wholesale.</p>

                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 mb-6">
                  <div className="text-xs text-slate-700 font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    Rs. 9,999 <span className="text-xs font-bold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">Multi-godown transfer & supplier tracking</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Multi-Branch Live Cloud Network</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Inter-Branch Stock Transfer Challans</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Double-Entry Vendor & Bank Accounting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dedicated Account Manager & Onsite Training</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Custom Invoicing & ERP Integrations</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-slate-800 bg-slate-200 hover:bg-slate-300 transition-colors"
              >
                Inquire Enterprise Setup
              </a>
            </div>

          </div>

          {/* VISUAL GRAPH / COMPARISON BAR (REQUESTED BY USER) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
            <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-700" />
              <span>Investment Comparison by Business Scale (Visual Cost Graph)</span>
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Small Retail Counter (1-2 Counters)</span>
                  <span className="text-emerald-700 font-bold">Starting from Rs. 2,999 / mo</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Busy Supermarket / Multi-Counter Mart (3-5 Counters)</span>
                  <span className="text-emerald-700 font-bold">Starting from Rs. 5,999 / mo</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full transition-all duration-500" style={{ width: '60%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Wholesale Warehouse & Multi-Branch Chain</span>
                  <span className="text-emerald-700 font-bold">Starting from Rs. 9,999 / mo</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-emerald-800 h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 italic text-center">
              * Note: All plans include software licenses, secure cloud hosting, automatic updates, and lifetime Pakistani telephone & WhatsApp technical support.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DIRECT INQUIRY & CONSULTATION FORM (REQUESTED BY USER) */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Direct Retail Consultation
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Schedule a Free Live POS Walkthrough
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill this quick form and our technical retail consultant will demonstrate how the system works on your own products via Zoom or WhatsApp video within 2 hours.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg text-emerald-900">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-emerald-800">
                  Our POS specialist is reviewing your requirements and will connect with you on WhatsApp shortly.
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
                      placeholder="e.g. Haji Muhammad Tariq"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">WhatsApp / Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Shop / Business Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Madina Super Store"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Business Type</label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      <option>Supermarket / Grocery Mart</option>
                      <option>Pharmacy & Medical Store</option>
                      <option>Clothing & Apparel Boutique</option>
                      <option>Electronics & Mobile Accessories</option>
                      <option>Hardware & Sanitary Wholesale</option>
                      <option>Restaurant & Fast Food POS</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Number of Counters / Branches</label>
                    <select
                      value={formData.countersCount}
                      onChange={(e) => setFormData({ ...formData, countersCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                    >
                      <option>1 Billing Counter</option>
                      <option>2 - 3 Counters</option>
                      <option>4 - 6 Counters</option>
                      <option>Multi-Branch (2+ Locations)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">City</label>
                    <input
                      type="text"
                      placeholder="e.g. Karachi, Lahore, Faisalabad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Any specific requirements or questions?</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need FBR integration, already have barcode scanner, or need staff training..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-emerald-600 bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>Average reply time: under 15 minutes</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:opacity-95 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <WhatsAppIcon className="w-4 h-4 text-white" />
                    <span>Request WhatsApp Consultation</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Common Questions
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Retailers Frequently Ask Us
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
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-emerald-700' : ''}`} />
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
