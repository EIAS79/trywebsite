import React, { useState } from 'react';
import {
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  Search,
} from 'lucide-react';
import { Language, GradeLevel } from '../types';
import { translations, sampleCurriculumData } from '../translations';
import { sound } from '../utils/audio';

interface CurriculumBrowserProps {
  currentLang: Language;
  onSelectActivity: () => void;
}

export const CurriculumBrowser: React.FC<CurriculumBrowserProps> = ({
  currentLang,
  onSelectActivity,
}) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';
  const curriculumList = sampleCurriculumData[currentLang] || sampleCurriculumData.pl;

  const [activeGrade, setActiveGrade] = useState<GradeLevel>('1');

  const currentGradeData =
    curriculumList.find((g) => g.grade === activeGrade) || curriculumList[1];

  return (
    <section id="curriculum-section" className="py-20 bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{isRtl ? 'المنهاج والمهارات' : 'Podstawa Programowa MEN'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.curriculum.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.curriculum.subtitle}
          </p>
        </div>

        {/* Grade Navigation Pills */}
        <div className="flex justify-center mb-10 overflow-x-auto py-2">
          <div className="inline-flex gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {curriculumList.map((item) => (
              <button
                key={item.grade}
                id={`curriculum-grade-${item.grade}`}
                onClick={() => {
                  sound.playClick();
                  setActiveGrade(item.grade);
                }}
                className={`px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all whitespace-nowrap ${
                  activeGrade === item.grade
                    ? 'bg-[#0284C7] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {item.grade === 'K'
                  ? (isRtl ? 'روضة (4-6)' : 'Przedszkole / 0')
                  : (isRtl ? `الصف ${item.grade}` : `Klasa ${item.grade}`)}
              </button>
            ))}
          </div>
        </div>

        {/* Active Grade Content */}
        {currentGradeData && (
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-slate-900">
                    {currentGradeData.gradeLabel}
                  </h3>
                  <span className="bg-amber-100 text-amber-900 text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                    {currentGradeData.ageRange}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mt-1 max-w-2xl">
                  {currentGradeData.overview}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 shrink-0">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{t.curriculum.matchedToStandards}</span>
              </div>
            </div>

            {/* Curriculum Topics Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {currentGradeData.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="bg-sky-100 text-[#0284C7] text-xs font-bold px-2.5 py-0.5 rounded-full">
                        {topic.activitiesCount}{' '}
                        {isRtl ? 'نشاطاً تفاعلياً' : 'zadań i gier'}
                      </span>
                      <Layers className="w-4 h-4 text-slate-400" />
                    </div>

                    <h4 className="text-base font-black text-slate-900">
                      {topic.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {topic.description}
                    </p>

                    <div className="space-y-1.5 pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">
                        {isRtl ? 'المهارات المكتسبة:' : 'Kluczowe umiejętności:'}
                      </span>
                      {topic.keySkills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 text-xs font-semibold text-slate-700"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      sound.playPop();
                      onSelectActivity();
                    }}
                    className="w-full mt-2 py-2 bg-slate-50 hover:bg-sky-50 text-[#0284C7] rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-200 hover:border-sky-300"
                  >
                    <span>{isRtl ? 'تجربة أنشطة هذا الدرس' : 'Wypróbuj zadania z tego działu'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
