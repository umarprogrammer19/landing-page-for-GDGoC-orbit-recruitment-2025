"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12 space-y-4">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="text-sm font-medium uppercase tracking-widest text-primary"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
        viewport={{ once: true }}
        className="font-jakarta text-4xl font-bold tracking-tight md:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground md:text-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
