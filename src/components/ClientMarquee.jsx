import React from 'react';

export default function ClientMarquee() {
  return (
    <>
{/* ========================================================================= */}
  {/* 4. REAL CLIENT TRUST & REPUTATION BAR (LARGE COLORFUL CONTINUOUS MARQUEE) */}
  {/* ========================================================================= */}
  <section className="py-10 bg-slate-50 border-y border-slate-200 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll reveal-up">
      
      <div className="text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Trusted by leading educational networks, commercial institutions & corporate clients across Pakistan
        </p>
      </div>

      {/* Centered Carousel Track Showing Exactly 4 Prominent Logos at Once */}
      <div className="max-w-4xl mx-auto relative overflow-hidden py-2">
        
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 via-slate-50/90 to-transparent z-10 pointer-events-none"></div>

        {/* Continuous 3-Set Marquee with Large Logos & 0 Gap Seamless Loop */}
        <div className="animate-continuous-marquee items-center gap-6 sm:gap-14 md:gap-20">
          
          {/* Set 1 */}
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/beaconhouse.png" alt="Beaconhouse School System" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/grace-valley.webp" alt="Grace Valley School" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/agu.webp" alt="AGU Educational Group" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/zawwar.webp" alt="Zawwar Educational Complex" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>

          {/* Set 2 (Seamless loop transition) */}
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/beaconhouse.png" alt="Beaconhouse School System" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/grace-valley.webp" alt="Grace Valley School" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/agu.webp" alt="AGU Educational Group" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/zawwar.webp" alt="Zawwar Educational Complex" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>

          {/* Set 3 (Buffer for complete continuous loop) */}
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/beaconhouse.png" alt="Beaconhouse School System" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/grace-valley.webp" alt="Grace Valley School" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/agu.webp" alt="AGU Educational Group" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>
          <div className="flex items-center justify-center shrink-0 w-24 sm:w-36 md:w-44">
            <img src="assets/zawwar.webp" alt="Zawwar Educational Complex" className="h-9 sm:h-12 md:h-16 w-auto object-contain hover:scale-105 transition-transform" />
          </div>

        </div>

      </div>

    </div>
  </section>
    </>
  );
}
