import React, { useState } from 'react';
import {
  Globe,
  Volume2,
  VolumeX,
  Menu,
  X,
  Sparkles,
  Gamepad2,
  GraduationCap,
  Users,
  ChevronDown,
  LogIn,
} from 'lucide-react';
import { Language, UserRole } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenTrialModal: (role?: UserRole) => void;
  onOpenLoginModal: () => void;
  onOpenStudentZone: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeRole,
  onRoleChange,
  onOpenTrialModal,
  onOpenLoginModal,
  onOpenStudentZone,
}) => {
  const t = translations[currentLang] || translations.pl;
  const [isMuted, setIsMuted] = useState(sound.isMuted);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleMute = () => {
    sound.isMuted = !sound.isMuted;
    setIsMuted(sound.isMuted);
    if (!sound.isMuted) {
      sound.playClick();
    }
  };

  const handleLangSelect = (lang: Language) => {
    sound.playClick();
    onLanguageChange(lang);
    setLangDropdownOpen(false);
  };

  const handleRoleSelect = (role: UserRole) => {
    sound.playPop();
    onRoleChange(role);
    if (role === 'students') {
      onOpenStudentZone();
    }
  };

  const scrollTo = (id: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRtl = currentLang === 'ar';

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0284C7] text-white py-1.5 px-4 text-xs sm:text-sm font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex items-center justify-center bg-amber-400 text-slate-900 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
              30 Dni Free
            </span>
            <span>{t.topBar.announcement}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              id="header-topbar-trial-btn"
              onClick={() => {
                sound.playClick();
                onOpenTrialModal();
              }}
              className="bg-white text-[#0284C7] hover:bg-amber-100 font-bold px-2.5 py-0.5 rounded-full text-xs transition-colors shadow-xs"
            >
              {t.topBar.trialCta}
            </button>
            <button
              id="header-mute-toggle-btn"
              onClick={toggleMute}
              title={isMuted ? 'Włącz dźwięki / Turn sound on' : 'Wycisz dźwięki / Mute sound'}
              className="p-1 rounded-full hover:bg-white/20 transition-colors text-white/90"
              aria-label="Toggle sound"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-rose-200" /> : <Volume2 className="w-4 h-4 text-amber-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Target Audience Tabs */}
      <div className="bg-slate-50 border-b border-slate-200/80 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="flex space-x-1 sm:space-x-2 text-xs font-semibold py-1.5 overflow-x-auto no-scrollbar">
            <button
              id="tab-role-teachers"
              onClick={() => handleRoleSelect('teachers')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all whitespace-nowrap ${
                activeRole === 'teachers'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.nav.teachers}</span>
            </button>
            <button
              id="tab-role-parents"
              onClick={() => handleRoleSelect('parents')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all whitespace-nowrap ${
                activeRole === 'parents'
                  ? 'bg-[#0284C7] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>{t.nav.parents}</span>
            </button>
            <button
              id="tab-role-students"
              onClick={onOpenStudentZone}
              className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold shadow-xs transition-all whitespace-nowrap animate-pulse"
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>{t.nav.playStudentZone}</span>
            </button>
          </nav>

          {/* Language Selector Dropdown */}
          <div className="relative flex items-center">
            <button
              id="header-lang-btn"
              onClick={() => {
                sound.playClick();
                setLangDropdownOpen(!langDropdownOpen);
              }}
              className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 px-2 py-1 rounded hover:bg-slate-200/60 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#0284C7]" />
              <span className="font-bold uppercase tracking-wider">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-slate-200 rounded-xl shadow-xl py-1 z-50 text-xs">
                <button
                  id="lang-select-pl"
                  onClick={() => handleLangSelect('pl')}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-sky-50 transition-colors ${
                    currentLang === 'pl' ? 'font-bold text-[#0284C7] bg-sky-50/60' : 'text-slate-700'
                  }`}
                >
                  <span>🇵🇱 Polski</span>
                  {currentLang === 'pl' && <span className="text-xs">✓</span>}
                </button>
                <button
                  id="lang-select-ar"
                  onClick={() => handleLangSelect('ar')}
                  className={`w-full text-right px-3 py-2 flex items-center justify-between hover:bg-sky-50 transition-colors ${
                    currentLang === 'ar' ? 'font-bold text-[#0284C7] bg-sky-50/60' : 'text-slate-700'
                  }`}
                >
                  <span dir="rtl">🇸🇦 العربية</span>
                  {currentLang === 'ar' && <span className="text-xs">✓</span>}
                </button>
                <button
                  id="lang-select-en"
                  onClick={() => handleLangSelect('en')}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between hover:bg-sky-50 transition-colors ${
                    currentLang === 'en' ? 'font-bold text-[#0284C7] bg-sky-50/60' : 'text-slate-700'
                  }`}
                >
                  <span>🇬🇧 English</span>
                  {currentLang === 'en' && <span className="text-xs">✓</span>}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          id="matific-main-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            sound.playPop();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 group cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] flex items-center justify-center text-white shadow-md shadow-sky-200 group-hover:scale-105 transition-transform">
            <span className="font-extrabold text-2xl tracking-tighter">m</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span className="text-2xl font-black tracking-tight text-[#0F172A]">matific</span>
              <span className="w-2 h-2 rounded-full bg-[#F97316] ml-0.5 mb-2 animate-bounce"></span>
            </div>
            <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase -mt-1">
              Math Learning K-6
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <button
            id="nav-link-why"
            onClick={() => scrollTo('why-matific')}
            className="hover:text-[#0284C7] transition-colors"
          >
            {t.nav.whyMatific}
          </button>
          <button
            id="nav-link-playground"
            onClick={() => scrollTo('math-playground')}
            className="flex items-center gap-1 hover:text-[#0284C7] transition-colors"
          >
            <span>{t.nav.activities}</span>
            <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.2 rounded font-bold">
              Demo
            </span>
          </button>
          <button
            id="nav-link-curriculum"
            onClick={() => scrollTo('curriculum-section')}
            className="hover:text-[#0284C7] transition-colors"
          >
            {t.nav.curriculum}
          </button>
          <button
            id="nav-link-research"
            onClick={() => scrollTo('pedagogy-section')}
            className="hover:text-[#0284C7] transition-colors"
          >
            {t.nav.research}
          </button>
          <button
            id="nav-link-pricing"
            onClick={() => scrollTo('pricing-section')}
            className="hover:text-[#0284C7] transition-colors"
          >
            {t.nav.pricing}
          </button>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="header-login-btn"
            onClick={() => {
              sound.playClick();
              onOpenLoginModal();
            }}
            className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-[#0284C7] px-3.5 py-2 rounded-xl transition-colors"
          >
            <LogIn className="w-4 h-4" />
            <span>{t.nav.login}</span>
          </button>
          <button
            id="header-cta-trial-btn"
            onClick={() => {
              sound.playCorrect();
              onOpenTrialModal();
            }}
            className="flex items-center gap-1.5 bg-[#F97316] hover:bg-[#EA580C] text-white text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-md shadow-orange-200 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 text-amber-200" />
            <span>{t.nav.freeTrial}</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => {
            sound.playClick();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <button
              onClick={() => scrollTo('why-matific')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              {t.nav.whyMatific}
            </button>
            <button
              onClick={() => scrollTo('math-playground')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800 flex items-center justify-between"
            >
              <span>{t.nav.activities}</span>
              <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded font-bold">
                Play Demo
              </span>
            </button>
            <button
              onClick={() => scrollTo('curriculum-section')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              {t.nav.curriculum}
            </button>
            <button
              onClick={() => scrollTo('pedagogy-section')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              {t.nav.research}
            </button>
            <button
              onClick={() => scrollTo('pricing-section')}
              className="text-left px-3 py-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              {t.nav.pricing}
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenStudentZone();
              }}
              className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2.5 rounded-xl flex items-center justify-center gap-2"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>{t.nav.playStudentZone}</span>
            </button>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLoginModal();
                }}
                className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold py-2.5 rounded-xl text-center"
              >
                {t.nav.login}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTrialModal();
                }}
                className="w-full bg-[#F97316] text-white font-bold py-2.5 rounded-xl text-center shadow-xs"
              >
                {t.nav.freeTrial}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
