"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

export default function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [ecoFriendly, setEcoFriendly] = useState(false)

  const categories = ["Indoor Plants", "Outdoor Plants", "Pots", "Care Products", "Seeds", "Tools"]

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 100])
    setSelectedCategories([])
    setEcoFriendly(false)
  }

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Filters</h2>
        <Button
          variant="ghost"
          size="sm"
          onClick={clearFilters}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <X className="h-4 w-4 mr-1" /> Clear
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "price"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label
                    htmlFor={category}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0, 100]} max={100} step={1} value={priceRange} onValueChange={setPriceRange} />
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-300">${priceRange[0]}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">${priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="eco">
          <AccordionTrigger>Eco-Friendly</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center space-x-2">
              <Checkbox id="eco-friendly" checked={ecoFriendly} onCheckedChange={() => setEcoFriendly(!ecoFriendly)} />
              <Label
                htmlFor="eco-friendly"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Eco-Friendly Products
              </Label>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
    </div>
  )
}

