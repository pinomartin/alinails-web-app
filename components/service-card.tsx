"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col">
      <CardHeader className="bg-gradient-to-r from-pink-100 to-blue-100 p-6 text-center flex-1 flex-col justify-center">
        <div className="mx-auto mb-2 text-4xl">{service.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
      </CardHeader>
      <CardContent className="p-4 flex-1 flex flex-col justify-between">
        <p className="mb-4 text-gray-600">{service.description}</p>
        <p className="text-lg font-semibold text-pink-400 mt-auto">{service.price}</p>
      </CardContent>
    </Card>
  )
}

