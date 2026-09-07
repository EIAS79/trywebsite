import React from 'react';
import { ShieldCheck, Heart, Globe, ArrowUp } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface FooterProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onLanguageChange,
  onOpenTrialModal,
}) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top pre-footer CTA Banner */}
        <div className="bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] rounded-3xl p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              {t.ctaSection.title}
            </h3>
            <p className="text-sm text-sky-100 max-w-xl">
              {t.ctaSection.subtitle}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={() => {
                sound.playVictory();
                onOpenTrialModal();
              }}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-6 py-3.5 rounded-xl shadow-lg transition-all"
            >
              {t.ctaSection.buttonTeacher}
            </button>
            <button
              onClick={() => {
                sound.playVictory();
                onOpenTrialModal();
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl transition-all"
            >
              {t.ctaSection.buttonParent}
            </button>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-xs sm:text-sm">
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#0284C7] flex items-center justify-center text-white font-black text-lg">
                m
              </div>
              <span className="text-2xl font-black tracking-tight text-white">matific</span>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{t.footer.curriculumStandards}</span>
            </div>
          </div>

          {/* Col 1: Produkty */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase text-xs tracking-wider">
              {isRtl ? 'المنتجات' : 'Produkty'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#math-playground" className="hover:text-white transition-colors">{isRtl ? 'جزيرة المغامرات' : 'Wyspa Przygód'}</a></li>
              <li><a href="#math-playground" className="hover:text-white transition-colors">{isRtl ? 'مختبر الرياضيات' : 'Warsztat Matematyczny'}</a></li>
              <li><a href="#math-playground" className="hover:text-white transition-colors">{isRtl ? 'حلبة التدريب' : 'Arena Mnożenia'}</a></li>
              <li><a href="#why-matific" className="hover:text-white transition-colors">{isRtl ? 'لوحة المعلم' : 'Panel Nauczyciela'}</a></li>
            </ul>
          </div>

          {/* Col 2: Dla Kogo */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase text-xs tracking-wider">
              {isRtl ? 'الفئات المستهدفة' : 'Dla Kogo'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#why-matific" className="hover:text-white transition-colors">{isRtl ? 'للمدارس والمعلمين' : 'Dla Nauczycieli'}</a></li>
              <li><a href="#why-matific" className="hover:text-white transition-colors">{isRtl ? 'لأولياء الأمور' : 'Dla Rodziców'}</a></li>
              <li><a href="#why-matific" className="hover:text-white transition-colors">{isRtl ? 'للطلاب والأطفال' : 'Dla Dzieci'}</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">{isRtl ? 'خطط المدارس' : 'Dla Gmin i Dystryktów'}</a></li>
            </ul>
          </div>

          {/* Col 3: Edukacja & Zgodność */}
          <div className="space-y-3">
            <h4 className="font-black text-white uppercase text-xs tracking-wider">
              {isRtl ? 'المعايير والأبحاث' : 'Edukacja'}
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#pedagogy-section" className="hover:text-white transition-colors">{isRtl ? 'دراسة جامعة ويسترن سيدني' : 'Badania Western Sydney'}</a></li>
              <li><a href="#curriculum-section" className="hover:text-white transition-colors">{isRtl ? 'توافق المنهاج الوطني' : 'Podstawa MEN (0-6)'}</a></li>
              <li><a href="#pricing-section" className="hover:text-white transition-colors">{isRtl ? 'الأسعار والاشتراكات' : 'Cennik Subskrypcji'}</a></li>
              <li><a href="#why-matific" className="hover:text-white transition-colors">{isRtl ? 'الأمن وحماية البيانات' : 'Zgodność z RODO'}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Language Switcher, Back to top */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} Matific. {t.footer.rights}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Globe className="w-3.5 h-3.5 text-slate-400" />
              <button
                onClick={() => onLanguageChange('pl')}
                className={`hover:text-white ${currentLang === 'pl' ? 'text-sky-400 font-bold' : ''}`}
              >
                Polski
              </button>
              <span>•</span>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`hover:text-white ${currentLang === 'ar' ? 'text-sky-400 font-bold' : ''}`}
              >
                العربية
              </button>
              <span>•</span>
              <button
                onClick={() => onLanguageChange('en')}
                className={`hover:text-white ${currentLang === 'en' ? 'text-sky-400 font-bold' : ''}`}
              >
                English
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Do góry strony"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
