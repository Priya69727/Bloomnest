"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ThemeToggle } from "@/components/theme-toggle"
import { ShoppingCart, Menu, X, Search, User, Heart, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="md:hidden mr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium transition-colors hover:text-emerald-600">
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium transition-colors hover:text-emerald-600">
                  Shop
                </Link>
                <Link href="/subscription" className="text-lg font-medium transition-colors hover:text-emerald-600">
                  Subscription
                </Link>
                <Link href="/blog" className="text-lg font-medium transition-colors hover:text-emerald-600">
                  Blog
                </Link>
                <Link href="/quiz" className="text-lg font-medium transition-colors hover:text-emerald-600">
                  Plant Quiz
                </Link>
                <Link href="/dashboard" className="text-lg font-medium transition-colors hover:text-emerald-600">
                  Plant Dashboard
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="font-bold text-xl hidden sm:inline-block">BloomNest</span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex mx-6">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {[
                    {
                      title: "Indoor Plants",
                      href: "/products?category=indoor",
                      description: "Beautiful plants perfect for indoor spaces",
                    },
                    {
                      title: "Outdoor Plants",
                      href: "/products?category=outdoor",
                      description: "Hardy plants for your garden or balcony",
                    },
                    {
                      title: "Self-Watering Pots",
                      href: "/products?category=pots",
                      description: "Innovative pots for hassle-free plant care",
                    },
                    {
                      title: "Plant Care Products",
                      href: "/products?category=care",
                      description: "Everything you need to keep your plants healthy",
                    },
                  ].map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={item.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{item.title}</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{item.description}</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/subscription" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Subscription
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/quiz" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Plant Quiz
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/dashboard" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Plant Dashboard
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center ml-auto gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Search..." className="w-[200px] md:w-[300px]" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <>
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden sm:flex">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Language</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Hindi</DropdownMenuItem>
                  <DropdownMenuItem>Tamil</DropdownMenuItem>
                  <DropdownMenuItem>Bengali</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Wishlist</span>
              </Button>

              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>

              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Cart</span>
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-emerald-600 text-[10px] font-bold text-white flex items-center justify-center">
                  3
                </span>
              </Button>

              <ThemeToggle />
            </>
          )}
        </div>
      </div>
    </header>
  )
}

