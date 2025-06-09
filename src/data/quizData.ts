import { QuizQuestion, Recommendation, University } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    text: "What major/career path interests you the most?",
    options: [
      { 
        id: 1, 
        text: "Engineering (Computer Science, Electrical, Mechanical, etc.)", 
        tags: ["engineering", "stem", "technical"] 
      },
      { 
        id: 2, 
        text: "Pre-Medical/Life Sciences (Medicine, Biology, Biotech)", 
        tags: ["medical", "biology", "healthcare"] 
      },
      { 
        id: 3, 
        text: "Business/Economics (Finance, Entrepreneurship, Economics)", 
        tags: ["business", "economics", "finance"] 
      },
      { 
        id: 4, 
        text: "Pre-Law/Political Science (Law, Government, Policy)", 
        tags: ["law", "politics", "government"] 
      },
      { 
        id: 5, 
        text: "Arts/Humanities (Literature, History, Philosophy)", 
        tags: ["arts", "humanities", "creative"] 
      }
    ]
  },
  {
    id: 2,
    text: "Based on your interest in ENGINEERING, which universities appeal to you most?",
    options: [
      { 
        id: 1, 
        text: "MIT (Known for: Revolutionary research, intense STEM focus, innovation culture)", 
        tags: ["mit", "engineering", "top-tier", "research"] 
      },
      { 
        id: 2, 
        text: "Stanford (Known for: Tech entrepreneurship, Silicon Valley connections, interdisciplinary approach)", 
        tags: ["stanford", "engineering", "entrepreneurship", "innovation"] 
      },
      { 
        id: 3, 
        text: "Carnegie Mellon (Known for: Computer Science, Robotics, AI research)", 
        tags: ["cmu", "engineering", "computer-science", "robotics"] 
      },
      { 
        id: 4, 
        text: "UC Berkeley (Known for: EECS program, research opportunities, Bay Area tech scene)", 
        tags: ["berkeley", "engineering", "research", "tech"] 
      },
      { 
        id: 5, 
        text: "Georgia Tech (Known for: Engineering innovation, industry connections, collaborative environment)", 
        tags: ["gatech", "engineering", "practical", "industry"] 
      }
    ]
  },
  {
    id: 3,
    text: "What is your current academic standing?",
    options: [
      { 
        id: 1, 
        text: "Top 5% of class, 4.0+ GPA, Already taking AP/IB courses", 
        tags: ["high-achiever", "academic-excellence"] 
      },
      { 
        id: 2, 
        text: "Top 10% of class, 3.8+ GPA, Some honors courses", 
        tags: ["strong-academic", "honors"] 
      },
      { 
        id: 3, 
        text: "Top 25% of class, 3.5+ GPA, Regular courses", 
        tags: ["good-academic", "regular"] 
      },
      { 
        id: 4, 
        text: "Below top 25%, Looking to improve significantly", 
        tags: ["improvement-needed", "developing"] 
      }
    ]
  },
  {
    id: 4,
    text: "What is your standardized testing experience?",
    options: [
      { 
        id: 1, 
        text: "Haven't taken any tests yet", 
        tags: ["beginner", "needs-prep"] 
      },
      { 
        id: 2, 
        text: "Taken PSAT/Practice tests only", 
        tags: ["started-prep", "practicing"] 
      },
      { 
        id: 3, 
        text: "Taken SAT/ACT once, want to improve", 
        tags: ["improving", "retaking"] 
      },
      { 
        id: 4, 
        text: "Already have strong scores (1500+ SAT / 33+ ACT)", 
        tags: ["high-achiever", "test-ready"] 
      }
    ]
  },
  {
    id: 5,
    text: "What is your budget for college preparation activities?",
    options: [
      { 
        id: 1, 
        text: "Limited budget (Need financial aid/scholarships for most activities)", 
        tags: ["budget-conscious", "need-aid"] 
      },
      { 
        id: 2, 
        text: "Moderate budget ($5,000-$10,000 total for test prep, activities, applications)", 
        tags: ["moderate-budget", "selective-spending"] 
      },
      { 
        id: 3, 
        text: "Flexible budget ($10,000-$20,000 available for preparation)", 
        tags: ["flexible-budget", "comprehensive-prep"] 
      },
      { 
        id: 4, 
        text: "Full budget (Can invest in all recommended activities)", 
        tags: ["full-budget", "unlimited-prep"] 
      }
    ]
  }
];

export const sampleRecommendations: Recommendation[] = [
  {
    type: "program",
    name: "MIT PRIMES",
    description: "Year-long research program in mathematics, computer science, and computational biology.",
    matchScore: 0,
    tags: ["math", "computer-science", "research", "mit"],
    link: "https://math.mit.edu/research/highschool/primes/",
    timeCommitment: "10-15 hours/week",
    difficulty: "Advanced",
    collegeWeight: 10,
    details: {
      cost: "Free",
      schedule: "January - December (Year-long commitment)",
      location: "Remote/MIT Campus",
      requirements: [
        "Strong mathematics background",
        "Programming experience",
        "Research interest",
        "Grades 11-12 only"
      ],
      benefits: [
        "Direct research mentorship from MIT faculty/students",
        "Potential research publication",
        "Present at MIT conferences",
        "Strong MIT admission advantage"
      ],
      applicationDeadline: "November 30",
      additionalResources: [
        "MIT OpenCourseWare preparation materials",
        "Previous projects database",
        "Research paper examples"
      ]
    }
  },
  {
    type: "program",
    name: "Stanford AI4ALL",
    description: "Intensive summer program in artificial intelligence and machine learning.",
    matchScore: 0,
    tags: ["ai", "computer-science", "stanford", "research"],
    link: "https://ai4all.stanford.edu/",
    timeCommitment: "35-40 hours/week (3 weeks)",
    difficulty: "Advanced",
    collegeWeight: 9,
    details: {
      cost: "$6,000 (Financial aid available)",
      schedule: "June - July (3 weeks, residential)",
      location: "Stanford University Campus",
      requirements: [
        "Strong math/CS foundation",
        "Programming experience preferred",
        "Rising high school sophomores/juniors",
        "Demonstrated interest in AI"
      ],
      benefits: [
        "Learn from Stanford AI researchers",
        "Develop AI research project",
        "Network with tech industry leaders",
        "College application boost"
      ],
      applicationDeadline: "March 1",
      additionalResources: [
        "Pre-program learning materials",
        "Project showcase platform",
        "Alumni network access"
      ]
    }
  },
  {
    type: "competition",
    name: "Regeneron Science Talent Search",
    description: "Premier science research competition for high school seniors.",
    matchScore: 0,
    tags: ["research", "science", "prestigious", "competition"],
    link: "https://www.societyforscience.org/regeneron-sts/",
    timeCommitment: "Research project (6-12 months)",
    difficulty: "Advanced",
    collegeWeight: 10,
    details: {
      cost: "Free to enter",
      schedule: "Research period (Prior year), Applications (Fall), Finals (March)",
      location: "Local research + Washington, D.C. finals",
      requirements: [
        "Original research project",
        "Detailed research paper",
        "High school senior status",
        "US citizenship/permanent residency"
      ],
      benefits: [
        "Up to $250,000 in awards",
        "Present to leading scientists",
        "Meet with government officials",
        "Strong college admission impact"
      ],
      applicationDeadline: "November 15",
      successStories: [
        "Past winners at top universities",
        "Published research papers",
        "Industry recognition"
      ]
    }
  }
];

export const universities: University[] = [
  {
    name: "University of Pennsylvania (Wharton)",
    description: "World's first collegiate business school, known for finance and entrepreneurship",
    acceptanceRate: "7%",
    location: "Philadelphia, PA",
    strongPrograms: [
      "Business (#1 in US)",
      "Finance (#1 in US)",
      "Marketing (#1 in US)",
      "Real Estate",
      "Entrepreneurship"
    ],
    valuesActivities: [
      "Business competition experience (DECA, FBLA)",
      "Leadership in business/entrepreneurship clubs",
      "Internships at prestigious firms",
      "Independent business ventures",
      "Community service leadership"
    ],
    standardizedScores: {
      satRange: "1500-1560",
      actRange: "34-36"
    },
    applicationTips: [
      "Demonstrate entrepreneurial spirit",
      "Show quantitative and analytical skills",
      "Highlight leadership experiences",
      "Express clear career goals"
    ],
    admissionPriorities: {
      academics: [
        "Strong performance in math/economics",
        "AP/IB courses in relevant subjects",
        "Business-related projects",
        "Research or independent studies"
      ],
      extracurriculars: [
        "Business club leadership",
        "Competition success",
        "Entrepreneurial ventures",
        "Community impact"
      ],
      summerActivities: [
        "Business programs",
        "Corporate internships",
        "Start-up experience"
      ],
      essays: [
        "Clear business goals",
        "Leadership examples",
        "Innovation mindset",
        "Global perspective"
      ]
    },
    earlyDecision: {
      deadline: "November 1",
      acceptanceRate: "15%",
      restrictions: [
        "Binding commitment",
        "Must withdraw other applications",
        "Financial aid needs consideration"
      ]
    },
    regularDecision: {
      deadline: "January 5",
      acceptanceRate: "5%"
    },
    keyPrograms: [
      {
        name: "Wharton Summer High School Programs",
        description: "Leadership in the Business World (LBW) and Management & Technology Summer Institute",
        deadline: "February 1",
        cost: "$8,000-12,000",
        gradeEligibility: "Rising seniors",
        website: "https://globalyouth.wharton.upenn.edu/"
      }
    ],
    admissionStats: {
      totalApplications: "42,205",
      admitted: "2,952",
      enrollmentTarget: "2,400",
      internationalRate: "15%",
      genderRatio: "52% female, 48% male",
      majorDistribution: {
        business: "60%",
        economics: "25%",
        other: "15%"
      }
    }
  },
  {
    name: "New York University (Stern)",
    description: "Premier business school with unparalleled access to Wall Street and global business",
    acceptanceRate: "12%",
    location: "New York, NY",
    strongPrograms: [
      "Finance (#2 in US)",
      "International Business (#3 in US)",
      "Marketing (#4 in US)",
      "Business Analytics",
      "Entertainment/Media Business"
    ],
    valuesActivities: [
      "Global business experience",
      "Finance club leadership",
      "Wall Street internships",
      "International perspective",
      "Entrepreneurial initiatives"
    ],
    standardizedScores: {
      satRange: "1470-1550",
      actRange: "33-35"
    },
    applicationTips: [
      "Show global mindset",
      "Demonstrate financial acumen",
      "Highlight NYC connections",
      "Express creative business ideas"
    ],
    admissionPriorities: {
      academics: [
        "Strong quantitative skills",
        "Business-focused coursework",
        "International experience",
        "Research projects"
      ],
      extracurriculars: [
        "Finance/investment clubs",
        "Global initiatives",
        "Start-up experience",
        "Leadership roles"
      ],
      summerActivities: [
        "Wall Street programs",
        "International business",
        "Entrepreneurship"
      ],
      essays: [
        "Global perspective",
        "Innovation ideas",
        "Career vision",
        "NYC connection"
      ]
    },
    earlyDecision: {
      deadline: "November 1",
      acceptanceRate: "25%",
      restrictions: [
        "Binding commitment",
        "Early Decision I and II available",
        "Strong demonstrated interest factor"
      ]
    },
    regularDecision: {
      deadline: "January 5",
      acceptanceRate: "8%"
    },
    keyPrograms: [
      {
        name: "Stern Summer Program",
        description: "Business exploration for high school students",
        deadline: "February 15",
        cost: "$8,500",
        gradeEligibility: "Rising juniors and seniors",
        website: "https://www.stern.nyu.edu/programs-admissions/undergraduate"
      }
    ],
    admissionStats: {
      totalApplications: "16,000+",
      admitted: "1,920",
      enrollmentTarget: "600",
      internationalRate: "20%",
      genderRatio: "49% female, 51% male",
      majorDistribution: {
        finance: "45%",
        marketing: "25%",
        other: "30%"
      }
    }
  },
  {
    name: "UC Berkeley (Haas)",
    description: "Top public business school with strong tech industry connections",
    acceptanceRate: "14%",
    location: "Berkeley, CA",
    strongPrograms: [
      "Business Administration (#3 in US)",
      "Entrepreneurship (#2 in US)",
      "Technology Management",
      "Sustainable Business",
      "Global Management"
    ],
    valuesActivities: [
      "Tech startup experience",
      "Sustainability initiatives",
      "Silicon Valley connections",
      "Social entrepreneurship",
      "Innovation projects"
    ],
    standardizedScores: {
      satRange: "1440-1530",
      actRange: "32-35"
    },
    applicationTips: [
      "Show innovation mindset",
      "Highlight tech interests",
      "Demonstrate social impact",
      "Express entrepreneurial goals"
    ],
    admissionPriorities: {
      academics: [
        "Strong STEM foundation",
        "Business/Economics courses",
        "Innovative projects",
        "Research experience"
      ],
      extracurriculars: [
        "Tech entrepreneurship",
        "Environmental leadership",
        "Social impact initiatives",
        "Business competitions"
      ],
      summerActivities: [
        "Tech internships",
        "Start-up experience",
        "Business programs"
      ],
      essays: [
        "Innovation focus",
        "Social impact",
        "Leadership growth",
        "Tech interests"
      ]
    },
    earlyDecision: {
      deadline: "November 30",
      acceptanceRate: "20%",
      restrictions: [
        "Non-binding",
        "Can apply to other schools",
        "Priority consideration"
      ]
    },
    regularDecision: {
      deadline: "January 5",
      acceptanceRate: "10%"
    },
    keyPrograms: [
      {
        name: "BASE Summer Program",
        description: "Business for Arts, Sciences, and Engineering",
        deadline: "March 1",
        cost: "$6,000",
        gradeEligibility: "Rising seniors",
        website: "https://haas.berkeley.edu/undergrad/"
      }
    ],
    admissionStats: {
      totalApplications: "12,000+",
      admitted: "1,680",
      enrollmentTarget: "400",
      internationalRate: "12%",
      genderRatio: "51% female, 49% male",
      majorDistribution: {
        business: "55%",
        technology: "25%",
        other: "20%"
      }
    }
  },
  {
    name: "Johns Hopkins University",
    description: "Premier institution for medicine and life sciences research",
    acceptanceRate: "7%",
    location: "Baltimore, MD",
    strongPrograms: [
      "Pre-Med/Biology (#1 in US)",
      "Biomedical Engineering (#1 in US)",
      "Public Health (#1 in US)",
      "Neuroscience",
      "Molecular Biology"
    ],
    valuesActivities: [
      "Medical research experience",
      "Hospital volunteering/shadowing",
      "Health-focused leadership",
      "Clinical exposure",
      "Public health initiatives"
    ],
    standardizedScores: {
      satRange: "1500-1560",
      actRange: "34-36"
    },
    applicationTips: [
      "Show dedication to healthcare",
      "Highlight research experience",
      "Demonstrate clinical exposure",
      "Express commitment to service"
    ],
    admissionPriorities: {
      academics: [
        "Excellence in science courses",
        "Strong research background",
        "AP/IB Biology and Chemistry",
        "Math proficiency"
      ],
      extracurriculars: [
        "Hospital volunteering",
        "Medical research",
        "Healthcare leadership",
        "Science competitions"
      ],
      summerActivities: [
        "Medical programs",
        "Research internships",
        "Healthcare shadowing"
      ],
      essays: [
        "Healthcare passion",
        "Research interests",
        "Service commitment",
        "Innovation in medicine"
      ]
    },
    earlyDecision: {
      deadline: "November 1",
      acceptanceRate: "20%",
      restrictions: [
        "Binding commitment",
        "Strong demonstrated interest",
        "Research experience preferred"
      ]
    },
    regularDecision: {
      deadline: "January 5",
      acceptanceRate: "7%"
    },
    keyPrograms: [
      {
        name: "Summer Medical Institute",
        description: "Intensive pre-med program for high school students",
        deadline: "February 1",
        cost: "$7,500",
        gradeEligibility: "Rising seniors",
        website: "https://www.jhu.edu/summer"
      }
    ],
    admissionStats: {
      totalApplications: "38,000+",
      admitted: "2,660",
      enrollmentTarget: "1,300",
      internationalRate: "14%",
      genderRatio: "54% female, 46% male",
      majorDistribution: {
        premed: "45%",
        engineering: "30%",
        other: "25%"
      }
    }
  },
  {
    name: "Yale University",
    description: "World-renowned for law, political science, and government studies",
    acceptanceRate: "6%",
    location: "New Haven, CT",
    strongPrograms: [
      "Political Science (#1 in US)",
      "Pre-Law Studies",
      "International Relations",
      "Ethics, Politics & Economics",
      "History"
    ],
    valuesActivities: [
      "Policy research",
      "Mock trial/debate",
      "Political activism",
      "Legal internships",
      "Government service"
    ],
    standardizedScores: {
      satRange: "1510-1570",
      actRange: "34-36"
    },
    applicationTips: [
      "Demonstrate analytical thinking",
      "Show policy engagement",
      "Highlight leadership",
      "Express civic commitment"
    ],
    admissionPriorities: {
      academics: [
        "Strong writing skills",
        "History/Government coursework",
        "Debate/Speech success",
        "Research experience"
      ],
      extracurriculars: [
        "Mock Trial/Model UN",
        "Student government",
        "Policy initiatives",
        "Community advocacy"
      ],
      summerActivities: [
        "Legal internships",
        "Government programs",
        "Policy research"
      ],
      essays: [
        "Analytical depth",
        "Policy interests",
        "Leadership vision",
        "Social impact"
      ]
    },
    earlyDecision: {
      deadline: "November 1",
      acceptanceRate: "15%",
      restrictions: [
        "Single Choice Early Action",
        "Can't apply early elsewhere",
        "Non-binding"
      ]
    },
    regularDecision: {
      deadline: "January 2",
      acceptanceRate: "4%"
    },
    keyPrograms: [
      {
        name: "Yale Young Global Scholars",
        description: "International affairs and law program",
        deadline: "February 6",
        cost: "$6,500",
        gradeEligibility: "Grades 10-11",
        website: "https://globalscholars.yale.edu/"
      }
    ],
    admissionStats: {
      totalApplications: "47,000+",
      admitted: "2,200",
      enrollmentTarget: "1,550",
      internationalRate: "18%",
      genderRatio: "52% female, 48% male",
      majorDistribution: {
        socialSciences: "45%",
        humanities: "30%",
        other: "25%"
      }
    }
  },
  {
    name: "Brown University",
    description: "Leading liberal arts institution with innovative open curriculum",
    acceptanceRate: "6%",
    location: "Providence, RI",
    strongPrograms: [
      "Liberal Arts (#4 in US)",
      "Creative Writing",
      "Comparative Literature",
      "Visual Arts",
      "Performance Studies"
    ],
    valuesActivities: [
      "Creative portfolio development",
      "Arts leadership",
      "Cultural initiatives",
      "Interdisciplinary projects",
      "Community engagement"
    ],
    standardizedScores: {
      satRange: "1480-1550",
      actRange: "33-35"
    },
    applicationTips: [
      "Show creative excellence",
      "Demonstrate intellectual curiosity",
      "Highlight interdisciplinary interests",
      "Express innovative thinking"
    ],
    admissionPriorities: {
      academics: [
        "Strong humanities background",
        "Creative writing/arts",
        "Independent projects",
        "Research/Critical analysis"
      ],
      extracurriculars: [
        "Arts leadership",
        "Creative publications",
        "Cultural programs",
        "Community arts"
      ],
      summerActivities: [
        "Arts programs",
        "Creative workshops",
        "Cultural studies"
      ],
      essays: [
        "Creative voice",
        "Cultural perspective",
        "Artistic vision",
        "Personal growth"
      ]
    },
    earlyDecision: {
      deadline: "November 1",
      acceptanceRate: "18%",
      restrictions: [
        "Early Decision binding",
        "Arts portfolio optional",
        "Interview recommended"
      ]
    },
    regularDecision: {
      deadline: "January 5",
      acceptanceRate: "5%"
    },
    keyPrograms: [
      {
        name: "Brown Arts Institute Summer",
        description: "Intensive arts and humanities program",
        deadline: "February 1",
        cost: "$6,800",
        gradeEligibility: "Rising juniors and seniors",
        website: "https://brown.edu/academics/pre-college"
      }
    ],
    admissionStats: {
      totalApplications: "46,000+",
      admitted: "2,760",
      enrollmentTarget: "1,700",
      internationalRate: "16%",
      genderRatio: "55% female, 45% male",
      majorDistribution: {
        humanities: "40%",
        socialSciences: "35%",
        other: "25%"
      }
    }
  }
];

export const programDeadlines = {
  summer: {
    "MIT RSI": "January 15",
    "MITES": "February 1",
    "Stanford AI4ALL": "March 1",
    "CMU Pre-College": "March 15",
    "Berkeley ATDP": "March 31"
  },
  competitions: {
    "Regeneron STS": "November 15",
    "ISEF": "School-dependent",
    "USACO": "Monthly contests",
    "Math Olympiad": "AMC in February",
    "Science Bowl": "Regional deadlines vary"
  },
  research: {
    "MIT PRIMES": "December 1",
    "Garcia Program": "February 15",
    "Pioneer Research": "Rolling basis",
    "Wolfram Research": "March 31",
    "Lab Internships": "February-March"
  }
};

// Add university mappings by major
export const universityByMajor = {
  engineering: [
    {
      id: 1,
      text: "MIT (Known for: Revolutionary research, intense STEM focus, innovation culture)",
      tags: ["mit", "engineering", "top-tier", "research"]
    },
    {
      id: 2,
      text: "Stanford (Known for: Tech entrepreneurship, Silicon Valley connections, interdisciplinary approach)",
      tags: ["stanford", "engineering", "entrepreneurship", "innovation"]
    },
    {
      id: 3,
      text: "Carnegie Mellon (Known for: Computer Science, Robotics, AI research)",
      tags: ["cmu", "engineering", "computer-science", "robotics"]
    },
    {
      id: 4,
      text: "UC Berkeley (Known for: EECS program, research opportunities, Bay Area tech scene)",
      tags: ["berkeley", "engineering", "research", "tech"]
    },
    {
      id: 5,
      text: "Georgia Tech (Known for: Engineering innovation, industry connections, collaborative environment)",
      tags: ["gatech", "engineering", "practical", "industry"]
    }
  ],
  medical: [
    {
      id: 1,
      text: "Johns Hopkins (Known for: Pre-med excellence, research opportunities, hospital access)",
      tags: ["jhu", "medical", "research", "healthcare"]
    },
    {
      id: 2,
      text: "Stanford (Known for: Biomedical research, interdisciplinary approach, innovation)",
      tags: ["stanford", "medical", "research", "innovation"]
    },
    {
      id: 3,
      text: "Harvard (Known for: Life sciences research, pre-med advising, hospital connections)",
      tags: ["harvard", "medical", "research", "prestigious"]
    },
    {
      id: 4,
      text: "Duke (Known for: Strong pre-med program, research opportunities, medical mentorship)",
      tags: ["duke", "medical", "research", "mentorship"]
    },
    {
      id: 5,
      text: "Washington University in St. Louis (Known for: Biology research, pre-med focus, clinical exposure)",
      tags: ["washu", "medical", "biology", "clinical"]
    }
  ],
  business: [
    {
      id: 1,
      text: "University of Pennsylvania (Known for: Wharton School, finance focus, business networks)",
      tags: ["upenn", "business", "finance", "prestigious"]
    },
    {
      id: 2,
      text: "NYU (Known for: Wall Street connections, global business, entrepreneurship)",
      tags: ["nyu", "business", "finance", "global"]
    },
    {
      id: 3,
      text: "UC Berkeley (Known for: Haas School, tech business, Silicon Valley connections)",
      tags: ["berkeley", "business", "tech", "innovation"]
    },
    {
      id: 4,
      text: "University of Michigan (Known for: Ross School, consulting focus, leadership development)",
      tags: ["umich", "business", "consulting", "leadership"]
    },
    {
      id: 5,
      text: "Georgetown (Known for: International business, government connections, economics strength)",
      tags: ["georgetown", "business", "international", "economics"]
    }
  ],
  law: [
    {
      id: 1,
      text: "Yale (Known for: Political Science excellence, law school pipeline, research focus)",
      tags: ["yale", "law", "politics", "research"]
    },
    {
      id: 2,
      text: "Harvard (Known for: Government studies, pre-law advising, internship connections)",
      tags: ["harvard", "law", "government", "prestigious"]
    },
    {
      id: 3,
      text: "Georgetown (Known for: Political Science, DC location, government access)",
      tags: ["georgetown", "law", "politics", "government"]
    },
    {
      id: 4,
      text: "UC Berkeley (Known for: Public policy, social justice focus, research opportunities)",
      tags: ["berkeley", "law", "policy", "social-justice"]
    },
    {
      id: 5,
      text: "Columbia (Known for: Political Science, NYC opportunities, international focus)",
      tags: ["columbia", "law", "international", "prestigious"]
    }
  ],
  arts: [
    {
      id: 1,
      text: "Brown (Known for: Liberal arts excellence, open curriculum, interdisciplinary study)",
      tags: ["brown", "arts", "liberal-arts", "interdisciplinary"]
    },
    {
      id: 2,
      text: "Williams College (Known for: Top liberal arts education, small classes, research focus)",
      tags: ["williams", "arts", "liberal-arts", "research"]
    },
    {
      id: 3,
      text: "Amherst College (Known for: Writing program, humanities research, close faculty mentoring)",
      tags: ["amherst", "arts", "humanities", "mentorship"]
    },
    {
      id: 4,
      text: "Swarthmore (Known for: Rigorous liberal arts, research opportunities, theory focus)",
      tags: ["swarthmore", "arts", "liberal-arts", "research"]
    },
    {
      id: 5,
      text: "Pomona College (Known for: Humanities excellence, research support, writing emphasis)",
      tags: ["pomona", "arts", "humanities", "writing"]
    }
  ]
};

// Update the second question's options based on major selection
export const updateUniversityOptions = (major: string) => {
  const universities = universityByMajor[major as keyof typeof universityByMajor] || universityByMajor.engineering;
  quizQuestions[1].options = universities;
};

export const programsByMajor: Record<string, Recommendation[]> = {
  engineering: [
    {
      type: 'program' as const,
      name: "MIT PRIMES",
      description: "Year-long research program in mathematics, computer science, and computational biology",
      matchScore: 0,
      tags: ["engineering", "research", "computer-science", "math"],
      link: "https://math.mit.edu/research/highschool/primes/",
      timeCommitment: "10-15 hours/week",
      difficulty: "Advanced",
      collegeWeight: 10,
      details: {
        cost: "Free",
        schedule: "January - December",
        location: "Remote/MIT Campus",
        requirements: ["Strong math background", "Programming experience", "Research interest"],
        benefits: ["MIT faculty mentorship", "Research publication", "Conference presentation"]
      }
    },
    {
      type: 'program' as const,
      name: "Google CSSI",
      description: "Computer Science Summer Institute for aspiring engineers",
      matchScore: 0,
      tags: ["engineering", "computer-science", "technology"],
      link: "https://buildyourfuture.withgoogle.com/programs/computer-science-summer-institute",
      timeCommitment: "4 weeks (full-time)",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "Free (includes housing and meals)",
        schedule: "July - August",
        location: "Multiple Google offices",
        requirements: ["Interest in Computer Science", "No prior experience required"],
        benefits: ["Google mentorship", "Project experience", "Network building"]
      }
    },
    {
      type: 'competition' as const,
      name: "FIRST Robotics Competition",
      description: "Team-based robotics competition program",
      matchScore: 0,
      tags: ["engineering", "robotics", "teamwork"],
      link: "https://www.firstinspires.org/robotics/frc",
      timeCommitment: "Jan-Apr (intensive)",
      difficulty: "Intermediate",
      collegeWeight: 7,
      details: {
        cost: "$5,000-15,000 per team (usually school-sponsored)",
        schedule: "January - April",
        location: "Local/Regional/International",
        requirements: ["School team participation", "Engineering interest"],
        benefits: ["Hands-on engineering", "Team leadership", "Competition experience"]
      }
    }
  ],
  medical: [
    {
      type: 'program' as const,
      name: "NIH High School SIP",
      description: "Summer Internship Program at National Institutes of Health",
      matchScore: 0,
      tags: ["medical", "research", "biology"],
      link: "https://www.training.nih.gov/programs/hs-sip",
      timeCommitment: "8 weeks (full-time)",
      difficulty: "Advanced",
      collegeWeight: 9,
      details: {
        cost: "Paid stipend",
        schedule: "June - August",
        location: "NIH Campus",
        requirements: ["Strong biology background", "Research interest", "16+ years old"],
        benefits: ["Professional lab experience", "Mentored research", "NIH network"]
      }
    },
    {
      type: 'program' as const,
      name: "Stanford Medical Youth Science Program",
      description: "Five-week residential program for aspiring medical professionals",
      matchScore: 0,
      tags: ["medical", "science", "healthcare"],
      link: "https://smysp.stanford.edu/",
      timeCommitment: "5 weeks (residential)",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "Free for selected students",
        schedule: "Summer",
        location: "Stanford Campus",
        requirements: ["Interest in medicine", "Strong academics"],
        benefits: ["Hospital exposure", "Medical mentorship", "College prep"]
      }
    },
    {
      type: 'program' as const,
      name: "Penn Medicine Summer Program",
      description: "Medical research and clinical exposure program",
      matchScore: 0,
      tags: ["medical", "research", "clinical"],
      link: "https://www.med.upenn.edu/",
      timeCommitment: "4 weeks",
      difficulty: "Advanced",
      collegeWeight: 8,
      details: {
        cost: "$7,800",
        schedule: "July - August",
        location: "Penn Medicine",
        requirements: ["Strong science grades", "Research proposal", "Recommendation"],
        benefits: ["Research experience", "Clinical shadowing", "College credit"]
      }
    },
    {
      type: 'certification' as const,
      name: "EMT-Basic Certification",
      description: "Emergency Medical Technician certification program",
      matchScore: 0,
      tags: ["medical", "emergency", "certification"],
      link: "https://www.nremt.org/",
      timeCommitment: "6 months (part-time)",
      difficulty: "Intermediate",
      collegeWeight: 7,
      details: {
        cost: "$1,200-2,000",
        schedule: "Flexible",
        location: "Local training center",
        requirements: ["18+ years old", "CPR certification", "Background check"],
        benefits: ["Medical certification", "Clinical experience", "Patient care"]
      }
    }
  ],
  business: [
    {
      type: 'program' as const,
      name: "Wharton Global Youth Program",
      description: "Business education program for high school students",
      matchScore: 0,
      tags: ["business", "finance", "leadership"],
      link: "https://globalyouth.wharton.upenn.edu/",
      timeCommitment: "2-4 weeks",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "$8,000-12,000",
        schedule: "Summer sessions",
        location: "UPenn Campus",
        requirements: ["Interest in business", "Good academic standing"],
        benefits: ["Business fundamentals", "Network building", "College experience"]
      }
    },
    {
      type: 'competition' as const,
      name: "DECA Business Competition",
      description: "International business student competition",
      matchScore: 0,
      tags: ["business", "entrepreneurship", "competition"],
      link: "https://www.deca.org/",
      timeCommitment: "Year-round",
      difficulty: "Intermediate",
      collegeWeight: 7,
      details: {
        cost: "$50-200 membership + competition fees",
        schedule: "Throughout academic year",
        location: "Local/State/International",
        requirements: ["School chapter membership"],
        benefits: ["Business skills", "Competition experience", "Leadership"]
      }
    },
    {
      type: 'program' as const,
      name: "Harvard Business School's Pre-College Economics",
      description: "Summer program focusing on business and economics",
      matchScore: 0,
      tags: ["business", "economics", "harvard"],
      link: "https://www.summer.harvard.edu/",
      timeCommitment: "2 weeks",
      difficulty: "Advanced",
      collegeWeight: 9,
      details: {
        cost: "$5,000",
        schedule: "Summer",
        location: "Harvard Campus",
        requirements: ["Strong academic record", "Essay", "Recommendation"],
        benefits: ["College credit", "Harvard faculty instruction", "Case studies"]
      }
    },
    {
      type: 'program' as const,
      name: "NYU Summer Business Program",
      description: "Stern School of Business pre-college program",
      matchScore: 0,
      tags: ["business", "finance", "entrepreneurship"],
      link: "https://www.stern.nyu.edu/",
      timeCommitment: "3 weeks",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "$7,000",
        schedule: "Summer",
        location: "NYU Campus",
        requirements: ["High school student", "Good academic standing"],
        benefits: ["Business fundamentals", "Wall Street exposure", "Network building"]
      }
    },
    {
      type: 'club' as const,
      name: "Future Business Leaders of America (FBLA)",
      description: "National business student organization",
      matchScore: 0,
      tags: ["business", "leadership", "competition"],
      link: "https://www.fbla-pbl.org/",
      timeCommitment: "Year-round",
      difficulty: "Intermediate",
      collegeWeight: 7,
      details: {
        cost: "$20-50 membership",
        schedule: "Throughout academic year",
        location: "School chapter",
        requirements: ["School chapter membership"],
        benefits: ["Leadership development", "Competitions", "Networking"]
      }
    },
    {
      type: 'internship' as const,
      name: "Local Business Internship",
      description: "Summer internship at local businesses or startups",
      matchScore: 0,
      tags: ["business", "practical", "experience"],
      link: "#",
      timeCommitment: "20-40 hours/week",
      difficulty: "Intermediate",
      collegeWeight: 7,
      details: {
        cost: "Free/Paid",
        schedule: "Summer",
        location: "Local",
        requirements: ["16+ years old", "Basic business knowledge"],
        benefits: ["Real-world experience", "Professional references", "Resume building"]
      }
    }
  ],
  law: [
    {
      type: 'program' as const,
      name: "Georgetown Junior Law Academy",
      description: "Summer law program for high school students",
      matchScore: 0,
      tags: ["law", "government", "politics"],
      link: "https://www.georgetown.edu/",
      timeCommitment: "2 weeks",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "$4,500",
        schedule: "Summer sessions",
        location: "Georgetown Campus",
        requirements: ["Interest in law", "Good academic standing"],
        benefits: ["Law fundamentals", "Mock trials", "Campus experience"]
      }
    },
    {
      type: 'competition' as const,
      name: "National High School Mock Trial",
      description: "Premier mock trial competition program",
      matchScore: 0,
      tags: ["law", "competition", "debate"],
      link: "https://www.nationalmocktrial.org/",
      timeCommitment: "Year-round",
      difficulty: "Advanced",
      collegeWeight: 9,
      details: {
        cost: "Team fees (usually school-sponsored)",
        schedule: "September - May",
        location: "Various locations",
        requirements: ["School team membership", "Strong public speaking"],
        benefits: ["Trial experience", "Legal skills", "Competition success"]
      }
    },
    {
      type: 'internship' as const,
      name: "Law Firm Summer Associate",
      description: "Internship at local law firms",
      matchScore: 0,
      tags: ["law", "internship", "practical"],
      link: "#",
      timeCommitment: "6-8 weeks",
      difficulty: "Intermediate",
      collegeWeight: 7,
      details: {
        cost: "Paid/Unpaid varies",
        schedule: "Summer",
        location: "Local law firms",
        requirements: ["Strong writing skills", "Research ability"],
        benefits: ["Legal experience", "Professional network", "Letter of recommendation"]
      }
    },
    {
      type: 'program' as const,
      name: "Harvard Law School Youth Academy",
      description: "Introduction to law and legal thinking",
      matchScore: 0,
      tags: ["law", "academic", "prestigious"],
      link: "https://hls.harvard.edu/",
      timeCommitment: "3 weeks",
      difficulty: "Advanced",
      collegeWeight: 9,
      details: {
        cost: "$6,500",
        schedule: "Summer",
        location: "Harvard Campus",
        requirements: ["Strong academics", "Writing sample", "Recommendation"],
        benefits: ["Law school experience", "Case method learning", "Harvard faculty"]
      }
    }
  ],
  arts: [
    {
      type: 'program' as const,
      name: "Iowa Young Writers' Studio",
      description: "Intensive creative writing program",
      matchScore: 0,
      tags: ["arts", "writing", "creative"],
      link: "https://iyws.clas.uiowa.edu/",
      timeCommitment: "2 weeks",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "$2,500",
        schedule: "Summer sessions",
        location: "University of Iowa",
        requirements: ["Writing sample", "Creative interest"],
        benefits: ["Writing workshops", "Published authors", "Portfolio development"]
      }
    },
    {
      type: 'competition' as const,
      name: "Scholastic Art & Writing Awards",
      description: "National art and writing competition",
      matchScore: 0,
      tags: ["arts", "writing", "creative"],
      link: "https://www.artandwriting.org/",
      timeCommitment: "Submission-based",
      difficulty: "Intermediate",
      collegeWeight: 8,
      details: {
        cost: "$7-30 per submission",
        schedule: "Annual deadlines",
        location: "National",
        requirements: ["Original work", "13+ years old"],
        benefits: ["Recognition", "Scholarships", "Exhibition"]
      }
    },
    {
      type: 'program' as const,
      name: "Rhode Island School of Design Pre-College",
      description: "Intensive summer art program",
      matchScore: 0,
      tags: ["arts", "visual", "design"],
      link: "https://www.risd.edu/precollege",
      timeCommitment: "6 weeks",
      difficulty: "Advanced",
      collegeWeight: 9,
      details: {
        cost: "$8,500",
        schedule: "Summer",
        location: "RISD Campus",
        requirements: ["Art portfolio", "Creative statement"],
        benefits: ["Studio experience", "Portfolio development", "College credit"]
      }
    },
    {
      type: 'program' as const,
      name: "Interlochen Arts Camp",
      description: "Prestigious summer arts program",
      matchScore: 0,
      tags: ["arts", "performance", "music"],
      link: "https://www.interlochen.org/",
      timeCommitment: "3-6 weeks",
      difficulty: "Advanced",
      collegeWeight: 9,
      details: {
        cost: "$6,000-12,000",
        schedule: "Summer",
        location: "Interlochen, MI",
        requirements: ["Audition/Portfolio", "Artistic experience"],
        benefits: ["Professional training", "Performance opportunities", "Artist network"]
      }
    }
  ]
};

export const filterProgramsByBudget = (programs: Recommendation[], budget: string): Recommendation[] => {
  const budgetRanges = {
    'budget-conscious': 1000,
    'moderate-budget': 10000,
    'flexible-budget': 20000,
    'full-budget': Infinity
  };

  const maxBudget = budgetRanges[budget as keyof typeof budgetRanges] || Infinity;

  return programs.filter(program => {
    const costString = program.details.cost;
    if (costString === "Free" || costString.includes("school-sponsored") || costString.includes("Paid")) return true;
    
    const match = costString.match(/\$?([\d,]+)/);
    if (!match) return true;
    
    const cost = parseInt(match[1].replace(/,/g, ''));
    return cost <= maxBudget;
  });
};

// Update the generateRoadmap function to use major-specific programs
export const getRecommendedPrograms = (major: string, budget: string): Recommendation[] => {
  const majorPrograms = programsByMajor[major as keyof typeof programsByMajor] || [];
  return filterProgramsByBudget(majorPrograms, budget);
}; 