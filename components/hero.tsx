"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const FloatingDot = ({ delay, x, y }: { delay: number; x: number; y: number }) => (
    <motion.div
      animate={{
        y: [0, -20, 0],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        delay,
      }}
      className="absolute w-2 h-2 rounded-full bg-primary"
      style={{ left: `${x}%`, top: `${y}%` }}
    />
  )

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Floating accent dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <FloatingDot key={i} delay={i * 0.3} x={10 + i * 18} y={10 + (i % 2) * 40} />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className="inline-block mb-4 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
            ✨ Google Developer Groups On Campus
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-jakarta text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="text-primary">Build.</span> <span className="text-balance">Learn. Ship.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
        >
          Connect with developers, learn cutting-edge technologies, and build impactful projects together at Dar es
          Salaam University.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 group" asChild>
            <a href="#contact">
              Join the Chapter
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="px-8 bg-transparent" asChild>
            <a href="#events">See Events</a>
          </Button>
        </motion.div>

        {/* Stats Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-border"
        >
          <div>
            <p className="text-2xl md:text-3xl font-jakarta font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground mt-2">Active Members</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-jakarta font-bold text-primary">48+</p>
            <p className="text-sm text-muted-foreground mt-2">Events Hosted</p>
          </div>
          <div>
            <p className="text-2xl md:text-3xl font-jakarta font-bold text-primary">12+</p>
            <p className="text-sm text-muted-foreground mt-2">Partners</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
