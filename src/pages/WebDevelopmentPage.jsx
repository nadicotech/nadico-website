import React, { useState } from 'react';
import { 
  Code, Layout, Laptop, Smartphone, Globe, Shield, Star, CheckCircle, 
  ArrowRight, MessageCircle, Calendar, HelpCircle, ChevronDown, Check, 
  Sparkles, TrendingUp, Layers, Zap, Database, Clock, Server, Rocket,
  ExternalLink, FileCode, Lock, CheckSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';

export default function WebDevelopmentPage() {
  const [selectedTier, setSelectedTier] = useState('corporate');
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    projectType: 'Corporate Business Website',
    budgetRange: 'Rs. 35,000 - 75,000',
    timeline: 'Urgent (1-2 Weeks)',
    city: 'Karachi',
    requirements: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NADICO Technologies! I want a project estimate for Web Development.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Company:* ${formData.companyName}%0A*Project:* ${formData.projectType}%0A*Budget:* ${formData.budgetRange}%0A*Timeline:* ${formData.timeline}%0A*City:* ${formData.city}%0A*Details:* ${formData.requirements || 'N/A'}`;
    window.open(`https://wa.me/923337221552?text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  const reviews = [
    {
      name: "Asad Farooq",
      role: "Managing Director",
      company: "Indus Valley Textiles (Exporter), Karachi",
      rating: 5,
      text: "Hamare international buyers Europe aur Gulf mein hain. NADICO team ne hamari company ke liye custom product catalog aur B2B inquiry portal banaya. Website 1 second se kam waqt mein khulti hai aur mobile par itni smooth hai ke hum ne pehle mahine mein 4 naye export orders close kiye.",
      tag: "B2B Export Portal • Sub-Second Speed"
    },
    {
      name: "Kamran Sheikh",
      role: "Chief Executive Officer",
      company: "PakCargo Logistics & Supply Chain, Lahore",
      rating: 5,
      text: "Hum ne pehle 2 different freelancers se website banwai jo adhi chhor kar bhag gaye. NADICO ne proper contract aur timeline par React & Node.js par hamara tracking portal develop kiya. Professionalism aur direct communication ka koi muqabla nahi.",
      tag: "Custom Web Application • Real-time Tracking"
    },
    {
      name: "Dr. Hina Zubair",
      role: "Founder & Director",
      company: "HealthPoint Diagnostic Center, Islamabad",
      rating: 5,
      text: "Online test booking aur patient report download ka portal itna asan banaya gaya hai ke 60 saal ke buzurg bhi baghair kisi mushkil ke apni PDF report download kar lete hain. Technical SEO ki wajah se Google par Islamabad lab searches mein hum top 3 mein aa rahe hain.",
      tag: "Medical Web Portal • SEO Ranked #1"
    }
  ];

  const modules = [
    {
      icon: Zap,
      title: "Sub-Second Ultra Fast Loading",
      desc: "Built with Next.js & React with automated image optimization, edge caching, and 95+ Google PageSpeed score for instant client conversions."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Fluid UI/UX",
      desc: "Designed from the ground up for smartphone screens where 85% of Pakistani traffic lives, scaling beautifully to iPad, laptop, and 4K displays."
    },
    {
      icon: Shield,
      title: "Pakistani Payment Gateway Integration",
      desc: "Seamless checkout with Bank Alfalah, PayFast, 1Link Raast, JazzCash, Easypaisa, and Stripe with instant transaction verification."
    },
    {
      icon: Database,
      title: "Custom B2B Admin Portals",
      desc: "Secure back-office control: manage customer inquiries, upload products, track order statuses, and export Excel reports with zero coding."
    },
    {
      icon: Globe,
      title: "Built-In Technical SEO Architecture",
      desc: "Automated XML sitemaps, OpenGraph social preview cards, schema structured JSON-LD data, and clean search-engine friendly URLs."
    },
    {
      icon: Lock,
      title: "Bank-Grade Cyber Security & SSL",
      desc: "Free 256-bit SSL certificates, automated SQL-injection protection, CSRF shielding, and regular multi-region cloud backups."
    }
  ];

  const faqs = [
    {
      q: "Website banne mein kitna waqt lagta hai?",
      a: "Standard Corporate Business Website 7 se 10 din ke andar live ho jati hai. Agar custom web application ya database portal ho to requirements ke mutabiq 2 se 4 hafte lagte hain. Hum har step par aap ko live preview link share karte hain."
    },
    {
      q: "Domain name aur hosting ka kya hisab hota hai?",
      a: "Hum .com, .pk ya .com.pk domain registration aur high-speed cloud hosting ka sara setup khud manage karte hain. Aap ko kisi technical pareshani ka samna nahi karna parta."
    },
    {
      q: "Website live hone ke baad agar koi cheez change karni ho to kya hoga?",
      a: "NADICO ke tamam web packages mein 6 mahine ki free maintenance aur technical support shamil hoti hai. Is ke ilawa hum aap ko ek aasan admin panel dete hain jahan se aap khud phone number, tasweerein aur text tabdeel kar sakte hain."
    },
    {
      q: "Kya hamari website Google par top ranking mein aayegi?",
      a: "Jee haan! Hum technical on-page SEO ke tamam usool (meta tags, fast loading, mobile compatibility, Google Search Console indexing) shuru din se code mein shamil karte hain taake aap ki website search engine par jaldi rank kare."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Header />

      {/* TOP HERO BANNER */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-teal-50/60 via-white to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-tech-circuit-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-tealSoft text-brand-teal text-xs font-bold uppercase tracking-wider border border-brand-tealBorder shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-teal" />
              <span>Modern Web Engineering & B2B Web Applications • Karachi, Pakistan</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              High-Performance <span className="text-brand-teal">Web Design & Applications</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We code custom websites that open in under a second, look stunning on every phone screen, and turn casual visitors into paying Pakistani and international clients.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-teal hover:bg-brand-tealDark transition-all shadow-button flex items-center justify-center gap-2"
              >
                <span>Explore Web Packages & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20want%20to%20discuss%20a%20website%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Quick WhatsApp Consultation</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Load Speed</div>
                <div className="text-lg font-extrabold text-brand-teal">&lt; 1.0 Second</div>
                <div className="text-[10px] text-slate-400">Next.js & Edge CDN</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Mobile Responsive</div>
                <div className="text-lg font-extrabold text-brand-teal">100% Fluid</div>
                <div className="text-[10px] text-slate-400">Smartphone optimized</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Security</div>
                <div className="text-lg font-extrabold text-brand-teal">256-Bit SSL</div>
                <div className="text-[10px] text-slate-400">Bank-grade encryption</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Support</div>
                <div className="text-lg font-extrabold text-brand-teal">6 Months Free</div>
                <div className="text-[10px] text-slate-400">Direct WhatsApp support</div>
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
                <span>Verified Client Testimonials</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Trusted by Corporate Leaders, Exporters & Founders
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <span className="flex text-amber-400">
                {'★'.repeat(5)}
              </span>
              <span>5.0 / 5.0 Corporate Delivery Rating</span>
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
                  <div className="text-[11px] text-brand-teal font-bold mt-0.5">{rev.company}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE WEB ENGINEERING FEATURES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
              Modern Tech Stack
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Why NADICO Websites Generate More Inquiries
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We don't use slow, bloated templates that break after 2 months. We engineer sleek, modern web applications that give your brand supreme authority and credibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand-teal hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-tealSoft border border-brand-tealBorder text-brand-teal flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-teal transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3.5 py-1 rounded-full border border-brand-tealBorder">
              Transparent Project Investment
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Flexible Web Packages Tailored to Your Business Goals
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Whether you need a sleek 5-page corporate site or an enterprise customer portal, we provide fixed milestones and 100% transparent quotes.
            </p>
          </div>

          {/* PRICING CARDS WITH STARTING FROM MODEL */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* TIER 1 */}
            <div 
              onClick={() => setSelectedTier('starter')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'starter' 
                  ? 'border-brand-teal shadow-card ring-2 ring-brand-teal/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Starter Business Site</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Small Business</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Perfect for consulting firms, clinics, agencies, and service providers.</p>

                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 mb-6">
                  <div className="text-xs text-brand-teal font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-brand-tealDark tracking-tight mt-0.5">
                    Rs. 35,000 <span className="text-xs font-bold text-slate-500">one-time</span>
                  </div>
                  <div className="text-[11px] text-brand-teal mt-1">Ready in 7 to 10 working days</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 5 Custom Designed Pages</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 100% Mobile & Tablet Responsive</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> WhatsApp Direct Click-to-Chat Button</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Free .com or .pk Domain & SSL Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 3 Months Free Technical Support</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-brand-teal bg-brand-tealSoft hover:bg-brand-teal hover:text-white transition-colors"
              >
                Choose Starter Package
              </a>
            </div>

            {/* TIER 2 (RECOMMENDED) */}
            <div 
              onClick={() => setSelectedTier('corporate')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'corporate' 
                  ? 'border-brand-teal shadow-card ring-2 ring-brand-teal/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-teal text-white text-[10px] font-extrabold uppercase tracking-wider">
                Most Popular for Companies
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Custom Corporate Portal</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-limeSoft text-brand-limeDark font-bold">Recommended</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">For factories, educational institutes, exporters, and growing brands.</p>

                <div className="p-4 rounded-2xl bg-teal-50 border border-brand-tealBorder mb-6">
                  <div className="text-xs text-brand-teal font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-brand-teal tracking-tight mt-0.5">
                    Rs. 75,000 <span className="text-xs font-bold text-slate-500">one-time</span>
                  </div>
                  <div className="text-[11px] text-brand-tealDark mt-1">Includes custom admin panel & database</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Up to 12 Interactive Custom Pages</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Secure Admin Dashboard for Content Edits</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Lead Capture Database & Email Notifications</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Full Technical On-Page SEO Configuration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 6 Months Comprehensive Maintenance</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-white bg-brand-teal hover:bg-brand-tealDark transition-colors shadow-button"
              >
                Choose Corporate Portal
              </a>
            </div>

            {/* TIER 3 */}
            <div 
              onClick={() => setSelectedTier('enterprise')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'enterprise' 
                  ? 'border-brand-teal shadow-card ring-2 ring-brand-teal/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Enterprise Web App</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Full Scale</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Multi-tenant platforms, complex API integrations, and e-commerce stores.</p>

                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 mb-6">
                  <div className="text-xs text-slate-700 font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    Rs. 149,000 <span className="text-xs font-bold text-slate-500">milestone based</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">Custom APIs, payment gateways & role security</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dedicated React/Next.js/Node Engineering</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Pakistani Bank Payment Gateway (1Link/Alfalah)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Role-Based Access Control (Admin, Staff, Client)</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 1-Year Dedicated Technical SLA & Updates</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Full Source Code & Repository Ownership</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-slate-800 bg-slate-200 hover:bg-slate-300 transition-colors"
              >
                Inquire Enterprise Scope
              </a>
            </div>

          </div>

          {/* VISUAL GRAPH / COMPARISON BAR (REQUESTED BY USER) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
            <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-teal" />
              <span>Investment Comparison by Web Project Scope (Visual Cost Graph)</span>
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Starter Business Website (5 Pages, WhatsApp Lead Capture)</span>
                  <span className="text-brand-teal font-bold">Starting from Rs. 35,000</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-brand-tealLight h-full rounded-full transition-all duration-500" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Corporate Web Portal with Admin Dashboard (Database & Forms)</span>
                  <span className="text-brand-teal font-bold">Starting from Rs. 75,000</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-brand-teal h-full rounded-full transition-all duration-500" style={{ width: '55%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Enterprise Web App & E-Commerce (Payment Gateways & APIs)</span>
                  <span className="text-brand-teal font-bold">Starting from Rs. 149,000</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-brand-tealDark h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 italic text-center">
              * Note: We sign a legal milestone agreement with clearly documented deliverables, source code ownership transfer, and zero surprise hidden charges.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DIRECT ESTIMATE & INQUIRY FORM (REQUESTED BY USER) */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
                Quick Project Quote
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Get a Free Web Architecture Estimate
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tell us about your business goals and our lead software engineer will review your project and send you a detailed proposal with timeline and live wireframe samples.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-teal-50 border border-brand-tealBorder text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-brand-teal mx-auto" />
                <h3 className="font-bold text-lg text-brand-tealDark">Project Brief Received!</h3>
                <p className="text-xs text-brand-teal">
                  Our engineering team has received your project details and will connect with you on WhatsApp within 30 minutes.
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
                      placeholder="e.g. Asad Farooq"
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
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Company / Business Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Indus Valley Textiles"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Project Scope</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    >
                      <option>Corporate Business Website</option>
                      <option>B2B Client Portal / Web App</option>
                      <option>E-Commerce Online Store</option>
                      <option>Redesign Existing Outdated Website</option>
                      <option>Custom SaaS Application</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Target Budget Range</label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    >
                      <option>Rs. 35,000 - 75,000 (Starter)</option>
                      <option>Rs. 75,000 - 150,000 (Corporate)</option>
                      <option>Rs. 150,000+ (Enterprise Custom)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Expected Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-teal bg-white"
                    >
                      <option>Urgent (Within 1-2 Weeks)</option>
                      <option>Standard (3-4 Weeks)</option>
                      <option>Flexible / Planning Stage</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Brief description of features you want</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need WhatsApp inquiry buttons, product catalog with PDF downloads, payment integration, or client logins..."
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
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
                    <span>Send Project Brief via WhatsApp</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-teal bg-brand-tealSoft px-3 py-1 rounded-full border border-brand-tealBorder">
              Web FAQ
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Frequently Asked Questions About Websites
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
