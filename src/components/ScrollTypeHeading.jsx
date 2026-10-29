import React, { useEffect, useRef } from 'react';

/**
 * High-performance, GPU-friendly scroll-triggered typewriter heading.
 * Automatically activates typing when scrolled into view without virtual DOM re-render lag.
 */
export default function ScrollTypeHeading({
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

  const fullText = `${prefix}${highlight}${suffix}`;
  const pLen = prefix.length;
  const hlLen = highlight.length;

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const curEl = cursorRef.current;
    if (!container || !textEl || !fullText) return;

    let timer = null;

    const startTyping = () => {
      if (isTypingRef.current) return;
      isTypingRef.current = true;

      if (curEl) curEl.style.display = 'inline-block';
      textEl.innerHTML = '';

      let count = 0;
      const total = fullText.length;

      timer = setInterval(() => {
        count += 2; // 2 characters per tick for fluid, snappy typing pace
        if (count >= total) {
          count = total;
          clearInterval(timer);
          timer = null;
          isTypingRef.current = false;

          // Render finalized HTML with highlight styling
          textEl.innerHTML = `${prefix}${highlight ? `<span class="${highlightClass}">${highlight}</span>` : ''}${suffix}`;

          // Keep cursor blinking for a short moment then hide
          setTimeout(() => {
            if (curEl && !isTypingRef.current) {
              curEl.style.display = 'none';
            }
          }, 1000);
        } else {
          const rPrefix = fullText.slice(0, Math.min(count, pLen));
          const rHl = count > pLen && highlight
            ? `<span class="${highlightClass}">${fullText.slice(pLen, Math.min(count, pLen + hlLen))}</span>`
            : '';
          const rSuffix = count > pLen + hlLen
            ? fullText.slice(pLen + hlLen, count)
            : '';

          textEl.innerHTML = rPrefix + rHl + rSuffix;
        }
      }, 24);
    };

    const resetToFull = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      isTypingRef.current = false;
      if (curEl) curEl.style.display = 'none';
      textEl.innerHTML = `${prefix}${highlight ? `<span class="${highlightClass}">${highlight}</span>` : ''}${suffix}`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          } else {
            resetToFull();
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [prefix, highlight, highlightClass, suffix, fullText]);

  return (
    <Component ref={containerRef} className={className}>
      <span ref={textRef}>
        {prefix}
        {highlight && <span className={highlightClass}>{highlight}</span>}
        {suffix}
      </span>
      <span
        ref={cursorRef}
        style={{ display: 'none' }}
        className={`inline-block w-1 sm:w-1.5 h-6 sm:h-7 md:h-8 ${cursorColor} ml-1.5 animate-pulse align-middle rounded-full`}
      ></span>
    </Component>
  );
}
