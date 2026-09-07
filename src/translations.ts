import { GradeCurriculum, PricingPlan, Testimonial, FaqItem } from './types';

export interface TranslationSet {
  topBar: {
    announcement: string;
    trialCta: string;
  };
  nav: {
    teachers: string;
    parents: string;
    students: string;
    whyMatific: string;
    curriculum: string;
    activities: string;
    research: string;
    pricing: string;
    login: string;
    freeTrial: string;
    playStudentZone: string;
  };
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    startTrial: string;
    playDemo: string;
    noCardRequired: string;
    stat1: string;
    stat1Desc: string;
    stat2: string;
    stat2Desc: string;
    stat3: string;
    stat3Desc: string;
    stat4: string;
    stat4Desc: string;
  };
  playground: {
    title: string;
    subtitle: string;
    allTopics: string;
    counting: string;
    addition: string;
    fractions: string;
    balance: string;
    geometry: string;
    grades: string;
    launchGame: string;
    starsWon: string;
    tryHint: string;
    resetGame: string;
    nextChallenge: string;
    successMessage: string;
  };
  whoIsItFor: {
    title: string;
    subtitle: string;
    teachersTab: string;
    parentsTab: string;
    studentsTab: string;
    teachersTitle: string;
    teachersDesc: string;
    teachersBullets: string[];
    parentsTitle: string;
    parentsDesc: string;
    parentsBullets: string[];
    studentsTitle: string;
    studentsDesc: string;
    studentsBullets: string[];
    exploreFeatures: string;
  };
  pedagogy: {
    badge: string;
    title: string;
    subtitle: string;
    studyHighlight: string;
    studySource: string;
    pillars: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  curriculum: {
    title: string;
    subtitle: string;
    selectGrade: string;
    viewTopics: string;
    matchedToStandards: string;
  };
  tour: {
    title: string;
    subtitle: string;
    adventureIsland: string;
    adventureIslandDesc: string;
    mathWorkshop: string;
    mathWorkshopDesc: string;
    arena: string;
    arenaDesc: string;
    analytics: string;
    analyticsDesc: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    annual: string;
    save25: string;
    perMonth: string;
    billedAnnually: string;
  };
  faq: {
    title: string;
    subtitle: string;
  };
  ctaSection: {
    title: string;
    subtitle: string;
    buttonTeacher: string;
    buttonParent: string;
  };
  footer: {
    tagline: string;
    rights: string;
    curriculumStandards: string;
    privacy: string;
    terms: string;
    security: string;
  };
}

export const translations: Record<'pl' | 'ar' | 'en', TranslationSet> = {
  pl: {
    topBar: {
      announcement: 'Wypróbuj bezpłatnie przez 30 dni w swojej szkole lub w domu!',
      trialCta: 'Rozpocznij próbę',
    },
    nav: {
      teachers: 'Dla Nauczycieli i Szkół',
      parents: 'Dla Rodziców',
      students: 'Strefa Ucznia',
      whyMatific: 'Dlaczego Matific',
      curriculum: 'Program nauczania',
      activities: 'Działania i Gry',
      research: 'Badania naukowe',
      pricing: 'Cennik',
      login: 'Zaloguj się',
      freeTrial: 'Wypróbuj za darmo',
      playStudentZone: 'Graj jako Uczeń',
    },
    hero: {
      badge: 'NAGRADZANA PLATFORMA MATEMATYCZNA DLA KLAS 0-6',
      title: 'Nauka matematyki, którą',
      highlight: 'dzieci uwielbiają',
      subtitle: 'Odkryj setki interaktywnych gier i ćwiczeń matematycznych stworzonych przez ekspertów edukacyjnych. Udowodniono, że Matific podnosi wyniki testów o 34%.',
      startTrial: 'Wypróbuj bezpłatnie',
      playDemo: 'Zagraj w bezpłatne demo',
      noCardRequired: 'Bez karty płatniczej • Natychmiastowy dostęp • Zgodne z MEN',
      stat1: '+34%',
      stat1Desc: 'wzrost wyników z testów',
      stat2: '120+',
      stat2Desc: 'krajów na całym świecie',
      stat3: '3M+',
      stat3Desc: 'aktywnych uczniów',
      stat4: '98%',
      stat4Desc: 'zadowolonych nauczycieli',
    },
    playground: {
      title: 'Zagraj i przetestuj zadania Matific',
      subtitle: 'Wybierz klasę i zagraj w prawdziwe, interaktywne gry matematyczne w swojej przeglądarce.',
      allTopics: 'Wszystkie tematy',
      counting: 'Zliczanie i Liczby',
      addition: 'Dodawanie i Odejmowanie',
      fractions: 'Ułamki zwykłe',
      balance: 'Waga szalkowa (Równania)',
      geometry: 'Geometria i Kształty',
      grades: 'Klasa',
      launchGame: 'Rozpocznij zadanie',
      starsWon: 'Zdobyte gwiazdki:',
      tryHint: 'Wskazówka od Profesora',
      resetGame: 'Zacznij od nowa',
      nextChallenge: 'Kolejne wyzwanie',
      successMessage: 'Wspaniale! Świetne zrozumienie matematyczne!',
    },
    whoIsItFor: {
      title: 'Stworzone dla każdego etapu edukacji',
      subtitle: 'Niezależnie od tego, czy uczysz całą klasę, czy wspierasz własne dziecko w domu.',
      teachersTab: 'Dla Szkół i Nauczycieli',
      parentsTab: 'Dla Rodziców',
      studentsTab: 'Dla Dzieci i Uczniów',
      teachersTitle: 'Potężne narzędzie dydaktyczne do lekcji i zadań domowych',
      teachersDesc: 'Oszczędzaj czas dzięki automatycznemu sprawdzaniu, indywidualizacji nauczania i szczegółowym raportom postępów w czasie rzeczywistym.',
      teachersBullets: [
        'Zgodność z podstawą programową MEN dla klas 1-6 oraz przedszkola',
        'Automatyczne generowanie zadań dopasowanych do tempa każdego ucznia',
        'Bogata baza kart pracy do druku i prezentacji na tablicy interaktywnej',
        'Pełne raporty diagnostyczne ułatwiające ocenianie i wywiady z rodzicami',
      ],
      parentsTitle: 'Mądry czas przed ekranem, który buduje pewność siebie',
      parentsDesc: 'Zmień frustrację z matematyki w radość odkrywania. Dzieci uczą się bez presji i strachu przed błędem.',
      parentsBullets: [
        'Cotygodniowe raporty postępów przesyłane prosto na Twój e-mail',
        'Bezpieczne środowisko bez reklam i rozpraszaczy',
        'Zadania oparte na manipulacji wizualnej, ułatwiające zrozumienie trudnych pojęć',
        'Dostęp na tabletach, komputerach i telefonach w dowolnym miejscu',
      ],
      studentsTitle: 'Magiczny świat matematycznych przygód i wyzwań',
      studentsDesc: 'Dzieci nie tylko rozwiązują zadania — wyruszają na Wyspę Przygód, zbierają skarby i odblokowują urocze awatary!',
      studentsBullets: [
        'Własny personalizowany awatar i zbieranie gwiezdnych odznak',
        'Gry i animacje, które czynią liczby namacalnymi i wesołymi',
        'Przyjazne wskazówki krok po kroku zamiast kar za pomyłki',
        'Rywalizacja w bezpiecznych turniejach klasowych na Arenie',
      ],
      exploreFeatures: 'Dowiedz się więcej o możliwościach',
    },
    pedagogy: {
      badge: 'NAUKA POTWIERDZONA BADANIAMI',
      title: 'Podejście pedagogiczne, które naprawdę działa',
      subtitle: 'Matific opiera się na rygorystycznych badaniach dydaktyki matematyki Uniwersytetu Western Sydney i Harvardu.',
      studyHighlight: 'Badania niezależne wykazały, że uczniowie korzystający z Matific przez 30 minut tygodniowo poprawili swoje wyniki w testach matematycznych o średnio 34%.',
      studySource: 'Źródło: Badanie Uniwersytetu Western Sydney na próbie 2500 uczniów.',
      pillars: [
        {
          title: 'Głębokie zrozumienie pojęciowe',
          desc: 'Dzieci manipulują obiektami, a nie tylko zapamiętują schematy. Uczą się DLACZEGO reguła działa, a nie tylko jak ją zastosować.',
          icon: 'Brain',
        },
        {
          title: 'Bezpieczne eksperymentowanie',
          desc: 'Błędy są naturalną częścią nauki. Dajemy natychmiastowe wizualne wskazówki, zachęcając do prób bez lęku przed oceną.',
          icon: 'Smile',
        },
        {
          title: 'Adaptacyjna ścieżka rozwoju',
          desc: 'Inteligentny algorytm dostosowuje poziom trudności do tempa ucznia, gwarantując poczucie sukcesu.',
          icon: 'Sparkles',
        },
        {
          title: 'Motywacja wewnętrzna',
          desc: 'Fabuła, wyzwania i humor sprawiają, że dzieci same proszą o kolejną partię matematyki.',
          icon: 'Trophy',
        },
      ],
    },
    curriculum: {
      title: 'Zgodność z Programem Nauczania',
      subtitle: 'Tysiące starannie opracowanych zadań przypisanych do każdego etapu edukacji wczesnoszkolnej i podstawowej.',
      selectGrade: 'Wybierz poziom edukacyjny:',
      viewTopics: 'Zobacz tematy i umiejętności',
      matchedToStandards: 'W 100% zgodne z podstawą programową Ministerstwa Edukacji Narodowej (MEN)',
    },
    tour: {
      title: 'Odkryj ekosystem Matific',
      subtitle: 'Kompletne środowisko do angażującej i mierzalnej nauki matematyki.',
      adventureIsland: 'Wyspa Przygód',
      adventureIslandDesc: 'Główna ścieżka gry dla dzieci z mapami skarbów, zamkami i wyzwaniami logicznymi.',
      mathWorkshop: 'Warsztat Matematyczny',
      mathWorkshopDesc: 'Ponad 200 interaktywnych wirtualnych pomocy dydaktycznych (ułamki, wagi, osie liczbowe).',
      arena: 'Arena Treningowa',
      arenaDesc: 'Szybkie ćwiczenie płynności rachunkowej i tabliczki mnożenia w emocjonujących minigrach.',
      analytics: 'Panel Analityczny',
      analyticsDesc: 'Dla nauczycieli i rodziców: natychmiastowa diagnoza luk w wiedzy i gotowe rekomendacje.',
    },
    pricing: {
      title: 'Przejrzysty cennik dla każdego',
      subtitle: 'Wybierz plan idealny dla swojej rodziny lub szkoły. Rozpocznij od darmowego 30-dniowego okresu próbnego.',
      monthly: 'Rozliczenie miesięczne',
      annual: 'Rozliczenie roczne',
      save25: 'Oszczędź 25%',
      perMonth: '/ miesiąc',
      billedAnnually: 'rozliczane rocznie',
    },
    faq: {
      title: 'Często zadawane pytania',
      subtitle: 'Wszystko, co musisz wiedzieć o wdrożeniu Matific w domu lub szkole.',
    },
    ctaSection: {
      title: 'Gotowy, by Twoje dzieci pokochały matematykę?',
      subtitle: 'Dołącz do ponad 3 milionów uczniów w 120 krajach, którzy codziennie z uśmiechem rozwiązują zadania Matific.',
      buttonTeacher: 'Darmowa próba dla mojej Szkoły',
      buttonParent: 'Darmowa próba dla Rodzica',
    },
    footer: {
      tagline: 'Nauka matematyki, którą dzieci uwielbiają. Nagradzana platforma edukacyjna od przedszkola do klasy 6.',
      rights: 'Wszelkie prawa zastrzeżone. Matific Sp. z o.o.',
      curriculumStandards: 'Zgodność z MEN • Certyfikat Bezpieczeństwa Danych • RODO / COPPA',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin usługi',
      security: 'Bezpieczeństwo i Dostępność',
    },
  },

  ar: {
    topBar: {
      announcement: 'جرّب ماتيفيك مجاناً لمدة 30 يوماً في مدرستك أو في منزلك!',
      trialCta: 'ابدأ التجربة الآن',
    },
    nav: {
      teachers: 'للمعلمين والمدارس',
      parents: 'لأولياء الأمور',
      students: 'منطقة الطلاب',
      whyMatific: 'لماذا ماتيفيك',
      curriculum: 'المنهاج التعليمي',
      activities: 'الأنشطة والألعاب',
      research: 'الأبحاث التربوية',
      pricing: 'الأسعار',
      login: 'تسجيل الدخول',
      freeTrial: 'تجربة مجانية',
      playStudentZone: 'العب كطالب',
    },
    hero: {
      badge: 'المنصة العالمية الحائزة على جوائز لتعليم الرياضيات (روضة - سادس)',
      title: 'تعلّم الرياضيات بطريقة',
      highlight: 'يعشقها الأطفال',
      subtitle: 'اكتشف مئات الألعاب والأنشطة التفاعلية المصممة بواسطة خبراء التربية. أثبتت الدراسات العلمية أن ماتيفيك يرفع نتائج الاختبارات بنسبة 34%.',
      startTrial: 'ابدأ التجربة المجانية',
      playDemo: 'العب التجربة التفاعلية الآن',
      noCardRequired: 'لا يلزم بطاقة ائتمان • وصول فوري • متوافق مع المناهج المعتمدة',
      stat1: '+34%',
      stat1Desc: 'تحسن في نتائج اختبارات الرياضيات',
      stat2: '120+',
      stat2Desc: 'دولة حول العالم',
      stat3: '3M+',
      stat3Desc: 'طالب نشط ومتحمس',
      stat4: '98%',
      stat4Desc: 'رضا المعلمين والمدارس',
    },
    playground: {
      title: 'جرّب أنشطة وألعاب ماتيفيك بنفسك',
      subtitle: 'اختر الصف والمهارة والعب مباشرة في متصفحك تجربة حقيقية تفاعلية.',
      allTopics: 'جميع الموضوعات',
      counting: 'العد والأرقام',
      addition: 'الجمع والطرح',
      fractions: 'الكسور الاعتيادية',
      balance: 'الميزان ذو الكفتين (المعادلات)',
      geometry: 'الهندسة والأشكال',
      grades: 'الصف الدراسي',
      launchGame: 'ابدأ النشاط',
      starsWon: 'النجوم المكتسبة:',
      tryHint: 'تلميح من البروفيسور',
      resetGame: 'إعادة النشاط',
      nextChallenge: 'التحدي التالي',
      successMessage: 'أحسنت يا بطل! فهم رياضي رائع!',
    },
    whoIsItFor: {
      title: 'مصمم خصيصاً لكل ركن في العملية التعليمية',
      subtitle: 'سواء كنت معلماً يدير فصلاً كاملاً أو ولي أمر يدعم طفله في المنزل.',
      teachersTab: 'للمدارس والمعلمين',
      parentsTab: 'لأولياء الأمور',
      studentsTab: 'للأطفال والطلاب',
      teachersTitle: 'أداة تعليمية فائقة القوة للدروس والواجبات المدرسية',
      teachersDesc: 'وفّر وقتك الثمين مع التصحيح الآلي، والتخصيص التلقائي لمستويات الطلاب، وتقارير التشخيص الفورية.',
      teachersBullets: [
        'تطابق تام مع المناهج التعليمية لمراحل الروضة والصفوف 1-6',
        'تخصيص الواجبات أوتوماتيكياً حسب سرعة واستيعاب كل طالب',
        'أوراق عمل قابلة للطباعة وعروض للسبورة التفاعلية داخل الفصل',
        'تقارير فورية دقيقة تكشف نقاط الضعف وتسهل متابعة الأهالي',
      ],
      parentsTitle: 'وقت شاشة هادف وممتع يبني ثقة طفلك في نفسه',
      parentsDesc: 'حوّل خوف طفلك من الرياضيات إلى متعة واكتشاف يومي دون إحباط أو توتر.',
      parentsBullets: [
        'تقارير أسبوعية تفصيلية تصل مباشرة إلى بريدك الإلكتروني',
        'بيئة آمنة 100% وخالية تماماً من الإعلانات والمشتتات',
        'أنشطة قائمة على التعامل البصري الملموس لتبسيط المفاهيم الصعبة',
        'يعمل بسلاسة على الأجهزة اللوحية والحواسيب والهواتف الذكية',
      ],
      studentsTitle: 'عالم ساحر من المغامرات والجوائز الرياضية',
      studentsDesc: 'لا يكتفي الطلاب بحل التمارين بل ينطلقون في جزيرة المغامرات ويجمعون الكنوز والشخصيات المحبوبة!',
      studentsBullets: [
        'تخصيص شخصية رمزية خاصة وجمع النجوم والشارات الذهبية',
        'رسوم متحركة تجعل الأرقام ممتعة وحية بين يديك',
        'تلميحات ذكية تشجع على التعلم من الخطأ دون خوف',
        'منافسات شريفة ومثيرة في حلبة التدريب وسرعة الحساب',
      ],
      exploreFeatures: 'استكشف المزايا بالتفصيل',
    },
    pedagogy: {
      badge: 'تعليم قائم على الأبحاث الأكاديمية',
      title: 'نهج تربوي مبتكر يضمن التفوق الحقيقي',
      subtitle: 'بنيت منصة ماتيفيك وفق دراسات دقيقة أجراها خبراء الرياضيات في جامعة ويسترن سيدني وهارفارد.',
      studyHighlight: 'أظهرت دراسة مستقلة أن الطلاب الذين استخدموا ماتيفيك لمدة 30 دقيقة أسبوعياً حققوا قفزة نوعية في درجات اختباراتهم بلغت 34%.',
      studySource: 'المصدر: دراسة جامعة ويسترن سيدني شملت أكثر من 2500 تلميذ.',
      pillars: [
        {
          title: 'الفهم العميق للمفاهيم',
          desc: 'يتعامل الطالب مع الكائنات بصرياً وملموساً ويفهم سبب القاعدة الرياضية بدلاً من حفظها الصم.',
          icon: 'Brain',
        },
        {
          title: 'التعلم القائم على التجربة',
          desc: 'الخطأ خطوة طبيعية نحو الفهم، حيث نقدم إرشادات مرئية متدرجة تحفز على المحاولة والاستكشاف.',
          icon: 'Smile',
        },
        {
          title: 'مسار تعلم تكيفي وذكي',
          desc: 'يتكيف النظام تلقائياً مع وتيرة كل طالب لضمان التحدي المناسب والشعور الدائم بالإنجاز.',
          icon: 'Sparkles',
        },
        {
          title: 'الدافع الذاتي الحقيقي',
          desc: 'الحبكة القصصية والتشويق والألعاب الهادفة تجعل الأطفال يطلبون حل المسائل بأنفسهم.',
          icon: 'Trophy',
        },
      ],
    },
    curriculum: {
      title: 'تطابق دقيق مع المنهاج التعليمي',
      subtitle: 'آلاف الأنشطة المقسمة بعناية وفق كل مرحلة دراسية من الروضة حتى الصف السادس.',
      selectGrade: 'اختر الصف الدراسي:',
      viewTopics: 'عرض الموضوعات والمهارات',
      matchedToStandards: 'متوافق تماماً مع المعايير الوزارية والدولية للرياضيات',
    },
    tour: {
      title: 'استكشف عالم ماتيفيك المتكامل',
      subtitle: 'منظومة تفاعلية شاملة لتعلم الرياضيات ومتابعة التقدم.',
      adventureIsland: 'جزيرة المغامرات',
      adventureIslandDesc: 'المسار الرئيسي للطفل مع خرائط الكنوز والقلاع وحل الألغاز المشوقة.',
      mathWorkshop: 'مختبر الرياضيات',
      mathWorkshopDesc: 'أكثر من 200 أداة مساعدة رقمية تفاعلية (الكسور، الموازين، مستقيم الأعداد).',
      arena: 'حلبة التدريب السريع',
      arenaDesc: 'تدريب سريع ومكثف لجدول الضرب والعمليات الحسابية الذهنية.',
      analytics: 'لوحة تحليلات المعلم والولي',
      analyticsDesc: 'تشخيص فوري للثغرات التعليمية مع توصيات فورية لمعالجتها.',
    },
    pricing: {
      title: 'خطط اشتراك واضحة ومناسبة للجميع',
      subtitle: 'اختر الخطة المناسبة لأسرتك أو مدرستك وابدأ بتجربة مجانية مدتها 30 يوماً.',
      monthly: 'الدفع الشهري',
      annual: 'الدفع السنوي',
      save25: 'وفر 25%',
      perMonth: '/ شهرياً',
      billedAnnually: 'تُدفع سنوياً',
    },
    faq: {
      title: 'الأسئلة الأكثر شيوعاً',
      subtitle: 'كل ما تحتاج لمعرفته حول تطبيق ماتيفيك في المنزل أو المدرسة.',
    },
    ctaSection: {
      title: 'هل أنت مستعد ليحب أطفالك الرياضيات؟',
      subtitle: 'انضم إلى أكثر من 3 ملايين طالب حول العالم يتعلمون ويبتسمون يومياً مع ماتيفيك.',
      buttonTeacher: 'تجربة مجانية لمدرستي',
      buttonParent: 'تجربة مجانية لطفلي',
    },
    footer: {
      tagline: 'تعلم الرياضيات بطريقة يعشقها الأطفال. المنصة الحائزة على جوائز من الروضة حتى الصف السادس.',
      rights: 'جميع الحقوق محفوظة. منصة ماتيفيك التعليمية.',
      curriculumStandards: 'معتمد تربوياً • شهادة حماية خصوصية بيانات الأطفال • COPPA & GDPR',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      security: 'الأمان وسهولة الوصول',
    },
  },

  en: {
    topBar: {
      announcement: 'Try Matific free for 30 days in your school or at home!',
      trialCta: 'Start Free Trial',
    },
    nav: {
      teachers: 'For Teachers & Schools',
      parents: 'For Parents',
      students: 'Student Zone',
      whyMatific: 'Why Matific',
      curriculum: 'Curriculum',
      activities: 'Activities & Games',
      research: 'Pedagogy & Research',
      pricing: 'Pricing',
      login: 'Log In',
      freeTrial: 'Free Trial',
      playStudentZone: 'Play as Student',
    },
    hero: {
      badge: 'AWARD-WINNING K-6 MATHEMATICS LEARNING PLATFORM',
      title: 'Math learning that kids',
      highlight: 'truly love',
      subtitle: 'Discover hundreds of hands-on interactive math games engineered by pedagogy experts. Proven by academic research to improve test scores by 34%.',
      startTrial: 'Start Free Trial',
      playDemo: 'Play Interactive Demo',
      noCardRequired: 'No credit card required • Instant access • Aligned to curriculum',
      stat1: '+34%',
      stat1Desc: 'increase in test scores',
      stat2: '120+',
      stat2Desc: 'countries worldwide',
      stat3: '3M+',
      stat3Desc: 'active learners',
      stat4: '98%',
      stat4Desc: 'teacher approval rate',
    },
    playground: {
      title: 'Play & Experience Matific Activities',
      subtitle: 'Select a grade level and jump into genuine hands-on math mini-games directly in your browser.',
      allTopics: 'All Topics',
      counting: 'Counting & Numbers',
      addition: 'Addition & Subtraction',
      fractions: 'Visual Fractions',
      balance: 'Balance Scales (Equations)',
      geometry: 'Geometry & Shapes',
      grades: 'Grade',
      launchGame: 'Start Activity',
      starsWon: 'Stars Earned:',
      tryHint: 'Professor Hint',
      resetGame: 'Reset Activity',
      nextChallenge: 'Next Challenge',
      successMessage: 'Splendid! Excellent conceptual understanding!',
    },
    whoIsItFor: {
      title: 'Built for Every Member of the Learning Journey',
      subtitle: 'Whether you run an entire school district or support your child at the kitchen table.',
      teachersTab: 'For Schools & Teachers',
      parentsTab: 'For Parents',
      studentsTab: 'For Kids & Students',
      teachersTitle: 'A powerful instructional companion for classroom and homework',
      teachersDesc: 'Save hours with automated grading, automated differentiation, and real-time actionable learning insights.',
      teachersBullets: [
        '100% matched to national standards and local curriculum boards',
        'Auto-assigned tasks that match the personal learning pace of every student',
        'Rich interactive whiteboard tools and printable worksheets',
        'In-depth diagnostic reports ready for parent-teacher conferences',
      ],
      parentsTitle: 'High-value screen time that builds genuine math confidence',
      parentsDesc: 'Transform math battles into joyful discovery. Children learn playfully without anxiety or pressure.',
      parentsBullets: [
        'Weekly digestible progress reports delivered directly to your inbox',
        '100% child-safe, distraction-free environment with zero ads',
        'Visual manipulatives that make abstract mathematical concepts crystal clear',
        'Works seamlessly across tablets, PCs, iPads, and mobile devices',
      ],
      studentsTitle: 'A whimsical adventure world of math quests and treasures',
      studentsDesc: 'Children do not just fill worksheets — they travel across Adventure Island, conquer quests, and unlock avatars!',
      studentsBullets: [
        'Customizable avatars and collectible reward badges',
        'Vibrant animations that bring numbers to life',
        'Step-by-step encouraging hints whenever they get stuck',
        'Friendly speed challenges in the Training Arena',
      ],
      exploreFeatures: 'Discover All Capabilities',
    },
    pedagogy: {
      badge: 'GROUNDED IN RIGOROUS RESEARCH',
      title: 'A Pedagogical Approach Proven by Science',
      subtitle: 'Matific is engineered around research conducted by Western Sydney University, UC Berkeley, and Harvard experts.',
      studyHighlight: 'Independent university studies proved that students utilizing Matific for just 30 minutes a week boosted mathematical test scores by an average of 34%.',
      studySource: 'Source: Western Sydney University study across 2,500 elementary students.',
      pillars: [
        {
          title: 'Deep Conceptual Understanding',
          desc: 'Students manipulate physical-like digital objects to understand WHY formulas work before memorizing how.',
          icon: 'Brain',
        },
        {
          title: 'Fearless Inquiry & Tinkering',
          desc: 'Mistakes are natural learning milestones. We provide scaffolded visual feedback without punitive grades.',
          icon: 'Smile',
        },
        {
          title: 'Adaptive Learning Trajectory',
          desc: 'Intelligent AI loops adapt real-time difficulty to deliver the Goldilocks zone of challenge and success.',
          icon: 'Sparkles',
        },
        {
          title: 'Intrinsic Game Motivation',
          desc: 'Character-driven storylines and humor turn math practice into a reward children look forward to.',
          icon: 'Trophy',
        },
      ],
    },
    curriculum: {
      title: 'Comprehensive Curriculum Alignment',
      subtitle: 'Thousands of standards-aligned math activities designed for early childhood through upper elementary.',
      selectGrade: 'Select Grade Level:',
      viewTopics: 'View Topics & Skills',
      matchedToStandards: 'Matched to Polish MEN, US Common Core, UK National Curriculum, and International Baccalaureate (IB)',
    },
    tour: {
      title: 'Explore the Matific Ecosystem',
      subtitle: 'An end-to-end suite designed to make teaching effortless and learning irresistible.',
      adventureIsland: 'Adventure Island',
      adventureIslandDesc: 'The student-led journey map featuring treasure chests, riddles, and engaging story chapters.',
      mathWorkshop: 'Math Workshop',
      mathWorkshopDesc: 'Over 200 virtual manipulatives (fraction bars, balance scales, hundred boards, geometric solids).',
      arena: 'Training Arena',
      arenaDesc: 'High-energy math fluency and multiplication table speed drills.',
      analytics: 'Teacher & Parent Dashboard',
      analyticsDesc: 'Instant learning gap diagnosis and automated group intervention suggestions.',
    },
    pricing: {
      title: 'Simple, Transparent Pricing Plans',
      subtitle: 'Choose the right plan for your household or your school. Get started with a full 30-day free trial.',
      monthly: 'Billed Monthly',
      annual: 'Billed Annually',
      save25: 'Save 25%',
      perMonth: '/ month',
      billedAnnually: 'billed annually',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about getting started with Matific at home or in class.',
    },
    ctaSection: {
      title: 'Ready for your kids to love math?',
      subtitle: 'Join more than 3 million students across 120 countries discovering the magic of numbers with Matific.',
      buttonTeacher: 'Free Trial for My School',
      buttonParent: 'Free Trial for Parents',
    },
    footer: {
      tagline: 'Math learning kids love. Award-winning digital platform from Kindergarten through 6th grade.',
      rights: 'All rights reserved. Matific Educational Platform.',
      curriculumStandards: 'Ministry & Board Aligned • Certified Child Data Safe • COPPA & GDPR Compliant',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      security: 'Security & Accessibility',
    },
  },
};

export const sampleCurriculumData: Record<string, GradeCurriculum[]> = {
  pl: [
    {
      grade: 'K',
      gradeLabel: 'Przedszkole / Klasa 0 (Wiek 4-6)',
      ageRange: '4-6 lat',
      overview: 'Budowanie intuicji liczbowej, rozpoznawanie kształtów, proste zliczanie obiektów do 20 i porównywanie wielkości.',
      topics: [
        {
          id: 'k1',
          title: 'Liczby i zliczanie do 10',
          activitiesCount: 42,
          description: 'Łączenie liczby z ilością przedmiotów, przeliczanie w przód i w tył.',
          keySkills: ['Rozpoznawanie cyfr', 'Zliczanie obiektów', 'Układanie w pary'],
        },
        {
          id: 'k2',
          title: 'Wielkości i porównania',
          activitiesCount: 35,
          description: 'Większy, mniejszy, równy. Porządkowanie według wzrostu i długości.',
          keySkills: ['Pojęcia przestrzenne', 'Więcej / Mniej', 'Porządkowanie'],
        },
        {
          id: 'k3',
          title: 'Kształty i figury płaskie',
          activitiesCount: 28,
          description: 'Koło, kwadrat, trójkąt, prostokąt w przedmiotach codziennego użytku.',
          keySkills: ['Rozpoznawanie kształtów', 'Dopasowywanie', 'Symetria'],
        },
      ],
    },
    {
      grade: '1',
      gradeLabel: 'Klasa 1 (Wiek 6-7)',
      ageRange: '6-7 lat',
      overview: 'Dodawanie i odejmowanie w zakresie 20, rozkład liczb na dziesiątki i jedności, zegar i podstawowe jednostki miary.',
      topics: [
        {
          id: 'g1_1',
          title: 'Dodawanie i odejmowanie do 20',
          activitiesCount: 64,
          description: 'Wizualne dopełnianie do 10, oś liczbowa i związki między działaniami.',
          keySkills: ['Dopełnianie do 10', 'Oś liczbowa', 'Zadania tekstowe'],
        },
        {
          id: 'g1_2',
          title: 'System dziesiątkowy do 100',
          activitiesCount: 48,
          description: 'Dziesiątki i jedności, grupowanie koralików i klocków bazowych.',
          keySkills: ['Wartość pozycyjna', 'Porównywanie liczb', 'Kolejność'],
        },
        {
          id: 'g1_3',
          title: 'Pomiary i zegar',
          activitiesCount: 36,
          description: 'Odczytywanie pełnych godzin, dni tygodnia i proste zakupy z monetami.',
          keySkills: ['Zegar wskazówkowy', 'Monety i banknoty', 'Długość'],
        },
      ],
    },
    {
      grade: '2',
      gradeLabel: 'Klasa 2 (Wiek 7-8)',
      ageRange: '7-8 lat',
      overview: 'Wprowadzenie do mnożenia i dzielenia jako równego podziału, dodawanie do 100, ułamki połowy i ćwiartki.',
      topics: [
        {
          id: 'g2_1',
          title: 'Wstęp do mnożenia i tabliczki mnożenia',
          activitiesCount: 72,
          description: 'Tablice prostokątne, wielokrotności liczb 2, 3, 4, 5 i 10.',
          keySkills: ['Układy prostokątne', 'Wielokrotności', 'Równy podział'],
        },
        {
          id: 'g2_2',
          title: 'Dodawanie i odejmowanie z przekroczeniem progu',
          activitiesCount: 58,
          description: 'Sprytne metody pamięciowe i wizualizacja na klockach Dienes\'a.',
          keySkills: ['Przekraczanie dziesiątki', 'Szacowanie', 'Weryfikacja'],
        },
        {
          id: 'g2_3',
          title: 'Pierwsze ułamki: 1/2 i 1/4',
          activitiesCount: 32,
          description: 'Dzielenie pizzy i czekolady na równe części.',
          keySkills: ['Pojęcie całości i części', 'Połowa', 'Ćwiartka'],
        },
      ],
    },
    {
      grade: '3',
      gradeLabel: 'Klasa 3 (Wiek 8-9)',
      ageRange: '8-9 lat',
      overview: 'Opanowanie pełnej tabliczki mnożenia i dzielenia do 100, liczby do 1000, obwód wielokątów i odczyt kwadransów.',
      topics: [
        {
          id: 'g3_1',
          title: 'Biegłość w mnożeniu do 100',
          activitiesCount: 85,
          description: 'Płynność pamięciowa z wesołymi potworkami na Arenie.',
          keySkills: ['Tabliczka mnożenia', 'Dzielenie z resztą', 'Własności mnożenia'],
        },
        {
          id: 'g3_2',
          title: 'Liczby do 1000 i działania pisemne',
          activitiesCount: 60,
          description: 'Setki, dziesiątki i jedności, algorytmy dodawania w słupku.',
          keySkills: ['Dodawanie pisemne', 'Odejmowanie pisemne', 'Rząd wielkości'],
        },
        {
          id: 'g3_3',
          title: 'Geometria: Obwody i kąty proste',
          activitiesCount: 45,
          description: 'Mierzenie linijką, obliczanie obwodu prostokąta i kwadratu.',
          keySkills: ['Obwód', 'Kąt prosty', 'Siatki prostych brył'],
        },
      ],
    },
    {
      grade: '4',
      gradeLabel: 'Klasa 4 (Wiek 9-10)',
      ageRange: '9-10 lat',
      overview: 'Ułamki zwykłe i dziesiętne, pole powierzchni prostokąta, liczby wielocyfrowe, zadania tekstowe wieloetapowe.',
      topics: [
        {
          id: 'g4_1',
          title: 'Ułamki zwykłe o jednakowych mianownikach',
          activitiesCount: 78,
          description: 'Dodawanie i odejmowanie ułamków, ułamki właściwe i niewłaściwe.',
          keySkills: ['Mianownik i licznik', 'Liczby mieszane', 'Dodawanie ułamków'],
        },
        {
          id: 'g4_2',
          title: 'Wstęp do ułamków dziesiętnych',
          activitiesCount: 54,
          description: 'Części dziesiąte i setne na osi liczbowej i monetach.',
          keySkills: ['Zapis dziesiętny', 'Przecinek dziesiętny', 'Porównywanie'],
        },
        {
          id: 'g4_3',
          title: 'Pole powierzchni i jednostki',
          activitiesCount: 48,
          description: 'Kwadraty jednostkowe, pole kwadratu i prostokąta.',
          keySkills: ['Pole figur', 'cm² i m²', 'Planowanie przestrzenne'],
        },
      ],
    },
    {
      grade: '5',
      gradeLabel: 'Klasa 5 (Wiek 10-11)',
      ageRange: '10-11 lat',
      overview: 'Działania na ułamkach o różnych mianownikach, procenty, kąty, objętość prostopadłościanu.',
      topics: [
        {
          id: 'g5_1',
          title: 'Działania na ułamkach zwykłych',
          activitiesCount: 90,
          description: 'Sprowadzanie do wspólnego mianownika, mnożenie i dzielenie.',
          keySkills: ['NWW', 'Mnożenie ułamków', 'Odwrotność'],
        },
        {
          id: 'g5_2',
          title: 'Liczby całkowite i ujemne',
          activitiesCount: 45,
          description: 'Temperatura, dług, poruszanie się po osi poniżej zera.',
          keySkills: ['Liczby ujemne', 'Moduł liczby', 'Dodawanie ze znakiem'],
        },
        {
          id: 'g5_3',
          title: 'Trójkąty, czworokąty i kąty',
          activitiesCount: 52,
          description: 'Suma kątów w trójkącie, pole równoległoboku i trapezu.',
          keySkills: ['Wzory na pola', 'Klasyfikacja trójkątów', 'Kątomierz'],
        },
      ],
    },
    {
      grade: '6',
      gradeLabel: 'Klasa 6 (Wiek 11-12)',
      ageRange: '11-12 lat',
      overview: 'Równania z jedną niewiadomą (waga szalkowa), proporcje, statystyka i prawdopodobieństwo, bryły obrotowe.',
      topics: [
        {
          id: 'g6_1',
          title: 'Wstęp do algebry i równania',
          activitiesCount: 75,
          description: 'Rozwiązywanie równań za pomocą wizualnej wagi dwuszalkowej.',
          keySkills: ['Redukcja wyrazów', 'Rozwiązywanie x', 'Modele algebraiczne'],
        },
        {
          id: 'g6_2',
          title: 'Procenty i diagramy',
          activitiesCount: 60,
          description: 'Obliczanie procentu danej liczby, diagramy kołowe i słupkowe.',
          keySkills: ['Obliczenia procentowe', 'Odczyt wykresów', 'Średnia'],
        },
        {
          id: 'g6_3',
          title: 'Graniastosłupy i objętość',
          activitiesCount: 48,
          description: 'Pole powierzchni całkowitej i objętość brył przestrzennych.',
          keySkills: ['Siatki brył', 'Objętość V = Pp · H', 'Jednostki litrowe'],
        },
      ],
    },
  ],
  ar: [
    {
      grade: 'K',
      gradeLabel: 'رياض الأطفال (4 - 6 سنوات)',
      ageRange: '4-6 سنوات',
      overview: 'بناء الحس العددي الأولي، تمييز الأشكال، والعد البصري المرح حتى الرقم 20.',
      topics: [
        {
          id: 'k1',
          title: 'الأرقام والعد حتى 10',
          activitiesCount: 42,
          description: 'ربط العدد بكمية الأشياء، والعد تصاعدياً وتنازلياً بصرياً.',
          keySkills: ['التعرف على الأرقام', 'عد الكائنات', 'المطابقة والازدواج'],
        },
        {
          id: 'k2',
          title: 'المقارنات والأحجام',
          activitiesCount: 35,
          description: 'أكبر من، أصغر من، يساوي، والترتيب حسب الطول والارتفاع.',
          keySkills: ['المفاهيم المكانية', 'أكثر / أقل', 'التسلسل'],
        },
        {
          id: 'k3',
          title: 'الأشكال الهندسية الأساسية',
          activitiesCount: 28,
          description: 'الدائرة والمربع والمثلث والمستطيل من واقع الحياة اليومية.',
          keySkills: ['تمييز الأشكال', 'التطابق', 'التماثل'],
        },
      ],
    },
    {
      grade: '1',
      gradeLabel: 'الصف الأول الابتدائي (6 - 7 سنوات)',
      ageRange: '6-7 سنوات',
      overview: 'الجمع والطرح في حدود 20، تجزئة الأعداد إلى آحاد وعشرات، والوقت بالساعات الكاملة.',
      topics: [
        {
          id: 'g1_1',
          title: 'الجمع والطرح حتى 20',
          activitiesCount: 64,
          description: 'إكمال العشرة، واستخدام خط الأعداد والعلاقة العكسية بين العمليات.',
          keySkills: ['مكونات العشرة', 'خط الأعداد', 'المسائل اللفظية'],
        },
        {
          id: 'g1_2',
          title: 'القيمة المنزلية حتى 100',
          activitiesCount: 48,
          description: 'الآحاد والعشرات، وتجميع المكعبات ونماذج القيمة المكانية.',
          keySkills: ['القيمة المنزلية', 'مقارنة الأعداد', 'الترتيب'],
        },
        {
          id: 'g1_3',
          title: 'الوقت والنقود',
          activitiesCount: 36,
          description: 'قراءة ساعة العقارب بالساعات الكاملة ومعاملات الشراء البسيطة بالنقود.',
          keySkills: ['الساعة ذات العقارب', 'العملات النقدية', 'قياس الأطوال'],
        },
      ],
    },
    {
      grade: '2',
      gradeLabel: 'الصف الثاني الابتدائي (7 - 8 سنوات)',
      ageRange: '7-8 سنوات',
      overview: 'مدخل إلى الضرب والقسمة بالتوزيع المتساوي، الجمع الذهني حتى 100، والكسور البسيطة (النصف والربع).',
      topics: [
        {
          id: 'g2_1',
          title: 'مقدمة الضرب والمصفوفات',
          activitiesCount: 72,
          description: 'المجموعات المتساوية، ومضاعفات الأعداد 2 و3 و5 و10.',
          keySkills: ['المصفوفات المستطيلة', 'المضاعفات', 'التقسيم العادل'],
        },
        {
          id: 'g2_2',
          title: 'الجمع والطرح مع إعادة التجميع',
          activitiesCount: 58,
          description: 'استراتيجيات الحساب الذهني الذكية والمحسوسات المرئية.',
          keySkills: ['إعادة التسمية', 'التقدير والتقريب', 'التحقق'],
        },
        {
          id: 'g2_3',
          title: 'أولى الكسور: النصف والربع',
          activitiesCount: 32,
          description: 'تقسيم البيتزا وقطع الشوكولاتة إلى أجزاء متطابقة ومتساوية.',
          keySkills: ['الكل والأجزاء', 'النصف', 'الربع'],
        },
      ],
    },
    {
      grade: '3',
      gradeLabel: 'الصف الثالث الابتدائي (8 - 9 سنوات)',
      ageRange: '8-9 سنوات',
      overview: 'إتقان جدول الضرب والقسمة حتى 100، الأعداد حتى 1000، المحيط والزوايا القائمة.',
      topics: [
        {
          id: 'g3_1',
          title: 'إتقان جداول الضرب حتى 100',
          activitiesCount: 85,
          description: 'بناء الطلاقة الذهنية مع شخصيات ماتيفيك المرحة في حلبة التدريب.',
          keySkills: ['جدول الضرب كاملاً', 'القسمة مع باقٍ', 'خصائص الضرب'],
        },
        {
          id: 'g3_2',
          title: 'الأعداد حتى 1000 والخوارزميات',
          activitiesCount: 60,
          description: 'المئات والعشرات والآحاد وخوارزميات الجمع والطرح الرأسي.',
          keySkills: ['الجمع الرأسي', 'الطرح الرأسي', 'التقدير الحسابي'],
        },
        {
          id: 'g3_3',
          title: 'الهندسة: المحيط والزوايا',
          activitiesCount: 45,
          description: 'استخدام المسطرة لحساب محيط المربع والمستطيل وفهم الزاوية القائمة.',
          keySkills: ['حساب المحيط', 'الزاوية القائمة', 'المجسمات الهندسية'],
        },
      ],
    },
    {
      grade: '4',
      gradeLabel: 'الصف الرابع الابتدائي (9 - 10 سنوات)',
      ageRange: '9-10 سنوات',
      overview: 'الكسور الاعتيادية والعشرية، مساحة المستطيل، والأعداد الكبيرة والمسائل متعددة الخطوات.',
      topics: [
        {
          id: 'g4_1',
          title: 'الكسور متحدة المقام والعمليات عليها',
          activitiesCount: 78,
          description: 'جمع وطرح الكسور، والكسور الفعلية وغير الفعلية والأعداد الكسرية.',
          keySkills: ['البسط والمقام', 'العدد الكسري', 'جمع الكسور'],
        },
        {
          id: 'g4_2',
          title: 'الكسور العشرية والفاصلة العشرية',
          activitiesCount: 54,
          description: 'الأعشار وأجزاء المئة على خط الأعداد والتمثيل المالي.',
          keySkills: ['القراءة العشرية', 'الفاصلة العشرية', 'المقارنة والترتيب'],
        },
        {
          id: 'g4_3',
          title: 'المساحة والوحدات المربعة',
          activitiesCount: 48,
          description: 'حساب مساحة المربع والمستطيل عبر المربعات الشبكية والقانون.',
          keySkills: ['مفهوم المساحة', 'سم² وم²', 'التطبيقات الحياتية'],
        },
      ],
    },
    {
      grade: '5',
      gradeLabel: 'الصف الخامس الابتدائي (10 - 11 سنة)',
      ageRange: '10-11 سنة',
      overview: 'الكسور مختلفة المقامات، النسب المئوية، الأعداد السالبة، ومساحات المضلعات.',
      topics: [
        {
          id: 'g5_1',
          title: 'العمليات على الكسور مختلفة المقامات',
          activitiesCount: 90,
          description: 'المقام المشترك الأصغر، ضرب وقسمة الكسور بصرياً ونظرياً.',
          keySkills: ['المضاعف المشترك', 'ضرب الكسور', 'مقلوب الكسر'],
        },
        {
          id: 'g5_2',
          title: 'الأعداد الصحيحة والسالبة',
          activitiesCount: 45,
          description: 'درجات الحرارة، خط الأعداد تحت الصفر، والحسابات الاتجاهية.',
          keySkills: ['الأعداد السالبة', 'القيمة المطلقة', 'الجمع والإشارات'],
        },
        {
          id: 'g5_3',
          title: 'المثلثات والأشكال الرباعية',
          activitiesCount: 52,
          description: 'مجموع زوايا المثلث، ومساحة متوازي الأضلاع وشبه المنحرف.',
          keySkills: ['قوانين المساحات', 'تصنيف المثلثات', 'استخدام المنقلة'],
        },
      ],
    },
    {
      grade: '6',
      gradeLabel: 'الصف السادس الابتدائي (11 - 12 سنة)',
      ageRange: '11-12 سنة',
      overview: 'المعادلات الجبرية بواسطة الميزان، النسبة والتناسب، الإحصاء والاحتمالات، والحجوم.',
      topics: [
        {
          id: 'g6_1',
          title: 'مقدمة الجبر والمعادلات ذات المجهول الواحد',
          activitiesCount: 75,
          description: 'حل المعادلات وتوازن الكفتين بواسطة محاكاة الميزان التفاعلي.',
          keySkills: ['إيجاد المجهول س', 'توازن المعادلة', 'النمذجة الرياضية'],
        },
        {
          id: 'g6_2',
          title: 'النسبة والتناسب والنسبة المئوية',
          activitiesCount: 60,
          description: 'حساب الخصومات، والرسوم البيانية الدائرية والأعمدة.',
          keySkills: ['النسبة المئوية', 'التمثيل البياني', 'المتوسط الحسابي'],
        },
        {
          id: 'g6_3',
          title: 'المجسمات والمساحة الكلية والحجم',
          activitiesCount: 48,
          description: 'شبكات المجسمات، حساب حجم المنشور ومتوازي المستطيلات.',
          keySkills: ['شبكة المجسم', 'الحجم = مساحة القاعدة × الارتفاع', 'وحدات السعة'],
        },
      ],
    },
  ],
};

export const sampleTestimonials: Record<string, Testimonial[]> = {
  pl: [
    {
      id: 't1',
      name: 'Katarzyna Nowak',
      role: 'Nauczycielka edukacji wczesnoszkolnej',
      schoolOrCity: 'Szkoła Podstawowa nr 15 w Warszawie',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      content: 'Matific kompletnie odmienił atmosferę w mojej klasie. Dzieci, które bały się matematyki, teraz same dopominają się o kolejne zadania! Raporty pomagają mi natychmiast zobaczyć, kto potrzebuje dodatkowego wsparcia.',
      metric: '92% dzieci polubiło matematykę',
    },
    {
      id: 't2',
      name: 'Tomasz Wiśniewski',
      role: 'Tata 8-letniego Leona',
      schoolOrCity: 'Kraków',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      content: 'Zamiast bezmyślnych gier na tablecie, Leon buduje teraz zrozumienie ułamków i mnożenia. Zauważyliśmy ogromną poprawę w jego ocenach i pewności siebie podczas lekcji w szkole.',
      metric: 'Średnia ocen wzrosła z 3 na 5',
    },
    {
      id: 't3',
      name: 'Agnieszka Kowalczyk',
      role: 'Dyrektor Szkoły i Koordynator STEM',
      schoolOrCity: 'Zespół Szkolno-Przedszkolny, Poznań',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      content: 'Wdrożyliśmy Matific w całej szkole dla ponad 400 uczniów. Średnie wyniki egzaminu ósmoklasisty i sprawdzianów zewnętrznych w naszej placówce wzrosły o ponad 28%. Rewelacyjne narzędzie.',
      metric: '+28% na sprawdzianach',
    },
  ],
  ar: [
    {
      id: 't1',
      name: 'أ. مريم الدوسري',
      role: 'معلمة رياضيات للمرحلة الابتدائية',
      schoolOrCity: 'الرياض، المملكة العربية السعودية',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      content: 'ماتيفيك غيّر تماماً طريقة تدريسي! الأطفال الذين كانوا يشعرون بالخوف والتردد أصبحوا يتسابقون لحل المسائل. لوحة متابعة الطلاب توفر عليّ ساعات من التصحيح الورقي.',
      metric: '94% تحسن في المشاركة الصفية',
    },
    {
      id: 't2',
      name: 'م. أحمد الشامي',
      role: 'ولي أمر لطفلين (الصف الثاني والرابع)',
      schoolOrCity: 'دبي، الإمارات العربية المتحدة',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      content: 'أفضل استثمار لوقت أطفالي أمام الشاشة. الألعاب الذكية جعلت الكسور وجدول الضرب أمراً بديهياً وممتعاً بدلاً من الصراخ والمذاكرة المرهقة.',
      metric: 'تفوق دراسي وثقة متزايدة',
    },
    {
      id: 't3',
      name: 'د. طارق المنصور',
      role: 'مدير مدرسة ومشرف تعليمي',
      schoolOrCity: 'المنامة، البحرين',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      content: 'طبقنا منصة ماتيفيك في المدرسة بأكملها، وخلال فصل دراسي واحد فقط شهدنا ارتفاعاً كبيراً في درجات الاختبارات الوطنية بنسبة تجاوزت 31%.',
      metric: '+31% في نتائج الاختبارات',
    },
  ],
};

export const samplePricingPlans: Record<string, PricingPlan[]> = {
  pl: [
    {
      id: 'parent_basic',
      title: 'Dla Rodziny (1 Dziecko)',
      audience: 'Dla rodziców wspierających dziecko w domu',
      priceMonthly: 39,
      priceAnnualMonthly: 29,
      currency: 'zł',
      features: [
        'Pełen nielimitowany dostęp do wszystkich klas (0-6)',
        'Wyspa Przygód i ponad 1500 gier matematycznych',
        'Cotygodniowe raporty postępów na Twój e-mail',
        'Dostęp na tabletach, telefonach i komputerach',
        'Aplikacja w 100% bezpieczna, bez reklam',
      ],
      ctaLabel: 'Rozpocznij próbę dla Rodzica',
    },
    {
      id: 'parent_family',
      title: 'Rodzina Plus (Do 3 Dzieci)',
      audience: 'Najpopularniejszy dla rodzeństwa',
      priceMonthly: 59,
      priceAnnualMonthly: 44,
      currency: 'zł',
      popular: true,
      features: [
        'Wszystkie funkcje planu Dla Rodziny',
        'Osobne profile i awatary dla 3 dzieci',
        'Indywidualne ścieżki i poziomy dla każdego dziecka',
        'Dedykowane wsparcie nauczyciela metodyka',
        'Certyfikaty ukończenia poziomów do druku',
      ],
      ctaLabel: 'Wybierz Pakiet Rodzinny',
    },
    {
      id: 'school_class',
      title: 'Dla Szkoły i Klasy',
      audience: 'Dla nauczycieli i dyrektorów placówek',
      priceMonthly: 12,
      priceAnnualMonthly: 9,
      currency: 'zł / ucznia',
      features: [
        'Dostęp dla wszystkich uczniów w klasie lub szkole',
        'Panel Nauczyciela z automatycznym zadawaniem i ocenianiem',
        'Narzędzia na tablice interaktywne i karty pracy do druku',
        'Darmowe szkolenie i wdrożenie dla rady pedagogicznej',
        'Zgodność z RODO i pełne wsparcie techniczne',
      ],
      ctaLabel: 'Zamów wycenę dla Szkoły',
    },
  ],
  ar: [
    {
      id: 'parent_basic',
      title: 'الباقة الفردية (طفل واحد)',
      audience: 'لأولياء الأمور لتقوية المهارات في المنزل',
      priceMonthly: 35,
      priceAnnualMonthly: 26,
      currency: 'ر.س',
      features: [
        'وصول غير محدود لجميع المراحل (روضة - سادس)',
        'جزيرة المغامرات وأكثر من 1500 لعبة وأداة تفاعلية',
        'تقارير أسبوعية تفصيلية لولي الأمر عبر البريد',
        'يعمل على الأجهزة اللوحية والحواسيب والهواتف',
        'بيئة آمنة تماماً وخالية من الإعلانات',
      ],
      ctaLabel: 'ابدأ التجربة المجانية',
    },
    {
      id: 'parent_family',
      title: 'الباقة العائلية (حتى 3 أطفال)',
      audience: 'الخيار المفضل والمثالي للإخوة',
      priceMonthly: 55,
      priceAnnualMonthly: 39,
      currency: 'ر.س',
      popular: true,
      features: [
        'جميع مزايا الباقة الفردية بالكامل',
        'حسابات وشخصيات رمزية مستقلة لـ 3 أطفال',
        'مسار تعليمي متكيف يناسب مرحلة كل طفل',
        'أوراق عمل وشهادات إنجاز شهرية قابلة للطباعة',
        'أولوية الدعم الفني والإرشادي',
      ],
      ctaLabel: 'اختر باقة العائلة',
    },
    {
      id: 'school_class',
      title: 'للمدارس والفصول الدراسية',
      audience: 'للمعلمين ومديري المدارس والمشرفين',
      priceMonthly: 15,
      priceAnnualMonthly: 10,
      currency: 'ر.س / طالب',
      features: [
        'اشتراك مدرسي مرن لجميع فصول المدرسة',
        'لوحة المعلم المتقدمة للواجبات والتصحيح التلقائي',
        'أنشطة تفاعلية لشاشات الفصول الذكية وأوراق عمل',
        'ورشة تدريبية معتمدة لهيئة التدريس بالمدرسة',
        'دعم فني مخصص وتقارير تشخيصية شاملة',
      ],
      ctaLabel: 'طلب عرض سعر للمدرسة',
    },
  ],
};

export const sampleFaqs: Record<string, FaqItem[]> = {
  pl: [
    {
      id: 'f1',
      category: 'general',
      question: 'Czym jest Matific i jak różni się od innych programów edukacyjnych?',
      answer: 'Matific to nagradzana na świecie platforma edukacyjna do nauki matematyki dla dzieci w wieku 4-12 lat. W przeciwieństwie do zwykłych aplikacji z quizami wielokrotnego wyboru, Matific opiera się na interaktywnych manipulacjach fizycznych: dzieci przelewają płyny, ważą przedmioty na wadze szalkowej i dzielą pizzę na ułamki, budując głębokie intuicyjne zrozumienie matematyczne.',
    },
    {
      id: 'f2',
      category: 'teachers',
      question: 'Czy zadania Matific są w 100% zgodne z polską podstawą programową MEN?',
      answer: 'Tak! Wszystkie zadania i ścieżki dydaktyczne w języku polskim są w pełni dopasowane do aktualnej podstawy programowej Ministerstwa Edukacji Narodowej (MEN) dla klas 1-6 oraz wychowania przedszkolnego. Nauczyciele mogą filtrować zadania według działów podręcznika i standardów.',
    },
    {
      id: 'f3',
      category: 'parents',
      question: 'Jak wygląda 30-dniowy darmowy okres próbny? Czy pobierzecie opłatę?',
      answer: 'Darmowy okres próbny trwa pełne 30 dni i jest całkowicie bezpłatny. Nie wymagamy podawania danych karty płatniczej przy rejestracji. Po upływie 30 dni konto po prostu przechodzi w tryb podstawowy i to Ty decydujesz, czy chcesz wykupić subskrypcję.',
    },
    {
      id: 'f4',
      category: 'technical',
      question: 'Na jakich urządzeniach działa Matific?',
      answer: 'Matific działa na każdym nowoczesnym urządzeniu: tabletach iPad i Android, komputerach z systemem Windows, Mac, Chromebook oraz na smartfonach. Wystarczy dowolna przeglądarka internetowa lub nasza dedykowana aplikacja mobilna.',
    },
    {
      id: 'f5',
      category: 'teachers',
      question: 'W jaki sposób Matific pomaga nauczycielom oszczędzać czas?',
      answer: 'Matific automatycznie sprawdza wszystkie zadania, natychmiast generuje raporty diagnostyczne i samoczynnie przydziela zadania utrwalające dla uczniów, którzy napotkali trudności. Oznacza to koniec żmudnego sprawdzania zeszytów ćwiczeń po lekcjach.',
    },
  ],
  ar: [
    {
      id: 'f1',
      category: 'general',
      question: 'ما هو ماتيفيك وكيف يختلف عن البرامج التعليمية الأخرى؟',
      answer: 'ماتيفيك هي منصة رقمية عالمية رائدة حائزة على عشرات الجوائز لتعليم الرياضيات للأطفال من عمر 4 إلى 12 عاماً. بدلاً من أسئلة الاختيار من متعدد الجافة، يعتمد ماتيفيك على أدوات ملموسة تفاعلية: يزن الطفل الكتل بالميزان، ويقسم البيتزا لفهم الكسور، ويبني الأشكال الهندسية، مما يخلق فهماً مفاهيمياً عميقاً وثابتاً.',
    },
    {
      id: 'f2',
      category: 'teachers',
      question: 'هل يتوافق المحتوى مع المناهج التعليمية المعتمدة؟',
      answer: 'نعم تماماً، صُممت أنشطة ماتيفيك لتتطابق بنسبة 100% مع مناهج الرياضيات المعتمدة في الدول العربية والمعايير الدولية للرياضيات من مرحلة الروضة وحتى الصف السادس الابتدائي.',
    },
    {
      id: 'f3',
      category: 'parents',
      question: 'كيف تعمل التجربة المجانية لمدة 30 يوماً؟ هل تتطلب بطاقة دفع؟',
      answer: 'التجربة المجانية متاحة لمدة 30 يوماً بالكامل ولا تتطلب أي بيانات بطاقة ائتمانية. يمكنك التسجيل والبدء باللعب والتعلم فوراً دون أي التزام مالي مسبق.',
    },
    {
      id: 'f4',
      category: 'technical',
      question: 'ما هي الأجهزة المتوافقة لتشغيل المنصة؟',
      answer: 'يعمل ماتيفيك بسلاسة فائقة على أجهزة الآيباد، والتابلت بنظام أندرويد، وأجهزة الكمبيوتر المحمولة والمكتبية (ويندوز وماك وكروم بوك) وكذلك الهواتف الذكية مباشرة عبر المتصفح أو التطبيق.',
    },
    {
      id: 'f5',
      category: 'teachers',
      question: 'كيف يساعد ماتيفيك المعلم في إدارة الحصة والواجبات؟',
      answer: 'يوفر ماتيفيك ميزة التصحيح الآلي الفوري، والواجبات المخصصة تلقائياً حسب مستوى كل طالب، وأدوات عرض السبورة الذكية، وتقارير ترصد فوراً أي ثغرة تعليمية قبل فوات الأوان.',
    },
  ],
};
