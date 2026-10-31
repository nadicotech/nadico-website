import React, { useState } from 'react';
import { Calculator, Clock, Banknote, TrendingUp, Video, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import WhatsAppIcon from './WhatsAppIcon.jsx';

export default function SchoolSavingsCalculator({ onOpenZoom, showExploreLink = false }) {
  const [studentSlider, setStudentSlider] = useState(500);

  const hoursSaved = Math.min(48, Math.max(16, Math.floor(studentSlider / 22)));
  const moneySaved = Math.round(studentSlider * 28);

  const handleZoomClick = () => {
    if (onOpenZoom) {
      onOpenZoom();
    } else {
      const msg = `Hello NadiCo Technologies! I used your School ERP Savings Calculator for ${studentSlider} students. I would like to book a 15-Minute Free Live Zoom Demo.`;
      window.open(`https://wa.me/923337221552?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-card">
      <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive School ROI & Savings Calculator</span>
        </div>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
          See How Many Hours & Rupees Your Campus Saves Every Month
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl mx-auto">
          Select your active student enrollment below to calculate exact administrative hours and financial expenses saved compared to outdated paper registers and expensive SMS telco packages.
        </p>
      </div>

      {/* Student Count Slider */}
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-bold text-slate-700">Select Student Strength:</span>
          <div className="flex items-baseline gap-1 bg-brand-tealSoft px-4 py-1.5 rounded-2xl border border-brand-tealBorder shadow-2xs">
            <span className="text-2xl sm:text-3xl font-extrabold text-brand-tealDark">{studentSlider.toLocaleString()}</span>
            <span className="text-xs font-bold text-brand-teal">Students</span>
          </div>
        </div>

        <input
          type="range"
          min="100"
          max="2500"
          step="25"
          value={studentSlider}
          onChange={(e) => setStudentSlider(Number(e.target.value))}
          className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-teal"
          aria-label="Student Enrollment Slider"
        />

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
          <button
            type="button"
            onClick={() => setStudentSlider(250)}
            className={`px-3 py-1.5 rounded-xl border transition-all ${studentSlider === 250 ? 'bg-brand-teal text-white border-brand-teal shadow-xs' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}`}
          >
            250 Students
          </button>
          <button
            type="button"
            onClick={() => setStudentSlider(500)}
            className={`px-3 py-1.5 rounded-xl border transition-all ${studentSlider === 500 ? 'bg-brand-teal text-white border-brand-teal shadow-xs' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}`}
          >
            500 Students
          </button>
          <button
            type="button"
            onClick={() => setStudentSlider(1000)}
            className={`px-3 py-1.5 rounded-xl border transition-all ${studentSlider === 1000 ? 'bg-brand-teal text-white border-brand-teal shadow-xs' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}`}
          >
            1,000 Students
          </button>
          <button
            type="button"
            onClick={() => setStudentSlider(1800)}
            className={`px-3 py-1.5 rounded-xl border transition-all ${studentSlider === 1800 ? 'bg-brand-teal text-white border-brand-teal shadow-xs' : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'}`}
          >
            1,800+ Students
          </button>
        </div>

        {/* Real-time Dynamic Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          
          {/* Metric 1: Hours Saved */}
          <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-center space-y-1 shadow-xs">
            <div className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider flex items-center justify-center gap-1">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Time Saved Monthly</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-900 tracking-tight">
              ~{hoursSaved} Hours
            </div>
            <p className="text-[11px] text-emerald-700 leading-tight">
              Zero manual register writing, automated fee reconciliations & 1-click exam cards.
            </p>
          </div>

          {/* Metric 2: Money Saved */}
          <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-center space-y-1 shadow-xs">
            <div className="text-[11px] font-bold text-blue-800 uppercase tracking-wider flex items-center justify-center gap-1">
              <Banknote className="w-3.5 h-3.5 text-blue-600" />
              <span>Stationery & SMS Saved</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-blue-900 tracking-tight">
              ~Rs. {moneySaved.toLocaleString()}
            </div>
            <p className="text-[11px] text-blue-700 leading-tight">
              Free automated WhatsApp notifications eliminate expensive monthly telco SMS packages.
            </p>
          </div>

          {/* Metric 3: Recovery Boost */}
          <div className="p-5 rounded-2xl bg-teal-50/80 border border-teal-200 text-center space-y-1 shadow-xs">
            <div className="text-[11px] font-bold text-teal-800 uppercase tracking-wider flex items-center justify-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-teal-600" />
              <span>Fee Recovery Boost</span>
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-tealDark tracking-tight">
              +22% Faster
            </div>
            <p className="text-[11px] text-teal-700 leading-tight">
              Authentic 3-part bank deposit slips (Meezan/HBL) & WhatsApp fee reminder alerts.
            </p>
          </div>

        </div>

        {/* Dual CTAs directly inside calculator */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
          <div className="text-left space-y-0.5">
            <div className="text-xs font-bold text-brand-limeLight uppercase tracking-wider">
              Transparent Investment
            </div>
            <div className="text-sm sm:text-base font-extrabold">
              Starting from only Rs. 30 per student / month
            </div>
            <div className="text-[11px] text-slate-400">
              Zero charges during summer vacation months on inactive student records.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleZoomClick}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl font-bold text-xs text-brand-charcoal bg-brand-lime hover:bg-brand-limeLight transition-all shadow-button-lime flex items-center justify-center gap-1.5"
            >
              <Video className="w-4 h-4 text-brand-charcoal" />
              <span>Book 15-Min Zoom Demo</span>
            </button>
            <a
              href={`https://wa.me/923337221552?text=Hello%20NadiCo%20Technologies,%20I%20used%20your%20Savings%20Calculator%20for%20${studentSlider}%20students.%20I%20want%20to%20get%20a%20detailed%20quotation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all flex items-center justify-center shrink-0"
              aria-label="Inquire on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {showExploreLink && (
          <div className="pt-2 text-center">
            <Link
              to="/school-erp"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-limeDark transition-colors"
            >
              <span>Explore All 14 School ERP Modules, Live Demo & Full Pricing</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
