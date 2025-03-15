import { Suspense } from "react"
import ProductList from "@/app/products/product-list";
import ProductFilters from "@/app/products/product-filters";
import ProductSkeleton from "@/app/products/product-skeleton";

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Shop Plants & Pots | BloomNest",
  description: "Browse our collection of indoor plants, outdoor plants, self-watering pots, and plant care products.",
}

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2 text-green-800 dark:text-green-300">Shop Plants & Pots</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Browse our collection of indoor plants, outdoor plants, self-watering pots, and plant care products.
      </p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4">
          <ProductFilters />
        </div>
        <div className="lg:w-3/4">
          <Suspense fallback={<ProductSkeleton />}>
            <ProductList />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

