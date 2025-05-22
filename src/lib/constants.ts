
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  tools: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  dataAiHint?: string;
}

export const projectsData: Project[] = [
  { 
    id: '1', 
    title: 'Portfolio v1', 
    description: 'My first iteration of a personal portfolio, focusing on brutalist design principles and frontend technologies.', 
    tags: ['Web Development', 'Portfolio', 'Frontend'], 
    tools: ['React', 'Next.js', 'Tailwind CSS'], 
    imageUrl: 'https://placehold.co/600x400.png', 
    dataAiHint: 'website design',
    liveUrl: '#',
    repoUrl: '#'
  },
  { 
    id: '2', 
    title: 'NeoBrutal UI Kit', 
    description: 'A concept UI component library inspired by neo-brutalism, built with reusable React components.', 
    tags: ['UI Design', 'Component Library', 'Open Source'], 
    tools: ['React', 'Storybook', 'CSS Modules'], 
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'abstract blocks',
    repoUrl: '#'
  },
  { 
    id: '3', 
    title: 'TaskFlow Pro', 
    description: 'A minimalist task management application designed for efficiency and focus, with a stark, functional UI.', 
    tags: ['Productivity', 'Web App', 'SaaS'], 
    tools: ['Vue.js', 'Firebase', 'GSAP'], 
    imageUrl: 'https://placehold.co/600x400.png',
    dataAiHint: 'task list',
    liveUrl: '#'
  },
];

export const skillsData: string[] = [
  'HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 
  'React', 'Next.js', 'Vue.js', 
  'Tailwind CSS', 'Sass/SCSS',
  'Node.js', 'Express.js',
  'Git & GitHub', 'CI/CD',
  'Responsive Design', 'Accessibility (A11Y)',
  'UI/UX Principles', 'Figma', 'GSAP'
];

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experienceData: ExperienceItem[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    duration: 'Jan 2022 - Present',
    description: 'Developed and maintained responsive web applications using React and Next.js. Collaborated with UI/UX designers to implement modern, user-friendly interfaces. Contributed to a 20% improvement in page load times.'
  },
  {
    id: '2',
    title: 'Junior Web Developer',
    company: 'Web Wizards Co.',
    duration: 'Jun 2020 - Dec 2021',
    description: 'Assisted senior developers in building e-commerce websites. Gained experience with HTML, CSS, JavaScript, and version control systems. Participated in daily stand-ups and agile development processes.'
  },
];

    