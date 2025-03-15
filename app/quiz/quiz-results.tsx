"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, RefreshCw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Plant = {
  id: string
  name: string
  scientificName: string
  description: string
  careLevel: string
  light: string
  water: string
  image: string
  price: number
}

type QuizResultsProps = {
  answers: Record<string, any>
  onRestart: () => void
}

export default function QuizResults({ answers, onRestart }: QuizResultsProps) {
  // In a real app, this would be determined by an AI model based on the answers
  const recommendedPlants: Plant[] = [
    {
      id: "1",
      name: "Snake Plant",
      scientificName: "Sansevieria trifasciata",
      description: "One of the most tolerant houseplants that thrives in almost any condition. Perfect for beginners.",
      careLevel: "Easy",
      light: "Low to bright indirect",
      water: "Every 2-3 weeks",
      image: "/placeholder.svg?height=300&width=300",
      price: 19.99,
    },
    {
      id: "2",
      name: "ZZ Plant",
      scientificName: "Zamioculcas zamiifolia",
      description: "Extremely drought-tolerant and can handle low light conditions. Perfect for forgetful waterers.",
      careLevel: "Easy",
      light: "Low to bright indirect",
      water: "Every 2-3 weeks",
      image: "/placeholder.svg?height=300&width=300",
      price: 24.99,
    },
    {
      id: "3",
      name: "Pothos",
      scientificName: "Epipremnum aureum",
      description: "Fast-growing vine that's incredibly versatile and easy to propagate. Great for hanging baskets.",
      careLevel: "Easy",
      light: "Low to bright indirect",
      water: "Weekly",
      image: "/placeholder.svg?height=300&width=300",
      price: 18.99,
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4 text-green-800 dark:text-green-300">Your Perfect Plant Matches</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Based on your answers, we've found these plants that would thrive in your space.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {recommendedPlants.map((plant) => (
          <Card key={plant.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image src={plant.image || "/placeholder.svg"} alt={plant.name} fill className="object-cover" />
            </div>
            <CardHeader>
              <CardTitle>{plant.name}</CardTitle>
              <CardDescription className="italic">{plant.scientificName}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-300">{plant.description}</p>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded text-center">
                  <div className="font-semibold mb-1">Care Level</div>
                  <div>{plant.careLevel}</div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded text-center">
                  <div className="font-semibold mb-1">Light</div>
                  <div>{plant.light}</div>
                </div>
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded text-center">
                  <div className="font-semibold mb-1">Water</div>
                  <div>{plant.water}</div>
                </div>
              </div>
              <div className="pt-2">
                <span className="font-bold text-emerald-600 dark:text-emerald-400">${plant.price.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <Link href={`/products/${plant.id}`} className="flex items-center gap-2">
                  View Details <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center space-y-4">
        <p className="text-gray-600 dark:text-gray-300">Not quite what you're looking for?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" onClick={onRestart}>
            <RefreshCw className="mr-2 h-4 w-4" /> Retake Quiz
          </Button>
          <Button className="bg-emerald-600 hover:bg-emerald-700">
            <Link href="/products" className="flex items-center gap-2">
              Browse All Plants <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

