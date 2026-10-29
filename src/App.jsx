import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import SchoolErpPage from './pages/SchoolErpPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/school-erp" element={<SchoolErpPage />} />
        {/* Clean URL redirects: Strip .html so URL bar always shows clean React routes */}
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/school-erp.html" element={<Navigate to="/school-erp" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
