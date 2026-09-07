import React, { useState } from 'react';
import {
  Compass,
  Wrench,
  Zap,
  BarChart,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface TourProps {
  currentLang: Language;
  onOpenStudentZone: () => void;
}

export const PlatformTour: React.FC<TourProps> = ({ currentLang, onOpenStudentZone }) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';

  const [activeFeature, setActiveFeature] = useState<'island' | 'workshop' | 'arena' | 'analytics'>('island');

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isRtl ? 'بيئة ماتيفيك الشاملة' : 'Kompletny Ekosystem Matific'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.tour.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.tour.subtitle}
          </p>
        </div>

        {/* 4 Feature Selector Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <button
            onClick={() => {
              sound.playClick();
              setActiveFeature('island');
            }}
            className={`p-5 rounded-2xl text-left transition-all border ${
              activeFeature === 'island'
                ? 'bg-white border-[#0284C7] ring-2 ring-sky-200 shadow-md'
                : 'bg-white/70 hover:bg-white border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#0284C7] flex items-center justify-center mb-3">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-black text-slate-900 text-sm">
              {t.tour.adventureIsland}
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {t.tour.adventureIslandDesc}
            </p>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveFeature('workshop');
            }}
            className={`p-5 rounded-2xl text-left transition-all border ${
              activeFeature === 'workshop'
                ? 'bg-white border-[#0284C7] ring-2 ring-sky-200 shadow-md'
                : 'bg-white/70 hover:bg-white border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-3">
              <Wrench className="w-5 h-5" />
            </div>
            <h4 className="font-black text-slate-900 text-sm">
              {t.tour.mathWorkshop}
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {t.tour.mathWorkshopDesc}
            </p>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveFeature('arena');
            }}
            className={`p-5 rounded-2xl text-left transition-all border ${
              activeFeature === 'arena'
                ? 'bg-white border-[#0284C7] ring-2 ring-sky-200 shadow-md'
                : 'bg-white/70 hover:bg-white border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="font-black text-slate-900 text-sm">
              {t.tour.arena}
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {t.tour.arenaDesc}
            </p>
          </button>

          <button
            onClick={() => {
              sound.playClick();
              setActiveFeature('analytics');
            }}
            className={`p-5 rounded-2xl text-left transition-all border ${
              activeFeature === 'analytics'
                ? 'bg-white border-[#0284C7] ring-2 ring-sky-200 shadow-md'
                : 'bg-white/70 hover:bg-white border-slate-200'
            }`}
          >
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
              <BarChart className="w-5 h-5" />
            </div>
            <h4 className="font-black text-slate-900 text-sm">
              {t.tour.analytics}
            </h4>
            <p className="text-xs text-slate-500 mt-1 line-clamp-2">
              {t.tour.analyticsDesc}
            </p>
          </button>
        </div>

        {/* Feature Visual Stage */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
          {activeFeature === 'island' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-3 py-1 rounded-full">
                  {isRtl ? 'رحلة تعلم شخصية محفزة' : 'Spersonalizowana podróż ucznia'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.tour.adventureIsland}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t.tour.adventureIslandDesc}
                  {isRtl
                    ? ' ينتقل الطالب عبر جزر وممالك سحرية، ويفتح بوابات الألغاز الرياضية التي تتكيف آلياً مع مستواه التعليمي.'
                    : ' Uczniowie przemierzają kolejne krainy tematyczne, zdobywając klucze do skrzyń ze skarbami i odblokowując nowe elementy garderoby dla swoich awatarów.'}
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenStudentZone}
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold px-6 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                  >
                    <span>{isRtl ? 'ادخل في جولة داخل الجزيرة' : 'Wkrocz na Wyspę Przygód teraz'}</span>
                    <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Graphic Mockup */}
              <div className="lg:col-span-6 bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl relative min-h-[260px] flex flex-col justify-between overflow-hidden">
                <div className="flex justify-between items-center">
                  <span className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-bold">
                    🗺️ {isRtl ? 'خريطة المهام' : 'Mapa Krainy Ułamków'}
                  </span>
                  <span className="text-xs font-bold bg-amber-400 text-slate-900 px-2 py-0.5 rounded-full">
                    Poziom 3
                  </span>
                </div>

                <div className="flex items-center justify-around my-6">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-400 text-slate-900 font-bold flex items-center justify-center shadow-md mx-auto">
                      ✓
                    </div>
                    <span className="text-[10px] font-bold block mt-1">Liczby 1-20</span>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-900 font-bold flex items-center justify-center shadow-md mx-auto animate-bounce">
                    ⚔️
                  </div>
                  <div className="text-center opacity-70">
                    <div className="w-12 h-12 rounded-full bg-white/30 text-white font-bold flex items-center justify-center shadow-md mx-auto">
                      🔒
                    </div>
                    <span className="text-[10px] font-bold block mt-1">Zamek Geometrii</span>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-2.5 text-xs text-center backdrop-blur-xs">
                  {isRtl
                    ? '🎮 أكثر من 1,500 نشاط ممتع ينتظر طفلك مع ردود فعل تشجيعية فورية'
                    : '🎮 Ponad 1500 interaktywnych mini-misji fabularnych z natychmiastową informacją zwrotną'}
                </div>
              </div>
            </div>
          )}

          {activeFeature === 'workshop' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
                  {isRtl ? 'محاكاة بصرية تفاعلية' : 'Wirtualne pomoce dydaktyczne'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.tour.mathWorkshop}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {isRtl
                    ? 'بدلاً من حشو النظريات، يوفر مختبر الرياضيات أدوات تفاعلية: موازين الكتل، وأشرطة الكسور الملونة، ومصفوفات الضرب، ومجسمات الأشكال ثلاثية الأبعاد.'
                    : 'Nauczyciele i uczniowie mają dostęp do ponad 200 interaktywnych narzędzi manipulacyjnych: klocków dziesiątkowych, wag dwuszalkowych, interaktywnych zegarów i kół ułamkowych.'}
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-bold text-slate-700">
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg">⚖️ Wagi dwuszalkowe</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg">🍕 Koła ułamkowe</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg">📐 Siatki brył 3D</span>
                  <span className="bg-slate-100 px-3 py-1.5 rounded-lg">🕒 Zegary tarczowe</span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-900 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-center items-center space-y-4">
                <div className="text-center">
                  <span className="text-4xl">🧪</span>
                  <h4 className="text-base font-black text-amber-400 mt-2">
                    {isRtl ? 'معمل المحسوسات الرقمية' : 'Laboratorium Matematyczne'}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xs">
                    {isRtl ? 'اسحب، ادمج، قسّم واستكشف القوانين الرياضية بالتجربة العملية.' : 'Przeciągaj elementy na wirtualnej tablicy, dziel ułamki i odkrywaj zależności geometryczne.'}
                  </p>
                </div>
                <div className="grid grid-cols-4 gap-2 w-full max-w-sm pt-2">
                  <div className="bg-slate-800 p-2 text-center rounded-lg text-xs font-bold text-sky-300">½</div>
                  <div className="bg-slate-800 p-2 text-center rounded-lg text-xs font-bold text-amber-300">¼</div>
                  <div className="bg-slate-800 p-2 text-center rounded-lg text-xs font-bold text-emerald-300">⅛</div>
                  <div className="bg-slate-800 p-2 text-center rounded-lg text-xs font-bold text-rose-300">1.0</div>
                </div>
              </div>
            </div>
          )}

          {activeFeature === 'arena' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  {isRtl ? 'بناء الطلاقة الحسابية' : 'Płynność i szybkość rachunkowa'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.tour.arena}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {isRtl
                    ? 'حلبة الألعاب السريعة لجدول الضرب والعمليات الذهنية دون توتر. يتنافس الطلاب في بيئة إيجابية تكافئ المحاولة والسرعة.'
                    : 'Dynamiczne, kilkuminutowe sesje utrwalające tabliczkę mnożenia, dodawanie do 100 i szacowanie wyników w przyjaznych mini-turniejach klasowych.'}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <span className="text-xs font-bold text-slate-500">
                    {isRtl ? 'سرعة التفكير + ثقة عالية' : 'Błyskawiczne tempo myślenia i brak stresu'}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl p-6 text-white shadow-xl flex flex-col items-center text-center space-y-4">
                <Zap className="w-12 h-12 text-amber-200 animate-pulse" />
                <h4 className="text-xl font-black">
                  {isRtl ? 'تحدي حلبة السرعة: 7 × 8 = ؟' : 'Arena Mnożenia: 7 × 8 = ?'}
                </h4>
                <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                  <button className="bg-white/20 hover:bg-white/40 py-2 rounded-xl font-black text-sm">48</button>
                  <button className="bg-white text-slate-900 py-2 rounded-xl font-black text-sm shadow-md">56 ✓</button>
                  <button className="bg-white/20 hover:bg-white/40 py-2 rounded-xl font-black text-sm">64</button>
                </div>
              </div>
            </div>
          )}

          {activeFeature === 'analytics' && (
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                  {isRtl ? 'رؤى تشخيصية عميقة' : 'Precyzyjna diagnoza luk w wiedzy'}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.tour.analytics}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {isRtl
                    ? 'تقارير ذكية تكتشف اللبس الرياضي في ثوانٍ. يرى المعلم بنظرة واحدة المفهوم الذي استصعبه الطلاب ويحصل على مهام معالجة مخصصة.'
                    : 'System w czasie rzeczywistym analizuje błędy i pokazuje, czy uczeń ma problem z pojęciem ułamka, czy tylko z błędem rachunkowym w dzieleniu.'}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{isRtl ? 'تصحيح آلي فوري 100%' : '100% automatycznego sprawdzania zadań'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>{isRtl ? 'تصدير التقارير بضغطة زر' : 'Eksport raportów dla dyrekcji i rodziców'}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 shadow-lg space-y-3">
                <div className="flex justify-between items-center text-xs font-bold border-b border-slate-100 pb-2">
                  <span className="text-slate-800">Raport Klasowy • Sprawdzian Działowy</span>
                  <span className="text-emerald-600">Średnia: 89%</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Dodawanie ułamków</span>
                    <span className="text-emerald-600 font-bold">96% opanowane</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Mnożenie przez 10, 100</span>
                    <span className="text-emerald-600 font-bold">94% opanowane</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Odejmowanie z pożyczaniem</span>
                    <span className="text-amber-600 font-bold">72% wymaga powtórzenia</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
