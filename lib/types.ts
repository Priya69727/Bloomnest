export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface User {
  id: string
  name: string
  email: string
  image?: string
}

export interface Plant {
  id: string
  name: string
  species: string
  purchaseDate: string
  lastWatered?: string
  wateringSchedule: number // days between watering
  lastFertilized?: string
  fertilizingSchedule: number // days between fertilizing
  light: string
  humidity: string
  temperature: string
  notes?: string
  image: string
}

export interface CartItem {
  productId: string
  quantity: number
  product: Product
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  shippingAddress: Address
  paymentMethod: string
}

export interface Address {
  fullName: string
  addressLine1: string
  addressLine2?: string
  city: string
  state: string
  postalCode: string
  country: string
  phone: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: User
  publishedAt: string
  tags: string[]
}

