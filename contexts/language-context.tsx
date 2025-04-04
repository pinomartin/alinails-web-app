"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Initialize with browser language or default to English
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Check if there's a stored language preference
    const storedLanguage = localStorage.getItem("language") as Language
    if (storedLanguage && (storedLanguage === "en" || storedLanguage === "es")) {
      setLanguage(storedLanguage)
    } else {
      // Try to detect browser language
      const browserLanguage = navigator.language.split("-")[0]
      if (browserLanguage === "es") {
        setLanguage("es")
        localStorage.setItem("language", "es")
      } else {
        // Default to English for any other language
        setLanguage("en")
        localStorage.setItem("language", "en")
      }
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    // Update HTML lang attribute
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

