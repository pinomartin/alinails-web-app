"use client"

import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/hooks/use-translation"

interface ImageCarouselProps {
  images: string[] | StaticImageData[]
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t } = useTranslation()

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4">
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-lg bg-white">
        <div
          className="absolute h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="flex h-full">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative h-full w-full flex-shrink-0 flex items-center justify-center"
              >
                <div className="relative h-full w-full">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1} - Nail and lash work example`}
                    fill
                    style={{ objectFit: 'contain' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    priority={index === 0}
                    quality={100}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 h-10 w-10 -translate-y-1/2 transform rounded-full bg-white/80 text-gray-800 backdrop-blur-sm hover:bg-white"
        onClick={goToPrevious}
        aria-label={t("gallery.previous")}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 h-10 w-10 -translate-y-1/2 transform rounded-full bg-white/80 text-gray-800 backdrop-blur-sm hover:bg-white"
        onClick={goToNext}
        aria-label={t("gallery.next")}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2.5 w-2.5 rounded-full ${currentIndex === index ? "bg-pink-400" : "bg-white/60"}`}
            aria-label={`${t("gallery.goToSlide")} ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  )
}

