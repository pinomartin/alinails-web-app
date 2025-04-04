"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/hooks/use-translation"

interface TestimonialProps {
  testimonial: {
    name: string
    text: string
    rating: number
    image: string
    key: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  const { t } = useTranslation()

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="mb-4 flex items-center gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-full">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={`${t(`testimonials.items.${testimonial.key}.name`)} - Happy client`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-800">{t(`testimonials.items.${testimonial.key}.name`)}</h4>
            <p className="text-xs text-gray-500">{t(`testimonials.items.${testimonial.key}.profession`)}</p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill={i < testimonial.rating ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600">{t(`testimonials.items.${testimonial.key}.text`)}</p>
      </CardContent>
    </Card>
  )
}

