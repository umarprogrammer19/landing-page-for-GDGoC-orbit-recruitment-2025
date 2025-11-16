// For Sponsors
export interface Sponsor {
  id: string
  name: string
  logo: string
  url: string
}

export const sponsors = {
  platinum: [
    {
      id: "plat1",
      name: "TechCorp",
      logo: "/tech-company-logo.jpg",
      url: "#",
    },
  ],
  gold: [
    {
      id: "gold1",
      name: "CloudNine",
      logo: "/cloud-services-logo.jpg",
      url: "#",
    },
    {
      id: "gold2",
      name: "DevFlow",
      logo: "/development-tools-logo.jpg",
      url: "#",
    },
  ],
  silver: [
    {
      id: "silver1",
      name: "DevTools",
      logo: "/software-tools-logo.jpg",
      url: "#",
    },
    {
      id: "silver2",
      name: "CodeHub",
      logo: "/code-platform-logo.jpg",
      url: "#",
    },
  ],
}
