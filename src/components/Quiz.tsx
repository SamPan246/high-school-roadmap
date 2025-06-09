import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Paper,
  Container,
  Grid,
  Chip,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Rating,
  Tooltip,
  IconButton,
  useTheme
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import SchoolIcon from '@mui/icons-material/School';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { QuizQuestion, UserResponse, QuizResult, Recommendation, University, Roadmap, SeasonalPlan, RoadmapMilestone } from '../types/quiz';
import { quizQuestions, sampleRecommendations, universities, getRecommendedPrograms, updateUniversityOptions } from '../data/quizData';

let selectedUniversity: University | undefined;

const Quiz: React.FC = () => {
  const theme = useTheme();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState<UserResponse[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [results, setResults] = useState<QuizResult | null>(null);
  const [selectedMajor, setSelectedMajor] = useState<string>('');

  const generateSeasonalPlan = (year: string): SeasonalPlan => {
    return {
      fall: [],
      winter: [],
      spring: [],
      summer: []
    };
  };

  const handleOptionSelect = (questionId: number, optionId: number) => {
    const question = quizQuestions.find(q => q.id === questionId);
    const selectedOption = question?.options.find(opt => opt.id === optionId);
    
    // If this is the major selection question (id: 1), update the selectedMajor
    if (questionId === 1 && selectedOption) {
      const major = selectedOption.tags[0]; // Use the first tag as the major identifier
      setSelectedMajor(major);
      
      // Update university options based on selected major
      updateUniversityOptions(major);
      
      // Update the question text
      const majorName = selectedOption.text.split('(')[0].trim();
      quizQuestions[1].text = `Based on your interest in ${majorName}, which universities appeal to you most?`;
    }

    setUserResponses([
      ...userResponses.filter(response => response.questionId !== questionId),
      { questionId, selectedOptionId: optionId }
    ]);
  };

  const generateRoadmap = (recommendations: Recommendation[]): Roadmap => {
    // Get major-specific programs based on selected major and budget
    const userMajor = userResponses.find(r => r.questionId === 1)?.selectedOptionId;
    const userBudget = userResponses.find(r => r.questionId === 5)?.selectedOptionId;
    
    let majorTag = "engineering"; // default
    if (userMajor) {
      const majorQuestion = quizQuestions.find(q => q.id === 1);
      const selectedMajorOption = majorQuestion?.options.find(opt => opt.id === userMajor);
      majorTag = selectedMajorOption?.tags[0] || "engineering";
    }

    let budgetTag = "moderate-budget"; // default
    if (userBudget) {
      const budgetQuestion = quizQuestions.find(q => q.id === 5);
      const selectedBudgetOption = budgetQuestion?.options.find(opt => opt.id === userBudget);
      budgetTag = selectedBudgetOption?.tags[0] || "moderate-budget";
    }

    // Get recommended programs based on major and budget
    const majorPrograms = getRecommendedPrograms(majorTag, budgetTag);

    // Major-specific academic goals
    const academicGoalsByMajor = {
      business: {
        freshman: [
          "Take Honors Math and Economics if available",
          "Excel in Business/Economics electives",
          "Maintain 3.8+ unweighted GPA",
          "Start standardized test prep"
        ],
        sophomore: [
          "Take AP Microeconomics/Macroeconomics",
          "Advanced Math courses",
          "Business electives",
          "Maintain high GPA"
        ],
        junior: [
          "AP Statistics",
          "AP Calculus AB/BC",
          "Business/Economics research project",
          "Perfect grades in business courses"
        ],
        senior: [
          "Advanced Economics courses",
          "Business Analytics",
          "Independent business projects",
          "Maintain academic excellence"
        ]
      },
      engineering: {
        freshman: [
          "Take most challenging math courses",
          "Begin Physics sequence",
          "Computer Science fundamentals",
          "Maintain 3.8+ unweighted GPA"
        ],
        sophomore: [
          "AP Calculus AB",
          "AP Physics 1",
          "AP Computer Science",
          "Engineering electives"
        ],
        junior: [
          "AP Calculus BC",
          "AP Physics C",
          "Advanced Programming",
          "Engineering projects"
        ],
        senior: [
          "Multivariable Calculus",
          "Advanced Engineering courses",
          "Research projects",
          "Maintain excellence"
        ]
      },
      medical: {
        freshman: [
          "Take Honors Biology and Chemistry",
          "Advanced Math courses",
          "Health Science electives",
          "Maintain 3.8+ unweighted GPA"
        ],
        sophomore: [
          "AP Biology",
          "AP Chemistry",
          "Anatomy/Physiology",
          "Research methods course"
        ],
        junior: [
          "AP Physics",
          "AP Psychology",
          "Medical research project",
          "Advanced Biology electives"
        ],
        senior: [
          "Advanced Research",
          "Bioethics course",
          "Independent study",
          "Medical internship"
        ]
      },
      law: {
        freshman: [
          "Honors English and History",
          "Public Speaking/Debate",
          "Government/Civics",
          "Maintain 3.8+ unweighted GPA"
        ],
        sophomore: [
          "AP World History",
          "Speech and Debate",
          "Ethics/Philosophy",
          "Advanced Writing"
        ],
        junior: [
          "AP US History",
          "AP Government",
          "Constitutional Law",
          "Advanced Research"
        ],
        senior: [
          "AP Comparative Government",
          "Legal Studies",
          "Policy Research",
          "Mock Trial Leadership"
        ]
      },
      arts: {
        freshman: [
          "Honors English Literature",
          "Creative Writing",
          "Art History/Theory",
          "Maintain 3.8+ unweighted GPA"
        ],
        sophomore: [
          "AP English Language",
          "Advanced Studio Art",
          "World Literature",
          "Performance Arts"
        ],
        junior: [
          "AP English Literature",
          "Advanced Creative Writing",
          "Art Portfolio Development",
          "Cultural Studies"
        ],
        senior: [
          "Independent Writing Project",
          "Advanced Art Portfolio",
          "Literary Magazine",
          "Arts Research"
        ]
      }
    };

    // Major-specific extracurricular goals
    const extracurricularGoalsByMajor = {
      business: {
        freshman: [
          "Join FBLA or DECA",
          "Start a small business venture",
          "Participate in business competitions",
          "Join investment or entrepreneurship club"
        ],
        sophomore: [
          "Lead FBLA/DECA initiatives",
          "Expand business venture",
          "Enter case competitions",
          "Start financial literacy club"
        ],
        junior: [
          "FBLA/DECA leadership position",
          "Secure business internship",
          "Win competitions",
          "Mentor younger students"
        ],
        senior: [
          "Regional/National FBLA/DECA roles",
          "Scale business venture",
          "Lead multiple initiatives",
          "Create lasting impact"
        ]
      },
      engineering: {
        freshman: [
          "Join Robotics club",
          "Participate in Math team",
          "Start coding projects",
          "Enter STEM competitions"
        ],
        sophomore: [
          "Lead Robotics projects",
          "Math/Science Olympiad",
          "Hackathon participation",
          "Research projects"
        ],
        junior: [
          "Captain STEM teams",
          "Research internship",
          "Win competitions",
          "Lead coding initiatives"
        ],
        senior: [
          "National competition success",
          "Research publication",
          "Major engineering project",
          "Mentor STEM students"
        ]
      },
      medical: {
        freshman: [
          "Join Health Occupations Club",
          "Hospital volunteering",
          "Science Olympiad",
          "First Aid/CPR certification"
        ],
        sophomore: [
          "Lead health initiatives",
          "Medical shadowing",
          "Research lab assistant",
          "Health awareness campaigns"
        ],
        junior: [
          "Clinical volunteering",
          "Medical research project",
          "Health club leadership",
          "EMT certification"
        ],
        senior: [
          "Hospital department lead",
          "Research publication",
          "Medical conference presentation",
          "Health mentorship program"
        ]
      },
      law: {
        freshman: [
          "Join Mock Trial/Debate",
          "Model UN",
          "Student Government",
          "Community advocacy"
        ],
        sophomore: [
          "Mock Trial competitions",
          "Legal internship",
          "Policy research",
          "Youth court participation"
        ],
        junior: [
          "Mock Trial leadership",
          "Legal clinic volunteer",
          "Policy advocacy projects",
          "Law firm internship"
        ],
        senior: [
          "National Mock Trial",
          "Legal research publication",
          "Policy initiative leader",
          "Pre-law society president"
        ]
      },
      arts: {
        freshman: [
          "Creative Writing Club",
          "School newspaper/magazine",
          "Art/Theater productions",
          "Cultural events"
        ],
        sophomore: [
          "Literary magazine editor",
          "Art exhibitions",
          "Theater productions",
          "Arts competitions"
        ],
        junior: [
          "Literary journal chief editor",
          "Solo art exhibition",
          "Theater direction",
          "Arts festival organization"
        ],
        senior: [
          "Published author/artist",
          "Gallery exhibitions",
          "Theater company lead",
          "Arts community leadership"
        ]
      }
    };

    // Get selected university and related universities
    const selectedUniversityId = userResponses.find(r => r.questionId === 2)?.selectedOptionId;
    let relatedUniversities: University[] = [];

    if (selectedUniversityId) {
      const universityQuestion = quizQuestions.find(q => q.id === 2);
      const selectedOption = universityQuestion?.options.find(opt => opt.id === selectedUniversityId);
      if (selectedOption) {
        // Find the selected university in the universities array
        selectedUniversity = universities.find(u => 
          u.name.toLowerCase().includes(selectedOption.tags[0]) || 
          selectedOption.text.toLowerCase().includes(u.name.toLowerCase())
        );
        
        // Find related universities for the same major, excluding the selected one
        relatedUniversities = universities
          .filter(u => {
            const isSelected = selectedUniversity && u.name === selectedUniversity.name;
            const hasMajor = u.strongPrograms.some(p => p.toLowerCase().includes(majorTag));
            return !isSelected && hasMajor;
          })
          .slice(0, 2); // Get top 2 related universities
      }
    }

    // Ensure selected university is first in the list
    const suggestedUniversities = selectedUniversity ? 
      [selectedUniversity, ...relatedUniversities] : 
      relatedUniversities;

    // Use major-specific goals in the roadmap
    const goals = academicGoalsByMajor[majorTag as keyof typeof academicGoalsByMajor] || academicGoalsByMajor.business;
    const extraGoals = extracurricularGoalsByMajor[majorTag as keyof typeof extracurricularGoalsByMajor] || extracurricularGoalsByMajor.business;

    // Inside the generateRoadmap function, update the summer opportunities:
    const summerPrograms = majorPrograms
      .filter(p => p.details.schedule.toLowerCase().includes('summer'))
      .sort((a, b) => (b.difficulty === 'Advanced' ? 1 : -1));

    const createSeasonalMilestones = (activities: string[]): RoadmapMilestone[] => {
      return activities.map(activity => ({
        title: activity,
        description: activity,
        timeline: "Season",
        priority: "Medium" as const,
        category: "Academic" as const,
        specificPrograms: []
      }));
    };

    const freshman = {
      academicGoals: goals.freshman,
      extracurricularGoals: extraGoals.freshman,
      skillsDevelopment: [
        "Time management",
        "Public speaking",
        "Leadership",
        "Analytical thinking"
      ],
      milestones: [
        {
          title: "Academic Excellence",
          description: `Establish strong foundation in ${majorTag} subjects`,
          timeline: "Throughout year",
          priority: "High" as const,
          category: "Academic" as const,
          specificPrograms: majorPrograms
            .filter(p => p.difficulty === "Beginner" || p.difficulty === "Intermediate")
            .slice(0, 2)
            .map(p => ({
              name: p.name,
              deadline: p.details.applicationDeadline || "Check website",
              cost: p.details.cost,
              timeCommitment: p.timeCommitment,
              link: p.link || "#"
            }))
        },
        {
          title: "Test Preparation",
          description: "Begin PSAT preparation and subject knowledge building",
          timeline: "Second semester",
          priority: "Medium" as const,
          category: "Academic" as const,
          specificPrograms: [
            {
              name: "PSAT Practice Tests",
              deadline: "Ongoing",
              cost: "Free-$50",
              timeCommitment: "2-3 hours/week",
              link: "https://www.collegeboard.org/"
            }
          ]
        }
      ],
      summerOpportunities: summerPrograms
        .filter(p => p.difficulty === "Beginner" || p.difficulty === "Intermediate")
        .slice(0, 2)
        .map(p => p.name),
      seasonalPlan: {
        fall: createSeasonalMilestones(["Join relevant clubs", "Establish study routine", "Meet with counselor"]),
        winter: createSeasonalMilestones(["Maintain strong grades", "Research summer programs", "Build foundational skills"]),
        spring: createSeasonalMilestones(["Begin PSAT prep", "Plan summer activities", "Select sophomore courses"]),
        summer: createSeasonalMilestones(["Attend summer program", "Read field-related books", "Develop independent projects"])
      }
    };

    const sophomore = {
      academicGoals: goals.sophomore,
      extracurricularGoals: extraGoals.sophomore,
      skillsDevelopment: [
        "Project management",
        "Team leadership",
        "Technical writing",
        "Problem solving"
      ],
      milestones: [
        {
          title: `${majorTag.charAt(0).toUpperCase() + majorTag.slice(1)} Skills`,
          description: "Begin specialized projects and competitions",
          timeline: "Throughout year",
          priority: "High" as const,
          category: "Skills Development" as const,
          specificPrograms: majorPrograms
            .filter(p => p.difficulty === "Intermediate")
            .slice(0, 2)
            .map(p => ({
              name: p.name,
              deadline: p.details.applicationDeadline || "Check website",
              cost: p.details.cost,
              timeCommitment: p.timeCommitment,
              link: p.link || "#"
            }))
        },
        {
          title: "PSAT/NMSQT",
          description: "Take PSAT and begin SAT preparation",
          timeline: "October-May",
          priority: "High" as const,
          category: "Academic" as const,
          specificPrograms: [
            {
              name: "PSAT/NMSQT Test",
              deadline: "September Registration",
              cost: "$18",
              timeCommitment: "One test day + prep time",
              link: "https://www.collegeboard.org/"
            }
          ]
        }
      ],
      summerOpportunities: summerPrograms
        .filter(p => p.difficulty === "Intermediate")
        .slice(0, 2)
        .map(p => p.name),
      seasonalPlan: {
        fall: createSeasonalMilestones(["Take PSAT", "Lead club activities", "Research competitions"]),
        winter: createSeasonalMilestones(["Competition preparation", "SAT subject planning", "Summer program research"]),
        spring: createSeasonalMilestones(["Begin SAT prep", "Apply to summer programs", "Plan junior courses"]),
        summer: createSeasonalMilestones(["Intensive summer program", "SAT preparation", "Build leadership projects"])
      }
    };

    const junior = {
      academicGoals: goals.junior,
      extracurricularGoals: extraGoals.junior,
      skillsDevelopment: [
        "Advanced technical skills",
        "Research methodology",
        "Professional networking",
        "Project leadership"
      ],
      milestones: [
        {
          title: "Advanced Achievement",
          description: `Complete significant ${majorTag} projects`,
          timeline: "Throughout year",
          priority: "High" as const,
          category: "Extracurricular" as const,
          specificPrograms: majorPrograms
            .filter(p => p.difficulty === "Advanced")
            .slice(0, 2)
            .map(p => ({
              name: p.name,
              deadline: p.details.applicationDeadline || "Check website",
              cost: p.details.cost,
              timeCommitment: p.timeCommitment,
              link: p.link || "#"
            }))
        },
        {
          title: "Standardized Tests",
          description: "Complete SAT/ACT and Subject Tests",
          timeline: "Throughout year",
          priority: "High" as const,
          category: "Academic" as const,
          specificPrograms: [
            {
              name: "SAT/ACT Tests",
              deadline: "Multiple dates",
              cost: "$55-70 per test",
              timeCommitment: "Test days + prep time",
              link: "https://www.collegeboard.org/"
            }
          ]
        },
        {
          title: "College Research",
          description: "Begin college list and research",
          timeline: "Spring",
          priority: "High" as const,
          category: "College Prep" as const,
          specificPrograms: []
        }
      ],
      summerOpportunities: summerPrograms
        .filter(p => p.difficulty === "Advanced")
        .slice(0, 2)
        .map(p => p.name),
      seasonalPlan: {
        fall: createSeasonalMilestones(["Take SAT/ACT", "Lead major projects", "Research colleges"]),
        winter: createSeasonalMilestones(["Continue testing", "Competition leadership", "College planning"]),
        spring: createSeasonalMilestones(["Final SAT/ACT", "College visits", "Summer planning"]),
        summer: createSeasonalMilestones(["Advanced program/research", "College essays", "Build portfolio"])
      }
    };

    const senior = {
      academicGoals: goals.senior,
      extracurricularGoals: extraGoals.senior,
      skillsDevelopment: [
        "Leadership excellence",
        "Advanced projects",
        "Mentoring others",
        "Professional development"
      ],
      milestones: [
        {
          title: "College Applications",
          description: "Submit outstanding applications",
          timeline: "August-January",
          priority: "High" as const,
          category: "College Prep" as const,
          specificPrograms: []
        },
        {
          title: "Leadership Legacy",
          description: "Transition leadership roles and complete projects",
          timeline: "Throughout year",
          priority: "Medium" as const,
          category: "Leadership" as const,
          specificPrograms: []
        },
        {
          title: "College Decision",
          description: "Make final college choice and prepare for transition",
          timeline: "March-May",
          priority: "High" as const,
          category: "College Prep" as const,
          specificPrograms: []
        }
      ],
      summerOpportunities: [
        "Prepare for college transition",
        "Complete college orientation requirements",
        "Connect with future classmates",
        "Prepare for college-level coursework"
      ],
      seasonalPlan: {
        fall: createSeasonalMilestones(["Submit applications", "Maintain grades", "Continue leadership"]),
        winter: createSeasonalMilestones(["Complete applications", "Scholarship search", "Maintain involvement"]),
        spring: createSeasonalMilestones(["College decisions", "AP exams", "Transition planning"]),
        summer: createSeasonalMilestones(["College preparation", "Skills development", "Connect with classmates"])
      }
    };

    return {
      freshman,
      sophomore,
      junior,
      senior
    };
  };

  const matchUniversities = (userTags: Map<string, number>): University[] => {
    // Simple matching algorithm - can be made more sophisticated
    return universities
      .map(uni => {
        let score = 0;
        uni.valuesActivities.forEach(activity => {
          const relatedTags = Array.from(userTags.keys()).filter(tag => 
            activity.toLowerCase().includes(tag.toLowerCase())
          );
          relatedTags.forEach(tag => {
            score += userTags.get(tag) || 0;
          });
        });
        return { ...uni, matchScore: score };
      })
      .sort((a, b) => (b as any).matchScore - (a as any).matchScore)
      .slice(0, 3);
  };

  const calculateProgramCosts = (recommendations: Recommendation[]): number => {
    return recommendations.reduce((total, rec) => {
      const costString = rec.details.cost;
      if (costString === "Free") return total;
      
      // Extract numeric value from cost string
      const match = costString.match(/\$?([\d,]+)/);
      if (!match) return total;
      
      const cost = parseInt(match[1].replace(/,/g, ''));
      return total + cost;
    }, 0);
  };

  const calculateTotalCosts = (recommendations: Recommendation[]): number => {
    const programCosts = calculateProgramCosts(recommendations);
    const testPrepCosts = 1500; // SAT/ACT prep courses, materials
    const applicationCosts = 1000; // Application fees, score sends
    return programCosts + testPrepCosts + applicationCosts;
  };

  const calculateResults = () => {
    const userMajor = userResponses.find(r => r.questionId === 1)?.selectedOptionId;
    const userBudget = userResponses.find(r => r.questionId === 5)?.selectedOptionId;
    
    let majorTag = "engineering"; // default
    if (userMajor) {
      const majorQuestion = quizQuestions.find(q => q.id === 1);
      const selectedMajorOption = majorQuestion?.options.find(opt => opt.id === userMajor);
      majorTag = selectedMajorOption?.tags[0] || "engineering";
    }

    let budgetTag = "moderate-budget"; // default
    if (userBudget) {
      const budgetQuestion = quizQuestions.find(q => q.id === 5);
      const selectedBudgetOption = budgetQuestion?.options.find(opt => opt.id === userBudget);
      budgetTag = selectedBudgetOption?.tags[0] || "moderate-budget";
    }

    // Get recommended programs based on major and budget
    const majorPrograms = getRecommendedPrograms(majorTag, budgetTag);

    // Get selected university and related universities
    const selectedUniversityId = userResponses.find(r => r.questionId === 2)?.selectedOptionId;
    let relatedUniversities: University[] = [];

    if (selectedUniversityId) {
      const universityQuestion = quizQuestions.find(q => q.id === 2);
      const selectedOption = universityQuestion?.options.find(opt => opt.id === selectedUniversityId);
      if (selectedOption) {
        // Find the selected university in the universities array
        selectedUniversity = universities.find(u => 
          u.name.toLowerCase().includes(selectedOption.tags[0]) || 
          selectedOption.text.toLowerCase().includes(u.name.toLowerCase())
        );
        
        // Find related universities for the same major, excluding the selected one
        relatedUniversities = universities
          .filter(u => {
            const isSelected = selectedUniversity && u.name === selectedUniversity.name;
            const hasMajor = u.strongPrograms.some(p => p.toLowerCase().includes(majorTag));
            return !isSelected && hasMajor;
          })
          .slice(0, 2); // Get top 2 related universities
      }
    }

    // Ensure selected university is first in the list
    const suggestedUniversities = selectedUniversity ? 
      [selectedUniversity, ...relatedUniversities] : 
      relatedUniversities;

    const roadmap = generateRoadmap(majorPrograms);

    setResults({
      recommendations: majorPrograms,
      personalizedNotes: `Based on your interest in ${majorTag} and your budget constraints, we've created a customized roadmap focusing on activities and programs that will strengthen your application to ${selectedUniversity?.name || 'your target universities'}.`,
      roadmap,
      suggestedUniversities,
      nextSteps: [
        "Review and discuss this plan with your parents and counselor",
        "Research the recommended activities and universities",
        "Create a weekly schedule to balance activities",
        "Set specific goals for each semester",
        "Track your progress regularly"
      ],
      timeline: {
        immediate: [
          "Meet with guidance counselor to plan courses",
          "Start standardized test preparation",
          "Research summer programs",
          `Join relevant ${majorTag}-focused clubs`
        ],
        thisMonth: [
          "Register for upcoming standardized tests",
          "Begin college research",
          "Contact potential mentors",
          "Create study schedule"
        ],
        thisYear: [
          "Complete required standardized tests",
          "Participate in competitions",
          "Build portfolio",
          "Develop leadership roles"
        ],
        longTerm: [
          "Maintain academic excellence",
          "Complete major projects",
          "Present at conferences/competitions",
          "Prepare college applications"
        ]
      },
      estimatedCosts: {
        programs: calculateProgramCosts(majorPrograms),
        testPrep: 1500,
        applications: 1000,
        total: calculateProgramCosts(majorPrograms) + 2500
      }
    });
    setQuizComplete(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
    }
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];

  if (quizComplete && results) {
    return (
      <Container maxWidth="lg">
        <Box sx={{ mt: 4, mb: 6 }}>
          <Typography variant="h4" gutterBottom align="center" color="primary" sx={{ mb: 4 }}>
            Your Personalized Success Roadmap
          </Typography>

          {/* University Recommendations */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#f8f9fa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SchoolIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h5" color="primary">
                Recommended Universities
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {results.suggestedUniversities.map((uni, index) => (
                <Box key={uni.name} sx={{ width: { xs: '100%', md: '33.33%' }, p: 1.5 }}>
                  <Paper elevation={2} sx={{ 
                    p: 3, 
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {uni.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {uni.description}
                    </Typography>
                    <Divider sx={{ my: 1 }} />
                    <Typography variant="body2">
                      <strong>Acceptance Rate:</strong> {uni.acceptanceRate}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Location:</strong> {uni.location}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>Strong Programs:</strong>
                    </Typography>
                    <Box sx={{ mt: 1, mb: 2 }}>
                      {uni.strongPrograms.map((program, i) => (
                        <Chip
                          key={i}
                          label={program}
                          size="small"
                          sx={{ mr: 0.5, mb: 0.5 }}
                        />
                      ))}
                    </Box>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      <strong>SAT:</strong> {uni.standardizedScores.satRange}
                      {' | '}
                      <strong>ACT:</strong> {uni.standardizedScores.actRange}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Grid>
          </Paper>

          {/* 4-Year Roadmap */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#f8f9fa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <TimelineIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h5" color="primary">
                4-Year High School Roadmap
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {Object.entries(results.roadmap).map(([year, plan]) => (
                <Box key={year} sx={{ width: { xs: '100%', md: '25%' }, p: 1.5 }}>
                  <Paper elevation={2} sx={{ p: 2, height: '100%', backgroundColor: 'white' }}>
                    <Typography variant="h6" gutterBottom color="primary" sx={{ textTransform: 'capitalize' }}>
                      {year} Year
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    
                    <Typography variant="subtitle2" color="primary" gutterBottom>
                      Academic Goals
                    </Typography>
                    {plan.academicGoals.map((goal: string, i: number) => (
                      <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                        • {goal}
                      </Typography>
                    ))}

                    <Typography variant="subtitle2" color="primary" sx={{ mt: 2 }} gutterBottom>
                      Extracurricular Goals
                    </Typography>
                    {plan.extracurricularGoals.map((goal: string, i: number) => (
                      <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                        • {goal}
                      </Typography>
                    ))}

                    <Typography variant="subtitle2" color="primary" sx={{ mt: 2 }} gutterBottom>
                      Summer Opportunities
                    </Typography>
                    {plan.summerOpportunities.map((opp: string, i: number) => (
                      <Typography key={i} variant="body2" sx={{ mb: 1 }}>
                        • {opp}
                      </Typography>
                    ))}
                  </Paper>
                </Box>
              ))}
            </Grid>
          </Paper>

          {/* Activity Recommendations */}
          <Paper elevation={3} sx={{ p: 3, mb: 4, backgroundColor: '#f8f9fa' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <EmojiEventsIcon sx={{ mr: 1, color: theme.palette.primary.main }} />
              <Typography variant="h5" color="primary">
                Recommended Activities
              </Typography>
            </Box>
            <Grid container spacing={3}>
              {results.recommendations.map((rec, index) => (
                <Box key={index} sx={{ width: { xs: '100%', md: '50%' }, p: 1.5 }}>
                  <Paper elevation={2} sx={{ 
                    p: 3, 
                    height: '100%',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                      <Typography variant="h6" color="primary">
                        {rec.name}
                      </Typography>
                      <Chip
                        label={rec.type}
                        color={rec.type === 'club' ? 'primary' : rec.type === 'competition' ? 'secondary' : 'success'}
                        size="small"
                      />
                    </Box>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                      {rec.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        Time Commitment: {rec.timeCommitment}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Difficulty: {rec.difficulty}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mr: 1 }}>
                          College Impact:
                        </Typography>
                        <Rating
                          value={rec.collegeWeight ? rec.collegeWeight / 2 : 0}
                          readOnly
                          precision={0.5}
                          size="small"
                        />
                      </Box>
                    </Box>
                    {rec.link && (
                      <Button
                        component="a"
                        href={rec.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        size="small"
                        sx={{ mt: 'auto' }}
                      >
                        Learn More
                      </Button>
                    )}
                  </Paper>
                </Box>
              ))}
            </Grid>
          </Paper>

          {/* Next Steps */}
          <Paper elevation={3} sx={{ p: 3, backgroundColor: '#f8f9fa' }}>
            <Typography variant="h5" gutterBottom color="primary">
              Next Steps
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {results.nextSteps.map((step, index) => (
                <Box key={index} sx={{ width: { xs: '100%', md: 'calc(50% - 8px)' } }}>
                  <Paper elevation={1} sx={{ p: 2 }}>
                    <Typography variant="body1">
                      {index + 1}. {step}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Stepper activeStep={currentQuestionIndex} alternativeLabel sx={{ mb: 4 }}>
          {quizQuestions.map((_, index) => (
            <Step key={index}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>
        
        <Card elevation={3} sx={{ 
          borderRadius: 2,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: 4
          }
        }}>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom color="primary" align="center">
              {currentQuestion.text}
            </Typography>
            
            <FormControl component="fieldset" sx={{ width: '100%', mt: 2 }}>
              <RadioGroup
                value={userResponses.find(r => r.questionId === currentQuestion.id)?.selectedOptionId || ''}
                onChange={(e) => handleOptionSelect(currentQuestion.id, Number(e.target.value))}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {currentQuestion.options.map(option => (
                    <Paper key={option.id} elevation={1} sx={{ 
                      p: 2,
                      transition: 'all 0.2s',
                      '&:hover': {
                        backgroundColor: '#f5f5f5',
                        transform: 'translateX(8px)'
                      }
                    }}>
                      <FormControlLabel
                        value={option.id}
                        control={<Radio />}
                        label={option.text}
                        sx={{ width: '100%', m: 0 }}
                      />
                    </Paper>
                  ))}
                </Box>
              </RadioGroup>
            </FormControl>
            
            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <Button
                variant="contained"
                onClick={handleNext}
                disabled={!userResponses.find(r => r.questionId === currentQuestion.id)}
                size="large"
                sx={{ 
                  minWidth: 200,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontSize: '1.1rem'
                }}
              >
                {currentQuestionIndex === quizQuestions.length - 1 ? 'Get Your Roadmap' : 'Next Question'}
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default Quiz; 