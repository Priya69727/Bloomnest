"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Sun, Home, Droplets, Clock, TreesIcon as Plant } from "lucide-react"
import QuizResults from "./quiz-results"

type Question = {
  id: string
  question: string
  description?: string
  type: "radio" | "slider"
  icon: React.ReactNode
  options?: {
    value: string
    label: string
    description?: string
  }[]
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  valueLabel?: (value: number) => string
}

const questions: Question[] = [
  {
    id: "light",
    question: "How much natural light does your space receive?",
    description: "This helps us recommend plants that will thrive in your lighting conditions.",
    type: "radio",
    icon: <Sun className="h-6 w-6 text-emerald-600" />,
    options: [
      {
        value: "low",
        label: "Low Light",
        description: "No direct sunlight, away from windows or north-facing windows",
      },
      {
        value: "medium",
        label: "Medium Light",
        description: "Indirect sunlight, east or west-facing windows",
      },
      {
        value: "bright",
        label: "Bright Light",
        description: "Lots of indirect sunlight, south-facing windows",
      },
      {
        value: "direct",
        label: "Direct Sunlight",
        description: "Several hours of direct sunlight daily",
      },
    ],
  },
  {
    id: "space",
    question: "What type of space are you looking to add plants to?",
    type: "radio",
    icon: <Home className="h-6 w-6 text-emerald-600" />,
    options: [
      {
        value: "small",
        label: "Small Space",
        description: "Apartment, desk, or small shelf",
      },
      {
        value: "medium",
        label: "Medium Space",
        description: "Room corner or medium-sized table",
      },
      {
        value: "large",
        label: "Large Space",
        description: "Floor space for larger plants",
      },
      {
        value: "outdoor",
        label: "Outdoor Space",
        description: "Balcony, patio, or garden",
      },
    ],
  },
  {
    id: "watering",
    question: "How often can you water your plants?",
    type: "radio",
    icon: <Droplets className="h-6 w-6 text-emerald-600" />,
    options: [
      {
        value: "rarely",
        label: "Rarely",
        description: "Once every 2-3 weeks",
      },
      {
        value: "sometimes",
        label: "Sometimes",
        description: "Once a week",
      },
      {
        value: "regularly",
        label: "Regularly",
        description: "2-3 times a week",
      },
      {
        value: "daily",
        label: "Daily",
        description: "I can water daily if needed",
      },
    ],
  },
  {
    id: "experience",
    question: "What's your plant care experience level?",
    type: "slider",
    icon: <Plant className="h-6 w-6 text-emerald-600" />,
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 3,
    valueLabel: (value) => {
      return [
        "Beginner (First-time plant parent)",
        "Novice (Have kept a few plants alive)",
        "Intermediate (Comfortable with basic plant care)",
        "Advanced (Successfully care for many plants)",
        "Expert (Extensive knowledge and experience)",
      ][value - 1]
    },
  },
  {
    id: "time",
    question: "How much time can you dedicate to plant care weekly?",
    type: "slider",
    icon: <Clock className="h-6 w-6 text-emerald-600" />,
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 3,
    valueLabel: (value) => {
      return [
        "Minimal (< 15 minutes)",
        "Low (15-30 minutes)",
        "Medium (30-60 minutes)",
        "High (1-2 hours)",
        "Very High (2+ hours)",
      ][value - 1]
    },
  },
]

export default function PlantQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleRadioChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value })
  }

  const handleSliderChange = (value: number[]) => {
    setAnswers({ ...answers, [currentQuestion.id]: value[0] })
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setShowResults(true)
    }
  }

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const restartQuiz = () => {
    setAnswers({})
    setCurrentQuestionIndex(0)
    setShowResults(false)
  }

  if (showResults) {
    return <QuizResults answers={answers} onRestart={restartQuiz} />
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>
            Question {currentQuestionIndex + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="border-emerald-100 dark:border-emerald-800">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            {currentQuestion.icon}
            <CardTitle className="text-2xl">{currentQuestion.question}</CardTitle>
          </div>
          {currentQuestion.description && <CardDescription>{currentQuestion.description}</CardDescription>}
        </CardHeader>
        <CardContent>
          {currentQuestion.type === "radio" && (
            <RadioGroup
              value={answers[currentQuestion.id] || ""}
              onValueChange={handleRadioChange}
              className="space-y-3"
            >
              {currentQuestion.options?.map((option) => (
                <div
                  key={option.value}
                  className={`flex items-start space-x-2 rounded-md border p-3 ${
                    answers[currentQuestion.id] === option.value
                      ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30"
                      : "border-gray-200 dark:border-gray-800"
                  }`}
                >
                  <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor={option.value} className="text-base font-medium">
                      {option.label}
                    </Label>
                    {option.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-400">{option.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </RadioGroup>
          )}

          {currentQuestion.type === "slider" && (
            <div className="space-y-6 pt-4">
              <Slider
                defaultValue={[currentQuestion.defaultValue || currentQuestion.min]}
                min={currentQuestion.min}
                max={currentQuestion.max}
                step={currentQuestion.step}
                value={[answers[currentQuestion.id] || currentQuestion.defaultValue || currentQuestion.min]}
                onValueChange={handleSliderChange}
              />
              <div className="text-center font-medium">
                {currentQuestion.valueLabel &&
                  currentQuestion.valueLabel(
                    answers[currentQuestion.id] || currentQuestion.defaultValue || currentQuestion.min,
                  )}
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={goToPreviousQuestion} disabled={currentQuestionIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" /> Previous
          </Button>
          <Button
            onClick={goToNextQuestion}
            disabled={!answers[currentQuestion.id]}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            {currentQuestionIndex === questions.length - 1 ? "See Results" : "Next"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

