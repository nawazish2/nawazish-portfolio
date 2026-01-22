import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { SiReact, SiNodedotjs, SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiPython, SiCplusplus, SiJavascript } from "react-icons/si";

export const DATA = {
  name: "Nawazish Khan",
  initials: "NK",
  url: "https://nawazishkhan.in",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description: "Full Stack Developer and B.Tech CSE student passionate about building modern web applications.",
  summary: "I am a **Full Stack Developer** currently pursuing my **B.Tech in Computer Science & Engineering (BTech CSE)**. I am passionate about building full-stack applications and solving complex problems with clean code.",
  avatarUrl: "/images/profile.jpg",
  resume: "/nawazish.pdf",

  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "MongoDB",
    "Express",
    "TailwindCSS",
    "C++",
    "JavaScript",
  ],

  navbar: [
    { href: "/", icon: null, label: "Home" },
  ],

  contact: {
    email: "knawazish153@gmail.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nawazish2",
        icon: FaGithub,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nawazishkhan8",
        icon: FaLinkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nawazish_khan44",
        icon: FaXTwitter,
        navbar: true,
      },
    },
  },

  work: [] as Array<{
    company: string;
    href: string;
    badges?: string[];
    location: string;
    title: string;
    logoUrl?: string;
    start: string;
    end: string;
    description?: string;
  }>,

  education: [
    {
      school: "I.K. Gujral Punjab Technical University",
      href: "https://www.ikgptu.ac.in/",
      degree: "Bachelor's Degree of Computer Science & Engineering (BTech CSE)",
      // logoUrl: "/ikgptu-logo.png",
      start: "2023",
      end: "2027",
    },
  ],

  projects: [
    {
      title: "Portfolio Website",
      href: "https://nawazishkhan.in",
      dates: "Dec 2024 - Present",
      active: true,
      description: "A minimalist developer portfolio built with Next.js 14, React, TypeScript, and Tailwind CSS.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://nawazishkhan.in",
          icon: null,
        },
        {
          type: "Source",
          href: "https://github.com/nawazish2/portfolio",
          icon: null,
        },
      ],
      image: "",
      video: "",
    },
    // Add more projects here
  ],

  hackathons: [
    // {
    //   title: "Hackathon Name",
    //   dates: "Nov 23rd - 25th, 2024",
    //   location: "City, Country",
    //   description: "Description of what you built or achieved at this hackathon.",
    //   image: "/hackathon-logo.png",
    //   links: [
    //     {
    //       title: "Source",
    //       href: "https://github.com/...",
    //     },
    //   ],
    // },
  ],

  externalProfiles: [
    {
      name: "TakeUForward",
      url: "https://takeuforward.org/profile/nawazish2", // TODO: Update with actual profile URL
    },
  ],
} as const;

export type Data = typeof DATA;