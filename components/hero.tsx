"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const FloatingOrb = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: string }) => (
    <motion.div
      animate={{
        y: [0, -30, 0],
        x: [0, 20, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: 8 + delay,
        repeat: Number.POSITIVE_INFINITY,
        delay,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-3xl ${size}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        background: "linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)",
      }}
    />
  )

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(79,172,254,0.2),rgba(255,255,255,0))]" />
      </div>

      {/* Animated floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb delay={0} x={10} y={20} size="w-96 h-96" />
        <FloatingOrb delay={2} x={80} y={60} size="w-72 h-72" />
        <FloatingOrb delay={4} x={50} y={80} size="w-96 h-96" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255, 0, 0, .05) 25%, rgba(255, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, .05) 75%, rgba(255, 0, 0, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 0, .05) 25%, rgba(255, 0, 0, .05) 26%, transparent 27%, transparent 74%, rgba(255, 0, 0, .05) 75%, rgba(255, 0, 0, .05) 76%, transparent 77%, transparent)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-block"
        >
          <div className="glass px-4 py-2 rounded-full text-sm font-medium">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="gradient-text">Welcome to GDG On Campus DSU</span>
            </span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-jakarta text-6xl md:text-8xl font-bold tracking-tight mb-6 leading-tight"
        >
          <motion.span
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="gradient-text"
          >
            Build.
          </motion.span>{" "}
          Learn.{" "}
          <motion.span
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="gradient-text"
          >
            Ship.
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Join Pakistan's premier student developer community. Learn cutting-edge tech, build impactful projects, and
          connect with fellow innovators.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="btn-glow bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href="#contact">
              Join the Chapter
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="glass px-8 py-6 text-lg backdrop-blur-xl border-white/20 hover:bg-white/10 bg-transparent"
            asChild
          >
            <a href="#events">Explore Events</a>
          </Button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-border/30"
        >
          {[
            { label: "Active Members", value: "500+" },
            { label: "Events Hosted", value: "48+" },
            { label: "Tech Partners", value: "12+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="group"
            >
              <p className="text-3xl md:text-4xl font-jakarta font-bold gradient-text group-hover:scale-110 transition-transform">
                {stat.value}
              </p>
              <p className="text-sm text-foreground/60 mt-2 group-hover:text-foreground/80 transition-colors">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-center justify-center">
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-1 h-2 bg-foreground/30 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  )
}
