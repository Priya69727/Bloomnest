import type { Metadata } from "next"
import PlantQuiz from "./plant-quiz"

export const metadata: Metadata = {
  title: "Plant Recommendation Quiz | BloomNest",
  description: "Take our AI-powered quiz to find the perfect plants for your lifestyle and experience level.",
}

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-800 dark:text-green-300">Find Your Perfect Plant Match</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Answer a few questions about your lifestyle and preferences, and our AI will recommend the best plants for
          you.
        </p>
      </div>

      <PlantQuiz />
    </div>
  )
}

