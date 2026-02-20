import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/CTA';

// Pages
import { Home } from './pages/Home';
import { HowItWorks } from './pages/HowItWorks';
import { Experts } from './pages/Experts';
import { ClinicianProfile } from './pages/ClinicianProfile';
import { Ecosystem } from './pages/Ecosystem';
import { Model } from './pages/Model';
import { Intake } from './pages/Intake';
import { Blog } from './pages/Blog';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white font-sans selection:bg-[#0BA4AE] selection:text-white relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/experts" element={<Experts />} />
          <Route path="/experts/:id" element={<ClinicianProfile />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/model" element={<Model />} />
          <Route path="/intake" element={<Intake />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}