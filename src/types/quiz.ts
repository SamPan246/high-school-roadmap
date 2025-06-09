export interface QuizQuestion {
  id: number;
  text: string;
  options: QuizOption[];
}

export interface QuizOption {
  id: number;
  text: string;
  tags: string[];
}

export interface UserResponse {
  questionId: number;
  selectedOptionId: number;
}

export interface ProgramDetails {
  cost: string;
  schedule: string;
  location: string;
  requirements: string[];
  benefits: string[];
  applicationDeadline?: string;
  validity?: string;
  additionalResources?: string[];
  successStories?: string[];
}

export interface Recommendation {
  type: 'club' | 'competition' | 'certification' | 'program' | 'internship';
  name: string;
  description: string;
  matchScore: number;
  tags: string[];
  link?: string;
  timeCommitment: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  collegeWeight: number; // 1-10 scale
  details: ProgramDetails;
}

export interface AdmissionPriorities {
  academics: string[];
  extracurriculars: string[];
  summerActivities: string[];
  essays?: string[];
  interviews?: string[];
}

export interface University {
  name: string;
  description: string;
  acceptanceRate: string;
  location: string;
  strongPrograms: string[];
  valuesActivities: string[];
  standardizedScores: {
    satRange?: string;
    actRange?: string;
  };
  applicationTips: string[];
  admissionPriorities: AdmissionPriorities;
  earlyDecision?: {
    deadline: string;
    acceptanceRate: string;
    restrictions: string[];
  };
  regularDecision?: {
    deadline: string;
    acceptanceRate: string;
  };
  keyPrograms: {
    name: string;
    description: string;
    deadline: string;
    cost: string;
    gradeEligibility: string;
    website: string;
  }[];
  admissionStats: {
    totalApplications: string;
    admitted: string;
    enrollmentTarget: string;
    internationalRate: string;
    genderRatio: string;
    majorDistribution: {
      [key: string]: string;
    };
  };
}

export interface RoadmapMilestone {
  title: string;
  description: string;
  timeline: string;
  priority: 'High' | 'Medium' | 'Low';
  category: 'Academic' | 'Extracurricular' | 'College Prep' | 'Leadership' | 'Skills Development' | 'Research';
  relatedActivities?: string[];
  specificPrograms: {
    name: string;
    deadline: string;
    cost: string;
    timeCommitment: string;
    link: string;
  }[];
  alternativeOptions?: string[];
  preparationSteps?: string[];
}

export interface SeasonalPlan {
  fall: RoadmapMilestone[];
  winter: RoadmapMilestone[];
  spring: RoadmapMilestone[];
  summer: RoadmapMilestone[];
}

export interface YearPlan {
  academicGoals: string[];
  extracurricularGoals: string[];
  skillsDevelopment: string[];
  milestones: RoadmapMilestone[];
  summerOpportunities: string[];
  seasonalPlan: SeasonalPlan;
  testingSchedule?: {
    test: string;
    date: string;
    registrationDeadline: string;
    preparationPlan: string[];
  }[];
  applicationDeadlines?: {
    program: string;
    deadline: string;
    requirements: string[];
  }[];
}

export interface Roadmap {
  freshman: YearPlan;
  sophomore: YearPlan;
  junior: YearPlan;
  senior: YearPlan;
}

export interface QuizResult {
  recommendations: Recommendation[];
  personalizedNotes: string;
  roadmap: Roadmap;
  suggestedUniversities: University[];
  nextSteps: string[];
  timeline: {
    immediate: string[];
    thisMonth: string[];
    thisYear: string[];
    longTerm: string[];
  };
  estimatedCosts: {
    programs: number;
    testPrep: number;
    applications: number;
    total: number;
  };
} 