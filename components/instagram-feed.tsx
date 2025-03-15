export default function InstagramFeed() {
  // In a real app, this would fetch from Instagram API
  const instagramPosts = [
    { id: 1, image: "/placeholder.svg?height=300&width=300" },
    { id: 2, image: "/placeholder.svg?height=300&width=300" },
    { id: 3, image: "/placeholder.svg?height=300&width=300" },
    { id: 4, image: "/placeholder.svg?height=300&width=300" },
    { id: 5, image: "/placeholder.svg?height=300&width=300" },
    { id: 6, image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {instagramPosts.map((post) => (
        <div
          key={post.id}
          className="aspect-square bg-cover bg-center rounded-lg overflow-hidden hover:opacity-90 transition-opacity cursor-pointer"
          style={{ backgroundImage: `url(${post.image})` }}
        ></div>
      ))}
    </div>
  )
}

