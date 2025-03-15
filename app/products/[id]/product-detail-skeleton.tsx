import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDetailSkeleton() {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="md:w-1/2">
        <Skeleton className="aspect-square w-full rounded-lg" />
        <div className="grid grid-cols-4 gap-2 mt-2">
          {[...Array(4)].map((_, index) => (
            <Skeleton key={index} className="aspect-square w-full rounded-lg" />
          ))}
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border">
          <div className="mb-4">
            <Skeleton className="h-4 w-24 mb-2" />
            <Skeleton className="h-8 w-3/4" />
          </div>

          <Skeleton className="h-5 w-32 mb-4" />

          <div className="mb-6">
            <Skeleton className="h-8 w-24 mb-2" />
            <Skeleton className="h-4 w-48" />
          </div>

          <Skeleton className="h-24 w-full mb-6" />

          <div className="flex gap-4 mb-6">
            <Skeleton className="h-12 flex-1" />
            <Skeleton className="h-12 flex-1" />
          </div>

          <Skeleton className="h-8 w-24 mb-6" />

          <div className="grid grid-cols-3 gap-4 mb-6">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
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
              <Skeleton className="h-24 w-full" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

