/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language, UserRole } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MatificPlayground } from './components/MatificPlayground';
import { WhoIsItFor } from './components/WhoIsItFor';
import { PedagogyAndStats } from './components/PedagogyAndStats';
import { CurriculumBrowser } from './components/CurriculumBrowser';
import { PlatformTour } from './components/PlatformTour';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { TrialModal } from './components/TrialModal';
import { LoginModal } from './components/LoginModal';
import { StudentZoneModal } from './components/StudentZoneModal';

export default function App() {
  // Default to Polish 'pl' matching https://www.matific.com/pl/pl/home/
  // Full RTL support when switched to Arabic 'ar'
  const [currentLang, setCurrentLang] = useState<Language>('pl');
  const [activeRole, setActiveRole] = useState<UserRole>('teachers');
  const [trialModalOpen, setTrialModalOpen] = useState(false);
  const [trialInitialRole, setTrialInitialRole] = useState<UserRole>('parents');
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [studentZoneOpen, setStudentZoneOpen] = useState(false);

  const handleOpenTrial = (role?: UserRole) => {
    if (role) {
      setTrialInitialRole(role);
    }
    setTrialModalOpen(true);
  };

  const handleScrollToPlayground = () => {
    const el = document.getElementById('math-playground');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-sky-200 selection:text-sky-900 ${
        currentLang === 'ar' ? 'font-tajawal' : 'font-sans'
      }`}
      dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Matific Header & Navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        activeRole={activeRole}
        onRoleChange={setActiveRole}
        onOpenTrialModal={handleOpenTrial}
        onOpenLoginModal={() => setLoginModalOpen(true)}
        onOpenStudentZone={() => setStudentZoneOpen(true)}
      />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* Hero Banner with Quick Interactive Teaser */}
        <Hero
          currentLang={currentLang}
          onOpenTrialModal={handleOpenTrial}
          onScrollToPlayground={handleScrollToPlayground}
          onOpenStudentZone={() => setStudentZoneOpen(true)}
        />

        {/* The Interactive Matific Math Playground */}
        <MatificPlayground
          currentLang={currentLang}
          onOpenStudentZone={() => setStudentZoneOpen(true)}
        />

        {/* Who is it for: Teachers, Parents, Students */}
        <WhoIsItFor
          currentLang={currentLang}
          activeRole={activeRole}
          onRoleChange={setActiveRole}
          onOpenTrialModal={handleOpenTrial}
        />

        {/* Pedagogy, Research Study (+34%) & Academic Pillars */}
        <PedagogyAndStats currentLang={currentLang} />

        {/* Interactive Grade & Curriculum Browser (K through 6) */}
        <CurriculumBrowser
          currentLang={currentLang}
          onSelectActivity={handleScrollToPlayground}
        />

        {/* 4 Pillars of Matific Platform Ecosystem */}
        <PlatformTour
          currentLang={currentLang}
          onOpenStudentZone={() => setStudentZoneOpen(true)}
        />

        {/* Testimonials & Teacher / Parent Endorsements */}
        <Testimonials currentLang={currentLang} />

        {/* Transparent Pricing & Free 30-Day Guarantee */}
        <PricingSection
          currentLang={currentLang}
          onOpenTrialModal={handleOpenTrial}
        />

        {/* Frequently Asked Questions */}
        <FaqSection currentLang={currentLang} />
      </main>

      {/* Rich Footer with Accreditations */}
      <Footer
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenTrialModal={() => handleOpenTrial()}
      />

      {/* Modals */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
        currentLang={currentLang}
        initialRole={trialInitialRole}
        onOpenStudentZone={() => setStudentZoneOpen(true)}
      />

      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        currentLang={currentLang}
        onOpenStudentZone={() => setStudentZoneOpen(true)}
      />

      <StudentZoneModal
        isOpen={studentZoneOpen}
        onClose={() => setStudentZoneOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
