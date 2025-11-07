"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, TrendingUp } from "lucide-react"
import SectionHeader from "@/components/section-header"
import { useEffect, useState } from "react"

interface CounterProps {
  start: number
  end: number
  duration: number
  suffix?: string
}

function CountUp({ start, end, duration, suffix = "" }: CounterProps) {
  const [value, setValue] = useState(start)

  useEffect(() => {
    const startTime = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)
      setValue(Math.floor(start + (end - start) * progress))

      if (progress === 1) {
        clearInterval(interval)
      }
    }, 16) // ~60fps

    return () => clearInterval(interval)
  }, [start, end, duration])

  return (
    <span>
      {value}
      {suffix}
    </span>
  )
}

const highlights = [
  {
    icon: Users,
    title: "Community",
    description: "Join 500+ developers passionate about learning and building together",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Access hands-on workshops, talks, and mentorship from industry experts",
  },
  {
    icon: TrendingUp,
    title: "Impact",
    description: "Build real-world projects and create meaningful impact in tech",
  },
]

export default function About() {
  const [isInView, setIsInView] = useState(false)

  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About us"
          title="Empower the Next Generation of Developers"
          description="GDG On Campus DSU is a community-driven initiative fostering innovation, learning, and collaboration among student developers."
        />

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-jakarta text-xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-muted-foreground">{highlight.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          onViewportEnter={() => setIsInView(true)}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 sm:gap-8 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-border"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-jakarta font-bold text-primary mb-2">
              {isInView ? <CountUp start={0} end={500} duration={2} suffix="+" /> : "500+"}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">Active Members</p>
          </div>
          <div className="text-center border-l border-r border-border">
            <p className="text-3xl md:text-4xl font-jakarta font-bold text-primary mb-2">
              {isInView ? <CountUp start={0} end={48} duration={2} suffix="+" /> : "48+"}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">Events Hosted</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-jakarta font-bold text-primary mb-2">
              {isInView ? <CountUp start={0} end={12} duration={2} suffix="+" /> : "12+"}
            </p>
            <p className="text-sm md:text-base text-muted-foreground">Corporate Partners</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
