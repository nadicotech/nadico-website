import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SchoolErpPage from './pages/SchoolErpPage.jsx';
import HospitalHmsPage from './pages/HospitalHmsPage.jsx';
import InventoryPosPage from './pages/InventoryPosPage.jsx';
import WebDevelopmentPage from './pages/WebDevelopmentPage.jsx';
import DigitalMarketingPage from './pages/DigitalMarketingPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/school-erp" element={<SchoolErpPage />} />
        <Route path="/hospital-hms" element={<HospitalHmsPage />} />
        <Route path="/inventory-pos" element={<InventoryPosPage />} />
        <Route path="/web-development" element={<WebDevelopmentPage />} />
        <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Clean URL redirects: Strip .html so URL bar always shows clean React routes */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/school-erp.html" element={<Navigate to="/school-erp" replace />} />
        <Route path="/hospital-hms.html" element={<Navigate to="/hospital-hms" replace />} />
        <Route path="/inventory-pos.html" element={<Navigate to="/inventory-pos" replace />} />
        <Route path="/web-development.html" element={<Navigate to="/web-development" replace />} />
        <Route path="/digital-marketing.html" element={<Navigate to="/digital-marketing" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/contact.html" element={<Navigate to="/contact" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
