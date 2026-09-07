import React, { useState } from 'react';
import {
  GraduationCap,
  Users,
  Gamepad2,
  CheckCircle2,
  ArrowRight,
  BarChart3,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Star,
  Award,
} from 'lucide-react';
import { Language, UserRole } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface WhoIsItForProps {
  currentLang: Language;
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  onOpenTrialModal: (role?: UserRole) => void;
}

export const WhoIsItFor: React.FC<WhoIsItForProps> = ({
  currentLang,
  activeRole,
  onRoleChange,
  onOpenTrialModal,
}) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';

  return (
    <section id="why-matific" className="py-20 bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-[#0284C7] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>{isRtl ? 'حل متكامل للجميع' : 'Dopasowany do Twoich potrzeb'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.whoIsItFor.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.whoIsItFor.subtitle}
          </p>
        </div>

        {/* Persona Switcher Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 shadow-inner max-w-full overflow-x-auto">
            <button
              id="who-tab-teachers"
              onClick={() => {
                sound.playPop();
                onRoleChange('teachers');
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeRole === 'teachers'
                  ? 'bg-white text-[#0284C7] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.whoIsItFor.teachersTab}</span>
            </button>
            <button
              id="who-tab-parents"
              onClick={() => {
                sound.playPop();
                onRoleChange('parents');
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeRole === 'parents'
                  ? 'bg-white text-[#0284C7] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>{t.whoIsItFor.parentsTab}</span>
            </button>
            <button
              id="who-tab-students"
              onClick={() => {
                sound.playPop();
                onRoleChange('students');
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all ${
                activeRole === 'students'
                  ? 'bg-amber-400 text-slate-900 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>{t.whoIsItFor.studentsTab}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Panel */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-6 sm:p-10 lg:p-12 shadow-sm">
          {/* ================= TEACHERS TAB ================= */}
          {activeRole === 'teachers' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block bg-sky-100 text-[#0284C7] px-3 py-1 rounded-full text-xs font-black">
                  {isRtl ? 'للمدارس وهيئات التدريس' : 'Dla Nauczycieli Szkół Podstawowych'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.whoIsItFor.teachersTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.whoIsItFor.teachersDesc}
                </p>

                <div className="space-y-3.5">
                  {t.whoIsItFor.teachersBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    id="teacher-panel-trial-cta"
                    onClick={() => {
                      sound.playVictory();
                      onOpenTrialModal('teachers');
                    }}
                    className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md shadow-sky-200 transition-all flex items-center gap-2"
                  >
                    <span>{isRtl ? 'طلب تجربة مجانية للمدرسة' : 'Darmowa próba dla mojej Szkoły'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Teacher Dashboard Simulator Card */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-sky-500 text-white flex items-center justify-center font-bold text-xs">
                        3B
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-800">
                          {isRtl ? 'لوحة المعلم: الصف الثالث (ب)' : 'Klasa 3B • Diagnoza Matematyczna'}
                        </h4>
                        <span className="text-[10px] text-slate-400">
                          {isRtl ? '24 طالباً • نشاط: Ułamki (الكسور)' : '24 uczniów • Temat: Ułamki zwykłe'}
                        </span>
                      </div>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {isRtl ? 'مباشر الآن' : 'Na żywo'}
                    </span>
                  </div>

                  {/* Student performance grid preview */}
                  <div className="space-y-2">
                    <div className="text-[11px] font-bold text-slate-500 flex justify-between">
                      <span>{isRtl ? 'مستوى الفهم الصفي' : 'Poziom opanowania materiału'}</span>
                      <span className="text-emerald-600 font-extrabold">87%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden flex">
                      <div className="bg-emerald-500 h-full w-[70%]" title="Zrozumienie biegłe" />
                      <div className="bg-amber-400 h-full w-[17%]" title="Wymaga powtórzenia" />
                      <div className="bg-rose-400 h-full w-[13%]" title="Potrzebna pomoc" />
                    </div>
                  </div>

                  {/* Student rows */}
                  <div className="divide-y divide-slate-100 text-xs">
                    <div className="py-2 flex items-center justify-between">
                      <span className="font-bold text-slate-800">Anna K.</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        ⭐⭐⭐ 100%
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <span className="font-bold text-slate-800">Michał W.</span>
                      <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        ⭐⭐⭐ 92%
                      </span>
                    </div>
                    <div className="py-2 flex items-center justify-between">
                      <span className="font-bold text-slate-800">Julia P.</span>
                      <span className="text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded">
                        ⭐⭐ 75% (Wskazówka)
                      </span>
                    </div>
                  </div>

                  <div className="bg-sky-50 rounded-xl p-3 text-[11px] text-[#0284C7] font-semibold flex items-center gap-2">
                    <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
                    <span>
                      {isRtl
                        ? 'توصية النظام: 3 طلاب يحتاجون مراجعة مفهوم المقام قبل الانتقال للدرس التالي.'
                        : 'Algorytm Matific: 3 uczniów wymaga ćwiczenia ułamków niewłaściwych. Zadania przypisane automatycznie.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= PARENTS TAB ================= */}
          {activeRole === 'parents' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-xs font-black">
                  {isRtl ? 'لأولياء الأمور في المنزل' : 'Dla Świadomych Rodziców'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.whoIsItFor.parentsTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.whoIsItFor.parentsDesc}
                </p>

                <div className="space-y-3.5">
                  {t.whoIsItFor.parentsBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    id="parent-panel-trial-cta"
                    onClick={() => {
                      sound.playVictory();
                      onOpenTrialModal('parents');
                    }}
                    className="bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold px-6 py-3.5 rounded-xl shadow-md shadow-orange-200 transition-all flex items-center gap-2"
                  >
                    <span>{isRtl ? 'تجربة مجانية لطفلي (30 يوماً)' : 'Darmowa próba dla Rodzica'}</span>
                    <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Parent Progress Card Simulator */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-xl">
                        🧒
                      </div>
                      <div>
                        <h4 className="text-xs font-black text-slate-800">
                          {isRtl ? 'تقرير إنجاز طفلك الأسبوعي' : 'Tygodniowy Raport: Staś (8 lat)'}
                        </h4>
                        <span className="text-[10px] text-slate-400">
                          {isRtl ? 'الرياضيات ممتعة وبدون ضغوط' : 'Aktywność: 3 sesje • 45 minut w tym tygodniu'}
                        </span>
                      </div>
                    </div>
                    <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      ⭐⭐⭐ Super Postęp!
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xl font-black text-[#0284C7]">18</span>
                      <span className="text-[10px] text-slate-500 font-bold block">
                        {isRtl ? 'نشاطاً مكتملاً' : 'Ukończonych zadań'}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xl font-black text-amber-500">54</span>
                      <span className="text-[10px] text-slate-500 font-bold block">
                        {isRtl ? 'نجمة ذهبية' : 'Złotych gwiazdek'}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <span className="text-xl font-black text-emerald-600">+12%</span>
                      <span className="text-[10px] text-slate-500 font-bold block">
                        {isRtl ? 'نمو المهارات' : 'Wzrost pewności'}
                      </span>
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 font-medium">
                    <span className="font-bold block mb-1">
                      {isRtl ? 'ملاحظة تربوية لولي الأمر:' : 'Wiadomość od metodyka Matific:'}
                    </span>
                    {isRtl
                      ? 'أتقن طفلك جدول الضرب في العدد 4 و 5 دون أي تردد. نوصي باستكشاف ألعاب الكسور هذا الأسبوع.'
                      : 'Staś świetnie opanował mnożenie przez 4 i 5. Samodzielnie rozwiązał wyzwania bez używania kalkulatora!'}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= STUDENTS TAB ================= */}
          {activeRole === 'students' && (
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block bg-amber-200 text-amber-900 px-3 py-1 rounded-full text-xs font-black">
                  {isRtl ? 'للأبطال الصغار' : 'Dla Małych Odkrywców'}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {t.whoIsItFor.studentsTitle}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {t.whoIsItFor.studentsDesc}
                </p>

                <div className="space-y-3.5">
                  {t.whoIsItFor.studentsBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    id="student-panel-play-cta"
                    onClick={() => {
                      sound.playVictory();
                      onOpenTrialModal('students');
                    }}
                    className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-black px-6 py-3.5 rounded-xl shadow-md transition-all flex items-center gap-2"
                  >
                    <Gamepad2 className="w-5 h-5" />
                    <span>{isRtl ? 'ادخل عالم الألعاب والكنوز' : 'Wskakuj do gry na Wyspę Przygód!'}</span>
                  </button>
                </div>
              </div>

              {/* Student Island Map Preview Card */}
              <div className="lg:col-span-6">
                <div className="bg-gradient-to-tr from-sky-400 to-indigo-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🦄</span>
                      <div>
                        <span className="font-extrabold text-sm block">Kadet Zico</span>
                        <span className="text-[10px] text-sky-100">Poziom 12 • Mistrz Liczb</span>
                      </div>
                    </div>
                    <div className="bg-white/20 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-black flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
                      <span>1,420 ⭐</span>
                    </div>
                  </div>

                  {/* Island Quest Path Map Simulator */}
                  <div className="py-6 flex items-center justify-around relative">
                    <div className="absolute h-1 bg-white/40 left-8 right-8 top-1/2 -translate-y-1/2 -z-0" />
                    <div className="w-12 h-12 rounded-full bg-emerald-400 border-4 border-white shadow-md flex items-center justify-center font-black text-slate-900 z-10">
                      ✓
                    </div>
                    <div className="w-12 h-12 rounded-full bg-emerald-400 border-4 border-white shadow-md flex items-center justify-center font-black text-slate-900 z-10">
                      ✓
                    </div>
                    <div className="w-14 h-14 rounded-full bg-amber-400 border-4 border-white shadow-lg flex items-center justify-center font-black text-slate-900 text-xl z-10 animate-bounce">
                      👑
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/40 border-4 border-white/60 flex items-center justify-center font-bold text-white z-10">
                      🔒
                    </div>
                  </div>

                  <div className="text-center text-xs font-bold text-sky-100 pt-2">
                    {isRtl
                      ? 'افتح الصندوق الذهبي القادم بحل لغز التوازن!'
                      : 'Kolejna nagroda: Magiczna czapka czarodzieja dla Twojego potworka!'}
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
