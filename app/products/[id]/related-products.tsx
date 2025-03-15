import type { Product } from "@/lib/types"
import ProductCard from "../product-card"

async function getRelatedProducts(currentProductId: string): Promise<Product[]> {
  // In a real app, this would fetch related products from your API
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  return [
    {
      id: "3",
      name: "Snake Plant",
      description: "Low-maintenance plant perfect for beginners",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Indoor Plants",
    },
    {
      id: "5",
      name: "Fiddle Leaf Fig",
      description: "Trendy indoor plant with large, violin-shaped leaves",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Indoor Plants",
    },
    {
      id: "7",
      name: "Succulent Collection",
      description: "Set of 3 small succulents",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Indoor Plants",
    },
    {
      id: "2",
      name: "Self-Watering Ceramic Pot",
      description: "Modern design with self-watering system",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Pots",
    },
  ].filter((product) => product.id !== currentProductId)
}

export default async function RelatedProducts({ currentProductId }: { currentProductId: string }) {
  const products = await getRelatedProducts(currentProductId)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

