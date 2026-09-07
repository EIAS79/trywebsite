import React, { useState } from 'react';
import { X, User, QrCode, Lock, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Language, UserRole } from '../types';
import { sound } from '../utils/audio';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onOpenStudentZone: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({
  isOpen,
  onClose,
  currentLang,
  onOpenStudentZone,
}) => {
  if (!isOpen) return null;

  const isRtl = currentLang === 'ar';
  const [tab, setTab] = useState<'student' | 'teacher' | 'parent'>('student');
  const [studentCode, setStudentCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInNotice, setLoggedInNotice] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playVictory();
    if (tab === 'student') {
      onClose();
      onOpenStudentZone();
    } else {
      setLoggedInNotice(true);
      setTimeout(() => {
        setLoggedInNotice(false);
        onClose();
      }, 1500);
    }
  };

  const handleQuickDemo = (role: 'student' | 'teacher') => {
    sound.playVictory();
    if (role === 'student') {
      onClose();
      onOpenStudentZone();
    } else {
      setLoggedInNotice(true);
      setTimeout(() => {
        setLoggedInNotice(false);
        onClose();
      }, 1500);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border-4 border-sky-100">
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

        <div className="text-center space-y-1 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#0284C7] text-white flex items-center justify-center mx-auto font-black text-lg">
            m
          </div>
          <h3 className="text-xl font-black text-slate-900">
            {isRtl ? 'تسجيل الدخول إلى ماتيفيك' : 'Zaloguj się do Matific'}
          </h3>
          <p className="text-xs text-slate-500">
            {isRtl ? 'اختر نوع الحساب للمتابعة' : 'Wybierz swój profil użytkownika'}
          </p>
        </div>

        {/* Tab switcher */}
        <div className="grid grid-cols-3 gap-1 bg-slate-100 p-1 rounded-2xl mb-6 text-xs font-bold">
          <button
            onClick={() => {
              sound.playClick();
              setTab('student');
            }}
            className={`py-2 rounded-xl transition-all ${
              tab === 'student'
                ? 'bg-amber-400 text-slate-900 shadow-sm font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎮 {isRtl ? 'طالب' : 'Uczeń'}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setTab('teacher');
            }}
            className={`py-2 rounded-xl transition-all ${
              tab === 'teacher'
                ? 'bg-white text-[#0284C7] shadow-sm font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🎓 {isRtl ? 'معلم' : 'Nauczyciel'}
          </button>
          <button
            onClick={() => {
              sound.playClick();
              setTab('parent');
            }}
            className={`py-2 rounded-xl transition-all ${
              tab === 'parent'
                ? 'bg-white text-[#0284C7] shadow-sm font-black'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            👨‍👩‍👧 {isRtl ? 'ولي أمر' : 'Rodzic'}
          </button>
        </div>

        {loggedInNotice ? (
          <div className="text-center py-8 space-y-2 bg-emerald-50 rounded-2xl border border-emerald-200">
            <span className="text-3xl">✨</span>
            <h4 className="text-base font-black text-emerald-900">
              {isRtl ? 'تم تسجيل الدخول بنجاح!' : 'Zalogowano pomyślnie!'}
            </h4>
            <p className="text-xs text-emerald-700">
              {isRtl ? 'جاري نقلك إلى لوحة التحكم...' : 'Przekierowywanie do Twojego panelu...'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4">
            {tab === 'student' ? (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRtl ? 'بطاقة تسجيل الدخول أو اسم المستخدم' : 'Nazwa użytkownika / Karta logowania'}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={isRtl ? 'مثال: leo_123' : 'np. leon_klasa2'}
                      value={studentCode}
                      onChange={(e) => setStudentCode(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0284C7] outline-none text-sm font-bold"
                    />
                    <User className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-bold text-slate-500 py-1">
                  <button
                    type="button"
                    onClick={() => handleQuickDemo('student')}
                    className="text-[#0284C7] hover:underline flex items-center gap-1"
                  >
                    <QrCode className="w-4 h-4" />
                    <span>{isRtl ? 'دخول سريع تجريبي كطالب' : 'Szybkie demo dla ucznia (1-klik)'}</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRtl ? 'البريد الإلكتروني' : 'Adres e-mail'}
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="nauczyciel@szkola.pl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0284C7] outline-none text-sm font-semibold"
                    />
                    <Mail className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {isRtl ? 'كلمة المرور' : 'Hasło'}
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0284C7] outline-none text-sm font-semibold"
                    />
                    <Lock className="w-4 h-4 text-slate-400 absolute right-3 top-3.5" />
                  </div>
                </div>
              </>
            )}

            <button
              type="submit"
              className={`w-full py-3.5 rounded-xl font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 ${
                tab === 'student'
                  ? 'bg-amber-400 hover:bg-amber-500 text-slate-900'
                  : 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
              }`}
            >
              <span>{isRtl ? 'دخول الآن' : 'Zaloguj się'}</span>
              <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>

            {/* Quick Demo Test Action */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => handleQuickDemo('student')}
                className="inline-flex items-center gap-1.5 text-xs font-black text-amber-800 bg-amber-100 hover:bg-amber-200 px-3 py-1.5 rounded-xl transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{isRtl ? '⚡ تجربة فورية: العب دون تسجيل حساب' : '⚡ Szybki test: Wskocz do gry bez hasła'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
