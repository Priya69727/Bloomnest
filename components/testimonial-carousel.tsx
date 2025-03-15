"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  location: string
  text: string
  rating: number
}

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    // In a real app, this would fetch from your API
    setTestimonials([
      {
        id: 1,
        name: "Priya Sharma",
        location: "Mumbai",
        text: "The self-watering pots from BloomNest have completely transformed my plant care routine. My plants are thriving and I don't have to worry about forgetting to water them!",
        rating: 5,
      },
      {
        id: 2,
        name: "Rahul Patel",
        location: "Bangalore",
        text: "I've been subscribed to the monthly plant box for 6 months now and it's been amazing. Each month brings a new surprise and the care instructions are so helpful.",
        rating: 5,
      },
      {
        id: 3,
        name: "Ananya Gupta",
        location: "Delhi",
        text: "The plant recommendation quiz suggested plants that perfectly match my lifestyle. I've never had much luck with plants before, but now my home is full of thriving greenery!",
        rating: 4,
      },
    ])
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  if (testimonials.length === 0) {
    return <div className="h-40 flex items-center justify-center">Loading testimonials...</div>
  }

  return (
    <div className="relative">
      <div className="flex justify-center">
        <Card className="w-full max-w-3xl bg-white dark:bg-gray-900 shadow-lg">
          <CardContent className="p-8">
            <div className="flex mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
              {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i + testimonials[currentIndex].rating} className="h-5 w-5 text-gray-300" />
              ))}
            </div>
            <p className="text-gray-700 dark:text-gray-300 italic mb-6">"{testimonials[currentIndex].text}"</p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-lg">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonials[currentIndex].name}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonials[currentIndex].location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-emerald-200 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

