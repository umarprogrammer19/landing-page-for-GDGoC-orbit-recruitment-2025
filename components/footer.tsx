"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Github, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/company/gdgdsu/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/gdgdsu", label: "Twitter" },
  { icon: Github, href: "https://github.com/gdgdsu", label: "GitHub" },
  { icon: Mail, href: "mailto:hello@gdgdsu.com", label: "Email" },
]

const footerLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Team", href: "#team" },
  { label: "Events", href: "#events" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Contact Us", href: "#contact" },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contact" className="border-t border-border bg-gradient-to-b from-background to-muted/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-jakarta text-2xl font-bold text-primary mb-4">GDG DSU</h3>
            <p className="text-md text-muted-foreground max-w-xs leading-relaxed">
              Empowering student developers through community, hands-on learning, and real-world impact at Dar es Salaam University.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-jakarta text-lg font-semibold mb-5 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.slice(0, 3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-md text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* More Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-jakarta text-lg font-semibold mb-5 text-foreground">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.slice(3).map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-md text-muted-foreground hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://gdg.community.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  GDG Community
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="font-jakarta text-lg font-semibold mb-5 text-foreground">Connect With Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted/70 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider and Copyright */}
        <div className="border-t border-border pt-10 md:pt-14">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground"
          >
            <p className="text-center md:text-left">© {currentYear} GDG On Campus – DSU. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
              <a href="#" className="hover:text-foreground transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
