"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Linkedin, Github, Twitter } from "lucide-react"
import SectionHeader from "@/components/section-header"
import { team } from "@/data/team"

type FilterType = "All" | "Core" | "Leads"

const filters: FilterType[] = ["All", "Core", "Leads"]

export default function Team() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All")

  const filteredTeam = activeFilter === "All" ? team : team.filter((m) => m.group === activeFilter)

  const socialIcons = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
  }

  return (
    <section id="team" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Team"
          title="Meet the Passionate Minds"
          description="Dedicated individuals driving the GDG DSU community forward with their expertise and enthusiasm."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
              whileHover={{ scale: 1.05, boxShadow: activeFilter === filter ? "0 8px 15px rgba(var(--color-primary)/0.3)" : "0 4px 10px rgba(0,0,0,0.08)" }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Team Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode="wait">
            {filteredTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
                className="group relative flex flex-col items-center p-8 rounded-2xl border border-border bg-card shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center">
                  {/* Avatar */}
                  <div className="mb-6 overflow-hidden rounded-full w-32 h-32 md:w-40 md:h-40 bg-muted border-4 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-md">
                    <Image
                      src={member.image || "/placeholder-user.jpg"}
                      alt={member.name}
                      width={160}
                      height={160}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-jakarta text-xl md:text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-5">{member.role}</p>

                  {/* Socials */}
                  <div className="flex gap-4">
                    {Object.entries(member.socials).map(([platform, url]) => {
                      if (!url) return null
                      const Icon = socialIcons[platform as keyof typeof socialIcons]
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={platform}
                          className="p-3 rounded-full bg-muted/70 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Icon className="h-5 w-5" />
                        </motion.a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
