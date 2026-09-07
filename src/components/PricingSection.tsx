import React, { useState } from 'react';
import { CheckCircle2, Sparkles, Shield, ArrowRight } from 'lucide-react';
import { Language, UserRole } from '../types';
import { translations, samplePricingPlans } from '../translations';
import { sound } from '../utils/audio';

interface PricingProps {
  currentLang: Language;
  onOpenTrialModal: (role?: UserRole) => void;
}

export const PricingSection: React.FC<PricingProps> = ({
  currentLang,
  onOpenTrialModal,
}) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';
  const plans = samplePricingPlans[currentLang] || samplePricingPlans.pl;

  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing-section" className="py-20 bg-slate-50 border-t border-slate-200/80" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>{isRtl ? 'شفافية كاملة بدون التزام' : 'Gwarancja 30 dni za darmo'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Billing Period Switcher */}
        <div className="flex items-center justify-center gap-3 mb-14">
          <span
            className={`text-xs sm:text-sm font-black cursor-pointer ${
              !isAnnual ? 'text-slate-900' : 'text-slate-400'
            }`}
            onClick={() => {
              sound.playClick();
              setIsAnnual(false);
            }}
          >
            {t.pricing.monthly}
          </span>

          <button
            id="pricing-billing-toggle"
            onClick={() => {
              sound.playPop();
              setIsAnnual(!isAnnual);
            }}
            className="w-14 h-8 bg-[#0284C7] rounded-full p-1 transition-colors relative cursor-pointer focus:outline-none"
            aria-label="Toggle billing frequency"
          >
            <div
              className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>

          <div className="flex items-center gap-2">
            <span
              className={`text-xs sm:text-sm font-black cursor-pointer ${
                isAnnual ? 'text-slate-900' : 'text-slate-400'
              }`}
              onClick={() => {
                sound.playClick();
                setIsAnnual(true);
              }}
            >
              {t.pricing.annual}
            </span>
            <span className="bg-amber-400 text-slate-900 text-[11px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              {t.pricing.save25}
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = isAnnual ? plan.priceAnnualMonthly : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-3xl p-8 border flex flex-col justify-between space-y-6 transition-all relative ${
                  plan.popular
                    ? 'border-[#0284C7] ring-4 ring-sky-100 shadow-xl lg:-translate-y-2'
                    : 'border-slate-200/90 shadow-sm hover:shadow-md'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0284C7] text-white text-[11px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {isRtl ? 'الخيار الأكثر طلباً' : 'Najczęściej Wybierany'}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      {plan.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-semibold mt-1">
                      {plan.audience}
                    </p>
                  </div>

                  {/* Price display */}
                  <div className="flex items-baseline gap-1 py-2">
                    <span className="text-4xl font-black text-slate-900">
                      {price} {plan.currency}
                    </span>
                    <span className="text-xs text-slate-400 font-bold">
                      {t.pricing.perMonth}
                    </span>
                  </div>
                  {isAnnual && (
                    <span className="text-[11px] text-emerald-600 font-extrabold block -mt-2">
                      {isRtl ? 'توفير 25% مع الاشتراك السنوي' : 'Oszczędzasz 25% w rozliczeniu rocznym'}
                    </span>
                  )}

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-semibold text-slate-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan CTA button */}
                <button
                  id={`plan-cta-${plan.id}`}
                  onClick={() => {
                    sound.playVictory();
                    onOpenTrialModal(plan.id.includes('school') ? 'teachers' : 'parents');
                  }}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-[#F97316] hover:bg-[#EA580C] text-white shadow-md shadow-orange-200'
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-12 bg-white rounded-2xl p-4 border border-slate-200 max-w-2xl mx-auto flex items-center justify-center gap-3 text-xs text-slate-600 font-semibold text-center">
          <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            {isRtl
              ? 'ضمان كامل: تجربة مجانية 30 يوماً بلا بطاقة دفع، وإلغاء الاشتراك في أي وقت بنقرة واحدة.'
              : 'Bezpieczny zakup: 30 dni darmowej próby bez podawania karty, możliwość rezygnacji w dowolnym momencie.'}
          </span>
        </div>
      </div>
    </section>
  );
};
