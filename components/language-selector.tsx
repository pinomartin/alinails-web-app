"use client"

import { useLanguage } from "@/contexts/language-context"
import { useTranslation } from "@/hooks/use-translation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Image from "next/image"

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const { t } = useTranslation()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label="Select language">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`flex items-center gap-2 ${language === "en" ? "bg-pink-50 font-medium" : ""}`}
        >
          <div className="relative h-5 w-5 overflow-hidden rounded-full">
            <span className="absolute inset-0 flex items-center justify-center text-[8px]">🇺🇸</span>
          </div>
          <span>{t("language.en")}</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("es")}
          className={`flex items-center gap-2 ${language === "es" ? "bg-pink-50 font-medium" : ""}`}
        >
          <div className="relative h-5 w-5 overflow-hidden rounded-full">
            <span className="absolute inset-0 flex items-center justify-center text-[8px]">🇪🇸</span>
          </div>
          <span>{t("language.es")}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

