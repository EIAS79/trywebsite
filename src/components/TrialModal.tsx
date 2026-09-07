import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, CheckCircle2, Sparkles, GraduationCap, Users, ArrowRight } from 'lucide-react';
import { Language, UserRole } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialRole?: UserRole;
  onOpenStudentZone: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialRole = 'parents',
  onOpenStudentZone,
}) => {
  if (!isOpen) return null;

  const isRtl = currentLang === 'ar';
  const [role, setRole] = useState<UserRole>(initialRole === 'students' ? 'parents' : initialRole);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [grade, setGrade] = useState('Klasa 2');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playVictory();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border-4 border-sky-100 max-h-[90vh] overflow-y-auto">
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">
                {isRtl ? 'ابدأ تجربة ماتيفيك المجانية (30 يوماً)' : 'Darmowy 30-dniowy okres próbny'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                {isRtl
                  ? 'وصول كامل وفوري لكافة الألعاب والأنشطة • بدون بطاقة بنكية'
                  : 'Nielimitowany dostęp do wszystkich klas i gier • Bez karty płatniczej'}
              </p>
            </div>

            {/* Role picker */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setRole('teachers');
                }}
                className={`p-3 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                  role === 'teachers'
                    ? 'border-[#0284C7] bg-sky-50 text-[#0284C7] font-black'
                    : 'border-slate-200 text-slate-600 font-bold hover:bg-slate-50'
                }`}
              >
                <GraduationCap className="w-5 h-5 shrink-0" />
                <div className="text-left text-xs">
                  <span className="block">{isRtl ? 'معلم / مدرسة' : 'Dla Nauczyciela'}</span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {isRtl ? 'لفصل دراسي كامل' : 'Dla całej klasy'}
                  </span>
                </div>
              </button>

              <button
                type="button"
                onClick={() => {
                  sound.playPop();
                  setRole('parents');
                }}
                className={`p-3 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                  role === 'parents'
                    ? 'border-[#0284C7] bg-sky-50 text-[#0284C7] font-black'
                    : 'border-slate-200 text-slate-600 font-bold hover:bg-slate-50'
                }`}
              >
                <Users className="w-5 h-5 shrink-0" />
                <div className="text-left text-xs">
                  <span className="block">{isRtl ? 'ولي أمر / منزل' : 'Dla Rodzica'}</span>
                  <span className="text-[10px] text-slate-400 font-normal">
                    {isRtl ? 'لأطفالي في البيت' : 'Dla moich dzieci'}
                  </span>
                </div>
              </button>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  {isRtl ? 'الاسم الكامل' : 'Imię i Nazwisko'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isRtl ? 'مثال: أحمد عبد الله' : 'np. Jan Kowalski'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100 outline-none text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  {isRtl ? 'البريد الإلكتروني' : 'Adres e-mail'}
                </label>
                <input
                  type="email"
                  required
                  placeholder={isRtl ? 'name@school.com' : 'jan.kowalski@szkola.pl'}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0284C7] focus:ring-2 focus:ring-sky-100 outline-none text-sm font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-black text-slate-700 mb-1">
                  {isRtl ? 'الصف الدراسي المستهدف' : 'Poziom edukacyjny / Klasa'}
                </label>
                <select
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0284C7] outline-none text-sm font-semibold bg-white"
                >
                  <option value="K">{isRtl ? 'روضة أطفال (4-6 سنوات)' : 'Przedszkole / Klasa 0'}</option>
                  <option value="Klasa 1">{isRtl ? 'الصف الأول' : 'Klasa 1'}</option>
                  <option value="Klasa 2">{isRtl ? 'الصف الثاني' : 'Klasa 2'}</option>
                  <option value="Klasa 3">{isRtl ? 'الصف الثالث' : 'Klasa 3'}</option>
                  <option value="Klasa 4">{isRtl ? 'الصف الرابع' : 'Klasa 4'}</option>
                  <option value="Klasa 5">{isRtl ? 'الصف الخامس' : 'Klasa 5'}</option>
                  <option value="Klasa 6">{isRtl ? 'الصف السادس' : 'Klasa 6'}</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-extrabold py-3.5 rounded-xl shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all text-sm flex items-center justify-center gap-2"
                >
                  <span>{isRtl ? 'تفعيل الحساب التجريبي الفوري' : 'Aktywuj 30-dniowy darmowy dostęp'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>

              <div className="text-center text-[11px] text-slate-400 font-medium">
                {isRtl
                  ? '🔒 بياناتك محمية وفق أعلى معايير الخصوصية العالمية COPPA و GDPR'
                  : '🔒 100% bezpieczne. Nie wymagamy karty. Zgodność z RODO.'}
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
              🎉
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {isRtl ? 'تهانينا! حسابك التجريبي جاهز' : 'Gratulacje! Dostęp został aktywowany'}
            </h3>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              {isRtl
                ? `مرحباً ${name}! يمكنك الآن تجربة جزيرة الألعاب وأنشطة الصف ${grade} مباشرة.`
                : `Witaj ${name}! Twoje 30 dni bezpłatnego testowania rozpoczęło się właśnie teraz.`}
            </p>

            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-xs text-[#0284C7] font-semibold">
              {isRtl
                ? 'تم إرسال رابط تسجيل الدخول وإرشادات البدء السريع إلى بريدك الإلكتروني.'
                : 'Dane logowania i przewodnik startowy przesłano na adres e-mail.'}
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenStudentZone();
                }}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-black py-3 rounded-xl shadow-md flex items-center justify-center gap-2 text-sm"
              >
                <span>{isRtl ? 'ابدأ اللعب في جزيرة المغامرات الآن!' : 'Wskakuj od razu do gry (Wyspa Przygód)'}</span>
                <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
              </button>
              <button
                onClick={onClose}
                className="w-full py-2 text-xs font-bold text-slate-500 hover:text-slate-800"
              >
                {isRtl ? 'إغلاق والعودة للموقع' : 'Zamknij i przeglądaj dalej'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
