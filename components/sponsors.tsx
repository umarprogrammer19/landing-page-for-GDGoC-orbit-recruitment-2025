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
      <h3 className="font-jakarta text-xl font-bold mb-6 text-primary">{title}</h3>
      <div
        className={`grid gap-6 mb-12 ${
          columns === 1
            ? "grid-cols-1"
            : columns === 2
              ? "grid-cols-1 md:grid-cols-2"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {tierSponsors.map((sponsor, index) => (
          <motion.a
            key={sponsor.id}
            href={sponsor.url}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all overflow-hidden"
          >
            {/* Grayscale overlay that removes on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none" />

            <div className="relative z-10 h-32 flex items-center justify-center">
              <Image
                src={sponsor.logo || "/placeholder.svg"}
                alt={sponsor.name}
                width={200}
                height={100}
                className="w-auto h-auto max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <p className="text-center text-sm font-medium text-muted-foreground mt-4 group-hover:text-foreground transition-colors">
              {sponsor.name}
            </p>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Partners"
          title="Supported by Industry Leaders"
          description="We thank our sponsors for believing in our mission to empower student developers."
        />

        {/* Sponsor Tiers */}
        <div className="mb-16 space-y-16">
          <SponsorTier title="Platinum Partners" sponsors={sponsors.platinum} columns={1} />
          <SponsorTier title="Gold Partners" sponsors={sponsors.gold} columns={2} />
          <SponsorTier title="Silver Partners" sponsors={sponsors.silver} columns={3} />
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border text-center"
        >
          <h3 className="font-jakarta text-2xl font-bold mb-3">Become a Sponsor</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Partner with us to reach 500+ engaged developers and support the next generation of tech talent.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Sponsorship Inquiry</Button>
        </motion.div>
      </div>
    </section>
  )
}
