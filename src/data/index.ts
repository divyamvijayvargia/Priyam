import { Award, TeamMember, Service, Job } from '../types';

export const awards: Award[] = [
  {
    id: 1,
    title: "Best Software Solutions Provider 2023",
    description: "Recognized for excellence in software development and innovation by Tech Excellence Awards",
    image: "https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "Innovation Award 2023",
    description: "Leading innovation in technology solutions and digital transformation",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    title: "Top Workplace 2023",
    description: "Recognized for exceptional workplace culture and employee satisfaction",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60"
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO",
    bio: "20+ years of experience in technology leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    bio: "Former Google engineer, AI/ML expert",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Head of Product",
    bio: "Product strategy and innovation specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Head of Design",
    bio: "Award-winning UX/UI designer",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored software solutions for your business needs",
    details: [
      "Enterprise applications",
      "Web applications",
      "Mobile apps",
      "API development"
    ],
    icon: "Code"
  },
  {
    id: 2,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and services",
    details: [
      "Cloud migration",
      "Infrastructure setup",
      "Performance optimization",
      "24/7 monitoring"
    ],
    icon: "Cloud"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    details: [
      "iOS development",
      "Android development",
      "Cross-platform apps",
      "App maintenance"
    ],
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "AI & Machine Learning",
    description: "Intelligent solutions for your business",
    details: [
      "Predictive analytics",
      "Natural language processing",
      "Computer vision",
      "Machine learning models"
    ],
    icon: "Brain"
  }
];

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "We're looking for an experienced software engineer to join our team and help build innovative solutions for our clients.",
    requirements: [
      "5+ years of experience in software development",
      "Strong knowledge of React and TypeScript",
      "Experience with cloud technologies (AWS/Azure/GCP)",
      "Excellent problem-solving skills",
      "Strong communication abilities"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "401(k) matching",
      "Remote work options",
      "Professional development budget"
    ]
  },
  {
    id: 2,
    title: "UX Designer",
    location: "Hybrid",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    description: "Join our design team to create amazing user experiences and help shape the future of our products.",
    requirements: [
      "3+ years of UX design experience",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong portfolio of work",
      "Experience with user research",
      "Knowledge of design systems"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Flexible work hours",
      "Design conference budget",
      "Creative workspace"
    ]
  },
  {
    id: 3,
    title: "Product Manager",
    location: "On-site",
    type: "Full-time",
    salary: "$100,000 - $140,000",
    description: "Lead product strategy and development for our enterprise solutions.",
    requirements: [
      "4+ years of product management experience",
      "Strong analytical skills",
      "Experience with agile methodologies",
      "Excellent stakeholder management",
      "Technical background preferred"
    ],
    benefits: [
      "Competitive salary",
      "Stock options",
      "Health benefits",
      "Leadership training",
      "Industry events participation"
    ]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "David Wilson",
    position: "CTO at TechStart",
    content: "Working with TechCorp has transformed our business operations. Their custom software solutions have increased our efficiency by 40%.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Lisa Chen",
    position: "CEO at InnovateCo",
    content: "The cloud migration service provided by TechCorp was seamless. Their team's expertise and support were exceptional.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60"
  }
];