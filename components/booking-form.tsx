"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, Clock } from "lucide-react"

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  date: Date | undefined
  time: string
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: undefined,
  time: "",
}
export default function BookingForm() {
  const { t } = useTranslation()
  const { language } = useLanguage()
  const [formData, setFormData] = useState<FormData>(initialFormData)

  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    { value: "manicure", label: t("services.items.manicure.title") },
    { value: "gelPolish", label: t("services.items.gelPolish.title") },
    { value: "acrylicNails", label: t("services.items.acrylicNails.title") },
    { value: "eyelashExtensions", label: t("services.items.eyelashExtensions.title") },
    { value: "lashLiftTint", label: t("services.items.lashLiftTint.title") },
    { value: "nailArt", label: t("services.items.nailArt.title") },
  ]

  const timeSlots = [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
  ]

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {}

    if (!formData.name.trim()) newErrors.name = "required"
    if (!formData.phone.trim()) newErrors.phone = "required"
    else if (!/^\+?[0-9\s\-()]{8,}$/.test(formData.phone)) newErrors.phone = "invalid"

    if (!formData.email.trim()) newErrors.email = "required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "invalid"

    if (!formData.service) newErrors.service = "required"
    if (!formData.date) newErrors.date = "required"
    if (!formData.time) newErrors.time = "required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Format the date according to the locale
    const formattedDate = formData.date
      ? format(formData.date, "PPP", { locale: language === "es" ? es : undefined })
      : ""

    // Create WhatsApp message
    const message =
      language === "es"
        ? `Hola, estoy interesado en tus servicios:\n\n*Nombre:* ${formData.name}\n*Teléfono:* ${formData.phone}\n*Email:* ${formData.email}\n*Servicio:* ${services.find((s) => s.value === formData.service)?.label}\n*Fecha:* ${formattedDate}\n*Hora:* ${formData.time}`
        : `Hello, I'm interested in your services:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Service:* ${services.find((s) => s.value === formData.service)?.label}\n*Date:* ${formattedDate}\n*Time:* ${formData.time}`

    // Encode the message for WhatsApp
    const encodedMessage = encodeURIComponent(message)

    // Open WhatsApp with the pre-filled message
    window.open(`https://wa.me/34655719145?text=${encodedMessage}`, "_blank")

    setIsSubmitting(false)
    setFormData(initialFormData)
  }

  return (
    <form id="booking-form" onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">{t("form.name")}</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && <p className="text-xs text-red-500">{t(`form.errors.${errors.name}`)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">{t("form.phone")}</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={errors.phone ? "border-red-500" : ""}
        />
        {errors.phone && <p className="text-xs text-red-500">{t(`form.errors.${errors.phone}`)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{t("form.email")}</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && <p className="text-xs text-red-500">{t(`form.errors.${errors.email}`)}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{t("form.service")}</Label>
        <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
          <SelectTrigger className={errors.service ? "border-red-500" : ""}>
            <SelectValue placeholder={t("form.selectService")} />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.value} value={service.value}>
                {service.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className="text-xs text-red-500">{t(`form.errors.${errors.service}`)}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label>{t("form.date")}</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start text-left font-normal ${errors.date ? "border-red-500" : ""}`}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {formData.date ? (
                  format(formData.date, "PPP", { locale: language === "es" ? es : undefined })
                ) : (
                  <span>{t("form.selectDate")}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={formData.date}
                onSelect={(date) => handleChange("date", date)}
                disabled={(date) => {
                  // Disable past dates and Sundays
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  return date < today || date.getDay() === 0
                }}
                locale={language === "es" ? es : undefined}
              />
            </PopoverContent>
          </Popover>
          {errors.date && <p className="text-xs text-red-500">{t(`form.errors.${errors.date}`)}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="time">{t("form.time")}</Label>
          <Select value={formData.time} onValueChange={(value) => handleChange("time", value)}>
            <SelectTrigger className={errors.time ? "border-red-500" : ""}>
              <SelectValue placeholder={t("form.selectTime")}>
                {formData.time && (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {formData.time}
                  </div>
                )}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>
                  {time}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.time && <p className="text-xs text-red-500">{t(`form.errors.${errors.time}`)}</p>}
        </div>
      </div>

      <Button type="submit" className="w-full bg-pink-400 text-white hover:bg-pink-500" disabled={isSubmitting}>
        {isSubmitting ? t("form.submitting") : t("form.submit")}
      </Button>
    </form>
  )
}

