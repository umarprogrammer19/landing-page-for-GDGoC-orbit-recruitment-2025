"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

const navItems = [
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <Link href="/" className="font-jakarta text-xl font-bold text-primary hover:opacity-80 transition-opacity">
              GDG DSU
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="rounded-lg p-2 hover:bg-muted transition-colors"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* CTA Button */}
            <Button asChild className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="#contact">Join the Chapter</a>
            </Button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" className="md:hidden">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-border md:hidden"
            >
              <div className="space-y-2 px-4 py-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                    whileHover={{ x: 4 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="#contact">Join the Chapter</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
