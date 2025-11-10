"use client"

import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Team from "@/components/team"
import Events from "@/components/events"
import Sponsors from "@/components/sponsors"
import Footer from "@/components/footer"
import { useTheme } from "next-themes"

export default function Home() {
  const { theme, setTheme } = useTheme()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar isDark={theme === 'dark'} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
      <Hero />
      <About />
      <Team />
      <Events />
      <Sponsors />
      <Footer />
    </main>
  )
}
