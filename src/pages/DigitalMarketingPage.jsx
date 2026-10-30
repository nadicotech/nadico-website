import React, { useState } from 'react';
import { 
  TrendingUp, Target, BarChart2, MessageCircle, Star, CheckCircle, 
  ArrowRight, Calendar, HelpCircle, ChevronDown, Check, Sparkles, 
  Layers, Users, Search, Share2, DollarSign, Award, Clock, Megaphone,
  Compass, Eye, MousePointerClick, ShieldCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';

export default function DigitalMarketingPage() {
  const [selectedTier, setSelectedTier] = useState('growth');
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    industry: 'Real Estate & Construction',
    monthlyAdBudget: 'Rs. 50,000 - 100,000',
    currentChannel: 'Facebook & Instagram Ads',
    city: 'Karachi',
    goals: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello NADICO Technologies! I want a Digital Marketing audit & proposal.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Business:* ${formData.businessName}%0A*Industry:* ${formData.industry}%0A*Budget:* ${formData.monthlyAdBudget}%0A*Platform:* ${formData.currentChannel}%0A*City:* ${formData.city}%0A*Goals:* ${formData.goals || 'N/A'}`;
    window.open(`https://wa.me/923337221552?text=${msg}`, '_blank');
    setFormSubmitted(true);
  };

  const reviews = [
    {
      name: "Sheikh Naveed Akhtar",
      role: "Managing Director",
      company: "Al-Miraj Builders & Developers, Karachi",
      rating: 5,
      text: "We spent hundreds of thousands of rupees with generic digital agencies that only delivered vanity page likes and bot traffic. NADICO's media buyers launched a laser-targeted direct WhatsApp lead campaign for our residential projects in Bahria Town and Scheme 33. We receive over 40 qualified buyer inquiries weekly and closed 6 luxury apartments within 3 months.",
      metric: "6 High-Ticket Property Sales • 4.8x ROAS"
    },
    {
      name: "Fatima Bilal",
      role: "Founder & Creative Head",
      company: "Zehra Pret & Stitched Lawn, Lahore",
      rating: 5,
      text: "Our direct-to-consumer apparel brand was struggling with rising acquisition costs ahead of the peak festive season. NADICO restructured our Meta Catalog campaigns and high-retention video reels funnels. Our cost per purchase decreased from Rs. 1,400 to Rs. 420, while monthly sales scaled past 550 verified orders.",
      metric: "68% Drop in Ad CPA • 550+ Monthly Orders"
    },
    {
      name: "Engr. Zeeshan Haider",
      role: "CEO & Partner",
      company: "SunTech Solar Solutions, Islamabad & Rawalpindi",
      rating: 5,
      text: "In commercial solar engineering, casual quote-seekers used to drain our sales team's energy. NADICO engineered high-intent Google Search campaigns paired with a dedicated qualification landing page. Now, only pre-budgeted commercial property and factory owners reach our engineers.",
      metric: "High-Intent Commercial Leads • 3.9x ROI"
    }
  ];

  const modules = [
    {
      icon: Target,
      title: "Meta Ads (Facebook & Instagram)",
      desc: "Stop burning ad spend. We build highly targeted Pakistani buyer audiences, carousel creatives, and Urdu ad copy that stops the scroll."
    },
    {
      icon: Search,
      title: "Google Search & Performance Max",
      desc: "Capture Pakistani customers at the exact moment they search for your products on Google with zero wasted ad spend on irrelevant keywords."
    },
    {
      icon: MessageCircle,
      title: "Direct WhatsApp Lead Funnels",
      desc: "Send high-intent prospects straight to your sales team's WhatsApp with pre-filled inquiries so you can close deals in real-time."
    },
    {
      icon: Compass,
      title: "Local Google Maps SEO (Top 3 Pack)",
      desc: "Rank at the very top of Google Maps for local city searches in Karachi, Lahore, Islamabad, and Faisalabad with verified reviews."
    },
    {
      icon: MousePointerClick,
      title: "High-Conversion Mobile Landing Pages",
      desc: "Fast-loading landing pages designed specifically for smartphone traffic with clear CTAs, trust badges, and WhatsApp click triggers."
    },
    {
      icon: BarChart2,
      title: "Transparent ROAS & Lead Tracking",
      desc: "Weekly Excel sheets and WhatsApp audio updates showing exact ad spend, cost per lead (CPL), and verified buyer phone numbers."
    }
  ];

  const faqs = [
    {
      q: "How quickly do qualified buyer leads begin arriving once campaigns go live?",
      a: "Qualified customer inquiries and direct WhatsApp chats typically begin generating within 24 to 48 hours of campaign launch. We conduct intensive A/B testing during the first 72 hours to rapidly lower your cost per lead (CPL)."
    },
    {
      q: "How is ad spend paid to advertising platforms like Meta and Google?",
      a: "Official ad spend is charged directly to your own company credit or debit card by Meta and Google. This gives you 100% financial transparency over every rupee spent. We charge a flat, transparent monthly management retainer."
    },
    {
      q: "Do you design creative graphics, video ads, and persuasive copywriting in-house?",
      a: "Yes. Our creative team produces high-converting ad visuals, carousel graphics, video reels, and localized bilingual copy engineered specifically for Pakistani buyer psychology."
    },
    {
      q: "How do you protect campaigns from fake bot clicks and low-intent inquiries?",
      a: "Instead of broad untargeted audiences, we implement precise geographic and demographic exclusions, device filtering, and two-step verification forms to ensure only genuine, decision-making buyers contact your sales desk."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-brand-teal selection:text-white flex flex-col">
      <Header />

      {/* TOP HERO BANNER */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-gradient-to-b from-lime-50/60 via-white to-white">
        <div className="absolute inset-0 pointer-events-none opacity-40 bg-tech-circuit-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-limeSoft text-brand-limeDark text-xs font-bold uppercase tracking-wider border border-brand-limeBorder shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-limeDark" />
              <span>Performance Marketing & ROAS Growth • Pakistani Market Specialist</span>
            </div>

            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15]">
              Targeted <span className="text-brand-limeDark">Digital Marketing & SEO</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Stop throwing money at empty likes and fake bot impressions. We run laser-focused Meta and Google ad campaigns that deliver real paying Pakistani customers straight to your WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <a
                href="#pricing"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-brand-charcoal bg-brand-lime hover:bg-brand-limeDark transition-all shadow-button-lime flex items-center justify-center gap-2"
              >
                <span>View Growth Packages & Retainers</span>
                <ArrowRight className="w-4 h-4 text-brand-charcoal" />
              </a>
              <a
                href="https://wa.me/923337221552?text=Hello%20NADICO%20Technologies,%20I%20want%20a%20free%20audit%20of%20my%20digital%20marketing%20campaigns."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Get Free Marketing Audit on WhatsApp</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Average ROAS</div>
                <div className="text-lg font-extrabold text-brand-limeDark">3.5x - 5.2x</div>
                <div className="text-[10px] text-slate-400">Verified Pakistani clients</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Lead Delivery</div>
                <div className="text-lg font-extrabold text-brand-limeDark">Within 48 Hrs</div>
                <div className="text-[10px] text-slate-400">Straight to your WhatsApp</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Reporting</div>
                <div className="text-lg font-extrabold text-brand-limeDark">100% Transparent</div>
                <div className="text-[10px] text-slate-400">Weekly audit spreadsheets</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <div className="text-xs text-slate-500 font-semibold">Creatives</div>
                <div className="text-lg font-extrabold text-brand-limeDark">Urdu & English</div>
                <div className="text-[10px] text-slate-400">High-converting copywriting</div>
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-limeSoft text-brand-limeDark text-[11px] font-bold uppercase tracking-wider mb-2">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>Verified Campaign Case Studies</span>
              </div>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Real Revenue Generated for Pakistani Businesses
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-600 bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-xs shrink-0">
              <span className="flex text-amber-400">
                {'★'.repeat(5)}
              </span>
              <span>4.9 / 5.0 Proven Growth Rating</span>
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
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-limeSoft text-brand-limeDark border border-brand-limeBorder">
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
                  <div className="text-[11px] text-brand-teal font-bold mt-0.5">{rev.company}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE MARKETING CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-limeDark bg-brand-limeSoft px-3 py-1 rounded-full border border-brand-limeBorder">
              Growth Engine
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Six Proven Pillars to Scale Your Sales Pipeline
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We focus exclusively on revenue-generating campaigns. Every ad copy, creative image, and keyword is tested against real Pakistani buyer psychology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((mod, idx) => {
              const Icon = mod.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-brand-limeDark hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-limeSoft border border-brand-limeBorder text-brand-limeDark flex items-center justify-center mb-4 group-hover:bg-brand-limeDark group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 mb-2 group-hover:text-brand-limeDark transition-colors">
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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-limeDark bg-brand-limeSoft px-3.5 py-1 rounded-full border border-brand-limeBorder">
              Transparent Growth Retainers
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Flexible Monthly Retainers Tailored to Your Ad Spend
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              No long lock-in contracts. You keep 100% control of your ad accounts, while our dedicated media buyers optimize campaigns daily for maximum ROAS.
            </p>
          </div>

          {/* PRICING CARDS WITH STARTING FROM MODEL */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            
            {/* TIER 1 */}
            <div 
              onClick={() => setSelectedTier('booster')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'booster' 
                  ? 'border-brand-limeDark shadow-card ring-2 ring-brand-limeDark/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Local Business Booster</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Small Business</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Perfect for local retail shops, clinics, institutes, and home businesses.</p>

                <div className="p-4 rounded-2xl bg-lime-50/70 border border-lime-100 mb-6">
                  <div className="text-xs text-brand-limeDark font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-brand-charcoal tracking-tight mt-0.5">
                    Rs. 25,000 <span className="text-xs font-bold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-brand-limeDark mt-1">Recommended ad spend: Rs. 30k - 60k/mo</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Meta (Facebook & Instagram) Ad Campaigns</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 8 Custom Designed Ad Banners & Creatives</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Urdu & English Copywriting</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Direct WhatsApp Lead Generation Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Bi-Weekly WhatsApp Performance Reports</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-brand-charcoal bg-brand-limeSoft hover:bg-brand-lime transition-colors"
              >
                Choose Local Booster
              </a>
            </div>

            {/* TIER 2 (RECOMMENDED) */}
            <div 
              onClick={() => setSelectedTier('growth')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'growth' 
                  ? 'border-brand-limeDark shadow-card ring-2 ring-brand-limeDark/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-brand-charcoal text-white text-[10px] font-extrabold uppercase tracking-wider">
                Highest Lead Volume
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Performance Accelerator</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-brand-limeSoft text-brand-limeDark font-bold">Recommended</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">For real estate developers, e-commerce brands, B2B services, and private schools.</p>

                <div className="p-4 rounded-2xl bg-brand-limeSoft border border-brand-limeBorder mb-6">
                  <div className="text-xs text-brand-limeDark font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-brand-charcoal tracking-tight mt-0.5">
                    Rs. 45,000 <span className="text-xs font-bold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-brand-limeDark mt-1">Recommended ad spend: Rs. 80k - 200k/mo</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Meta + Google Search & Display Ads</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> High-Converting Mobile Landing Page</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Retargeting Funnels for Lost Visitors</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> 16 Custom Graphics & 2 Animated Video Ads</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Dedicated Media Buyer & Weekly Strategy Call</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-brand-charcoal bg-brand-lime hover:bg-brand-limeDark transition-colors shadow-button-lime"
              >
                Choose Performance Accelerator
              </a>
            </div>

            {/* TIER 3 */}
            <div 
              onClick={() => setSelectedTier('enterprise')}
              className={`p-7 rounded-3xl bg-white border-2 transition-all cursor-pointer relative flex flex-col justify-between ${
                selectedTier === 'enterprise' 
                  ? 'border-brand-limeDark shadow-card ring-2 ring-brand-limeDark/20' 
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-xl text-slate-900">Omnichannel Scale</h3>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">Enterprise</span>
                </div>
                <p className="text-xs text-slate-500 mb-4">Complete digital acquisition takeover for nationwide brands and exporters.</p>

                <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 mb-6">
                  <div className="text-xs text-slate-700 font-semibold">Starting from only</div>
                  <div className="text-3xl font-extrabold text-slate-900 tracking-tight mt-0.5">
                    Rs. 85,000 <span className="text-xs font-bold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-600 mt-1">Recommended ad spend: Rs. 300k+/mo</div>
                </div>

                <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Meta, Google Search, YouTube & LinkedIn Ads</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Custom CRM Integration & Lead Status Tracking</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Comprehensive On-Page & Technical SEO Setup</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Unlimited Ad Variations & A/B Split Testing</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /> Daily WhatsApp Lead Monitoring & Dashboard</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="w-full py-3 rounded-xl font-bold text-xs text-center text-slate-800 bg-slate-200 hover:bg-slate-300 transition-colors"
              >
                Inquire Enterprise Retainer
              </a>
            </div>

          </div>

          {/* VISUAL GRAPH / COMPARISON BAR (REQUESTED BY USER) */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
            <h4 className="font-heading font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-brand-limeDark" />
              <span>Investment Comparison by Marketing Scale (Visual Cost Graph)</span>
            </h4>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Local Business Booster (Meta WhatsApp Leads)</span>
                  <span className="text-brand-limeDark font-bold">Starting from Rs. 25,000 / mo</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-brand-limeLight h-full rounded-full transition-all duration-500" style={{ width: '25%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Performance Accelerator (Meta + Google + Landing Page)</span>
                  <span className="text-brand-limeDark font-bold">Starting from Rs. 45,000 / mo</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-brand-lime h-full rounded-full transition-all duration-500" style={{ width: '55%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-700 mb-1">
                  <span>Omnichannel Scale (Full-Funnel CRM & Multi-Platform)</span>
                  <span className="text-brand-limeDark font-bold">Starting from Rs. 85,000 / mo</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div className="bg-brand-limeDark h-full rounded-full transition-all duration-500" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 mt-4 italic text-center">
              * Note: Ad spending is paid directly to Meta and Google through your verified credit/debit card, guaranteeing 100% financial transparency.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. DIRECT AUDIT & INQUIRY FORM (REQUESTED BY USER) */}
      {/* ========================================================================= */}
      <section id="contact" className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-card">
            
            <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-limeDark bg-brand-limeSoft px-3 py-1 rounded-full border border-brand-limeBorder">
                Free Growth Consultation
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Claim Your Free Pakistani Ad Campaign Audit
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed">
                Send us your current page or website link and our senior digital strategist will record a customized 5-minute video audit highlighting where your ad budget is leaking.
              </p>
            </div>

            {formSubmitted ? (
              <div className="p-6 rounded-2xl bg-lime-50 border border-brand-limeBorder text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-brand-limeDark mx-auto" />
                <h3 className="font-bold text-lg text-brand-charcoal">Audit Request Submitted!</h3>
                <p className="text-xs text-brand-charcoal">
                  Our media buyer will analyze your brand and send your personalized action plan on WhatsApp within 2 hours.
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
                      placeholder="e.g. Sheikh Naveed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
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
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Business / Brand Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Al-Miraj Builders"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Industry Category</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
                    >
                      <option>Real Estate & Construction</option>
                      <option>E-Commerce (Fashion & Apparel)</option>
                      <option>Private Schools & Academies</option>
                      <option>Healthcare & Medical Clinics</option>
                      <option>Solar & Industrial Engineering</option>
                      <option>B2B Corporate Services</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Monthly Advertising Budget</label>
                    <select
                      value={formData.monthlyAdBudget}
                      onChange={(e) => setFormData({ ...formData, monthlyAdBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
                    >
                      <option>Rs. 30,000 - 50,000 / month</option>
                      <option>Rs. 50,000 - 100,000 / month</option>
                      <option>Rs. 100,000 - 250,000 / month</option>
                      <option>Rs. 250,000+ / month (Enterprise)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Primary Target City</label>
                    <input
                      type="text"
                      placeholder="e.g. Karachi, Lahore, Islamabad, Nationwide"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">What is your biggest current advertising challenge?</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Getting high cost per click, leads are not answering WhatsApp, or need fresh ad videos..."
                    value={formData.goals}
                    onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-800 focus:outline-none focus:border-brand-limeDark bg-white"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock className="w-4 h-4 text-brand-limeDark" />
                    <span>Average reply time: under 15 minutes</span>
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs text-brand-charcoal bg-brand-lime hover:bg-brand-limeDark transition-all shadow-button-lime flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 text-brand-charcoal" />
                    <span>Request Free Audit on WhatsApp</span>
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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-limeDark bg-brand-limeSoft px-3 py-1 rounded-full border border-brand-limeBorder">
              Growth FAQ
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
              Frequently Asked Marketing Questions
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
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-brand-limeDark' : ''}`} />
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
