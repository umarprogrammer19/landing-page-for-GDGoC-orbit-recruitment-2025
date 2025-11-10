"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import SectionHeader from "@/components/section-header"
import { Button } from "@/components/ui/button"
import { sponsors } from "@/data/sponsors"

interface TierProps {
  title: string
  sponsors: typeof sponsors.platinum
  columns: number
}

function SponsorTier({ title, sponsors: tierSponsors, columns }: TierProps) {
  return (
    <div>
      <h3 className="font-jakarta text-3xl md:text-4xl font-extrabold mb-10 text-foreground relative after:absolute after:left-0 after:-bottom-3 after:h-1.5 after:w-24 after:bg-primary after:rounded-full after:shadow-md">
        {title}
      </h3>
      <div
        className={`grid gap-8 mb-16 ${
          columns === 1
            ? "grid-cols-1"
            : columns === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }`}
      >
        {tierSponsors.map((sponsor, index) => (
          <motion.a
            key={sponsor.id}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)", scale: 1.02 }}
            className="group relative p-10 rounded-3xl border border-border bg-card shadow-lg hover:border-primary/60 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center"
          >
            {/* Dynamic background glow on hover */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <Image
                src={sponsor.logo || "/placeholder-logo.png"}
                alt={sponsor.name}
                width={280}
                height={140}
                className="w-auto h-auto max-w-[85%] max-h-28 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
              <p className="text-xl font-semibold text-muted-foreground mt-8 group-hover:text-foreground transition-colors duration-300">
                {sponsor.name}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background to-primary/5">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Valued Partners"
          title="Supported by Visionary Industry Leaders"
          description="We extend our deepest gratitude to our esteemed sponsors for their unwavering belief in our mission to empower the next generation of student developers."
        />

        {/* Sponsor Tiers */}
        <div className="mb-24 space-y-24">
          <SponsorTier title="Platinum Partners" sponsors={sponsors.platinum} columns={1} />
          <SponsorTier title="Gold Partners" sponsors={sponsors.gold} columns={2} />
          <SponsorTier title="Silver Partners" sponsors={sponsors.silver} columns={3} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="p-12 md:p-20 rounded-4xl bg-linear-to-br from-primary/15 via-accent/15 to-primary/15 border border-primary/30 text-center shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 z-0 opacity-10">
            <svg className="w-full h-full" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <pattern id="pattern-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 L 0 10" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#pattern-grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h3 className="font-jakarta text-4xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight drop-shadow-lg">
              Become a Visionary Sponsor
            </h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with GDG DSU to amplify your brand presence, engage with over 500 enthusiastic developers, and profoundly contribute to nurturing the future of tech talent.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Sponsorship Inquiry
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
