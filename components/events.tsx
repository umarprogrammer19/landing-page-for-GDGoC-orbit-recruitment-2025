"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, ArrowRight } from "lucide-react"
import SectionHeader from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { upcoming, past } from "@/data/events"

const tagColors: Record<string, string> = {
  Workshop: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Talk: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Bootcamp: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Hackathon: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Seminar: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
}

const modeColors: Record<string, string> = {
  "In-person": "bg-primary/15 text-primary border border-primary/20",
  Online: "bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/20",
  Hybrid: "bg-green-500/15 text-green-600 dark:text-green-400 border border-green-500/20",
}

export default function Events() {
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "past">("upcoming")

  const events = selectedTab === "upcoming" ? upcoming : past

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" }
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", options)
  }

  return (
    <section id="events" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/10 to-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Events"
          title="Innovate, Learn & Connect"
          description="Dive into a diverse range of workshops, tech talks, and hackathons designed to elevate your skills and expand your network."
        />

        {/* Tabs */}
        <Tabs
          defaultValue="upcoming"
          onValueChange={(v) => setSelectedTab(v as "upcoming" | "past")}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 p-1 h-auto rounded-xl bg-muted border border-border mb-16 shadow-inner">
            <TabsTrigger
              value="upcoming"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border data-[state=active]:font-semibold rounded-lg text-base py-2 transition-all"
            >
              Upcoming Events
            </TabsTrigger>
            <TabsTrigger
              value="past"
              className="data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-md data-[state=active]:border data-[state=active]:border-border data-[state=active]:font-semibold rounded-lg text-base py-2 transition-all"
            >
              Past Events
            </TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key="upcoming"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {upcoming.length > 0 ? (
                  upcoming.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} formatDate={formatDate} />
                  ))
                ) : (
                  <div className="text-center py-20 bg-card rounded-xl border border-border shadow-sm">
                    <p className="text-lg text-muted-foreground font-medium">No exciting upcoming events just yet. Stay tuned!</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="past" className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key="past"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {past.length > 0 ? (
                  past.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} formatDate={formatDate} />
                  ))
                ) : (
                  <div className="text-center py-20 bg-card rounded-xl border border-border shadow-sm">
                    <p className="text-lg text-muted-foreground font-medium">No past events to display.</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface EventCardProps {
  event: (typeof upcoming)[0]
  index: number
  formatDate: (date: string) => string
}

function EventCard({ event, index, formatDate }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.08)" }}
      className="group relative p-7 rounded-2xl border border-border bg-card shadow-md hover:border-primary/50 transition-all duration-300 overflow-hidden"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 radial-gradient from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Content */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-jakarta text-xl md:text-2xl font-bold leading-tight text-foreground">{event.title}</h3>
              {event.description && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{event.description}</p>}
            </div>
            <Badge className={`px-3 py-1 text-xs font-semibold rounded-full ${modeColors[event.mode] || ""}`}>{event.mode}</Badge>
          </div>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row gap-x-6 gap-y-2 pt-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              {formatDate(event.date)}
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {event.location}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-3">
            {event.tags.map((tag) => (
              <Badge
                key={tag}
                className={`px-3 py-1 text-xs font-medium rounded-full ${tagColors[tag] || "bg-muted text-foreground"}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 mt-4 md:mt-0">
          <Button variant="outline" size="lg" asChild className="group border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              View Details
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
