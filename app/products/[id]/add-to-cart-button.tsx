"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Minus, Plus } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import type { Product } from "@/lib/types"

export default function AddToCartButton({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const { toast } = useToast()

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full sm:flex-1">
      <div className="flex border rounded-md">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={decreaseQuantity}
          disabled={quantity <= 1}
          className="rounded-r-none"
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </Button>
        <div className="flex items-center justify-center w-12">
          <span className="text-center">{quantity}</span>
        </div>
        <Button type="button" variant="ghost" size="icon" onClick={increaseQuantity} className="rounded-l-none">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </Button>
      </div>
      <Button onClick={addToCart} className="flex-1 bg-emerald-600 hover:bg-emerald-700" size="lg">
        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
      </Button>
    </div>
  )
}

