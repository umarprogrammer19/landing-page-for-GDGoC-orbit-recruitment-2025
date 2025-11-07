export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  group: "Core" | "Leads"
  socials: {
    linkedin?: string
    twitter?: string
    github?: string
  }
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Ayesha Khan",
    role: "Chapter Lead",
    image: "/professional-woman-portrait.png",
    group: "Core",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "2",
    name: "Ali Raza",
    role: "Tech Lead",
    image: "/professional-man-portrait.png",
    group: "Leads",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: "3",
    name: "Sara Ahmed",
    role: "Events Lead",
    image: "/professional-woman-portrait.png",
    group: "Leads",
    socials: {
      linkedin: "#",
    },
  },
  {
    id: "4",
    name: "Hassan Mohamed",
    role: "Community Manager",
    image: "/professional-man-portrait.png",
    group: "Core",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: "5",
    name: "Zainab Ali",
    role: "Design Lead",
    image: "/professional-woman-portrait.png",
    group: "Leads",
    socials: {
      linkedin: "#",
    },
  },
  {
    id: "6",
    name: "Omar Hassan",
    role: "Developer Advocate",
    image: "/professional-man-portrait.png",
    group: "Core",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
]
