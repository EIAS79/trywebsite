import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Star,
  RefreshCw,
  HelpCircle,
  Sparkles,
  Award,
  CheckCircle2,
  ChevronRight,
  Volume2,
  Trophy,
} from 'lucide-react';
import { Language, GradeLevel, MathTopic } from '../types';
import { translations } from '../translations';
import { sound } from '../utils/audio';

interface PlaygroundProps {
  currentLang: Language;
  onOpenStudentZone: () => void;
}

export const MatificPlayground: React.FC<PlaygroundProps> = ({
  currentLang,
  onOpenStudentZone,
}) => {
  const t = translations[currentLang] || translations.pl;
  const isRtl = currentLang === 'ar';

  const [selectedTopic, setSelectedTopic] = useState<MathTopic>('counting');
  const [selectedGrade, setSelectedGrade] = useState<GradeLevel>('1');
  const [stars, setStars] = useState<number>(0);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  // GAME 1: Monster Jar Counting State
  const [jarMonsters, setJarMonsters] = useState<string[]>(['👾', '👾', '👾']);
  const targetCount = 7;

  // GAME 2: Fraction Pizza State
  const [slices, setSlices] = useState<boolean[]>([true, true, false, false]); // 2 of 4 selected
  const targetFraction = { num: 3, den: 4 };

  // GAME 3: Balance Scale State
  // Left: mystery box (val = 4) + 2kg = 6kg
  // Right: user weights added. Target is 6kg!
  const [rightPanWeights, setRightPanWeights] = useState<number[]>([2, 2]);
  const leftTotalWeight = 6;
  const rightTotalWeight = rightPanWeights.reduce((a, b) => a + b, 0);

  // GAME 4: Geometry Perimeter Grid
  const [rectWidth, setRectWidth] = useState<number>(4);
  const [rectHeight, setRectHeight] = useState<number>(3);
  const targetPerimeter = 14; // 2 * (4 + 3) = 14

  // Triggers victory celebration
  const handleVictory = () => {
    sound.playVictory();
    setCompleted(true);
    setStars(3);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  // --- Handlers for Game 1 (Monster Jar) ---
  const addMonsterToJar = (emoji: string) => {
    sound.playPop();
    const next = [...jarMonsters, emoji];
    setJarMonsters(next);
    if (next.length === targetCount) {
      handleVictory();
    } else if (next.length > targetCount) {
      sound.playIncorrect();
    }
  };

  const removeMonsterFromJar = (index: number) => {
    sound.playClick();
    const next = jarMonsters.filter((_, i) => i !== index);
    setJarMonsters(next);
    setCompleted(false);
  };

  // --- Handlers for Game 2 (Fraction Pizza) ---
  const toggleSlice = (index: number) => {
    sound.playPop();
    const updated = [...slices];
    updated[index] = !updated[index];
    setSlices(updated);
    const activeCount = updated.filter(Boolean).length;
    if (activeCount === targetFraction.num) {
      handleVictory();
    } else {
      setCompleted(false);
    }
  };

  // --- Handlers for Game 3 (Balance Scale) ---
  const addWeightToRight = (val: number) => {
    sound.playPop();
    const next = [...rightPanWeights, val];
    setRightPanWeights(next);
    const total = next.reduce((a, b) => a + b, 0);
    if (total === leftTotalWeight) {
      handleVictory();
    } else if (total > leftTotalWeight) {
      sound.playIncorrect();
    }
  };

  const removeWeightFromRight = (index: number) => {
    sound.playClick();
    const next = rightPanWeights.filter((_, i) => i !== index);
    setRightPanWeights(next);
    setCompleted(false);
  };

  // Reset current activity
  const handleReset = () => {
    sound.playClick();
    setCompleted(false);
    setShowHint(false);
    setStars(0);
    if (selectedTopic === 'counting') {
      setJarMonsters(['👾', '👾']);
    } else if (selectedTopic === 'fractions') {
      setSlices([true, false, false, false]);
    } else if (selectedTopic === 'balance') {
      setRightPanWeights([1]);
    } else if (selectedTopic === 'geometry') {
      setRectWidth(3);
      setRectHeight(2);
    }
  };

  const switchTopic = (topic: MathTopic) => {
    sound.playClick();
    setSelectedTopic(topic);
    setCompleted(false);
    setShowHint(false);
    setStars(0);
  };

  return (
    <section
      id="math-playground"
      className="py-16 bg-gradient-to-b from-slate-50 via-sky-50/40 to-white relative overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 text-amber-900 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{isRtl ? 'مختبر الألعاب التفاعلي الحي' : 'Prawdziwe Gry Matific w Przeglądarce'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.playground.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {t.playground.subtitle}
          </p>
        </div>

        {/* Topic Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            id="playground-tab-counting"
            onClick={() => switchTopic('counting')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedTopic === 'counting'
                ? 'bg-[#0284C7] text-white shadow-md shadow-sky-200'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            👾 {t.playground.counting}
          </button>
          <button
            id="playground-tab-fractions"
            onClick={() => switchTopic('fractions')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedTopic === 'fractions'
                ? 'bg-[#0284C7] text-white shadow-md shadow-sky-200'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            🍕 {t.playground.fractions}
          </button>
          <button
            id="playground-tab-balance"
            onClick={() => switchTopic('balance')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedTopic === 'balance'
                ? 'bg-[#0284C7] text-white shadow-md shadow-sky-200'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            ⚖️ {t.playground.balance}
          </button>
          <button
            id="playground-tab-geometry"
            onClick={() => switchTopic('geometry')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedTopic === 'geometry'
                ? 'bg-[#0284C7] text-white shadow-md shadow-sky-200'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            📐 {t.playground.geometry}
          </button>
        </div>

        {/* Grade Selector Strip */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto py-1">
          <span className="text-xs font-bold text-slate-400 mr-2">
            {t.playground.grades}:
          </span>
          {(['K', '1', '2', '3', '4', '5', '6'] as GradeLevel[]).map((g) => (
            <button
              key={g}
              id={`playground-grade-${g}`}
              onClick={() => {
                sound.playClick();
                setSelectedGrade(g);
              }}
              className={`w-9 h-9 rounded-xl font-black text-xs sm:text-sm transition-all ${
                selectedGrade === g
                  ? 'bg-amber-400 text-slate-900 ring-2 ring-amber-400 shadow-sm scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {g === 'K' ? (isRtl ? 'روضة' : '0') : g}
            </button>
          ))}
        </div>

        {/* The Interactive Game Arena Container */}
        <div className="bg-white rounded-3xl border-4 border-sky-100 shadow-2xl overflow-hidden max-w-4xl mx-auto">
          {/* Top Activity Bar */}
          <div className="bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center font-black text-xl">
                {selectedTopic === 'counting' && '👾'}
                {selectedTopic === 'fractions' && '🍕'}
                {selectedTopic === 'balance' && '⚖️'}
                {selectedTopic === 'geometry' && '📐'}
              </div>
              <div>
                <h3 className="text-lg font-black tracking-wide">
                  {selectedTopic === 'counting' &&
                    (isRtl ? 'مزرعة الوحوش: اجمع 7 كائنات في الوعاء' : 'Słoik Potworów: Umieść dokładnie 7 stworków w słoiku')}
                  {selectedTopic === 'fractions' &&
                    (isRtl ? 'مخبز البيتزا: لون 3/4 من البيتزا' : 'Piekarnia Ułamków: Pokoloruj dokładnie 3/4 pizzy')}
                  {selectedTopic === 'balance' &&
                    (isRtl ? 'الميزان الجبري: اجعل كفتي الميزان متساويتين' : 'Waga Szalkowa: Zrównoważ obie szalki wagi')}
                  {selectedTopic === 'geometry' &&
                    (isRtl ? 'مستكشف المحيط: اضبط المستطيل ليصبح محيطه 14 سم' : 'Odkrywca Geometrii: Utwórz prostokąt o obwodzie 14 cm')}
                </h3>
                <span className="text-xs text-sky-100 font-medium">
                  {isRtl ? `الصف الدراسي: ${selectedGrade}` : `Matific • Klasa ${selectedGrade} • Nauka przez manipulację`}
                </span>
              </div>
            </div>

            {/* Stars score */}
            <div className="flex items-center gap-1.5 bg-black/20 backdrop-blur-xs px-4 py-1.5 rounded-full">
              {[1, 2, 3].map((starIdx) => (
                <Star
                  key={starIdx}
                  className={`w-5 h-5 transition-all ${
                    starIdx <= stars
                      ? 'fill-amber-300 text-amber-300 scale-110'
                      : 'text-white/40'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Activity Canvas Body */}
          <div className="p-6 sm:p-10 bg-radial from-white via-sky-50/20 to-slate-50 min-h-[380px] flex flex-col items-center justify-center">
            {/* ===================== 1. MONSTER JAR GAME ===================== */}
            {selectedTopic === 'counting' && (
              <div className="w-full max-w-lg space-y-6 text-center">
                {/* The Big Glass Jar */}
                <div className="relative mx-auto w-64 sm:w-72 h-56 rounded-b-[40px] rounded-t-2xl border-4 border-sky-300 bg-sky-100/40 p-4 flex flex-wrap items-end justify-center content-end gap-2 shadow-inner overflow-hidden">
                  <div className="absolute top-2 left-0 w-full text-center text-xs font-bold text-sky-700 bg-white/70 py-1">
                    {isRtl
                      ? `العدد في الوعاء: ${jarMonsters.length} من ${targetCount}`
                      : `W słoiku: ${jarMonsters.length} z ${targetCount} stworków`}
                  </div>

                  {jarMonsters.map((emoji, idx) => (
                    <button
                      key={idx}
                      onClick={() => removeMonsterFromJar(idx)}
                      title={isRtl ? 'اضغط لإخراج الوحش' : 'Kliknij, aby wyjąć'}
                      className="text-3xl hover:scale-125 transition-transform cursor-pointer animate-in zoom-in-50"
                    >
                      {emoji}
                    </button>
                  ))}

                  {jarMonsters.length === 0 && (
                    <div className="w-full text-center text-sm font-semibold text-slate-400 pb-10">
                      {isRtl ? 'الوعاء فارغ! أضف كائنات من الأسفل' : 'Słoik jest pusty! Dodaj stworki poniżej'}
                    </div>
                  )}
                </div>

                {/* Monster Picker Options */}
                <div className="space-y-2">
                  <p className="text-xs font-extrabold text-slate-500 uppercase tracking-wider">
                    {isRtl ? 'اضغط على الكائن لإضافته إلى الوعاء:' : 'Kliknij stworka, aby włożyć go do słoika:'}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    {['👾', '🐙', '🐸', '🦄'].map((emoji, i) => (
                      <button
                        key={i}
                        id={`monster-pick-${i}`}
                        onClick={() => addMonsterToJar(emoji)}
                        disabled={completed}
                        className="w-14 h-14 bg-white border-2 border-slate-200 hover:border-[#0284C7] rounded-2xl text-3xl shadow-sm hover:shadow-md transition-all active:scale-95 disabled:opacity-50"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ===================== 2. FRACTION PIZZA GAME ===================== */}
            {selectedTopic === 'fractions' && (
              <div className="w-full max-w-lg space-y-6 text-center">
                <div className="text-sm font-bold text-slate-600">
                  {isRtl
                    ? `المطلوب: تلوين 3 أجزاء من 4 أجزاء متساوية (3/4)`
                    : `Zadanie: Zaznacz 3 z 4 równych kawałków (3/4)`}
                </div>

                {/* Round Fraction Pizza Slices */}
                <div className="relative mx-auto w-56 h-56 rounded-full border-8 border-amber-600 bg-amber-100 grid grid-cols-2 p-2 gap-1.5 shadow-xl overflow-hidden">
                  {slices.map((isSelected, i) => (
                    <button
                      key={i}
                      id={`pizza-slice-${i}`}
                      onClick={() => toggleSlice(i)}
                      className={`h-full rounded-2xl flex items-center justify-center text-lg font-black transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-rose-500 text-white shadow-inner scale-95'
                          : 'bg-amber-200/80 text-amber-800 hover:bg-amber-300'
                      }`}
                    >
                      {isSelected ? '🍕 1/4' : '⬜'}
                    </button>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-2xl border border-slate-200 shadow-xs">
                  <span className="text-sm font-extrabold text-slate-700">
                    {isRtl ? 'الكسر المظلل حالياً:' : 'Wybrany ułamek:'}
                  </span>
                  <div className="text-center font-black text-rose-600 leading-tight">
                    <span className="block border-b-2 border-rose-600 px-2 text-lg">
                      {slices.filter(Boolean).length}
                    </span>
                    <span className="block text-lg">4</span>
                  </div>
                  <span className="text-sm font-bold text-slate-400">
                    {slices.filter(Boolean).length === targetFraction.num ? '== 3/4 ✓' : '≠ 3/4'}
                  </span>
                </div>
              </div>
            )}

            {/* ===================== 3. BALANCE SCALE GAME ===================== */}
            {selectedTopic === 'balance' && (
              <div className="w-full max-w-lg space-y-6 text-center">
                <div className="text-sm font-bold text-slate-600">
                  {isRtl
                    ? `الكفة اليمنى: صندوق مجهول (4 كجم) + 2 كجم = 6 كجم. اجعل الكفة اليسرى 6 كجم بالضبط!`
                    : `Lewa szalka: skrzynia (4 kg) + odważnik 2 kg = 6 kg. Dobierz odważniki na prawą szalkę, by zrównoważyć wagę!`}
                </div>

                {/* Animated Balance Beam Representation */}
                <div className="relative py-8">
                  {/* Fulcrum */}
                  <div className="w-0 h-0 border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[40px] border-b-slate-700 mx-auto" />

                  {/* Tilting Beam */}
                  <div
                    className="h-3 bg-slate-800 rounded-full mx-auto w-80 relative transition-transform duration-500 shadow-md"
                    style={{
                      transform: `rotate(${
                        rightTotalWeight === leftTotalWeight
                          ? 0
                          : rightTotalWeight > leftTotalWeight
                          ? 10
                          : -10
                      }deg)`,
                    }}
                  >
                    {/* Left Pan */}
                    <div className="absolute -top-12 -left-4 w-32 bg-sky-100 border-2 border-sky-400 rounded-xl p-2 shadow-md">
                      <div className="text-[11px] font-extrabold text-sky-800">
                        📦 X (4kg) + ⚖️ 2kg
                      </div>
                      <div className="text-xs font-black text-sky-900">= 6 kg</div>
                    </div>

                    {/* Right Pan */}
                    <div className="absolute -top-12 -right-4 w-32 bg-amber-100 border-2 border-amber-400 rounded-xl p-2 shadow-md">
                      <div className="text-[11px] font-extrabold text-amber-800 flex flex-wrap justify-center gap-1">
                        {rightPanWeights.map((w, idx) => (
                          <button
                            key={idx}
                            onClick={() => removeWeightFromRight(idx)}
                            className="bg-amber-400 text-slate-900 text-[10px] font-black px-1.5 py-0.5 rounded shadow-xs hover:bg-rose-300"
                            title="Usuń odważnik"
                          >
                            {w}kg ✕
                          </button>
                        ))}
                      </div>
                      <div className="text-xs font-black text-amber-900 mt-1">
                        = {rightTotalWeight} kg
                      </div>
                    </div>
                  </div>
                </div>

                {/* Add Weight Buttons */}
                <div className="flex items-center justify-center gap-3">
                  <span className="text-xs font-bold text-slate-500">
                    {isRtl ? 'أضف كتل وزنية:' : 'Dodaj odważnik:'}
                  </span>
                  {[1, 2, 3].map((val) => (
                    <button
                      key={val}
                      id={`weight-btn-${val}`}
                      onClick={() => addWeightToRight(val)}
                      disabled={completed}
                      className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-extrabold px-3.5 py-1.5 rounded-xl text-xs shadow-xs transition-transform active:scale-95"
                    >
                      +{val} kg
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ===================== 4. GEOMETRY PERIMETER GAME ===================== */}
            {selectedTopic === 'geometry' && (
              <div className="w-full max-w-lg space-y-6 text-center">
                <div className="text-sm font-bold text-slate-600">
                  {isRtl
                    ? `المطلوب: محيط المستطيل = 2 × (العرض + الارتفاع) = 14 سم`
                    : `Zadanie: Obwód prostokąta = 2 × (Szerokość + Wysokość) = 14 cm`}
                </div>

                {/* Interactive Rectangle Visual */}
                <div className="flex items-center justify-center py-4">
                  <div
                    className="border-4 border-emerald-500 bg-emerald-100/60 rounded-xl flex items-center justify-center transition-all duration-300 relative shadow-sm"
                    style={{
                      width: `${rectWidth * 36}px`,
                      height: `${rectHeight * 36}px`,
                    }}
                  >
                    <span className="absolute -top-6 text-xs font-extrabold text-emerald-800">
                      {rectWidth} cm
                    </span>
                    <span className="absolute -left-10 text-xs font-extrabold text-emerald-800">
                      {rectHeight} cm
                    </span>
                    <span className="text-xs font-black text-emerald-900">
                      {isRtl ? `المساحة = ${rectWidth * rectHeight} سم²` : `Pole = ${rectWidth * rectHeight} cm²`}
                    </span>
                  </div>
                </div>

                {/* Controls for width & height */}
                <div className="grid grid-cols-2 gap-4 max-w-xs mx-auto">
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block mb-1">
                      {isRtl ? 'العرض (W)' : 'Szerokość'}
                    </span>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          sound.playPop();
                          const n = Math.max(1, rectWidth - 1);
                          setRectWidth(n);
                          if (2 * (n + rectHeight) === targetPerimeter) handleVictory();
                          else setCompleted(false);
                        }}
                        className="w-7 h-7 bg-slate-100 rounded-lg font-bold"
                      >
                        -
                      </button>
                      <span className="font-black text-base">{rectWidth}</span>
                      <button
                        onClick={() => {
                          sound.playPop();
                          const n = Math.min(6, rectWidth + 1);
                          setRectWidth(n);
                          if (2 * (n + rectHeight) === targetPerimeter) handleVictory();
                          else setCompleted(false);
                        }}
                        className="w-7 h-7 bg-slate-100 rounded-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl border border-slate-200">
                    <span className="text-xs font-bold text-slate-500 block mb-1">
                      {isRtl ? 'الارتفاع (H)' : 'Wysokość'}
                    </span>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => {
                          sound.playPop();
                          const n = Math.max(1, rectHeight - 1);
                          setRectHeight(n);
                          if (2 * (rectWidth + n) === targetPerimeter) handleVictory();
                          else setCompleted(false);
                        }}
                        className="w-7 h-7 bg-slate-100 rounded-lg font-bold"
                      >
                        -
                      </button>
                      <span className="font-black text-base">{rectHeight}</span>
                      <button
                        onClick={() => {
                          sound.playPop();
                          const n = Math.min(6, rectHeight + 1);
                          setRectHeight(n);
                          if (2 * (rectWidth + n) === targetPerimeter) handleVictory();
                          else setCompleted(false);
                        }}
                        className="w-7 h-7 bg-slate-100 rounded-lg font-bold"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-xs font-extrabold text-slate-700">
                  {isRtl
                    ? `المحيط الحالي = 2 × (${rectWidth} + ${rectHeight}) = ${2 * (rectWidth + rectHeight)} سم`
                    : `Aktualny obwód = 2 × (${rectWidth} + ${rectHeight}) = ${2 * (rectWidth + rectHeight)} cm`}
                </div>
              </div>
            )}

            {/* Victory banner */}
            {completed && (
              <div className="mt-6 w-full max-w-md bg-emerald-50 border-2 border-emerald-400 p-4 rounded-2xl flex items-center justify-between animate-in zoom-in-95">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-emerald-900 text-sm">
                      {t.playground.successMessage}
                    </h4>
                    <p className="text-xs text-emerald-700">
                      {isRtl ? '+3 نجوم ذهبية أضيفت إلى رصيدك!' : '+3 złote gwiazdki dodane do profilu!'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleReset}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xs"
                >
                  {isRtl ? 'تحدٍ جديد' : 'Następne'}
                </button>
              </div>
            )}

            {/* Hint Callout */}
            {showHint && (
              <div className="mt-4 w-full max-w-md bg-amber-50 border border-amber-300 p-3 rounded-xl text-xs font-semibold text-amber-900 flex items-start gap-2.5 animate-in fade-in">
                <span className="text-xl">🧙‍♂️</span>
                <div>
                  <span className="font-extrabold block">
                    {isRtl ? 'تلميح البروفيسور ماتيفيك:' : 'Wskazówka Profesora Matific:'}
                  </span>
                  {selectedTopic === 'counting' &&
                    (isRtl ? 'عد الكائنات بصوت واضح، اضغط على الوحش في الوعاء لإخراجه إذا تجاوزت الرقم 7.' : 'Zliczaj stworki jeden po drugim. Jeśli włożysz za dużo, kliknij stworka w słoiku, by go wyjąć.')}
                  {selectedTopic === 'fractions' &&
                    (isRtl ? 'الكسر 3/4 يعني أن البيتزا مقسمة 4 أقسام ونحتاج اختيار 3 أجزاء بالضبط.' : '3/4 oznacza, że całość ma 4 równe części, a my potrzebujemy dokładnie 3 zaznaczone kawałki.')}
                  {selectedTopic === 'balance' &&
                    (isRtl ? 'الكفة اليمنى تزن 4 + 2 = 6 كجم. في الكفة اليسرى اجمع كتل حتى تصل 6.' : 'Aby waga była równa, obie szalki muszą mieć dokładnie 6 kg (4+2 = 6).')}
                  {selectedTopic === 'geometry' &&
                    (isRtl ? 'المحيط هو مجموع الأضلاع الأربعة: (العرض + الارتفاع) × 2 = 14، جرب 4 و 3.' : 'Obwód to suma 4 boków: 2 × (Szerokość + Wysokość). Spróbuj szerokości 4 cm i wysokości 3 cm (4+3=7, 7×2=14).')}
                </div>
              </div>
            )}
          </div>

          {/* Action Footer Bar */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                id="playground-reset-btn"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{t.playground.resetGame}</span>
              </button>

              <button
                id="playground-hint-btn"
                onClick={() => {
                  sound.playClick();
                  setShowHint(!showHint);
                }}
                className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-100 hover:bg-amber-200 px-3 py-2 rounded-lg transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{t.playground.tryHint}</span>
              </button>
            </div>

            <button
              id="playground-full-adventure-btn"
              onClick={onOpenStudentZone}
              className="flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl shadow-md shadow-sky-200 hover:shadow-lg transition-all"
            >
              <span>{isRtl ? 'فتح جزيرة المغامرات الكاملة (جميع المراحل)' : 'Otwórz pełną Wyspę Przygód'}</span>
              <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
