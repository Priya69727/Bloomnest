"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

type Product = {
  id: string
  name: string
  price: number
  image: string
  category: string
}

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    // In a real app, this would fetch from your API
    const fetchProducts = async () => {
      try {
        // Simulating API call with timeout
        setTimeout(() => {
          setProducts([
            {
              id: "1",
              name: "Monstera Deliciosa",
              price: 29.99,
              image: "/placeholder.svg?height=300&width=300",
              category: "Indoor Plants",
            },
            {
              id: "2",
              name: "Self-Watering Ceramic Pot",
              price: 24.99,
              image: "/placeholder.svg?height=300&width=300",
              category: "Pots",
            },
            {
              id: "3",
              name: "Snake Plant",
              price: 19.99,
              image: "/placeholder.svg?height=300&width=300",
              category: "Indoor Plants",
            },
            {
              id: "4",
              name: "Premium Plant Food",
              price: 12.99,
              image: "/placeholder.svg?height=300&width=300",
              category: "Care Products",
            },
          ])
          setLoading(false)
        }, 1000)
      } catch (error) {
        console.error("Error fetching products:", error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addToCart = (product: Product) => {
    // In a real app, this would add to cart state/context
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <Card key={index} className="rounded-lg overflow-hidden">
            <div className="h-64 bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
            <CardContent className="p-4">
              <div className="h-6 bg-gray-200 dark:bg-gray-800 animate-pulse rounded mb-2"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-800 animate-pulse rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
          <Link href={`/products/${product.id}`}>
            <div className="relative h-64 bg-gray-100 dark:bg-gray-800">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              <div className="absolute top-2 right-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                {product.category}
              </div>
            </div>
          </Link>
          <CardContent className="p-4">
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-lg mb-1 hover:text-emerald-600 transition-colors">{product.name}</h3>
            </Link>
            <p className="text-emerald-600 dark:text-emerald-400 font-bold">${product.price.toFixed(2)}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button onClick={() => addToCart(product)} className="w-full bg-emerald-600 hover:bg-emerald-700">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

