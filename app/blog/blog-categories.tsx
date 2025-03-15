"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function BlogCategories() {
  const [isExpanded, setIsExpanded] = useState(false)

  const categories = [
    { name: "Indoor Plants", count: 12 },
    { name: "Outdoor Plants", count: 8 },
    { name: "Plant Care", count: 15 },
    { name: "Sustainability", count: 7 },
    { name: "DIY Projects", count: 5 },
    { name: "Plant Propagation", count: 6 },
    { name: "Seasonal Care", count: 9 },
    { name: "Plant Decor", count: 4 },
  ]

  const visibleCategories = isExpanded ? categories : categories.slice(0, 5)

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <ul className="space-y-2">
          {visibleCategories.map((category) => (
            <li key={category.name}>
              <Link
                href={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex justify-between items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                <span>{category.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">({category.count})</span>
              </Link>
            </li>
          ))}
        </ul>
        {categories.length > 5 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center text-sm text-emerald-600 dark:text-emerald-400 mt-4 hover:underline"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-1" /> Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-1" /> Show More
              </>
            )}
          </button>
        )}
      </CardContent>
    </Card>
  )
}

