import type React from "react"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" })

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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
