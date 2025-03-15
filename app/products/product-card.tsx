"use client"

import type { Product } from "@/lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast()
  const [isWishlisted, setIsWishlisted] = useState(false)

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: `${product.name} has been ${isWishlisted ? "removed from" : "added to"} your wishlist.`,
    })
  }

  return (
    <Card className="rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <div className="relative h-64 bg-gray-100 dark:bg-gray-800">
            <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={toggleWishlist}
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <div className="absolute top-2 left-2 bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>
      <CardContent className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 hover:text-emerald-600 transition-colors">{product.name}</h3>
        </Link>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">{product.description}</p>
        <p className="text-emerald-600 dark:text-emerald-400 font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={addToCart} className="w-full bg-emerald-600 hover:bg-emerald-700">
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}

