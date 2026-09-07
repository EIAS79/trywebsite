import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { sampleFaqs, translations } from '../translations';
import { sound } from '../utils/audio';

interface FaqProps {
  currentLang: Language;
}

export const FaqSection: React.FC<FaqProps> = ({ currentLang }) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';
  const faqs = sampleFaqs[currentLang] || sampleFaqs.pl;

  const [openId, setOpenId] = useState<string | null>('f1');

  const toggleFaq = (id: string) => {
    sound.playClick();
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-sky-100 text-[#0284C7] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{isRtl ? 'إجابات وافية' : 'Pomoc i Odpowiedzi'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.faq.title}
          </h2>
          <p className="text-base text-slate-600">
            {t.faq.subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="border border-slate-200/90 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 bg-white hover:bg-slate-50 flex items-center justify-between gap-4 transition-colors cursor-pointer"
                >
                  <span className="font-extrabold text-sm sm:text-base text-slate-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0284C7]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
