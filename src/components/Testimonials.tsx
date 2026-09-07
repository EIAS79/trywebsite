import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { sampleTestimonials } from '../translations';
import { sound } from '../utils/audio';

interface TestimonialsProps {
  currentLang: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ currentLang }) => {
  const isRtl = currentLang === 'ar';
  const list = sampleTestimonials[currentLang] || sampleTestimonials.pl;
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    sound.playClick();
    setActiveIndex((current) => (current === 0 ? list.length - 1 : current - 1));
  };

  const next = () => {
    sound.playClick();
    setActiveIndex((current) => (current === list.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="py-20 bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>{isRtl ? 'آراء وتجارب واقعية' : 'Opinie Nauczycieli i Rodziców'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {isRtl
              ? 'قصص نجاح ملهمة مع منصة ماتيفيك'
              : 'Zobacz, dlaczego ponad 98% nauczycieli poleca Matific'}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {isRtl
              ? 'معلمون، أولياء أمور، ومديرو مدارس يشاركون تجربتهم في تحويل شغف الأطفال بالرياضيات.'
              : 'Głosy pedagogów i rodziców, którzy na co dzień obserwują przełom w postępach swoich dzieci.'}
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {list.map((item, idx) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, rIdx) => (
                    <Star
                      key={rIdx}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{item.content}"
                </p>

                {item.metric && (
                  <div className="inline-block bg-sky-100 text-[#0284C7] text-xs font-black px-2.5 py-1 rounded-lg">
                    {item.metric}
                  </div>
                )}
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-sm font-black text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold">
                    {item.role}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {item.schoolOrCity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
