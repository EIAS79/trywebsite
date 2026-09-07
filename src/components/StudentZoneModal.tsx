import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  X,
  Star,
  Trophy,
  Sparkles,
  ArrowRight,
  Volume2,
  VolumeX,
  Award,
  Gamepad2,
  RefreshCw,
} from 'lucide-react';
import { Language } from '../types';
import { sound } from '../utils/audio';

interface StudentZoneProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
}

export const StudentZoneModal: React.FC<StudentZoneProps> = ({
  isOpen,
  onClose,
  currentLang,
}) => {
  if (!isOpen) return null;

  const isRtl = currentLang === 'ar';
  const [selectedAvatar, setSelectedAvatar] = useState('👾');
  const [currentLevel, setCurrentLevel] = useState<number>(1);
  const [totalStars, setTotalStars] = useState<number>(3);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [levelFinished, setLevelFinished] = useState(false);

  // Mini levels data
  const quests = [
    {
      id: 1,
      title: isRtl ? 'المستوى 1: شاطئ الأرقام السحري' : 'Poziom 1: Plaża Wesołych Liczb',
      question: isRtl ? 'ما هو العدد الذي يكمل: 6 + ___ = 10 ؟' : 'Jaka liczba dopełnia do 10: 6 + ___ = 10 ?',
      options: [3, 4, 5, 6],
      correctAnswer: 4,
      hint: isRtl ? 'احسب من 6 حتى تصل 10 (7, 8, 9, 10)' : 'Policz od 6 w górę do 10 (7, 8, 9, 10 to 4 kroki)',
    },
    {
      id: 2,
      title: isRtl ? 'المستوى 2: ميزان قلعة الوحوش' : 'Poziom 2: Magiczna Waga w Zamku',
      question: isRtl ? 'إذا كانت 3 كرات تزن 12 كجم، فكم وزن الكرة الواحدة؟' : 'Jeśli 3 równe kule ważą łącznie 12 kg, ile waży jedna kula?',
      options: [2, 3, 4, 6],
      correctAnswer: 4,
      hint: isRtl ? '12 ÷ 3 = 4 كجم' : '12 podzielone przez 3 równe kule to 4 kg',
    },
    {
      id: 3,
      title: isRtl ? 'المستوى 3: كنز جزيرة الكسور' : 'Poziom 3: Skarbiec Wyspy Ułamków',
      question: isRtl ? 'أي كسر أكبر قيمة: 1/2 أم 1/4 ؟' : 'Który ułamek jest większy: 1/2 czy 1/4 ?',
      options: [1, 2, 3, 4], // display custom text
      customOptions: ['1/4', '1/2', 'متساويان', 'لا يمكن المقارنة'],
      customOptionsPl: ['1/4', '1/2', 'Są równe', 'Trudno powiedzieć'],
      correctAnswer: 1, // index of 1/2
      hint: isRtl ? 'نصف البيتزا أكبر من ربعها!' : 'Połowa pizzy (1/2) to więcej niż jej ćwiartka (1/4)!',
    },
  ];

  const currentQuest = quests[currentLevel - 1] || quests[0];

  const handleAnswerSelect = (optionValue: number) => {
    if (optionValue === currentQuest.correctAnswer) {
      sound.playVictory();
      setTotalStars((s) => s + 3);
      setLevelFinished(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    } else {
      sound.playIncorrect();
    }
  };

  const nextLevel = () => {
    sound.playCorrect();
    setLevelFinished(false);
    if (currentLevel < quests.length) {
      setCurrentLevel((lvl) => lvl + 1);
    } else {
      setCurrentLevel(1);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-2 sm:p-6 animate-in fade-in"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="bg-gradient-to-b from-[#0284C7] via-[#0EA5E9] to-[#0369A1] rounded-3xl w-full max-w-4xl h-[92vh] max-h-[750px] relative shadow-2xl border-4 border-amber-300 flex flex-col overflow-hidden text-white">
        {/* Top Header Bar */}
        <div className="bg-black/20 backdrop-blur-md px-6 py-3.5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl">{selectedAvatar}</span>
              <div className="flex gap-1">
                {['👾', '🐙', '🦄', '🤖'].map((avatar) => (
                  <button
                    key={avatar}
                    onClick={() => {
                      sound.playPop();
                      setSelectedAvatar(avatar);
                    }}
                    className={`w-7 h-7 rounded-lg text-sm flex items-center justify-center transition-transform ${
                      selectedAvatar === avatar
                        ? 'bg-amber-400 text-slate-900 scale-110 shadow-sm'
                        : 'bg-white/20 hover:bg-white/30'
                    }`}
                  >
                    {avatar}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <span className="text-xs font-black tracking-wide block">
                {isRtl ? 'جزيرة مغامرات ماتيفيك' : 'Wyspa Przygód Matific'}
              </span>
              <span className="text-[10px] text-sky-200">
                {isRtl ? 'وضع تدريب الأبطال' : 'Strefa Ucznia • Tryb Treningowy'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Stars Counter */}
            <div className="bg-amber-400 text-slate-950 px-3.5 py-1 rounded-full font-black text-xs sm:text-sm flex items-center gap-1.5 shadow-md animate-pulse">
              <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>{totalStars} ⭐</span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 transition-colors"
              aria-label="Zamknij grę"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Game Arena Stage */}
        <div className="flex-1 p-6 flex flex-col justify-between overflow-y-auto">
          {/* Level Progress Map Indicator */}
          <div className="max-w-md mx-auto w-full bg-white/15 backdrop-blur-md p-3 rounded-2xl flex items-center justify-around">
            {quests.map((q) => (
              <button
                key={q.id}
                onClick={() => {
                  sound.playClick();
                  setCurrentLevel(q.id);
                  setLevelFinished(false);
                }}
                className={`flex items-center gap-1.5 text-xs font-black px-3 py-1.5 rounded-xl transition-all ${
                  currentLevel === q.id
                    ? 'bg-amber-400 text-slate-900 shadow-md scale-105'
                    : currentLevel > q.id
                    ? 'bg-emerald-400 text-slate-950'
                    : 'bg-white/20 text-white/70'
                }`}
              >
                <span>{q.id < currentLevel ? '✓' : `Misja ${q.id}`}</span>
              </button>
            ))}
          </div>

          {/* Active Question Box */}
          <div className="my-auto max-w-xl mx-auto w-full bg-white text-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl border-4 border-amber-300 text-center space-y-6 animate-in zoom-in-95">
            <div>
              <span className="inline-block bg-sky-100 text-[#0284C7] px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2">
                {currentQuest.title}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                {currentQuest.question}
              </h3>
            </div>

            {/* Answer Options Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {currentLevel === 3 ? (
                (isRtl ? currentQuest.customOptions : currentQuest.customOptionsPl)?.map((optText, optIdx) => (
                  <button
                    key={optIdx}
                    onClick={() => handleAnswerSelect(optIdx)}
                    disabled={levelFinished}
                    className="py-4 px-3 bg-slate-50 hover:bg-sky-50 border-2 border-slate-200 hover:border-[#0284C7] rounded-2xl font-black text-base text-slate-800 hover:text-[#0284C7] shadow-xs active:scale-95 transition-all disabled:opacity-50"
                  >
                    {optText}
                  </button>
                ))
              ) : (
                currentQuest.options.map((val) => (
                  <button
                    key={val}
                    onClick={() => handleAnswerSelect(val)}
                    disabled={levelFinished}
                    className="py-4 bg-slate-50 hover:bg-sky-50 border-2 border-slate-200 hover:border-[#0284C7] rounded-2xl font-black text-2xl text-slate-800 hover:text-[#0284C7] shadow-xs active:scale-95 transition-all disabled:opacity-50"
                  >
                    {val}
                  </button>
                ))
              )}
            </div>

            {/* Level Victory Banner */}
            {levelFinished && (
              <div className="p-4 bg-emerald-50 border-2 border-emerald-400 rounded-2xl text-emerald-900 space-y-3 animate-in zoom-in-95">
                <div className="flex items-center justify-center gap-2 font-black text-lg">
                  <Trophy className="w-6 h-6 text-amber-500" />
                  <span>{isRtl ? 'إجابة صحيحة وعبقرية! +3 نجوم ⭐' : 'Doskonale! Misja ukończona! +3 ⭐'}</span>
                </div>
                <button
                  onClick={nextLevel}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-6 py-2.5 rounded-xl shadow-md transition-all text-sm inline-flex items-center gap-2"
                >
                  <span>{isRtl ? 'المهمة التالية' : 'Następna Misja'}</span>
                  <ArrowRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                </button>
              </div>
            )}
          </div>

          {/* Bottom Hint Strip */}
          <div className="text-center text-xs text-sky-100 font-medium pb-2">
            💡 {currentQuest.hint}
          </div>
        </div>
      </div>
    </div>
  );
};
