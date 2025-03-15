"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Leaf } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function PlantChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your plant care assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "Your Monstera might be getting too much direct sunlight. Try moving it to a spot with bright indirect light.",
        "Yellow leaves on your plant could indicate overwatering. Let the soil dry out between waterings.",
        "For your Snake Plant, water sparingly - about once every 2-3 weeks is usually sufficient.",
        "The brown tips on your plant's leaves might be due to low humidity. Try misting it or using a humidifier.",
        "Spring is a great time to repot your plants as they're entering their growing season.",
        "For your Fiddle Leaf Fig, consistency is key - they don't like changes in their environment.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: Date.now().toString(),
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex flex-col h-[400px] border rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className="flex items-start gap-2 max-w-[80%]">
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700">
                    <Leaf className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
              )}
              <div
                className={`rounded-lg p-3 text-sm ${
                  message.sender === "user" ? "bg-emerald-600 text-white" : "bg-gray-100 dark:bg-gray-800"
                }`}
              >
                <p>{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === "user" ? "text-emerald-100" : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </p>
              </div>
              {message.sender === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start gap-2 max-w-[80%]">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-emerald-100 text-emerald-700">
                  <Leaf className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="rounded-lg p-3 bg-gray-100 dark:bg-gray-800">
                <div className="flex space-x-1">
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce [animation-delay:0.2s]"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-300 dark:bg-gray-600 animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <div className="border-t p-2">
        <div className="flex gap-2">
          <Input
            placeholder="Ask about plant care..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

