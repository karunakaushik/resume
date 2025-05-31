export interface ExperienceDetailsProps {
  title: string;
  company: string;
  location: string;
  responsibilities?: string[];
  technologies?: string[];
}

export interface InternshipDetailsProps {
  title: string;
  company: string;
  location: string;
  responsibilities?: string[];
}

export interface ProjectDetailsProps {
  title: string;
  organization: string;
  description: string[];
  technologies?: string[];
  github?: boolean;
  link?: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    about: string;
    linkedin: string;
    github: string;
    resumePdf: string;
  };
  achievements: string[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: Array<ExperienceDetailsProps & { duration: string }>;
  internships: Array<InternshipDetailsProps & { duration: string }>;
  projects: Array<ProjectDetailsProps & { duration: string }>;
  education: Array<{
    duration: string;
    degree: string;
    institution: string;
  }>;
  languages: string[];
}
