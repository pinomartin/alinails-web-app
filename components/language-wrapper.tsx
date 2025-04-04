"use client"

import type React from "react"

import { useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"

export default function LanguageWrapper({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  const { t } = useTranslation()

  // Update document metadata when language changes
  useEffect(() => {
    // Update document title
    document.title = t("meta.title")

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", t("meta.description"))
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute("content", t("meta.keywords"))
    }

    // Update HTML lang attribute
    document.documentElement.lang = language
  }, [language, t])

  return <>{children}</>
}

