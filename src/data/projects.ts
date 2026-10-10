export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  techStack: string[];
  siteUrl?: string;
  githubUrl?: string;
  playstoreUrl?: string;
  appstoreUrl?: string;
  category: string;
  owner: boolean;
}

export const projectsData: Project[] = [
  {
    id: 0,
    name: "Sobatoko",
    description:
      "An all-in-one platform for Indonesian UMKM owners to manage inventory, orders, and mini-stores through a single dashboard. Empowering local businesses with professional digital tools.",
    image: "/sobatoko-logo-text.png",
    techStack: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Vercel",
    ],
    siteUrl: "https://www.sobatoko.com/",
    githubUrl: "",
    category: "Web",
    owner: true,
  },
  {
    id: 1,
    name: "Opaper - Point Of Sales Resto & Cafe",
    description:
      "A full-featured point of sales system built with React Native. Features include reservations, table management, and order workflows.",
    image: "",
    techStack: [
      "React Native",
      "Typescript",
      "Jotai",
      "Tanstack Query",
      "Firebase",
      "Bluetooth Printer",
      "POS System",
      "Expo",
      "Reactotron",
      "Reanimated",
      "Axios",
      "CI/CD",
      "Postman",
      "Git",
      "Linear",
      "Figma",
      "Slack",
      "Xcode",
      "Android Studio",
    ],
    siteUrl: "https://www.opaper.app/",
    githubUrl: "",
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=app.opaper.mobile&pli=1",
    appstoreUrl:
      "https://apps.apple.com/id/app/opaper-jualan-online-simpel/id1593079914",
    category: "Mobile",
    owner: false,
  },
  {
    id: 2,
    name: "ASTRO - Groceries in Minutes",
    description:
      "A full-featured e-commerce app built with React Native. Features include product search, real-time order tracking, and smooth checkout flows. This app is built for ASTRO, a grocery delivery service in Indonesia.",
    image: "",
    techStack: [
      "React Native",
      "Typescript",
      "Firebase",
      "Datadog",
      "Redux Toolkit",
      "Google Maps API",
      "Lottie",
      "CI/CD",
      "Postman",
      "Git",
      "Jira",
      "Figma",
      "Slack",
      "Xcode",
      "Android Studio",
      "Reanimated",
      "Axios",
    ],
    siteUrl: "https://www.astronauts.id/",
    githubUrl: "",
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=com.astro.shop&hl=id",
    appstoreUrl:
      "https://apps.apple.com/id/app/astro-groceries-in-minutes/id1581963198",
    category: "Mobile",
    owner: false,
  },
  {
    id: 3,
    name: "The Edge Singapore - News, Business, Insight, Investment",
    description:
      "A full-featured news app built with React Native. Features include article search, download articles, and read articles offline. This app is built for The Edge Singapore, a news portal in Singapore.",
    image: "",
    techStack: [
      "React Native",
      "Javascript",
      "Firebase",
      "Crashlytics",
      "Bitbucket",
      "Postman",
      "Git",
      "Jira",
      "Figma",
      "Slack",
      "Xcode",
      "Android Studio",
    ],
    siteUrl: "https://www.theedgesingapore.com",
    githubUrl: "",
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=com.theedgesingapore.theedgesingapore",
    appstoreUrl:
      "https://apps.apple.com/id/app/the-edge-singapore/id1069382385",
    category: "Mobile",
    owner: false,
  },
  {
    id: 4,
    name: "EdgeProp.sg - Singapore Property for Sale & Rent, Latest Property News",
    description:
      "A full-featured property app built with React Native. Features include property search, property details, and property news. This app is built for EdgeProp.sg, a property portal in Singapore.",
    image: "",
    techStack: [
      "React Native",
      "Next.js",
      "Javascript",
      "Firebase",
      "Crashlytics",
      "Bitbucket",
      "Postman",
      "Git",
      "Jira",
      "Figma",
      "Slack",
      "Xcode",
      "Android Studio",
    ],
    siteUrl: "https://www.edgeprop.sg",
    githubUrl: "",
    playstoreUrl:
      "https://play.google.com/store/apps/details?id=sg.com.theedgeproperty.app&hl=en_SG",
    appstoreUrl:
      "https://apps.apple.com/sg/app/edgepropsg-with-buddy/id1069299307",
    category: "All",
    owner: false,
  },
  {
    id: 5,
    name: "Real Estate Listing Website",
    description:
      "A modern, full-stack real estate listing platform built with Next.js 15, Payload CMS, and PostgreSQL. This application provides a beautiful frontend for property listings with a powerful admin interface for content management.",
    image: "",
    techStack: [
      "Next.js",
      "Typescript",
      "PostgreSQL",
      "Payload CMS",
      "Tailwind CSS",
      "Vercel",
      "Postman",
      "Git",
      "Figma",
    ],
    siteUrl: "https://real-estate-listing-web.vercel.app/",
    githubUrl: "https://github.com/renocerberus/real-estate-listing-web",
    category: "Web",
    owner: true,
  },
  {
    id: 6,
    name: "Mini Job Board Website",
    description:
      "A modern, responsive job board application built with Next.js 15, TypeScript, and Supabase. Find your next career opportunity or post job openings with an intuitive and beautiful interface.",
    image: "",
    techStack: [
      "Next.js",
      "Typescript",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
      "Postman",
      "Git",
      "Figma",
    ],
    siteUrl: "https://mini-job-board-app-alpha.vercel.app/",
    githubUrl: "https://github.com/renocerberus/mini-job-board-app",
    category: "Web",
    owner: true,
  },
  {
    id: 7,
    name: "BWA - React Native Class (Find Work Space) Project",
    description:
      "A full-featured work space app built with React Native. Features include work space search, work space details, and work space news. This app is built for BWA, a work space app in Indonesia.",
    image: "",
    techStack: [
      "React Native",
      "Typescript",
      "Firebase",
      "Git",
      "Figma",
      "Xcode",
      "Android Studio",
    ],
    siteUrl:
      "https://buildwithangga.com/kelas/complete-react-native-beginner-to-pro-bikin-aplikasi-cari-kantor?main_leads=sedangpromo",
    githubUrl: "https://github.com/renocerberus/bwa-find-work-space",
    category: "Mobile",
    owner: true,
  },
];
