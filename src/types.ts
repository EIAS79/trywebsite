export type Language = 'pl' | 'ar' | 'en';

export type UserRole = 'teachers' | 'parents' | 'students';

export type GradeLevel = 'K' | '1' | '2' | '3' | '4' | '5' | '6';

export type MathTopic = 'all' | 'counting' | 'addition' | 'fractions' | 'balance' | 'geometry';

export interface MathActivity {
  id: string;
  title: string;
  topic: MathTopic;
  grade: GradeLevel;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  skills: string[];
  durationMinutes: number;
  thumbnailColor: string;
  iconName: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  schoolOrCity: string;
  avatar: string;
  rating: number;
  content: string;
  metric?: string;
}

export interface CurriculumTopic {
  id: string;
  title: string;
  activitiesCount: number;
  description: string;
  keySkills: string[];
}

export interface GradeCurriculum {
  grade: GradeLevel;
  gradeLabel: string;
  ageRange: string;
  overview: string;
  topics: CurriculumTopic[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'teachers' | 'parents' | 'technical';
}

export interface PricingPlan {
  id: string;
  title: string;
  audience: string;
  priceMonthly: number;
  priceAnnualMonthly: number;
  currency: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}
