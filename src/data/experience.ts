export interface Experience {
  id: number;
  jobTitle: string;
  company: string;
  dateRange: string;
  location: string;
  description: string;
  achievements?: string[];
  technologies: string[];
  type: string;
  url: string;
}

export const experienceData: Experience[] = [
  {
    id: 1,
    jobTitle: "Senior React Native Developer",
    company: "PT. Opaper International Indonesia",
    dateRange: "April 2023 – July 2025",
    location: "Jakarta (Remote)",
    description:
      "Engineered and maintained a high-performance cross-platform POS system for restaurants and retail merchants on Android and iOS.",
    achievements: [
      "Integrated hardware peripherals including thermal receipt printers (Bluetooth & LAN), cash drawers, and dual-screen cashier setups.",
      "Built core table management, real-time reservations, and kitchen order tickets for fast-paced F&B environments.",
      "Optimized offline state management with Jotai and TanStack Query so cashiers can keep taking orders even during network drops.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Jotai",
      "TanStack Query",
      "Bluetooth & LAN Printers",
      "Firebase",
      "Datadog",
      "Reanimated",
    ],
    type: "Full-time",
    url: "https://www.opaper.app/",
  },
  {
    id: 2,
    jobTitle: "Senior React Native Developer",
    company: "PT. Astro Technologies Indonesia",
    dateRange: "December 2021 – April 2023",
    location: "Jakarta (Remote)",
    description:
      "Developed key features for Astro's instant grocery delivery app on Android and iOS, used by hundreds of thousands of shoppers.",
    achievements: [
      "Shipped instant product search, real-time GPS courier tracking, and frictionless checkout flows.",
      "Collaborated with security teams on fraud prevention and secure payment gateway handling.",
      "Improved app startup latency and reduced re-renders during high flash sale traffic.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "Google Maps API",
      "Firebase",
      "Datadog",
      "Lottie",
      "Reanimated",
    ],
    type: "Full-time",
    url: "https://www.astronauts.id/",
  },
  {
    id: 3,
    jobTitle: "Software Engineer",
    company: "The Edge Singapore & EdgeProp",
    dateRange: "April 2018 – November 2021",
    location: "Singapore (Remote)",
    description:
      "Built and maintained high-traffic real estate mobile apps and financial news portals serving Singapore and Southeast Asia.",
    achievements: [
      "Delivered interactive property maps, property valuation calculators, and real-time listings search.",
      "Engineered mobile news readers with offline article caching and push notification feeds.",
    ],
    technologies: [
      "React Native",
      "React",
      "Next.js",
      "JavaScript",
      "Firebase",
      "Crashlytics",
      "REST APIs",
    ],
    type: "Full-time",
    url: "https://www.edgeprop.sg",
  },
  {
    id: 4,
    jobTitle: "Software Engineer",
    company: "Nextg Travel",
    dateRange: "August 2016 – February 2018",
    location: "Surabaya, Indonesia",
    description:
      "Developed cross-platform mobile apps and web tools for online flight ticketing and hotel bookings.",
    achievements: [
      "Built intuitive flight search, seat selection, and automated e-ticket voucher generation.",
      "Integrated regional payment gateways and SMS/email confirmation triggers.",
    ],
    technologies: [
      "React Native",
      "React",
      "JavaScript",
      "PHP",
      "Laravel",
      "MySQL",
    ],
    type: "Full-time",
    url: "https://www.instagram.com/tour_nextgtravel/",
  },
];
