import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-50 dark:bg-green-950/50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-emerald-600 flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-bold text-xl">BloomNest</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Bringing nature into your home with eco-friendly plants and self-watering pots.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-800 dark:text-green-300">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/products" },
                { name: "Subscription", href: "/subscription" },
                { name: "Plant Quiz", href: "/quiz" },
                { name: "Blog", href: "/blog" },
                { name: "Plant Dashboard", href: "/dashboard" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-800 dark:text-green-300">Customer Service</h3>
            <ul className="space-y-2">
              {[
                { name: "Contact Us", href: "/contact" },
                { name: "FAQs", href: "/faqs" },
                { name: "Shipping & Returns", href: "/shipping" },
                { name: "Track Order", href: "/track-order" },
                { name: "Privacy Policy", href: "/privacy" },
                { name: "Terms & Conditions", href: "/terms" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-green-800 dark:text-green-300">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Subscribe to our newsletter for plant care tips, new arrivals, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-white dark:bg-gray-800" />
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} BloomNest. All rights reserved.
            </p>
            <div className="flex gap-4">
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-8" />
              <img src="/placeholder.svg?height=30&width=50" alt="Payment Method" className="h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

