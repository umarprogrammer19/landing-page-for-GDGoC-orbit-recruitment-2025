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
      <h3 className="font-jakarta text-2xl md:text-3xl font-bold mb-8 text-primary relative after:absolute after:left-0 after:bottom-[-8px] after:h-1 after:w-20 after:bg-primary after:rounded-full">{title}</h3>
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
            whileHover={{ y: -6, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            className="group relative p-8 rounded-2xl border border-border bg-card shadow-lg hover:border-primary/50 transition-all duration-300 overflow-hidden flex flex-col items-center justify-center text-center"
          >
            {/* Grayscale overlay that removes on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full">
              <Image
                src={sponsor.logo || "/placeholder-logo.png"}
                alt={sponsor.name}
                width={250}
                height={120}
                className="w-auto h-auto max-w-[80%] max-h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
              <p className="text-lg font-semibold text-muted-foreground mt-6 group-hover:text-foreground transition-colors duration-300">
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
    <section id="sponsors" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/10">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Valued Partners"
          title="Supported by Visionary Industry Leaders"
          description="We extend our deepest gratitude to our esteemed sponsors for their unwavering belief in our mission to empower the next generation of student developers."
        />

        {/* Sponsor Tiers */}
        <div className="mb-20 space-y-20">
          <SponsorTier title="Platinum Partners" sponsors={sponsors.platinum} columns={1} />
          <SponsorTier title="Gold Partners" sponsors={sponsors.gold} columns={2} />
          <SponsorTier title="Silver Partners" sponsors={sponsors.silver} columns={3} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 border border-border text-center shadow-xl"
        >
          <h3 className="font-jakarta text-3xl md:text-4xl font-bold text-foreground mb-4">Become a Visionary Sponsor</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with GDG DSU to amplify your brand presence, engage with 500+ enthusiastic developers, and profoundly contribute to nurturing the future of tech talent.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-3 text-base shadow-lg hover:shadow-xl transition-all duration-300">
            Sponsorship Inquiry
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
