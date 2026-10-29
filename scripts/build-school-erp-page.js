import fs from 'fs';
import { htmlToJsx, schoolLines } from './generate-react.js';

// Lines 165 to 793 (0-indexed: 164 to 794)
const bodyHtml = schoolLines.slice(164, 794).join('\n');
let bodyJsx = htmlToJsx(bodyHtml);

const schoolPageComponent = `import React, { useEffect } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import FloatingWhatsApp from '../components/FloatingWhatsApp.jsx';

export default function SchoolErpPage() {
  useEffect(() => {
    // 1. Initialize Lucide Icons
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }

    // 2. Scroll Reveal Animations Observer
    const scrollRevealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      scrollRevealObserver.observe(el);
    });

    return () => scrollRevealObserver.disconnect();
  }, []);

  return (
    <div className="font-sans antialiased selection:bg-brand-teal selection:text-white relative flex flex-col min-h-screen">
      {/* Fixed IT & Digital Tech Background Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-50 bg-tech-circuit-overlay"></div>

      <Header />
      <main className="flex-1">
${bodyJsx}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
`;

fs.writeFileSync('src/pages/SchoolErpPage.jsx', schoolPageComponent);
console.log('src/pages/SchoolErpPage.jsx written successfully!');
