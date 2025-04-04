"use client"

import { useEffect } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { t } = useTranslation()

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const menuItems = [
    { href: "#about", label: t("nav.about") },
    { href: "#services", label: t("nav.services") },
    { href: "#gallery", label: t("nav.gallery") },
    { href: "#testimonials", label: t("nav.testimonials") },
    { href: "#location", label: t("nav.location") },
  ]

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-white">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-xl font-semibold text-pink-400">Beauty Lash & Nail</h2>
        <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
          <X className="h-6 w-6" />
        </Button>
      </div>

      <nav className="flex-1 overflow-auto p-4">
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="block text-lg font-medium text-gray-800 transition-colors hover:text-pink-400"
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t p-4">
        <Button
          className="w-full bg-pink-400 text-white hover:bg-pink-500"
          onClick={() => {
            onClose()
            const bookingForm = document.getElementById("booking-form")
            if (bookingForm) {
              bookingForm.scrollIntoView({ behavior: "smooth" })
              // Focus the first input after scrolling
              setTimeout(() => {
                const firstInput = bookingForm.querySelector("input")
                if (firstInput) firstInput.focus()
              }, 500)
            }
          }}
        >
          {t("nav.bookNow")}
        </Button>
      </div>
    </div>
  )
}

