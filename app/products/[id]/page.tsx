import { Suspense } from "react"
import type { Metadata } from "next"
import ProductDetail from "./product-detail"
import ProductDetailSkeleton from "./product-detail-skeleton"
import RelatedProducts from "./related-products"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // In a real app, fetch the product data here
  return {
    title: `Product Details | BloomNest`,
    description: "View detailed information about this product.",
  }
}

export default function ProductPage({ params }: Props) {
  return (
    <div className="container mx-auto px-4 py-8">
      <Suspense fallback={<ProductDetailSkeleton />}>
        <ProductDetail id={params.id} />
      </Suspense>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-green-800 dark:text-green-300">You May Also Like</h2>
        <RelatedProducts currentProductId={params.id} />
      </div>
    </div>
  )
}

