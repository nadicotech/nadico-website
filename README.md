# NadiCo Technologies - React Application

A modern, high-performance corporate web platform built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM**.

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000` (or the port indicated in your terminal).

### 3. Build for Production
```bash
npm run build
```
The optimized production assets will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

- `src/`
  - `components/`
    - `Header.jsx`: Top announcement bar, sticky header, and responsive slide-out mobile drawer.
    - `HeroSection.jsx`: 4-Slide interactive Hero Slider with auto-play, pause on hover, next/prev arrow buttons, top tabs, and synchronized dual-device showcase (Laptop & Edge Mobile Phone).
    - `ClientMarquee.jsx`: Seamless continuous client trust marquee (Beaconhouse, Grace Valley, AGU, Zawwar Academy).
    - `ErpSolutions.jsx`: Enterprise ERP solutions (School ERP, Hospital HMS, Retail POS & Inventory).
    - `WebAndMarketing.jsx`: Bespoke web engineering and high-ROI digital marketing showcase.
    - `WhyNadico.jsx`: Corporate advantages and institutional trust factors.
    - `ContactSection.jsx`: Demo request & consultation form with direct WhatsApp redirection.
    - `Footer.jsx`: Full-width edge-to-edge footer with branding, system links, and contact information.
    - `FloatingWhatsApp.jsx`: Floating quick-contact WhatsApp action button.
  - `pages/`
    - `HomePage.jsx`: Main homepage (`/`).
    - `SchoolErpPage.jsx`: Dedicated School Management ERP page (`/school-erp` and `/school-erp.html`) with all 14 core modules, 2FA security card, CAIE/BISE marksheets, comparison matrix, and FAQs.
  - `App.jsx`: Client-side routing with smooth scroll-to-top restoration.
  - `main.jsx`: React entry point.
  - `index.css`: Custom animations, keyframes, scrollbars, and tech background textures.
- `public/`: Static assets (`LOGO.png`, `favicon.png`, `favicon.svg`, client logos).
- `index.static.html`: Original static HTML backup.
- `school-erp.static.html`: Original static School ERP backup.
