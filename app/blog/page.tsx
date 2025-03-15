import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import BlogCategories from "./blog-categories"

export const metadata: Metadata = {
  title: "Plant Care Blog | BloomNest",
  description: "Articles on plant care, sustainability, and home gardening tips.",
}

export default function BlogPage() {
  // Mock blog posts data
  const posts = [
    {
      id: "1",
      title: "10 Low-Maintenance Plants for Busy People",
      excerpt: "Discover plants that thrive on neglect and are perfect for those with busy lifestyles.",
      coverImage: "/placeholder.svg?height=300&width=600",
      publishedAt: "2023-04-01",
      author: {
        name: "Priya Sharma",
        image: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Beginner Friendly", "Indoor Plants"],
    },
    {
      id: "2",
      title: "The Ultimate Guide to Self-Watering Pots",
      excerpt: "Learn how self-watering pots work and why they're a game-changer for plant parents.",
      coverImage: "/placeholder.svg?height=300&width=600",
      publishedAt: "2023-03-15",
      author: {
        name: "Rahul Patel",
        image: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Plant Care", "Products"],
    },
    {
      id: "3",
      title: "How to Create a Sustainable Indoor Garden",
      excerpt: "Tips for creating an eco-friendly indoor garden using sustainable practices.",
      coverImage: "/placeholder.svg?height=300&width=600",
      publishedAt: "2023-02-28",
      author: {
        name: "Ananya Gupta",
        image: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Sustainability", "Indoor Garden"],
    },
    {
      id: "4",
      title: "Seasonal Plant Care: Spring Edition",
      excerpt: "Everything you need to know about caring for your plants during spring.",
      coverImage: "/placeholder.svg?height=300&width=600",
      publishedAt: "2023-02-10",
      author: {
        name: "Vikram Singh",
        image: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Seasonal Care", "Plant Care"],
    },
    {
      id: "5",
      title: "Troubleshooting Common Plant Problems",
      excerpt: "Identify and fix the most common issues that affect houseplants.",
      coverImage: "/placeholder.svg?height=300&width=600",
      publishedAt: "2023-01-25",
      author: {
        name: "Priya Sharma",
        image: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Plant Health", "Troubleshooting"],
    },
    {
      id: "6",
      title: "The Benefits of Plants in Your Home Office",
      excerpt: "How plants can improve productivity, reduce stress, and purify the air in your workspace.",
      coverImage: "/placeholder.svg?height=300&width=600",
      publishedAt: "2023-01-10",
      author: {
        name: "Rahul Patel",
        image: "/placeholder.svg?height=40&width=40",
      },
      tags: ["Wellness", "Home Office"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-800 dark:text-green-300">Plant Care Blog</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover tips, guides, and inspiration for your plant journey.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${post.coverImage})` }}></div>
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-xl font-bold mb-2 hover:text-emerald-600 transition-colors">{post.title}</h2>
                  </Link>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={post.author.image} alt={post.author.name} />
                        <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{post.author.name}</span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    variant="outline"
                    className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950"
                  >
                    <Link href={`/blog/${post.id}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="mr-2">
              Previous
            </Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>

        <div className="md:w-1/4 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input placeholder="Search articles..." className="pl-10" />
          </div>

          <BlogCategories />

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Get the latest plant care tips and articles delivered to your inbox.
              </p>
              <Input placeholder="Your email" className="mb-4" />
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Subscribe</Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Indoor Plants",
                  "Plant Care",
                  "Sustainability",
                  "Beginner Friendly",
                  "Seasonal Care",
                  "Plant Health",
                  "Wellness",
                  "Products",
                ].map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full hover:bg-emerald-100 hover:text-emerald-800 dark:hover:bg-emerald-900 dark:hover:text-emerald-100 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

