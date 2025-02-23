"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useRef, useEffect } from "react"

const images: string[] = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
  "/images/image4.jpg",
  "/images/image5.jpg",
  "/images/image6.jpg",
]

const ScrollCustom = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        scrollContainer.scrollLeft += e.deltaY
      }
      scrollContainer.addEventListener("wheel", handleWheel, { passive: false })
      return () => scrollContainer.removeEventListener("wheel", handleWheel)
    }
  }, [])

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto space-x-4 p-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 rounded-md border"
      >
        {images.map((src: string, index: number) => (
          <Card key={index} className="w-[150px] flex-shrink-0">
            <CardContent className="p-2">
              <img
                src={src || "/placeholder.svg"}
                alt={`Image ${index + 1}`}
                width={150}
                height={150}
                className="rounded-md object-cover"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ScrollCustom
