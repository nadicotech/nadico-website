import fs from 'fs';
import { htmlToJsx, indexLines } from './generate-react.js';

let headerHtml = indexLines.slice(396, 631).join('\n');

// 1. Remove raw event listeners/ids that we will handle with React state
let jsx = htmlToJsx(headerHtml);

// Header element
jsx = jsx.replace(
  'id="mainHeader"',
  'id="mainHeader" className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200 ${scrolled ? \'shadow-md\' : \'\'}`}'
);
jsx = jsx.replace('class="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-shadow duration-200"', '');

// Mobile menu toggle button
jsx = jsx.replace(
  '<button id="mobileMenuBtn"',
  '<button id="mobileMenuBtn" onClick={() => setDrawerOpen(true)}'
);

// Close drawer button
jsx = jsx.replace(
  '<button id="closeDrawerBtn"',
  '<button id="closeDrawerBtn" onClick={() => setDrawerOpen(false)}'
);

// Overlay
jsx = jsx.replace(
  'id="mobileDrawerOverlay" className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 hidden transition-opacity duration-300"',
  'id="mobileDrawerOverlay" onClick={() => setDrawerOpen(false)} className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${drawerOpen ? \'block opacity-100\' : \'hidden opacity-0\'}`}'
);

// Drawer container
jsx = jsx.replace(
  'id="mobileDrawer" className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto"',
  'id="mobileDrawer" className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-y-auto ${drawerOpen ? \'translate-x-0\' : \'translate-x-full\'}`}'
);

// Mobile nav links closing drawer
jsx = jsx.replace(/className="mobile-nav-link/g, 'onClick={() => setDrawerOpen(false)} className="mobile-nav-link');

const fullComponent = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  });

  return (
    <>
${jsx}
    </>
  );
}
`;

fs.writeFileSync('src/components/Header.jsx', fullComponent);
console.log('src/components/Header.jsx written successfully!');
