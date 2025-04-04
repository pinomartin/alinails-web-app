"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

interface ServiceProps {
  service: {
    title: string
    description: string
    price: string
    icon: string
  }
}

export default function ServiceCard({ service }: ServiceProps) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 text-center">
        <div className="mx-auto mb-2 text-4xl">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
      </CardHeader>
      <CardContent className="p-6">
        <p className="mb-4 text-gray-600">{service.description}</p>
        <p className="text-lg font-semibold text-pink-400">{service.price}</p>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 p-4">
        <Button className="w-full bg-pink-400 text-white hover:bg-pink-500">{t("services.bookNow")}</Button>
      </CardFooter>
    </Card>
  )
}

