import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AliNails | Premium Nail and Eyelash Services",
  description: "Premium nail and eyelash extension services tailored to enhance your natural beauty",
  keywords: "nail salon, eyelash extensions, beauty salon, manicure, pedicure, gel nails, acrylic nails",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beautylashandnail.com",
    title: "AliNails | Premium Nail and Eyelash Services",
    description: "Premium nail and eyelash extension services tailored to enhance your natural beauty",
    siteName: "AliNails",
  },
  twitter: {
    card: "summary_large_image",
    title: "AliNails | Premium Nail and Eyelash Services",
    description: "Premium nail and eyelash extension services tailored to enhance your natural beauty",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'