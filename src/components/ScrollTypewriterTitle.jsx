import React, { useEffect, useRef, useState } from 'react';

/**
 * World-class Scroll-Triggered Reactive Typewriter Heading.
 * Automatically types out whenever the element appears into view from hidden state (on scroll down or up).
 * - Zero layout shift (maintains structural height).
 * - High-speed, fluid 60fps character streaming (snappy, energetic, modern).
 * - Re-animates every time it reappears after scrolling away.
 * - Preserves multi-color spans and gradients without raw HTML glitches.
 */
export default function ScrollTypewriterTitle({
  as: Component = 'h2',
  className = '',
  prefix = '',
  highlight = '',
  highlightClass = 'teal-gradient-text',
  suffix = '',
  cursorColor = 'bg-brand-teal',
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const cursorRef = useRef(null);
  const isTypingRef = useRef(false);

  const fullHeadline = `${prefix}${highlight}${suffix}`;
  const pLen = prefix.length;
  const hlLen = highlight.length;

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const curEl = cursorRef.current;
    if (!container || !textEl) return;

    let timer = null;
    let cursorFadeTimer = null;

    const startTyping = () => {
      if (isTypingRef.current) return;
      isTypingRef.current = true;

      if (curEl) {
        curEl.style.opacity = '1';
        curEl.style.display = 'inline-block';
      }

      // Fast, snappy typing (2 characters every 16ms ~ 60fps stream)
      let count = 0;
      const total = fullHeadline.length;
      textEl.innerHTML = '';

      timer = setInterval(() => {
        count += 2;
        if (count >= total) {
          count = total;
          clearInterval(timer);
          timer = null;
          isTypingRef.current = false;

          // Render completed HTML
          textEl.innerHTML = `${prefix}${highlight ? `<span class="${highlightClass}">${highlight}</span>` : ''}${suffix}`;

          // Fade cursor after typing completes
          cursorFadeTimer = setTimeout(() => {
            if (curEl && !isTypingRef.current) {
              curEl.style.opacity = '0';
              setTimeout(() => {
                if (curEl && !isTypingRef.current) curEl.style.display = 'none';
              }, 300);
            }
          }, 800);
        } else {
          const rPrefix = fullHeadline.slice(0, Math.min(count, pLen));
          const rHl = count > pLen && highlight
            ? `<span class="${highlightClass}">${fullHeadline.slice(pLen, Math.min(count, pLen + hlLen))}</span>`
            : '';
          const rSuffix = count > pLen + hlLen
            ? fullHeadline.slice(pLen + hlLen, count)
            : '';

          textEl.innerHTML = rPrefix + rHl + rSuffix;
        }
      }, 16);
    };

    const resetOnExit = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      if (cursorFadeTimer) {
        clearTimeout(cursorFadeTimer);
        cursorFadeTimer = null;
      }
      isTypingRef.current = false;
      if (curEl) {
        curEl.style.opacity = '0';
        curEl.style.display = 'none';
      }
      // Leave empty or reset ready for next enter
      textEl.innerHTML = '';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          } else {
            // Only reset when element has scrolled completely off-screen (120px above or 10% below)
            resetOnExit();
          }
        });
      },
      {
        threshold: 0.05,
        // Generous positive top margin (+120px) guarantees it NEVER resets or jitters while in view
        rootMargin: '120px 0px -10% 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
      if (cursorFadeTimer) clearTimeout(cursorFadeTimer);
    };
  }, [prefix, highlight, highlightClass, suffix, fullHeadline]);

  return (
    <Component
      ref={containerRef}
      className={`relative inline-block w-full ${className}`}
    >
      {/* 
        INVISIBLE SIZER LAYER:
        Permanently occupies the EXACT full dimensions of the completed headline in the normal document flow.
        Guarantees that container height NEVER drops or shifts by even a fraction of a pixel during typing or resets.
      */}
      <span className="invisible select-none pointer-events-none block" aria-hidden="true">
        {prefix}
        {highlight && <span className={highlightClass}>{highlight}</span>}
        {suffix}
      </span>

      {/* 
        VISIBLE DYNAMIC TYPING LAYER:
        Positions directly on top of the sizer, streaming characters in real-time with zero layout oscillation.
      */}
      <span className="absolute inset-0 top-0 left-0 w-full block">
        <span ref={textRef}>
          {prefix}
          {highlight && <span className={highlightClass}>{highlight}</span>}
          {suffix}
        </span>
        <span
          ref={cursorRef}
          style={{ display: 'none', transition: 'opacity 0.25s ease' }}
          className={`inline-block w-1 sm:w-1.5 h-[0.85em] ${cursorColor} ml-1.5 animate-pulse align-middle rounded-full`}
        ></span>
      </span>
    </Component>
  );
}
