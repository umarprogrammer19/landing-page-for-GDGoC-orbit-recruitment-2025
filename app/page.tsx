"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Team from "@/components/team"
import Events from "@/components/events"
import Sponsors from "@/components/sponsors"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)

    // Apply theme
    if (prefersDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const root = document.documentElement
    const newIsDark = !isDark

    if (newIsDark) {
      root.classList.add("dark")
    } else {
      root.classList.remove("dark")
    }

    setIsDark(newIsDark)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Team />
      <Events />
      <Sponsors />
      <Footer />
    </main>
  )
}
