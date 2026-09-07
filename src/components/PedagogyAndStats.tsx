import React from 'react';
import {
  Brain,
  Smile,
  Sparkles,
  Trophy,
  Award,
  TrendingUp,
  CheckCircle2,
  FileText,
} from 'lucide-react';
import { Language } from '../types';
import { translations } from '../translations';

interface PedagogyProps {
  currentLang: Language;
}

export const PedagogyAndStats: React.FC<PedagogyProps> = ({ currentLang }) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';

  const iconMap: Record<string, React.ReactNode> = {
    Brain: <Brain className="w-6 h-6 text-[#0284C7]" />,
    Smile: <Smile className="w-6 h-6 text-amber-500" />,
    Sparkles: <Sparkles className="w-6 h-6 text-emerald-500" />,
    Trophy: <Trophy className="w-6 h-6 text-purple-500" />,
  };

  return (
    <section
      id="pedagogy-section"
      className="py-20 bg-slate-50 relative overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 border border-emerald-200 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-600" />
            <span>{t.pedagogy.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.pedagogy.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.pedagogy.subtitle}
          </p>
        </div>

        {/* Big Study Highlight Banner with Graphical Comparison */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-8 sm:p-12 mb-16 relative overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-[#0284C7] font-bold text-xs bg-sky-50 px-3 py-1 rounded-full">
                <TrendingUp className="w-4 h-4" />
                <span>{isRtl ? 'دراسة أكاديمية معتمدة' : 'Niezależne badanie uniwersyteckie'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {isRtl
                  ? '30 دقيقة أسبوعياً تكفي لرفع درجات الرياضيات بنسبة 34%'
                  : '30 minut tygodniowo wystarczy, by poprawić oceny o 34%'}
              </h3>
              <p className="text-slate-600 text-base leading-relaxed">
                {t.pedagogy.studyHighlight}
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <FileText className="w-4 h-4" />
                <span>{t.pedagogy.studySource}</span>
              </div>
            </div>

            {/* Visual Bar Comparison Chart */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-black text-slate-700 block mb-4 uppercase tracking-wider text-center">
                {isRtl ? 'مقارنة تحسن نتائج الاختبارات' : 'Wzrost wyników w testach standaryzowanych'}
              </span>

              <div className="space-y-4">
                {/* Traditional teaching bar */}
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>{isRtl ? 'التعليم التقليدي' : 'Tradycyjna metoda (grupa kontrolna)'}</span>
                    <span>+10.5%</span>
                  </div>
                  <div className="w-full bg-slate-200 h-6 rounded-xl overflow-hidden">
                    <div className="bg-slate-400 h-full w-[31%] rounded-xl flex items-center justify-end px-2 text-[10px] font-bold text-white">
                      10.5%
                    </div>
                  </div>
                </div>

                {/* Matific student bar */}
                <div>
                  <div className="flex justify-between text-xs font-extrabold text-[#0284C7] mb-1">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      <span>{isRtl ? 'مجموعة طلاب ماتيفيك' : 'Uczniowie korzystający z Matific'}</span>
                    </span>
                    <span className="text-base text-emerald-600 font-black">+34.0%</span>
                  </div>
                  <div className="w-full bg-sky-100 h-8 rounded-xl overflow-hidden shadow-inner">
                    <div className="bg-gradient-to-r from-[#0284C7] to-emerald-500 h-full w-[100%] rounded-xl flex items-center justify-end px-3 text-xs font-black text-white shadow-sm">
                      +34.0% ⭐
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 text-center text-[11px] text-slate-500">
                {isRtl
                  ? 'نمو ملحوظ في التفكير التحليلي وحل المسائل غير النمطية'
                  : 'Trzykrotnie szybsze budowanie intuicji algebraicznej i geometrycznej'}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pedagogical Pillars Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.pedagogy.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                {iconMap[pillar.icon] || <Brain className="w-6 h-6 text-[#0284C7]" />}
              </div>
              <h4 className="text-lg font-black text-slate-900">
                {pillar.title}
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
