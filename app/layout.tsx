import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "GDG On Campus – DSU",
  description: "Build. Learn. Ship — with Google Developer Groups On Campus at Dar es Salaam University",
  openGraph: {
    title: "GDG On Campus – DSU",
    description: "Build. Learn. Ship — with Google Developer Groups On Campus",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDG On Campus – DSU",
    description: "Build. Learn. Ship — Community, Learning, and Impact",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
