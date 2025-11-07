export interface Event {
  id: string
  title: string
  date: string
  mode: "In-person" | "Online" | "Hybrid"
  location: string
  tags: string[]
  description?: string
  link: string
}

export const upcoming: Event[] = [
  {
    id: "ev1",
    title: "Intro to GenAI & Prompting",
    date: "2025-11-20",
    mode: "In-person",
    location: "DSU Auditorium",
    tags: ["Workshop"],
    description: "Learn the fundamentals of generative AI and master prompt engineering",
    link: "#",
  },
  {
    id: "ev2",
    title: "Firebase for Startups",
    date: "2025-12-05",
    mode: "Online",
    location: "Google Meet",
    tags: ["Talk"],
    description: "Build scalable backends with Firebase in 60 minutes",
    link: "#",
  },
  {
    id: "ev3",
    title: "Web Performance Masterclass",
    date: "2025-12-15",
    mode: "Hybrid",
    location: "DSU Lab + Online",
    tags: ["Workshop"],
    description: "Optimize your web apps for speed and user experience",
    link: "#",
  },
]

export const past: Event[] = [
  {
    id: "ev4",
    title: "Flutter Bootcamp",
    date: "2025-10-10",
    mode: "In-person",
    location: "DSU Lab 2",
    tags: ["Bootcamp"],
    description: "Two-day intensive Flutter development workshop",
    link: "#",
  },
  {
    id: "ev5",
    title: "Cloud Computing Essentials",
    date: "2025-09-28",
    mode: "Online",
    location: "Google Meet",
    tags: ["Talk"],
    description: "Understanding cloud infrastructure and deployment",
    link: "#",
  },
]
