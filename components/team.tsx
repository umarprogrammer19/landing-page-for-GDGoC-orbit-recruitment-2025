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
    <section id="team" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Our Team"
          title="Meet the Leaders"
          description="Passionate developers and organizers driving innovation and community at GDG DSU."
        />

        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Team Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all overflow-hidden"
              >
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                <div className="relative z-10">
                  {/* Avatar */}
                  <div className="mb-4 overflow-hidden rounded-lg w-full h-48 bg-muted">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <h3 className="font-jakarta text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-4">{member.role}</p>

                  {/* Socials */}
                  <div className="flex gap-3">
                    {Object.entries(member.socials).map(([platform, url]) => {
                      if (!url) return null
                      const Icon = socialIcons[platform as keyof typeof socialIcons]
                      return (
                        <motion.a
                          key={platform}
                          href={url}
                          aria-label={platform}
                          className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Icon className="h-4 w-4" />
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
