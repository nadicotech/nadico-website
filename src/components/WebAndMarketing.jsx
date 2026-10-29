import { ArrowRight, CheckCircle, Code, Layout, TrendingUp } from 'lucide-react';
import React from 'react';
import ScrollTypewriterTitle from './ScrollTypewriterTitle.jsx';

export default function WebAndMarketing() {
  return (
    <>
{/* ========================================================================= */}
  {/* 6. ADDITIONAL TECH SERVICES: WEBSITE DESIGN & DIGITAL MARKETING */}
  {/* ========================================================================= */}
  <section id="web-development" className="py-20 lg:py-24 bg-slate-50/80 tech-icons-bg-section6 border-t border-slate-200 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 reveal-on-scroll reveal-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tealSoft border border-brand-tealBorder text-brand-teal text-xs font-bold uppercase tracking-wider">
          <Code className="w-3.5 h-3.5" /> Engineering & Growth
        </div>
        <ScrollTypewriterTitle
          as="h2"
          className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight"
          prefix="Web Engineering & "
          highlight="Digital Growth Engine"
          highlightClass="teal-gradient-text"
        />
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Need more than management software? We also build lightning-fast custom websites and run targeted digital marketing campaigns that bring real inquiries and paying customers to your business.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* SERVICE 1: WEBSITE DESIGN & CUSTOM DEVELOPMENT */}
        <div className="tech-box-texture tech-icons-bg-web-engine tech-transition-box rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-card relative group overflow-hidden reveal-on-scroll reveal-left">
          <div className="w-14 h-14 rounded-2xl bg-brand-tealSoft border border-brand-tealBorder text-brand-teal flex items-center justify-center mb-6">
            <Layout className="w-7 h-7" />
          </div>

          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-teal transition-colors">
            Custom Website Design & Web Applications
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            From corporate websites to custom customer portals, we design and code platforms that load in under a second, look stunning on every phone, and give your business instant credibility.
          </p>

          <div className="space-y-3 text-xs text-slate-700 mb-8">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Modern Tech: Built with Next.js, React, and clean code that never slows down</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Mobile-First Design: Looks sharp and works smoothly on smartphones, tablets, and desktops</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Secure & Scalable Backends: Reliable databases and APIs designed to handle heavy traffic</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Google & SEO Ready: Optimized for fast loading speeds and high search rankings</span>
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-tealDark transition-colors">
            <span>Discuss Your Web Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* SERVICE 2: DIGITAL MARKETING & BRAND ACCELERATION */}
        <div id="digital-marketing" className="tech-box-texture tech-icons-bg-digital-growth tech-transition-box rounded-3xl p-8 sm:p-9 border border-slate-200 shadow-card relative group overflow-hidden reveal-on-scroll reveal-right delay-150">
          <div className="w-14 h-14 rounded-2xl bg-brand-limeSoft border border-brand-limeBorder text-brand-limeDark flex items-center justify-center mb-6">
            <TrendingUp className="w-7 h-7" />
          </div>

          <h3 className="font-heading text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand-limeDark transition-colors">
            Digital Marketing & Brand Acceleration
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Stop wasting budget on empty clicks and fake impressions. We set up focused campaigns that reach the exact decision-makers searching for your services and convert them into paying clients.
          </p>

          <div className="space-y-3 text-xs text-slate-700 mb-8">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-brand-limeDark" />
              <span>Google SEO: Rank at the top when customers search for your products or services</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-brand-limeDark" />
              <span>Targeted Ad Campaigns: Profitable advertising across Google, Facebook, Instagram, and LinkedIn</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-brand-limeDark" />
              <span>Direct Inquiries: WhatsApp click-to-chat funnels and CRM workflows so no lead is missed</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-brand-limeDark" />
              <span>Brand Identity: Professional logos, marketing graphics, and messaging that build trust</span>
            </div>
          </div>

          <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold text-brand-limeDark hover:text-brand-charcoal transition-colors">
            <span>Boost Your Digital Presence</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>

    </div>
  </section>
    </>
  );
}
