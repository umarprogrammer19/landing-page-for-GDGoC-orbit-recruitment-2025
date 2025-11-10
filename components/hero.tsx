"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

const Blob = ({ className }: { className?: string }) => (
  <div className={`absolute rounded-full blur-3xl ${className}`} />
)

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0 bg-gradient-to-br from-primary/5 to-accent/5">
      {/* Dynamic background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Blob className="w-[450px] h-[450px] top-[8%] left-[10%] bg-blue-400/20 animate-blob-pulse" />
        <Blob className="w-[400px] h-[400px] bottom-[15%] right-[8%] bg-purple-400/20 animate-blob-pulse-delay" />
        <Blob className="w-[550px] h-[550px] top-[35%] left-[45%] -translate-x-1/2 -translate-y-1/2 bg-pink-400/20 animate-blob-pulse-medium" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-block mb-6 px-6 py-2 bg-primary/15 border border-primary/30 rounded-full text-md font-semibold text-primary shadow-sm tracking-wide animate-fade-in-up">
            ✨ Google Developer Groups On Campus
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-jakarta text-6xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight text-foreground drop-shadow-md"
        >
          <span className="text-primary drop-shadow-lg">Build.</span> <span className="text-balance">Learn. Ship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto text-balance leading-relaxed drop-shadow-sm"
        >
          Connect with passionate developers, master cutting-edge technologies, and build impactful projects together at Dar es Salaam University.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-lg group shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
            <a href="#contact">
              Join the Chapter
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-10 py-3 text-lg bg-transparent border-2 border-border hover:border-primary/50 text-foreground hover:text-primary transition-colors duration-300 group ring-2 ring-transparent hover:ring-primary/50" asChild>
            <a href="#events">See Events</a>
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-10 pt-16 border-t border-border/70 bg-gradient-to-br from-card/70 to-card/90 backdrop-blur-sm rounded-2xl p-10 shadow-2xl"
        >
          <div className="flex flex-col items-center">
            <p className="text-5xl font-jakarta font-extrabold text-primary mb-3 text-shadow-md">500+</p>
            <p className="text-lg text-muted-foreground font-medium">Active Members</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl font-jakarta font-extrabold text-primary mb-3 text-shadow-md">48+</p>
            <p className="text-lg text-muted-foreground font-medium">Events Hosted</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl font-jakarta font-extrabold text-primary mb-3 text-shadow-md">12+</p>
            <p className="text-lg text-muted-foreground font-medium">Partners</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
