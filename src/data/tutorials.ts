export interface Tutorial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  type: string;
  platform: string;
  url: string;
  duration: string;
  views: string;
  publishedDate: string;
  tags: string[];
  featured: boolean;
  readTime: string;
}

export const tutorialsData: Tutorial[] = [
  {
    id: 1,
    title: "Building a React Native App for BWA - Find Work Space",
    description: "A full-featured work space app built with React Native. Features include work space search, work space details, and work space news. This app is built for BWA, a work space app in Indonesia.",
    thumbnail: "/images/thumbnail-tutorials-1.png",
    type: "video",
    platform: "BuildWithAngga",
    url: "https://buildwithangga.com/kelas/complete-react-native-beginner-to-pro-bikin-aplikasi-cari-kantor?main_leads=sedangpromo",
    duration: "3:45:00",
    views: "270",
    publishedDate: "2023-10-01",
    tags: ["React Native", "Mobile Development", "JavaScript", "BWA"],
    featured: true,
    readTime: "",
  },
];
