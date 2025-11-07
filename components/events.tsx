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
}

const modeColors: Record<string, string> = {
  "In-person": "bg-primary/10 text-primary",
  Online: "bg-accent/10 text-accent",
  Hybrid: "bg-green-500/10 text-green-600 dark:text-green-400",
}

export default function Events() {
  const [selectedTab, setSelectedTab] = useState<"upcoming" | "past">("upcoming")

  const events = selectedTab === "upcoming" ? upcoming : past

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <section id="events" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Events"
          title="Learn & Connect"
          description="Workshops, talks, and hackathons to advance your skills and meet fellow developers."
        />

        {/* Tabs */}
        <Tabs
          defaultValue="upcoming"
          onValueChange={(v) => setSelectedTab(v as "upcoming" | "past")}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-xs mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="past">Past</TabsTrigger>
          </TabsList>

          <TabsContent value="upcoming" className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key="upcoming"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {upcoming.length > 0 ? (
                  upcoming.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} formatDate={formatDate} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No upcoming events at the moment. Check back soon!</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key="past"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {past.length > 0 ? (
                  past.map((event, index) => (
                    <EventCard key={event.id} event={event} index={index} formatDate={formatDate} />
                  ))
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No past events yet.</p>
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
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ x: 4 }}
      className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-jakarta text-lg font-bold leading-tight">{event.title}</h3>
              {event.description && <p className="text-sm text-muted-foreground mt-2">{event.description}</p>}
            </div>
            <Badge className={modeColors[event.mode] || "bg-muted text-foreground"}>{event.mode}</Badge>
          </div>

          {/* Meta Info */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {formatDate(event.date)}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              {event.location}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {event.tags.map((tag) => (
              <Badge
                key={tag}
                className={`${tagColors[tag] || "bg-muted text-foreground"} text-xs`}
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/80">
            <a href={event.link} className="flex items-center gap-2">
              Details
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
