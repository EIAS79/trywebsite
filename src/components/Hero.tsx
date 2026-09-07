import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Gamepad2,
  Award,
  CheckCircle2,
  Star,
  Zap,
} from 'lucide-react';
import { Language, UserRole } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface HeroProps {
  currentLang: Language;
  onOpenTrialModal: (role?: UserRole) => void;
  onScrollToPlayground: () => void;
  onOpenStudentZone: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenTrialModal,
  onScrollToPlayground,
  onOpenStudentZone,
}) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';

  // Quick mini-teaser math interaction inside hero card
  const [selectedHeroAnswer, setSelectedHeroAnswer] = useState<number | null>(null);
  const [heroSuccess, setHeroSuccess] = useState(false);

  const handleQuickAnswer = (val: number) => {
    setSelectedHeroAnswer(val);
    if (val === 7) {
      sound.playVictory();
      setHeroSuccess(true);
    } else {
      sound.playIncorrect();
      setHeroSuccess(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-50 pt-10 pb-16 lg:pt-14 lg:pb-24"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Decorative background blobs & math symbols */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-32 right-10 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -bottom-10 left-1/3 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Floating math stickers */}
      <div className="hidden lg:block absolute top-16 left-8 text-sky-200 font-extrabold text-5xl opacity-40 select-none pointer-events-none rotate-12">
        π
      </div>
      <div className="hidden lg:block absolute bottom-24 left-16 text-amber-300 font-black text-6xl opacity-30 select-none pointer-events-none -rotate-12">
        ½
      </div>
      <div className="hidden lg:block absolute top-28 right-16 text-emerald-300 font-black text-6xl opacity-30 select-none pointer-events-none rotate-6">
        ∑
      </div>
      <div className="hidden lg:block absolute bottom-16 right-20 text-orange-200 font-black text-7xl opacity-40 select-none pointer-events-none -rotate-6">
        ÷
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy and CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-200 text-[#0284C7] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-xs">
              <Award className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.15] tracking-tight">
              {t.hero.title}{' '}
              <span className="relative inline-block text-[#0284C7]">
                {t.hero.highlight}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-[#F97316]/70 fill-current"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path d="M0,15 Q50,0 100,15 L100,20 Q50,5 0,20 Z" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.hero.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                id="hero-cta-trial"
                onClick={() => {
                  sound.playVictory();
                  onOpenTrialModal();
                }}
                className="w-full sm:w-auto bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold text-base px-8 py-4 rounded-2xl shadow-lg shadow-orange-300/60 hover:shadow-orange-400/80 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-amber-200" />
                <span>{t.hero.startTrial}</span>
                <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
              </button>

              <button
                id="hero-cta-demo"
                onClick={() => {
                  sound.playPop();
                  onScrollToPlayground();
                }}
                className="w-full sm:w-auto bg-white hover:bg-sky-50 text-[#0284C7] border-2 border-[#0284C7]/40 hover:border-[#0284C7] font-extrabold text-base px-7 py-3.5 rounded-2xl shadow-sm transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Gamepad2 className="w-5 h-5 text-[#0284C7]" />
                <span>{t.hero.playDemo}</span>
              </button>
            </div>

            {/* Micro reassurance */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-slate-500 pt-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>{t.hero.noCardRequired}</span>
            </div>
          </div>

          {/* Right Column: Matific Adventure Island Hero Card & Quick Interactive Teaser */}
          <div className="lg:col-span-5">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-2xl border-4 border-sky-100 relative overflow-hidden">
              {/* Card top banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#0284C7] text-white flex items-center justify-center font-bold text-sm">
                    M
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-800 text-sm">
                      {isRtl ? 'جزيرة المغامرات التفاعلية' : 'Wyspa Przygód Matific'}
                    </h3>
                    <p className="text-[11px] text-slate-400 font-medium">
                      {isRtl ? 'مهمة رياضية مباشرة للطفل' : 'Misja: Poziom 2 • Potworki'}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-bold text-amber-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>3 / 3</span>
                </div>
              </div>

              {/* Graphic Scene with cute Matific Characters */}
              <div className="relative my-4 rounded-2xl bg-gradient-to-b from-[#38BDF8] to-[#0284C7] p-5 text-white overflow-hidden shadow-inner text-center">
                {/* Floating clouds */}
                <div className="absolute top-2 left-3 bg-white/30 rounded-full w-12 h-4 blur-[0.5px]" />
                <div className="absolute top-4 right-6 bg-white/30 rounded-full w-16 h-5 blur-[0.5px]" />

                <div className="relative z-10 space-y-2">
                  <div className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    {isRtl ? 'تحدي سريع: اجمع الكائنات الفضائية!' : 'Szybkie wyzwanie: Połącz stworki!'}
                  </div>

                  {/* Character Illustration SVG representation */}
                  <div className="flex items-center justify-center gap-3 py-2">
                    {/* Monster 1 (Orange cute cyclops) */}
                    <div className="w-12 h-12 rounded-2xl bg-amber-400 border-2 border-white shadow-md flex flex-col items-center justify-center relative animate-bounce">
                      <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-[10px] font-black text-slate-900 mt-1">3</span>
                    </div>

                    <span className="text-2xl font-black text-amber-200">+</span>

                    {/* Monster 2 (Lime green cute alien) */}
                    <div className="w-12 h-12 rounded-2xl bg-emerald-400 border-2 border-white shadow-md flex flex-col items-center justify-center relative animate-pulse">
                      <div className="flex gap-1">
                        <div className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        </div>
                        <div className="w-2.5 h-2.5 bg-white rounded-full flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-slate-900 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-[10px] font-black text-slate-900 mt-1">4</span>
                    </div>

                    <span className="text-2xl font-black text-amber-200">=</span>

                    {/* Mystery Target Box */}
                    <div className="w-12 h-12 rounded-2xl bg-white/30 border-2 border-dashed border-white flex items-center justify-center text-xl font-black text-amber-300">
                      {selectedHeroAnswer !== null ? selectedHeroAnswer : '?'}
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-sky-100">
                    {isRtl ? 'كم مجموع الكائنات الفضائية؟ اضغط الإجابة الصحيحة:' : 'Ile łącznie stworków mamy na wyspie? Kliknij wynik:'}
                  </p>
                </div>
              </div>

              {/* Interactive choices */}
              <div className="grid grid-cols-4 gap-2 pt-1">
                {[5, 6, 7, 8].map((num) => (
                  <button
                    key={num}
                    id={`hero-choice-${num}`}
                    onClick={() => handleQuickAnswer(num)}
                    className={`py-2.5 rounded-xl font-black text-base transition-all ${
                      selectedHeroAnswer === num
                        ? num === 7
                          ? 'bg-emerald-500 text-white shadow-md scale-105'
                          : 'bg-rose-500 text-white shadow-md'
                        : 'bg-slate-100 hover:bg-sky-100 text-slate-800 hover:text-[#0284C7] active:scale-95'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>

              {/* Instant feedback message */}
              {selectedHeroAnswer !== null && (
                <div
                  className={`mt-3 p-2.5 rounded-xl text-xs font-bold flex items-center justify-between ${
                    heroSuccess
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {heroSuccess ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    ) : (
                      <Zap className="w-4 h-4 text-amber-600 shrink-0" />
                    )}
                    <span>
                      {heroSuccess
                        ? (isRtl ? 'رائع جداً! 3 + 4 = 7 كائنات!' : 'Brawo! 3 + 4 = 7 stworków!')
                        : (isRtl ? 'حاول مجدداً! فكر كم يتبقى بعد 3...' : 'Prawie! Policz stworki jeszcze raz...')}
                    </span>
                  </div>
                  {heroSuccess && (
                    <button
                      onClick={onOpenStudentZone}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white px-2 py-1 rounded text-[10px] font-bold"
                    >
                      {isRtl ? 'العب المزيد' : 'Graj dalej'}
                    </button>
                  )}
                </div>
              )}

              {/* Bottom Quick Jump Button */}
              <button
                id="hero-play-student-zone-card"
                onClick={onOpenStudentZone}
                className="mt-4 w-full bg-slate-900 hover:bg-slate-800 text-amber-300 hover:text-amber-200 py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-colors"
              >
                <Gamepad2 className="w-4 h-4" />
                <span>{isRtl ? 'فتح جزيرة الألعاب الكاملة (وضع الطالب)' : 'Wejdź do Pełnej Wyspy Przygód Matific'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Key Proof Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center transform transition-transform hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-black text-[#0284C7] block">
              {t.hero.stat1}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">
              {t.hero.stat1Desc}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Western Sydney Univ.</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center transform transition-transform hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-black text-[#F97316] block">
              {t.hero.stat2}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">
              {t.hero.stat2Desc}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">40+ języków</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center transform transition-transform hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-black text-emerald-600 block">
              {t.hero.stat3}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">
              {t.hero.stat3Desc}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Ponad 100M zadań</span>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm text-center transform transition-transform hover:-translate-y-1">
            <span className="text-3xl sm:text-4xl font-black text-purple-600 block">
              {t.hero.stat4}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-600 mt-1 block">
              {t.hero.stat4Desc}
            </span>
            <span className="text-[10px] text-slate-400 font-medium">Pozytywne recenzje</span>
          </div>
        </div>

        {/* Global Accolades and Endorsements Bar */}
        <div className="mt-10 pt-8 border-t border-slate-200/70 text-center">
          <p className="text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-4">
            {isRtl ? 'منصة معتمدة ومكرمة بأرفع الجوائز التعليمية الدولية' : 'Uznana i nagradzana przez wiodące instytucje edukacyjne na świecie'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-300">
            <div className="flex items-center gap-2 font-black text-slate-700 text-sm">
              <Award className="w-5 h-5 text-amber-500" />
              <span>CODiE Award Winner</span>
            </div>
            <div className="flex items-center gap-2 font-black text-slate-700 text-sm">
              <Award className="w-5 h-5 text-sky-500" />
              <span>EdTech Breakthrough 2024</span>
            </div>
            <div className="flex items-center gap-2 font-black text-slate-700 text-sm">
              <Award className="w-5 h-5 text-emerald-500" />
              <span>Academics\' Choice Smart Media</span>
            </div>
            <div className="flex items-center gap-2 font-black text-slate-700 text-sm">
              <Award className="w-5 h-5 text-purple-500" />
              <span>Teachers\' Choice Award</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
