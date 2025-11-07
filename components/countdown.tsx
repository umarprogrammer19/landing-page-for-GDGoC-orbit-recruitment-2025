"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CountdownProps {
  targetDate?: Date
}

export default function Countdown({ targetDate = new Date(Date.now() + 93 * 24 * 60 * 60 * 1000) }: CountdownProps) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const target = new Date(targetDate).getTime()
      const distance = target - now

      if (distance < 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      setTime({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) return null

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center">
      <div className="glass px-4 py-3 md:px-6 md:py-4 rounded-lg min-w-16 md:min-w-24">
        <motion.p
          key={value}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="font-jakarta font-bold text-2xl md:text-4xl text-primary"
        >
          {String(value).padStart(2, "0")}
        </motion.p>
      </div>
      <p className="text-sm md:text-base text-foreground/60 mt-2">{label}</p>
    </motion.div>
  )

  return (
    <div className="flex items-center justify-center gap-2 md:gap-4">
      <TimeUnit value={time.days} label="Days" />
      <span className="text-2xl md:text-3xl font-bold text-foreground/40">:</span>
      <TimeUnit value={time.hours} label="Hours" />
      <span className="text-2xl md:text-3xl font-bold text-foreground/40">:</span>
      <TimeUnit value={time.minutes} label="Minutes" />
      <span className="text-2xl md:text-3xl font-bold text-foreground/40">:</span>
      <TimeUnit value={time.seconds} label="Seconds" />
    </div>
  )
}
