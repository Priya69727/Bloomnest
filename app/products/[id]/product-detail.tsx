import type { Product } from "@/lib/types"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Share2, Star, Truck, Shield, RotateCcw } from "lucide-react"
import AddToCartButton from "./add-to-cart-button"

async function getProduct(id: string): Promise<Product> {
  // In a real app, this would fetch from your API
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return {
    id,
    name: "Monstera Deliciosa",
    description:
      "The Monstera deliciosa, also known as the Swiss Cheese Plant, is famous for its quirky natural leaf holes. These tropical plants are easy to care for and can dramatically improve any interior space.",
    price: 29.99,
    image: "/placeholder.svg?height=600&width=600",
    category: "Indoor Plants",
  }
}

export default async function ProductDetail({ id }: { id: string }) {
  const product = await getProduct(id)

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <div className="sticky top-24">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative aspect-square">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden cursor-pointer border-2 border-transparent hover:border-emerald-500"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
          <div className="mb-4">
            <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{product.category}</span>
            <h1 className="text-3xl font-bold mt-1 text-gray-900 dark:text-gray-100">{product.name}</h1>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-5 w-5 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300">(24 reviews)</span>
          </div>

          <div className="mb-6">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">In stock - usually dispatched within 24 hours</p>
          </div>

          <div className="mb-6">
            <p className="text-gray-700 dark:text-gray-300">{product.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <AddToCartButton product={product} />
            <Button variant="outline" size="lg" className="flex-1">
              <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
            </Button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <Button variant="ghost" size="sm">
              <Share2 className="mr-2 h-4 w-4" /> Share
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Truck className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm">Free shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm">Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <RotateCcw className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-sm">Easy returns</span>
            </div>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="care" className="flex-1">
                Care Guide
              </TabsTrigger>
              <TabsTrigger value="reviews" className="flex-1">
                Reviews
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-gray-700 dark:text-gray-300">
                The Monstera deliciosa, also known as the Swiss Cheese Plant, is famous for its quirky natural leaf
                holes. These tropical plants are easy to care for and can dramatically improve any interior space.
                <br />
                <br />
                Native to the rainforests of Central America, the Monstera deliciosa is a climbing species that uses its
                aerial roots to grow up trees and other plants. In the home, it can be trained to climb a moss pole or
                allowed to trail from a shelf or basket.
              </p>
            </TabsContent>
            <TabsContent value="care" className="pt-4">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Light</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bright, indirect light. Can tolerate some shade but growth may slow.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Water</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Allow soil to dry out between waterings. Water thoroughly when the top 1-2 inches of soil feels dry
                    to the touch. Reduce watering in winter.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Humidity</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Enjoys higher humidity but adapts to normal home conditions. Mist occasionally or place on a pebble
                    tray with water.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Temperature</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Prefers temperatures between 65-85°F (18-29°C). Avoid cold drafts and sudden temperature changes.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-4">
              <div className="space-y-4">
                {[
                  {
                    name: "Aisha P.",
                    date: "2 months ago",
                    rating: 5,
                    comment: "Beautiful plant that arrived in perfect condition. It's already growing new leaves!",
                  },
                  {
                    name: "Raj K.",
                    date: "3 months ago",
                    rating: 4,
                    comment:
                      "Great plant, but shipping took longer than expected. Otherwise very happy with my purchase.",
                  },
                  {
                    name: "Sarah M.",
                    date: "4 months ago",
                    rating: 5,
                    comment:
                      "This is my third plant from BloomNest and they never disappoint. The Monstera is thriving in my living room.",
                  },
                ].map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-0">
                    <div className="flex justify-between mb-2">
                      <div>
                        <span className="font-semibold">{review.name}</span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">{review.date}</span>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{review.comment}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

