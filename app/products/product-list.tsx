import type { Product } from "@/lib/types"
import ProductCard from "./product-card"

async function getProducts(): Promise<Product[]> {
  // In a real app, this would fetch from your API with filters
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return [
    {
      id: "1",
      name: "Monstera Deliciosa",
      description: "Popular indoor plant with unique split leaves",
      price: 29.99,
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
    {
      id: "3",
      name: "Snake Plant",
      description: "Low-maintenance plant perfect for beginners",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Indoor Plants",
    },
    {
      id: "4",
      name: "Premium Plant Food",
      description: "Organic fertilizer for healthy plant growth",
      price: 12.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Care Products",
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
      id: "6",
      name: "Hanging Planter",
      description: "Modern macrame hanging planter",
      price: 18.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Pots",
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
      id: "8",
      name: "Plant Mister",
      description: "Brass mister for tropical plants",
      price: 15.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Care Products",
    },
  ]
}

export default async function ProductList() {
  const products = await getProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

