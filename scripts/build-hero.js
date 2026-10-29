import fs from 'fs';
import { htmlToJsx, indexLines } from './generate-react.js';

let heroHtml = indexLines.slice(633, 2582).join('\n');
let jsx = htmlToJsx(heroHtml);

// 1. Top Slide Pills
for (let i = 0; i < 4; i++) {
  const oldPill = new RegExp(`id="heroNavTab${i}" class="hero-nav-pill[^"]*"`, 'g');
  jsx = jsx.replace(
    oldPill,
    `id="heroNavTab${i}" onClick={() => goToSlide(${i})} className={\`hero-nav-pill px-3 sm:px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition-all \${currentSlide === ${i} ? 'font-bold bg-brand-teal text-white shadow-sm' : 'font-semibold text-slate-600 hover:text-slate-900'}\`}`
  );
}

// 2. Next and Prev Buttons
jsx = jsx.replace('onclick="prevHeroSlide()"', 'onClick={prevSlide}');
jsx = jsx.replace('onclick="nextHeroSlide()"', 'onClick={nextSlide}');

// 3. Slides Visibility
for (let i = 0; i < 4; i++) {
  const oldSlideRegex = new RegExp(`id="heroSlide${i}" className="hero-slide space-y-4 sm:space-y-5 transition-all duration-500 [^"]*"`, 'g');
  jsx = jsx.replace(
    oldSlideRegex,
    `id="heroSlide${i}" className={\`hero-slide space-y-4 sm:space-y-5 transition-all duration-500 \${currentSlide === ${i} ? 'opacity-100 block' : 'opacity-0 hidden'}\`}`
  );
}

// 4. Indicator Dots
for (let i = 0; i < 4; i++) {
  const oldDotRegex = new RegExp(`<button onclick="goToHeroSlide\\(${i}\\)" aria-label="Go to slide ${i + 1}" class="hero-dot[^"]*"`, 'g');
  jsx = jsx.replace(
    oldDotRegex,
    `<button onClick={() => goToSlide(${i})} aria-label="Go to slide ${i + 1}" className={\`hero-dot rounded-full transition-all \${currentSlide === ${i} ? 'w-7 h-2 bg-brand-teal' : 'w-2.5 h-2 bg-slate-300 hover:bg-slate-400'}\`}`
  );
}

// 5. Slider Container Hover (pause on hover)
jsx = jsx.replace(
  'id="heroSliderContainer" className="relative group/slider max-w-5xl mx-auto"',
  'id="heroSliderContainer" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="relative group/slider max-w-5xl mx-auto"'
);

// 6. Laptop URL Bar Dynamic URL
jsx = jsx.replace(
  '<span id="laptopUrlBar" className="truncate font-mono font-medium">thereadlyerp.vercel.app/rehan • NADICO ERP</span>',
  '<span id="laptopUrlBar" className="truncate font-mono font-medium">{laptopUrls[activeSuite]}</span>'
);

// 7. Laptop Suite Views Visibility
jsx = jsx.replace('id="viewSchoolERP" className="h-full flex flex-col justify-between overflow-hidden"', 'id="viewSchoolERP" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === \'school\' ? \'\' : \'hidden\'}`}');
jsx = jsx.replace('id="viewHospitalHMS" className="hidden h-full flex flex-col justify-between overflow-hidden"', 'id="viewHospitalHMS" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === \'hospital\' ? \'\' : \'hidden\'}`}');
jsx = jsx.replace('id="viewInventoryPOS" className="hidden h-full flex flex-col justify-between overflow-hidden"', 'id="viewInventoryPOS" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === \'inventory\' ? \'\' : \'hidden\'}`}');
jsx = jsx.replace('id="viewWebEngineering" className="hidden h-full flex flex-col justify-between overflow-hidden"', 'id="viewWebEngineering" className={`h-full flex flex-col justify-between overflow-hidden ${activeSuite === \'web\' ? \'\' : \'hidden\'}`}');

// 8. Mobile Suite Views Visibility
jsx = jsx.replace('id="mobileViewSchool" className="space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between"', 'id="mobileViewSchool" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === \'school\' ? \'\' : \'hidden\'}`}');
jsx = jsx.replace('id="mobileViewHospital" className="hidden space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between"', 'id="mobileViewHospital" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === \'hospital\' ? \'\' : \'hidden\'}`}');
jsx = jsx.replace('id="mobileViewInventory" className="hidden space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between"', 'id="mobileViewInventory" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === \'inventory\' ? \'\' : \'hidden\'}`}');
jsx = jsx.replace('id="mobileViewWeb" className="hidden space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between"', 'id="mobileViewWeb" className={`space-y-1 sm:space-y-2 flex-1 flex flex-col justify-between ${activeSuite === \'web\' ? \'\' : \'hidden\'}`}');

// 9. Laptop School SubTabs
const schoolTabs = ['dashboard', 'students', 'fees', 'reports', 'attendance', 'manual'];
schoolTabs.forEach(t => {
  // SubView visibility
  jsx = jsx.replace(
    new RegExp(`id="subView-school-${t}" className="([^"]*)"`),
    `id="subView-school-${t}" className={\`$1 \${schoolSubTab === '${t}' ? '' : 'hidden'}\`}`
  );
  // Sidebar button click & active style
  jsx = jsx.replace(
    new RegExp(`onclick="switchLaptopSubTab\\('school', '${t}'\\)" id="sideBtn-school-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setSchoolSubTab('${t}')} id="sideBtn-school-${t}" className={\`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors \${schoolSubTab === '${t}' ? 'bg-brand-teal text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}\`}`
  );
});

// Breadcrumbs
jsx = jsx.replace(
  '<span id="schoolBreadcrumbTitle" className="text-brand-teal font-semibold">Institutional Operations</span>',
  '<span id="schoolBreadcrumbTitle" className="text-brand-teal font-semibold">{schoolBreadcrumbs[schoolSubTab]}</span>'
);

// 10. Laptop Hospital SubTabs
const hospTabs = ['dashboard', 'opd', 'beds', 'pharmacy', 'lab'];
hospTabs.forEach(t => {
  jsx = jsx.replace(
    new RegExp(`id="subView-hospital-${t}" className="([^"]*)"`),
    `id="subView-hospital-${t}" className={\`$1 \${hospitalSubTab === '${t}' ? '' : 'hidden'}\`}`
  );
  jsx = jsx.replace(
    new RegExp(`onclick="switchLaptopSubTab\\('hospital', '${t}'\\)" id="sideBtn-hospital-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setHospitalSubTab('${t}')} id="sideBtn-hospital-${t}" className={\`w-full flex items-center justify-center sm:justify-start gap-1.5 p-0.5 sm:px-2 sm:py-1 rounded text-left transition-colors \${hospitalSubTab === '${t}' ? 'bg-sky-700 text-white font-bold' : 'hover:bg-slate-200 text-slate-700'}\`}`
  );
});
jsx = jsx.replace(
  '<span id="hospitalBreadcrumbTitle" className="text-sky-700 font-semibold">Clinical Care Overview</span>',
  '<span id="hospitalBreadcrumbTitle" className="text-sky-700 font-semibold">{hospitalBreadcrumbs[hospitalSubTab]}</span>'
);

// 11. Laptop Inventory SubTabs
const invTabs = ['dashboard', 'pos', 'products', 'po'];
invTabs.forEach(t => {
  jsx = jsx.replace(
    new RegExp(`id="subView-inventory-${t}" className="([^"]*)"`),
    `id="subView-inventory-${t}" className={\`$1 \${inventorySubTab === '${t}' ? '' : 'hidden'}\`}`
  );
  jsx = jsx.replace(
    new RegExp(`onclick="switchLaptopSubTab\\('inventory', '${t}'\\)" id="sideBtn-inventory-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setInventorySubTab('${t}')} id="sideBtn-inventory-${t}" className={\`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all \${inventorySubTab === '${t}' ? 'bg-emerald-700 text-white font-bold shadow-xs' : 'hover:bg-emerald-800 text-white font-medium'}\`}`
  );
});
jsx = jsx.replace(
  '<span id="inventoryBreadcrumbTitle" className="text-emerald-700 font-semibold">Live POS & Turnover</span>',
  '<span id="inventoryBreadcrumbTitle" className="text-emerald-700 font-semibold">{inventoryBreadcrumbs[inventorySubTab]}</span>'
);

// 12. Laptop Web SubTabs
const webTabs = ['speed', 'architecture', 'seo', 'security'];
webTabs.forEach(t => {
  jsx = jsx.replace(
    new RegExp(`id="subView-web-${t}" className="([^"]*)"`),
    `id="subView-web-${t}" className={\`$1 \${webSubTab === '${t}' ? '' : 'hidden'}\`}`
  );
  jsx = jsx.replace(
    new RegExp(`onclick="switchLaptopSubTab\\('web', '${t}'\\)" id="sideBtn-web-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setWebSubTab('${t}')} id="sideBtn-web-${t}" className={\`w-full flex items-center justify-center sm:justify-start gap-1.5 p-1 sm:px-2 sm:py-1 rounded-lg text-left transition-all \${webSubTab === '${t}' ? 'bg-brand-teal text-white font-bold shadow-xs' : 'hover:bg-slate-800 text-white font-medium'}\`}`
  );
});
jsx = jsx.replace(
  '<span id="webBreadcrumbTitle" className="text-brand-teal font-semibold">Speed, SEO & Conversions</span>',
  '<span id="webBreadcrumbTitle" className="text-brand-teal font-semibold">{webBreadcrumbs[webSubTab]}</span>'
);

// 13. Mobile Tabs: School
const mobSchoolTabs = ['rollcall', 'grades', 'fees', 'home'];
mobSchoolTabs.forEach(t => {
  jsx = jsx.replace(
    new RegExp(`id="mobileSubTab-school-${t}" className="([^"]*)"`),
    `id="mobileSubTab-school-${t}" className={\`$1 \${mobSchoolTab === '${t}' ? '' : 'hidden'}\`}`
  );
  jsx = jsx.replace(
    new RegExp(`onclick="switchMobileSubTab\\('school', '${t}'\\)" id="mobBtn-school-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setMobSchoolTab('${t}')} id="mobBtn-school-${t}" className={\`flex flex-col items-center transition-colors \${mobSchoolTab === '${t}' ? 'text-brand-teal font-bold' : 'text-slate-400 hover:text-brand-teal'}\`}`
  );
});

// 14. Mobile Tabs: Hospital
const mobHospTabs = ['queue', 'emr', 'labs', 'pharmacy'];
mobHospTabs.forEach(t => {
  jsx = jsx.replace(
    new RegExp(`id="mobileSubTab-hospital-${t}" className="([^"]*)"`),
    `id="mobileSubTab-hospital-${t}" className={\`$1 \${mobHospitalTab === '${t}' ? '' : 'hidden'}\`}`
  );
  jsx = jsx.replace(
    new RegExp(`onclick="switchMobileSubTab\\('hospital', '${t}'\\)" id="mobBtn-hospital-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setMobHospitalTab('${t}')} id="mobBtn-hospital-${t}" className={\`flex flex-col items-center transition-colors \${mobHospitalTab === '${t}' ? 'text-sky-700 font-bold' : 'text-slate-400 hover:text-sky-700'}\`}`
  );
});

// 15. Mobile Tabs: Inventory
const mobInvTabs = ['scan', 'cart', 'stock'];
mobInvTabs.forEach(t => {
  jsx = jsx.replace(
    new RegExp(`id="mobileSubTab-inventory-${t}" className="([^"]*)"`),
    `id="mobileSubTab-inventory-${t}" className={\`$1 \${mobInventoryTab === '${t}' ? '' : 'hidden'}\`}`
  );
  jsx = jsx.replace(
    new RegExp(`onclick="switchMobileSubTab\\('inventory', '${t}'\\)" id="mobBtn-inventory-${t}" class(?:Name)?="[^"]*"`, 'g'),
    `onClick={() => setMobInventoryTab('${t}')} id="mobBtn-inventory-${t}" className={\`flex flex-col items-center transition-colors \${mobInventoryTab === '${t}' ? 'text-emerald-700 font-bold' : 'text-slate-400 hover:text-emerald-700'}\`}`
  );
});

// 16. Interactive Student Attendance Toggles
for (let s = 1; s <= 3; s++) {
  jsx = jsx.replace(
    'onclick="toggleStudentAttendance(this)"',
    `onClick={() => toggleAttendance(${s - 1})}`
  );
}

// 17. Interactive Hospital Call Next
jsx = jsx.replace(
  'onclick="toggleHospitalPatientStatus(this)"',
  'onClick={togglePatientStatus}'
);

// 18. Interactive Inventory Scan Count
jsx = jsx.replace(
  'onclick="toggleInventoryScanCount(this)"',
  'onClick={handleScanClick}'
);

const fullComponent = `import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const suites = ['school', 'hospital', 'inventory', 'web'];

const laptopUrls = {
  school: 'thereadlyerp.vercel.app/rehan • NADICO ERP',
  hospital: 'nadico-hms.cloud/clinical-ops • NADICO HMS',
  inventory: 'nadico-pos.store/terminal-checkout • NADICO POS',
  web: 'nadicotech.com/web-engineering • NADICO Web Platform'
};

const schoolBreadcrumbs = {
  dashboard: 'Dashboard & Financial Analytics',
  students: 'Student Directory & Admissions',
  fees: 'Fee Challans & Bank Reconciliation',
  reports: 'Official Terminal Exam Report Cards',
  attendance: 'Biometric Attendance Hardware Log',
  manual: 'Institutional User Manual'
};

const hospitalBreadcrumbs = {
  dashboard: 'Clinical Care Overview',
  opd: 'Live OPD Consultation Queue',
  beds: 'Inpatient (IPD) Bed Allocations',
  pharmacy: 'Hospital Pharmacy POS',
  lab: 'Pathology Diagnostics Workstation'
};

const inventoryBreadcrumbs = {
  dashboard: 'POS Overview & Turnover Velocity',
  pos: 'Active Barcode Cash Register',
  products: 'Warehouse SKU Inventory Catalog',
  po: 'Supplier Purchase Orders & Deliveries'
};

const webBreadcrumbs = {
  speed: 'Speed, SEO & Conversions',
  architecture: 'Next.js Stack & Cloud Scalability',
  seo: 'Technical SEO & Programmatic Schema',
  security: 'SSL Grade A+ & Enterprise WAF'
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSuite, setActiveSuite] = useState('school');
  const [paused, setPaused] = useState(false);

  // Subtabs
  const [schoolSubTab, setSchoolSubTab] = useState('dashboard');
  const [hospitalSubTab, setHospitalSubTab] = useState('dashboard');
  const [inventorySubTab, setInventorySubTab] = useState('dashboard');
  const [webSubTab, setWebSubTab] = useState('speed');

  // Mobile Subtabs
  const [mobSchoolTab, setMobSchoolTab] = useState('rollcall');
  const [mobHospitalTab, setMobHospitalTab] = useState('queue');
  const [mobInventoryTab, setMobInventoryTab] = useState('scan');

  // Interactive buttons
  const [attendance, setAttendance] = useState(['PRESENT', 'PRESENT', 'LEAVE']);
  const [patientStatus, setPatientStatus] = useState('CALL NEXT');
  const [scanCount, setScanCount] = useState(1);
  const [scanButtonText, setScanButtonText] = useState('SCAN SKU #890124');
  const [scanButtonColor, setScanButtonColor] = useState('bg-emerald-600 hover:bg-emerald-500');

  const goToSlide = (idx) => {
    const nextIdx = (idx + 4) % 4;
    setCurrentSlide(nextIdx);
    setActiveSuite(suites[nextIdx]);
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide, paused]);

  // Attendance toggle
  const toggleAttendance = (index) => {
    setAttendance(prev => {
      const next = [...prev];
      const cur = next[index];
      if (cur === 'PRESENT') next[index] = 'ABSENT';
      else if (cur === 'ABSENT') next[index] = 'LEAVE';
      else next[index] = 'PRESENT';
      return next;
    });
  };

  // Patient toggle
  const togglePatientStatus = () => {
    setPatientStatus(prev => prev === 'CALL NEXT' ? 'CALLED' : 'CALL NEXT');
  };

  // Scan toggle
  const handleScanClick = () => {
    const nextCount = scanCount + 1;
    setScanCount(nextCount);
    setScanButtonText(\`SCANNED (\${nextCount} ITEMS)\`);
    setScanButtonColor('bg-brand-limeDark hover:bg-brand-lime');
    setTimeout(() => {
      setScanButtonText(\`SCAN SKU #8901\${23 + nextCount}\`);
      setScanButtonColor('bg-emerald-600 hover:bg-emerald-500');
    }, 1200);
  };

  useEffect(() => {
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  });

  return (
${jsx}
  );
}
`;

fs.writeFileSync('src/components/HeroSection.jsx', fullComponent);
console.log('src/components/HeroSection.jsx written successfully!');
